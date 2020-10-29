import {writable} from 'svelte/store'


// let form = {
//   id: '',
//   type: '',
//   options: []
// }
export const form = writable()


export const forms = writable([])
