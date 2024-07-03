'use client';

/**
 * This component needs to be changed to remove the device, make, and model select options
 * 
 * The UI has changed, so by the time a user gets to this page,
 * they will have already selected their device, manufacturer, and model
 * 
 * This information will be used to determine which questions to ask
 * during the Diagnosis stage of the form.
 */

import { useState, useContext, useEffect } from "react";
import { FormContext } from "@/app/state";
import { Question } from "@/app/types";
import { getQuestions } from "@/app/actions/appliance";
import { useRouter } from "next/router";

export default function Diagnosis() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const { onFormChange } = useContext(FormContext);
    const router = useRouter();
    const {deviceId, manufacturuerId, modelId} = router.query;
    const dId = deviceId as string;

    const onChange = () => {

    }

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const questions = await getQuestions(dId);
                setQuestions(questions);
            } catch (error) {
                console.error("Failed to fetch QUESTIONS", error);
            }
        };

        fetchQuestions();
    }, []);

    return (
        <div>
            <h1 className="text-7xl text-center m-auto py-8 tracking-tightest leading-tight">Diagnosis</h1>
            
            {/* Render questions here */}
        </div>
    );
}