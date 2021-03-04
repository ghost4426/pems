/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';


export default function LineChart(props: { data: any }) {
  const { data } = props;
  const cols = {
    month: {
      range: [0, 1],
    },
  };

  return (
    <div>
      <Chart height={400} data={data} scale={cols} forceFit>
        <Legend />
        <Axis name="month" />
        <Axis
          name="temperature"
          label={{
            formatter: (val) => `${val}`,
          }}
          min={2}
        />
        <Tooltip
          crosshairs={{
            type: 'y',
          }}
        />
        <Geom type="line" position="month*temperature" size={2} color={'city'} shape={'smooth'} />
        <Geom
          type="point"
          position="month*temperature"
          size={4}
          shape={'circle'}
          color={'city'}
          style={{
            stroke: '#fff',
            lineWidth: 1,
          }}
        />
      </Chart>
    </div>
  );
}
