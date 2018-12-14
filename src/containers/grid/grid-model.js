const gridModel = (() => {
  let model
  const set = representation => model = representation
  const get = () => model
  const update = (index, color) => model[index] = color

  return {
    set,
    get,
    update,
  }
})()

export default gridModel
