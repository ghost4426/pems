import React from 'react'
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
} from "bizcharts";

export default function AreaChart() {

    // const data = [
    //     {
    //         year: "1991",
    //         value: 15468
    //     },
    //     {
    //         year: "1992",
    //         value: 16100
    //     },
    //     {
    //         year: "1993",
    //         value: 15900
    //     },
    //     {
    //         year: "1994",
    //         value: 17409
    //     },
    //     {
    //         year: "1995",
    //         value: 17000
    //     },
    //     {
    //         year: "1996",
    //         value: 31056
    //     },
    //     {
    //         year: "1997",
    //         value: 31982
    //     },
    //     {
    //         year: "1998",
    //         value: 32040
    //     },
    //     {
    //         year: "1999",
    //         value: 33233
    //     }
    // ];

    const data = [];

    for (let index = 1; index < 28; index++) {
        data.push({
                    year: `${index} Mar`,
                    value: Math.floor(Math.random() * Math.floor(100000))
                })
        
    }
    const cols = {
        value: {
            min: 10000
        },
        year: {
            range: [0, 1]
        }
    };
    return (
        <div style={{border: '0.5px solid black'}}>
            <Chart height={350} data={data} scale={cols} forceFit >
                <Axis name="year" />
                <Axis
                    name="value"
                    label={{
                        formatter: val => {
                            return (val / 1000).toFixed(0) + "k";
                        }
                    }}
                />
                <Tooltip
                    crosshairs={{
                        type: "line"
                    }}
                />
                <Geom type="area" position="year*value" />
                <Geom type="line" position="year*value" size={2} />
            </Chart>
        </div>
    )
}
