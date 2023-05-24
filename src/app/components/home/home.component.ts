import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  users$!: Observable<User[]>

  constructor(private _APIService: APIService,
              private _router : Router ){}

  ngOnInit(): void {
    
    this.users$ = this._APIService.getAll();

  }

  onViewProfile(user: User) {
    this._router.navigateByUrl(`profil/${user.id}`);
  }

}
