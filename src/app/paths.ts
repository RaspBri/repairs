export const paths = {
    home(): string {
        return "/";
    },
    devices() {
        return '/devices';
    },
    manufacturers(deviceId: string): string {
        return `/devices/${deviceId}/manufacturers`;
    },
    models(deviceId: string, manufacturerId: string): string {
        return `/devices/${deviceId}/manufacturers/${manufacturerId}/models`;
    },
    signupForm(deviceId: string, manufacturerId: string, modelId: string): string {
        return `/devices/${deviceId}/manufacturers/${manufacturerId}/models/${modelId}/signup`;
    }
}