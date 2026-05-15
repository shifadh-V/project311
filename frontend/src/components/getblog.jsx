import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { blogdta } from "../api/Api";

const blogdta = ()=>{
    const[data,setdata]= useState([])

    useEffect(()=>{
        const fetchdata= async()=>{
            const res=await blogdta()

            setdata(res.data)

        }
        fetchdata()
    },[])
    return (
        <>blogdta


                {
                    data.map((i,index)=>{
                        <div key={index}>
                            <h1>{i.title}</h1>
                            <p>
                                {i.description}
                            </p>
                            <h3>
                                {i.author}
                            </h3>

                        </div>
                    })
                }
        </>
    )

}

export default blogdta