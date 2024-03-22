import { addCurrentTime, deleteAllTimes } from './redux/actions.js'
import store from './redux/store.js'
const btnAddTime = document.getElementById('add-time'),
	btnDeleteAllTimes = document.getElementById('delete-times'),
	ul = document.getElementById('ul')

btnAddTime.addEventListener('click', () => {
	store.dispatch(addCurrentTime())
})
btnDeleteAllTimes.addEventListener('click', () => {
	store.dispatch(deleteAllTimes())
})

store.subscribe(() => {
	const times = store.getState()
	ul.innerHTML = ''
	times.forEach(element => {
		let li = document.createElement('li')
		li.innerHTML = element
		ul.appendChild(li)
	})
})
