import Link from "next/link";
import { paths } from "@/app/paths";
import { Card } from "@nextui-org/react";
import { getDevice, getModels } from "@/app/actions/appliance";

/**
 * THIS COMPONENT MUST REMAIN SERVER SIDE RENDERED
 * 
 * This is the last page the customer reaches before they reach a client side rendered component.
 * So, everything from the landing page until now is a sticky spot for the search engines to find
 * and share
 * 
 * This page must also be expanded to optimize SEO.
 * 
 * Similar to the manufacturer cards presenting the name of the devices, the model cards should
 * present both the device and the manufacturer on it. Again, the device name and manufacturer
 * name should be smaller than the manufacturer but bold. I already added the device to give you
 * an idea of what I mean. If you're doing this, we need a getManufacturer() function inside the
 * /actions/appliance/index.ts file. See getDevice() function for insight (NOT getDevices() no "s")
 * 
 * Similar to the device and manufacturer pages, we need to add a tiny bit of vital information
 * to each card. e.g. when the model was first released, different versions, designer, etc. We 
 * can discuss which is the most potent information for this.
 * 
 * Along with the additional information directly appearing on the card, it may be a good idea
 * to add an info circle that customers can find more information on. Even if they don't click
 * it, this ensures there is more information on the page for search engines to help us better
 * our SEO
 * 
 * THIS COMPONENT MUST REMAIN SERVER SIDE RENDERED
 */

interface ModelProps {
    params: {
        deviceId: string;
        manufacturerId: string;
    }
}

export default async function Models({ params }: ModelProps) {
    const { deviceId, manufacturerId } = params;
    console.log("MID: ", params)
    const device = getDevice(deviceId);
    const models = await getModels(manufacturerId);

    return (
        <div>
            <h1 className="text-7xl text-center m-auto my-8 tracking-tightest leading-tight">Mobile Repair</h1>

            <h2 className="text-3xl text-center m-auto mb-8 tracking-tightest leading-tight">Select a Model</h2>

            <div className="grid grid-cols-2 gap-8">
                {models.map(model => (
                <Link key={model.modelId} href={paths.signupForm()}>
                    <Card className="flex flex-col justify-center p-3 h-32">
                    <h2 className='text-xl text-center font-semibold'>{model.modelName}</h2>
                    </Card>
                </Link>
                ))}
            </div>
        </div>
    );
}