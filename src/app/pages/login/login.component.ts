import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { DataService } from '../../services/data.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService]
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required,
      CustomValidator.EmailValidator
      ])],
      password: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required])]
    });
  }

  submit() {
    // this.dataService.createUser(this.form.value)
    //   .subscribe(data => {
    //     console.log(data);
    //   }, error => {
    //     console.log("Error occured.");
    //   })
    console.log(this.form.value);

  }
  ngOnInit() {
  }

}
