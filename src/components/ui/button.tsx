import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-[#F4F4F8] text-black border-[#102E4A] border-2 border-b-4 active:border-b-2 hover:bg-[#E6E6EA] text-gray-500 transition-all duration-100",

        primary: "bg-[#2AB7CA] text-primary-foreground hover:bg-[#249DAE] border-sky-900 border-b-4 active:border-b-0 transititon-all duration-100",

        primaryOutline: "text-[#909590] hover:bg-[#2C302E] hover:text-white transition-all duration-300",

        secondary: "bg-[#FAFDF6] text-primary-background hover:bg-[#2D2A32] hover:text-primary-foreground border-gray-900 border-b-4 hover:border-gray-500 active:border-b-0 transititon-all duration-300",

        secondaryOutline: "bg-white text-[#09E85E] hover:bg-slate-100 transition-all duration-100",

        danger: "bg-[#F44E3F] text-primary-foreground hover:bg-[#F1210E] border-red-900 border-b-4 active:border-b-0 transititon-all duration-100",

        dangerOutline: "bg-white text-[#F44E3F] hover:bg-slate-100 transition-all duration-100",

        super: "bg-[#8B80F9] text-primary-foreground hover:bg-[#7063F8] border-violet-900 border-b-4 active:border-b-0 transititon-all duration-100",

        superOutline: "bg-white text-[#8B80F9] hover:bg-slate-100 transition-all duration-100",

        ghost: "bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100",

        sidebar: "bg-transparent text-slate-500 border-2 border-transparent hover:bg-slate-100 transition-colors duration-300",

        sidebarOutline: "bg-[#0C090D]/60 text-white border-gray-700 border-2 hover:bg-[#0C090D]/80 transition-colors duration-300",
      },
      size: {
        default: "h-11 px-4 py-2 has-[>svg]:px-3",
        sm: "h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
