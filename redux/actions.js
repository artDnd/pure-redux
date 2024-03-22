import { getCurrentTime } from '../utils/getCurrentTime.js'
import * as a from './actionTypes.js'

export function addCurrentTime() {
	return {
		type: a.ADD_CURRENT_TIME,
		payload: getCurrentTime(),
	}
}
export function deleteAllTimes() {
	return {
		type: a.DELETE_ALL_TIMES,
	}
}
