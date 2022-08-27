import React from 'react'

function simpleInput({name, type, label, placeholder}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-bold text-gray-800 mb-2">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required
          className="appearance-none block w-full p-4 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
        />
      </div>
    </div>
  )
}

export default simpleInput