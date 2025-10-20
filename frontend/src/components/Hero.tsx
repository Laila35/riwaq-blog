import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-green-100 section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Trusted Islamic Knowledge Source
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Authentic{' '}
              <span className="text-green-600">Islamic</span>{' '}
              Knowledge
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore comprehensive Quran studies, prophet stories, and spiritual guidance through our carefully curated articles. 
              Join thousands of readers on their journey to deeper understanding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog" className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2">
                Explore Articles
                <ArrowRight size={20} />
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4 text-center">
                Learn More
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600 flex items-center justify-center gap-1">
                  <BookOpen size={16} />
                  Articles
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">50K+</div>
                <div className="text-gray-600 flex items-center justify-center gap-1">
                  <Users size={16} />
                  Readers
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-600">Years</div>
              </div>
            </div>
          </div>
          
          {/* Image/Graphic */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                <div className="text-center mb-4">
                  <div className="text-4xl font-arabic mb-2">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
                  <p className="text-green-100">In the name of Allah, the Most Gracious, the Most Merciful</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-green-600 font-bold text-lg">Quran</div>
                  <div className="text-gray-600 text-sm">Studies</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-blue-600 font-bold text-lg">Prophet</div>
                  <div className="text-gray-600 text-sm">Stories</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-purple-600 font-bold text-lg">Spiritual</div>
                  <div className="text-gray-600 text-sm">Growth</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-orange-600 font-bold text-lg">Daily</div>
                  <div className="text-gray-600 text-sm">Life</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}