import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  @Input() listsArray: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getList().subscribe(list => {
      this.listsArray = list;
    });
  }

}
