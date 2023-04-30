import {Component , OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectFromRes';
  users:any[] = [];
  usersView:any[] = [];
  userName: string = '';
  response: any;
  page:number = 1;
  limit:number = 10;
  totalPages:any = 10;

  itemsPerPage:number = 10;
  collectionSize:number = 10;
 allItems: any[] = [];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[] = [];

  constructor(private http: HttpClient) {
    this.getPost();
  }
  getPost(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/' + this.userName)
      .subscribe((response:any) => {
        this.response = response;
        console.log(this.response);
        this.users = this.response;
        this.page = 1;
      })
  }
  changePage(page: any){
    this.page = page
    this.fetchPosts()
  }
  fetchPosts(){
      let startIndex = this.itemsPerPage * (this.page - 1);
      let Rows = this.users.slice(startIndex, this.itemsPerPage);
      return Rows;
  }

}
