'use client';

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

import { useFormState } from "react-dom"

import { Button, Input } from "@nextui-org/react"
import { processZipcode } from "./actions/processZipcode"

export default function Home() {
  const [formState, action] = useFormState(processZipcode, {
    errors: {}
  });

  return (
    <div>
      <Card className="my-10">
        <CardHeader className="text-center">
          <h1 className="text-5xl my-10 m-auto">Vacuum Repair</h1>
        </CardHeader>
        <CardBody className="flex flex-row justify-evenly">
          <Card className="w-64 h-48 p-3">
            <h1 className="text-3xl text-center py-3">EASY</h1>
            <p className="text-xl text-center">Don't ever carry your applicance across town for a repair ever again.</p>
          </Card>
          <Card className="w-64 h-48 p-3">
            <h1 className="text-3xl text-center py-3">QUICK</h1>
            <p className="text-xl text-center">We come to you with the right part and fix your appliance on the spot.</p>
          </Card>
          <Card className="w-64 h-48 p-3">
            <h1 className="text-3xl text-center py-3">COMPLETE</h1>
            <p className="text-xl text-center">We make sure your appliance is fixed and working like brand new before we leave.</p>
          </Card>
        </CardBody>
        <CardFooter>

        </CardFooter>
      </Card>
      

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
