"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import styles from '@/components/styles/Styles.module.css'
import { about } from '@/lib/data'

export default function About() {
    return (
        <div className={styles.about_main}>
            <div id="about" className={styles.about_container}>
                <div className={styles.profile_container}>
                    <div className="">
                        <motion.div
                            initial={{ opacity: 0, scale: 0}}
                            animate={{ opacity: 1, scale: 1}}
                            transition={{ type: 'tween', duration: 0.3}}>
                            <Image src='/assets/profile.png' alt='image_not_found' width="150" height="150" quality="95" priority={true} className={styles.profile_image}/>
                        </motion.div>
                    </div>
                </div>

                <div className={styles.about_porto}>
                    <a className={styles.porto_item} target='_blank' href='https://github.com/susanladyyy'>
                        <BsLinkedin />
                    </a>
                    <a className={`${styles.porto_item} text-[1.2rem]`} target='_blank' href='www.linkedin.com/in/susan-lady-rumokoy'>
                        <FaGithubSquare />
                    </a>
                </div>
                
                <div className={styles.about_desc}>
                    {/* <p className='text-2xl'>About Me</p> */}
                    <p className={styles.paragraph}>
                        { about }
                    </p>
                </div>

                <div className={styles.about_contact}>
                    <Link href='#contact' className={`${styles.contact_item} bg-[#020035] text-white hover:scale-95`}>
                        Contact me <BsArrowRight />
                    </Link>
                    <a className={`${styles.contact_item} bg-white text-[#020035] hover:scale-95`}>
                        Download CV <HiDownload />
                    </a>
                </div>
            </div>
        </div>
    )
}
