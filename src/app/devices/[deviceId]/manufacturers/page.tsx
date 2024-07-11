import Link from "next/link";
import { paths } from "@/app/paths";
import { Card } from "@nextui-org/react";
import { getManufacturers } from "@/app/actions/appliance";

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