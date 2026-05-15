const baseURL="http://localhost:3000"

export const blogdta=async()=>{
    const res = await fetch(`${baseURL}/blog/allposts`)
}

return res.json()