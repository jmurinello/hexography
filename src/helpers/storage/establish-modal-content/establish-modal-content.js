const establishModalContent = (title, data = null) => new Promise(resolve =>{
  console.log(title)
  console.log(data)
  let div, li, span, button
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

  const createButton = option => {
    button = div.appendChild(document.createElement('button'))
    button.setAttribute('type', 'button')
    const className = option === 'Yes' ? 'confirm' : 'cancel'
    const buttonClass = ['button', `button-${className}`]
    buttonClass.forEach(name => button.classList.add(`${name}`))
    button.textContent = `${option}`
  }

  const createOptions = () => {
    createListItemWrapper()
    const options = ['Yes', 'No']
    options.forEach(option => {
      createListItem()
      createButton(option)
    })
  }

  if (!data) {
    createListItemWrapper()
    createListItem()
    createListLabel('Would you like to save current map?')
    createOptions()
    resolve()
  }

  modalHeading.innerHTML = `${title} map...`
  modalBodyList.parentNode.replaceChild(frag, modalBodyList)
})

export default establishModalContent
