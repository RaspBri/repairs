export const paths = {
    home(): string {
        return "/";
    },
    makes(deviceId: string): string {
        return `/devices/${deviceId}/manufacturer`;
    },
    models(deviceId: string, manufacturerId: string): string {
        return `/devices/${deviceId}/manufacturer/${manufacturerId}/models`;
    },
    signupForm(): string {
        return '/signup';
    }
}