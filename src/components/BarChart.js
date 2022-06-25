import { Bar } from "react-chartjs-2"
import {Chart as  ChartJS} from 'chart.js/auto'
import classes from './BarChart.module.css'

const BarGraph = ({chartData, totalSales}) => {

   return(
    <div className={classes.container} >
    <div className={classes.upperArea}>

    <h1 className={classes.price}><span className={classes.dollar}>$</span>{totalSales.toLocaleString('en-US')} <span className={classes.gain}>^2.6%</span></h1>
    <p className={classes.info}>Average Daily Sales</p>
    </div>
  
    <Bar data={chartData} options= {
        {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
         
        },
        scales: {
        x: {
        display: false,
        },
        y: {
          display:false,
        }
      }
      }
      }

      />
    </div>
   ) 
}

export default BarGraph