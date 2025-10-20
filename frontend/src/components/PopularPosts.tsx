'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Calendar, Eye, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  views: number
  categories: Array<{
    id: string
    name: string
    slug: string
    color?: string
  }>
}

export default function PopularPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts/featured/popular')
        const data = await response.json()
        
        if (data.success) {
          setPosts(data.data)
        }
      } catch (error) {
        console.error('Error fetching popular posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPopularPosts()
  }, [])

  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Most Popular</h2>
            <p className="text-xl text-gray-600">Articles loved by our readers</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-4 animate-pulse">
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Most Popular</h2>
          <p className="text-xl text-gray-600">Articles loved by our readers</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="flex gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200"
            >
              <div className="text-2xl font-bold text-green-600 flex-shrink-0 w-8">
                {index + 1}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.categories.slice(0, 1).map((category) => (
                    <span
                      key={category.id}
                      className="px-2 py-1 text-xs font-medium rounded-full text-white"
                      style={{ backgroundColor: category.color || '#10B981' }}
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{format(new Date(post.publishedAt), 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye size={12} />
                    <span>{post.views} views</span>
                  </div>
                </div>
              </div>
              
              <ArrowRight size={16} className="text-green-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}