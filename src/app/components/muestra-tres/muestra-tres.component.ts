import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-muestra-tres',
  templateUrl: './muestra-tres.component.html',
  styleUrls: ['./muestra-tres.component.scss']
})
export class MuestraTresComponent {

  listaArtesanos : any[] = [];
  constructor(
    private router: Router,
    private generalService: GeneralService
  ) { }

  ngOnInit() {
    this.listaArtesanos = this.generalService.listarArtesanos();
  }

  verDetalle(id: any){
    this.router.navigateByUrl(`/artesano/${id}`);
  }

}
