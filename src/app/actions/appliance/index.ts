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
    modelName: string,
    manufacturerId: string,
    deviceId: string,
    releasedDate: string
}

const getManufacturersForDevice = (deviceId: string): Make[] => {
    const filteredModels = models.filter(model => model.deviceId === deviceId);
    const manufacturerIds = Array.from(new Set(filteredModels.map((model: Model): string => model.manufacturerId)));

    const filteredManufacturers = manufacturers.filter(manufacturer => 
        manufacturerIds.includes(manufacturer.manufacturerId)
    );

    return filteredManufacturers;
}

const getModelsByMake = (makeId: string): Model[] => {
    const filteredModels = models.filter(model => model.manufacturerId === makeId);
    return filteredModels;
}

export const getDevices = (): Device[] => {
    return devices;
}

export const getMakes = (deviceId: string): Make[] => {
    const manufacturers = getManufacturersForDevice(deviceId);
    return manufacturers;
}

export const getModels = (makeId: string): Model[] => {
    const models = getModelsByMake(makeId);
    return models;
}

/**
 * This data below is dummy data. WE NEED TO MOVE AWAY FROM DUMMY DATA
 * AND BEGIN USING REAL DATA ASAP!
 * 
 * We want to find any api that allows us to fetch device data
 * for all sorts of devices.
 * 
 * If there is no API already set up, which I don't believe there is,
 * we'll have to scrape the web, likely wikipedia
 * because I already found beautiful, clean lists of the information we need.
 * I'll turn this scraping project into an issue. If you find an API that exists
 * for certain devices, this would be better than scraping, but I doubt they exist.
 * 
 * If we find one API for stoves and one for televisions, but we can't find any
 * for any other devices, we'll just use the APIs for the devices that exist, and
 * scrape wikipedia or other sites for the rest of the data we need.
 * 
 * What data do we need?
 * 
 *************************** SMALL APPLIANCES  ************************
 * Vacuum Cleaners
 * Blenders
 * Sewing Machines
 * Heaters
 * Bicycles
  ***************************** SPECIALTY  ****************************
 * Furniture
 * Jewelery
 * Watches
 * Musical Instrument
  *************************** CONSTRUCTION  ***************************
 * Power Tools
  ************************* LARGE APPLIANCES  *************************
 * Air Conditioners
 * Garbage Disposals
 * Refrigerators and Freezers
 * Electric Ovens and Stoves
 * Washers/Dryers
  **************************** TECHNOLOGY  ****************************
 * Televisions
 * Smartphones and Tablets
 * Computers and Labtops
 * 
 * This is the data we need starting from the small appliances and moving * * our way to the more expensive "things". Let's begin just just trying to 
 * find any API that can provide us vacuum cleaner data. If we cannot find
 * this, we'll scrape the data from wikipedia: https://en.wikipedia.org/wiki/List_of_vacuum_cleaners
 */
//data
const devices = [
    {
        "deviceId": "D001",
        "deviceName": "air conditioner"
    },
    {
        "deviceId": "D002",
        "deviceName": "air fryer"
    },
    {
        "deviceId": "D003",
        "deviceName": "air ioniser"
    },
    {
        "deviceId": "D004",
        "deviceName": "aroma lamp"
    },
    {
        "deviceId": "D005",
        "deviceName": "attic fan"
    },
    {
        "deviceId": "D006",
        "deviceName": "bachelor griller"
    },
    {
        "deviceId": "D007",
        "deviceName": "back boiler"
    },
    {
        "deviceId": "D008",
        "deviceName": "barbecue"
    },
    {
        "deviceId": "D009",
        "deviceName": "beehive oven"
    },
    {
        "deviceId": "D010",
        "deviceName": "beverage opener"
    },
    {
        "deviceId": "D011",
        "deviceName": "boiler"
    },
    {
        "deviceId": "D012",
        "deviceName": "bread machine"
    },
    {
        "deviceId": "D013",
        "deviceName": "butane torch"
    },
    {
        "deviceId": "D014",
        "deviceName": "can opener"
    },
    {
        "deviceId": "D015",
        "deviceName": "ceiling fan"
    },
    {
        "deviceId": "D016",
        "deviceName": "central vacuum cleaner"
    },
    {
        "deviceId": "D017",
        "deviceName": "clothes dryer"
    },
    {
        "deviceId": "D018",
        "deviceName": "clothes iron"
    },
    {
        "deviceId": "D019",
        "deviceName": "coffee percolator"
    },
    {
        "deviceId": "D020",
        "deviceName": "coffeemaker"
    },
    {
        "deviceId": "D021",
        "deviceName": "combo washer dryer"
    }
];

