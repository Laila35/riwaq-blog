'use client'

import Header from '@/components/Header'
import { useState } from 'react'
import '@/styles/blog.css'
import React from 'react'
import '@/styles/testimonial.css'
import '@/styles/footer-section.css';

// Country data with flags and codes
const countries = [
  { code: '+93', flag: '🇦🇫', name: 'Afghanistan' },
  { code: '+355', flag: '🇦🇱', name: 'Albania' },
  { code: '+213', flag: '🇩🇿', name: 'Algeria' },
  { code: '+376', flag: '🇦🇩', name: 'Andorra' },
  { code: '+244', flag: '🇦🇴', name: 'Angola' },
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+92', flag: '🇵🇰', name: 'Pakistan' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
  // Add more countries as needed
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPost, setSelectedPost] = useState<any>(null)

  // === Blog Post Data ===
  const allPosts = [
    {
      slug: 'learning-tajweed-basics',
      title: 'Learning Tajweed Basics',
      image: '/images/pic1.jpg',
      date: 'Jul 15, 2025',
      category: 'ILM QURAAN',
      content: (
        <div className="space-y-6">
          <h2 className="blog-section-heading">1. Introduction to Tajweed</h2>
          <p>
            Tajweed refers to the proper pronunciation and articulation of the Qur'anic letters during recitation. 
            The word "Tajweed" comes from the Arabic root <em>jawwada</em>, meaning "to make better." 
            Learning Tajweed ensures that the Qur'an is recited as it was revealed to the Prophet Muhammad (ﷺ), 
            preserving its sound, rhythm, and meaning.
          </p>

          <h2 className="blog-section-heading">2. Importance of Tajweed</h2>
          <p>
            Tajweed is essential for maintaining the sanctity and accuracy of Qur'anic recitation. 
            Even small pronunciation errors can alter meanings. Allah commands believers to recite the Qur'an correctly in Surah Al-Muzzammil (73:4): 
            <strong> "Recite the Qur'an with measured recitation."</strong>
          </p>
        </div>
      )
    },
    {
      slug: 'arabic-language',
      title: 'History of Arabic Language',
      image: '/images/pic2.jpg',
      date: 'Jul 20, 2025',
      category: 'ILM QURAAN',
      content: (
        <div className="space-y-6">
          <h2 className="blog-section-heading">1. Origins of the Arabic Language</h2>
          <p>
            The Arabic language is one of the oldest living languages in the world, originating in the Arabian Peninsula over 1,500 years ago. 
            It evolved from earlier Semitic languages, sharing roots with Hebrew and Aramaic. 
            The earliest form, known as Classical Arabic, reached its peak through the revelation of the Qur'an.
          </p>
        </div>
      )
    },
    {
      slug: 'quranic-grammar',
      title: 'Quranic Grammar Explained',
      image: '/images/pic3.jpg',
      date: 'Jul 25, 2025',
      category: 'ILM QURAAN',
      content: (
        <div className="space-y-6">
          <h2 className="blog-section-heading">1. Introduction to Quranic Grammar</h2>
          <p>
            Quranic grammar, also known as Nahw and Sarf, is the study of the Arabic language 
            structure used in the Qur'an. Unlike general Arabic grammar, it focuses on divine 
            precision and meaning.
          </p>
        </div>
      )
    }
  ]

  const [results, setResults] = useState(allPosts)

  // === Search Functionality ===
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setResults(allPosts)
      return
    }

    const filtered = allPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      JSON.stringify(post.content.props.children)
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    setResults(filtered)
  }

  // === Individual Post View ===
  if (selectedPost) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg">
            <nav className="text-sm text-gray-600 mb-6 text-center">
              <button onClick={() => setSelectedPost(null)} className="hover:text-green-600">
                ← Back to Blog
              </button>
            </nav>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">{selectedPost.title}</h1>
            <div className="flex justify-center mb-8">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full max-w-3xl h-auto md:h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="prose max-w-none text-gray-700 leading-relaxed text-lg mb-10 text-justify">
              {selectedPost.content}
            </div>
            <div className="text-center mt-10">
              <button 
                onClick={() => setSelectedPost(null)} 
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
              >
                Back to Blog
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  // === Blog List Page ===
  return (
    <>
      <Header />

      {/* BLOG SECTION */}
      <section className="blog-section">
        <div className="blog-content">
          <div className="blog-text">
            <h1 className="blog-title">Blog</h1>
            <p className="blog-description">
              Explore our insightful blog, where we share valuable articles, resources, and insights on Quran, Arabic, and Islamic studies.
            </p>

            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>

          <div className="quran-image">
            <img 
              src="/images/quran1.png" 
              alt="Quran" 
              className="w-full max-w-md rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl animate-bounce-slow"
              style={{ maxHeight: '300px', objectFit: 'contain' }} 
            />
          </div>
        </div>

        <div className="blog-cards">
          {results.map((post, index) => (
            <div className="card" key={index}>
              <img src={post.image} alt={post.title} />
              <div className="card-meta">
                <span className="meta-admin text-yellow-500">👤 By Admin</span>
                <span className="green-dot">•</span>
                <span className="meta-category">{post.category}</span>
                <span className="green-dot">•</span>
                <span className="meta-date">{post.date}</span>
              </div>
              <h3 className="card-title">{post.title}</h3>
              <p>Discover more...</p>
              <button 
                onClick={() => setSelectedPost(post)} 
                className="read-more-btn"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section
        className="testimonial-section"
        style={{
          backgroundImage: "url('/images/graphics.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="testimonial-overlay">
          <h3 className="testimonial-heading">TESTIMONIAL</h3>
          <h2 className="testimonial-subheading">What Our Students Say </h2>

          <div className="testimonial-slider">
            <div className="testimonial-track">
              {[
                { name: 'Ayesha K. – Karachi', role: 'Student', stars: 5, text: 'Learning at Ilm Quraan has completely changed my understanding of Tajweed. The tutors are amazing!' },
                { name: 'Bilal R. – Lahore', role: 'Father', stars: 5, text: 'My son improved his recitation within weeks. I\'m very satisfied with the one-on-one classes.' },
                { name: 'Fatima S. – Islamabad', role: 'Student', stars: 5, text: 'Classes are interactive and well-structured. My teacher motivates me every session!' },
                { name: 'Ahmed N. – Multan', role: 'Student', stars: 5, text: 'I have learned so much about Quranic pronunciation. Highly recommend Ilm Quraan!' },
                { name: 'Zainab T. – Faisalabad', role: 'Mother', stars: 5, text: 'The best online Quran classes. My kids are learning with joy!' },
                { name: 'Hassan A. – Rawalpindi', role: 'Student', stars: 5, text: 'My recitation improved tremendously. The teachers are patient and skilled.' },
              ].map((student, index) => (
                <div key={index} className="testimonial-card">
                  <img src="/images/logo.png" alt="Logo" className="testimonial-logo" />
                  <h4 className="testimonial-name">{student.name}</h4>
                  <p className="testimonial-role">
                    {student.role} | <span className="testimonial-stars">{'★'.repeat(student.stars)}</span>
                  </p>
                  <p className="testimonial-text">"{student.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     

     {/* AFTER TESTIMONIAL SECTION */}
<section className="footer-section">
  <div className="footer-overlay">
    <div className="footer-container">

      {/* ABOUT US */}
      <div className="footer-column">
        <h3>About Us</h3>
        <ul>
          {[
            { label: 'Home', link: '/' },
            { label: 'About Us', link: '/about' },
            { label: 'Contact Us', link: '/contact' },
            { label: 'Customer Service', link: '/customer-service' },
            { label: 'Register Now', link: '/register' },
            { label: 'Fee and Schedule Plan', link: '/fees' },
            { label: 'Online Courses', link: '/courses' },
            { label: 'Privacy Policy', link: '/privacy' },
            { label: 'Certificate of Appraisal', link: '/certificate' },
            { label: 'Downloads', link: '/downloads' }
          ].map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  display: 'inline-block'
                }}
              ></span>
              <button
                onClick={() => window.open(item.link, '_blank')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  textAlign: 'left'
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* REGULAR COURSES */}
      <div className="footer-column">
        <h3>Regular Courses</h3>
        <ul>
          {[
            { label: 'Learn Noorani Qaida Online', link: '/courses/noorani-qaida' },
            { label: 'Quran Reading with Tajweed', link: '/courses/tajweed' },
            { label: 'Memorize Quran Online', link: '/courses/memorize-quran' },
            { label: 'Learn Tafsir Online', link: '/courses/tafsir' },
            { label: 'Learn Arabic Online', link: '/courses/arabic' },
            { label: 'Learn Islamic Studies Online', link: '/courses/islamic-studies' },
            { label: 'Taleem ul Islam', link: '/courses/taleem-ul-islam' },
            { label: 'Quran Translation Course', link: '/courses/translation' },
            { label: 'Online Ijazah Course', link: '/courses/ijazah' },
            { label: 'Quranic Arabic Course', link: '/courses/quranic-arabic' }
          ].map((course, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  display: 'inline-block'
                }}
              ></span>
              <button
                onClick={() => window.open(course.link, '_blank')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  textAlign: 'left'
                }}
              >
                {course.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* SHORT COURSES */}
      <div className="footer-column">
        <h3>Short Courses</h3>
        <ul>
          {[
            { label: 'Memorization of Selected Surahs', link: '/courses/selected-surahs' },
            { label: 'Learn Daily Supplication Online', link: '/courses/supplications' },
            { label: 'Pillars of Islam', link: '/courses/pillars' },
            { label: 'Revert to Islam', link: '/courses/revert' },
            { label: 'Seerah (Life of Muhammad)', link: '/courses/seerah' },
            { label: 'Aqeedah (Islamic Beliefs)', link: '/courses/aqeedah' },
            { label: 'Islamic History', link: '/courses/history' },
            { label: 'Ramadan Special Courses', link: '/courses/ramadan' },
            { label: 'The Companions of Muhammad', link: '/courses/companions' },
            { label: 'Stories of the Prophets', link: '/courses/prophets' }
          ].map((course, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  display: 'inline-block'
                }}
              ></span>
              <button
                onClick={() => window.open(course.link, '_blank')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  textAlign: 'left'
                }}
              >
                {course.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* GET IN TOUCH FORM (unchanged) */}
      <div className="footer-form">
        <h3 style={{ textAlign: 'center' }}>Get in Touch</h3>
        <form>
          <div className="input-with-icon">
            <span className="input-icon" style={{ color: 'white' }}>👤</span>
            <input type="text" placeholder="Enter your name" />
          </div>
          
          <div className="input-with-icon">
            <span className="input-icon">✉️</span>
            <input type="email" placeholder="Enter your email" />
          </div>
          <select className="country-code-select">
  {countries.map((country) => (
    <option key={`${country.name}-${country.code}`} value={country.code}>
      {country.flag} {country.code}
    </option>
  ))}
</select>

<select>
  {countries.map((country) => (
    <option key={`${country.name}-${country.code}`} value={country.name}>
      {country.name}
    </option>
  ))}
</select>

          
          <div className="textarea-with-icon">
            <span className="textarea-icon">💬</span>
            <textarea placeholder="Enter your message" rows={3}></textarea>
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</section>
 {/* COPYRIGHT FOOTER SECTION */}
      <footer className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="IlmulQuran Logo" />
          </div>

          <div className="footer-text">
            <p>© 2025 <strong>IlmulQuran Online Academy</strong> - Your Future Campus LTD</p>
            <p>
              IlmulQuran Online Academy, Operated by Your Future Campus LTD, London, UK. 
              All materials are protected by copyright.
            </p>
            <p className="footer-subtext">YOUR FUTURE CAMPUS (SMC-PRIVATE) LIMITED</p>
          </div>
        </div>
      </footer>
    </>
  )
}