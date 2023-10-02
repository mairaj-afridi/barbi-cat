import Image from 'next/image'
import { Inter } from 'next/font/google'
import About from '@/components/About/About'
import Separator from '@/components/shared/Separator/Separator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <About/>
     <Separator/>
    </>
  )
}
