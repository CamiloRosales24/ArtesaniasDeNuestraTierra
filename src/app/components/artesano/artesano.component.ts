import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-artesano',
  templateUrl: './artesano.component.html',
  styleUrls: ['./artesano.component.scss']
})
export class ArtesanoComponent {

  artesano: any;
  idArtesano: any;

  constructor(
    private router: Router,
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params: any)=>{  
      this.idArtesano =  params.id   
    })
   }

  ngOnInit() {
    this.artesano = this.generalService.verArtesano(this.idArtesano);
    console.log(this.artesano);    
  }

  regresar(){
    this.router.navigateByUrl(`/home`);
  }
}
