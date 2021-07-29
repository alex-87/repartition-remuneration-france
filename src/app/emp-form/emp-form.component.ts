import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Select2OptionData } from 'ng-select2';
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

  public convCollData!: Array<Select2OptionData>;
  public professionData!: Array<Select2OptionData>;
  public trancheEffectifData!: Array<Select2OptionData>;
  public deptResidenceData!: Array<Select2OptionData>;
  public domEmployeurData!: Array<Select2OptionData>;
  public genreData!: Array<Select2OptionData>;
  public ageData!: Array<Select2OptionData>;
  public contratTravailData!: Array<Select2OptionData>;

  public jsonDataResponse: any;
  public isOnError: boolean = false;
  public isDataLoading: boolean = false;

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
    this.convCollData = this.listingsService.getConvCollList();
    this.professionData = this.listingsService.getProfessionCatSocialProList();
    this.trancheEffectifData = this.listingsService.getTrancheEffectifList();
    this.deptResidenceData = this.listingsService.getDeptResidenceList();
    this.domEmployeurData = this.listingsService.getDomEmploiEmployeurList();
    this.genreData = this.listingsService.getGenreList();
    this.ageData = this.listingsService.getAgeList();
    this.contratTravailData = this.listingsService.getTypeContratDeTravailList();
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

    if( !dm.isValidDamaModel() ) {
      this.isOnError = true;
      return;
    } else {
      this.isOnError = false;
    }

    this.isDataLoading = true;

    let ms = this.datapullService.getStats(dm).subscribe(
      (data) => {
        this.jsonDataResponse = data['result'];
        this.isDataLoading = false;
      },
      (error) => {
        console.error(error);
        this.isDataLoading = false;
      }
    );
  }

}
