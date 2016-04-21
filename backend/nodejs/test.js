var Svalko = require('./svalko');
var Colors = require('colors/safe');
var svalko = new Svalko();

svalko.loadGlagne()
	.then(pstos => console.log(Colors.red.underline('Glagne!'), pstos))
	.then(() => svalko.loadPsto())
	.then(psto => console.log(Colors.red.underline('Psto!!'), psto))
	.then(() => svalko.loadPstoComments(2, 1))
	.then(comments => console.log(Colors.red.underline('Comments!!!'), comments))
	.then(() => svalko.searchPsto('Хуй хуй', svalko.pstoSearchTypes))
	.then(items => console.log(Colors.red.underline('Search!!!!'), items))
	.catch(e => console.error(e.stack));