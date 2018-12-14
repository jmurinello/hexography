import storage from '../../../helpers/storage'

const manageDocument = () => {
  const action = window.event.target.getAttribute('class').split(' ')[2]
  storage.open(action)
}

export default manageDocument
