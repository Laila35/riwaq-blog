'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BookOpen, Users, Star, Heart } from 'lucide-react'

interface Category {
  id: string
  name: string
  slug: string
  description?: string
  color?: string
  _count: {
    posts: number
  }
}

const iconMap = {
  'quran-studies': BookOpen,
  'islamic-knowledge': Star,
  'prophet-stories': Users,
  'spiritual-growth': Heart,
  'daily-life': BookOpen,
}

export default function CategoriesSection() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/categories')
        const data = await response.json()
        
        if (data.success) {
          setCategories(data.data)
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (loading) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Browse Categories</h2>
            <p className="text-xl text-gray-600">Explore articles by topic</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="card p-6 text-center animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Browse Categories</h2>
          <p className="text-xl text-gray-600">Explore articles by topic</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const IconComponent = iconMap[category.slug as keyof typeof iconMap] || BookOpen;
            
            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="card p-6 text-center group hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: category.color || '#10B981' }}
                >
                  <IconComponent size={24} />
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {category.description}
                </p>
                
                <div className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1 inline-block">
                  {category._count.posts} articles
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}