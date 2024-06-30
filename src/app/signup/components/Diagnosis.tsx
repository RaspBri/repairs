'use client';

import {
    Model, 
    Make,
    Device, 
    getDevices,
    getMakes, 
    getModels
} from "@/app/actions/appliance";

import { useState, useContext, useEffect } from "react";

import { Select, SelectItem } from "@nextui-org/react";
import { FormContext } from "../ServicableSignup";

export default function Diagnosis() {
    const [selectedDevice, setSelectedDevice] = useState<string>("");
    const [selectedMake, setSelectedMake] = useState<string>("");
    const [selectedModel, setSelectedModel] = useState<string>("");
    const [devices, setDevices] = useState<Device[]>([]);
    const [makes, setMakes] = useState<Make[]>([]);
    const [models, setModels] = useState<Model[]>([]);
    const { onFormChange } = useContext(FormContext);

    const onDeviceSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDevice(e.target.value);
        onFormChange(e);
    }

    const onMakeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMake(e.target.value);
        onFormChange(e);
    }

    const onModelSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedModel(e.target.value);
        onFormChange(e);
    }

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const devicesData = await getDevices();
                setDevices(devicesData);
            } catch (error) {
                console.error("Failed to fetch DEVICES", error);
            }
        };

        fetchDevices();
    }, []);

    useEffect(() => {
        const fetchMakes = async () => {
            try {
                const makes = await getMakes(selectedDevice);
                setMakes(makes);
                setModels([]);
            } catch (error) {
                console.error("Failed to fetch MAKES", error);
            }
        };

        fetchMakes();
    }, [selectedDevice]);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const models = await getModels(selectedMake);
                setModels(models);
            } catch (error) {
                console.error("Failed to fetch MODELS", error);
            }
        };

        fetchModels();
    }, [selectedMake]);

    return (
        <div>
            <h1 className="text-7xl text-center m-auto py-8 tracking-tightest leading-tight">Diagnosis</h1>
            <h2 className="text-3xl text-center m-auto pb-8 tracking-tightest leading-tight">What do you need repaired?</h2>
            <Select
                name="deviceType"
                label="Select a Device" 
                className="max-w-xs mb-6"
                onChange={onDeviceSelect}
            >
                {devices.map((device) => (
                <SelectItem key={device.deviceId}>
                    {device.deviceName}
                </SelectItem>
                ))}
            </Select>
            <Select 
                name="deviceMake"
                label="Select a Make" 
                className="max-w-xs mb-6" 
                onChange={onMakeSelect}
            >
                {makes.map((make) => (
                <SelectItem key={make.manufacturerId}>
                    {make.manufacturerName}
                </SelectItem>
                ))}
            </Select>
            <Select 
                name="deviceMake"
                label="Select a Model"
                className="max-w-xs mb-6" 
                onChange={onModelSelect}
            >
                {models.map((model) => (
                <SelectItem key={model.modelId}>
                    {model.modelName}
                </SelectItem>
                ))}
            </Select>
        </div>
    );
}