import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemsComponent, ItemComponent]
  //,
  //exports: [ ItemsComponent ] // ahora lo levanta el router
})
export class ItemsModule { }
