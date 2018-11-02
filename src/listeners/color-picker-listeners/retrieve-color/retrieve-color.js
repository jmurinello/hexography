export let currentColor

const retrieveColor = () =>
{
  const color = event.target.getAttribute('class').split(' ')
  const element = document.querySelector('.js-shade7 polygon')

  currentColor = color[0]
  element.setAttribute('class', `${color[0]}`)
}

export default retrieveColor
