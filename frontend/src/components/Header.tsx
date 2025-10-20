'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Phone,
  UserPlus,
  LogIn,
  Home,
  BookOpen,
  Users,
  FileText,
  Info,
  HelpCircle
} from 'lucide-react'
import {
  FaXTwitter,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaThreads
} from 'react-icons/fa6'
import '../styles/header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header-container">
      {/* ======= Top Contact Bar ======= */}
      <div className="top-bar">
        <div className="top-content">
          {/* Logo */}
          <div className="logo-area">
            <Link href="/">
              <img src="/images/logo.png" alt="Riwaq Logo" className="logo cursor-pointer" />
            </Link>
          </div>

          {/* Contact + Buttons */}
          <div className="contact-links">
            <div className="contact-item">
              <Phone size={16} color="#008b84" />
              <span className="text-[#008b84]">+447862067920</span>
            </div>

            {/* Register Link */}
            <Link
              href="/register"
              className="flex items-center gap-2 font-medium transition-all duration-200 hover:text-[#00a69c]"
              style={{ color: '#008b84', textDecoration: 'none' }}
            >
              <UserPlus size={16} color="#008b84" />
              <span>Register Now</span>
            </Link>

            {/* Login Link */}
            <Link
              href="/login"
              className="flex items-center gap-2 font-medium transition-all duration-200 hover:text-[#00a69c]"
              style={{ color: '#008b84', textDecoration: 'none' }}
            >
              <LogIn size={16} color="#008b84" />
              <span>Student Login</span>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="social-icons" style={{ color: '#008b84', display: 'flex', gap: '10px' }}>
            <Link href="https://twitter.com" target="_blank">
              <FaXTwitter color="#008b84" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF color="#008b84" />
            </Link>
            <Link href="https://pinterest.com" target="_blank">
              <FaPinterestP color="#008b84" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedinIn color="#008b84" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram color="#008b84" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <FaYoutube color="#008b84" />
            </Link>
            <Link href="https://threads.net" target="_blank">
              <FaThreads color="#008b84" />
            </Link>
          </div>
        </div>
      </div>

      {/* ======= Navbar ======= */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-links">
            <Link href="/" className="nav-link">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link href="/regular-courses" className="nav-link">
              <BookOpen size={18} />
              <span>Regular Courses</span>
            </Link>
            <Link href="/short-courses" className="nav-link">
              <FileText size={18} />
              <span>Short Courses</span>
            </Link>
            <Link href="/teachers" className="nav-link">
              <Users size={18} />
              <span>Teachers</span>
            </Link>
            <Link href="/blog" className="nav-link">
              <FileText size={18} />
              <span>Blog</span>
            </Link>
            <Link href="/about" className="nav-link">
              <Info size={18} />
              <span>About Us</span>
            </Link>
            <Link href="/register" className="nav-link">
              <UserPlus size={18} />
              <span>Register Now</span>
            </Link>
            <Link href="/support" className="nav-link">
              <HelpCircle size={18} />
              <span>Help & Support</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
