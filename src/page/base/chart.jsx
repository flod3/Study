import React, { Component } from "react"
import {Frame} from 'component/frame.jsx';
import createBrowserHistory from "history/createBrowserHistory";
import echarts from 'echarts'

const customHistory = createBrowserHistory();

export class Chart extends Component {

    constructor(props) {
        super(props)
        this.state = {
          // data: {},
        }
      }
    
      componentDidMount() {
        // this.loadChart()
        setTimeout(() => {
          this.loadChart()
        }, 500)
      }
    
      loadChart() {
        // console.log(this.chart)
        this.chartObj = echarts.init(this.chart)
        const option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['华北', '华东', '华南', '东北', '华中','西南','西北'],
          },
          series: [
            {
              name: '顾客分布',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center',
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold',
                  },
                },
              },
              labelLine: {
                normal: {
                  show: false,
                },
              },
              data: [
                { value: 2000, name: '华北' },
                { value: 2500, name: '华南' },
                { value: 2300, name: '华东' },
                { value: 1500, name: '华中' },
                { value: 1200, name: '东北' },
                { value: 800, name: '西北' },
                { value: 1000, name: '西南' }
              ],
            },
          ],
        };
        this.chartObj.setOption(option)
      }

    render(){
        return(
            <div>
              <Frame history={customHistory} defaultOpenKey="workstation" defaultSelectedKey="chart"/>
               <div className="home_content">
              
                 <div className="chartpage" ref={c => this.chart = c} />
                  </div>
                   
            </div>
        )
    }
}


