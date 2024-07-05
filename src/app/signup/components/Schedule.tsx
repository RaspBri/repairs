'use client';

import { useState } from "react";
import {DateInput} from "@nextui-org/react";
import {CalendarDate, parseDate} from "@internationalized/date";
import {TimeInput} from "@nextui-org/react";
import {Time} from "@internationalized/date";
import { SignupForm } from "@/app/types";

export interface ScheduleProps {
    formData: SignupForm
}

export default function Schedule({ formData }: ScheduleProps) {
    const [data, setData] = useState(formData.schedule);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <h1 className="text-7xl text-center m-auto py-8 tracking-tightest leading-tight">Schedule</h1>
            <DateInput 
                label={"Appointment date"} 
                isReadOnly
                className="max-w-xs mb-6"
                defaultValue={parseDate("2024-06-26")} 
                placeholderValue={new CalendarDate(1995, 11, 6)} 
            />
            <TimeInput 
                isReadOnly 
                className="max-w-xs mb-6"
                label="Appointment Time" 
                defaultValue={new Time(12, 45)} 
            />
        </div>
    );
}