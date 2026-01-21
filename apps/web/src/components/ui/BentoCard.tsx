"use client"

import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface BentoCardProps {
  className?: string
  children?: React.ReactNode
}

function BentoCard({
  className,
  children,
}: BentoCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-primary/20 bg-card p-6",
        "hover:border-primary/40 transition-all duration-300",
        "before:absolute before:inset-0 before:bg-linear-to-br before:from-aurora-purple/5 before:to-aurora-blue/5 before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className
      )}
    >
      {/* Blur эффект */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-aurora-purple/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Контент */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default BentoCard
