import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import { useState } from 'react'

export default function Container() {

  const [chartOptions, setChartOptions] = useState({
    series: [{
      data: [1,2,3]
    }]
  })
  
    setInterval(() => setChartOptions({
          series: [{
            data: [
              Math.random()*3,
              Math.random()*3,
              Math.random()*3
            ]
          }]
        }
      ), 1500)
  
console.log('chartOptions', chartOptions)

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div> 
    )
  
}

// import React from 'react'
// import HighchartsReact from 'highcharts-react-official'
// import Highcharts from 'highcharts'
// import { useState } from 'react'

// export default class Container extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       chartOptions: {
//         series: [{
//           data: [1,2,3]
//         }]
//       }
//     }
//     setInterval(() => this.setState({
//         chartOptions: {
//           series: [{
//             data: [
//               Math.random()*3,
//               Math.random()*3,
//               Math.random()*3
//             ]
//           }]
//         }}
//       ), 1500)
//   }

//   render () {
//     return (
//       <div>
//         <HighchartsReact
//           highcharts={Highcharts}
//           options={this.state.chartOptions}
//         />
//       </div> 
//     )
//   }
// }