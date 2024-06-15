'use client';

import { useSearchParams } from 'next/navigation';

import EmailSignup from './EmailSignup';
import AppointmentSignup from './AppointmentSignup';

interface SignupProps {
    params: {
        servicable_form: boolean;
    }
}

export default function Signup({ params }: SignupProps) {
    const searchParams = useSearchParams()
    
    const servicable = searchParams.get('servicable_form')
    
    return (
        <div>
            <h1>Signup</h1>
            { servicable ? <AppointmentSignup /> : <EmailSignup /> }
        </div>
    );
}
