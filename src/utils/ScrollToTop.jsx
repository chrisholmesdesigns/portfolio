import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ScrollToTop = () => {
  const navigate = useNavigate(null)

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }

    scrollToTop()
  }, [navigate])

  return null // This component doesn't render anything, so returning null
}

export default ScrollToTop
