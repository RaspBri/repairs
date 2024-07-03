'use client';

import { RadioGroup, Radio } from '@nextui-org/react';
import { useState, useContext, useEffect } from "react";
import { FormContext } from "../page";
import { Question } from "@/app/types";
import { getQuestions } from "@/app/actions/appliance";
import { useRouter } from "next/router";

export default function Diagnosis() {
    const { form, onFormChange, updateQuestions } = useContext(FormContext);
    const { diagnosis } = form;

    const [questions, setQuestions] = useState<Question[]>([]);
    const { device, manufacturer, model } = form.diagnosis;

    const handleAnswerChange = (questionId: string, answer: string): void => {
        const updatedQuestions = diagnosis.questions.map((q) => (
            q.id === questionId ? { ...q, answer } : q
        ));
        updateQuestions(updatedQuestions);
    }

    useEffect(() => {
        const fetchQuestions = async () => {
            if (device) {
                try {
                    const questions = await getQuestions(device);
                    setQuestions(questions);
                } catch (error) {
                    console.error("Failed to fetch QUESTIONS", error);
                }
            } else {
                console.error("Device ID is not available");
            }
        };

        fetchQuestions();
    }, [device, diagnosis.device]);

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