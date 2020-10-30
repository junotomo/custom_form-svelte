import {writable, get} from 'svelte/store'


export const getForm = id => {
	return getForms().find(form => form.id === id)
}

export const getForms = () => get(forms)
export const form = writable()


export const forms = writable([])
