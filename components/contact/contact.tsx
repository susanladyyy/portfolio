"use client";
import React from 'react'
import styles from '../styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { sendEmail } from '../../actions/send_email'
import Alert from '@mui/material/Alert'

export default function Contact() {
    const { ref } = useMenuInView("Contact")

    return (
        <motion.div 
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            ref={ref} id="contact" className={`${styles.page_container} scroll-mt-[7rem] mt-[2rem] h-[80vh] w-[min(100%, 32rem)]`}>
            <div className={styles.title_container}>
                <span className={styles.title}>Contact</span> 
                <p className={styles.contact_subtitle}>You can contact me directly through my email <a className={styles.contact_email} href="mailto:susan.lady@outlook.com">susan.lady@outlook.com</a> or fill in the form below</p>
            </div>
            <div className={styles.contact}>
                <form action={
                    async (formData) => {
                        const {data, error}  = await sendEmail(formData)

                        if(error) {
                            <Alert severity='error'>There&apos;s a problem sending the email.</Alert>
                        }
                        else {
                            <Alert severity="success">Email has been sent!</Alert>
                        }
                    }
                } className={styles.contact_form}>
                    <input type="email" name="email" id="" className={styles.email_input} placeholder='Your email' required maxLength={50}/>
                    <textarea name="message" id="message" className={styles.message_input} rows={10} placeholder='Message...' required maxLength={500}></textarea>
                    <button type="submit" className={`group ${styles.contact_button}`}>Send <FaPaperPlane className='text-xs group-hover:translate-x-1 group:hover:translate-y-2'/></button>
                </form>
            </div>
        </motion.div>
    )
}
