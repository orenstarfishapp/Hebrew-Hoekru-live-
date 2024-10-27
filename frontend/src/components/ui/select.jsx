import React from 'react'

const Select = ({ value, onValueChange, children }) => {
  return React.Children.map(children, (child) => {
    if (child.type === SelectTrigger) {
      return React.cloneElement(child, { value })
    } else if (child.type === SelectContent) {
      return React.cloneElement(child, { value, onValueChange })
    }
    return child
  })
}

const SelectTrigger = ({ children, className = '', value }) => {
  return <div className={`relative ${className}`}>{React.cloneElement(children, { value })}</div>
}

const SelectValue = ({ placeholder, value }) => {
  return <div className="px-3 py-2 border rounded">{value || placeholder}</div>
}

const SelectContent = ({ children, value, onValueChange }) => {
  return (
    <div className="absolute mt-1 bg-white border rounded shadow-lg">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { onValueChange })
      })}
    </div>
  )
}

const SelectItem = ({ value: itemValue, children, onValueChange }) => {
  return (
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => onValueChange(itemValue)}>
      {children} {/* Correct placement of children */}
    </div>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
