import React from 'react'

interface PaddingProps {
  children: React.ReactNode
}

export default function PaddingContainer({ children }: PaddingProps) {
  return (
    <div className="mx-auto px-[20px] md:px-[80px] max-w-screen">
      {children}
    </div>
  )
}
