"use client";
import React from 'react'
import styles from '../styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { sendEmail } from '../../actions/send_email'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar';
import toast from 'react-hot-toast'
import SubmitButton from '../submit-button';

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
                <span className={`${styles.title} dark:bg-black/[0.5]`}>Contact</span> 
                <p className={`${styles.contact_subtitle} dark:text-white`}>You can contact me directly through my email <a className={styles.contact_email} href="mailto:susan.lady@outlook.com">susan.lady@outlook.com</a> or fill in the form below for a project or job discussions</p>
            </div>
            <div className={styles.contact}>
                <form action={
                    async (formData) => {
                        const {data, error}  = await sendEmail(formData)

                        if(error) {
                            // <Snackbar autoHideDuration={4000}>
                            //     <Alert severity='error'>There&apos;s a problem sending the email.</Alert>
                            // </Snackbar>
                            
                            //alert(error)

                            toast.error(error)
                            return
                        }
                        else {
                            // <Snackbar autoHideDuration={4000}>
                            //     <Alert severity="success">Email has been sent!</Alert>
                            // </Snackbar>

                            //alert('Email sent successfully')

                            toast.success('Email sent successfully')
                            return
                        }
                    }
                } className={styles.contact_form}>
                    <input type="email" name="email" id="" className={`${styles.email_input} dark:bg-black/[0.5] dark:border dark:border-[#433c8f] dark:shadow-white/[0.1]`} placeholder='Your email' required maxLength={50}/>
                    <textarea name="message" id="message" className={`${styles.message_input} dark:bg-black/[0.5] dark:border dark:border-[#433c8f] dark:shadow-white/[0.1]`} rows={10} placeholder='Message...' required maxLength={500}></textarea>
                    <SubmitButton />
                </form>
            </div>
        </motion.div>
    )
}
