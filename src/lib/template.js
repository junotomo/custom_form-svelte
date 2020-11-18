const sourceRamosSeguro = [
	{value: '', text: ' Selecione um ramo'},
	{value: 'auto', text: 'Auto (Carro, Moto e Caminhão)'},
	{value: 1, text: 'Bike'},
	{value: 2, text: 'Residencial'},
	{value: 3, text: 'Viagem'},
	{value: 4, text: 'Portáteis'},
	{value: 5, text: 'Pet'},
	{value: 6, text: 'Previdência'},
	{value: 7, text: 'Vida'},
	{value: 8, text: 'Odonto'},
	{value: 9, text: 'Saúde'},
	{value: 10, text: 'Mensalidade Protegida'},
	{value: 11, text: 'Fiança Locatícia'}
].sort((a, b) => {
	if (a.text < b.text) {
		return -1
	}
	if (a.text > b.text) {
		return 1
	}
	return 0
})

const sourceTipoSeguro = [
	{value: '', text: 'Selecione o tipo'},
	{value: 1, text: 'Novo'},
	{value: 2, text: 'Renovação da mesma corretora'},
	{value: 3, text: 'Renovação de outra corretora'}
]

const sourceTipoPessoa = [
	{value: 'F', text: 'Física'},
	{value: 'J', text: 'Jurídica'}
]

const sourceSexo = [
	{value: 'M', text: 'Masculino'},
	{value: 'F', text: 'Feminino'}
]

const sourceOrigem = [
  {value: 'M', text: 'Masculino'},
  {value: 'F', text: 'Feminino'}
]

// Actions
const actionPF = [
	{
		action: 'visibility',
		conditionals: [
			{
				join_operator: '',
				args: [
					{
						field: 'tipo_pessoa',
						operator: 'eq',
						value: 'F'
					}
				]
			}
		]
	}
]

const actionPJ = JSON.parse(JSON.stringify(actionPF))
actionPJ[0].conditionals[0].args = [
	{
		field: 'tipo_pessoa',
		operator: 'eq',
		value: 'J'
	}
]

const actionCss = JSON.parse(JSON.stringify(actionPF))
actionCss[0].action = 'css'


const autoDyn = {
		component: 'AutoDyn',
		props: {
			fixtures: {
				tipo_pessoa: 'F',
				nome: 'Nome Teste Formulário',
				cpf: '300.300.300-30',
				sexo: 'F',
				empresa: 'Empresa Teste Formulário',
				cnpj: '28.901.044/0001-01',
				telefone: '(11) 23456789',
				celular: '(11) 923456789',
				email: 'teste@exemplo.com',
				ramo_seguro: 1,
				tipo_seguro: 2,
				vencimento_seguro: '2020-09-25'
			}
		}
	}

let form = {
		component: 'FormDyn',
		props: {
			cleanup: true,
			base: {
				tipo_pessoa: 'F',
				nome: '',
				cpf: '',
				sexo: '',
				empresa: '',
				cnpj: '',
				telefone: '',
				celular: '',
				email: '',
				ramo_seguro: '',
				tipo_seguro: '',
				vencimento_seguro: ''
			},
			data_source: {
				endpoint: 'https://service.teleport.com.br/niore/api/v1/save'
			}
		},
		children: []
  }


const tipo_pessoa = {
	component: 'ComboDyn',
	name: 'tipo_pessoa',
	props: {
		label: 'Tipo de pessoa',
		required: true,
		value: 'F',
		mq: 'long_half',
		options: sourceTipoPessoa
	}
}

const cnpj = {
	component: 'TextDyn',
	name: 'cnpj',
	props: {
	type: 'tel',
	label: 'CNPJ',
	placeholder: 'Digite o CNPJ da sua empresa',
	pattern: '\\d{2}.\\d{3}.\\d{3}\\/\\d{4}-\\d{2}',
		required: true,
		mask: '99.999.999/9999-99',
		mq: 'long_half'
  },
	actions: actionPJ
}

