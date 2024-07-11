'use server';

import { ServiceableParams } from "../util/ServiceableForm";

const servicableZipcodes = [
    "55555",
    "66666",
    "22222",
    "33333",
    "44444",
    "99999",
    "88888",
    "77777",
    "11111"
];

export const isServicable = (zipcode: string): ServiceableParams => {
    return servicableZipcodes.includes(zipcode) ? ServiceableParams.Serviceable : ServiceableParams.NonServiceable;
};