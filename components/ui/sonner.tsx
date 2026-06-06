"use client"

import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      position="top-center"
      richColors
      expand
      duration={5000}
      toastOptions={{
        classNames: {
          toast: `
            !rounded-2xl
            !border
            !backdrop-blur-xl
            !shadow-2xl
            !px-5
            !py-4
            !w-[calc(100vw-32px)] sm:!w-[420px]
            !font-medium
          `,
          title: `
            !text-[15px]
            !font-semibold
            !tracking-wide
          `,
          description: `
            !text-[13px]
            !opacity-90
          `,

          success: `
            !bg-emerald-950/90
            !border-emerald-500/50
            !text-emerald-50
            border-l-4
            border-l-emerald-400
          `,

          error: `
            !bg-red-950/90
            !border-red-500/50
            !text-red-50
            border-l-4
            border-l-red-400
          `,

          warning: `
            !bg-amber-950/90
            !border-amber-500/50
            !text-amber-50
            border-l-4
            border-l-amber-400
          `,

          info: `
            !bg-blue-950/90
            !border-blue-500/50
            !text-blue-50
            border-l-4
            border-l-blue-400
          `,
        },
      }}
      {...props}
    />
  )
}

export { Toaster }