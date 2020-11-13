<script>
  import {forms} from '../store/formulario'
  import {convert} from '../lib/convert'

  const data = convert($forms)
  console.log('data', data)
  const niore = document.createElement('script')
  niore.type='module'
  niore.id='widget_niore_app'
  niore.src = 'https://service.teleport.com.br/niore/app/v1/scripts/widget.js'
  niore.dataset.target='target_niore_app'
  niore.dataset.empresa=8
  niore.dataset.unidade=1
  niore.dataset.useNimble=1
  document.head.append(niore)


</script>
