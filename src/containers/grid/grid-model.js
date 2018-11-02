const gridModel = (() => {
  let model
  const create = representation => model = representation
  const update = (index, color) => model[index] = color

  return {
    create,
    update
  }
})()

export default gridModel
