export type Device = {
    id: number;
    name: string;
}

export type Make = {
    id: number;
    name: string;
}

export type Model = {
    id: number;
    name: string;
}

export const getDeviceData = (): Device[] => {
    const devices = [
        {id: 0, name: "None"},
        {id: 1, name: "Vacuum Cleaner"}, 
        {id: 2, name: "Stove"},
        {id: 3, name: "Washer"},
        {id: 4, name: "Television"},
        {id: 5, name: "Computer"}
    ];

    return devices;
}



export const getMakeData = (): Make[] => {
    const vacuumMakes = [
        { id: 0, name: "Dyson"},
        { id: 1, name: "Kirby"},
        { id: 2, name: "Riccar"}
    ];

    return vacuumMakes
}



export const getDysonModels = (): Model[] => {
    const dysonModels = [
        { id: 0, name: "Ball"},
        { id: 1, name: "K-48"},
        { id: 2, name: "2000"},
    ];

    return dysonModels;
}

export const getStoveMakes = (): Make[] => {
    const stoveMakes = [
        { id: 0, name: "Kenmore" },
        { id: 1, name: "LG" },
        { id: 2, name: "Sony" },
        { id: 3, name: "Apple" },
    ];

    return stoveMakes;
}

export const getWasherMakes = (): Make[] => {
    const washerMakes = [
        { id: 0, name: "Samsung" },
    ];

    return washerMakes;
}

export const getTVMakes = (): Make[] => {
    const tvMakes = [
        { id: 0, name: "LG" },
        { id: 1, name: "Sony" },
    ];

    return tvMakes;
}

export const getComputerMakes = (): Make[] => {
    const computerMakes = [
        { id: 0, name: "Apple" },
        { id: 1, name: "Dell" },
        { id: 2, name: "Microsoft" },
    ];

    return computerMakes;
}

export const getAppleModels = (): Model[] => {
    const AppleModels = [
        { id: 0, name: "iPhone" },
    ];

    return AppleModels;
}





 

