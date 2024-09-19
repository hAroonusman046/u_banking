'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({accounts}: DoughnutChartProps ) => {
    const data ={
        datasets: [
            {
                label:'Banks',
                data:[11000, 2900, 7400],
                backgroundColor: ['#0747b6', '#73C625', '#FFA11C']
            }
        ],
        labels:['Bank 1', 'Bank 2', 'Bank 3']
    }
  return (
    <Doughnut 
        data={data}
        options={{
            plugins:{
                legend:{
                    display:false
                }
            }
        }}
     />
  )
}

export default DoughnutChart