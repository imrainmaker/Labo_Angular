import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  users!: User[];
  users$!: Observable<User[]>

  constructor(private _APIService: APIService){}

  ngOnInit(): void {
    
    this.users$ = this._APIService.getAll();

  }

}
