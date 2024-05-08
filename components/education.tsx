import React from 'react'
import { educations } from '@/lib/data'
import styles from './styles/Styles.module.css'
import Image from 'next/image'

export default function Education() {
    return (
        // <div id="education" className="my-[5rem] education_container">
        //     <p className='text-2xl text-center mb-[2rem]'>Education</p>
        //     <ol className="items-center sm:flex">
        //         {
        //             educations.map((edu, index) => (
        //                 <li className="relative mb-6 sm:mb-0" key={index}>
        //                     <div className="flex items-center">
        //                         <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"></div>
        //                         <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        //                     </div>
        //                     <div className="mt-3 sm:pe-8">
        //                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.title}</h3>
        //                         <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{edu.year}</time>
        //                         <p className="text-base font-normal text-gray-500 dark:text-gray-400">{edu.school}</p>
        //                     </div>
        //                 </li>
        //             ))
        //         }
        //     </ol>
        // </div>

        <div className={styles.education_container}>
            <div className={styles.education}>
                <div className={styles.timeline}>
                    {
                        educations.map((edu, index) => (
                            <div className={styles.container} key={index} style={{ animationDelay: `${index}s` }}>
                                <div className={styles.item}>
                                    <Image className={styles.edu_logo} src={edu.logo} alt='not_found' width={50} height={50}/>
                                    <h2 className={styles.title}>{edu.title}</h2>
                                    <p className={styles.edu_year}>{edu.year}</p>
                                    <p>{edu.school}</p>
                                    <span className={styles.arrow}></span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
