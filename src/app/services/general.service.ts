import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  artesanos: any[] = [
    {
      id: "art1",
      nameArtesano: "Efrain Contreras",
      title: "Maestro artesano Boyacá",
      image: "../assets/imagenes/Ellipse 15.png",
      image1: "../assets/imagenes/Rectangle 8c.png",
      text: "Efraín Contreras es uno de los artesanos más destacados de Boyacá, conocido por su excepcional habilidad en la creación de figuras de barro. Con décadas de experiencia en el oficio, Contreras ha logrado preservar y enriquecer las técnicas tradicionales de la región, convirtiéndose en un referente de la artesanía boyacense.\nMaestro Artesano: Efraín Contreras ha dedicado su vida a perfeccionar el arte de trabajar con barro, combinando técnicas ancestrales con su propia creatividad para producir piezas únicas y de alta calidad.\nTradición y Modernidad: Sus obras reflejan una profunda conexión con las tradiciones culturales de Boyacá, al mismo tiempo que incorporan elementos modernos que las hacen atractivas para un público contemporáneo.\nFguras de Barro: Contreras es especialmente reconocido por sus figuras de barro, que abarcan desde pequeñas esculturas hasta grandes piezas decorativas. Cada figura es meticulosamente modelada y decorada, mostrando una atención al detalle y una maestría que solo un artesano de su calibre puede lograr.\nTemáticas Variadas: Sus piezas suelen representar escenas de la vida cotidiana, figuras históricas y religiosas, y elementos de la naturaleza, capturando la esencia y la riqueza cultural de Boyacá."
    },
    {
      id: "art2",
      nameArtesano: "Hernando Cruz",
      title: "Maestro artesano Boyacá",
      image: "../assets/imagenes/Ellipse 16.png",
      image1: "../assets/imagenes/Rectangle 8d.png",
      text: "Hernando Cruz es un artesano de Boyacá, una región en Colombia conocida por su rica tradición artesanal. Los artesanos de Boyacá son célebres por sus habilidades en diversas técnicas artesanales, como la alfarería, la cestería, la tejeduría y la talla en madera, entre otras.\nAlfarería:Utiliza técnicas tradicionales para crear piezas de cerámica como vasijas, platos y figuras decorativas, utilizando el barro como materia prima principal.\nTejeduría: Fabrica tejidos a mano, como ruanas, mantas y mochilas, empleando fibras naturales como la lana y el algodón. Las técnicas de tejido a menudo se transmiten de generación en generación.\nCestería: Confecciona canastos, cestas y otros artículos utilizando fibras vegetales como el bejuco, el mimbre y la caña. Estas piezas son apreciadas tanto por su funcionalidad como por su belleza estética.\nTalla en Madera: Produce esculturas, muebles y objetos decorativos tallados a mano en madera, destacándose por la precisión y el detalle de su trabajo."
    },
    {
      id: "art3",
      nameArtesano: "Humberto Cerón",
      title: "Maestro artesano Cundinamarca",
      image: "../assets/imagenes/Ellipse 17.png",
      image1: "../assets/imagenes/Rectangle 8e.png",
      text: "Uno de los artesanos destacados en Cundinamarca es Humberto Cerón, conocido por su habilidad en la cerámica artesanal. Humberto Cerón ha desarrollado técnicas tradicionales de la región para crear piezas únicas que reflejan la cultura y el arte de Cundinamarca. Su trabajo se caracteriza por la meticulosa elaboración de vasijas, platos, y otros objetos decorativos, utilizando arcilla y técnicas de decoración que han sido transmitidas de generación en generación.\nTorno de Alfarero: Para algunas de sus piezas, como vasijas y platos, utiliza el torno de alfarero. Esta técnica le permite trabajar la arcilla en movimiento, logrando formas simétricas y uniformes.\nDecoración Tradicional: Emplea técnicas tradicionales de decoración, como el engobe y el esgrafiado, para dar color y patrones a sus piezas. El engobe es una capa de arcilla coloreada que se aplica antes de la cocción, mientras que el esgrafiado implica grabar diseños en la superficie de la arcilla.\nCocción en Horno: Utiliza hornos de alta temperatura para la cocción de sus cerámicas, asegurando que las piezas adquieran resistencia y durabilidad adecuadas para su uso y exhibición."
    },
    {
      id: "art4",
      nameArtesano: "Martha Ruiz",
      title: "Maestro artesano Cundinamarca",
      image: "../assets/imagenes/Ellipse 18.png",
      image1: "../assets/imagenes/Rectangle 8f.png",
      text: "Marta Ruiz es una destacada artesana de Cundinamarca, una región en Colombia conocida por su diversa y rica tradición artesanal. Los artesanos de Cundinamarca son reconocidos por su habilidad en una variedad de técnicas artesanales que reflejan la riqueza cultural de la región.\nMarta Ruiz no solo es una artesana talentosa, sino que también es una embajadora de la cultura de Cundinamarca. Sus talleres y demostraciones sirven como centros de aprendizaje para jóvenes interesados en la artesanía, asegurando la continuidad de las tradiciones artesanales. Además, sus productos, que llevan consigo historias y significados culturales, ayudan a mantener viva la herencia cultural de la región.\nTejeduría: Marta Ruiz es experta en tejeduría, creando productos como tapetes, mantas, y prendas de vestir utilizando telares manuales y fibras naturales como lana, algodón y fique.\nCestería: Con habilidad en la cestería, Marta produce canastos, bolsos y otros artículos funcionales y decorativos utilizando materiales como la caña y el mimbre. Estos productos destacan por su durabilidad y estética."
    }
  ]
  constructor() { }

  listarArtesanos(){
    return this.artesanos
  }

  verArtesano(id: string){
    for(let item of this.artesanos){
      if(item.id === id){
        return item
      }
    }
  }
}
