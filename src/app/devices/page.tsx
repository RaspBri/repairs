import Link from "next/link";
import { paths } from "../paths";
import { Card } from "@nextui-org/react";
import { getDevices } from "../actions/appliance";

/**
 * THIS COMPONENT MUST REMAIN SERVER SIDE RENDERED
 * 
 * We're currently rendering all devices available for repair services
 * 
 * We need to add more information for SEO purposes, so each card needs
 * a few things added. We need to add this in a compact way since we're
 * building mobile first
 * 
 * 1. Add the types of devices: e.g. upright, canister, robotic, etc. (vacuums)
 * 2. Add an info circle button to each card that the user can click to
 *    to receive more information about each device. This info must be helpful.
 *    e.g. Typical/most common repairs
 * 
 * This will add additional information so search engines can help customers
 * find the page.
 * 
 * THIS COMPONENT MUST REMAIN SERVER SIDE RENDERED
 */

export default async function Devices() {
  const devices = await getDevices();

  return (
    <div>
      
      <h1 className="text-7xl text-center m-auto my-8 tracking-tightest leading-tight">Mobile Repair</h1>

      <h2 className="text-3xl text-center m-auto mb-8 tracking-tightest leading-tight">Select a Device</h2>

      <div className="grid grid-cols-2 gap-8">
        {devices.map(device => (
          <Link key={device.deviceId} href={paths.manufacturers(device.deviceId)}>
            <Card className="flex flex-col justify-center p-3 h-32">
              <h2 className='text-xl text-center font-semibold'>{device.deviceName}</h2>
            </Card>
          </Link>
          ))}
      </div>
      
    </div>
  );
}
