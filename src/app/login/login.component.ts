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
  correcto: any = [];
  incorrecto: any = [];
  ngOnInit() {

  }

  btnLogin() {
    console.log("USER=:>", this.user);
    console.log("CONTRA=:>", this.contra);
    this.zns.getListaCuentas().subscribe((data) => {
      this.usuarios = data;
      let j = 0;
      let k = 0;
      for (let i = 0; i < this.usuarios.length; i++) {
        if ((this.user == this.usuarios[i].usuario) && (this.contra == this.usuarios[i].clave)) {
          this.correcto[j] = this.usuarios[i];
          j = j + 1;
        } else {
          this.incorrecto[k] = this.usuarios[i];
          k = k + 1;
        }
      }
      if (this.correcto.length !=0) {
        console.log("Correcto=:>",this.correcto);
        this.router.navigate(["/template/htransferencia"])
      }else{
        console.log("ERROR...");
        location.reload();
      }
    });
  }
}
