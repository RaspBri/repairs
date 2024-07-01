import Link from "next/link";
import { paths } from "@/app/paths";
import { Card } from "@nextui-org/react";
import { getManufacturers } from "@/app/actions/appliance";

/**
 * THIS COMPONENT MUST REMAIN SERVER SIDE RENDERED
 * 
 * Each card should not only show the manuffacturer, but it should
 * list the type of device. e.g. If the customer has selected vacuum
 * cleaner, each manufacturer card should say vacuum cleaner on it in
 * small colored lettering. More bold than the manufacturer name.
 * 
 * Similar to the devices page, we should have a little bit more info
 * about the particular manufacturer to increase SEO. For example, their
 * speciality, their history, their location, SOMETHING. We can discuss 
 * what is the best option for SEO. If you're doing this, we need to import
 * the getDevice() function from the /actions/appliance/index.ts file. 
 * 
 * getDevice()   (NOT getDevices() no "s")
 * 
 * An info circle that contains even more information packed in to increase
 * SEO would be benefitial, though, it may overcomplicate and confuse people.
 * So, keeping it simple may be the best approach. Let's discuss tradeoffs.
 * 
 * THIS COMPONENT MUST REMAIN SERVER SIDE RENDERED
 */

interface MakesProps {
    params: {
        deviceId: string
    }
}

export default async function Manufacturers({ params }: MakesProps) {
    const { deviceId } = params;
    const manufacturers = await getManufacturers(deviceId);

    return (
        <div>
            <h1 className="text-7xl text-center m-auto my-8 tracking-tightest leading-tight">Mobile Repair</h1>

            <h2 className="text-3xl text-center m-auto mb-8 tracking-tightest leading-tight">Select a Manufacturer</h2>

            <div className="grid grid-cols-2 gap-8">
                {manufacturers.map(manufacturer => (
                <Link key={manufacturer.manufacturerId} href={paths.models(deviceId, manufacturer.manufacturerId)}>
                    <Card className="flex flex-col justify-center p-3 h-32">
                    <h2 className='text-xl text-center font-semibold'>{manufacturer.manufacturerName}</h2>
                    </Card>
                </Link>
                ))}
            </div>
        </div>
    );
}