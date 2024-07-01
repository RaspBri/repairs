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
 * Microwaves
 * Dehumidifiers
 * Air Purifiers
  ************************* LARGE APPLIANCES  *************************
 * Air Conditioners
 * Garbage Disposals
 * Refrigerators and Freezers
 * Electric Ovens and Stoves
 * Washers/Dryers
 * Dishwashers
 * Water Heaters
 * Electric Water Boilers
 * Range Hoods
  **************************** TECHNOLOGY  ****************************
 * Televisions
 * Smartphones
 * Tablets
 * Computers
 * Labtops
 * 
 * This is the data we need starting from the small appliances and moving * * our way to the more expensive "things". Let's begin just just trying to 
 * find any API that can provide us vacuum cleaner data. If we cannot find
 * this, we'll scrape the data from wikipedia: https://en.wikipedia.org/wiki/List_of_vacuum_cleaners
 */

export const devices = [
    {
        "deviceId": "D001",
        "deviceName": "vacuum cleaner"
    },
    {
        "deviceId": "D002",
        "deviceName": "sewing machine"
    },
    {
        "deviceId": "D003",
        "deviceName": "heater"
    },
    {
        "deviceId": "D004",
        "deviceName": "air conditioner"
    },
    {
        "deviceId": "D005",
        "deviceName": "garbage disposal"
    },
    {
        "deviceId": "D006",
        "deviceName": "refrigerator"
    },
    {
        "deviceId": "D007",
        "deviceName": "freezer"
    },
    {
        "deviceId": "D008",
        "deviceName": "electric oven"
    },
    {
        "deviceId": "D009",
        "deviceName": "stove"
    },
    {
        "deviceId": "D010",
        "deviceName": "washer"
    },
    {
        "deviceId": "D011",
        "deviceName": "dryer"
    },
    {
        "deviceId": "D012",
        "deviceName": "television"
    },
    {
        "deviceId": "D013",
        "deviceName": "smartphone"
    },
    {
        "deviceId": "D014",
        "deviceName": "tablet"
    },
    {
        "deviceId": "D015",
        "deviceName": "computer"
    },
    {
        "deviceId": "D016",
        "deviceName": "laptop"
    },
    {
        "deviceId": "D017",
        "deviceName": "dishwasher"
    },
    {
        "deviceId": "D018",
        "deviceName": "microwave"
    },
    {
        "deviceId": "D019",
        "deviceName": "water heater"
    },
    {
        "deviceId": "D020",
        "deviceName": "dehumidifier"
    },
    {
        "deviceId": "D021",
        "deviceName": "air purifier"
    },
    {
        "deviceId": "D022",
        "deviceName": "electric water boiler"
    },
    {
        "deviceId": "D023",
        "deviceName": "range hood"
    }
];

