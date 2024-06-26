"use client"
import { projects } from '@/lib/data'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Styles.module.css'
import Image from 'next/image'
import { IoMdClose } from "react-icons/io";
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
    const [showImg, setShowImg] = useState(null)

    const [orientation, setOrientation] = useState<"vertical" | "horizontal">("horizontal");

    // Function to update screenSize based on window width
    const updateScreenSize = () => {
        if (window.innerWidth < 550) {
            setOrientation("vertical");
        }
        else {
            setOrientation("horizontal");
        }
    };

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

    const handleMouseEnter = (img: any | null) => {
        orientation === 'horizontal' ? setShowImg(img) : setShowImg(null);
    };

    const handleImageClose = () => {
        setShowImg(null);
    };

    useEffect(() => {
        // Add event listener to detect window resize
        window.addEventListener('resize', updateScreenSize);
        // Initial screen size check
        updateScreenSize();

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateScreenSize);
    }, [])
    

    return (
        <motion.div ref={ref} className={`${styles.project_card} group dark:bg-black/[0.5] dark:hover:bg-black/[0.7] cursor-pointer`}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <div className='flex justify-between items-center'>
                <div className={styles.project_name_detail}>
                    <div className='w-[75%] mb-[3%]'>
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
            
            {showImg !== null && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative">
                        <button className={`absolute -right-10 text-white ${styles.exit_zoom}`} onClick={handleImageClose}>
                            <IoMdClose className='w-6 h-6'/>
                        </button>
                        <Image
                            src={showImg}
                            alt="image not found"
                            width={1000} // Adjust width and height as needed
                            height={1000}
                            className={`max-w-full max-h-full rounded-xl ${styles.zoomed}`}
                        />
                    </div>
                </div>
            )}
            
            <motion.div className={`${open ? '' : 'hidden'}`}
            animate={open === true ? "to": "from"}
            variants={variants}
            transition={{ duration: 0.5 }}>
                <hr className={`mt-[5%] bg-gray-500 h-[2px]`}/>
                <div className={`mt-[2%]`}>
                    {
                        image.length === 0 ? 
                        <p>Project image coming soon.</p>
                        :
                        <Carousel orientation={orientation}
                            opts={{
                                align: orientation === "horizontal" ? "center" : "start",
                                loop: orientation === "horizontal" ? true : false,
                            }}
                        >
                            <CarouselContent>
                                {image.map((img, idx) => (
                                    <CarouselItem className="basis-1/3" key={idx}>
                                        <Image src={img} alt='image not found' key={idx} width={500} height={500} className='rounded-xl' onMouseEnter={() =>        handleMouseEnter(img)
                                        }
                                        />
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
