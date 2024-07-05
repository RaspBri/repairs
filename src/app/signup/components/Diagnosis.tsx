'use client';

import { useState } from 'react';
import { RadioGroup, Radio } from '@nextui-org/react';
import { Question, SignupForm } from '@/app/types';

export interface DiagnosisProps {
    formData: SignupForm;
    questions: Question[];
}

export default function Diagnosis({ formData, questions,  }: DiagnosisProps) {
    const [data, setData] = useState(formData.diagnosis);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

    return (
        <div>
            <h1 className="text-7xl text-center m-auto py-8 tracking-tightest leading-tight">Diagnosis</h1>
            
            {questions.map((question => (
                <div key={question.id}>
                <RadioGroup
                    label={question.question}
                    value={question.answers[0].option}
                >
                    {question.answers.map((option) => (
                        <Radio key={option.id} value={option.option}>
                            {option.option}
                        </Radio>
                    ))}
                </RadioGroup>
            </div>
            )))}
        </div>
    );
}