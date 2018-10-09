import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listForm: FormGroup;
  listArray = [];
  listControl = new FormControl(null, [Validators.required]);

  constructor(private router: Router,
              private userService: UserService,
  ) {
    this.listForm = new FormGroup({
      list: this.listControl,
    });
  }

  ngOnInit() {
  }

  onAdd() {
    const obs = this.userService.addList(this.listForm.value);
    obs.subscribe(data => {
        this.listArray = data.list;
        console.log(this.listArray);
    });
    this.listForm.reset();
  }

}
