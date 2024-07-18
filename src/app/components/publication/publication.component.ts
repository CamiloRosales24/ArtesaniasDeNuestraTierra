import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent {

  formPublicacion: any = FormGroup;
  departamentos : any[] = [
    {
      "_id" : "depto1",
      "nombre_depto": "Boyaca"
    },{
      "_id" : "depto2",
      "nombre_depto": "Cundinamarca"
    }];
  municipios : any[] = [
    {
      "_id" : "muni1",
      "_idDepto" : "depto1",
      "nombre_municipio": "Tunja"
    },{
      "_id" : "muni2",
      "_idDepto" : "depto2",
      "nombre_municipio": "Funza"
    }];
  categorias : any[] = [
      {
        "_id" : "cat1",
        "nombre_categoria": "Filigrana"
      },{
        "_id" : "cat2",
        "nombre_categoria": "Talla en madera"
      }];
  departamento : any;
  municipio : any;
  previsualizador: any;

  get nameProduct(){
    return this.formPublicacion.get('nameProduct');
  }
  get category(){
    return this.formPublicacion.get('category');
  } 
  get description(){
    return this.formPublicacion.get('description');
  }
  get department(){
    return this.formPublicacion.get('department');
  }
  get municipality(){
    return this.formPublicacion.get('municipality');
  }

  public errorMensaje = {  
    nameProduct:[
      {type:'required', message: 'El nombre del producto es requerido.'}
    ],
    category:[
      {type:'required', message: 'La categoría del producto es requerida.'}
    ],
    description:[
      {type:'required', message: 'La descripción del producto es requerida.'}
    ],
    department:[
      {type:'required', message: 'El departamento es requerido.'}
    ],
    municipality:[
      {type:'required', message: 'El municipio es requerido.'}
    ]   
  }

  constructor(
    private sanitazer: DomSanitizer,
    private fb: FormBuilder,
    ) {
      this.crearFormulario(); 
    }

  ngOnInit(): void { 
    console.log(this.departamento);   
  }

  crearFormulario(){
    this.formPublicacion = this.fb.group({
      nameProduct: ['',[Validators.required, Validators.minLength(6)]],
      category: ['',[Validators.required]],
      description: ['',[Validators.required]],
      department: ['',[Validators.required]],
      municipality: ['',[Validators.required]],
      photoFile: ['',[Validators.required]],  
    });    
  } 

  capturaFile(event: any){
    const archivoCapturado: any = event.target.files[0];
    let typeFile = archivoCapturado.type;
    if( typeFile === "image/png" || typeFile === "image/jpg" || typeFile === "image/jpeg"){
      console.log(archivoCapturado);
      this.formPublicacion.value.photoFile = archivoCapturado;
      this.formPublicacion.controls.photoFile.value = archivoCapturado;
      this.extraerBase64(archivoCapturado).then((imagen: any)=>{
        this.previsualizador = imagen.base;
        console.log(this.previsualizador);
        
      })
    }else{
      console.log('error');
      this.previsualizador = '';
    }
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) =>{
    try{
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitazer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () =>{
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error =>{
        resolve({
          base: null
        });
      };
    } catch(e){
      return null
    }
  })

  guardar(){
    console.log(this.departamento);
    console.log(this.formPublicacion);
    
  }


  
  
}
