import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import classes from "./LineChart.module.css";

const LineChart = ({ data, totalSales }) => {
  const goal = 100000;
  const remainingGoal = goal - totalSales

  return (
    <div className={classes.container}>
    <div className={classes.upperArea}>
<h3>Sales This Months</h3>
<p>Users from all channels</p>
<h1 className={classes.price}><span className={classes.dollar}>$</span>{totalSales.toLocaleString('en-US')}</h1>
<p className={classes.info}>Another ${remainingGoal} to Goal</p>
</div>
      <Line
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
            display: false
          },
          },
          interaction: {
            intersect: true,
          },
          scales: {
            x: {
              type: "time",
              grid: {
                display: false,
              },
              time: {
                unit: "day",
              },
              display: true,
              title: {
                display: true,
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 5,
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Value",
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 5,
              },
              suggestedMin: 0,
            },
          },
        elements: {
            point: {
                pointStyle: "line",
            }
        }
        }}
      />
    </div>
  );
};

export default LineChart;
