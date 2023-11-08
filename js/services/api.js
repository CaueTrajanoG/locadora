import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpycmdlcWp6YmJuYnRweGltdWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzODY4NzQsImV4cCI6MjAxNDk2Mjg3NH0.MsThc4ZEziOwPlRz92eQMaCMVcwUVx5tzEq7xBAbClw";
const API_URL = "https://jrrgeqjzbbnbtpximugc.supabase.co";
//https://jrrgeqjzbbnbtpximugc.supabase.co

export default axios.create({
  baseURL: API_URL,
  headers: {
    common: {
      apikey: API_KEY,
      Authorization: `Bearer ${API_KEY}`,
    },
    post: {
      Prefer: "return=representation",
    },
    patch: {
      Prefer: "return=representation",
    },
  },
});
