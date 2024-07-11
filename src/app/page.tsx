import Link from "next/link";
import { paths } from "./paths";
import { Button } from "@nextui-org/react";

export default async function Home() {
  return (
    <div className="text-center">
      
      <h1 className="text-7xl text-center m-auto my-8 tracking-tightest leading-tight">Mobile Repair</h1>

      <h2 className="text-lg mb-10">
        Vacuum Cleaner -
        Computer - 
        Sewing Machine - 
        Smartphone - 
        Tablet - 
        Heater - 
        Television - 
        Air Conditioner - 
        Washer - 
        Dryer - 
        Garbage Disposal - 
        Electric Oven - 
        Electric Stove - 
        Refrigerator - 
        Freezer
      </h2>

      <Link href={paths.devices()}>
        <Button size="lg" color="primary">Get it Fixed</Button>
      </Link>
      
    </div>
  );
}
