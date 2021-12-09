import React from 'react';
import Highcharts from 'highcharts/highstock'
import Chart from '../Chart'



require('highcharts/indicators/indicators')(Highcharts)
require('highcharts/indicators/pivot-points')(Highcharts)
require('highcharts/indicators/macd')(Highcharts)
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/map')(Highcharts)


const chartOptions = {
    title: {
      text: ''
    },
    series: [{
      data: [1,2,3],
  
    }]
  }



export default function Home() {
    return (
        <div>
           <Chart options={chartOptions} highcharts={Highcharts} />
        </div>
    );
}