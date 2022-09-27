import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicio/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos();
  }

}
