const establishModalContent = (title, data = []) => new Promise(resolve =>{
  console.log(title)
  console.log(data)
  let div,
    li,
    span,
    button,
    content,
    info

  const modalHeading = document.querySelector('.js-modal-title h3')
  const modalBodyList = document.querySelector('.js-modal-list')

  const frag = document.createDocumentFragment()

  const ul = frag.appendChild(document.createElement('ul'))
  const ulClass = ['modal-list','js-modal-list']
  ulClass.forEach(name => ul.classList.add(`${name}`))

  const createListItemWrapper = () => {
    li = ul.appendChild(document.createElement('li'))
    li.classList.add('modal-list-item-wrapper')
  }

  const createListItem = () => {
    div = li.appendChild(document.createElement('div'))
    div.classList.add('modal-list-item')
  }

  const createListLabel = content => {
    span = div.appendChild(document.createElement('span'))
    span.classList.add('modal-list-label')
    span.textContent = content
  }

  const createButton = buttonInfo => {
    button = div.appendChild(document.createElement('button'))
    button.setAttribute('type', 'button')

    const buttonClass = ['button', `${buttonInfo.className}`]
    buttonClass.forEach(name => button.classList.add(`${name}`))
    button.textContent = `${buttonInfo.name}`
  }

  const getFilename = str => {
    const regex = /^(map:)/
    const filename = str.split(regex)
    return filename
  }

  const generateInfo = option => {
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
      name = filename[2]
      className = `map-${filename[2]}`
      return info = { name, className }
    }

    return info = { name, className }
  }

  const createButtons = options => {
    const isNotBoolean = options[0] !== false
    const isNotCancel = options[0] !== 'cancel'
    createListItemWrapper()
    if (!isNotBoolean || !isNotCancel) { createListItem() }
    options.forEach(option => {
      if (isNotBoolean && isNotCancel) { createListItem() }
      generateInfo(option)
      createButton(info)
    })
  }

  const appendList = heading => {
    modalHeading.innerHTML = `${heading} map...`
    modalBodyList.parentNode.replaceChild(frag, modalBodyList)
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
  const confirmOptions = [false, true]
  const saveOptions = ['cancel', 'save']
  const unusedBlock = ['unused block']
  const returnOption = ['back']

  if (title === 'new') {
    content = {
      heading: saveHeading,
      label: 'Would you like to save current map?',
      options: confirmOptions
    }
    createContent(content)
  }

  if (title === 'confirmLoad') {
    const filename = getFilename(data[0])[2].toUpperCase()
    content = {
      label: `Load '${filename}' file?`,
      options: saveOptions
    }
    createContent(content)
  }

  if (title === 'newSave') {
    content = {
      heading: saveHeading,
      label: 'Enter file name',
      options: saveOptions
    }
    createContent(content)
  }

  if (title === 'load' && data.length === 0) {
    content = {
      label: 'There is no saved data',
      options: returnOption
    }
    createContent(content)
  }

  if (title === 'save' && data.length === 0) {
    const newOptions = unusedBlock.slice()
    newOptions.push(returnOption[0])
    content = {
      heading: saveHeading,
      label: 'Choose a block to save',
      options: newOptions
    }
    createContent(content)
  }

  const files = data.map(file => file.name)
  files.push(returnOption[0])

  if (title === 'load' && data.length > 0) {
    content = {
      label: 'Choose a file to load',
      options: files
    }
    createContent(content)
  }
})

export default establishModalContent
