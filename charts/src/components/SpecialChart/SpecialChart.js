import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [phones, setPhones] = useState([]);
    useEffect( () => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => {
            const LoadedData = res.data.data;
            const phoneData = LoadedData.map(phone=> {
                const parts = phone.slug.split('-');
                const ph ={
                    name: parts[0],
                    value: parseInt(parts[1])
                };
                return ph;
            });
            setPhones(phoneData)
            console.log(phoneData)
        })
    } ,[])
    return (
            <BarChart width={5000} height={300} data={phones}>
          <Bar dataKey="value" fill="#8884d8" />
            <Tooltip></Tooltip>
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
        </BarChart>
    );
};

export default SpecialChart;