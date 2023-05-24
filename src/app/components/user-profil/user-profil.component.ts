import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {
  

    user$!: Observable<User>;
    urlRegex! :RegExp;
    profileForm! : FormGroup;
    passwordForm!: FormGroup;
  
    constructor(private _APIService: APIService,
                private _route: ActivatedRoute,
                private formBuilder: FormBuilder){}
  
    ngOnInit(): void {
      
      const userID = +this._route.snapshot.params['id'];
      this.user$ = this._APIService.getById(userID);

      this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
      this.profileForm = this.formBuilder.group({
        Pseudo: [null],
        Firstname:[null],
        Lastname: [null],
        Phone: [null],

      }, {
        updateOn: 'blur'
        });
      
      this.passwordForm = this.formBuilder.group({
        oldPassword: [null, [Validators.required]],
        newPassword: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
        checkPassword: [null, [Validators.required]]
      }, {
        updateOn: 'blur'
      });
      
      this.user$.subscribe(user => {
        this.profileForm.patchValue({
          Pseudo: user.pseudo,
          Firstname: user.firstname,
          Lastname: user.lastname,
          Phone: user.phone
        });
      });
      
    }

}
