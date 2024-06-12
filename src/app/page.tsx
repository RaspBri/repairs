'use client';

import { useFormState } from "react-dom";

const servicable = [
  55555,
  66666,
  22222
];

import { Button } from "@nextui-org/react";
import { verifyZipcode } from "./actions/verifyZipcode";

export default function Home() {
  const [formState, action] = useFormState(verifyZipcode, {
    error: {}
  });

  return (
    <div>
      <h1>Repair</h1>
      {/* Create input field with form validation */}

      {/* Create Button */}
      <form action={action} >
        <input className="border border-black" type="text" name="zipcode" />
      
        {/* has to be a number */}
        {/* the length must be between 5 */}
        <Button type="submit">Check Zipcode</Button>
        {formState.error.zipcode ? <div>{formState.error.zipcode.join(', ')}</div> : null}
      </form>
    </div>
  );
}
