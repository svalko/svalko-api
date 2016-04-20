'use strict';

const URL = 'http://api.svalko.org/1.0/';
const XYI = 'ХУЙ из ундефинед';

// TODO: Комментарии

var request = require('request'),
	_requests = require('./apiStub'),
	_lastPstoId = 0,
// TODO: разъебаться с последними комментами по постам
	_lastComments = XYI,
	_config = {
		glagne: {
			pageSize: 30
		},
		pstoComments: {
			pageSize: 30
		}
	};

function load(method, params) {
	params = params || {};

	return new Promise((resolve) => {
		resolve(_requests[method]);
	});

	/*return new Promise((resolve, reject) => {
		let url = URL + method + '/' + JSON.stringify(params);

		request(url, (error, response, body) => {
			if (error || response.statusCode !== 200) {
				reject(error);
				return;
			}

			resolve(JSON.parse(body));
		});
	});*/
}

class Svalko {
	constructor(config) {
		if (!config) {
			return;
		}

		for (let key in _config) {
			if (_config.hasOwnProperty(key) && config[key]) {
				_config[key] = config[key];
			}
		}
	}

	/**
	 * Получение пстов на глагне.
	 * @param {number}	[page=1]
	 */
	loadGlagne(page) {
		page = page || 1;

		let skip = (page - 1) * _config.glagne.pageSize,
			pageSize = _config.glagne.pageSize;

		return load('glagne', {skip: skip, page_size: pageSize})
			.then(function(data) {
				if (page === 1 && data.items.length) {
					_lastPstoId = data.items[0].id;
				}
				return data.items;
			});
	}

	loadPsto(pstoId) {
		return load('post', {psto_id: pstoId});
	}

	loadPstoComments(pstoId, page) {
		return load('post/comments', {psto_id: pstoId});
	}
}

module.exports = Svalko;