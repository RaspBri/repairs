'use server';

import { devices, manufacturers, models } from "./data";

export type Device = {
    deviceId: string;
    deviceName: string;
}

export type Manufacturer = {
    manufacturerId: string;
    manufacturerName: string;
}

export type Model = {
    modelId: string;
    modelName: string,
    manufacturerId: string,
    deviceId: string,
    releasedDate: string
}

const getManufacturersForDevice = (deviceId: string): Manufacturer[] => {
    const filteredModels = models.filter(model => model.deviceId === deviceId);
    const manufacturerIds = Array.from(new Set(filteredModels.map((model: Model): string => model.manufacturerId)));

    const filteredManufacturers = manufacturers.filter(manufacturer => 
        manufacturerIds.includes(manufacturer.manufacturerId)
    );

    return filteredManufacturers;
}

const getModelsByManufacturer = (manufacturerId: string): Model[] => {
    const filteredModels = models.filter(model => model.manufacturerId === manufacturerId);
    return filteredModels;
}

export const getDevice = (deviceId: string): string => {
    const device = devices.find(device => device.deviceId === deviceId);

    if (!device) {
        throw new Error("Could not retrieve device")
    }

    return device?.deviceName;
}

export const getDevices = (): Device[] => {
    return devices;
}

export const getManufacturers = (deviceId: string): Manufacturer[] => {
    const manufacturers = getManufacturersForDevice(deviceId);
    return manufacturers;
}

export const getModels = (manufacturerId: string): Model[] => {
    const models = getModelsByManufacturer(manufacturerId);
    return models;
}