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
import { useActiveMenuContext } from '@/context/active-menu'
import Footer from '../footer/footer'
import { useMenuInView } from '@/lib/hooks'

export default function About() {
    const { setActiveMenu, setLastClick } = useActiveMenuContext()
    const { ref } = useMenuInView("About")

    return (
        <motion.div ref={ref} id="about" className={`${styles.about_main} scroll-mt-[7rem] mb-[10%]`}
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ type: 'tween', duration: 0.3}}>
            <div className={styles.about_container}>
                <div className={styles.about_left}>
                    <div className={styles.profile_container}>
                        <Image src='/assets/profile.png' alt='image_not_found' width="150" height="150" quality="95" priority={true} className={`${styles.profile_image} dark:border-black/[0.8]`}/>
                    </div>

                    <div className={styles.about_porto}>
                        <a className={styles.porto_item} target='_blank' href='https://www.linkedin.com/in/susan-lady-rumokoy'>
                            <BsLinkedin />
                        </a>
                        <a className={`${styles.porto_item} text-[1.2rem]`} target='_blank' href='https://github.com/susanladyyy'>
                            <FaGithubSquare />
                        </a>
                    </div>
                </div>
                
                <div className={styles.about_right}>
                    <div className={styles.about_desc}>
                        {/* <p className='text-2xl'>About Me</p> */}
                        <p className='text-[12px] sm:text-[15px]'>
                            { about }
                        </p>
                    </div>

                    <div className={styles.about_contact}>
                        <Link href='#contact' className={`${styles.contact_item} bg-[#020035] text-white hover:scale-95`} onClick={
                            () => {
                                setActiveMenu('Contact')
                                setLastClick(Date.now())        
                            }
                        }>
                            Contact me <BsArrowRight />
                        </Link>
                        <a className={`${styles.contact_item} bg-white text-[#020035] hover:scale-95`} href='/Susan Lady Rumokoy - CV.pdf' download={true}>
                            Download CV <HiDownload />
                        </a>
                    </div>
                    <Footer />
                </div>
            </div>
        </motion.div>
    )
}
