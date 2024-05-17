"use client";

import React, { useState } from "react"
import { motion } from "framer-motion"
import { menus } from "@/lib/data"
import Link from "next/link"
import styles from '@/components/styles/Styles.module.css'
import clsx from "clsx";

export default function Header() {
    const[activeMenu, setActiveMenu] = useState('Projects');

    return (
        <header className={styles.header_container}>
            <motion.div
                className={styles.header_bg}
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            <nav className={styles.nav_menu}>
                <ul className={styles.nav_ul}>
                {menus.map((menu) => (
                    <motion.li
                    className={`${styles.nav_item} relative`}
                    key={menu.id}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    >
                        <Link
                            className={
                                clsx(styles.nav_link, 
                                {
                                    'text-gray-950 font-bold': activeMenu === menu.name,
                                }
                            )}
                            onClick={
                                () => {
                                    setActiveMenu(menu.name)
                                }
                            }
                            href={menu.id}>
                            {menu.name}

                            {
                                menu.name === activeMenu && (
                                    <motion.span className="border border-white shadow-md rounded-lg absolute inset-0 -z-10" layoutId="activeMenu" 
                                    transition={{
                                        type:"spring",
                                        stiffness: 380,
                                        damping: 30
                                    }}></motion.span>
                                )
                            }
                            
                        </Link>
                    </motion.li>
                ))}
                </ul>
            </nav>
        </header>
    );
}