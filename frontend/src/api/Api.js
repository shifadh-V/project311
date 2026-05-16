const baseURL="http://localhost:3000"

export const    GData=async()=>{
    const res = await fetch(`${baseURL}/blog/allposts`);
    return res.json()
}

export const LoginUser=async(postdata)=>{
        const res=await fetch(`${baseURL}/user/loginuser`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(postdata)
        })
        return res.json()
}
