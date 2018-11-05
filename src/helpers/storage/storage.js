import gridController from '../../containers/grid/grid-controller'
import establishModalContent from './establish-modal-content'
import render from './render'

const storage = (() => {
  const localStorage = window.localStorage
  const storageName = 'hexography:user-saved-data'
  const getStorage = () => JSON.parse(localStorage.getItem(storageName))
  const setStorage = data => localStorage.setItem(storageName, JSON.stringify(data))

  const modal = document.querySelector('.editor-modal')
  const toggleModal = () => modal.classList.toggle('visible')

  const confirmBtn = () => document.querySelector('.button-confirm')
  const cancelBtn = () =>document.querySelector('.button-cancel')

  const open = action => {
    const title = action.split(/-/)[1]
    const currentData = getStorage()

    if (title === 'new') {
      establishModalContent(title)
        .then(() => {
          confirmBtn().onclick = () => {
            render.newFile()
            toggleModal()
          }
          cancelBtn().onclick = () => toggleModal()
        })
        .then(() => toggleModal())
    }
  }

  return {
    open
  }
})()

export default storage
