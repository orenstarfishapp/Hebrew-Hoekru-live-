import React from 'react'

const Progress = ({ value, className = '' }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full ${className}`}>
      <div
        className="bg-blue-500 h-full rounded-full"
        style={{ width: `${value}%` }} // Correctly using template literals
      />
    </div>
  )
}

export { Progress }
