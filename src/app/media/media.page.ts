import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {
  nota1:any;
  nota2:any;
  nota3:any;
  resultado:any;
  status:any;
  constructor(public modalController: ModalController, public alertController: AlertController) { }

  ngOnInit() {
  }

  async enviadados(){
    console.log(this.nota1);
    console.log(this.nota2);
    console.log(this.nota3);
    this.resultado=(this.nota1+this.nota2+this.nota3)/3;
    console.log(this.resultado);
    if(this.resultado<6.99){
      this.status="Abaixo da média";
    }

     if(this.resultado<6.99){
      this.status="Abaixo da média";
    }
    if(this.resultado>=7){
      this.status="Dentro da média";
    }

    if(this.resultado>10){
      this.status="ERRO!";
    }
    console.log(this.resultado);

    const alert = await this.alertController.create({
      header: 'Sua média é',
      subHeader: this.resultado,
      message: this.status,
      buttons: [{
        text:'OK',
        handler:()=>{
          this.closeMedia();
        }
      }]
    });

    await alert.present();
  }



async closeMedia(){
  const onClosedData:string = "Wrapped UP!";
  await this.modalController.dismiss(onClosedData);
}

}