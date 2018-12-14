const establishModalContent = (title, data = []) => new Promise((resolve) => {
  let div
  let li
  let span
  let button
  let content
  let info
  let form
  let input

  const modalHeading = document.querySelector('.js-modal-title h3')
  const modalBodyList = document.querySelector('.js-modal-list')

  const frag = document.createDocumentFragment()

  const ul = frag.appendChild(document.createElement('ul'))
  const ulClass = ['modal-list', 'js-modal-list']
  ulClass.forEach(name => ul.classList.add(`${name}`))

  const createListItemWrapper = () => {
    li = ul.appendChild(document.createElement('li'))
    li.classList.add('modal-list-item-wrapper')
  }

  const createListItem = () => {
    div = li.appendChild(document.createElement('div'))
    div.classList.add('modal-list-item')
  }

  const createListLabel = (label) => {
    span = div.appendChild(document.createElement('span'))
    span.classList.add('modal-list-label')
    span.textContent = label
  }

  const createListForm = () => {
    form = li.appendChild(document.createElement('form'))
    form.classList.add('modal-list-item')
    form.setAttribute('id', 'save-form')
  }

  const createListFormInput = (text) => {
    input = form.appendChild(document.createElement('input'))
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'filename')
    input.setAttribute('autocomplete', 'off')
    input.setAttribute('maxlength', 12)
    input.setAttribute('placeholder', `${text}`)
    input.classList.add('modal-list-label')
  }

  const createButton = (buttonInfo) => {
    button = div.appendChild(document.createElement('button'))

    if (buttonInfo.name === 'save') {
      button.setAttribute('type', 'submit')
      button.setAttribute('form', 'save-form')
      button.setAttribute('disabled', '')
    } else {
      button.setAttribute('type', 'button')
    }

    const buttonClass = ['button', `${buttonInfo.className}`]
    buttonClass.forEach(name => button.classList.add(`${name}`))
    button.textContent = `${buttonInfo.name}`
  }

  const getFilename = (str) => {
    const regex = /^(map:)/
    const filename = str.split(regex)
    return filename
  }

  const generateInfo = (option) => {
    let name = 'back'
    let className = 'button-return'

    if (option === 'unused block') {
      name = 'unused-block'
      className = `button-${name}`
      return info = { name, className }
    }

    const isSaveOptions = option === 'cancel' || option === 'save'

    if (isSaveOptions) {
      name = option
      className = `button-${option}`
      return info = { name, className }
    }

    if (typeof option === 'boolean') {
      name = option ? 'yes' : 'no'
      className = `button-${option ? 'confirm' : 'cancel'}`
      return info = { name, className }
    }

    const filename = getFilename(option)

    if (filename.length > 1) {
      const index = 2
      name = filename[index]
      className = `map-${filename[2]}`
      return info = { name, className }
    }

    return info = { name, className }
  }

  const createButtons = (options) => {
    const isNotBoolean = options[0] !== false
    const isNotCancel = options[0] !== 'cancel'
    createListItemWrapper()
    if (!isNotBoolean || !isNotCancel) { createListItem() }
    options.forEach((option) => {
      if (isNotBoolean && isNotCancel) { createListItem() }
      generateInfo(option)
      createButton(info)
    })
  }

  const appendList = (heading) => {
    modalHeading.innerHTML = `${heading} map...`
    modalBodyList.parentNode.replaceChild(frag, modalBodyList)
  }

  const createForm = ({ heading, placeholder, options }) => {
    createListItemWrapper()
    createListForm()
    createListFormInput(placeholder)
    createButtons(options)
    appendList(heading)
    resolve()
  }

  const createContent = ({ heading = 'load', label, options }) => {
    createListItemWrapper()
    createListItem()
    createListLabel(label)
    createButtons(options)
    appendList(heading)
    resolve()
  }

  const saveHeading = 'Save'
  const overwriteHeading = 'Overwrite'
  const saveLable = 'Choose a block to save'
  const confirmOptions = [false, true]
  const saveOptions = ['cancel', 'save']
  const unusedBlock = ['unused block']
  const returnOption = ['back']

  if (title === 'new') {
    content = {
      heading: saveHeading,
      label: 'Would you like to save current map?',
      options: confirmOptions,
    }
    createContent(content)
  }

  if (title === 'confirmLoad') {
    const filename = getFilename(data[0])[2]
    content = {
      label: `Load '${filename}' file?`,
      options: confirmOptions,
    }
    createContent(content)
  }

  if (title === 'overwrite') {
    const filename = getFilename(data[0])[2]
    content = {
      heading: overwriteHeading,
      label: `Overwrite '${filename}' file?`,
      options: confirmOptions,
    }
    createContent(content)
  }

  if (title === 'newSave') {
    content = {
      heading: saveHeading,
      placeholder: 'Enter file name',
      options: saveOptions,
    }
    createForm(content)
  }

  if (title === 'load' && data.length === 0) {
    content = {
      label: 'There is no saved data',
      options: returnOption,
    }
    createContent(content)
  }

  if (title === 'save' && data.length === 0) {
    const newOptions = unusedBlock.slice()
    newOptions.push(returnOption[0])
    content = {
      heading: saveHeading,
      label: saveLable,
      options: newOptions,
    }
    createContent(content)
  }

  const files = data.map(file => file.name)
  files.push(returnOption[0])

  if (title === 'load' && data.length > 0) {
    content = {
      label: 'Choose a file to load',
      options: files,
    }
    createContent(content)
  }

  if (title === 'save' && data.length > 0) {
    const newOptions = files.slice()
    if (files.length < 4) {
      newOptions.splice(newOptions.length - 1, 0, unusedBlock[0])
    }
    content = {
      heading: saveHeading,
      label: saveLable,
      options: newOptions,
    }
    createContent(content)
  }
})

export default establishModalContent
