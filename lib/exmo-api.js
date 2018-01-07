const CryptoJS = require("crypto-js")
const querystring = require('querystring')
const request = require('request')
const config = {
	url: 'https://api.exmo.com/v1/'
}

const sign = message => CryptoJS.HmacSHA512(message, config.secret).toString(CryptoJS.enc.hex)

exports.init = cfg => {
	config.key = cfg.key
	config.secret = cfg.secret
	config.nonce = Math.floor(new Date().getTime())
}

exports.query = (method, data) => new Promise((resolve, reject) => {
	data.nonce = config.nonce++
	const post = querystring.stringify(data)
	const options = {
		url: config.url + method,
		method: 'POST',
		headers: {
			'Key': config.key,
			'Sign': sign(post)
		},
		form: data
	}

	request(options, (error, response, body) => {
		if (!error && response.statusCode == 200) {
			const res = JSON.parse(body)
			resolve(res)
		} else {
			reject(error)
		}
	});
})
