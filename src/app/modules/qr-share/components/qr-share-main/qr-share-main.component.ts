import {Component} from '@angular/core';
import {QrcodeServiceService} from "../../services/qrcode-service.service";

@Component({
  selector: 'app-qr-share-main',
  templateUrl: './qr-share-main.component.html',
})
export class QrShareMainComponent {
  constructor(public qrcodeService: QrcodeServiceService) {
  }

}
