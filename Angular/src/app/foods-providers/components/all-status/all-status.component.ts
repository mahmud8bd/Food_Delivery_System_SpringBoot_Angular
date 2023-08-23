import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
    selector: 'app-all-status',
    templateUrl: './all-status.component.html',
    styleUrls: ['./all-status.component.css']
})
export class AllStatusComponent {
    public chart: any;
    public chartPie:any;
    ngAfterViewInit() {
        var myChart = new Chart("myChart", {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        this.createChart();
        this.createChartPie();
        this.createChartLine();
    }

    createChart() {

        this.chart = new Chart("MyChartTwo", {
            type: 'bar', //this denotes tha type of chart

            data: {// values on X-Axis
                labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
                    '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
                datasets: [
                    {
                        label: "Sales",
                        data: ['467', '576', '572', '79', '92',
                            '574', '573', '576'],
                        backgroundColor: 'blue'
                    },
                    {
                        label: "Profit",
                        data: ['542', '542', '536', '327', '17',
                            '0.00', '538', '541'],
                        backgroundColor: 'limegreen'
                    }
                ]
            },
            options: {
                aspectRatio: 2.5
            }

        });
    }

    createChartPie(){

        this.chartPie = new Chart("MyChartPie", {
          type: 'doughnut', //this denotes tha type of chart
    
          data: {// values on X-Axis
            labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
               datasets: [{
        label: 'My First Dataset',
        data: [300, 240, 100, 432, 253, 34],
        backgroundColor: [
          'red',
          'pink',
          'green',
                'yellow',
          'orange',
          'blue',			
        ],
        hoverOffset: 4
      }],
          },
          options: {
            aspectRatio:2.5
          }
    
        });
      }

      createChartLine(){
  
        this.chart = new Chart("MyChartLine", {
          type: 'line', //this denotes tha type of chart
    
          data: {// values on X-Axis
            labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                                     '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
               datasets: [
              {
                label: "Sales",
                data: ['467','576', '572', '79', '92',
                                     '574', '573', '576'],
                backgroundColor: 'blue'
              },
              {
                label: "Profit",
                data: ['542', '542', '536', '327', '17',
                                         '0.00', '538', '541'],
                backgroundColor: 'limegreen'
              }  
            ]
          },
          options: {
            aspectRatio:2.5
          }
          
        });
      }
}
