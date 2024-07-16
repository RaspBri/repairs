'use client';

import { SetStateAction, useState } from "react";
import { today, getLocalTimeZone, toCalendarDate, GregorianCalendar } from "@internationalized/date";
import { TimeInput, Input, calendar } from "@nextui-org/react";
import { Time } from "@internationalized/date";
import { SignupForm } from "@/app/types";
import { Button, Calendar}  from "@nextui-org/react";
import  { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export interface ScheduleProps {
    formData: SignupForm
}

export default function Schedule({ formData }: ScheduleProps) {
    const [data, setData] = useState(formData.schedule);
    const [dateInput, setDateInput] = useState();
    const [selectedServiceButton, setSelectedServiceButton] = useState();
    const [selectedTimeButton, setSelectedTimeButton] = useState();
    
    const session = useSession(); // tokens, session exists when there is a user
    const supabase = useSupabaseClient(); // talks to supabase
    const [eventDate, setEventDate] = useState(today(getLocalTimeZone()));
    const [startTime, setStartTime] = useState("00:00:00");
    const [endTime, setEndTime] = useState("");
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");

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

    const handleEndTime = (itemID: number) => {
        switch(itemID){
            case 2:
                setEndTime("30");
                break;
            case 4:
                setEndTime("45");
                break;
            case 6:
                setEndTime("60");
                break;
        }
    };

    const handleEventDescription = (buttonName: SetStateAction<string>) => {
        setEventDescription(buttonName);
    };

    async function googleSignIn() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                scopes: 'https://www.googleapis.com/auth/calendar.events'
            }
        });
        if(error) {
            alert("Error logging into Google provider with Supabase");
            console.log(error);
        }
    }

    async function googleSignOut() {
        await supabase.auth.signOut();
    }

    async function createCalendarEvent() {
        
        const splitTime = startTime.toString().split(":");
        var startDateTime = new Date(eventDate.toString());
        startDateTime.setHours(Number(splitTime[0]), Number(splitTime[1]));
        const eventEndTime = new Date(startDateTime.getTime() + Number(endTime) * 60_000);

        const event = {
            'summary': eventName,
            'description': eventDescription,
            'start': {
                'dateTime': startDateTime.toISOString(), // Date.toISOString()
                'timeZome': Intl.DateTimeFormat().resolvedOptions().timeZone, // gets time zone of your location
            },
            'end': {
                'dateTime': eventEndTime.toISOString(), // Date.toISOString()
                'timeZome': Intl.DateTimeFormat().resolvedOptions().timeZone, // gets time zone of your location
            },
        }
          

        await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
            method: "POST",
            headers: {
                'Authorization': "Bearer " + session?.provider_token // Access token for google
            },
            body: JSON.stringify(event)
        }).then((data) => {
            return data.json(); // Turn into javascript object
        }).then((data => {
            console.log(data);
            alert("Event created, check your Google Calendar")
        }))
    }


    
    console.log(`Event Date: ${eventDate}`);
    console.log(`Start Time: ${startTime}`);
    console.log(`End Time: ${endTime}`);
    console.log(`Event Name: ${eventName}`);
    // TODO: Must only read event, then take input from cal and time to create an event when form is submitted...comes later on
    return (
        <div>
            <div>
                <h1 className="text-5xl py-3 underline decoration-amber-500">Book Me</h1>
                <div>
                    {session ? 
                        <> 
                            <h2>Signed in as: {session.user.email}</h2>
                            <p>Event Name</p>
                            <Input type="text" onChange={(e) => setEventName(e.target.value)} />
                            <Button onClick={() => createCalendarEvent()}>Create Calendar Event</Button>
                            <button onClick={() => googleSignOut()}>Sign Out</button>
                        </>
                        :
                        <>
                            <button onClick={() => googleSignIn()}>Sign In w/ Google</button>
                        </>
                    }
                </div>
                
                <div className="flex space-x-4 pb-9">
                    {buttonService.map((list) => (
                        <Button 
                            key = {list.id}
                            onClick={() => handleColor(list)} 
                            onPress={() => handleEventDescription(list.buttonName)}
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
                            onPress={() => handleEndTime(list.id)}
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
                        onChange={setEventDate}
                    />
                    <TimeInput 
                        isRequired 
                        className="max-w-xs mb-6"
                        labelPlacement="outside-left" 
                        label="Appointment Time" 
                        minValue={new Time(8)}
                        maxValue={new Time(16, 30)}
                        onChange={setStartTime}
                    />
                </p>
            </div>
        </div>
    );
}
