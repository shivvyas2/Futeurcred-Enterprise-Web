interface IconProps {
  name: string
  className?: string
  width?: number | string
  height?: number | string
  color?: string
}

export default function Icon({ name, className = "", width = 24, height = 24, color = "white" }: IconProps) {
  // Handle icons with spaces in their names - URL encode them
  const iconPath = `/icons/${encodeURIComponent(name)}`
  
  // CSS filter to make icon white or black
  // brightness(0) makes it black, brightness(0) invert(1) makes it white
  const getFilterStyle = (iconColor: string) => {
    if (iconColor === "white") {
      return "brightness(0) invert(1)"
    }
    if (iconColor === "black") {
      return "brightness(0)"
    }
    // For colored icons, use brightness and saturate to enhance
    return "brightness(1.1) saturate(1.2) contrast(1.1)"
  }
  
  return (
    <img
      src={iconPath}
      alt={name}
      width={width}
      height={height}
      className={className}
      style={{ 
        width, 
        height,
        filter: getFilterStyle(color)
      }}
    />
  )
}

