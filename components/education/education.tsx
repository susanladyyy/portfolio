"use client"
import { educations } from '@/lib/data'
import React, { Fragment } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import styles from '@/components/styles/Styles.module.css'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/theme-context'

export default function EducationElement() {
    const { ref, inView } = useInView()
    const { theme } = useTheme()

    return (
        <div ref={ref} className={styles.timeline_width}>
            <VerticalTimeline lineColor={theme === "light" ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.8)'}>
                {
                    educations.map((edu, index) => (
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
                                date={edu.year}
                                dateClassName={styles.date}
                                icon={edu.logo}
                                iconClassName={`${styles.icon} dark:bg-black/[0.5] dark:text-white`}
                            >
                                <p>{edu.title}</p>
                                <p>{edu.school}</p>
                                <p>Major: {edu.major}</p>
                                <p>{ edu.gpa ? `GPA: ${edu.gpa}` : ''}</p>
                            </VerticalTimelineElement>
                        </Fragment>
                    ))
                }
            </VerticalTimeline>
        </div>
    )
}
