const loader = document.querySelector('#loader')

const gridProjects = document.querySelector('#grid')
const fragment = document.createDocumentFragment()

loader.style.display = 'block'

proyectos.forEach(proyecto => {
  const div = document.createElement('div')

  const divCardProject = document.createElement('div')
  divCardProject.classList.add('card-project')

  const enlace = document.createElement('a')
  enlace.setAttribute('href', proyecto.enlace)
  enlace.setAttribute('target', '_blank')
  enlace.classList.add(proyecto.clase)

  const titulo = document.createElement('h3')
  titulo.textContent = proyecto.titulo
  const descripcion = document.createElement('p')
  descripcion.textContent = proyecto.descripcion

  enlace.appendChild(titulo)
  enlace.appendChild(descripcion)

  const divCardProjectImg = document.createElement('div')
  divCardProjectImg.classList.add('card-project--img')
  divCardProjectImg.style.backgroundImage = `url('../assets/img/${proyecto.img}')`

  divCardProject.appendChild(enlace)
  divCardProject.appendChild(divCardProjectImg)

  div.appendChild(divCardProject)

  fragment.appendChild(div)
})

gridProjects.appendChild(fragment)
loader.style.display = 'none'