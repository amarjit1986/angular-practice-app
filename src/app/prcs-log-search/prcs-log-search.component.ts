import { Component, OnInit } from '@angular/core';
import { OwlDateTime } from 'ng-pick-datetime/date-time/date-time.class';
import { IDataPackage } from './package';
import { DataPackageService } from './package.service';

@Component({
  selector: 'app-prcs-log-search',
  templateUrl: './prcs-log-search.component.html',
  styleUrls: ['./prcs-log-search.component.css']
  
})
export class PrcsLogSearchComponent implements OnInit {

  pageTitle : string = "Data Package";

  startDateTime : Date;
  

  packages : any[] = null;

  constructor(private dataPackageService : DataPackageService) {

   }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Collection' },
      { item_id: 2, item_text: 'Event' },
      { item_id: 3, item_text: 'Metrics' },
      { item_id: 4, item_text: 'Registered Client' },
      { item_id: 5, item_text: 'Registered Device' }
    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'Collection' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  getDataPackageList() : void {
      //alert('startDateTime' + this.startDateTime);
      //this.packages = this.package1;

      this.packages = this.dataPackageService.getDataPackage();
  }


}
