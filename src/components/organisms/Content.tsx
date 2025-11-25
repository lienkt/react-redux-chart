import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import type { IUser } from '../../types';

interface Map {
  [key: string]: boolean
}

function Content() {
  const label = useSelector((state: RootState) => state.variables.label);

  const chart = {
    series: Object.values(label || {}),
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: Object.keys(label || {}),
      // responsive: [{
      //   breakpoint: 480,
      //   options: {
      //     chart: {
      //       width: 200
      //     },
      //     legend: {
      //       position: 'bottom'
      //     }
      //   }
      // }]
    },
  }
  return (
    <div className="grow">
      <div className='flex justify-center items-center h-full'>
        {label ? (
          <ReactApexChart options={chart.options as any} series={chart.series} type="pie" width={380} />

        ) : (
          <div>Please choose variable and submit...</div>
        )}
      </div>
              
    </div>
  )
}

export default Content
