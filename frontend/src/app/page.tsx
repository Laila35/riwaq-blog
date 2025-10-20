import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedPosts from '@/components/FeaturedPosts'
import CategoriesSection from '@/components/CategoriesSection'
import PopularPosts from '@/components/PopularPosts'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedPosts />
        <CategoriesSection />
        <PopularPosts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
