import express from 'express';
import { PrismaClient } from '../generated/prisma/index.js';

import slugify from 'slugify';

const router = express.Router();
const prisma = new PrismaClient();

// Get all published posts with pagination
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const skip = (page - 1) * limit;
    const category = req.query.category;
    const tag = req.query.tag;
    const search = req.query.search;

    let where = { status: 'PUBLISHED' };

    if (category) {
      where.categories = {
        some: {
          slug: category
        }
      };
    }

    if (tag) {
      where.tags = {
        some: {
          slug: tag
        }
      };
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } }
      ];
    }

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              username: true,
              avatar: true
            }
          },
          categories: true,
          tags: true,
          _count: {
            select: {
              likes: true,
              comments: true
            }
          }
        },
        orderBy: { publishedAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.post.count({ where })
    ]);

    res.json({
      success: true,
      data: {
        posts,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch posts' 
    });
  }
});

// Get single post by slug
router.get('/:slug', async (req, res) => {
  try {
    const post = await prisma.post.findFirst({
      where: {
        slug: req.params.slug,
        status: 'PUBLISHED'
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            username: true,
            avatar: true,
            bio: true
          }
        },
        categories: true,
        tags: true,
        _count: {
          select: {
            likes: true,
            comments: true
          }
        }
      }
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'Post not found'
      });
    }

    // Increment view count
    await prisma.post.update({
      where: { id: post.id },
      data: { views: { increment: 1 } }
    });

    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch post'
    });
  }
});

// Get featured posts (for homepage)
router.get('/featured/latest', async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        author: {
          select: {
            name: true,
            username: true,
            avatar: true
          }
        },
        categories: true
      },
      orderBy: { publishedAt: 'desc' },
      take: 6
    });

    res.json({
      success: true,
      data: posts
    });
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch featured posts'
    });
  }
});

// Get popular posts
router.get('/featured/popular', async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        author: {
          select: {
            name: true,
            username: true,
            avatar: true
          }
        },
        categories: true
      },
      orderBy: { views: 'desc' },
      take: 4
    });

    res.json({
      success: true,
      data: posts
    });
  } catch (error) {
    console.error('Error fetching popular posts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch popular posts'
    });
  }
});

export default router;