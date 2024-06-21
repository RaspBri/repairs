import { useState, useContext } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { submitSignup } from "../actions/submitSignup";
import { FormContext } from "./AppointmentSignup";

const unitedStates = [
    "AB",
    'CT',
    "NY"
];

export default function ContactInformation() {
    const form = useContext(FormContext);
    const [formState, action] = useFormState(submitSignup, {
        errors: {}
    });

    form.diagnosis.deviceType = "Dyson";
      
    // const [customer, setCustomer] = useState({
    //     email: "",
    //     firstName: "",
    //     lastName: "",
    //     phone: "",
    //     line_1: "",
    //     line_2: "",
    //     city: "",
    //     state: "",
    //     zipcode: ""
    // });
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        console.log(name, value);
        setForm({...customer, [name]: value})
    }

    return (
        <div>
            <h1>Schedule appointment</h1>

            <form className="flex flex-col gap-4">
                <h2>Contact Information</h2>
                <Input
                    value={customer.email}
                    name="email"
                    type="text"
                    label="Email"
                    maxLength={50}
                    isRequired 
                    placeholder="johndoe@gmail.com"
                    onChange={handleChange}
                    // startContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    // }
                />
                <Input 
                    type="text" 
                    name="firstName"
                    label="First Name"
                    maxLength={20}
                    isRequired 
                    value={customer.address.line_1}
                    placeholder="John Doe"
                    onChange={handleChange}
                />
                <Input 
                    type="text" 
                    label="Last Name"
                    name="Last Name"
                    maxLength={20}
                    isRequired 
                    value={customer.address.line_1}
                    placeholder="John Doe"
                    onChange={handleChange} 
                />
                <h2>Address</h2>
                <Input 
                    type="text" 
                    label="Address Line 1"
                    maxLength={100}
                    isRequired 
                    value={customer.address.line_1}
                    placeholder="123 Main Street"
                    onChange={handleChange} 
                />
                <Input 
                    type="text" 
                    label="Address Line 2"
                    maxLength={100}
                    value={customer.address.line_2}
                    placeholder="e.g. Unit 34"
                    onChange={handleChange}
                />
                <Input 
                    type="text" 
                    label="City"
                    maxLength={50}
                    isRequired 
                    value={customer.address.city}
                    placeholder="New York"
                    onChange={handleChange} 
                />
                <Select 
                    label="Select a State" 
                    className="max-w-xs" 
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
                    value={customer.address.zipcode} 
                    placeholder="43125"
                    onChange={handleChange}
                    // isInvalid={!!formState.errors.zipcode}
                    // errorMessage={formState.errors.zipcode?.join(', ')}
                />
            </form>
        </div>
    );
}