const empresa = {
	component: 'TextDyn',
	name: 'empresa',
	props: {
		type: 'text',
		label: 'Empresa',
		required: true,
		mq: 'half'
	},
	actions: actionPJ
}

const cpf = {
  component: 'TextDyn',
	name: 'cpf',
	props: {
		type: 'tel',
		label: 'CPF',
		placeholder: 'Digite seu CPF',
		pattern: '\\d{3}.\\d{3}.\\d{3}-\\d{2}',
		required: true,
		mask: '999.999.999-99',
		mq: 'long_half'
	},
	actions: actionPF
}

const rg = {
  component: 'TextDyn',
	name: 'cpf',
	props: {
		type: 'tel',
		label: 'RG',
		placeholder: 'Digite seu RG',
		pattern: '\\d{2}.\\d{3}.\\d{3}-\\d{1}',
		required: true,
		mask: '99.999.999-9',
		mq: 'long_half'
	},
	actions: actionPF
}

const nome = {
  component: 'TextDyn',
  name: 'nome',
  props: {
    type: 'text',
    label: 'Nome completo',
    required: true,
    mq: 'half'
  },
  actions: actionPF
}

const sexo = {
  component: 'ComboDyn',
  name: 'sexo',
  props: {
  	label: 'Sexo',
  	required: true,
  	options: sourceSexo,
  	mq: 'half'
  },
  actions: actionPF
}

const telefone = {
  component: 'TextDyn',
	name: 'telefone',
	props: {
		type: 'tel',
		label: 'Telefone',
		pattern: '\\(\\d{2}\\)\\s(\\d{8}\\d?)',
		required: true,
		mask: '(99) 99999999'
	}
}

const celular = {
  component: 'TextDyn',
  name: 'celular',
  props: {
    type: 'tel',
    label: 'Telefone',
    pattern: '\\(\\d{2}\\)\\s(\\d{9}\\d?)',
    required: true,
    mask: '(99) 99999999'
  }
}

const email = {
  component: 'TextDyn',
	name: 'email',
	props: {
		type: 'email',
		label: 'E-mail',
		required: true,
		css: ['full', 'half']
	},
	actions: actionCss
}

const tipo_seguro = {
  component: 'ComboDyn',
	name: 'tipo_seguro',
	props: {
		label: 'Tipo do seguro',
		required: true,
		options: sourceTipoSeguro,
		mq: 'long_half'
  }
}

const ramo_seguro = {
  component: 'ComboDyn',
  name: 'ramo_seguro',
  props: {
    label: 'Ramo do seguro',
    required: true,
    options: sourceRamosSeguro,
    mq: 'long_half'
  }
}

const origem = {
  component: 'ComboDyn',
  name: 'origem',
  props: {
    label: 'Origem',
    required: true,
    options: sourceOrigem,
    mq: 'long_half'
  }
}

const vencimento_seguro =	{
	component: 'TextDyn',
	name: 'vencimento_seguro',
	props: {
		type: 'date',
		label: 'Data de vencimento',
		pattern: '[\\d]{4}-[\\d]{2}-[\\d]{2}',
		required: true,
		mq: 'half'
	},
	actions: [
		{
			action: 'visibility',
			conditionals: [
				{
					join_operator: 'or',
					args: [
						{
							field: 'tipo_seguro',
							operator: 'eq',
							value: 2
						},
						{
							field: 'tipo_seguro',
							operator: 'eq',
							value: 3
						}
					]
				}
			]
		}
	]
}
const children = {
  autoDyn,
  form,
	tipo_pessoa,
	nome,
	cpf,
  rg,
	sexo,
	empresa,
	cnpj,
	telefone,
	celular,
	email,
	ramo_seguro,
	tipo_seguro,
  origem,
	vencimento_seguro
}

export default children
