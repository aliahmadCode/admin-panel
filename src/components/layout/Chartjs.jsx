import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const gradient = chart.ctx.createLinearGradient(0, 0, chart.width, 0);
      gradient.addColorStop(0, "rgba(39, 56, 95, 0)");
      gradient.addColorStop(0.5, "rgba(39, 56, 95, 1)");
      gradient.addColorStop(1, "rgba(39, 56, 95, 0)");
      chart.data.datasets[0].borderColor = gradient;
      chart.update();
    }
  }, []);

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Users",
        data: [500, 800, 1500, 2200, 1500, 1000, 800, 1500],
        fill: false,
        borderColor: "#27385f",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    interaction: {
      mode: "index", 
      intersect: false, 
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
};

export default LineChart;
