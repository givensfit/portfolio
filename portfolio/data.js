const proyectos = [
  {
    enlace: 'https://kreonara.github.io/lp-tienda-muebles/',
    titulo: 'Tienda de Muebles',
    descripcion: 'descripción',
    img: '01-tienda-muebles.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/lp-audifonos-techpro/',
    titulo: 'Tech PRO',
    descripcion: 'descripción',
    img: '02-audifonos-techpro.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/lp-arquitectura-casas/',
    titulo: 'Arquitectura Bosque',
    descripcion: 'descripción',
    img: '03-arquitectura-casas.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/lp-pagos-electronicos/',
    titulo: 'Nucleus',
    descripcion: 'descripción',
    img: '04-pagos-electronicos.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/lp-cafeteria/',
    titulo: 'La Cafetería',
    descripcion: 'descripción',
    img: '05-cafeteria.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/lp-delivery-app/',
    titulo: 'App Comida',
    descripcion: 'descripción',
    img: '06-delivery-app.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/lp-podcast-app/',
    titulo: 'PodCast FM',
    descripcion: 'descripción',
    img: '07-podcast-app.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/lp-alojamientos/',
    titulo: 'AirBNB',
    descripcion: 'descripción',
    img: '08-alojamientos.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/lp-venta-casas/',
    titulo: 'Real State',
    descripcion: 'descripción',
    img: '09-venta-casas.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/lp-salon-belleza/',
    titulo: 'Carolina SPA',
    descripcion: 'descripción',
    img: '10-salon-belleza.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/lp-meeti-reuniones/',
    titulo: 'Meeti',
    descripcion: 'descripción',
    img: '11-meeti-reuniones.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/lp-escuela-cocina/',
    titulo: 'Escuela de Conina',
    descripcion: 'descripción',
    img: '12-escuela-cocina.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/lp-ecommerce-guitarras/',
    titulo: 'GuitarLA',
    descripcion: 'descripción',
    img: '13-ecommerce-guitarras.webp',
    clase: 'htmlcss'
  },
  {
    enlace: 'https://kreonara.github.io/js-carrito-compras/',
    titulo: 'Carrito',
    descripcion: 'descripción',
    img: '14-carrito-compras.webp',
    clase: 'jsvanilla'
  },
  {
    enlace: 'https://kreonara.github.io/js-filtro-busqueda/',
    titulo: 'Filtros',
    descripcion: 'descripción',
    img: '15-filtro-busqueda.webp',
    clase: 'jsvanilla'
  },
  {
    enlace: 'https://kreonara.github.io/js-gasto-semanal/',
    titulo: 'Gasto Semanal',
    descripcion: 'descripción',
    img: '16-gasto-semanal.webp',
    clase: 'jsvanilla'
  },
  {
    enlace: 'https://kreonara.github.io/js-indexDB/',
    titulo: 'CRM IndexDB',
    descripcion: 'descripción',
    img: '17-indexDB.webp',
    clase: 'jsvanilla'
  },
  {
    enlace: 'https://kreonara.github.io/js-obtener-clima/',
    titulo: 'Clima',
    descripcion: 'descripción',
    img: '18-obtener-clima.webp',
    clase: 'jsvanilla'
  },
  {
    enlace: 'https://kreonara.github.io/js-fetch-paginacion/',
    titulo: 'Buscador de Imágenes',
    descripcion: 'descripción',
    img: '19-fetch-paginacion.webp',
    clase: 'jsvanilla'
  },
  {
    enlace: 'https://kreonara.github.io/js-fetch-criptos/',
    titulo: 'Cotizar Ciptomonedas',
    descripcion: 'descripción',
    img: '20-fetch-criptos.webp',
    clase: 'jsvanilla'
  },
  {
    enlace: 'https://gregarious-sunflower-88532b.netlify.app/',
    titulo: 'Carrito GuitarLA',
    descripcion: 'React',
    img: '21-react-carrito-guitarla.webp',
    clase: 'reactjs'
  },
  {
    enlace: 'https://jocular-frangollo-46f6aa.netlify.app/',
    titulo: 'Calculadora de Propinas',
    descripcion: 'descripción',
    img: '22-react-calculadora-propinas.webp',
    clase: 'reactjs'
  },
  {
    enlace: 'https://marvelous-zuccutto-db71d9.netlify.app/',
    titulo: 'Contador de Calorias',
    descripcion: 'descripción',
    img: '23-react-contador-calorias.webp',
    clase: 'reactjs'
  },
  {
    enlace: 'https://benevolent-cocada-203164.netlify.app/',
    titulo: 'Planificador de Gastos',
    descripcion: 'descripción',
    img: '24-react-planificador-gastos.webp',
    clase: 'reactjs'
  },
  {
    enlace: 'https://astounding-kulfi-327ad1.netlify.app/',
    titulo: 'Pacientes Veterinaria',
    descripcion: 'descripción',
    img: '25-react-pacientes-veterinaria.webp',
    clase: 'reactjs'
  },
  {
    enlace: 'https://rainbow-concha-ba7f15.netlify.app/',
    titulo: 'Buscador de Clima',
    descripcion: 'descripción',
    img: '26-react-clima-api.webp',
    clase: 'reactjs'
  },
  {
    enlace: 'https://dapper-caramel-386115.netlify.app/',
    titulo: 'Cotizador de Criptomonedas',
    descripcion: 'descripción',
    img: '27-react-criptos-api.webp',
    clase: 'reactjs'
  },
  {
    enlace: 'https://cozy-croissant-c198eb.netlify.app/',
    titulo: 'Cocktail',
    descripcion: 'descripción',
    img: '28-react-buscador-bebidas.webp',
    clase: 'reactjs'
  },
  {
    enlace: 'https://cheerful-gumption-7ea9a6.netlify.app/',
    titulo: 'Heroes App',
    descripcion: 'descripción',
    img: '29-react-react-heroes-spa.webp',
    clase: 'reactjs'
  },
  {
    enlace: 'https://lucky-cactus-af28aa.netlify.app/',
    titulo: 'Journal App',
    descripcion: 'descripción',
    img: '30-react-firebase-journalApp.webp',
    clase: 'reactjs'
  },
]