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
  const saveBtn = () => document.querySelector('.button-save')
  const cancelBtn = () => document.querySelector('.button-cancel')
  const returnBtn = () => document.querySelector('.button-return')
  const newFileBtn = () => document.querySelector('.button-unused-block')

  const addModalListeners = (action, filename = null) => {

    if (action === 'new') {
      confirmBtn().onclick = () => {
        toggleModal()
      }
      cancelBtn().onclick = () => {
        render.newFile()
        toggleModal()
      }
    }

    if (action === 'load') {
      const files = document.querySelectorAll('button[class*="map-"]')
      if (files.length !== 0) {
        files.forEach(file => {
          file.onclick = () => performLoad()
        })
      }
      returnBtn().onclick = () => toggleModal()
    }

    if (action === 'confirmLoad') {
      confirmBtn().onclick = () => {
        const name = item => item.name === filename
        const file = getStorage().filter(name)
        render.loadFile(file[0].data)
        toggleModal()
      }
      cancelBtn().onclick = () => {
        establishModalContent('load', getStorage())
          .then(() => addModalListeners('load'))
      }
    }

    if (action === 'save') {
      const files = document.querySelectorAll('.button[class*="map-"]')
      console.log(newFileBtn())
      newFileBtn().onclick = () => performSave()
      returnBtn().onclick = () => toggleModal()
    }

    if (action === 'newSave') {
      saveBtn().onclick = () => {
        toggleModal()
      }
      cancelBtn().onclick = () => {
        establishModalContent('save', getStorage())
          .then(() => addModalListeners('save'))
      }
    }
  }

  const retrieveFilename = () => {
    const target = event.target
    const className = target.classList[1]
    const regex = /^(map-)/
    const filename = className.split(regex)[2]
    return `map:${filename}`
  }

  const performLoad = () => {
    const filename = retrieveFilename()
    const title = 'confirmLoad'
    establishModalContent(title, [filename])
      .then(() => addModalListeners(title, filename))
  }

  const performSave = () => {
    const title = 'newSave'
    establishModalContent(title)
      .then(() => addModalListeners(title))
  }

  const open = action => {
    let currentData = getStorage()
    if (!currentData) { currentData = setStorage([]) }

    const title = action.split(/-/)[1]

    establishModalContent(title, currentData)
      .then(() => addModalListeners(title))
      .then(() => toggleModal())
  }

  return {
    open
  }
})()

export default storage