export const manufacturers = [
    {
        "manufacturerId": "M001",
        "manufacturerName": "Dyson"
    },
    {
        "manufacturerId": "M002",
        "manufacturerName": "Hoover"
    },
    {
        "manufacturerId": "M003",
        "manufacturerName": "Shark"
    },
    {
        "manufacturerId": "M004",
        "manufacturerName": "Bissell"
    },
    {
        "manufacturerId": "M005",
        "manufacturerName": "Miele"
    },
    {
        "manufacturerId": "M006",
        "manufacturerName": "Singer"
    },
    {
        "manufacturerId": "M007",
        "manufacturerName": "Brother"
    },
    {
        "manufacturerId": "M008",
        "manufacturerName": "Janome"
    },
    {
        "manufacturerId": "M009",
        "manufacturerName": "Bernina"
    },
    {
        "manufacturerId": "M010",
        "manufacturerName": "Juki"
    },
    {
        "manufacturerId": "M011",
        "manufacturerName": "DeLonghi"
    },
    {
        "manufacturerId": "M012",
        "manufacturerName": "Honeywell"
    },
    {
        "manufacturerId": "M013",
        "manufacturerName": "Lasko"
    },
    {
        "manufacturerId": "M014",
        "manufacturerName": "Vornado"
    },
    {
        "manufacturerId": "M015",
        "manufacturerName": "LG"
    },
    {
        "manufacturerId": "M016",
        "manufacturerName": "Samsung"
    },
    {
        "manufacturerId": "M017",
        "manufacturerName": "Carrier"
    },
    {
        "manufacturerId": "M018",
        "manufacturerName": "Daikin"
    },
    {
        "manufacturerId": "M019",
        "manufacturerName": "Whirlpool"
    },
    {
        "manufacturerId": "M020",
        "manufacturerName": "InSinkErator"
    },
    {
        "manufacturerId": "M021",
        "manufacturerName": "Moen"
    },
    {
        "manufacturerId": "M022",
        "manufacturerName": "Waste King"
    },
    {
        "manufacturerId": "M023",
        "manufacturerName": "GE"
    },
    {
        "manufacturerId": "M024",
        "manufacturerName": "Frigidaire"
    },
    {
        "manufacturerId": "M025",
        "manufacturerName": "KitchenAid"
    },
    {
        "manufacturerId": "M026",
        "manufacturerName": "Sony"
    },
    {
        "manufacturerId": "M027",
        "manufacturerName": "TCL"
    },
    {
        "manufacturerId": "M028",
        "manufacturerName": "Vizio"
    },
    {
        "manufacturerId": "M029",
        "manufacturerName": "Apple"
    },
    {
        "manufacturerId": "M030",
        "manufacturerName": "Google"
    },
    {
        "manufacturerId": "M031",
        "manufacturerName": "OnePlus"
    },
    {
        "manufacturerId": "M032",
        "manufacturerName": "Xiaomi"
    },
    {
        "manufacturerId": "M033",
        "manufacturerName": "HP"
    },
    {
        "manufacturerId": "M034",
        "manufacturerName": "Dell"
    },
    {
        "manufacturerId": "M035",
        "manufacturerName": "Lenovo"
    },
    {
        "manufacturerId": "M036",
        "manufacturerName": "Acer"
    },
    {
        "manufacturerId": "M037",
        "manufacturerName": "Asus"
    },
    {
        "manufacturerId": "M038",
        "manufacturerName": "Bosch"
    },
    {
        "manufacturerId": "M039",
        "manufacturerName": "Panasonic"
    },
    {
        "manufacturerId": "M040",
        "manufacturerName": "Sharp"
    },
    {
        "manufacturerId": "M041",
        "manufacturerName": "Toshiba"
    },
    {
        "manufacturerId": "M042",
        "manufacturerName": "Kenmore"
    },
    {
        "manufacturerId": "M043",
        "manufacturerName": "Rheem"
    },
    {
        "manufacturerId": "M044",
        "manufacturerName": "A. O. Smith"
    },
    {
        "manufacturerId": "M045",
        "manufacturerName": "Bradford White"
    },
    {
        "manufacturerId": "M046",
        "manufacturerName": "Rinnai"
    },
    {
        "manufacturerId": "M047",
        "manufacturerName": "Midea"
    },
    {
        "manufacturerId": "M048",
        "manufacturerName": "Hamilton Beach"
    },
    {
        "manufacturerId": "M049",
        "manufacturerName": "Breville"
    },
    {
        "manufacturerId": "M050",
        "manufacturerName": "Tiger"
    },
    {
        "manufacturerId": "M051",
        "manufacturerName": "Zojirushi"
    },
    {
        "manufacturerId": "M052",
        "manufacturerName": "Broan"
    },
    {
        "manufacturerId": "M053",
        "manufacturerName": "Zephyr"
    },
    {
        "manufacturerId": "M054",
        "manufacturerName": "Faber"
    },
    {
        "manufacturerId": "M055",
        "manufacturerName": "KOBE"
    }
];

