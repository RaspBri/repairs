import Link from "next/link";
import { paths } from "@/app/paths";
import { Card } from "@nextui-org/react";
import { getModels } from "@/app/actions/appliance";
import { ServiceableParams } from "@/app/util/ServiceableForm";
interface ModelProps {
    params: {
        deviceId: string;
        manufacturerId: string;
    }
}

export default async function Models({ params }: ModelProps) {
    const { deviceId, manufacturerId } = params;
    console.log("MID: ", params)
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