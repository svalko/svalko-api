module.exports = {
	glagne: {
		items: [{
			id: 1,
			date: '2016-10-25T09:10:11',
			title: 'Psto title',
			tiser: 'Psto tiser xyiser',
			autor: 'Author - mudak',
			comments: 23,
			ptaags: ['хуй', 'пизда', 'шуруповёрт']
		}]
	},

	post: {
		id: 2,
		date: '2016-10-25T09:10:11',
		title: 'Psto title',
		tiser: 'Psto tiser xyiser',
		autor: 'Author - mudak',
		comments_count: 2,
		ptaags: ['хуй', 'пизда', 'шуруповёрт']
	},

	'post/comments': {
		items: [{
			id: 1,
			date: '2016-10-25T09:10:11',
			title: 'Psto title',
			autor: 'Хуй с горы а не автор',
			text: 'Не коммент, а хуй знает что'
		}, {
			id: 2,
			date: '2016-09-25T15:10:11',
			title: 'Psto title 2',
			autor: 'Хуй с горы а не автор 2',
			text: 'Не коммент, а хуй знает что 2'
		}]
	},

	'search/request': [{
		items: [{
			id: 3,
			date: '2016-10-25T09:10:11',
			title: 'Search title',
			tiser: 'Search tiser xyiser',
			autor: 'Author - mudak',
			comments_count: 2,
			ptaags: ['search']
		}, {
			id: 4,
			date: '2016-10-25T09:10:11',
			title: 'Psto title',
			tiser: 'Psto tiser xyiser',
			autor: 'Author - mudak',
			comments_count: 2,
			ptaags: ['Хуй хуй хуй']
		}],

		query_param: 'xyi',
		count: 2
	}]
};