import { Card } from "@nextui-org/react";
import { getModels } from "@/app/actions/appliance";
import { passDevicesToForm } from "@/app/actions/submitDevices";

interface ModelProps {
    params: {
        deviceId: string;
        manufacturerId: string;
    }
}

export default async function Models({ params }: ModelProps) {
    const { deviceId, manufacturerId } = params;
    const models = await getModels(manufacturerId);

    return (
        <div>
            <h1 className="text-7xl text-center m-auto my-8 tracking-tightest leading-tight">Mobile Repair</h1>

            <h2 className="text-3xl text-center m-auto mb-8 tracking-tightest leading-tight">Select a Model</h2>

            <div className="grid grid-cols-2 gap-8">
                {models.map(model => (
                    <form key={model.modelId} action={passDevicesToForm}>
                        <input type="hidden" name="deviceId" value={deviceId} />
                        <input type="hidden" name="manufacturerId" value={manufacturerId} />
                        <input type="hidden" name="modelId" value={model.modelId} />
                        <button type="submit">
                            <Card className="flex flex-col justify-center p-3 h-32">
                                <h2 className='text-xl text-center font-semibold'>{model.modelName}</h2>
                            </Card>
                        </button>
                    </form>
                ))}
            </div>
        </div>
    );
}