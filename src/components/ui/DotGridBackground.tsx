"use client"

import dynamic from 'next/dynamic'

// Dynamic import for DotGrid to avoid SSR issues
const DotGrid = dynamic(() => import('@/components/ui/AnimatedDotGrid'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0 bg-purple-50/10" />
})

interface DotGridBackgroundProps {
  dotSize?: number
  gap?: number
  baseColor?: string
  activeColor?: string
  proximity?: number
}

export default function DotGridBackground({
  dotSize = 3,
  gap = 30,
  baseColor = "#8b5cf6",
  activeColor = "#a855f7",
  proximity = 120
}: DotGridBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 opacity-40 dark:opacity-25">
      <DotGrid
        dotSize={dotSize}
        gap={gap}
        baseColor={baseColor}
        activeColor={activeColor}
        proximity={proximity}
      />
    </div>
  )
}