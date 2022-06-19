import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Orange"],
  datasets: [
    {
      label: "Title of my chart",
      data: [12, 5, 3],
      backgroundColor: ["#4daaaa", "rgba(54, 162, 235)", "rgba(255, 206, 86)"],
      borderColor: [
        "#4daaaa",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],cutout:80,
      borderWidth: 1,
      hoverOffset: 10,
      spacing:5,
      circumference:360
    },
  ],
};

export function DoughnutChart() {
  return <Doughnut data={data} />;
}
