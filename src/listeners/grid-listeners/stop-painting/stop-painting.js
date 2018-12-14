const stopPainting = () => {
  document.querySelector('.js-viewport g').onmousemove = null
}

export default stopPainting
