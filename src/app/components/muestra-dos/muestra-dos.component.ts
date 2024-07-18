import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
@Component({
  selector: 'app-muestra-dos',
  templateUrl: './muestra-dos.component.html',
  styleUrls: ['./muestra-dos.component.scss']
})
export class MuestraDosComponent {

  listaCategorias : any[] = [];
  constructor(
    private router: Router,
    private generalService: GeneralService
  ) { }

  ngOnInit() {
    this.listaCategorias = this.generalService.listarCategorias2();
  }

  verDetalle(id: any){
    this.router.navigateByUrl(`/categoria/${id}`);
  }
}
