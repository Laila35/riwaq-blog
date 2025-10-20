import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const router = express.Router();
const prisma = new PrismaClient();

// Get user profile
router.get('/:username', async (req, res) => {
  try {
    const user = await prisma.user.findFirst({
      where: { 
        username: req.params.username 
      },
      select: {
        id: true,
        name: true,
        username: true,
        avatar: true,
        bio: true,
        createdAt: true,
        posts: {
          where: { status: 'PUBLISHED' },
          include: {
            categories: true,
            _count: {
              select: {
                likes: true,
                comments: true
              }
            }
          },
          orderBy: { publishedAt: 'desc' }
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

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch user'
    });
  }
});

export default router;