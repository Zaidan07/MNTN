import React from 'react'

interface PaddingProps {
  children: React.ReactNode
}

export default function PaddingContainer({ children }: PaddingProps) {
  return (
    <div className="mx-auto max-w-full sm:max-w-[1440px] px-[80px]">
      {children}
    </div>
  )
}
