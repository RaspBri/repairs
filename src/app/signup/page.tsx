'use client';

import { useSearchParams } from 'next/navigation';

import AppointmentSignup from './AppointmentSignup';
import EmailSignup from './EmailSignup';

export default function Signup() {
    const searchParams = useSearchParams();
    
    const servicable = searchParams.get('servicable_form') === "true" ? <AppointmentSignup /> : <EmailSignup />;
    
    return (
        <div>{servicable}</div>
    );
}
