'use client';

import { NextUIProvider } from '@nextui-org/react';
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { dev } from "./constants";

interface ProvidersProps {
  children: React.ReactNode;
}

const supabase = createClient(dev.supabase.BASE_URL, dev.supabase.KEY);


export default function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <SessionContextProvider supabaseClient={supabase}>
        {children}
      </SessionContextProvider>
    </NextUIProvider>
  );
}