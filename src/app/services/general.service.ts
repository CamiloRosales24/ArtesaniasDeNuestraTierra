import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  categorias: any[] = [
    {
      id: "art1",
      name: "Efrain Contreras",
      title: "Maestro artesano Boyacá",
      image: "../assets/imagenes/Ellipse 15.png",
      image1: "../assets/imagenes/Rectangle 8c.png",
      text: "Efraín Contreras es uno de los artesanos más destacados de Boyacá, conocido por su excepcional habilidad en la creación de figuras de barro. Con décadas de experiencia en el oficio, Contreras ha logrado preservar y enriquecer las técnicas tradicionales de la región, convirtiéndose en un referente de la artesanía boyacense.\nMaestro Artesano: Efraín Contreras ha dedicado su vida a perfeccionar el arte de trabajar con barro, combinando técnicas ancestrales con su propia creatividad para producir piezas únicas y de alta calidad.\nTradición y Modernidad: Sus obras reflejan una profunda conexión con las tradiciones culturales de Boyacá, al mismo tiempo que incorporan elementos modernos que las hacen atractivas para un público contemporáneo.\nFguras de Barro: Contreras es especialmente reconocido por sus figuras de barro, que abarcan desde pequeñas esculturas hasta grandes piezas decorativas. Cada figura es meticulosamente modelada y decorada, mostrando una atención al detalle y una maestría que solo un artesano de su calibre puede lograr.\nTemáticas Variadas: Sus piezas suelen representar escenas de la vida cotidiana, figuras históricas y religiosas, y elementos de la naturaleza, capturando la esencia y la riqueza cultural de Boyacá."
    },
    {
      id: "art2",
      name: "Hernando Cruz",
      title: "Maestro artesano Boyacá",
      image: "../assets/imagenes/Ellipse 16.png",
      image1: "../assets/imagenes/Rectangle 8d.png",
      text: "Hernando Cruz es un artesano de Boyacá, una región en Colombia conocida por su rica tradición artesanal. Los artesanos de Boyacá son célebres por sus habilidades en diversas técnicas artesanales, como la alfarería, la cestería, la tejeduría y la talla en madera, entre otras.\nAlfarería:Utiliza técnicas tradicionales para crear piezas de cerámica como vasijas, platos y figuras decorativas, utilizando el barro como materia prima principal.\nTejeduría: Fabrica tejidos a mano, como ruanas, mantas y mochilas, empleando fibras naturales como la lana y el algodón. Las técnicas de tejido a menudo se transmiten de generación en generación.\nCestería: Confecciona canastos, cestas y otros artículos utilizando fibras vegetales como el bejuco, el mimbre y la caña. Estas piezas son apreciadas tanto por su funcionalidad como por su belleza estética.\nTalla en Madera: Produce esculturas, muebles y objetos decorativos tallados a mano en madera, destacándose por la precisión y el detalle de su trabajo."
    },
    {
      id: "art3",
      name: "Humberto Cerón",
      title: "Maestro artesano Cundinamarca",
      image: "../assets/imagenes/Ellipse 17.png",
      image1: "../assets/imagenes/Rectangle 8e.png",
      text: "Uno de los artesanos destacados en Cundinamarca es Humberto Cerón, conocido por su habilidad en la cerámica artesanal. Humberto Cerón ha desarrollado técnicas tradicionales de la región para crear piezas únicas que reflejan la cultura y el arte de Cundinamarca. Su trabajo se caracteriza por la meticulosa elaboración de vasijas, platos, y otros objetos decorativos, utilizando arcilla y técnicas de decoración que han sido transmitidas de generación en generación.\nTorno de Alfarero: Para algunas de sus piezas, como vasijas y platos, utiliza el torno de alfarero. Esta técnica le permite trabajar la arcilla en movimiento, logrando formas simétricas y uniformes.\nDecoración Tradicional: Emplea técnicas tradicionales de decoración, como el engobe y el esgrafiado, para dar color y patrones a sus piezas. El engobe es una capa de arcilla coloreada que se aplica antes de la cocción, mientras que el esgrafiado implica grabar diseños en la superficie de la arcilla.\nCocción en Horno: Utiliza hornos de alta temperatura para la cocción de sus cerámicas, asegurando que las piezas adquieran resistencia y durabilidad adecuadas para su uso y exhibición."
    },
    {
      id: "art4",
      name: "Martha Ruiz",
      title: "Maestro artesano Cundinamarca",
      image: "../assets/imagenes/Ellipse 18.png",
      image1: "../assets/imagenes/Rectangle 8f.png",
      text: "Marta Ruiz es una destacada artesana de Cundinamarca, una región en Colombia conocida por su diversa y rica tradición artesanal. Los artesanos de Cundinamarca son reconocidos por su habilidad en una variedad de técnicas artesanales que reflejan la riqueza cultural de la región.\nMarta Ruiz no solo es una artesana talentosa, sino que también es una embajadora de la cultura de Cundinamarca. Sus talleres y demostraciones sirven como centros de aprendizaje para jóvenes interesados en la artesanía, asegurando la continuidad de las tradiciones artesanales. Además, sus productos, que llevan consigo historias y significados culturales, ayudan a mantener viva la herencia cultural de la región.\nTejeduría: Marta Ruiz es experta en tejeduría, creando productos como tapetes, mantas, y prendas de vestir utilizando telares manuales y fibras naturales como lana, algodón y fique.\nCestería: Con habilidad en la cestería, Marta produce canastos, bolsos y otros artículos funcionales y decorativos utilizando materiales como la caña y el mimbre. Estos productos destacan por su durabilidad y estética."
    },
    {
      id: "cat1",
      name: "FILIGRANA",
      title: "JOYAS FABRICADAS ARTESANALMENTE CON ESTANDARES DE LA MÁS ALTA CALIDAD",
      image: "../assets/imagenes/Ellipse Cat1.png",
      image1: "../assets/imagenes/Rectangle Cat1.png",
      text: "Las joyas en filigrana de Boyacá son reconocidas por su intrincada belleza y delicada elaboración. Este arte, transmitido a través de generaciones, ha convertido a Boyacá en un referente en la joyería artesanal de Colombia. Las piezas de filigrana, hechas principalmente de oro y plata, son altamente valoradas tanto por su estética como por su técnica de fabricación.\t\tDiseños Intricados: Las joyas en filigrana se caracterizan por patrones complejos y detallados que incluyen formas florales, geométricas y abstractas. La fineza del trabajo permite crear piezas con una gran riqueza visual.\nLigereza: A pesar de su apariencia robusta, las piezas de filigrana son sorprendentemente ligeras debido a la estructura fina de los hilos de metal.\nElegancia Atemporal: Estas joyas combinan la tradición con un toque de modernidad, lo que las hace adecuadas tanto para eventos especiales como para el uso diario."
    },
    {
      id: "cat2",
      name: "ORFEBRERIA RELIGIOSA",
      title: "FE Y ARTE LA ORFEBREIA RELIGIOSA DE BOYACA",
      image: "../assets/imagenes/Ellipse Cat2.png",
      image1: "../assets/imagenes/Rectangle Cat2.png",
      text: "La orfebrería religiosa de Boyacá es una manifestación artística y devocional que combina la fe con la maestría artesanal. Este tipo de orfebrería es altamente valorado por su belleza, simbolismo y la dedicación con la que los artesanos locales trabajan cada pieza. Utilizando principalmente metales preciosos como el oro y la plata, las piezas de orfebrería religiosa incluyen desde delicadas joyas hasta impresionantes objetos litúrgicos.\nDetalles Intrincados: Las piezas de orfebrería religiosa se distinguen por sus elaborados detalles y su precisión, reflejando escenas bíblicas, iconografía religiosa y patrones ornamentales.\nSimbolismo: Cada pieza lleva un profundo simbolismo religioso, desde cruces y cálices hasta relicarios y custodias, representando la fe y la devoción de la comunidad.\nUso de Metales Preciosos: El uso de oro y plata, a menudo combinado con piedras preciosas y semi-preciosas, realza la belleza y el valor espiritual de las piezas."
    },
    {
      id: "cat3",
      name: "INSTRUMENTOS MÚSICALES",
      title: "LA MAGIA DE LA MÚSICA QUE SE REFLEJA EN LA CULTURA",
      image: "../assets/imagenes/Ellipse Cat3.png",
      image1: "../assets/imagenes/Rectangle Cat3.png",
      text: "Los instrumentos musicales elaborados por los artesanos de Duitama, Boyacá, son un reflejo de la rica tradición musical y artesanal de la región. Estos instrumentos, que incluyen guitarras, tiples y bandolas, son conocidos por su alta calidad y su sonido excepcional. Los artesanos de Duitama combinan técnicas tradicionales con una cuidadosa selección de materiales, creando instrumentos que son apreciados tanto por músicos locales como por artistas de renombre.\nGuitarras: Conocidas por su tono claro y resonante, las guitarras de Duitama son utilizadas en diversos géneros musicales, desde la música folclórica hasta la música clásica.\nTiples: Instrumento típico de la música andina colombiana, el tiple se caracteriza por su sonido brillante y su versatilidad.\nBandolas: Con su forma distintiva y su sonido melodioso, las bandolas son fundamentales en la interpretación de la música llanera y andina."
    },
    {
      id: "cat4",
      name: "TEJIDO DE MIMBRE",
      title: "TEJIDOS QUE RESALTAN LA BELLEZA DE UN PUEBLO",
      image: "../assets/imagenes/Ellipse Cat4.png",
      image1: "../assets/imagenes/Rectangle Cat4.png",
      text: "El tejido de mimbre realizado por los artesanos de Cundinamarca es una expresión de su habilidad y creatividad, y forma parte integral del patrimonio cultural de la región. Utilizando técnicas tradicionales transmitidas a través de generaciones, estos artesanos transforman el mimbre en una variedad de productos hermosos y funcionales. El mimbre, conocido por su flexibilidad y resistencia, es el material principal de estas creaciones, que van desde muebles hasta objetos decorativos.\nResistencia y Flexibilidad: Los productos de mimbre son reconocidos por su durabilidad y capacidad para adaptarse a diversas formas sin perder su integridad.\nEstética Natural: La apariencia rústica y natural del mimbre proporciona un encanto único, añadiendo calidez y elegancia a cualquier ambiente.\nDiversidad de Productos: Los artesanos crean una amplia gama de artículos, incluyendo cestas, sillas, mesas, lámparas y otros objetos decorativos, todos con un diseño único y atractivo."
    },
    {
      id: "cat5",
      name: "TEJIDOS LANA DE OVEJA",
      title: "TEJIDOS HECHOS CON CALIDÉZ Y TRADICIÓN",
      image: "../assets/imagenes/Ellipse Cat5.png",
      image1: "../assets/imagenes/Rectangle Cat5.png",
      text: "Los tejidos de lana de oveja realizados por los artesanos de Cundinamarca son un testimonio de la rica herencia cultural y artesanal de la región. Estos tejidos, que incluyen ponchos, ruanas, cobijas, y prendas de vestir, son conocidos por su calidez, durabilidad y la belleza de sus diseños. Los artesanos utilizan técnicas tradicionales que han sido transmitidas de generación en generación, combinando habilidad, creatividad y un profundo conocimiento del material para crear productos de alta calidad.\nCalidez y Confort: La lana de oveja es un material natural que proporciona una excelente aislación térmica, manteniendo el calor en climas fríos.\nDurabilidad: Los productos de lana de oveja son resistentes y duraderos, capaces de soportar el uso diario y las condiciones climáticas adversas.\nDiseños Únicos: Los tejidos presentan una variedad de patrones y colores que reflejan la identidad cultural de Cundinamarca, incluyendo diseños tradicionales y modernos."
    },
    {
      id: "cat6",
      name: "TALLA EN MADERA",
      title: "TRANSFORMANDO LA MADERA EN HISTORIA",
      image: "../assets/imagenes/Ellipse Cat6.png",
      image1: "../assets/imagenes/Rectangle Cat6.png",
      text: "Los tallados en madera realizados por los artesanos de Cundinamarca son una expresión de creatividad y habilidad artesanal. Estas obras incluyen esculturas, figuras decorativas, muebles y elementos arquitectónicos, cada uno elaborado con detalles intrincados y un alto nivel de artesanía. Utilizando técnicas tradicionales y herramientas especializadas, los artesanos transforman la madera en piezas que combinan funcionalidad y belleza estética.\nDetalles Intrincados: Los tallados en madera se caracterizan por sus diseños detallados y precisos, que reflejan la destreza y la habilidad del artesano.\nVariedad de Productos: Desde esculturas religiosas hasta muebles ornamentales, los tallados en madera abarcan una amplia gama de productos que tienen aplicaciones tanto decorativas como funcionales.\nMateriales Naturales: Los artesanos seleccionan cuidadosamente maderas locales como el cedro, el nogal y el roble, valorando sus propiedades estéticas y duraderas."
    },
    {
      id: "cat7",
      name: "CERÁMICA DE GUATAVITA",
      title: "UNA INSPIRACIÓN PLASMADA EN ARTE ",
      image: "../assets/imagenes/Ellipse Cat7.png",
      image1: "../assets/imagenes/Rectangle Cat7.png",
      text: "La cerámica de Guatavita es una manifestación artesanal que refleja la rica tradición cultural y la historia del municipio de Guatavita, ubicado en Cundinamarca, Colombia. Esta cerámica se distingue por su estilo único y sus técnicas ancestrales, que han sido transmitidas de generación en generación.\nDiseños Tradicionales: La cerámica de Guatavita se caracteriza por sus diseños tradicionales inspirados en motivos indígenas y precolombinos. Estos diseños suelen incluir figuras geométricas, animales estilizados y símbolos que reflejan la cosmovisión y las creencias de las culturas originarias de la región.\nMateriales Naturales: Los artesanos utilizan arcilla local y otros materiales naturales para crear sus piezas, garantizando así la autenticidad y la conexión con el entorno local.\nTécnicas de Elaboración: El proceso de elaboración de la cerámica incluye la preparación cuidadosa de la arcilla, el modelado a mano o en tornos tradicionales, el secado al aire y la cocción en hornos artesanales. Estas técnicas no solo aseguran la durabilidad de las piezas, sino que también preservan las técnicas ancestrales de fabricación de cerámica."
    },
    {
      id: "cat8",
      name: "FIGURAS EN BARRO",
      title: "EXPRESION ARTISTICA QUE REFLEJA TRADICIÓN Y HABILIDAD ",
      image: "../assets/imagenes/Ellipse Cat4.png",
      image1: "../assets/imagenes/Rectangle Cat4.png",
      text: "Las figuras de barro hechas por artesanos en el municipio de Boyacá son expresiones artísticas que reflejan la tradición y la habilidad artesanal de la región. Estas figuras, que pueden variar desde pequeñas esculturas hasta objetos decorativos más grandes, se caracterizan por su estilo único y el uso de técnicas tradicionales de modelado y cocción.\nEstilo Regional: Las figuras de barro en Boyacá suelen tener influencias culturales locales y pueden representar aspectos de la vida cotidiana, escenas históricas, figuras religiosas o animales típicos de la región.\nMateriales Naturales: Los artesanos utilizan arcilla local y otros materiales naturales para crear las figuras. La arcilla se selecciona y prepara meticulosamente para asegurar la calidad y la durabilidad de las piezas.\nTécnicas de Elaboración: El proceso de fabricación incluye el modelado manual de la arcilla, donde los artesanos dan forma a las figuras utilizando herramientas simples como palillos y espátulas. Posteriormente, las piezas se dejan secar al aire o se cuecen en hornos tradicionales para endurecerlas y fijar su forma."
    }
  ]
  constructor() { }

  listarCategorias(){
    return this.categorias.slice(0, 4);
  }

  listarCategorias1(){
    return this.categorias.slice(4, 8);
  }

  listarCategorias2(){
    return this.categorias.slice(8, 12);
  }

  verCategoria(id: string){
    for(let item of this.categorias){
      if(item.id === id){
        return item
      }
    }
  }

  /* verCategoria1(id: string){
    for(let item of this.categoria1){
      if(item.id === id){
        return item
      }
    }
  }

  verCategoria2(id: string){
    for(let item of this.categoria2){
      if(item.id === id){
        return item
      }
    }
  } */
}
