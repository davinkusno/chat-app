const generateMessage = (username, text) => {
	return {
		username,
		text,
		createdAt: new Date().getTime(),
	}
}

const generateLocationMessage = (username, latitude, longtitude) => {
	return {
		username,
		url: `https://google.com/maps?q=${latitude},${longtitude}`,
		createdAt: new Date().getTime(),
	}
}

module.exports = { generateMessage, generateLocationMessage }
