import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <p className='w-full h-screen flex items-center justify-center text-lg'>hello world</p>
    </>
  )
}
