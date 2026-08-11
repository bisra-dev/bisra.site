import React from "react";
import { motion } from "framer-motion";
import { cn } from "#lib/utils";
export const VARIANTS = {
  emerald: {
    accent: "rose-500",
    gradient: "from-rose-500/20 to-rose-500/0",
    shine:
      "205deg, transparent 0deg, hsl(160deg 95% 39%) 20deg, hsl(160deg 100% 85% / 0.3) 280deg",
    border: "rose-500/20",
    color: "rgb(109 40 217)",
  },
  blue: {
    accent: "blue-500",
    gradient: "from-blue-500/20 to-blue-500/0",
    shine:
      "205deg, transparent 0deg, hsl(220deg 95% 39%) 20deg, hsl(220deg 100% 85% / 0.3) 280deg",
    border: "blue-500/20",
    color: "rgb(109 40 217)",
  },
  purple: {
    accent: "purple-500",
    gradient: "from-purple-500/20 to-purple-500/0",
    shine:
      "205deg, transparent 0deg, hsl(280deg 95% 39%) 20deg, hsl(280deg 100% 85% / 0.3) 280deg",
    border: "purple-500/20",
    color: "rgb(109 40 217)",
  },
  amber: {
    accent: "amber-500",
    gradient: "from-amber-500/20 to-amber-500/0",
    shine:
      "205deg, transparent 0deg, hsl(40deg 95% 39%) 20deg, hsl(40deg 100% 85% / 0.3) 280deg",
    border: "amber-500/20",
    color: "rgb(109 40 217)",
  },
  rose: {
    accent: "rose-500",
    gradient: "from-rose-500/20 to-rose-500/0",
    shine:
      "205deg, transparent 0deg, hsl(340deg 95% 39%) 20deg, hsl(340deg 100% 85% / 0.3) 280deg",
    border: "rose-500/20",
    color: "rgb(109 40 217)",
  },
};

// Static hover background classes per variant.
// Tailwind's JIT scanner needs to see the FULL class string somewhere in the
// source, so this must stay as literal strings (no template-literal
// interpolation like `hover:before:bg-${x}/10`), or the class gets dropped
// from the build. To change a hover color, just edit the string here.
const HOVER_BG = {
  emerald: "hover:before:bg-emerald-500/10",
  blue: "hover:before:bg-blue-500/10",
  purple: "hover:before:bg-purple-500/10",
  amber: "hover:before:bg-amber-500/10",
  rose: "hover:before:bg-rose-500/10",
};

const SIZES = {
  sm: {
    padding: "p-6 pt-12",
    iconSize: "h-5 w-5",
    titleSize: "text-sm",
    descSize: "text-xs",
  },
  md: {
    padding: "p-8 pt-16",
    iconSize: "h-6 w-6",
    titleSize: "text-base",
    descSize: "text-[15px]",
  },
  lg: {
    padding: "p-6 pt-16",
    iconSize: "h-7 w-7",
    titleSize: "text-lg",
    descSize: "text-base",
  },
};
export function CardHoverEffect({
  icon,
  title,
  description,
  features,
  className,
  variant = "emerald",
  size = "md",
  glowEffect = false,
  hoverScale = 1.02,
  interactive = true,
  showGridLines = true,
}) {
  const variantConfig = VARIANTS[variant];
  const sizeConfig = SIZES[size];
  const Div = interactive ? motion.div : "div";
  const IconWrapper = interactive ? motion.span : "span";
  return (
    <Div
      whileHover={interactive ? { scale: hoverScale } : undefined}
      transition={{ duration: 0.3, ease: "easeInOut", type: "keyframes" }}
      className={cn(
        "group relative z-30 w-full cursor-pointer overflow-hidden rounded-2xl",
        sizeConfig.padding,
        // Base background — same for every card regardless of variant
        "bg-mist-800",
        // Common styles
        "before:absolute before:inset-0 before:rounded-[inherit] before:content-['']",
        "after:absolute after:inset-0 after:rounded-[inherit] after:content-['']",
        // Hover background — looked up from the static HOVER_BG map above,
        // so it changes color per-variant (matches the glow color used
        // in the top-right shine effect below)
        glowEffect && HOVER_BG[variant],
        // Shadows — only appear on hover, no shadow at rest
        "hover:shadow-[0px_5px_15px_rgba(0,0,0,0.03),0px_25px_35px_rgba(0,0,0,0.2)]",
        "dark:hover:shadow-[0px_5px_15px_rgba(0,0,0,0.06),0px_25px_35px_rgba(0,0,0,0.4)]",
        className,
      )}
      style={{
        "--card-color": variantConfig.color,
      }}>
      {/* Moving Border */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[inherit]"
        style={{
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "6px",
        }}>
        <div
          className="absolute inset-[-200%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 340deg, var(--card-color) 360deg)`,
            animation: "spin 4s linear infinite",
          }}
        />
      </div>

      {/* Icon
          Background now lives directly on the wrapper (padding + bg),
          instead of being an absolutely-positioned overlay span — this way
          the background box always hugs the icon, whatever its size. */}
      <IconWrapper
        className={cn(
          "relative z-50 mb-2 inline-flex w-fit items-center justify-center rounded-xl p-3",
          "bg-blue-200  backdrop-blur-3xl",
          "dark:from-white/10 dark:to-white/5",
          "transition-all duration-300",
        )}
        whileHover={interactive ? { scale: 1.1 } : undefined}
        transition={{ duration: 0.3, ease: "easeInOut", type: "keyframes" }}>
        <span
          className={cn(
            "relative z-1 block text-violet-700",
            sizeConfig.iconSize,
          )}>
          {icon}
        </span>
      </IconWrapper>

      {/* Content */}
      <div className="relative z-30 mt-2">
        <h3
          className={cn(
            "font-medium transition-colors duration-300",
            "text-white dark:text-white/80",
            sizeConfig.titleSize,
          )}>
          {title}
        </h3>
        <p
          className={cn(
            "mt-1 transition-colors duration-300",
            "text-black dark:text-white/40",
            "dark:text-white/40",
            sizeConfig.descSize,
          )}>
          {description}
        </p>

        {/* Feature list — pass an array of strings via the `features` prop.
            Only renders if features is provided. */}
        {features && features.length > 0 && (
          <ul
            className={cn(
              "mt-3 space-y-1.5 text-black dark:text-white/40",
              sizeConfig.descSize,
            )}>
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-600" />
                <span className="text-[14px] dark:text-white/40">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Shine Effect — this is the glow in the top-right corner of the card,
          colored by variantConfig.shine (driven by the "variant" prop) */}
      <div className="absolute inset-0 z-20 overflow-hidden rounded-[inherit] opacity-100 transition-all duration-500">
        <div
          className="absolute bottom-[55%] left-1/2 aspect-square w-[200%] -translate-x-1/2 rounded-[50%]"
          style={{
            background: `conic-gradient(from ${variantConfig.shine}, transparent 360deg)`,
            filter: "blur(40px)",
          }}
        />
      </div>
    </Div>
  );
}