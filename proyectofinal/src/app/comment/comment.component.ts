import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetapiService } from '../getapi.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  id: any;
  posts: any;
  


  constructor(private service: GetapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.readComments(this.id).subscribe((resp: any) => {
      this.posts = resp;
      console.log(resp);
    })
  }
}
