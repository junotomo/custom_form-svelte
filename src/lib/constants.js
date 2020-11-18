const mask = {
  tel: {
    pattern: '\\(\\d{2}\\)\\s(\\d{8}\\d?)',
    mask: '(99) 99999999'
  },
  cnpj: {
    pattern: '\\d{2}.\\d{3}.\\d{3}\\/\\d{4}-\\d{2}',
    mask: '99.999.999/9999-99'
  },
  cpf: {
    pattern: '\\d{3}.\\d{3}.\\d{3}-\\d{2}',
    mask: '999.999.999-99',
  }
}

const sourceTipoPessoa = [
	{value: 'F', text: 'Física'},
	{value: 'J', text: 'Jurídica'}
]

const sourceSexo = [
	{value: 'M', text: 'Masculino'},
	{value: 'F', text: 'Feminino'}
]

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
const sourceOrigem = [
  {value: 'Instagram', text: 'Instagram'},
  {value: 'Facebook', text: 'Facebook'}
]

const comboOptions = {
  tipo_pessoa: sourceTipoPessoa,
  sexo: sourceSexo,
  ramo_seguro: sourceRamosSeguro,
  origem: sourceOrigem
}

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

const DynConstants = {
  sourceRamosSeguro,
  sourceTipoPessoa,
  comboOptions,
  sourceSexo,
  actionCss,
  actionPJ,
  mask
}
export default DynConstants
