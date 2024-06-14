'use client';

import { useFormState } from "react-dom";

import { Button, Input } from "@nextui-org/react";
import { processZipcode } from "./actions/processZipcode";

export default function Home() {
  const [formState, action] = useFormState(processZipcode, {
    errors: {}
  });

  return (
    <div>
      <h1 className="text-5xl my-10">Appliance Repair</h1>

      <form action={action} >
      <Input 
        name="zipcode"
        maxLength={5} 
        isRequired 
        type="text" 
        placeholder="Enter your zipcode"
        isInvalid={!!formState.errors.zipcode}
        errorMessage={formState.errors.zipcode?.join(', ')}
      />

      {formState.errors._form ? <div className="rounded p-2 bg-red-200 border border-red-400">{formState.errors._form?.join(', ')}</div> : null}
      
      <Button type="submit">Check</Button>
        
      </form>
    </div>
  );
}
