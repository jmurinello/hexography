const definePolygon = attribute => index => points =>
  `<polygon class='${attribute}' id='poly-${index}' points='${points}'></polygon>`

export default definePolygon
