import React from 'react'

const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 ${className}`}
      {...props}
    />
  )
}

export { Input }
