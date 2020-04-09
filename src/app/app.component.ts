import { Component } from '@angular/core';
import {SelectItem} from 'primeng/api';
import ItemNames from './ItemData/itemNames.json';
import ItemProps from './ItemData/ItemProperties.json';
import ItemImgDescp from './ItemData/ItemImgDescrp.json';
import itemLevel from './ItemData/itemLevel.json';
import { ToastrService } from 'ngx-toastr';

interface Items {
  ID: number,
  Name: string
}

interface ItemLevel {
  LevelName:string
  ItemLevel:number
}

interface UpgradePart {
  ID: number
}
var itemID;
var itemNewID;
var itemAdi;
var itemTempLevel;
var ItemSpecs;
var ItemImgDescprition;
var MergedItemArray;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})

export class AppComponent {
  ItemLevel: ItemLevel[] = (itemLevel as ItemLevel[]);
  ItemNames:  Items[]  = (ItemNames  as  Items[]);
  ItemProperties:  any[]  = (ItemProps  as  any[]);
  ItemImgDesc: any [] = (ItemImgDescp as any[])
  InvList: Array<any> = [];
  draggedItems: UpgradePart;
  selectedItems: Items;
  SelectedLevel: ItemLevel;
  constructor(private toastr: ToastrService) {

  }
  onSelectItem(event) {
    itemID = event.ID;
    ItemSpecs = this.ItemProperties.find(result => result.ID == itemID);
  }
  onSelectLevel(event) {
    itemTempLevel = event.ItemLevel;
  }
  TestClickMe() {
    if(this.InvList.length != 28)
    {
      itemID = 1012000002;
      itemNewID = itemID + 30000000;
      itemAdi = this.ItemNames.find(result => result.ID == itemID);
      ItemSpecs = this.ItemProperties.find(result => result.ID == itemNewID);
      ItemImgDescprition = this.ItemImgDesc.find(result => result.ID == itemID);
      MergedItemArray = {...itemAdi, ...ItemSpecs, ...ItemImgDescprition};
      this.InvList.push(MergedItemArray);
      console.log(itemAdi);
    } 
  else {
    this.toastr.success('', 'Inventory Full :(', {
      positionClass: 'toast-bottom-right',
      timeOut: 600,
      extendedTimeOut: 0
    });
  }
  }
  onClickMe() {
    switch (itemTempLevel) {
      case 1:
        itemAdi = this.ItemNames.find(result => result.ID == itemID);
        ItemSpecs = this.ItemProperties.find(result => result.ID == itemNewID);
        ItemImgDescprition = this.ItemImgDesc.find(result => result.ID == itemID);
        MergedItemArray = {...itemAdi, ...ItemSpecs, ...ItemImgDescprition};
        this.InvList.push(MergedItemArray);
      break;
      case 2:
         itemAdi = this.ItemNames.find(result => result.ID == itemID);
         itemNewID = itemID + 10000000;
         ItemSpecs = this.ItemProperties.find(result => result.ID == itemNewID);
         ItemImgDescprition = this.ItemImgDesc.find(result => result.ID == itemID);
         MergedItemArray = {...itemAdi, ...ItemSpecs, ...ItemImgDescprition};
         this.InvList.push(MergedItemArray);
      break;
      case 3:
        itemAdi = this.ItemNames.find(result => result.ID == itemID);
        itemNewID = itemID + 20000000;
        ItemSpecs = this.ItemProperties.find(result => result.ID == itemNewID);
        ItemImgDescprition = this.ItemImgDesc.find(result => result.ID == itemID);
        MergedItemArray = {...itemAdi, ...ItemSpecs, ...ItemImgDescprition};
        this.InvList.push(MergedItemArray);
      break;
      case 4:
        itemAdi = this.ItemNames.find(result => result.ID == itemID);
        itemNewID = itemID + 30000000;
        ItemSpecs = this.ItemProperties.find(result => result.ID == itemNewID);
        ItemImgDescprition = this.ItemImgDesc.find(result => result.ID == itemID);
        MergedItemArray = {...itemAdi, ...ItemSpecs, ...ItemImgDescprition};
        this.InvList.push(MergedItemArray);
      break;
      case 5:
        itemAdi = this.ItemNames.find(result => result.ID == itemID);
        itemNewID = itemID + 40000000;
        ItemSpecs = this.ItemProperties.find(result => result.ID == itemNewID);
        ItemImgDescprition = this.ItemImgDesc.find(result => result.ID == itemID);
        MergedItemArray = {...itemAdi, ...ItemSpecs, ...ItemImgDescprition};
        this.InvList.push(MergedItemArray);
      break;
      case 6:
        itemAdi = this.ItemNames.find(result => result.ID == itemID);
        itemNewID = itemID + 50000000;
        ItemSpecs = this.ItemProperties.find(result => result.ID == itemNewID);
        ItemImgDescprition = this.ItemImgDesc.find(result => result.ID == itemID);
        MergedItemArray = {...itemAdi, ...ItemSpecs, ...ItemImgDescprition};
        this.InvList.push(MergedItemArray);
      break;
      case 7:
        itemAdi = this.ItemNames.find(result => result.ID == itemID);
        itemNewID = itemID + 60000000;
        ItemSpecs = this.ItemProperties.find(result => result.ID == itemNewID);
        ItemImgDescprition = this.ItemImgDesc.find(result => result.ID == itemID);
        MergedItemArray = {...itemAdi, ...ItemSpecs, ...ItemImgDescprition};
        this.InvList.push(MergedItemArray);
      break;
      case 8:
        itemAdi = this.ItemNames.find(result => result.ID == itemID);
        itemNewID = itemID + 70000000;
        ItemSpecs = this.ItemProperties.find(result => result.ID == itemNewID);
        ItemImgDescprition = this.ItemImgDesc.find(result => result.ID == itemID);
        MergedItemArray = {...itemAdi, ...ItemSpecs, ...ItemImgDescprition};
        this.InvList.push(MergedItemArray);
      break;
      case 9:
        itemAdi = this.ItemNames.find(result => result.ID == itemID);
        itemNewID = itemID + 80000000;
        ItemSpecs = this.ItemProperties.find(result => result.ID == itemNewID);
        ItemImgDescprition = this.ItemImgDesc.find(result => result.ID == itemID);
        MergedItemArray = {...itemAdi, ...ItemSpecs, ...ItemImgDescprition};
        this.InvList.push(MergedItemArray);
      break;
    }
  }
}
