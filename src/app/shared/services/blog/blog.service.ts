import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  pathApi = 'https://blogs-apis.herokuapp.com'

  constructor(
    private titlePage: Title,
    private http: HttpClient
  ) { }
  
  pageTitle(title: string) {
    this.titlePage.setTitle(title)
  }

  getPosts(): Observable <any> {
    return this.http.get(`${this.pathApi}/blog`);
  }

  sendMsg(data: any): Observable <any> {
    return this.http.post(`${this.pathApi}/contact`, data);
  }

  getArticle(id): Observable <any> {
    return this.http.get(`${this.pathApi}/blog/${id}`);
  }

  getCategories(tag: string): Observable <any> {
    return this.http.get(`${this.pathApi}/blog/categories/${tag}`);
  }

  searchPost(title) {
    return this.http.get(`${this.pathApi}/blog/search?title=${title}`);
  }

  getAllTags(): Observable <any> {
    return this.http.get(`${this.pathApi}/blog/tags`);
  }

  newComment(id, data) {
    return this.http.put(`${this.pathApi}/blog/newComment/${id}`, data);  
  }
  
  getComments(): Observable <any> {
    return this.http.get(`${this.pathApi}/blog/comments`);
  }

}
