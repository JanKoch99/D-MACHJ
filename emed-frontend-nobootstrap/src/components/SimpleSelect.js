import React from 'react'

function simpleSelect({name, label, children}) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-bold text-gray-800 mb-2">
                {label}
            </label>
            <div className="mt-1">
                <select
                    id={name}
                    name={name.toLowerCase()}
                    type="select"
                    className="appearance-none block w-full p-4 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                >
                    {children}
                </select>

            </div>
        </div>
    )
}

export default simpleSelect;