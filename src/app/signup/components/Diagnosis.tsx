'use client';

import { RadioGroup, Radio } from '@nextui-org/react';
import { useState, useContext, useEffect } from "react";
import { FormContext } from "../page";
import { Question } from "@/app/types";
import { getQuestions } from "@/app/actions/appliance";
import { useRouter } from "next/router";

/**
 * This component needs to be changed to remove the device, make, and model select options
 * 
 * The UI has changed, so by the time a user gets to this page,
 * they will have already selected their device, manufacturer, and model
 * 
 * This information will be used to determine which questions to ask
 * during the Diagnosis stage of the form.
 */

export default function Diagnosis() {
    const { form, onFormChange, updateQuestions } = useContext(FormContext);
    const { diagnosis } = form;

    const [questions, setQuestions] = useState<Question[]>([]);
    const router = useRouter();
    const {deviceId, manufacturuerId, modelId} = router.query;

    const handleAnswerChange = (questionId: string, answer: string): void => {
        const updatedQuestions = diagnosis.questions.map((q) => (
            q.id === questionId ? { ...q, answer } : q
        ));
        updateQuestions(updatedQuestions);
    }

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const questions = await getQuestions(deviceId);
                setQuestions(questions);
            } catch (error) {
                console.error("Failed to fetch QUESTIONS", error);
            }
        };

        fetchQuestions();
    }, [diagnosis.device]);

    return (
        <div>
            <h1 className="text-7xl text-center m-auto py-8 tracking-tightest leading-tight">Diagnosis</h1>
            
            {diagnosis.questions.map((question) => (
                <div className="question-item" key={question.id}>
                    <RadioGroup
                        label={question.name}
                        value={question.answers[0]}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    >
                        {question.answers.map((option) => (
                            <Radio key={option} value={option}>
                                {option}
                            </Radio>
                        ))}
                    </RadioGroup>
                </div>
            ))}
        </div>
    );
}