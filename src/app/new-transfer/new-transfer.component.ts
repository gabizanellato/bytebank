import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transfer } from '../models/transfers.model';
import { AlltransfersService } from '../services/alltransfers.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css']
})
export class NewTransferComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: AlltransfersService, private router: Router) {}

  transferir(){
    //emitir valor
    const valorEmitir: Transfer = {
      valor: this.valor,
      destino: this.destino
    }

    this.service.addNewTransfer(valorEmitir).subscribe((resultado) => {
      console.log(resultado)
      this.limparCampos()
      this.router.navigateByUrl('extract')
    },
    (error) => {
      return console.error(error);
    }
    )
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }



}

