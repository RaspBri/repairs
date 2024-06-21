import React from "react";

import { Button, Input } from "@nextui-org/react"
import { useState } from "react";


export default function EmailSignup() {
    const [email, setEmail] = useState<string>("");


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    // const validateEmail = (value:string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    //     if (validateEmail(input)) {
    //         console.log("valid email")
    //     }

    // const isInvalid = React.useMemo(() => {
    //     if (input === "") return false;
    
    //     return validateEmail(input) ? false : handleSubmit();
    //   }, [input]);
    
    const validateEmail = (email: string): boolean => {
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
        return re.test(email.toLowerCase());
    } 

    const handleSubmit = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        console.log("Hello")
        console.log(email)
        if (validateEmail(email)) {
            console.log("valid email")
        }
        

    }

    return (
        <div>
            <h1 className="text-5xl my-10">Email Signup</h1>

      <form  >
      <Input 
        name="email"
        //maxLength={5} 
        isRequired 
        type="text" 
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}

        //isInvalid={isInvalid}

        //isInvalid={!!formState.errors.zipcode}
        //errorMessage={formState.errors.zipcode?.join(', ')}
      />

      {/* // {formState.errors._form ? <div className="rounded p-2 bg-red-200 border border-red-400">{formState.errors._form?.join(', ')}</div> : null} */}
      
      <Button onClick={handleSubmit}>Submit</Button>
      </form>
        </div>
    );
}