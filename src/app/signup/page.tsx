'use client';

import EmailSignup from './EmailSignup';
import AppointmentSignup from './AppointmentSignup';
import { ServiceableParams } from '../util/ServiceableForm';

const ServiceableMap = {
    [ServiceableParams.Serviceable]: <AppointmentSignup />,
    [ServiceableParams.NonServiceable]: <EmailSignup />
};

type SignupPageParams = {
    searchParams: {
        type: ServiceableParams;
    }
}

export default function Signup({searchParams}: SignupPageParams) { 
    return (
        <div>
            {ServiceableMap[searchParams.type]}
        </div>
    );
}
