import manageDocument from './manage-document'

const enclose = ([x, y]) => e => e.addEventListener(x, y)

const addEvent = listener =>
  document.querySelectorAll('.menu-list-file-label').forEach(enclose(listener))

const fileListeners = () => addEvent
(
    ['click', manageDocument],
)

export default fileListeners
