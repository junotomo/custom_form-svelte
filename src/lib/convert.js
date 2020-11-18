// função para converção do formulario custommizavel
// para um array de objeto do niore
import dyn from './constants'


export function convert(formularios) {
  console.log(formularios)
  formularios.forEach((formulario, i) => {
    if (formulario.defined) {
      formulario.items.forEach((input, i) => {
        if (input.type === 'combo') {
          ComboDyn(input)
        }
        TextDyn(input)
      })
    }
  })
}

function TextDyn(input) {
  let componentMask = dyn.mask[input.type] ? dyn.mask[input.type] : ''
  let component = {
  	component: 'TextDyn',
  	name: input.title,
  	props: {
  		type: input.type,
  		label: input.title,
  		placeholder: input.placeholder,
  		pattern: componentMask.pattern,
  		required: true,
  		mask: componentMask.mask,
  		mq: 'long_half'
  	}
  }
  return component
}

function ComboDyn(input) {
  let combo = {
		component: 'ComboDyn',
		name: input.title,
		props: {
			label: input.pĺaceholder,
			required: true,
			value: 'F',
			mq: 'long_half',
			options: dyn.comboOptions[input.title]
		}
	}
  return combo
}