const manufacturers = [
    {
        "manufacturerId": "M001",
        "manufacturerName": "CoolTech"
    },
    {
        "manufacturerId": "M002",
        "manufacturerName": "KitchenWiz"
    },
    {
        "manufacturerId": "M003",
        "manufacturerName": "FryTech"
    },
    {
        "manufacturerId": "M004",
        "manufacturerName": "PureAir Inc."
    },
    {
        "manufacturerId": "M005",
        "manufacturerName": "ScentedHome"
    },
    {
        "manufacturerId": "M006",
        "manufacturerName": "HomeScents"
    },
    {
        "manufacturerId": "M007",
        "manufacturerName": "EnergySaver"
    },
    {
        "manufacturerId": "M008",
        "manufacturerName": "CoolAir"
    },
    {
        "manufacturerId": "M009",
        "manufacturerName": "BachelorChef"
    },
    {
        "manufacturerId": "M010",
        "manufacturerName": "BackyardPro"
    },
    {
        "manufacturerId": "M011",
        "manufacturerName": "OutdoorLiving"
    },
    {
        "manufacturerId": "M012",
        "manufacturerName": "GrillTech"
    },
    {
        "manufacturerId": "M013",
        "manufacturerName": "HoneyBake"
    },
    {
        "manufacturerId": "M014",
        "manufacturerName": "BeverageTech"
    },
    {
        "manufacturerId": "M015",
        "manufacturerName": "HotWater Ltd."
    },
    {
        "manufacturerId": "M016",
        "manufacturerName": "HeatMaster"
    },
    {
        "manufacturerId": "M017",
        "manufacturerName": "BreadEase"
    },
    {
        "manufacturerId": "M018",
        "manufacturerName": "FireTech"
    },
    {
        "manufacturerId": "M019",
        "manufacturerName": "EasyOpen"
    },
    {
        "manufacturerId": "M020",
        "manufacturerName": "AirFlow"
    },
    {
        "manufacturerId": "M021",
        "manufacturerName": "HomeSweeper"
    },
    {
        "manufacturerId": "M022",
        "manufacturerName": "LaundryPro"
    },
    {
        "manufacturerId": "M023",
        "manufacturerName": "PressEase"
    }
];

