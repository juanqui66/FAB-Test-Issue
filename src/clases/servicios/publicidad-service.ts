import { Injectable } from '@angular/core';
import { AdMob } from '@ionic-native/admob';
import { Platform, Events } from 'ionic-angular';
import { AlertController, Alert} from 'ionic-angular';


@Injectable() export class PublicidadService {
  private admobId: any;
  public bannerDisponible: Promise<any>;
  public interstitialDisponible: Promise<any>;
  public videoDisponible: Promise<any>;

  constructor(public platform: Platform,
              private admob: AdMob,
              public events: Events,
              public alertCtrl: AlertController) {


  }


  public inicializaAdmob() {
    // select the right Ad Id according to platform
    if (this.platform.is('android')) {
      this.admobId = { // for Android
          banner: 'ca-app-pub-9999999999999999/9999999999',
          interstitial: 'ca-app-pub-9999999999999999/9999999999',
          video: 'ca-app-pub-9999999999999999/9999999999'
      };
    } else if (this.platform.is('ios')) {
      this.admobId = { // for ios
          banner: 'ca-app-pub-9999999999999999/9999999999',
          interstitial: 'ca-app-pub-9999999999999999/9999999999',
          video: 'ca-app-pub-9999999999999999/9999999999'
      };
    } else if (this.platform.is('windows')) {
      this.admobId = { // for windows
          banner: 'ca-app-pub-9999999999999999/9999999999',
          interstitial: 'ca-app-pub-9999999999999999/9999999999',
          video: 'ca-app-pub-9999999999999999/9999999999'
      };
    } else {
      this.admobId = { // for others
          banner: 'ca-app-pub-9999999999999999/9999999999',
          interstitial: 'ca-app-pub-9999999999999999/9999999999',
          video: 'ca-app-pub-9999999999999999/9999999999'
      };
    }

    this.admob.onAdFailLoad().subscribe(() => {
      console.log("onAdFailLoad");
    });

    this.admob.onAdLeaveApp().subscribe((data) => {
      console.log("onAdLeave");
    });

    this.admob.onAdDismiss().subscribe((data) => {
      console.log("suscribe");
    });

    this.preparaBanner();
    this.preparaInterstitial();
    //this.preparaVideo();
  }


  public preparaBanner() {
    if (this.admob) {
      this.bannerDisponible = this.admob.createBanner({
          adId: this.admobId.banner,
          isTesting: true,
          autoShow: false
      });
    }
  }

  public preparaInterstitial() {
    if (this.admob) {
        this.interstitialDisponible = this.admob.prepareInterstitial({
            adId: this.admobId.interstitial,
            isTesting: true,
            autoShow: true
        }).catch((e) => {
          console.log("excepción");
        });
    }
  }

  public preparaVideo() {
    if (this.admob) {
        this.videoDisponible = this.admob.prepareRewardVideoAd({
            adId: this.admobId.video,
            isTesting: true,
            autoShow: true
        }).catch((e) => {
          console.log("excepción");
        });
    }
  }

  public showBanner(position) {

    if (true) {
      this.bannerDisponible.then(() => {
        // AdMob.showBanner(positionMap[position.toLowerCase()]);
        this.admob.showBanner(8);
      }).catch((e) => {
        console.log("excepción");;
      });
    }
  }

  public showInterstitial() {
    if (true) {
      this.interstitialDisponible.then(() => {
        this.admob.showInterstitial();
      }).catch((e) => {
        console.log("excepción");
      });
    }
  }


    public showVideo() {
      if (true) {
        this.videoDisponible.then(() => {
          this.admob.showRewardVideoAd();
        }).catch((e) => {
          console.log("excepción");
        });
      }
    }

  public hideBanner() {
    if (true) {
      this.admob.hideBanner();
    }
  }


}
