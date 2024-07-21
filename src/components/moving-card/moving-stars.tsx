'use client'

import React, { useState, useEffect } from 'react'

export function MovingStars() {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [velocity, setVelocity] = useState({
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2,
  })

  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosition({
        top: Math.random() * (window.innerHeight - 200),
        left: Math.random() * (window.innerWidth - 200),
      })
    }

    setOpacity(Math.random() > 0.5 ? 1 : 0.5)
  }, [])

  useEffect(() => {
    const changeDirectionInterval = setInterval(() => {
      setVelocity({
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      })
    }, 8000) // 8s for change the direction

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
    }, 20) // 20ms for update the position

    return () => clearInterval(moveInterval)
  }, [velocity])

  useEffect(() => {
    const initialDelay = Math.random() * 1000 // Random delay up to 1 second
    const startBlinking = () => {
      setInterval(() => {
        setOpacity((prevOpacity) => (prevOpacity === 1 ? 0.5 : 1))
      }, 1000) // 1s for change opacity
    }

    const initialTimeout = setTimeout(startBlinking, initialDelay)

    return () => clearTimeout(initialTimeout)
  }, [])

  return (
    <div
      className="absolute rounded-full transition-opacity duration-1000"
      style={{
        top: position.top,
        left: position.left,
        width: '2px',
        height: '2.5px',
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
      }}
    />
  )
}
