import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-muestra-uno',
  templateUrl: './muestra-uno.component.html',
  styleUrls: ['./muestra-uno.component.scss']
})
export class MuestraUnoComponent {

  listaCategorias : any[] = [];
  constructor(
    private router: Router,
    private generalService: GeneralService
  ) { }

  ngOnInit() {
    this.listaCategorias = this.generalService.listarCategorias1();
  }

  verDetalle(id: any){
    this.router.navigateByUrl(`/categoria/${id}`);
  }

}
