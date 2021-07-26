import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnChanges {

  @Input('jsonDataResponse') jsonDataResponse = [];

  public barChartType: ChartType = 'bar';
  public barChartLabels: string[] = [];
  public barChartRawData: number[] = [];
  public barChartLegend = true;

  ngOnChanges(changes: SimpleChanges) {
    this.barChartLabels = [];
    this.barChartRawData = [];

    let perctTotal:number = 0;
    for(let e of this.jsonDataResponse) {
      perctTotal += e['value'];
    }

    for(let e of this.jsonDataResponse) {
      this.barChartLabels.push(e['label']);
      this.barChartRawData.push((perctTotal==0 ? e['value'] : e['value'] * 100 / perctTotal));
    }

    this.barChartData = [
      {
        data : this.barChartRawData,
        label: '% de représentation de la tranche salariale',
        backgroundColor: 'black',
        hoverBackgroundColor: 'blue'
      }
    ];
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    aspectRatio: 5
  };

  public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
