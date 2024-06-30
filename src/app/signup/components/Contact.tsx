'use client';

import { useContext } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { submitSignup } from "@/app/actions/submitSignup";
import { FormContext } from "../ServicableSignup";

const unitedStates = [
    "AB",
    'CT',
    "NY"
];

export default function Contact() {
    const { form, onFormChange } = useContext(FormContext);
    const [formState, action] = useFormState(submitSignup, {
        errors: {}
    });

    return (
        <div>
            <form className="flex flex-col gap-4">
                <h1 className="text-7xl text-center m-auto py-8 tracking-tightest leading-tight">Contact</h1>
                <Input
                    value={form.contact.email}
                    name="email"
                    type="text"
                    label="Email"
                    maxLength={50}
                    isRequired 
                    placeholder="johndoe@gmail.com"
                    onChange={onFormChange}
                />
                <Input 
                    type="text" 
                    name="firstName"
                    label="First Name"
                    maxLength={20}
                    isRequired 
                    value={form.contact.firstName}
                    placeholder="John Doe"
                    onChange={onFormChange}
                />
                <Input 
                    type="text" 
                    label="Last Name"
                    name="Last Name"
                    maxLength={20}
                    isRequired 
                    value={form.contact.lastName}
                    placeholder="John Doe"
                    onChange={onFormChange} 
                />
                <Input 
                    type="text" 
                    label="Address Line 1"
                    maxLength={100}
                    isRequired 
                    value={form.contact.address_line_1}
                    placeholder="123 Main Street"
                    onChange={onFormChange} 
                />
                <Input 
                    type="text" 
                    label="Address Line 2"
                    maxLength={100}
                    value={form.contact.address_line_2}
                    placeholder="e.g. Unit 34"
                    onChange={onFormChange}
                />
                <Input 
                    type="text" 
                    label="City"
                    maxLength={50}
                    isRequired 
                    value={form.contact.city}
                    placeholder="New York"
                    onChange={onFormChange} 
                />
                <Select 
                    label="Select a State" 
                    className="max-w-xs"
                    value={form.contact.state}
                    name="state"
                    onChange={onFormChange}
                >
                    {unitedStates.map((usState) => (
                        <SelectItem key={usState}>
                            {usState}
                        </SelectItem>
                    ))}
                </Select>
                <Input 
                    name="zipcode"
                    label="Zip Code"
                    maxLength={5} 
                    isRequired 
                    type="text"
                    value={form.contact.zipcode}
                    placeholder="43125"
                    onChange={onFormChange}
                    // isInvalid={!!formState.errors.zipcode}
                    // errorMessage={formState.errors.zipcode?.join(', ')}
                />
            </form>
        </div>
    );
}