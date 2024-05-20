import { experiences } from '@/lib/data'
import React, { Fragment } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import styles from '@/components/styles/Styles.module.css'
import { useInView } from 'react-intersection-observer'

export default function ExperienceElement() {
    const { ref, inView } = useInView()

    return (
        <div ref={ref}>
            <VerticalTimeline lineColor='rgba(255,255,255,0.5)'>
                {
                    experiences.map((exp, index) => (
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
    )
}
