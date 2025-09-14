// import React from 'react'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
children : React.ReactNode;
className?: string;
width?: 'w-full' | 'w-auto' | 'w-1/2' | 'w-1/3' | 'w-1/4' | 'w-fit';
}
const Button = ({children , className ,width = 'w-full',...rest} : ButtonProps) => {
  return (
    <button className={`${className} ${width} flex-1 p-2 rounded-md cursor-pointer`} {...rest}>
        {children}
    </button>
  )
}

export default Button