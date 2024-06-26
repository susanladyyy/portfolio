"use server";
import EmailTemplate from "@/email-form/email-template";
import { getErrorMessage, validateString } from "@/lib/email/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)
resend.apiKeys.create({ name: 'Production' });

export const sendEmail = async (formData: FormData) => {
    const message = formData.get("message")
    const sender = formData.get("email")

    if(!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }

    if(!validateString(sender, 100)) {
        return {
            error: "Invalid sender email"
        }
    }

    let data;
    
    try {
        data = await resend.emails.send({
            from: 'Contact Form Portfolio <onboarding@resend.dev>',
            to: 'susan.rumokoy@outlook.com',
            subject: 'Message from contact form',
            reply_to: sender as string,
            // text: message as string,
            react: React.createElement(EmailTemplate, {
                message: message as string,
                email: sender as string
            })
        })
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data,
    }
} 