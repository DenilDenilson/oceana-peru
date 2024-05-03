import { date } from "astro/zod";

export const news = [
  {
    id: 1,
    title: "Firma la petición | No permitan la pesca industrial en la reserva nacional de paracas",
    url: "https://www.change.org/p/mtc-gobperu-minamperu-fabiolamunozd-minsa-peru-mincetur-promperu-memperu-no-al-concentrado-de-mineral-en-la-reserva-nacional-de-paracas/u/32430289?recently_published=true",
    srcImage: "https://ugc.production.linktr.ee/407176b8-6978-4732-88db-4dd0494070f1_CtleYjZdCZPNmTZ-1600x900-noPad.jpeg?io=true&size=thumbnail-stack-v1_0",
    alt: "Imagen de pesca industrial en la reserva nacional de paracas",
    date: "14/03/2024"
  },
  {
    id: 2,
    title: "Posición de Oceana Perú sobre la explotación de hidrocarburos en el mar",
    url: "https://peru.oceana.org/blog/pronunciamiento-posicion-de-oceana-peru-sobre-la-explotacion-de-hidrocarburos-en-el-mar/",
    srcImage: "https://ugc.production.linktr.ee/e85d6e5c-a16c-4259-8765-90fa535c3939_1c26841a-89c8-49b4-b3ea-924148d95805-Alonso-Molina.jpeg?io=true&size=thumbnail-stack-v1_0",
    alt: "Imagen de derrame de hidrocarburos en el mar",
    date: "02/11/2023"
  },
  {
    id: 3,
    title: "Savia Perú se retiró de Talara pero dejó bombas de tiempo en un lote petrolero del mar de Piura",
    url: "https://convoca.pe/investigacion/savia-peru-se-retiro-de-talara-pero-dejo-bombas-de-tiempo-en-un-lote-petrolero-del",
    srcImage: "https://ugc.production.linktr.ee/d7f0a1e4-25de-46fa-93ce-89e60e2c4b59_portada-savia-02.jpeg?io=true&size=thumbnail-stack-v1_0",
    alt: "Imagen de mar de Piura contaminado",
    date: ""
  },
  {
    id: 4,
    title: "Alertamos sobre la creciente problemática de vertederos de desmonte en la costa limeña, que amenazan la salud de nuestras playas y la biodiversidad marina",
    url: "https://peru.oceana.org/comunicados/alertamos-sobre-la-creciente-problematica-de-vertederos-de-desmonte-en-la-costa-limena-que-amenazan-la-salud-de-nuestras-playas-y-la-biodiversidad-marina/",
    srcImage: "https://ugc.production.linktr.ee/9edbf6bc-e932-40c7-958e-13a00345d4f7_Panorama-1.png?io=true&size=thumbnail-stack-v1_0",
    alt: "Desmonte en la costa limeña echado por camiones",
    date: "11/03/2024"
  },
  {
    id: 5,
    title: "📍 Reglamento de ley de pesca artesanal: aciertos y ausencias",
    url: "https://www.youtube.com/watch?v=22wMmzHsphQ",
    srcImage: "https://i3.ytimg.com/vi/22wMmzHsphQ/maxresdefault.jpg",
    alt: "Pescadores artesanales en el mar",
    date: "05/03/2024"
  },
  {
    id: 6,
    title: "Placeres de Paracas que entretienen a muchos",
    url: "https://youtu.be/vKtRmCydh9Q",
    srcImage: "https://i3.ytimg.com/vi/vKtRmCydh9Q/maxresdefault.jpg",
    alt: "Pescador de Paracas",
    date: "02/03/2024"
  },
  {
    id: 7,
    title: "🐟 Aparejos de pesca en Perú: impacto en recursos y ecosistemas",
    url: "https://www.youtube.com/watch?v=symlVEkLI08",
    srcImage: "https://i3.ytimg.com/vi/symlVEkLI08/maxresdefault.jpg",
    alt: "Pescadores en el mar",
    date: "01/03/2024"
  },
  {
    id: 8,
    title: "📍NATIVA TV: Importancia de las Áreas Naturales Protegidas ",
    url: "https://www.youtube.com/watch?v=b9KRyO42YEg",
    srcImage: "https://i3.ytimg.com/vi/b9KRyO42YEg/maxresdefault.jpg",
    alt: "Áreas naturales protegidas del Perú",
    date: "01/03/2024"
  },
  {
    id: 9,
    title: "🐟 NATIVA TV: Gato por liebre: ¿realmente nos dan los pescados que pedimos?",
    url: "https://www.youtube.com/watch?v=tD5kIzS9i-k",
    srcImage: "https://i3.ytimg.com/vi/tD5kIzS9i-k/maxresdefault.jpg",
    alt: "Pescados en venta en un mercado",
    date: "20/02/2024"
  },
  {
    id: 10,
    title: "🚨🐟 Fraude y sustitución en la venta de pescados en el Perú",
    url: "https://peru.oceana.org/informes/fraude-y-sustitucion-en-la-venta-de-pescados-en-el-peru/",
    srcImage: "https://ugc.production.linktr.ee/9ce8992a-0e41-4017-be2f-54756079f9e0_1b679543-c879-40bb-ac19-a4729ec36157-portada.jpeg?io=true&size=thumbnail-stack-v1_0",
    alt: "Plato de un pescado hecho de diferentes pescados",
    date: ""
  },
  {
    id: 11,
    title: "📍 A 2 años del derrame de petróleo en Ventanilla: ¿Cuál es la situación actual?",
    url: "https://www.youtube.com/watch?v=bk3zw7ZtkZA",
    srcImage: "https://i3.ytimg.com/vi/bk3zw7ZtkZA/maxresdefault.jpg",
    alt: "Playas de lima afectadas oir el derrame de petróleo",
    date: "18/02/2024"
  },
  {
    id: 12,
    title: "🚨 Pronunciamiento |  A dos años del derrame de Repsol: el problema principal es la incertidumbre",
    url: "https://i3.ytimg.com/vi/bk3zw7ZtkZA/maxresdefault.jpg",
    srcImage: "https://ugc.production.linktr.ee/1570b7a8-f4f3-4ab4-992f-8efea8029b32_03712067-faaa-43d4-9be6-92953f318650-Portada-de-articulo-web1.jpeg?io=true&size=thumbnail-stack-v1_0",
    alt: "Hombres limpiando el derrame de petróleo en la playa",
    date: "16/01/2024"
  },
  {
    id: 13,
    title: "🌊 'Nuestro mar: Conecta con la vida' - Un documental de Latina Noticias",
    url: "https://www.youtube.com/watch?v=WU8y3x1ZQ2k&t=3s",
    srcImage: "https://i3.ytimg.com/vi/WU8y3x1ZQ2k/maxresdefault.jpg",
    alt: "Buzos en el mar con un pez globo",
    date: "15/01/2024"
  },
  {
    id: 14,
    title: "📺 Juan Carlos Sueiro en Nativa: Probabilidad de un Fenómeno El Niño fuerte sigue creciendo",
    url: "https://www.youtube.com/watch?v=T9p_fz7z5dw",
    srcImage: "https://i3.ytimg.com/vi/T9p_fz7z5dw/maxresdefault.jpg",
    alt: "Carlos cornejo en un estudio de televisión hablando sobre el fenómeno del niño",
    date: "10/01/2024"
  },
  {
    id: 15,
    title: "📝 Firma la petición | Pidámosle al Gobierno #ProtocoloMareaRoja",
    url: "https://www.change.org/p/implementen-protocolos-de-alerta-temprana-para-marea-roja-fan-en-per%C3%BA-minamperu-minproduccion-minsa-peru?recruited_by_id=92fe2ff0-8467-11e8-a10d-8f366769cc6f",
    srcImage: "https://ugc.production.linktr.ee/14c978f6-7f8b-4236-8973-ed4d324904f9_140e2d57-e8b5-442d-aa6e-6c95c65bf472-pTTcxPDsQahednV-1600x900-noPad.jpeg?io=true&size=thumbnail-stack-v1_0",
    alt: "Imagen de un perro en el mar",
    date: "08/11/2023"
  },
  {
    id: 16,
    title: "Artículo | ⚠️ El Niño Global está aquí, toca prepararnos",
    url: "https://peru.oceana.org/blog/el-nino-global-esta-aqui-toca-prepararnos/",
    srcImage: "https://ugc.production.linktr.ee/5a04967c-1eb0-408d-b768-c0b4b6940cf0_ebcfcb51-7035-4a50-816b-ec64f7d649d6-shutterstock-2277356879-scaled.jpeg?io=true&size=thumbnail-stack-v1_0",
    alt: "Imagen de un río desbordado por el fenómeno del niño",
    date: "27/10/2023"
  },
  {
    id: 17,
    title: "📺 Carmen Heck en Nativa: 'No se puede permitir la pesca industrial dentro del Área Nacional Protegida Mar Tropical de Grau'",
    url: "https://www.youtube.com/watch?v=NtDZGf2_kMY",
    srcImage: "https://i3.ytimg.com/vi/NtDZGf2_kMY/maxresdefault.jpg",
    alt: "Carlos cornejo en un estudio de televisión hablando sobre la pesca industrial en el mar tropical de Grau",
    date: "10/12/2023"
  },
  {
    id: 18,
    title: "🌊 La importancia de las Áreas Naturales Protegidas ",
    url: "https://peru.oceana.org/blog/areas-naturales-protegidas-herramientas-de-conservacion-de-ecosistemas-y-especies/",
    srcImage: "https://ugc.production.linktr.ee/05d70130-3ce0-41a5-bc87-a010d2a5f0aa_535d7dc2-6e21-47be-bfc7-341b1d144037-Portada-de-articulo-web12.jpeg?io=true&size=thumbnail-stack-v1_0",
    alt: "Una anémona en el mar",
    date: "22/09/2023"
  },
  {
    id: 19,
    title: "PRONUNCIAMIENTO | 🚨 Propuesta para creación de la Reserva Nacional Mar Tropical de Grau es una gran noticia, pero existe un riesgo ",
    url: "https://peru.oceana.org/comunicados/propuesta-para-creacion-de-la-reserva-nacional-mar-tropical-de-grau-es-una-gran-noticia-pero-existe-un-riesgo/",
    srcImage: "https://peru.oceana.org/wp-content/uploads/sites/22/2023/09/Peru_Expeditions_Eduardo-Sorensen_8.jpg",
    alt: "Peces en el mar",
    date: "28/09/2023"
  },
  {
    id: 20,
    title: "⚠️ Embarcaciones extranjeras estarían evadiendo la norma para pescar ilegalmente en nuestro mar",
    url: "https://peru.oceana.org/blog/tres-anos-de-avances-y-desafios-en-la-lucha-contra-la-pesca-ilegal-en-el-pacifico-sur/",
    srcImage: "https://ugc.production.linktr.ee/4c022562-15d6-4d2b-aecd-fa5f0ee5ff38_fe89afc1-14fb-47e7-b953-5a568ae7fd9a-Portada-de-articulo-web6.jpeg?io=true&size=thumbnail-stack-v1_0",
    alt: "Barco pesquero",
    date: "04/09/2023"
  },
  {
    id: 21,
    title: "🧨 Descarga un informe sobre la pesca con explosivos en el país ",
    url: "https://www.actualidadambiental.pe/informe-explosiones-bajo-el-mar-areas-afectadas-por-pesca-con-explosivos-en-peru/",
    srcImage: "https://i0.wp.com/www.actualidadambiental.pe/wp-content/uploads/2023/07/paracas-informe.jpg?resize=700%2C439&ssl=1",
    alt: "Mar peruano",
    date: "26/07/2023"
  },
  {
    id: 22,
    title: "⚠️🗑️ Lee más sobre la contaminación por plásticos en Perú",
    url: "https://peru.oceana.org/campanas/contaminacion-por-plasticos/",
    srcImage: "https://ugc.production.linktr.ee/pFo8BZWSOOm3tTskguI4_shutterstock_287424425-scaled.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Una bolsa de plástico en el mar",
    date: "26/07/2023"
  },
  {
    id: 23,
    title: "🌊 OPINIÓN | Por un verdadero Mar Tropical de Grau",
    url: "https://peru.oceana.org/blog/por-un-verdadero-mar-tropical-de-grau/",
    srcImage: "https://ugc.production.linktr.ee/2Zg2ZvUMSfGrtaF1wEij_SAO-%25C2%25A9-OCEANA-Eduardo-Sorensen-_ESM2885.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Peces en el Mar de Grau",
    date: "14/06/2023"
  },
  {
    id: 24,
    title: "⚠️ Pronunciamiento | Salvemos la Vida: Protejamos el Ambiente y a Nuestras Áreas Naturales Protegidas",
    url: "https://peru.oceana.org/comunicados/pronunciamiento-salvemos-la-vida-protejamos-el-ambiente-y-a-nuestras-areas-naturales-protegidas/",
    srcImage: "https://peru.oceana.org/wp-content/uploads/sites/22/2023/06/Barbara-Fraser-1536x1023.jpg",
    alt: "Una persona limpiando la playa",
    date: "06/06/2023"
  },
  {
    id: 25,
    title: "⚠️ ¿Hasta cuándo se seguirá esperando por el Plan de Remediación de Repsol?",
    url: "https://peru.oceana.org/blog/hasta-cuando-se-seguira-esperando-por-el-plan-de-remediacion-de-repsol/",
    srcImage: "https://ugc.production.linktr.ee/lx1DZ4a4TDaSziMCCClC_SAO-%25C2%25A9-OCEANA-Sebastian-Castaneda-DJI_0169-scaled.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Barcos en el mar",
    date: "05/05/2023"
  },
  {
    id: 26,
    title: "🌊🐟 Mar Pacífico Tropical Peruano: una riqueza a la espera de protección",
    url: "https://peru.oceana.org/blog/mar-pacifico-tropical-peruano-una-riqueza-a-la-espera-de-proteccion/",
    srcImage: "https://ugc.production.linktr.ee/piRduWyLSKWpuY4MZrsI_SAO-%25C2%25A9-OCEANA-Eduardo-Sorensen-_ESM5340-1.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Una tortuga en el mar",
    date: "08/05/2023"
  },
  {
    id: 27,
    title: "🐟 El mito de los pescados blancos: ¿son realmente más nutritivos que los pescados azules?",
    url: "https://peru.oceana.org/blog/el-mito-de-los-pescados-blancos/",
    srcImage: "https://ugc.production.linktr.ee/PYkc0yBdRLC7ugVfLMal_Peru_Sebastian-Castaneda_Pesca-artesanal-4-scaled.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Pescadores en el mar",
    date: "03/05/2023"
  },
  {
    id: 28,
    title: "🤔 ¿Estamos preparados para El Niño Costero?",
    url: "https://peru.oceana.org/blog/la-guerra-avisada-del-nino-costero-y-el-nino-estamos-preparados/",
    srcImage: "https://ugc.production.linktr.ee/7ZocZEcYTYmzqClUIk9L_W774D4E6GBEK7JIK3CK2WY2B6E-scaled.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Una familia observando un río desbordado",
    date: "20/04/2023"
  },
  {
    id: 29,
    title: "🌊 Análisis | ¿Qué reformas involucra la actualización de la Ley General de Pesca?",
    url: "https://peru.oceana.org/blog/analisis-ley-que-reconoce-la-pesca-tradicional-ancestral-y-la-pesca-tradicional-artesanal-e-impulsa-su-preservacion-dentro-de-las-cinco-millas/",
    srcImage: "https://ugc.production.linktr.ee/kYmKYNBRoiJIezJKF4QH_SAO-%25C2%25A9-OCEANA-Sebastian-Castaneda-DJI_0252-scaled.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Un barco en el mar visto desde arriba",
    date: "14/04/2023"
  },
  {
    id: 30,
    title: "🌊🐟 ¿Por qué son tan importantes las primeras cinco millas del mar peruano?",
    url: "https://peru.oceana.org/blog/por-que-son-tan-importantes-las-primeras-millas-del-mar-peruano/",
    srcImage: "https://ugc.production.linktr.ee/DoDSQRd5RUiSGI88lIjC_Credito-Andre-Baertschi-6-scaled.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Unos pescadores en barco en el mar",
    date: "08/03/2023"
  },
  {
    id: 31,
    title: "☣️ ¿Cómo impactará la gripe aviar H5N1 en la fauna marina?",
    url: "https://peru.oceana.org/blog/cual-es-el-impacto-de-la-gripe-aviar-h5n1-en-la-fauna-marina/",
    srcImage: "https://ugc.production.linktr.ee/IHsMwvHwTCCq1s99jf1t_shutterstock_1458794672-scaled.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Una foca en las rocas",
    date: "27/03/2023"
  },
  {
    id: 32,
    title: "⚠️ Se alerta un posible evento El Niño Global para el 2024",
    url: "https://larepublica.pe/domingo/2023/03/19/el-peligro-mayor-es-el-nino-domingo-1203840",
    srcImage: "https://ugc.production.linktr.ee/jHFBc4cSqC6STO9AgDeQ_6417455b511e0f45f102f0ec.png?io=true&size=thumbnail-stack-v1_0",
    alt: "Una familia barada en la pista por el fenómeno del niño",
    date: "28/03/2023"
  },
  {
    id: 33,
    title: "⚠️ IPSOS | Más del 90% de peruanos cree que nuestro mar está sobreexplotado",
    url: "https://larepublica.pe/economia/2023/03/20/mar-peruano-mas-del-90-cree-que-el-mar-peruano-esta-sobreexplotado-anchoveta-imarpe-1705500",
    srcImage: "https://ugc.production.linktr.ee/yhqtFcQoisqwPHVESMGg_63de71ea1d4ae813d539b4c4.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Pescados en un barco",
    date: "20/03/2023"
  },
  {
    id: 34,
    title: "🐟 El tamaño sí importa: tallas mínimas en la pesca",
    url: "https://peru.oceana.org/blog/el-tamano-si-importa/",
    srcImage: "https://ugc.production.linktr.ee/7yefultvRn2koXNST2Kx_SAO-%25C2%25A9-OCEANA-Andre-Baertschi-Tumbes-market-10-scaled.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Un pescador agarrando un pescado grande",
    date: "02/03/2023"
  },
  {
    id: 35,
    title: "⚠️ Reportaje | Repsol presiona a víctimas a firmar acuerdos extrajudiciales lesivos",
    url: "https://data.larepublica.pe/derrame-de-petroleo-de-repsol-afectados-aseguran-que-firmaron-acuerdos-extrajudiciales-por-necesidad-ventanilla-ancon-minam/",
    srcImage: "https://ugc.production.linktr.ee/55ZbHoEyQIinvu64OrX4_a6519j25da-ss-2.png?io=true&size=thumbnail-stack-v1_0",
    alt: "Miniatura de una familia afectada por el derrame de repsol",
    date: "15/01/2023"
  },
  {
    id: 36,
    title: "📰 La República | Repsol se libera de millonaria multa",
    url: "https://larepublica.pe/economia/2023/01/14/repsol-gana-apelacion-contra-el-oefa-y-se-libera-de-multa-millonaria-derrame-de-petroleo-ventanilla",
    srcImage: "https://ugc.production.linktr.ee/ZY8EomRbfRq5KWIn5wzh_WW6QKGO3INDCLMQPPWS6IGAGGE.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Huelga por el derrame de repsol",
    date: "14/01/2023"
  },
  {
    id: 37,
    title: "🏖️ ¿Qué hacer si nos encontramos con un lobo marino varado en la playa?",
    url: "https://peru.oceana.org/blog/lobos-marinos-varados-en-la-playa-son-una-amenaza-o-estan-en-peligro/",
    srcImage: "https://ugc.production.linktr.ee/YIGpoFYBTGifXoua5vYF_SAO-%25C2%25A9-OCEANA-Andre-Baertschi-Sea-lions-4-San-Fernando-National-Reserve-scaled.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Lobos marinos en las rocas",
    date: "09/01/2023"
  },
  {
    id: 38,
    title: "🐢 Conoce más sobre las tortugas que habitan en el mar peruano",
    url: "https://peru.oceana.org/blog/tortugas-en-el-mar-peruano/",
    srcImage: "https://ugc.production.linktr.ee/SzXbClcKSyS3vCCS2n5W_Tortuga-verde-Joost-Van-Uffelen-scaled.jpg?io=true&size=thumbnail-stack-v1_0",
    alt: "Tortuga en el mar",
    date: "03/01/2023"
  },
  {
    id: 39,
    title: "🤔 ¿Estamos preparados para un nuevo derrame de petróleo?",
    url: "https://peru.oceana.org/blog/estamos-preparados-para-un-proximo-derrame/",
    srcImage: "https://peru.oceana.org/wp-content/uploads/sites/22/2022/11/DSC8987-scaled.jpg",
    alt: "Playa afectada en el mar por derrame de petróleo",
    date: "30/11/2022"
  },
  {
    id: 40,
    title: "😲 La curiosa existencia de los caballitos de mar",
    url: "https://peru.oceana.org/blog/la-curiosa-existencia-de-los-caballitos-de-mar/",
    srcImage: "https://peru.oceana.org/wp-content/uploads/sites/22/2022/11/shutterstock_643611412-scaled.jpg",
    alt: "Caballito de mar en el mar",
    date: "10/11/2022"
  },
  {
    id: 41,
    title: "⚠️ Pesca artesanal de tiburón bajo amenaza🦈",
    url: "https://larepublica.pe/economia/2022/10/29/pesca-artesanal-de-tiburon-en-tumbes-bajo-amenaza-ecuador-exportaciones-atilio-yacila-sunat",
    srcImage: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/10/29/635cebc652d6876f4103e406.webp",
    alt: "Pescadores con un tiburon capturado",
    date: "29/10/2022"
  },
  // {
  //   id: 3,
  //   title: "",
  //   url: "",
  //   srcImage: "",
  //   alt: "",
  //   date: ""
  // },
]