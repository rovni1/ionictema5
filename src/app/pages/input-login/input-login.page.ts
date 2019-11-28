import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-input-login',
  templateUrl: './input-login.page.html',
  styleUrls: ['./input-login.page.scss'],
})
export class InputLoginPage implements OnInit {

  loading;
  logUsers = { username: '', password: '' };


  constructor(private auth: AuthService, private navCtrl : NavController,
 public router: Router, public loadCrtl: LoadingController) { }

 async login() {

  this.loading = await this.loadCrtl.create({
     message: 'Loading..'
   });
   await this.loading.present();


    this.auth.login(this.logUsers).subscribe(allowed => {
    if (allowed) {
      this.loading.dismiss();
      this.router.navigate(['/menu']);
    } else {
      alert('Datos incorrectos..')
      this.loading.dismiss();
     }

   });

}


  ngOnInit() {

  }

 

}
