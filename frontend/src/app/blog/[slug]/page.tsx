'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import '@/styles/blog.css'
import React from 'react'

export default function BlogPostPage() {
  const { slug } = useParams()

  const blogPosts: Record<string, { 
    title: string, 
    image: string, 
    content: React.ReactNode
  }> = {
    'quranic-studies': {
      title: 'Understanding Quranic Studies',
      image: '/images/pic1.jpg',
      content: (
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">1. Introduction to Quranic Studies</h2>
            <p>
              Quranic Studies is the academic and spiritual exploration of the Qur’an — the divine book revealed to Prophet Muhammad (ﷺ). 
              It involves studying the historical context of revelation, linguistic style, and thematic depth of the Qur’an. 
              This field helps Muslims and scholars alike to better understand the guidance, laws, and timeless wisdom within its verses.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">2. Importance of Quranic Studies</h2>
            <p>
              Engaging in Quranic Studies deepens one’s connection with Allah’s message. It enhances recitation, interpretation, and implementation of divine guidance in daily life. 
              Through it, readers gain clarity on the Qur’an’s moral, legal, and spiritual teachings.
            </p>
            <ul className="list-disc list-inside">
              <li>It reveals the historical background of each revelation (Asbab al-Nuzul).</li>
              <li>It connects linguistic understanding with divine intent.</li>
              <li>It strengthens one’s faith through reflection and comprehension.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">3. Key Branches of Quranic Studies</h2>
            <ul className="list-disc list-inside">
              <li><strong>Tafsir (Exegesis):</strong> Explains meanings and contexts of verses.</li>
              <li><strong>Ulum al-Qur’an:</strong> Studies the sciences of revelation, compilation, and preservation.</li>
              <li><strong>Balagha (Rhetoric):</strong> Focuses on the eloquence and linguistic beauty of the Qur’an.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">4. Conclusion</h2>
            <p>
              Quranic Studies is more than an academic pursuit—it’s a spiritual journey that brings one closer to the words of Allah. 
              By understanding its sciences, readers gain a deeper appreciation of the Qur’an’s divine perfection and eternal relevance.
            </p>
          </div>
        </div>
      )
    },

    'arabic-language': {
      title: 'History of Arabic Language',
      image: '/images/pic2.jpg',
      content: (
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">1. Origins of the Arabic Language</h2>
            <p>
              The Arabic language is one of the oldest living languages in the world, originating in the Arabian Peninsula over 1,500 years ago. 
              It evolved from earlier Semitic languages, sharing roots with Hebrew and Aramaic. 
              The earliest form, known as Classical Arabic, reached its peak through the revelation of the Qur’an.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">2. Arabic Before Islam</h2>
            <p>
              Before the revelation of the Qur’an, Arabic poetry and oral expression flourished in Arabia. 
              Poets were regarded as the intellectuals of their time, preserving history and culture through verses. 
              This literary richness laid the foundation for the Qur’an’s linguistic miracle.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">3. Arabic in the Islamic Era</h2>
            <p>
              With the advent of Islam, Arabic became the language of religion, law, and science across vast empires. 
              The Qur’an standardized and preserved the Arabic language, elevating it to a sacred status. 
              Scholars, poets, and scientists from diverse regions used Arabic for centuries as a universal medium of knowledge.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">4. Modern Arabic</h2>
            <p>
              Today, Arabic is spoken by over 400 million people across more than 25 countries. 
              It exists in two main forms: <strong>Classical Arabic</strong> (used in the Qur’an and literature) and <strong>Modern Standard Arabic</strong> (used in education and media). 
              Despite regional dialects, the Qur’an continues to unify the Arabic-speaking world linguistically and spiritually.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">5. Conclusion</h2>
            <p>
              The history of Arabic is a story of divine preservation, cultural identity, and linguistic excellence. 
              Its endurance and influence across centuries testify to its beauty and depth—qualities perfected through the words of the Qur’an.
            </p>
          </div>
        </div>
      )
    },

    'learning-tajweed-basics': {
      title: 'Learning Tajweed Basics',
      image: '/images/pic4.jpg',
      content: (
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">1. Introduction to Tajweed</h2>
            <p>
              Tajweed refers to the proper pronunciation and articulation of the Qur’anic letters during recitation. 
              The word “Tajweed” comes from the Arabic root <em>jawwada</em>, meaning “to make better.” 
              Learning Tajweed ensures that the Qur’an is recited as it was revealed to the Prophet Muhammad (ﷺ), preserving its sound, rhythm, and meaning.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">2. Importance of Tajweed</h2>
            <p>
              Tajweed is essential for maintaining the sanctity and accuracy of Qur’anic recitation. 
              Even small pronunciation errors can alter meanings. 
              Allah commands believers to recite the Qur’an correctly in Surah Al-Muzzammil (73:4): 
              <strong>“Recite the Qur’an with measured recitation.”</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>Preserves the meaning of the Qur’an.</li>
              <li>Enhances spiritual connection during recitation.</li>
              <li>Reflects respect and love for Allah’s words.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">3. Basic Rules of Tajweed</h2>
            <ul className="list-disc list-inside">
              <li><strong>Makharij al-Huruf (Articulation Points):</strong> Knowing where each letter originates from in the mouth or throat.</li>
              <li><strong>Sifaat al-Huruf (Characteristics):</strong> Recognizing the unique sound properties of each letter.</li>
              <li><strong>Ghunnah:</strong> The nasal sound made in letters such as “م” (Meem) and “ن” (Noon).</li>
              <li><strong>Madd (Prolongation):</strong> Extending certain vowels for a set duration (2, 4, or 6 counts).</li>
              <li><strong>Qalqalah:</strong> Echoing sound that occurs in letters like “ق”, “ط”, “ب”, “ج”, “د”.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">4. Steps to Learn Tajweed</h2>
            <ul className="list-disc list-inside">
              <li>Start by learning the Arabic alphabet and correct letter articulation.</li>
              <li>Study with a qualified Qur’an teacher to practice recitation.</li>
              <li>Listen to expert Qaris and imitate their pronunciation.</li>
              <li>Regularly revise and recite aloud for self-correction.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="blog-section-heading">5. Conclusion</h2>
            <p>
              Tajweed transforms Qur’an recitation into a heartfelt act of worship. 
              It connects the reciter deeply with the divine message, beautifies speech, and ensures that the Qur’an remains recited with precision and reverence, just as it was revealed.
            </p>
          </div>
        </div>
      )
    },

    'quranic-grammar': {
      title: 'Quranic Grammar Explained',
      image: '/images/pic3.jpg',
      content: (
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="blog-section-heading">1. Introduction to Quranic Grammar</h2>
            <p>
              Quranic grammar, also known as Nahw and Sarf, is the study of the rules and structure of the Arabic language as used in the Qur’an. 
              Unlike general Arabic grammar, Quranic grammar focuses on the precise meanings, forms, and structures found in the sacred text.
            </p>
          </div>
        </div>
      )
    }
  }

  const post = blogPosts[slug as string]

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Post Not Found</h1>
        <Link href="/blog" className="text-green-600 underline">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <Header />

      <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6 text-center">
            <Link href="/" className="hover:text-green-600">Home</Link> &nbsp;/&nbsp;
            <Link href="/blog" className="hover:text-green-600">Blog</Link> &nbsp;/&nbsp;
            <span className="text-black font-medium">{post.title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">{post.title}</h1>

          {/* Image */}
          <div className="image-container mb-8 flex justify-center">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full max-w-3xl h-auto md:h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="prose max-w-none text-gray-700 leading-relaxed text-lg mb-10 text-justify">
            {post.content}
          </div>

          {/* Back to blog */}
          <div className="text-center mt-10">
            <Link 
              href="/blog"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
