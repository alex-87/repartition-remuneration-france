import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatapullService } from '../datapull.service';
import { ListingsService } from '../listings.service';
import { DatamockService } from '../mock/datamock.service';
import { EmpDataModel } from '../model/emp.data.model';


@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  public jsonDataResponse: any;

  uForm = this.formBuilder.group({
    trancheEffectif: '',
    convColl: '',
    deptResidence: '',
    domEmploiEmployeur: '',
    professionCatSocialPro: '',
    genre: '',
    age: '',
    typeContratDeTravail: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    public listingsService: ListingsService,
    public datamockService : DatamockService,
    public datapullService : DatapullService,
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit() : void {

    const dm : EmpDataModel = new EmpDataModel(
      this.uForm.controls['trancheEffectif'].value,
      this.uForm.controls['convColl'].value,
      this.uForm.controls['deptResidence'].value,
      this.uForm.controls['domEmploiEmployeur'].value,
      this.uForm.controls['professionCatSocialPro'].value,
      this.uForm.controls['genre'].value,
      this.uForm.controls['age'].value,
      this.uForm.controls['typeContratDeTravail'].value,
    );

    let ms = this.datapullService.getStats(dm).subscribe(
      (data) => {
        console.warn(data['result']);
        this.jsonDataResponse = data['result'];
      },
      (error) => console.error(error)
    );
  }

}
