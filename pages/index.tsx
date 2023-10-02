import { Inter } from 'next/font/google'
import About from '@/components/About/About'
import Separator from '@/components/shared/Separator/Separator'
import Hero from '@/components/Hero/Hero'
import RoadMap from '@/components/RoadMap/RoadMap'
import Team from '@/components/Team/Team'
import Tokenomics from '@/components/Tokenomics/Tokenomics'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Hero/>
     <Separator/>
    <About/>
     <Separator/>
    <RoadMap/>
    <Separator/>
    <Tokenomics/>
    <Separator/>
    <Team/>

   </>
  )
}
