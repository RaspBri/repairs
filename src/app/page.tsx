import { Button } from "@nextui-org/react";
import { verifyZipcode } from "./actions/verifyZipcode";

export default function Home() {
  return (
    <div>
      <h1>Repair</h1>
      {/* Create input field with form validation */}

      {/* Create Button */}
      <form action={verifyZipcode} >
        <input className="border border-black" type="text" name="zipcode" />
      
        {/* has to be a number */}
        {/* the length must be between 5 */}
        <Button type="submit">Check Zipcode</Button>
        
      </form>
    </div>
  );
}
