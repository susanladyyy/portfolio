"use client";

import React from "react"
import { motion } from "framer-motion"
import { menus } from "@/lib/data"
import Link from "next/link"
import styles from '@/components/styles/Styles.module.css'

export default function Header() {
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
                    className={styles.nav_item}
                    key={menu.id}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    >
                        <Link
                            className={styles.nav_link}
                            href={menu.id}>
                            {menu.name}
                        </Link>
                    </motion.li>
                ))}
                </ul>
            </nav>
        </header>
    );
}