'use strict';

const URL = 'http://api.svalko.org/1.0/',
	XYI = 'ХУЙ из ундефинед',

	/**
	 * @typedef {object} PstoSearchTypes
	 * @enum
	 */
	PstoSearchTypes = {
		ptaags: 'ptaags',
		psto: 'psto',
		comments: 'comments'
	};

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
	 * Список типов для поиска по постам
	 * @enum
	 * @returns {PstoSearchTypes}
	 */
	get pstoSearchTypes() {
		return PstoSearchTypes;
	}

	/**
	 * Получение пстов на глагне. При указании date, то ищутся начиная от неё.
	 * @param {number}	[page=1]
	 * @param {Date}	[date]
	 */
	loadGlagne(page, date) {
		page = page || 1;

		let skip = (page - 1) * _config.glagne.pageSize,
			pageSize = _config.glagne.pageSize,
			params = {
				skip: skip,
				page_size: pageSize
			};

		date && (params.date = date.toISOString());

		return load('glagne', params)
			.then(function(data) {
				if (page === 1 && data.items.length) {
					_lastPstoId = data.items[0].id;
				}
				return data.items;
			});
	}

	/**
	 * Поиск постов
	 * @param {string}		query		текст для поиска
	 * @param {PstoSearchTypes}	searchIn	тип поиска
	 * @param {number}		[page=1]	номер страницы
	 */
	searchPsto(query, searchIn, page) {
		page = page || 1;

		let skip = (page - 1) * _config.glagne.pageSize,
			pageSize = _config.glagne.pageSize,
			params = {
				q: query,
				skip: skip,
				page_size: pageSize,
				search_in: searchIn
			};

		return load('post/search', params);
	}

	/**
	 * Загрузка поста
	 * @param {number}	pstoId
	 */
	loadPsto(pstoId) {
		return load('post', {psto_id: pstoId});
	}

	/**
	 * Загрузка комментов поста
	 * @param {number}	pstoId
	 * @param {number}	[page]
	 */
	loadPstoComments(pstoId, page) {
		return load('post/comments', {psto_id: pstoId});
	}
}

module.exports = Svalko;