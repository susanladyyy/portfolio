"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import styles from '@/components/styles/Styles.module.css'

export default function About() {
    return (
        <div id="about" className='mb-25 max-w-[60rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ type: 'tween', duration: 0.3}}>
                        <Image src='/assets/profile.png' alt='image_not_found' width="180" height="180" quality="95" priority={true} className='h-50 w-50 object-cover rounded-full border-[0.35rem] border-white shadow-xl'/>
                    </motion.div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-2 mt-[0.5rem]'>
                <a className='bg-white text-[#020035] p-4 flex items-center gap-2 rounded-full'>
                    <BsLinkedin />
                </a>
                <a className='bg-white text-[#020035] p-4 flex items-center gap-2 rounded-full text-[1.2rem]'>
                    <FaGithubSquare />
                </a>
            </div>
            
            <div className="mt-[1rem]">
                <p className='text-2xl'>About Me</p>
                <p className={styles.paragraph}>
                My name is Susan Lady Rumokoy, and I am a senior-year university student majoring in Computer Science. During my initial semester, I applied for a part-time position as a computer laboratory assistant. Despite initial setbacks, I persevered and secured the position during a subsequent hiring period. Serving as a part-time assistant, I gained invaluable experience and was eventually promoted to a full-time role. In my capacity as a full-time assistant, I have been exposed to a diverse range of coding technologies and have contributed to various projects including game development, desktop applications, web development, mobile applications, and network projects. Concurrently, I continued to instruct and mentor students in various subjects. Presently, I am completing an internship at BINUS University as an application developer. Additionally, I have been entrusted with the responsibility of an Operation and Systems Development Staff, wherein I oversee the management of software and hardware utilized for laboratory practicum classes.
                </p>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-2 mt-[2rem]'>
                <Link href='#contact' className='bg-[#020035] text-white px-7 py-3 flex items-center gap-2 rounded-full shadow-xl'>
                    Contact me <BsArrowRight />
                </Link>
                <a className='bg-white text-[#020035] px-7 py-3 flex items-center gap-2 rounded-full shadow-xl'>
                    Download CV <HiDownload />
                </a>
            </div>
        </div>
    )
}
