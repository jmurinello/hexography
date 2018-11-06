export let currentColor = 'light-brown'

const retrieveColor = () =>
{
  const color = event.target.getAttribute('class').split(' ')[0]
  const element = document.querySelector('.js-shade7 polygon')
  currentColor = color
  element.setAttribute('class', `${color}`)
}

export default retrieveColor
