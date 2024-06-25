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
        <header className="z-[999] relative">
            <motion.div
            className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-[#fafbfc] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:bg-[#080402] dark:border-black/40 dark:bg-opacity-75"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>
    
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                {menus.map((menu) => (
                    <motion.li
                    className={`h-3/4 flex items-center justify-center relative`}
                    key={menu.id}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    >
                        <Link
                            className={`${
                                clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300', 
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
            </nav>
        </header>
    );
}