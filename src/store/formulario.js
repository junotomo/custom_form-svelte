import {writable, get} from 'svelte/store'
import hexID from '@tadashi/hex-id'

export const forms = writable([])

export const getForms = () => get(forms)

export const getForm = id => {
	return getForms().find(searchedForm => searchedForm.id === id)
}

export const getInputs = (formId, itemId) => {
	return getForm(formId).items.find(searchItem => searchItem.id === itemId)
}

export const DEFAULT_FORMS = [
	{
		id: hexID(),
		title: 'Dados do segurado',
		defined: true,
		items: [
			{
				id: hexID(),
				component: 'defined_text',
				type: 'text',
				title: 'nome',
				placeholder: 'Nome do segurado',
				size: 'long',
				show: true
			},
			{
				id: hexID(),
				component: 'defined_text',
				type: 'combo',
				title:'tipo_pessoa',
				size: 'normal',
				placeholder: 'Tipo de pessoa',
				show: true
			},
			{
				id: hexID(),
				component: 'defined_text',
				type: 'defined_text',
				size: 'normal',
				title:'cpf',
				placeholder: 'CPF',
				show: true
			},
			{
				id: hexID(),
				component: 'defined_text',
				type: 'defined_text',
				size: 'normal',
				title: 'rg',
				placeholder: 'RG',
				show: true
			}
		]
	},
	{
		id: hexID(),
		title: 'Emails',
		defined: true,
		items: [
			{
				id: hexID(),
				component: 'defined_text',
				type: 'defined_text',
				title: 'sexo',
				size: 'normal',
				placeholder: 'RlG',
				show: true
			},
			{
				id: hexID(),
				component: 'defined_text',
				type: 'text',
				title: 'empresa',
				size: 'normal',
				placeholder: 'RGj',
				show: true
			}
		]
	},
	{
		id: hexID(),
		title: 'Telefone',
		defined: true,
		items: [
			{
				id: hexID(),
				component: 'defined_text',
				title: 'telefone',
				type: 'defined_text',
				size: 'normal',
				placeholder: 'RGh',
			},
			{
				id: hexID(),
				component: 'defined_text',
				title: 'celular',
				type: 'defined_text',
				size: 'normal',
				placeholder: 'RGf',
				show: true
			}
		]
	},
	{
		id: hexID(),
		title: 'Dados do seguro',
		defined: true,
		items: [
			{
				id: hexID(),
				component: 'defined_text',
				type: 'combo',
				title: 'tipo_seguro',
				size: 'normal',
				placeholder: 'Tipo de seguro',
				show: true
			},
			{
				id: hexID(),
				component: 'defined_text',
				type: 'combo',
				title: 'ramo_seguro',
				size: 'normal',
				placeholder: 'Ramo do seguro',
				show: true
			},
			{
				id: hexID(),
				component: 'defined_text',
				type: 'combo',
				title: 'origem',
				size: 'normal',
				placeholder: 'Tipo de seguro',
				show: true
			}
		]
	},
	{
		id: hexID(),
		title: 'custom',
		defined: false,
		items: [
			{
				id: hexID(),
				component: 'defined_text',
				type: 'checkbox_grade',
				options:[
					[
						{
							id: hexID(),
							text: 'test4'
						},
						{
							id: hexID(),
							text: 'teeest4'
						},
						{
							id: hexID(),
							text: 'teest4'
						}
					],
					[
						{
							id: hexID(),
							text: 'test22'
						},
						{
							id: hexID(),
							text: 'teeest22'
						},
						{
							id: hexID(),
							text: 'teest2'
						}
					]
				]
			},
			{
				id: hexID(),
				component: 'multipla',
				type: 'multipla',
				options:[
					{
						id: hexID(),
						text: 'tecccst'
					},
					{
						id: hexID(),
						text: 'cccc'
					},
					{
						id: hexID(),
						text: 'teessdsdt'
					}
				]
			}
		]
	}
]
