import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html',
})
export class BrowserPage {

  url: string;

  constructor(public navCtrl: NavController, private iab: InAppBrowser) { }

  chargerPageWeb(url: string) { 
    const browser = this.iab.create(url, '_self');
    browser.show();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowserPage');
  }

}
