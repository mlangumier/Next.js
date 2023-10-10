"use client";

import {
  Chart,
  ChartData,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

interface IProps {}

Chart.register(
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler
);

// Base: https://www.chartjs.org/docs/latest/samples/other-charts/radar.html
// Components: https://www.npmjs.com/package/react-chartjs-2
export const ChartRadar: React.FC<IProps> = ({}) => {
  const data: ChartData<"radar", number[], string> = {
    labels: ["React", "Next", "Vue3", "Node", "Express", "Ionic", "Prismic.io"],
    datasets: [
      {
        label: "Fréquence d'utilisation",
        data: [80, 100, 5, 10, 15, 10, 20],
        borderColor: "black",
        backgroundColor: "green",
      },
      {
        label: "Intérêt à continuer",
        data: [80, 100, 70, 50, 80, 5, 10],
        borderColor: "black",
        backgroundColor: "blue",
      },
    ],
  };

  return (
    <div className="">
      <Radar data={data} options={{}} />
    </div>
  );
};
