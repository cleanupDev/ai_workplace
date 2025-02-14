"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createGradient = (x: number, y: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 300)
      gradient.addColorStop(0, "rgba(16, 185, 129, 0.1)") // Emerald
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.05)") // Blue
      gradient.addColorStop(1, "rgba(10, 11, 20, 0)") // Background color
      return gradient
    }

    const drawGradients = (time: number) => {
      ctx.fillStyle = "#0A0B14"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gradients = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7 },
        { x: canvas.width * 0.5, y: canvas.height * 0.5 },
      ]

      gradients.forEach((pos, index) => {
        const offsetX = Math.sin(time * 0.001 + index) * 50
        const offsetY = Math.cos(time * 0.001 + index) * 50
        const gradient = createGradient(pos.x + offsetX, pos.y + offsetY)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      animationFrameId = requestAnimationFrame(drawGradients)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    drawGradients(0)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full -z-10" 
      aria-hidden="true"
    />
  )
} 