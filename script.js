function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Gamer.")
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Trabalhador honesto.")
  }

  //lógica do if else pronta pelo próprio javascript no caso da classe light!
  //html.classList.toggle('light')
}
