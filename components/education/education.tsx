"use client"
import { educations } from '@/lib/data'
import React, { Fragment } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import styles from '@/components/styles/Styles.module.css'
import { useInView } from 'react-intersection-observer'

export default function EducationElement() {
    const { ref, inView } = useInView()
    
    return (
        <div ref={ref}>
            <VerticalTimeline lineColor='rgba(255,255,255,0.5)'>
                {
                    educations.map((edu, index) => (
                        <Fragment key={index}>
                            <VerticalTimelineElement 
                                visible={inView}
                                contentStyle={{
                                    background: "rgba(255, 255, 255, 0.3)",
                                    border: "solid white 1px",
                                    borderRadius: "15px",
                                    textAlign: "left"
                                }}
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid white"
                                }}
                                date={edu.year}
                                dateClassName={styles.date}
                                icon={edu.logo}
                                iconClassName={styles.icon}
                            >
                                <p>{edu.title}</p>
                                <p>{edu.school}</p>
                            </VerticalTimelineElement>
                        </Fragment>
                    ))
                }
            </VerticalTimeline>
        </div>
    )
}
