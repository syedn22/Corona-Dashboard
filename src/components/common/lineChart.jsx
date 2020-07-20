import React, { Component } from "react";
import { Line } from "react-chartjs-2";

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

  async componentDidUpdate(prevProps){
    if(this.props!==prevProps)
    {
      const {dataset}=this.props;
      console.log(dataset);
      this.setState({
        labels:dataset.data.x,
        datasets:[
          {
            label: dataset.label,
            fill: false,
            lineTension: 0.5,
            backgroundColor: dataset.color,
            borderColor: "rgba(0,0,0,1)",
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
        <Line data={this.state} />
      </div>
    );
  }
}

export default LineChart;
