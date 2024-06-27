import { useState, useContext, useEffect } from "react";

import { Select, SelectItem } from "@nextui-org/react";
import { FormContext } from "../ServicableSignup";

enum Device {
    NONE = "Select a Device",
    VACUUM = "Vacuum Cleaner",
    STOVE = "Stove",
    WASHER = "Washer",
    TELEVISION = "Television",
    COMPUTER = "Computer"
}

type Make = {
    id: number;
    device: Device;
    name: string;
}

type Model = {
    id: string;
    name: string;
}

const devices = [
    { id: 0, name: Device.VACUUM},
    { id: 1, name: Device.STOVE}, 
    { id: 2, name: Device.WASHER},
    { id: 3, name: Device.TELEVISION},
    { id: 4, name: Device.COMPUTER}
];

const vacuumMakes = [
    { id: 0, device: Device.VACUUM, name: "Dyson"},
    { id: 1, device: Device.VACUUM, name: "Kirby"},
    { id: 2, device: Device.VACUUM, name: "Riccar"},
];

const stoveMakes = [
    { id: 0, device: Device.STOVE, name: "Kenmore"},
    { id: 1, device: Device.STOVE, name: "LG"},
    { id: 2, device: Device.STOVE, name: "Sony"},
    { id: 3, device: Device.STOVE, name: "Apple"},
];

const washerMakes = [
    { id: 2, device: Device.WASHER, name: "Samsung"}
];

const tvMakes = [
    { id: 0, device: Device.TELEVISION, name: "LG"},
    { id: 1, device: Device.TELEVISION, name: "Sony"},
];

const computerMakes = [
    { id: 0, device: Device.COMPUTER, name: "Apple"},
    { id: 1, device: Device.COMPUTER, name: "Dell"},
    { id: 2, device: Device.COMPUTER, name: "Microsoft"},
]; 

const AppleModels = [

];

// const map = {
//     []: Device.VACUUM
// }

const selectedDeviceMap = {
    [Device.NONE]: [],
    [Device.VACUUM]: vacuumMakes,
    [Device.STOVE]: stoveMakes,
    [Device.WASHER]: washerMakes,
    [Device.TELEVISION]: tvMakes,
    [Device.COMPUTER]: computerMakes
}

export default function Diagnosis() {
    const [selectedDevice, setSelectedDevice] = useState<Device>(Device.NONE);
    const [selectedMake, setSelectedMake] = useState(null);
    const [makes, setMakes] = useState<Make[]>([]);
    const [models, setModels] = useState<Model[]>([]);
    const { form, onFormChange } = useContext(FormContext);

    const onDeviceSelect =  (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDevice(e.target.value as Device);
        onFormChange(e);
    }

    useEffect(() => {
        setMakes(selectedDeviceMap[selectedDevice]);
    }, [selectedDevice]);

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
                label="Select a Make" 
                className="max-w-xs" 
            >
                {makes.map((make) => (
                <SelectItem key={make.id}>
                    {make.name}
                </SelectItem>
                ))}
            </Select>
            <Select 
                label="Select a Model"
                className="max-w-xs" 
            >
                {models.map((model) => (
                <SelectItem key={model.id}>
                    {model.name}
                </SelectItem>
                ))}
            </Select>
        </div>
    );
}