/**
 * We're going to create one path regardless of whether somebody is in a servicable or unservicable location
 */

import AppointmentSignup from './ServicableSignup';

export default function Signup() { 
    return (
        <div>
            <AppointmentSignup />
        </div>
    );
}
