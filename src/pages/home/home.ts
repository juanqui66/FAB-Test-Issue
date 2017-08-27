import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PublicidadService } from '../../clases/servicios/publicidad-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit {

  constructor(private publicidad: PublicidadService, public navCtrl: NavController) {

  }

  ngOnInit() {
    try {
      this.publicidad.preparaBanner()
      this.publicidad.showBanner("bottom");
      this.publicidad.preparaInterstitial();
      this.publicidad.showInterstitial();
    } catch (err) {
      console.log(err);
    }

  }    

  alerta(texto) {
    alert(texto);
  }
}
