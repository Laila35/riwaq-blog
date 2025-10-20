import express from 'express';
import { PrismaClient } from '../generated/prisma/index.js';
const router = express.Router();
const prisma = new PrismaClient();

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: {
            posts: {
              where: { status: 'PUBLISHED' }
            }
          }
        }
      },
      orderBy: { name: 'asc' }
    });

    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories'
    });
  }
});

// Get category by slug with posts
router.get('/:slug', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const skip = (page - 1) * limit;

    const category = await prisma.category.findFirst({
      where: { slug: req.params.slug },
      include: {
        posts: {
          where: { status: 'PUBLISHED' },
          include: {
            author: {
              select: {
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
        },
        _count: {
          select: {
            posts: {
              where: { status: 'PUBLISHED' }
            }
          }
        }
      }
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        error: 'Category not found'
      });
    }

    res.json({
      success: true,
      data: {
        category,
        posts: category.posts,
        pagination: {
          page,
          limit,
          total: category._count.posts,
          pages: Math.ceil(category._count.posts / limit)
        }
      }
    });
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch category'
    });
  }
});

export default router;