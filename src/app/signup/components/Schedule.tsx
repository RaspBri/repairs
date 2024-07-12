'use client';

import { useState } from "react";
import {today, getLocalTimeZone, toCalendarDate, GregorianCalendar} from "@internationalized/date";
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
    const [selectedServiceButton, setSelectedServiceButton] = useState();
    const [selectedTimeButton, setSelectedTimeButton] = useState();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const buttonService = [
        {id: 1, state:"idle", buttonName: "Leave At Shop"},
        {id: 3, state:"idle", buttonName: "Service At Location"},
        {id: 5, state:"idle", buttonName: "Consultation"},
    ];

    const buttonTime = [
        {id: 2, state:"idle", buttonName: "30 Minutes"},
        {id: 4, state:"idle", buttonName: "45 Minutes"},
        {id: 6, state:"idle", buttonName: "60 Minutes"}
    ];

    const handleColor = (row: { id: any; state: any; buttonName?: string; }) => {
        if(row.id % 2 === 0) { // if even
            setSelectedTimeButton(row.id);
        }
        else { // if odd
            setSelectedServiceButton(row.id);
        }
    };

    return (
        <div>
            <div>
                <h1 className="text-5xl py-3 underline decoration-amber-500">Book Me</h1>
                <div className="flex space-x-4 pb-9">
                    {buttonService.map((list) => (
                        <Button 
                            key = {list.id}
                            onClick={() => handleColor(list)} 
                            color={list.id === selectedServiceButton ? "warning" : "default"} 
                            variant="bordered" 
                            radius="none"
                        >
                            {list.buttonName}
                        </Button>  
                    ))}   
                </div>
            </div>
            <div>
                <h1 className="text-2xl mt-2">Appointment Duration</h1>
                <div className="my-3 flex space-x-4">
                    {buttonTime.map((list) => ( 
                        <Button 
                            size="sm" 
                            key = {list.id}
                            onClick={() => handleColor(list) } 
                            color={list.id === selectedTimeButton ? "warning" : "default"}
                            variant="bordered" 
                            radius="none"
                        >
                            {list.buttonName}
                        </Button>  
                    ))}  
                </div>
                <p>
                    <Calendar
                        className="mb-7"
                        aria-label="Date (Min Date Value)"
                        defaultValue={today(getLocalTimeZone())}
                        minValue={today(getLocalTimeZone())}
                        color="warning"
                    />
                    <TimeInput 
                        isRequired 
                        className="max-w-xs mb-6"
                        labelPlacement="outside-left" 
                        label="Appointment Time" 
                        defaultValue={new Time(8, 0)}
                        minValue={new Time(8)}
                        maxValue={new Time(20)}
                    />
                </p>
            </div>
        </div>
    );
}
