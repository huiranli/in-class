import React from 'react';
import './App.css';
import * as d3 from 'd3';
//chart components
import {BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar} from 'recharts';
//reactstrap
//import 'bootstrap/dist/css/bootstrap.css';
//
import { Button, ButtonGroup } from 'reactstrap';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      key:[],
      xVariable: 'Year'
    }
  }
  componentDidMount(){
    d3.csv('data/medalists.csv').then((d) => {
      this.setState({data: d, keys: d3.scaleSymlog(data[0])})
    })
  }

  render(){
    //console.log(this.state.keys);
    let chartData = d3.nest()
    .key((d) => d[this.state.xVariable])
    .rollup((d)=> d.length)
    .entries(this.state.data);

    console.log(chartData);

    return (
      <div className="container">
        <div>
          <myButtons dataItems={this.state.data} clickHandler={this.i[data]}></myButtons>
        </div>
        <div>
          <BarChart width={800} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="key"/>
            <YAxis dataKey="value"/>
            <Tooltip />
            <Bar dataKey="value" fill="#884d8"/>
          </BarChart>
        </div>
      </div>
    );
  }
}

export default App;
