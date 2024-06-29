'use client';

import { useFormState } from "react-dom"
import { Button, Input } from "@nextui-org/react"
import { processZipcode } from "./actions/processZipcode"

export default function Home() {
  const [formState, action] = useFormState(processZipcode, {
    errors: {}
  });

  return (
    <div>
      
      <h1 className="text-7xl text-center m-auto py-8 tracking-tightest leading-tight">Mobile Repair</h1>

      <form action={action} className="flex">
        <Input 
          name="zipcode"
          maxLength={5} 
          isRequired 
          type="text" 
          className="mr-5"
          placeholder="Enter your zipcode"
          isInvalid={!!formState.errors.zipcode}
          errorMessage={formState.errors.zipcode?.join(', ')}
        />

        {formState.errors._form ? <div className="rounded p-2 bg-red-200 border border-red-400">{formState.errors._form?.join(', ')}</div> : null}
        
        <Button type="submit" color="primary">Check</Button>
        
      </form>
    </div>
  );
}
