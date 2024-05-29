import React from 'react'
import styles from '@/components/styles/Styles.module.css'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button type="submit" className={`group ${styles.contact_button}`} disabled={pending}>
            {
                pending ?
                <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-black'></div>
                :
                <>
                    Send <FaPaperPlane className='text-xs group-hover:translate-x-1 group:hover:translate-y-2'/>
                </>
            }
        </button>
    )
}
