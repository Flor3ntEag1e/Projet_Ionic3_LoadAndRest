import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { PaysPage } from '../pays/pays';
import { BrowserPage } from '../browser/browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  openPaysPage(){
    this.presentLoadingDefault1();
  }

  openBrowserApp(){
    this.presentLoadingDefault2();
  }

  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Veuillez patienter...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push(PaysPage)
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  presentLoadingDefault2() {
    let loading = this.loadingCtrl.create({
      content: 'Veuillez patienter...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push(BrowserPage)
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

}
