'use client';

import { RadioGroup, Radio } from '@nextui-org/react';
import { useState, useContext, useEffect } from "react";
import { FormContext } from "../page";
import { Question } from "@/app/types";
import { getQuestions } from "@/app/actions/appliance";
import { useParams } from 'next/navigation';

export default function Diagnosis() {
    const { deviceId, manufacturerId, modelId } = useParams();
    const { form, updateQuestions } = useContext(FormContext);
    const { diagnosis } = form;

    const [questions, setQuestions] = useState<Question[]>([]);

    const handleAnswerChange = (questionId: string, answer: string): void => {
        const updatedQuestions = diagnosis.questions.map((q) => (
            q.id === questionId ? { ...q, answer } : q
        ));
        updateQuestions(updatedQuestions);
    }

    useEffect(() => {
        if (deviceId) {
            form.diagnosis.device = deviceId as string;
            form.diagnosis.manufacturer = manufacturerId as string;
            form.diagnosis.model = modelId as string;
        }
        
    },  []);

    useEffect(() => {
        const fetchQuestions = async () => {
            if (deviceId) {
                try {
                    const questions = await getQuestions(deviceId as string);
                    setQuestions(questions);
                } catch (error) {
                    console.error("Failed to fetch QUESTIONS", error);
                }
            } else {
                throw Error("No device id");
            }
            
        };

        fetchQuestions();
    }, []);

    return (
        <div>
            <h1 className="text-7xl text-center m-auto py-8 tracking-tightest leading-tight">Diagnosis</h1>
            
            {questions.map((question => (
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
            )))}
        </div>
    );
}