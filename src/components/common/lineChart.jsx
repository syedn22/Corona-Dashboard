import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "../../Style/Chart.css"

class LineChart extends Component {
  state = {
    labels: [],
    datasets: [
      {
        label: [],
        fill: false,
        lineTension: 0.5,
        backgroundColor: "",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [],
      },
    ],
  };

 componentDidUpdate(prevProps){
    if(this.props!==prevProps)
    {
      const {dataset}=this.props;
      this.setState({
        labels:dataset.data.x,
        datasets:[
          {
            label: dataset.label,
            fill: true,
            lineTension: 0.5,
            borderColor:"rgba(0, 40, 0, 0.1)",
            pointBackgroundColor:"rgba(0, 40, 0, 0.1)",
            backgroundColor: dataset.color,
            borderColor: "rgba(100,150,150,1)",
            borderWidth: 2,
            data: dataset.data.y,
          }
        ]
      })
    }
  }

  render() {
    return (
      <div>
        <Line  data={this.state} />
      </div>
    );
  }
}

export default LineChart;
