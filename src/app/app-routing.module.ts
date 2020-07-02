import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GallerieComponent} from "./gallerie/gallerie.component";
import {VideoComponent} from "./video/video.component";
import {BlogComponent} from "./blog/blog.component";
import {PostComponent} from "./post/post.component";
import {LoginComponent} from "./login/login.component";
import {CreatePostComponent} from "./create-post/create-post.component";
import {AngularFireAuthGuard, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);





const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'gallerie', component: GallerieComponent},
  {path: 'video', component: VideoComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'post', component: PostComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-post', component: CreatePostComponent, canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectUnauthorizedToLogin}},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
