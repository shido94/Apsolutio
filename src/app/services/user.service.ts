import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getList() {
    const url = '/user/get-list';
    return this.http.get(url)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  addList(userForm) {
    return this.http.post<any>('/user/add-list', userForm);
  }

}
