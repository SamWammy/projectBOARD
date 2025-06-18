
import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";


    Supabase_URL= publicDecrypt.env.Supabase_URL;
    Supabase_ANONKEY=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    export const supabase= createClient(Supabase_URL,Supabase_ANONKEY);

