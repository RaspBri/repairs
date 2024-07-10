'use client';

import { useState } from "react";
import {DateInput} from "@nextui-org/react";
import {CalendarDate, parseDate, today, getLocalTimeZone} from "@internationalized/date";
import {TimeInput} from "@nextui-org/react";
import {Time} from "@internationalized/date";
import { SignupForm } from "@/app/types";
import {Button, Calendar} from "@nextui-org/react";

export interface ScheduleProps {
    formData: SignupForm
}

export default function Schedule({ formData }: ScheduleProps) {
    const [data, setData] = useState(formData.schedule);
    const [dateInput, setDateInput] = useState();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1 className="text-5xl py-3 underline decoration-amber-500">Book Me</h1>
            <div className="flex space-x-4 pb-9">
                <Button color="default" variant="bordered" radius="none">
                    Career Check-In
                </Button>  
                <Button color="default" variant="bordered" radius="none">
                    Strategy Session
                </Button>  
                <Button color="default" variant="bordered" radius="none">
                    Consultation
                </Button>  
            </div>
            <h1 className="text-2xl mt-2">CHOOSE DURATION</h1>
            <div className="">
                <div>
                    <div className="my-3 flex space-x-4">
                        <Button size="sm" color="default" variant="bordered" radius="none">
                            30 minutes
                        </Button>  
                        <Button size="sm" color="default" variant="bordered" radius="none">
                            45 minutes
                        </Button>  
                        <Button size="sm" color="default" variant="bordered" radius="none">
                            60 minutes
                        </Button>  
                    </div>
                    
                    <p>
                    <Calendar
                        className="mb-7"
                        aria-label="Date (Min Date Value)"
                        defaultValue={today(getLocalTimeZone())}
                        minValue={today(getLocalTimeZone())}
                        color="warning"
                    />
                        <DateInput 
                            label={"Appointment date"} 
                            isReadOnly
                            className="max-w-xs mb-6"
                            defaultValue={today(getLocalTimeZone())} 
                            value={dateInput}
                            placeholderValue={new CalendarDate(1995, 11, 6)} 
                        />
                        <TimeInput 
                            isReadOnly 
                            className="max-w-xs mb-6"
                            label="Appointment Time" 
                            defaultValue={new Time(12, 45)} 
                        />
                    </p>
                </div>
                <div>
                    
                </div>
            </div>
            
        </div>
    );
}
