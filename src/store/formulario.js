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
				type: 'defined_text',
				placeholder: 'Nome do segurado',
				size: 'long',
				show: true
			},
			{
				id: hexID(),
				type: 'defined_text',
				size: 'normal',
				placeholder: 'Tipo de pessoa',
				show: true
			},
			{
				id: hexID(),
				type: 'defined_text',
				size: 'normal',
				placeholder: 'CPF',
				show: true
			},
			{
				id: hexID(),
				type: 'defined_text',
				size: 'normal',
				placeholder: 'RG',
				show: true
			}
		],
	},
	{
		id: hexID(),
		title: 'Emails',
		defined: true,
		items: [
			{
				id: hexID(),
				type: 'defined_text',
				size: 'normal',
				placeholder: 'RlG',
				show: true
			},
			{
				id: hexID(),
				type: 'defined_text',
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
				type: 'defined_text',
				size: 'normal',
				placeholder: 'RGh',
			},
			{
				id: hexID(),
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
				type: 'defined_text',
				size: 'normal',
				placeholder: 'RGx',
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
