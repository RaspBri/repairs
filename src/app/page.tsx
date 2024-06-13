import { Button } from "@nextui-org/react";
import { processZipcode } from "./actions/processZipcode";

export default function Home() {
  return (
    <div>
      <h1>Repair</h1>

      {/* Create Button */}
      <form action={processZipcode} >
        <input 
          className="border border-black" 
          type="text" 
          name="zipcode" 
          maxLength={5} 
          minLength={5} 
          pattern="\d+" 
          required 
          placeholder="Enter zipcode" 
        />
      
        <Button type="submit">Check Zipcode</Button>
        
      </form>
    </div>
  );
}
