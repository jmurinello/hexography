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

  const addModalListeners = (action, file = null) => {

    if (action === 'new') {
      confirmBtn().onclick = () => {
        establishModalContent('save', getStorage())
          .then(() => addModalListeners('save'))
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
        const name = item => item.name === file
        const fileData = getStorage().filter(name)
        render.loadFile(fileData[0].data)
        toggleModal()
      }
      cancelBtn().onclick = () => {
        establishModalContent('load', getStorage())
          .then(() => addModalListeners('load'))
      }
    }

    if (action === 'overwrite') {
      confirmBtn().onclick = () => {
        let fileIndex
        const name = (item, index) => {
          if (item.name === file) {
            fileIndex = index
          }
        }
        getStorage().filter(name)
        performSave(fileIndex)
      }
      cancelBtn().onclick = () => {
        establishModalContent('save', getStorage())
          .then(() => addModalListeners('save'))
      }
    }

    if (action === 'save') {
      const files = document.querySelectorAll('.button[class*="map-"]')
      if (files.length !== 0) {
        files.forEach(file => {
          file.onclick = () => overwriteFile()
        })
      }
      if (newFileBtn()) { newFileBtn().onclick = () => performSave() }
      returnBtn().onclick = () => toggleModal()
    }

    if (action === 'newSave') {
      const saveForm = document.querySelector('#save-form');
      const filename = document.querySelector('input')
      filename.oninput = () => {
        if(filename.value.length > 0) {
          saveBtn().removeAttribute('disabled')
        } else {
          saveBtn().setAttribute('disabled', '')
        }
      }

      saveForm.onsubmit = e => {
        e.preventDefault()
        const filename = saveForm.filename.value
        let fileIndex = file
        const name = filename.replace(/\s/g, '-').toLowerCase()
        const currentData = getStorage()
        const data = gridController.getModel()
        const newData = {name: `map:${name}`, data}
        if (fileIndex === null) {
          setStorage([...currentData, newData])
        } else {
          currentData.splice(fileIndex, 1, newData)
          setStorage(currentData)
        }
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

  const overwriteFile = () => {
    const filename = retrieveFilename()
    const title = 'overwrite'
    establishModalContent(title, [filename])
      .then(() => addModalListeners(title, filename))
  }

  const performSave = (index = null) => {
    const title = 'newSave'
    establishModalContent(title)
      .then(() => addModalListeners(title, index))
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
