import { Component } from '@angular/core';
import { GetapiService } from '../getapi.service';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.scss']
})
export class AllpostsComponent {

  getdata:any;

  constructor(private getapi:GetapiService) {

  }

  ngOnInit() {
    this.getapi.readPosts().subscribe ( (resp: any) => {
      this.getdata = resp;
    })
  }


}
