'use client';

import { useSearchParams } from 'next/navigation';

import EmailSignup from './EmailSignup';
import AppointmentSignup from './AppointmentSignup';

export default function Signup() {
    const searchParams = useSearchParams();
    
    const servicable = searchParams.get('servicable_form');
    
    return (
        <div>
            { servicable ? <AppointmentSignup /> : <EmailSignup /> }
        </div>
    );
}
