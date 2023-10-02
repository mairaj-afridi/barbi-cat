import Image from 'next/image'
import { Inter } from 'next/font/google'
import About from '@/components/About/About'
import Separator from '@/components/shared/Separator/Separator'
import Hero from '@/components/Hero/Hero'
import RoadMap from '@/components/RoadMap/RoadMap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Hero/>
     <Separator/>
    <About/>
     <Separator/>
    {/* <HowToBuy/> */}
     <Separator/>
    <RoadMap/>
    <Separator/>
    {/* <Tokenomics/> */}
    <Separator/>
    {/* <Contact/>    */}
    {/* <Team/> */}

   </>
  )
}
