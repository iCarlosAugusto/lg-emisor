import React from 'react'

interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

export default function Button({label, onClick, className}: ButtonProps) {
  return (
    <button className={`${className} rounded bg-green-500 px-5 py-2 hover:opacity-80`}>
        <span className="font-bold">{label}</span>
    </button>
  )
}
