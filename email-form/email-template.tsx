import React from 'react'
import {
    Html, Body, Head, Heading, Hr, Container, Preview, Section, Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type EmailTemplateProps = {
    message: string,
    email: string
}

export default function EmailTemplate({
    message, email
}: EmailTemplateProps) {
    return <Html>
        <Head />
        <Preview>
            New message from your portofolio site
        </Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white border border-black my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>
                            You received the following message from the contact form
                        </Heading>
                        <Text>
                            {message}
                        </Text>
                        <Hr></Hr>
                        <Text>
                            The sender&apos;s email is: {email}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
}
