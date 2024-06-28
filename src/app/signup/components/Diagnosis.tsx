import {
    Model, 
    Make,
    Device, 
    getDeviceData,
    getMakeData, 
    getStoveMakes,
    getDysonModels, 
    getWasherMakes, 
    getTVMakes, 
    getComputerMakes, 
    getAppleModels 
} from "@/app/actions/appliance";

import { useState, useContext, useEffect } from "react";

import { Select, SelectItem } from "@nextui-org/react";
import { FormContext } from "../ServicableSignup";

/**
 * Everything below and up until the actual component is dummy data
 * 
 * An external API will be set up to fetch the device, make, and model data
 * 
 * When our external API is set up, we're going to cut all the code form the
 * following line up until the component begins. 
 */
enum DeviceEnum {
    NONE = "Select a Device",
    VACUUM = "Vacuum Cleaner",
    STOVE = "Stove",
    WASHER = "Washer",
    TELEVISION = "Television",
    COMPUTER = "Computer"
}

enum MakeEnum { 
    NONE = "Select a Make",
    DYSON = "Dyson"
}

const selectedDeviceMap = {
    [DeviceEnum.NONE]: [],
    [DeviceEnum.VACUUM]: getMakeData(),
    [DeviceEnum.STOVE]: getStoveMakes(),
    [DeviceEnum.WASHER]: getWasherMakes(),
    [DeviceEnum.TELEVISION]: getTVMakes(),
    [DeviceEnum.COMPUTER]: getComputerMakes()
}

const selectedMakeMap = {
    [MakeEnum.NONE]: [],
    [MakeEnum.DYSON]: getDysonModels(),
}

export default function Diagnosis() {
    const [selectedDevice, setSelectedDevice] = useState<DeviceEnum>(DeviceEnum.NONE);
    const [selectedMake, setSelectedMake] = useState<MakeEnum>(MakeEnum.NONE);
    const [makes, setMakes] = useState<Make[]>([]);
    const [models, setModels] = useState<Model[]>([]);
    const { form, onFormChange } = useContext(FormContext);

    const devices = getDeviceData();

    const onDeviceSelect =  (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDevice(e.target.value as DeviceEnum);
        // const makes = await getMakes(selectedDevice);
        setMakes(selectedDeviceMap[selectedDevice]);
        onFormChange(e);
    }

    const onMakeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMake(e.target.value as MakeEnum);
        onFormChange(e);
    }

    useEffect(() => {
        setMakes(selectedDeviceMap[selectedDevice]);
    }, [selectedDevice]);

    useEffect(() => {
        setModels(selectedMakeMap[selectedMake]);
    }, [selectedMake]);

    return (
        <div>
            <h1>Diagnosis</h1>
            <Select
                name="deviceType"
                label="Select a Device" 
                className="max-w-xs" 
                onChange={onDeviceSelect}
            >
                {devices.map((device) => (
                <SelectItem key={device.name}>
                    {device.name}
                </SelectItem>
                ))}
            </Select>
            <Select 
                name="deviceMake"
                label="Select a Make" 
                className="max-w-xs" 
                onChange={onMakeSelect}
            >
                {makes.map((make) => (
                <SelectItem key={make.name}>
                    {make.name}
                </SelectItem>
                ))}
            </Select>
            <Select 
                name="deviceMake"
                label="Select a Model"
                className="max-w-xs" 
            >
                {models.map((model) => (
                <SelectItem key={model.name}>
                    {model.name}
                </SelectItem>
                ))}
            </Select>
        </div>
    );
}