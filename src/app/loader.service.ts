import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = false;

  constructor(public loadingController: LoadingController) { }

  async presentLoading() {  
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 5000,
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }
  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
  // async presentLoading() {
  //   this.isLoading = true;
  //   const loading = await this.loadingController.create({
  //     duration: 2000
     
  //   });
  //   console.log('Loading present!');
  //   await loading.present();
  // }
  // async dismiss() {
  //   this.isLoading = false;
  //   const  loading = await this.loadingController.dismiss();
  //   console.log('Loading dismissed!');
    

  // }
}
