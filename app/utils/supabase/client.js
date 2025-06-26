
import { createClient } from "@supabase/supabase-js";


    const Supabase_URL= process.env.NEXT_PUBLIC_SUPABASE_URL;
    const Supabase_ANONKEY=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    

    export  const supabase= createClient(Supabase_URL,Supabase_ANONKEY);

/* 
exposrt makes it so that this constant client is available in other files, you can then import it
The client uses the URL and the anon key to connect your frontend (or backend) app to your Supabase project.

You can then use supabase to query your database, manage authentication, storage, etc.


*/