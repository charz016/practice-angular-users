import { Component, OnInit, Input } from '@angular/core';
import { Comments } from 'src/app/shared/models/comment.model';

@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
@Input()comments:Comments;

  constructor() { }

  ngOnInit() {
  }

}
