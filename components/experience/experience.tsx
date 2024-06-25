"use client"
import { experiences } from '@/lib/data'
import React, { Fragment, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import styles from '@/components/styles/Styles.module.css'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/theme-context'
import { motion } from 'framer-motion'

export default function ExperienceElement() {
    const { ref, inView } = useInView()
    const { theme } = useTheme()
    const [show, setShow] = useState(-1)

    const variants = {
        hidden: { 
            height: 0, 
            opacity: 0,
            clipPath: "inset(0 0 100% 0)"
        },
        visible: { 
            height: 'auto', 
            opacity: 1,
            clipPath: "inset(0 0 0 0)"
        }
    };

    return (
        <div ref={ref} className={`${styles.timeline_width} cursor-pointer`}>
            <VerticalTimeline lineColor={theme === "light" ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.8)'}>
                {
                    experiences.map((exp, index) => (
                        <Fragment key={index}>
                            <VerticalTimelineElement 
                                visible={inView}
                                contentStyle={{
                                    background: theme === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.5)",
                                    border: "solid white 1px",
                                    borderRadius: "15px",
                                    textAlign: "left"
                                }}
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid white"
                                }}
                                date={exp.date}
                                dateClassName={styles.date}
                                icon={exp.icon}
                                iconClassName={`${styles.icon} dark:bg-black/[0.5] dark:text-white`}
                                
                            >
                                <div className=""
                                onMouseEnter={() => setShow(index)}
                                onMouseLeave={() => setShow(-1)}>
                                    <div className='text-xl font-bold my-[2%]'>{exp.title}</div>
                                    <div className='text-md my-[2%]'>{exp.company}</div>
                                    <div className='text-sm my-[2%]'>{exp.position}</div>
                                    <motion.div className={`mt-[5%]`}
                                    initial="hidden"
                                    animate={show === index ? "visible": "hidden"}
                                    variants={variants}
                                    transition={{ duration: 0.3 }}
                                    >
                                        <hr className='dark:bg-white bg-black h-[2px]'/>
                                        <p>Job detail:</p>
                                        <ul className='list-disc ml-4'>
                                            {exp.description.map((des, idx) => (
                                                <li key={idx}>{des}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            </VerticalTimelineElement>
                        </Fragment>
                    ))
                }
            </VerticalTimeline>
        </div>
    )
}
