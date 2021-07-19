import { Component } from '@angular/core';
import { SecondsService } from '../service/seconds.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage {

  dato: any = []

  constructor(private secondsService: SecondsService, private alertController: AlertController) { }

  loadpost() {
    this.secondsService.getDatos().subscribe(
      (res) => {
        console.log(res)
        this.dato = res;
      },
      (err) => console.log(err)
    );
  }


  ionViewWillEnter() {
    this.loadpost();

  }
   async deletedato(id) {
   const alert = await this.alertController.create({
    header: 'Remover',
    subHeader: 'Remover esta publicación',
    message: 'Esta seguro?',
    buttons: [
      {
      text: 'ok',
     handler: () =>{
     console.log('id');
     this.secondsService.deleteDatos(id).subscribe(
     (res) => {
       this.loadpost();
     },
    (err) => console.error(err)
     );
       }
     
    }, 'cancel']
     
  });

  await alert.present();

}
 editdato(id: string){
   console.log(id)
 }

}

