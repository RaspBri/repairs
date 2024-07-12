'use client';

/**
 * ALL THE COMMENTS IN THIS COMPONENT ARE UP FOR DISCUSSION. JUST REACH OUT
 */

import { useState } from "react";
import { today, getLocalTimeZone, toCalendarDate, GregorianCalendar, Time } from "@internationalized/date";
import { SignupForm, ScheduleForm, ServiceType } from "@/app/types";
import { Button, Calendar, CalendarDate, TimeInput, TimeInputValue } from "@nextui-org/react";

export interface ScheduleProps {
    formData: SignupForm,
    handleFormUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Schedule({ formData, handleFormUpdate }: ScheduleProps) {
    const [data, setData] = useState<ScheduleForm>(formData.schedule);
    const [selectedDate, setSelectedDate] = useState<CalendarDate>(today(getLocalTimeZone()));
    const [selectedTime, setSelectedTime] = useState<TimeInputValue>(new Time(8, 0));
    const [selectedServiceButton, setSelectedServiceButton] = useState<ServiceType>();
    const [selectedTimeButton, setSelectedTimeButton] = useState();

    /**
     * POINT A
     * 
     * We're going to handle the form change when they move either forward
     * or backward in the flow. 
     * 
     * NOT WITH EVERY CHANGE
     * 
     * This functionality could be built into the `handleNext` and
     * `handlePrev` functions in the parent component
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    /**
     * POINT B
     * 
     * We should use the answers to the questions on the previous form
     * state (Diagnosis) to provide a list of recommended services. We will
     * ALWAYS offer a tune-up. But, if something just isn't right with the
     * way they answered their questions, we'll provide a wider range of 
     * options
     * 
     * I'm also beginning to think through the best way to type the services.
     * If you take a peak at the /types/index.ts file, you'll see that I began 
     * building out the types for the services provided. They should definitely
     * be given a standardized structure regardless of device/manufacturer/model.
     */
    const buttonService = [
        {id: 1, state:"idle", buttonName: "Leave At Shop"},
        {id: 3, state:"idle", buttonName: "Service At Location"},
        {id: 5, state:"idle", buttonName: "Consultation"},
    ];

    /**
     * POINT C
     * 
     * This will be automatically decided based on the services recommended
     * 
     * Each service takes a certain amount of time
     * 
     * e.g. If it's a vacuum cleaner receiving a tune-up, it'll take 30 minutes,
     * but if it's a vacuum cleaner receiving a motor swap and a cord replacement,
     * it'll take 90 minutes.
     * 
     * So, the estimated time for repair will be determined by POINT B
     */
    const buttonTime = [
        {id: 2, state:"idle", buttonName: "30 Minutes"},
        {id: 4, state:"idle", buttonName: "45 Minutes"},
        {id: 6, state:"idle", buttonName: "60 Minutes"}
    ];

    /**
     * What is this for? Curious..
     */
    const handleColor = (row: { id: any; state: any; buttonName?: string; }) => {
        if(row.id % 2 === 0) { // if even
            setSelectedTimeButton(row.id);
        }
        else { // if odd
            setSelectedServiceButton(row.id);
        }
    };

    const handleDateChange = (value: CalendarDate) => {
        setSelectedDate(value);
    }

    const handleTimeChange = (value: TimeInputValue) => {
        setSelectedTime(value);
    }

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
                        minValue={today(getLocalTimeZone())}
                        color="warning"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                    <TimeInput 
                        isRequired 
                        className="max-w-xs mb-6"
                        labelPlacement="outside-left" 
                        label="Appointment Time" 
                        minValue={new Time(8)}
                        maxValue={new Time(20)}
                        value={selectedTime}
                        onChange={handleTimeChange}
                    />
                </p>
            </div>
        </div>
    );
}
