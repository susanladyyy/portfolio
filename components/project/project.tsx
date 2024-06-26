"use client"
import { projects } from '@/lib/data'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef, useState } from 'react'
import styles from '../styles/Styles.module.css'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'

type ProjectProps = (typeof projects)[number]

export default function ProjectCard({
    id,
    title,
    brief,
    description,
    tags,
    image,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"] // starting point end point
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]) // from start to end, the card is not starting from 0 scale
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]) // from start to end, the card is not starting from 0 opacity

    const variants = {
        from: { 
            height: 0,
            opacity: 0,
            clipPath: "inset(0 0 100% 0)"
        },
        to: { 
            height: "auto",
            opacity: 1,
            clipPath: "inset(0 0 0 0)"
        }
    };

    return (
        <motion.div ref={ref} className={`${styles.project_card} group dark:bg-black/[0.5] dark:hover:bg-black/[0.7] cursor-pointer`}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <div className='flex justify-between items-center'>
                <div className='w-[75%]'>
                    <p className={`${styles.project_title} dark:text-white`}>{title}</p>
                    <motion.p className={`${styles.project_description} dark:text-white/[0.8]`}
                    animate={open === true ? "to": "from"}
                    variants={variants}
                    transition={{ duration: 0.5 }}>{open ? description : brief}</motion.p>
                    <p className={`${styles.project_description} dark:text-white/[0.8] ${open ? 'hidden' : ''}`}>{brief}</p>
                </div>
                <div className='w-[20%]'>
                    <p className='font-bold'>Technology:</p>
                    <ul className={styles.project_tag_container}>
                        {
                            tags?.map((tag, index) => (
                                <li className={`${styles.project_tag} dark:bg-[#433c8f]`} key={index}>{tag}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className={`text-[#080402] dark:text-white w-[5%]`}
                onClick={
                    () => {
                        setOpen(!open)
                    }
                }>
                    <svg
                        className={`w-6 h-6 transition-transform transform ${
                            open ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>

            <motion.div className={`${open ? '' : 'hidden'}`}
            animate={open === true ? "to": "from"}
            variants={variants}
            transition={{ duration: 0.5 }}>
                <hr className={`mt-[5%] bg-gray-500 h-[2px]`}/>
                <div className={`mt-[2%] flex gap-2`}>
                    {
                        image.length === 0 ? 
                        <p>Project image coming soon.</p>
                        :
                        <Carousel
                            opts={{
                                align: "center",
                                loop: true,
                            }}
                        >
                            <CarouselContent>
                                {image.map((img, idx) => (
                                    <CarouselItem className="basis-1/3" key={idx}>
                                        <Image src={img} alt='image not found' key={idx} width={500} height={500} className='rounded-xl'/>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    }
                    
                </div>
            </motion.div>
        </motion.div>
    )
}
