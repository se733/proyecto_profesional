const { Properties } = require("./models");
const db = require('./db')

const prop = [
    {
      name: "casa - 350m2 - 3 ambientes - 2 cocheras",
      price: 100000,
      description: "CASA AL FRENTE:AL INGRESAR SE ENCUENTRA EL LIVIG CON VENTANAL AL FRENTE;UN BAÑO COMPLETO CON TODOS SUS ACCESORIOS; Y ESCALERA DE MADERA A LA VISTA QUE PERMITE EL INGRESO A LA PLANTA ALTA;COCINA COMEDOR DIARIO CON MUEBLES DE ALTO Y BAJO MESADA ;Y PUERTA DE SALIDA  AL PATIO Y JARDIN.",
      address: 'Sitio De Montevideo4500, Monte Chingolo',
      image: "https://www.gratistodo.com/wp-content/uploads/2017/02/fachadas-de-casas-modernas-28.jpg",
      // categorie :{name: "casas"}
    },
    {
        name: "casa - 1000m2 - 6 ambientes - 2 cocheras",
        price: 140000,
        description: "CASA AL FRENTE CUENTA CON:COMEDOR,COCINA COMEDOR;MUEBLE DE BAJO MESADA;2 DORMITORIOS UNO AL FRENTE Y OTRO CONTRAFRENTE,BAÑO COMPLETO CON TODOS SUS ACCESORIOS;AMPLIO GARAJE;LAVADERO CUBIERTO Y CUARTO DE ENSERES.Y FONDO LIBRE.L/G.APTA CREDITO.",
        address: 'Ituzaingo 4500, Monte Chingolo',
        image: "https://www.gratistodo.com/wp-content/uploads/2017/02/fachadas-de-casas-modernas-25.jpg",
        // categorie :{name: "casas"}
      },
      {
        name: "casa - 750m2 - 3 ambientes - 1 cochera",
        price: 200000,
        description: "AMPLIA CASA 4 AMB CON FTE DE REJAS, JARDIN Y GARAGE. COMPUESTA DE AMPLIO LIVING, COCINA-COMEDOR, 3 DORMITORIOS, BAÑO INSTALADO, FONDO LIBRE , LAVADERO, PARRILLA Y TERRAZA.",
        address: 'Cotagaita 2800, Monte Chingolo',
        image: "https://www.gratistodo.com/wp-content/uploads/2017/02/fachadas-de-casas-modernas-26.jpg",
        // categorie :{name: "casas"}
      },
      {
        name: "departamento - 150m2 - 3 ambientes - 1 cochera",
        price: 240000,
        description: " Unidad de 2 ambientes en construcción. 2do piso por escalera con Balcón propio y parrilla.Living-comedor, cocina independiente, lavadero. 2 dormitorios y 1 baño",
        address: 'Catamarca 3499, San Bernardo',
        image: "https://www.coldwellbankerbreal.com/wp-content/uploads/2020/02/departamento-sayabes-19.jpg",
        // categorie :{name: "departamentos"}
      },
      {
        name: "departamento - 350m2 - 4 ambientes - 1 cochera",
        price: 340000,
        description: "Excelente zona ideal para descansar en familia. El departamento esta en 2° piso por escalera. Al ingresar nos encontramos con  el Living - comedor amplio con ventana al frente,  cuenta con aire acondicionado,luego la  cocina con  muebles modernos de Melamina , puerta de ingreso al lavadero con  parrilla, muy luminoso.",
        address: ' Mendoza 4450, Costa Azul',
        image: "https://www.coldwellbankerbreal.com/wp-content/uploads/2020/02/departamento-sayabes-20.jpg",
        // categorie :{name: "departamentos"}
      },
      {
        name: "departamento - 200m2 - 3 ambientes - 1 cochera",
        price: 300000,
        description: "Impecable deparatemnto tipo casa al frente,  en Planta alta.- Muy luminoso. Consta de un recibidor, living comedor, cocina con comedor diariao, baño completo reciclado, pasillo distribuidos, dos dormitorios, patio con lavadero, gran terraza.-No paga expensas.- muy buena zona, con lineas de colectivos cercanas.-",
        address: 'Achupallas 1485, Temperley',
        image: "https://www.ciudaris.com/blog/wp-content/uploads/ventajas-vivir-departamento-03.jpg",
        // categorie :{name: "departamentos"}
      },
      {
        name: "departamento - 150m2 - 3 ambientes - 1 cochera",
        price: 260000,
        description: "Casa tipo departamento en planta alta, en esquina,  acceso por Conscripto Bernardi.En planta baja amplio garage fondo libre con pequeño quincho.En planta alta por escalera, recibidor, gran cocina comedor con mobiliario completo y pisos de mosaico, dos dormitorios con pisos de parquet, baño completo muy luminoso, estado impecable. Cuenta con sisterna, calefaccion por tiros balanceados. APTO CREDITO. Escritura por tracto abreviado. Planos.",
        address: 'Achupallas 1485, Temperley',
        image: "https://www.aram.pe/images/projects/5d7edac18901d-ResizerImage3600X1800.jpg",
        // categorie :{name: "departamentos"}
      },
      {
        name: "lote - superficie total 200 mts2",
        price: 50000,
        description: "Lote en Venta en Barrio Universitario, Paraje Pavón, Partido de General Lavalle.Calle Colombia entre Haití y Guatemala. Servicios: luz, agua de pozo, gas envasado. Calle arena Lote 22: mide mts de frente por 20 metros de fondo, Superficie total 200 mts2- Escritura por Tracto Abreviado. Ubicado en la Garita Numero 2 doblando a la izquierda, a 800 metros de Avenida Galo Lavalle.",
        address: 'Colombia 800, General Lavalle',
        image: "https://inmobiliarias.s3.us-west-2.amazonaws.com/31/images/properties/559/large/lote-en-parcelacion-en-venta-la-ceja-antioquia-5508315072.png",
        // categorie :{name: "lotes"}
      },
      {
        name: "lote - superficie total 250 mts2",
        price: 80000,
        description: "Lotes de 12 metros de frente x 25 metros de fondo. Un total de 300 m2 listos para construir.Escritura por Tracto Abreviado. Superficie total 250 mts2-",
        address: 'Arroyo Alegre Y Arroyo Del Gato , Spegazzini',
        image: "https://www.somaurbanismo.com.br/wp-content/uploads/2019/10/Lote-regular-Soma-Urbanismo-1024x675.jpg",
        // categorie :{name: "lotes"}
      },
      {
        name: "lote - superficie total 300 mts2",
        price: 100000,
        description: "UBICACION ENTRE LAVARDEN Y E. DEL CAMPO, A 100 MTS DE ARAUJO. SUPERFICIE TOTAL DEL TERRENO 300 MTS2 MEDIDAS A DETERMINAR POR PLANO DE AGRIMENSURA: 14 DE FRENTE POR 40 MTS DE LARGO.",
        address: ' Lavarden Y Estanislao Del Campo , Claypole',
        image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1468423536811_2041603453.jpg",
        // categorie :{name: "lotes"}
      },
]


const propFn = async () => {
  const bc = await Properties.bulkCreate(prop);
  return bc;
}

// propFn()

db.sync({force : false })
.then(propFn)
.then(() => console.log('se seedeo correctamente'))
.catch(() => console.log('error de seedeo'))

// const seedFn = () => {

//   const seedObj= seed.map((elem)=>{
//   const { categories } = elem;
//   const { name } = categories;
//   Categories.findOrCreate({
//     where: { name },
//   })
//     .then((data) => {
//       const category = data[0];
//       Properties.create(elem)
//         .then((propertie) => propertie.setCategories(category))
//     })
//     .catch(err=> console.log(err));})
// };



// seedFn();
