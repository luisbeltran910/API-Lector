import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpostsComponent } from './allposts/allposts.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:'', component:AllpostsComponent},
  {path:'post/:id', component:PostComponent},
  {path:'comment/:id', component:CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
