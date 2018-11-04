const storage = (() => {

  const open = text => {
    const modalHeading = document.querySelector('.js-editor-modal-title h3')
    const title = text.split(/-/)[1]
    modalHeading.innerHTML = title
  }

  return {
    open
  }
})()

export default storage
