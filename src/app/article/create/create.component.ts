import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

articleForm: Article = {
    id: 0,
    LIB_ART: "",
      prix: 0,
    
  };
 
  constructor(private articleService:ArticleService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.articleService.create(this.articleForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["../article/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}

