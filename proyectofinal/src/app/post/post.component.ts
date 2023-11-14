import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetapiService } from '../getapi.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  


  id: any;
  posts: any;

  constructor(private service: GetapiService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.readPost(this.id).subscribe ( (resp: any) => {
      this.posts = resp;
    })
  }

}
