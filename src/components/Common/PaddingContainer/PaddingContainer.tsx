import React from 'react'

interface PaddingProps {
  children: React.ReactNode
}

export default function PaddingContainer({ children }: PaddingProps) {
  return (
    <div className="mx-auto px-[60px] max-w-[1440px]">
      {children}
    </div>
  )
}
