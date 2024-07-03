'use server';

import { redirect } from "next/navigation";
import { paths } from "../paths";

export const passDevicesToForm = (formData: FormData): void => {
    const deviceId = formData.get("deviceId") as string;
    const manufacturerId = formData.get("manufacturerId") as string;
    const modelId = formData.get("modelId") as string;
    redirect(`${paths.signupForm()}?deviceId=${deviceId}&manufacturerId=${manufacturerId}&modelId=${modelId}`);
}