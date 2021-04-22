import React from "react";
import { Line } from "react-chartjs-2";
import getRandomColor from "../functions";

export default function LineChartComponent({ data }) {
  const lines = data.map(val => {
    return [
      {
        label: val.name,
        data: val.value,
        fill: false,
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        borderWidth: 3
      }
    ];
  });

  const database = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],

    datasets: lines.map(i => {
      return i[0];
    })
  };

  return <Line data={database} height={300} width={400} />;
}
