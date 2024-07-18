import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {

  categoria: any;
  idCategoria: any;

  constructor(
    private router: Router,
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params: any)=>{  
      this.idCategoria =  params.id   
    })
   }

  ngOnInit() {
    this.categoria = this.generalService.verCategoria(this.idCategoria);
    console.log(this.categoria);    
  }

  regresar(){
    this.router.navigateByUrl(`/home`);
  }
}
