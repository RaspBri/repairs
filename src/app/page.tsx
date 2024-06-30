import Link from "next/link";
import { paths } from "./paths";
import { Card } from "@nextui-org/react";
import { getDevices } from "./actions/appliance";

export default async function Home() {
  const devices = await getDevices();

  return (
    <div>
      
      <h1 className="text-7xl text-center m-auto my-8 tracking-tightest leading-tight">Mobile Repair</h1>

      <h2 className="text-3xl text-center m-auto mb-8 tracking-tightest leading-tight">Select a Device</h2>

      <div className="grid grid-cols-2 gap-8">
        {devices.map(device => (
          <Link key={device.deviceId} href={paths.makes(device.deviceId)}>
            <Card className="flex flex-col justify-center p-3 h-32">
              <h2 className='text-xl text-center font-semibold'>{device.deviceName}</h2>
            </Card>
          </Link>
          ))}
      </div>
      
    </div>
  );
}
