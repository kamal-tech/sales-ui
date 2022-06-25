import { BarData } from "./components/Data/BarData";
import { LineData } from "./components/Data/LineData";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';

function App() {
  let totalBarSales=0;
  BarData.forEach(el => {
    totalBarSales += el.sales
  })

  let totalLineSales = 0;
  LineData.forEach(el => {
    totalLineSales += el.sales
  })

  const barChartData = {
    labels: BarData.map(el => el.date),
    datasets: [{
      label: 'Sales',
      data: BarData.map(el => el.sales),
      borderColor: '#590696',
      backgroundColor: '#590696',
      borderWidth: 2,
      borderRadius: {
        topRight:10,
        topLeft: 10
      },
      borderSkipped: false,
      barThickness: 15,
    }]
  }

  const lineChartData = {
    labels:LineData.map(el=> el.date),
    datasets: [{
      label: 'My First Dataset',
      data: LineData.map(el => el.sales),
      fill: true,
      backgroundColor: 'rgba(9,121,116,0.1)',
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      
    }]
  }

  return (
    <>
    <BarChart totalSales={totalBarSales} chartData={barChartData}/>
    <LineChart data={lineChartData} totalSales={totalLineSales}/>
    </>
  );
}

export default App;