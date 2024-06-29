'use client';

import React from "react";
import {DateInput} from "@nextui-org/react";
import {CalendarDate, parseDate} from "@internationalized/date";
import {TimeInput} from "@nextui-org/react";
import {Time} from "@internationalized/date";

export default function Schedule() {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <DateInput 
                label={"Appointment date"} 
                isReadOnly
                defaultValue={parseDate("2024-06-26")} 
                placeholderValue={new CalendarDate(1995, 11, 6)} 
            />
            <TimeInput 
                isReadOnly 
                label="Appointment Time" 
                defaultValue={new Time(12, 45)} 
            />
        </div>
    );
}