import { ReactNode } from 'react'

interface RibbonProps {
  text: string
  children: ReactNode
}

export function Ribbon({ text, children }: RibbonProps) {
  return (
    <div className="relative inline-block">
      {children}
      <div className="absolute bottom-32 right-0 rotate-[-30deg]">
        <span className="rounded bg-gradient-to-r from-purple-900 to-cyan-600 px-6 py-1 text-xs font-semibold text-white shadow-lg md:text-sm">
          {text}
        </span>
      </div>
    </div>
  )
}
