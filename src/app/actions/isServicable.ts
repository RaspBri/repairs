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

export function isServicable(zipcode: string): boolean {
    return servicableZipcodes.includes(zipcode);
}