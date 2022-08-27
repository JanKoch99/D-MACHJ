import React from 'react'

function emedButton({children, icon, green, gray, primary="primary", size="medium"}) {
  return (
    <button
      type="submit"
      className={`
      ${size === 'medium' && 'py-2 px-5'}
      ${size === 'large' && 'pb-4 pt-5 px-8'}
      ${primary && 'bg-primary text-gray-800'}
      ${green && 'bg-green text-gray-800'}
      ${gray && 'bg-gray-200 text-gray-800'}
      w-full flex justify-center text-base rounded font-semibold font-headline focus:outline-none focus:ring-0`}
    >
      {children}
      { icon }
    </button>
  )
}

export default emedButton