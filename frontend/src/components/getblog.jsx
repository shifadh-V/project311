import React, { useEffect, useState } from "react";
import { GData } from "../api/Api";

const Data = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await GData();
                setdata(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchdata();
    }, []);

    return (
        <>
            <h1>Blog Data</h1>

            {data.map((i, index) => (
                <div key={index}>
                    <h1>{i.title}</h1>

                    <p>{i.description}</p>

                    <h3>{i.author}</h3>
                </div>
            ))}
        </>
    );
};

export default Data;