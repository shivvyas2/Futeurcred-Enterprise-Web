import { useState, useEffect } from "react"

interface HeroBackgroundProps {
  imagePath: string
  children: React.ReactNode
  className?: string
}

export default function HeroBackground({ imagePath, children, className = "" }: HeroBackgroundProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    // Preload the image with high priority
    const img = new window.Image()
    img.loading = 'eager'
    img.src = imagePath
    
    // If image is already cached, set loaded immediately
    if (img.complete) {
      setImageLoaded(true)
    } else {
      img.onload = () => {
        setImageLoaded(true)
      }
      img.onerror = () => {
        setImageError(true)
      }
    }

    // Also add preload link to head for faster loading
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = imagePath
    document.head.appendChild(link)

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
    }
  }, [imagePath])

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden -mt-20 pt-24 px-6 bg-cover bg-center ${className}`}>
      {/* Background Image with smooth fade-in */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient - always visible, fades out when image loads */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-gray-900 to-black transition-opacity duration-700 ease-out ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Actual background image - fades in smoothly */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url('${imagePath}')`,
            willChange: imageLoaded ? 'auto' : 'opacity'
          }}
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5 z-[1]"></div>
      
      {/* Content with smooth fade-in */}
      <div className={`max-w-7xl mx-auto text-center relative z-10 w-full transition-opacity duration-700 ease-out ${
        imageLoaded ? 'opacity-100' : 'opacity-95'
      }`}>
        {children}
      </div>
    </section>
  )
}

