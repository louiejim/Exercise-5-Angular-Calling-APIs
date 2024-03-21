import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './component/book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { BookItemComponent } from './component/book-item/book-item.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, BookRoutingModule,SharedModule],
  declarations: [BookListComponent, BookItemComponent,],
})
export class BookModule {}
