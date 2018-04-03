// for direct access in psql, run this command: `postgres://fkbjfolf:6wxiF5xuhWNZDFSU6sjcdK51U3voWfgz@baasu.db.elephantsql.com:5432/fkbjfolf`
const user = 'fkbjfolf';
const password = '6wxiF5xuhWNZDFSU6sjcdK51U3voWfgz';
const host = 'baasu.db.elephantsql.com';
const dbPort = 5423;
const config = {
	host,
	user,
	password,
	database: user,
	post: dbPort,
	ssl: true
};
module.exports = config;
