import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

import { Router } from '@angular/router';
import { Categorie } from 'src/app/categorie';
import { CategorieService } from 'src/app/categorie.service';
import { ArticleService } from '../article.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  allcategories: Categorie[]=[];
articleForm: Article = {
    id: 0,
    LIB_ART: "",
      prix: 0,
    categorie:{ID_CAT:0,
      LIB_CAT: ""
    }
  };
 
  constructor(private categorieService:CategorieService,
    private router:Router, private articleService:ArticleService) {}
 
  ngOnInit(): void { this.get();
  }
  get()
  {
    this.categorieService.get().subscribe((data)=>{this.allcategories=data;
    });}
 
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

