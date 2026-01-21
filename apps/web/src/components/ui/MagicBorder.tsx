"use client"

import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface MagicBorderProps {
  children: React.ReactNode
  className?: string
  borderWidth?: number
}

export function MagicBorder({ 
  children, 
  className,
  borderWidth = 1 
}: MagicBorderProps) {
  return (
    <div className={cn("relative group", className)}>
      {/* Анимированный градиент бордер */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, 
            var(--color-aurora-purple), 
            var(--color-aurora-blue), 
            var(--color-aurora-purple)
          )`,
          backgroundSize: "200% 200%",
          animation: "gradient-shift 3s ease infinite",
          padding: `${borderWidth}px`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      
      <motion.div
        className="relative rounded-xl bg-card"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  )
}
