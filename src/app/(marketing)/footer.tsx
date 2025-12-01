import { Button } from "@/components/ui/button"
import Image from "next/image"

const Footer = () => {
  const flags: { src: string, lang: string }[] = [
    {
      src: "india.svg",
      lang: "Hindi"
    },
    {
      src: "spain.svg",
      lang: "Spanish"
    },
    {
      src: "japan.svg",
      lang: "Japanese"
    },
    {
      src: "france.svg",
      lang: "French"
    },
    {
      src: "china.svg",
      lang: "Chinese"
    },
  ]
  return (
    <footer className="hidden lg:block h-20 w-full p-2 border-t-1 border-gray-700/20">
      <div className="max-w-screen-5xl mx-auto flex items-center justify-evenly h-full">
        {flags.map((item, idx) => (
          <Button key={idx} size="lg" variant="ghost" className="">
          <Image
            src={item.src}
            alt="Hindi Language"
            width={32}
            height={40}
            className="mr-2 rounded"
            />
            {item.lang}
        </Button>
        ))}
      </div>
    </footer>
  )
}

export default Footer
