import axios from "axios"

export const api = axios.create({
    baseURL: "https://bmbaexrwammlyccpmxpv.supabase.co/rest/v1",
    headers:{
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtYmFleHJ3YW1tbHljY3BteHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzMjY0MTUsImV4cCI6MTk5MzkwMjQxNX0.LkNh0KhwwbU16JxDcvOf0JgMOMObgML5W0GoK6axaOQ",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtYmFleHJ3YW1tbHljY3BteHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzMjY0MTUsImV4cCI6MTk5MzkwMjQxNX0.LkNh0KhwwbU16JxDcvOf0JgMOMObgML5W0GoK6axaOQ"
    }
})