export function getCurrentTime() {
	const now = new Date(),
		hours = now.getHours().toString().padStart(2, 0),
		minutes = now.getMinutes().toString().padStart(2, 0),
		seconds = now.getSeconds().toString().padStart(2, 0),
		currentTime = `${hours}:${minutes}:${seconds}`
	return currentTime
}
