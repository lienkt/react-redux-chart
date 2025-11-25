import React from 'react'

interface ButtonProps extends React.PropsWithChildren {
  variant?: 'primary' | 'secondary' | 'outline',
  size?: 'xxs' | 'sm' | 'xl',
  className?: string,
  onClick?: () => void
}

interface Map {
  [key: string]: string
}

function Button({ 
  variant = 'primary', 
  size = 'xl',
  className = '',
  children, 
  onClick,
  ...restProps 
}: ButtonProps) {

  const variantClasses: Map = {
    primary: 'active:scale-95 transition text-sm text-white rounded-lg bg-indigo-500',
    secondary: 'active:scale-95 transition text-sm text-white rounded-lg bg-slate-500',
    outline: 'bg-white text-gray-500 active:scale-95 transition text-sm flex items-center rounded w-max border border-gray-500/30',
  }

   const sizeClasses: Map = {
    xxs: 'px-5 py-2',
    sm: 'px-7 py-3',
    xl: 'px-10 py-4',
  }

  const combineClasses = `${sizeClasses[size]} ${variantClasses[variant]} ${className} cursor-pointer`

  return (
    <button 
      type="button" 
      className={combineClasses}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button