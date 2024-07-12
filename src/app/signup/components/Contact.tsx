'use client';

import { useState } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { submitSignup } from "@/app/actions/submitSignup";
import { SignupForm, ContactForm } from "@/app/types";

const unitedStates = [
    "AB",
    'CT',
    "NY"
];

// Remember to include processZipcode in submitSignup server action

export interface ContactProps {
    formData: SignupForm;
}

export default function Contact({ formData }: ContactProps) {
    const [data, setData] = useState<ContactForm>(formData.contact);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const [formformContext, action] = useFormState(submitSignup, {
        errors: {}
    });

    return (
        <div>
            <form className="flex flex-col gap-4">
                <h1 className="text-7xl text-center m-auto py-8 tracking-tightest leading-tight">Contact</h1>
                <Input
                    value={data.email}
                    name="email"
                    type="text"
                    label="Email"
                    maxLength={50}
                    isRequired 
                    placeholder="johndoe@gmail.com"
                    onChange={handleChange}
                />
                <Input 
                    type="text" 
                    name="firstName"
                    label="First Name"
                    maxLength={20}
                    isRequired 
                    value={data.firstName}
                    placeholder="John Doe"
                    onChange={handleChange}
                />
                <Input 
                    type="text" 
                    label="Last Name"
                    name="Last Name"
                    maxLength={20}
                    isRequired 
                    value={data.lastName}
                    placeholder="John Doe"
                    onChange={handleChange} 
                />
                <Input 
                    type="text" 
                    label="Address Line 1"
                    maxLength={100}
                    isRequired 
                    value={data.address_line_1}
                    placeholder="123 Main Street"
                    onChange={handleChange} 
                />
                <Input 
                    type="text" 
                    label="Address Line 2"
                    maxLength={100}
                    value={data.address_line_2}
                    placeholder="e.g. Unit 34"
                    onChange={handleChange}
                />
                <Input 
                    type="text" 
                    label="City"
                    maxLength={50}
                    isRequired 
                    value={data.city}
                    placeholder="New York"
                    onChange={handleChange} 
                />
                <Select 
                    label="Select a State" 
                    className="max-w-xs"
                    value={data.state}
                    name="state"
                    onChange={handleChange}
                >
                    {unitedStates.map((usState) => (
                        <SelectItem key={usState}>
                            {usState}
                        </SelectItem>
                    ))}
                </Select>
                <Input 
                    name="zipcode"
                    maxLength={5} 
                    isRequired 
                    type="text" 
                    className="mr-5"
                    placeholder="Enter your zipcode"
                    // isInvalid={!!formState.errors.zipcode}
                    // errorMessage={formState.errors.zipcode?.join(', ')}
                />

                {/* {formState.errors._form ? <div className="rounded p-2 bg-red-200 border border-red-400">{formState.errors._form?.join(', ')}</div> : null} */}
            </form>
        </div>
    );
}