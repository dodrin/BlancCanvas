require("dotenv").config({
  path: "./.env.local",
});

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
