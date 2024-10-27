import React from 'react'

const Card = ({ className = '', children }) => {
  return <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
}

const CardHeader = ({ className = '', children }) => {
  return <div className={`px-4 py-2 border-b ${className}`}>{children}</div>
}

const CardContent = ({ className = '', children }) => {
  return <div className={`p-4 ${className}`}>{children}</div>
}

export { Card, CardHeader, CardContent }
