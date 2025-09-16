import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loginForm.valid) {
      const {email, password} = this.loginForm.value;
      this.formService.login(email, password).subscribe(isLogged => {
        if(isLogged) {
          alert('Usuário logado!!');
          this.resetForm();
        } else {
          alert('Falha no login')
        }
      })
    }


  }

  resetForm() {
    this.loginForm.reset({
      email: '',
      password: ''
    });
  }

}
