import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private zns: LoginService, private reoute: ActivatedRoute) { }

  usuarios: any = [];//variable de prueba para retorno de servicio
  user: any = "";//variable que toma el usuario
  contra: any = "";//variable que toma la contraseña
  id: number = 0;
  ngOnInit() {

  }

  btnLogin() {
    this.id = 3;
    console.log("USER=:>", this.user);
    console.log("CONTRA=:>", this.contra);
    for (let i = 0; i <= this.id; i++) {
      this.zns.getListaCuentas(i).subscribe((data) => {
        this.usuarios = data;
      });
    }
    console.log("DATOS=:>",this.usuarios.length);
  }
}
