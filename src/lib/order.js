import dyn from './template'

export function order(formularios) {
  let children = [
    dyn.autoDyn,
    dyn.form
  ]
  let child = {}
  formularios.forEach((formulario, idx) => {
    children[1].children = [...children[1].children,
    {
			component: 'GroupDyn',
			props: {
				title: formulario.title
			},
  		children: [
				{
  				component: 'GridDyn',
					props: {
						cols_4: true
  				},
					children: []
        }
      ]
    }
  ]
    if (formulario.defined) {
      formulario.items.forEach((input, i) => {
         child = dyn[input.title]
         children[1].children[idx].children
        children[1].children[idx].children = [...children[1].children[idx].children, child]
      })
    }
  })
  return children
}
