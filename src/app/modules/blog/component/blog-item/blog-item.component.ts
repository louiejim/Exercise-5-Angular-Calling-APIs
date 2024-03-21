import {
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  output,
} from '@angular/core';
import { Blog } from '../../model/blog.interface';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss',
})
export class BlogItemComponent {
  @Input('blogInput') blog: Blog | undefined;
  @Output() editEmitter = new EventEmitter<number>();
  @Output() deleteEmitter = new EventEmitter<number>();
}