export const models = [
    {
        "modelId": "VC001",
        "modelName": "V10 Absolute",
        "manufacturerId": "M001",
        "deviceId": "D001",
        "releasedDate": "2022-03-15"
    },
    {
        "modelId": "VC002",
        "modelName": "V11 Torque Drive",
        "manufacturerId": "M001",
        "deviceId": "D001",
        "releasedDate": "2023-05-20"
    },
    {
        "modelId": "VC003",
        "modelName": "V15 Detect",
        "manufacturerId": "M001",
        "deviceId": "D001",
        "releasedDate": "2023-07-10"
    },
    {
        "modelId": "VC004",
        "modelName": "ONEPWR Evolve",
        "manufacturerId": "M002",
        "deviceId": "D001",
        "releasedDate": "2023-06-28"
    },
    {
        "modelId": "VC005",
        "modelName": "ONEPWR HEPA+",
        "manufacturerId": "M002",
        "deviceId": "D001",
        "releasedDate": "2022-09-15"
    },
    {
        "modelId": "VC006",
        "modelName": "ONEPWR Blade+",
        "manufacturerId": "M002",
        "deviceId": "D001",
        "releasedDate": "2022-12-01"
    },
    {
        "modelId": "VC007",
        "modelName": "Navigator Lift-Away",
        "manufacturerId": "M003",
        "deviceId": "D001",
        "releasedDate": "2022-07-01"
    },
    {
        "modelId": "VC008",
        "modelName": "Rotator Pro",
        "manufacturerId": "M003",
        "deviceId": "D001",
        "releasedDate": "2023-02-15"
    },
    {
        "modelId": "VC009",
        "modelName": "Apex DuoClean",
        "manufacturerId": "M003",
        "deviceId": "D001",
        "releasedDate": "2023-09-10"
    },
    {
        "modelId": "SM001",
        "modelName": "Heavy Duty 4452",
        "manufacturerId": "M006",
        "deviceId": "D002",
        "releasedDate": "2022-11-20"
    },
    {
        "modelId": "SM002",
        "modelName": "Quantum Stylist 9960",
        "manufacturerId": "M006",
        "deviceId": "D002",
        "releasedDate": "2023-03-15"
    },
    {
        "modelId": "SM003",
        "modelName": "Start 1304",
        "manufacturerId": "M006",
        "deviceId": "D002",
        "releasedDate": "2023-08-25"
    },
    {
        "modelId": "SM004",
        "modelName": "SE1900",
        "manufacturerId": "M007",
        "deviceId": "D002",
        "releasedDate": "2022-05-30"
    },
    {
        "modelId": "SM005",
        "modelName": "ST531HD",
        "manufacturerId": "M007",
        "deviceId": "D002",
        "releasedDate": "2023-07-20"
    },
    {
        "modelId": "SM006",
        "modelName": "ST150HD",
        "manufacturerId": "M007",
        "deviceId": "D002",
        "releasedDate": "2023-11-05"
    },
    {
        "modelId": "H001",
        "modelName": "Dragon 4",
        "manufacturerId": "M011",
        "deviceId": "D003",
        "releasedDate": "2022-02-22"
    },
    {
        "modelId": "H002",
        "modelName": "Silent System",
        "manufacturerId": "M011",
        "deviceId": "D003",
        "releasedDate": "2023-08-18"
    },
    {
        "modelId": "H003",
        "modelName": "Ceramic Tower",
        "manufacturerId": "M011",
        "deviceId": "D003",
        "releasedDate": "2023-12-30"
    },
    {
        "modelId": "H004",
        "modelName": "Digital Tower",
        "manufacturerId": "M012",
        "deviceId": "D003",
        "releasedDate": "2022-01-10"
    },
    {
        "modelId": "H005",
        "modelName": "Comfort Temp",
        "manufacturerId": "M012",
        "deviceId": "D003",
        "releasedDate": "2023-05-25"
    },
    {
        "modelId": "H006",
        "modelName": "SlimStyle",
        "manufacturerId": "M012",
        "deviceId": "D003",
        "releasedDate": "2023-10-15"
    },
    {
        "modelId": "AC001",
        "modelName": "LSQ10",
        "manufacturerId": "M015",
        "deviceId": "D004",
        "releasedDate": "2023-03-15"
    },
    {
        "modelId": "AC002",
        "modelName": "S13AWG",
        "manufacturerId": "M015",
        "deviceId": "D004",
        "releasedDate": "2023-05-20"
    },
    {
        "modelId": "AC003",
        "modelName": "LW2216ER",
        "manufacturerId": "M015",
        "deviceId": "D004",
        "releasedDate": "2023-07-10"
    },
    {
        "modelId": "AC004",
        "modelName": "AR18TY3Q",
        "manufacturerId": "M016",
        "deviceId": "D004",
        "releasedDate": "2023-06-28"
    },
    {
        "modelId": "AC005",
        "modelName": "AR24NV3H",
        "manufacturerId": "M016",
        "deviceId": "D004",
        "releasedDate": "2022-09-15"
    },
    {
        "modelId": "AC006",
        "modelName": "AR12HC",
        "manufacturerId": "M016",
        "deviceId": "D004",
        "releasedDate": "2022-12-01"
    },
    {
        "modelId": "AC007",
        "modelName": "XC14",
        "manufacturerId": "M017",
        "deviceId": "D004",
        "releasedDate": "2022-07-01"
    },
    {
        "modelId": "AC008",
        "modelName": "X16",
        "manufacturerId": "M017",
        "deviceId": "D004",
        "releasedDate": "2023-02-15"
    },
    {
        "modelId": "AC009",
        "modelName": "X19",
        "manufacturerId": "M017",
        "deviceId": "D004",
        "releasedDate": "2023-09-10"
    },
    {
        "modelId": "GD001",
        "modelName": "Evolution Excel",
        "manufacturerId": "M020",
        "deviceId": "D005",
        "releasedDate": "2022-03-15"
    },
    {
        "modelId": "GD002",
        "modelName": "Pro 1100XL",
        "manufacturerId": "M020",
        "deviceId": "D005",
        "releasedDate": "2023-05-20"
    },
    {
        "modelId": "GD003",
        "modelName": "Badger 5XP",
        "manufacturerId": "M020",
        "deviceId": "D005",
        "releasedDate": "2023-07-10"
    },
    {
        "modelId": "GD004",
        "modelName": "GX75C",
        "manufacturerId": "M021",
        "deviceId": "D005",
        "releasedDate": "2023-06-28"
    },
    {
        "modelId": "GD005",
        "modelName": "L1000C",
        "manufacturerId": "M021",
        "deviceId": "D005",
        "releasedDate": "2022-09-15"
    },
    {
        "modelId": "GD006",
        "modelName": "L2600C",
        "manufacturerId": "M021",
        "deviceId": "D005",
        "releasedDate": "2022-12-01"
    },
    {
        "modelId": "GD007",
        "modelName": "Legend 8000",
        "manufacturerId": "M022",
        "deviceId": "D005",
        "releasedDate": "2022-07-01"
    },
    {
        "modelId": "GD008",
        "modelName": "L8000",
        "manufacturerId": "M022",
        "deviceId": "D005",
        "releasedDate": "2023-02-15"
    },
    {
        "modelId": "GD009",
        "modelName": "L2600",
        "manufacturerId": "M022",
        "deviceId": "D005",
        "releasedDate": "2023-09-10"
    },
    {
        "modelId": "RF001",
        "modelName": "LFXS26973S",
        "manufacturerId": "M015",
        "deviceId": "D006",
        "releasedDate": "2022-03-15"
    },
    {
        "modelId": "RF002",
        "modelName": "LFXS28596M",
        "manufacturerId": "M015",
        "deviceId": "D006",
        "releasedDate": "2023-05-20"
    },
    {
        "modelId": "RF003",
        "modelName": "LFXS30796D",
        "manufacturerId": "M015",
        "deviceId": "D006",
        "releasedDate": "2023-07-10"
    },
    {
        "modelId": "RF004",
        "modelName": "RF28R7351SG",
        "manufacturerId": "M016",
        "deviceId": "D006",
        "releasedDate": "2023-06-28"
    },
    {
        "modelId": "RF005",
        "modelName": "RF23J9011SR",
        "manufacturerId": "M016",
        "deviceId": "D006",
        "releasedDate": "2022-09-15"
    },
    {
        "modelId": "RF006",
        "modelName": "RF22K9381SR",
        "manufacturerId": "M016",
        "deviceId": "D006",
        "releasedDate": "2022-12-01"
    },
    {
        "modelId": "RF007",
        "modelName": "FFSS2615TS",
        "manufacturerId": "M024",
        "deviceId": "D006",
        "releasedDate": "2022-07-01"
    },
    {
        "modelId": "RF008",
        "modelName": "FFSS2315TE",
        "manufacturerId": "M024",
        "deviceId": "D006",
        "releasedDate": "2023-02-15"
    },
    {
        "modelId": "RF009",
        "modelName": "FGSS2635TF",
        "manufacturerId": "M024",
        "deviceId": "D006",
        "releasedDate": "2023-09-10"
    },
    {
        "modelId": "OV001",
        "modelName": "KOSE500ESS",
        "manufacturerId": "M025",
        "deviceId": "D007",
        "releasedDate": "2022-03-15"
    },
    {
        "modelId": "OV002",
        "modelName": "KODE500ESS",
        "manufacturerId": "M025",
        "deviceId": "D007",
        "releasedDate": "2023-05-20"
    },
    {
        "modelId": "OV003",
        "modelName": "KOSE507ESS",
        "manufacturerId": "M025",
        "deviceId": "D007",
        "releasedDate": "2023-07-10"
    },
    {
        "modelId": "TV001",
        "modelName": "Bravia XR",
        "manufacturerId": "M026",
        "deviceId": "D008",
        "releasedDate": "2023-05-15"
    },
    {
        "modelId": "TV002",
        "modelName": "Bravia X95J",
        "manufacturerId": "M026",
        "deviceId": "D008",
        "releasedDate": "2022-11-20"
    },
    {
        "modelId": "TV003",
        "modelName": "Bravia A90J",
        "manufacturerId": "M026",
        "deviceId": "D008",
        "releasedDate": "2023-09-25"
    },
    {
        "modelId": "TV004",
        "modelName": "Class 4-Series",
        "manufacturerId": "M027",
        "deviceId": "D008",
        "releasedDate": "2022-08-10"
    },
    {
        "modelId": "TV005",
        "modelName": "Class 5-Series",
        "manufacturerId": "M027",
        "deviceId": "D008",
        "releasedDate": "2023-04-05"
    },
    {
        "modelId": "TV006",
        "modelName": "Class 6-Series",
        "manufacturerId": "M027",
        "deviceId": "D008",
        "releasedDate": "2023-12-30"
    },
    {
        "modelId": "TV007",
        "modelName": "Vizio M-Series",
        "manufacturerId": "M028",
        "deviceId": "D008",
        "releasedDate": "2022-02-28"
    },
    {
        "modelId": "TV008",
        "modelName": "Vizio P-Series",
        "manufacturerId": "M028",
        "deviceId": "D008",
        "releasedDate": "2023-07-15"
    },
    {
        "modelId": "TV009",
        "modelName": "Vizio OLED",
        "manufacturerId": "M028",
        "deviceId": "D008",
        "releasedDate": "2023-11-15"
    },
    {
        "modelId": "SP001",
        "modelName": "iPhone 13",
        "manufacturerId": "M029",
        "deviceId": "D009",
        "releasedDate": "2022-09-15"
    },
    {
        "modelId": "SP002",
        "modelName": "iPhone 14",
        "manufacturerId": "M029",
        "deviceId": "D009",
        "releasedDate": "2023-09-20"
    },
    {
        "modelId": "SP003",
        "modelName": "iPhone SE",
        "manufacturerId": "M029",
        "deviceId": "D009",
        "releasedDate": "2022-03-30"
    },
    {
        "modelId": "SP004",
        "modelName": "Galaxy S21",
        "manufacturerId": "M016",
        "deviceId": "D009",
        "releasedDate": "2023-01-25"
    },
    {
        "modelId": "SP005",
        "modelName": "Galaxy S22",
        "manufacturerId": "M016",
        "deviceId": "D009",
        "releasedDate": "2022-10-15"
    },
    {
        "modelId": "SP006",
        "modelName": "Galaxy Note 20",
        "manufacturerId": "M016",
        "deviceId": "D009",
        "releasedDate": "2023-08-01"
    },
    {
        "modelId": "SP007",
        "modelName": "Pixel 6",
        "manufacturerId": "M030",
        "deviceId": "D009",
        "releasedDate": "2022-04-20"
    },
    {
        "modelId": "SP008",
        "modelName": "Pixel 7",
        "manufacturerId": "M030",
        "deviceId": "D009",
        "releasedDate": "2023-11-05"
    },
    {
        "modelId": "SP009",
        "modelName": "Pixel 5a",
        "manufacturerId": "M030",
        "deviceId": "D009",
        "releasedDate": "2023-06-10"
    },
    {
        "modelId": "CM001",
        "modelName": "Spectre x360",
        "manufacturerId": "M033",
        "deviceId": "D010",
        "releasedDate": "2022-03-01"
    },
    {
        "modelId": "CM002",
        "modelName": "Envy 13",
        "manufacturerId": "M033",
        "deviceId": "D010",
        "releasedDate": "2023-06-15"
    },
    {
        "modelId": "CM003",
        "modelName": "Omen 15",
        "manufacturerId": "M033",
        "deviceId": "D010",
        "releasedDate": "2023-10-25"
    },
    {
        "modelId": "CM004",
        "modelName": "XPS 13",
        "manufacturerId": "M034",
        "deviceId": "D010",
        "releasedDate": "2022-04-10"
    },
    {
        "modelId": "CM005",
        "modelName": "Alienware M15",
        "manufacturerId": "M034",
        "deviceId": "D010",
        "releasedDate": "2023-05-22"
    },
    {
        "modelId": "CM006",
        "modelName": "Inspiron 15",
        "manufacturerId": "M034",
        "deviceId": "D010",
        "releasedDate": "2023-09-14"
    },
    {
        "modelId": "CM007",
        "modelName": "ThinkPad X1",
        "manufacturerId": "M035",
        "deviceId": "D010",
        "releasedDate": "2022-08-30"
    },
    {
        "modelId": "CM008",
        "modelName": "Yoga 9i",
        "manufacturerId": "M035",
        "deviceId": "D010",
        "releasedDate": "2023-02-14"
    },
    {
        "modelId": "CM009",
        "modelName": "Legion 5",
        "manufacturerId": "M035",
        "deviceId": "D010",
        "releasedDate": "2023-11-18"
    },
    {
        "modelId": "DW001",
        "modelName": "SHX3AR75UC",
        "manufacturerId": "M038",
        "deviceId": "D011",
        "releasedDate": "2022-05-22"
    },
    {
        "modelId": "DW002",
        "modelName": "SHX4AT75UC",
        "manufacturerId": "M038",
        "deviceId": "D011",
        "releasedDate": "2023-03-15"
    },
    {
        "modelId": "DW003",
        "modelName": "SHPM65Z55N",
        "manufacturerId": "M038",
        "deviceId": "D011",
        "releasedDate": "2023-09-10"
    },
    {
        "modelId": "MW001",
        "modelName": "NN-SN966S",
        "manufacturerId": "M039",
        "deviceId": "D012",
        "releasedDate": "2022-01-12"
    },
    {
        "modelId": "MW002",
        "modelName": "NN-SN686S",
        "manufacturerId": "M039",
        "deviceId": "D012",
        "releasedDate": "2023-04-17"
    },
    {
        "modelId": "MW003",
        "modelName": "NN-SD975S",
        "manufacturerId": "M039",
        "deviceId": "D012",
        "releasedDate": "2023-12-22"
    },
    {
        "modelId": "WH001",
        "modelName": "XE50M06ST45U1",
        "manufacturerId": "M043",
        "deviceId": "D013",
        "releasedDate": "2022-06-10"
    },
    {
        "modelId": "WH002",
        "modelName": "XE40M06ST45U1",
        "manufacturerId": "M043",
        "deviceId": "D013",
        "releasedDate": "2023-05-20"
    },
    {
        "modelId": "WH003",
        "modelName": "XE50T06ST45U1",
        "manufacturerId": "M043",
        "deviceId": "D013",
        "releasedDate": "2023-11-05"
    },
    {
        "modelId": "DH001",
        "modelName": "TP50AWKN",
        "manufacturerId": "M047",
        "deviceId": "D014",
        "releasedDate": "2022-02-15"
    },
    {
        "modelId": "DH002",
        "modelName": "MAD50C1ZWS",
        "manufacturerId": "M047",
        "deviceId": "D014",
        "releasedDate": "2023-07-20"
    },
    {
        "modelId": "DH003",
        "modelName": "MP50S1WDB",
        "manufacturerId": "M047",
        "deviceId": "D014",
        "releasedDate": "2023-11-15"
    },
    {
        "modelId": "AP001",
        "modelName": "AirGenius 5",
        "manufacturerId": "M012",
        "deviceId": "D015",
        "releasedDate": "2022-03-12"
    },
    {
        "modelId": "AP002",
        "modelName": "HPA300",
        "manufacturerId": "M012",
        "deviceId": "D015",
        "releasedDate": "2023-09-22"
    },
    {
        "modelId": "AP003",
        "modelName": "HFD320",
        "manufacturerId": "M012",
        "deviceId": "D015",
        "releasedDate": "2023-12-05"
    },
    {
        "modelId": "EWB001",
        "modelName": "VE Hybrid",
        "manufacturerId": "M048",
        "deviceId": "D016",
        "releasedDate": "2022-02-18"
    },
    {
        "modelId": "EWB002",
        "modelName": "Hybrid 9",
        "manufacturerId": "M048",
        "deviceId": "D016",
        "releasedDate": "2023-06-22"
    },
    {
        "modelId": "EWB003",
        "modelName": "Hybrid Pro",
        "manufacturerId": "M048",
        "deviceId": "D016",
        "releasedDate": "2023-11-11"
    },
    {
        "modelId": "RH001",
        "modelName": "F40000 Series",
        "manufacturerId": "M052",
        "deviceId": "D017",
        "releasedDate": "2022-08-25"
    },
    {
        "modelId": "RH002",
        "modelName": "PM390 Power Pack",
        "manufacturerId": "M052",
        "deviceId": "D017",
        "releasedDate": "2023-03-05"
    },
    {
        "modelId": "RH003",
        "modelName": "PM250 Power Pack",
        "manufacturerId": "M052",
        "deviceId": "D017",
        "releasedDate": "2023-12-01"
    }
];
