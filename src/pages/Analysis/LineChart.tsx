/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

const data = [
  {
    month: '08-03-2020',
    city: 'KPI',
    temperature: 2.5,
  },
  {
    month: '08-03-2020',
    city: 'Actual',
    temperature: 2.2,
  },
  {
    month: '08-04-2020',
    city: 'KPI',
    temperature: 2.2,
  },
  {
    month: '08-04-2020',
    city: 'Actual',
    temperature: 0.9,
  },
  {
    month: '08-05-2020',
    city: 'KPI',
    temperature: 1.4,
  },
  {
    month: '08-05-2020',
    city: 'Actual',
    temperature: 1.3,
  },
  {
    month: '08-06-2020',
    city: 'KPI',
    temperature: 2.2,
  },
  {
    month: '08-06-2020',
    city: 'Actual',
    temperature: 2.1,
  },
  {
    month: '08-07-2020',
    city: 'KPI',
    temperature: 2.2,
  },
  {
    month: '08-07-2020',
    city: 'Actual',
    temperature: 2.2,
  },
  {
    month: '08-08-2020',
    city: 'KPI',
    temperature: 2.2,
  },
  {
    month: '08-08-2020',
    city: 'Actual',
    temperature: 2.1,
  },
  {
    month: '08-09-2020',
    city: 'KPI',
    temperature: 2.2,
  },
  {
    month: '08-09-2020',
    city: 'Actual',
    temperature: 2.2,
  },
  {
    month: '08-10-2020',
    city: 'KPI',
    temperature: 2.2,
  },
  {
    month: '08-10-2020',
    city: 'Actual',
    temperature: 2.1,
  },
  {
    month: '08-11-2020',
    city: 'KPI',
    temperature: 2.2,
  },
  {
    month: '08-11-2020',
    city: 'Actual',
    temperature: 2.2,
  },
  {
    month: '08-12-2020',
    city: 'KPI',
    temperature: 2.2,
  },
  {
    month: '08-12-2020',
    city: 'Actual',
    temperature: 2.2,
  },
  {
    month: '08-13-2020',
    city: 'KPI',
    temperature: 2.2,
  },
  {
    month: '08-13-2020',
    city: 'Actual',
    temperature: 2.1,
  },
  {
    month: '08-14-2020',
    city: 'KPI',
    temperature: 2.2,
  },
  {
    month: '08-14-2020',
    city: 'Actual',
    temperature: 2.2,
  },
];

export default function LineChart() {
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
