import React from 'react'

const Badge = ({ variant = 'default', className = '', children }) => {
  const variants = {
    default: 'bg-blue-100 text-blue-800',
    outline: 'border border-blue-500 text-blue-500',
  }

  return (
    <span
      className={`inline-block px-2 py-1 text-sm font-medium rounded ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {children} 
    </span>
  )
}

export { Badge }
