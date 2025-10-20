import { PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@riwaq.com' },
    update: {},
    create: {
      email: 'admin@riwaq.com',
      name: 'Admin User',
      username: 'admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'quran-studies' },
      update: {},
      create: {
        name: 'Quran Studies',
        slug: 'quran-studies',
        description: 'Deep dive into Quranic teachings and interpretations',
        color: '#10B981',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'islamic-knowledge' },
      update: {},
      create: {
        name: 'Islamic Knowledge',
        slug: 'islamic-knowledge',
        description: 'Essential Islamic teachings and principles',
        color: '#3B82F6',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'prophet-stories' },
      update: {},
      create: {
        name: 'Prophet Stories',
        slug: 'prophet-stories',
        description: 'Inspiring stories of the prophets',
        color: '#8B5CF6',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'spiritual-growth' },
      update: {},
      create: {
        name: 'Spiritual Growth',
        slug: 'spiritual-growth',
        description: 'Guidance for spiritual development',
        color: '#F59E0B',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'daily-life' },
      update: {},
      create: {
        name: 'Daily Life',
        slug: 'daily-life',
        description: 'Islamic guidance for everyday life',
        color: '#EF4444',
      },
    }),
  ]);

  // Create or update sample posts
  const posts = await Promise.all([
    prisma.post.upsert({
      where: { slug: 'importance-of-understanding-quran' },
      update: {},
      create: {
        title: 'The Importance of Understanding Quran in Modern Life',
        slug: 'importance-of-understanding-quran',
        content: `# The Importance of Understanding Quran in Modern Life

In today's fast-paced world, the Quran remains a timeless guide for humanity...`,
        excerpt:
          'Discover how understanding the Quran provides guidance and solutions for contemporary challenges while strengthening faith in modern times.',
        author: { connect: { id: admin.id } },
        metaTitle: 'Understanding Quran in Modern Life - Riwaq Al Quran',
        metaDescription:
          'Learn why understanding the Quran is essential for navigating modern challenges and finding true purpose in contemporary life.',
        metaKeywords: [
          'quran',
          'islam',
          'modern life',
          'guidance',
          'spirituality',
        ],
        readingTime: 6,
        publishedAt: new Date('2023-12-01'),
        status: 'PUBLISHED',
        featuredImage: '/images/quran-modern-life.jpg',

        // ✅ Correct relation for MongoDB schema
        categoriesLinks: {
          create: [
            { category: { connect: { id: categories[0].id } } },
            { category: { connect: { id: categories[1].id } } },
          ],
        },
        tagsLinks: {
          create: [
            {
              tag: {
                connectOrCreate: {
                  where: { slug: 'quran' },
                  create: { name: 'Quran', slug: 'quran' },
                },
              },
            },
            {
              tag: {
                connectOrCreate: {
                  where: { slug: 'guidance' },
                  create: { name: 'Guidance', slug: 'guidance' },
                },
              },
            },
            {
              tag: {
                connectOrCreate: {
                  where: { slug: 'modern-life' },
                  create: { name: 'Modern Life', slug: 'modern-life' },
                },
              },
            },
          ],
        },
      },
    }),

    prisma.post.upsert({
      where: { slug: 'prophet-muhammad-lessons-for-today' },
      update: {},
      create: {
        title: 'The Story of Prophet Muhammad: Lessons for Today',
        slug: 'prophet-muhammad-lessons-for-today',
        content: `# The Story of Prophet Muhammad: Lessons for Today

The life of Prophet Muhammad (peace be upon him)...`,
        excerpt:
          "Explore the timeless wisdom from Prophet Muhammad's life and how his teachings provide practical guidance for contemporary challenges.",
        author: { connect: { id: admin.id } },
        metaTitle: 'Prophet Muhammad Life Lessons - Riwaq Al Quran',
        metaDescription:
          "Discover practical lessons from Prophet Muhammad's life that remain relevant for modern challenges and personal development.",
        metaKeywords: [
          'prophet muhammad',
          'islam',
          'leadership',
          'compassion',
          'guidance',
        ],
        readingTime: 5,
        publishedAt: new Date('2023-11-28'),
        status: 'PUBLISHED',
        featuredImage: '/images/prophet-muhammad.jpg',

        // ✅ Correct relation fields
        categoriesLinks: {
          create: [
            { category: { connect: { id: categories[2].id } } },
            { category: { connect: { id: categories[3].id } } },
          ],
        },
        tagsLinks: {
          create: [
            {
              tag: {
                connectOrCreate: {
                  where: { slug: 'prophet-muhammad' },
                  create: {
                    name: 'Prophet Muhammad',
                    slug: 'prophet-muhammad',
                  },
                },
              },
            },
            {
              tag: {
                connectOrCreate: {
                  where: { slug: 'leadership' },
                  create: { name: 'Leadership', slug: 'leadership' },
                },
              },
            },
            {
              tag: {
                connectOrCreate: {
                  where: { slug: 'compassion' },
                  create: { name: 'Compassion', slug: 'compassion' },
                },
              },
            },
          ],
        },
      },
    }),
  ]);

  console.log('✅ Database seeded successfully!');
  console.log(`📊 Created:
  - 1 admin user
  - ${categories.length} categories
  - ${posts.length} sample posts`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
