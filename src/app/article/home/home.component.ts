import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allarticles: Article[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private articleService: ArticleService) {}
 
  ngOnInit(): void {
    this.get();
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    
  }
 
  get() {
    this.articleService.get().subscribe((data) => {
      this.allarticles = data;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.articleService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allarticles = this.allarticles.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}


