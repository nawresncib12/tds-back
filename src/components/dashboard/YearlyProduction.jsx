import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
  
      legend: {
        display:false,
        labels: {
          boxWidth: 0,
        },
      },
    
    title: {
      display: true,
      text: 'Yearly Production',
    },
  },
};

const labels = [2016, 2017, 2018, 2019,2020, 2021, 2022];

export const data = {
  labels,
  datasets: [
    {
      label: 'Yearly production',
      data: [150,2365,1402,1502,698,3456,1023],
      borderColor: '#4daaaa',
      backgroundColor: '#4daaaa',
    }
  ],
};

export default function YearlyProduction() {
  return <Line options={options} data={data} />;
}
