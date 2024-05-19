"use client"
import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { educations } from '@/lib/data'

export default function Education() {
    const { ref } = useMenuInView("Education")

    return (
        <div ref={ref} id="education" className={`${styles.page_container} scroll-mt-[7rem] -mt-4`}>
            <div className={styles.title_container}>
                <span className={styles.title}>Education</span> 
            </div>
            <div>
                <VerticalTimeline>
                    {
                        educations.map((edu, index) => (
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
        </div>
    )
}
