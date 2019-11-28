import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  loading;

  constructor(private menu: MenuController, public auth: AuthService, 
  public loadCtrl: LoadingController, public router: Router) { }

  async logOut(){
    this.loading = await this.loadCtrl.create({
      message: 'Closing...'
      
    });
    await this.loading.present();

    this.auth.logout()
    this.router.navigate(['/']);
    this.loading.dismiss();
  }


  ngOnInit() {
  }

}
