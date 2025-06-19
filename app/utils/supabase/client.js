
import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";


    Supabase_URL= publicDecrypt.env.Supabase_URL;
    Supabase_ANONKEY=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    export const supabase= createClient(Supabase_URL,Supabase_ANONKEY);

/* 
The client uses the URL and the anon key to connect your frontend (or backend) app to your Supabase project.

You can then use supabase to query your database, manage authentication, storage, etc.


*/