'use client'

import { useState, useEffect } from 'react'

export function MovingBackgroundBalls() {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [velocity, setVelocity] = useState({
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2,
  })

  const [color, setColor] = useState({
    r: Math.random() * 255,
    g: Math.random() * 255,
    b: Math.random() * 255,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosition({
        top: Math.random() * (window.innerHeight - 200),
        left: Math.random() * (window.innerWidth - 200),
      })
    }
  }, [])

  useEffect(() => {
    const changeDirectionInterval = setInterval(() => {
      setVelocity({
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      })
    }, 5000) // 5s for change the direction

    return () => clearInterval(changeDirectionInterval)
  }, [])

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition((prevPosition) => {
        const newTop = prevPosition.top + velocity.y
        const newLeft = prevPosition.left + velocity.x

        return {
          top: Math.max(0, Math.min(newTop, window.innerHeight - 200)),
          left: Math.max(0, Math.min(newLeft, window.innerWidth - 200)),
        }
      })
    }, 20) // 20s for update the position

    return () => clearInterval(moveInterval)
  }, [velocity])

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColor({
        r: Math.random() * 255,
        g: Math.random() * 255,
        b: Math.random() * 255,
      })
    }, 5000) // 5s for change color

    return () => clearInterval(colorInterval)
  }, [])

  return (
    <div
      className="absolute -z-10 rounded-full opacity-50 transition-all duration-500"
      style={{
        top: position.top,
        left: position.left,
        width: '200px',
        height: '200px',
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`,
        filter: 'blur(50px)',
        transition: 'background-color 5s linear',
      }}
    />
  )
}
