const definePolygon = attribute => index => points => `
<polygon class='${attribute}' id=${attribute === 'framework' ? `poly-${index}` : 'picker'} points='${points}'></polygon>
`

export default definePolygon
