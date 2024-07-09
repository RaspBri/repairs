'use client';

import { useEffect, useState } from 'react';
import { RadioGroup, Radio } from '@nextui-org/react';
import { Question, SignupForm } from '@/app/types';
import { getQuestions } from '@/app/actions/appliance';

export interface DiagnosisProps {
    formData: SignupForm;
}

export default function Diagnosis({ formData }: DiagnosisProps) {
    const [data, setData] = useState(formData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1 className="text-7xl text-center m-auto py-8 tracking-tightest leading-tight">Diagnosis</h1>
            
            {formData.diagnosis.questions.map((question => (
                <div key={question.id}>
                <RadioGroup
                    label={question.question}
                    value={question.answers[0].option}
                    onChange={handleChange}
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