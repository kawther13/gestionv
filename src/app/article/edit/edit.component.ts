import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  articleForm: Article = {
      id: 0,
      LIB_ART: "",
        prix: 0,
      
    }; 

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private articleService: ArticleService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.articleService.getById(id).subscribe((data) => {
      this.articleForm = data;
    });
  }
 
  update() {
    this.articleService.update(this.articleForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/article/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}

