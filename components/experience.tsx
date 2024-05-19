"use client"
import React, { Fragment } from 'react'
import styles from './styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '@/lib/data'

export default function Experience() {
    const { ref } = useMenuInView("Experience")

    return (
        <div ref={ref} id="experience" className={`${styles.page_container} scroll-mt-[7rem] mt-[2rem]`}>
            <div className={styles.title_container}>
                <span className={styles.title}>Experience</span> 
            </div>
            <div>
                <VerticalTimeline lineColor='rgba(255,255,255,0.5)'>
                    {
                        experiences.map((exp, index) => (
                            <Fragment key={index}>
                                <VerticalTimelineElement 
                                    visible={true}
                                    contentStyle={{
                                        background: "rgba(255, 255, 255, 0.3)",
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
                                    iconClassName={styles.icon}
                                >
                                    <p>{exp.title}</p>
                                    <p>{exp.company}</p>
                                    <p>{exp.description}</p>
                                </VerticalTimelineElement>
                            </Fragment>
                        ))
                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}
