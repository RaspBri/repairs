'use server';

export type Device = {
    deviceId: string;
    deviceName: string;
}

export type Make = {
    manufacturerId: string;
    manufacturerName: string;
}

export type Model = {
    modelId: string;
    modelName: string;
    manufacturerId: string;
    deviceId: string;
    releasedDate: string;
}

export const getDevices = async (): Promise<Device[]> => {
    const res = await fetch("http://localhost:3001/getDevices");

    if (!res.ok) {
        throw new Error("CANNOT FETCH DEVICE DATA");
    }

    return res.json();
}

export const getMakes = async (deviceId: string): Promise<Make[]> => {
    const res = await fetch(`http://localhost:3001/getMakes/${deviceId}`);

    if (!res.ok) {
        throw new Error("CANNOT FETCH DEVICE DATA");
    }

    return res.json();
}

export const getModels = async (makeId: string): Promise<Model[]> => {
    const res = await fetch(`http://localhost:3001/getModels/${makeId}`);

    if (!res.ok) {
        throw new Error("CANNOT FETCH DEVICE DATA");
    }

    return res.json();
}