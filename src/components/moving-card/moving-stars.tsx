'use client'

import React, { useState, useEffect } from 'react'

interface MovingStarsProps {
  containerRef: React.RefObject<HTMLDivElement>
}

export const MovingStars: React.FC<MovingStarsProps> = ({ containerRef }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [velocity, setVelocity] = useState({
    x: (Math.random() - 0.5) * 0.5, // Pequena variação para esquerda ou direita
    y: -2, // Sempre subindo
  })
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.clientHeight
      const containerWidth = containerRef.current.clientWidth
      setPosition({
        top: containerHeight - 2, // Ajuste para que parta do fundo do contêiner
        left: Math.random() * containerWidth,
      })
    }
  }, [containerRef])

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition((prevPosition) => {
        if (!containerRef.current) return prevPosition

        const containerWidth = containerRef.current.clientWidth

        const newTop = prevPosition.top + velocity.y
        const newLeft = prevPosition.left + velocity.x

        // Manter a subida suave com leve variação horizontal
        setVelocity((prevVelocity) => ({
          x: prevVelocity.x + (Math.random() - 0.5) * 0.05,
          y: -2,
        }))

        return {
          top: Math.max(0, newTop),
          left: Math.max(0, Math.min(newLeft, containerWidth - 2)),
        }
      })
    }, 20) // 20ms para atualizar a posição

    return () => clearInterval(moveInterval)
  }, [velocity, containerRef])

  useEffect(() => {
    const initialDelay = Math.random() * 1000 // Atraso inicial aleatório até 1 segundo
    const startBlinking = () => {
      setInterval(() => {
        setOpacity((prevOpacity) => (prevOpacity === 1 ? 0.5 : 1))
      }, 1000) // 1s para mudar a opacidade
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
