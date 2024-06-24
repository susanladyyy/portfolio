"use client";

import React from "react"
import { motion } from "framer-motion"
import { menus } from "@/lib/data"
import Link from "next/link"
import styles from '../styles/Styles.module.css'
import clsx from "clsx";
import { useActiveMenuContext } from "@/context/active-menu";

export default function Header() {
    const { activeMenu, setActiveMenu, setLastClick } = useActiveMenuContext()

    return (
        <header className={styles.header_container}>
            {/* <motion.div
                className={`${styles.header_bg} dark:bg-opacity-100 dark:bg-black dark:shadow-white/[0.1]`}
                
            ></motion.div> */}

            <motion.nav className={`${styles.nav_menu} dark:bg-[#080402]`}
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
                <ul className={`${styles.nav_ul} dark:text-white/[0.7]`}>
                {menus.map((menu) => (
                    <motion.li
                    className={`${styles.nav_item} relative`}
                    key={menu.id}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    >
                        <Link
                            className={`${
                                clsx(styles.nav_link, 
                                {
                                    'text-gray-950 dark:text-white font-bold': activeMenu === menu.name,
                                }
                            )} dark:hover:text-white`}
                            onClick={
                                () => {
                                    setActiveMenu(menu.name)
                                    setLastClick(Date.now())
                                }
                            }
                            href={menu.id}>
                            {menu.name}

                            {
                                menu.name === activeMenu && (
                                    <motion.span className="border border-[#080402] dark:border-[#fbfcfa] shadow-md shadow-gray-500/[0.6] rounded-lg absolute inset-0 -z-10 dark:shadow-white/[0.6]" layoutId="activeMenu" 
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
            </motion.nav>
        </header>
    );
}