const models = [
        {
            "modelId": "AC001",
            "modelName": "CoolBreeze X3000",
            "manufacturerId": "M001",
            "deviceId": "D001",
            "releasedDate": "2022-03-15"
        },
        {
            "modelId": "AC002",
            "modelName": "CoolBreeze X5000",
            "manufacturerId": "M001",
            "deviceId": "D001",
            "releasedDate": "2023-05-20"
        },
        {
            "modelId": "AF001",
            "modelName": "AirFry Master Pro",
            "manufacturerId": "M002",
            "deviceId": "D002",
            "releasedDate": "2023-06-28"
        },
        {
            "modelId": "AF002",
            "modelName": "AirFry Super Plus",
            "manufacturerId": "M003",
            "deviceId": "D002",
            "releasedDate": "2022-09-15"
        },
        {
            "modelId": "AI001",
            "modelName": "IonizeTech 5000",
            "manufacturerId": "M004",
            "deviceId": "D003",
            "releasedDate": "2023-01-10"
        },
        {
            "modelId": "AI002",
            "modelName": "IonizeTech 6000",
            "manufacturerId": "M004",
            "deviceId": "D003",
            "releasedDate": "2024-03-05"
        },
        {
            "modelId": "AL001",
            "modelName": "AromaGlow Deluxe",
            "manufacturerId": "M005",
            "deviceId": "D004",
            "releasedDate": "2022-09-20"
        },
        {
            "modelId": "AL002",
            "modelName": "AromaGlow Plus",
            "manufacturerId": "M006",
            "deviceId": "D004",
            "releasedDate": "2023-02-28"
        },
        {
            "modelId": "AF003",
            "modelName": "AtticBreeze ECO",
            "manufacturerId": "M007",
            "deviceId": "D005",
            "releasedDate": "2023-04-05"
        },
        {
            "modelId": "AF004",
            "modelName": "AtticCool Ultra",
            "manufacturerId": "M008",
            "deviceId": "D005",
            "releasedDate": "2022-11-11"
        },
        {
            "modelId": "BG001",
            "modelName": "GrillMaster Solo",
            "manufacturerId": "M009",
            "deviceId": "D006",
            "releasedDate": "2022-12-12"
        },
        {
            "modelId": "BG002",
            "modelName": "GrillMaster Duo",
            "manufacturerId": "M009",
            "deviceId": "D006",
            "releasedDate": "2023-07-15"
        },
        {
            "modelId": "BB001",
            "modelName": "BackBurner Elite",
            "manufacturerId": "M010",
            "deviceId": "D007",
            "releasedDate": "2023-02-18"
        },
        {
            "modelId": "BB002",
            "modelName": "BackBurner Max",
            "manufacturerId": "M010",
            "deviceId": "D007",
            "releasedDate": "2022-10-10"
        },
        {
            "modelId": "BBQ001",
            "modelName": "FlameKing BBQ Pro",
            "manufacturerId": "M011",
            "deviceId": "D008",
            "releasedDate": "2022-07-30"
        },
        {
            "modelId": "BBQ002",
            "modelName": "GrillMaster BBQ 2000",
            "manufacturerId": "M012",
            "deviceId": "D008",
            "releasedDate": "2023-03-14"
        },
        {
            "modelId": "BO001",
            "modelName": "HiveHeat Oven",
            "manufacturerId": "M013",
            "deviceId": "D009",
            "releasedDate": "2023-05-14"
        },
        {
            "modelId": "BO002",
            "modelName": "HiveHeat Plus",
            "manufacturerId": "M013",
            "deviceId": "D009",
            "releasedDate": "2022-12-20"
        },
        {
            "modelId": "BO003",
            "modelName": "BrewMaster Opener",
            "manufacturerId": "M014",
            "deviceId": "D010",
            "releasedDate": "2022-10-08"
        },
        {
            "modelId": "BO004",
            "modelName": "BrewMaster Ultra",
            "manufacturerId": "M014",
            "deviceId": "D010",
            "releasedDate": "2023-06-11"
        },
        {
            "modelId": "BL001",
            "modelName": "BoilTech Plus",
            "manufacturerId": "M015",
            "deviceId": "D011",
            "releasedDate": "2023-03-22"
        },
        {
            "modelId": "BL002",
            "modelName": "BoilTech Pro",
            "manufacturerId": "M016",
            "deviceId": "D011",
            "releasedDate": "2022-09-30"
        },
        {
            "modelId": "BM001",
            "modelName": "BreadMist Pro",
            "manufacturerId": "M017",
            "deviceId": "D012",
            "releasedDate": "2022-11-25"
        },
        {
            "modelId": "BM002",
            "modelName": "BreadMist Ultra",
            "manufacturerId": "M017",
            "deviceId": "D012",
            "releasedDate": "2023-07-18"
        },
        {
            "modelId": "BT001",
            "modelName": "FlameFire Torch",
            "manufacturerId": "M018",
            "deviceId": "D013",
            "releasedDate": "2023-07-12"
        },
        {
            "modelId": "BT002",
            "modelName": "BlazeTorch Pro",
            "manufacturerId": "M018",
            "deviceId": "D013",
            "releasedDate": "2022-08-25"
        },
        {
            "modelId": "CO001",
            "modelName": "CanOpener Ultra",
            "manufacturerId": "M019",
            "deviceId": "D014",
            "releasedDate": "2022-08-16"
        },
        {
            "modelId": "CO002",
            "modelName": "CanOpener Master",
            "manufacturerId": "M019",
            "deviceId": "D014",
            "releasedDate": "2023-05-23"
        },
        {
            "modelId": "CF001",
            "modelName": "BreezeMax Plus",
            "manufacturerId": "M020",
            "deviceId": "D015",
            "releasedDate": "2023-01-30"
        },
        {
            "modelId": "CF002",
            "modelName": "BreezeMax Deluxe",
            "manufacturerId": "M020",
            "deviceId": "D015",
            "releasedDate": "2022-11-14"
        },
        {
            "modelId": "CV001",
            "modelName": "CentralSuck 2000",
            "manufacturerId": "M021",
            "deviceId": "D016",
            "releasedDate": "2022-12-05"
        },
        {
            "modelId": "CV002",
            "modelName": "VacuumMaster 3000",
            "manufacturerId": "M021",
            "deviceId": "D016",
            "releasedDate": "2023-04-30"
        },
        {
            "modelId": "CD001",
            "modelName": "DrySmart Deluxe",
            "manufacturerId": "M022",
            "deviceId": "D017",
            "releasedDate": "2023-04-20"
        },
        {
            "modelId": "CD002",
            "modelName": "DryMaster Pro",
            "manufacturerId": "M022",
            "deviceId": "D017",
            "releasedDate": "2022-08-12"
        },
        {
            "modelId": "CI001",
            "modelName": "IronMaster 5000",
            "manufacturerId": "M023",
            "deviceId": "D018",
            "releasedDate": "2022-10-30"
        }
];

