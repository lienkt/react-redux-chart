import React from 'react'
import ReactApexChart from 'react-apexcharts';

function Content() {
  const [state, setState] = React.useState({
    series: [10, 20, 30],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Bacon', 'Vegate', 'Vitamin'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  });
  
  return (
    <div className="grow">
      <div className='flex justify-center items-center h-full'>
        <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
      </div>
              
    </div>
  )
}

export default Content
