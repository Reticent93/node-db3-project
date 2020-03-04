const db = require('../data/config');

module.exports = {
	find,
	findById,
	findSteps
};

function find() {
	return db('schemes');
}

function findById(id) {
	return db('schemes').where({ id }).first();
}

function findSteps(id) {
	return db('steps as s')
		.join('schemes', 'schemes.id', 's.scheme_id')
		.where('s.scheme_id', id)
		.select('s.id', 'step_number', 'schemes.scheme_name');
}
