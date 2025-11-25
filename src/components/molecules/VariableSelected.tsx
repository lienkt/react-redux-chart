import React from 'react'

function VariableSelected() {
  return (
    <div className="flex mb-4 items-center justify-between text-blue-600 max-w-full w-full shadow bg-white h-10">
        <div className="h-full w-1.5 bg-blue-600"></div>
        <div className="text-left">
            Bacon
        </div>   
        <button type="button" aria-label="close" className="active:scale-90 transition-all mr-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    </div>
  )
}

export default VariableSelected