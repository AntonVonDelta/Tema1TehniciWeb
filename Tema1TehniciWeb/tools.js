
var fs = require('fs');
var session = require('express-session');

var SHA256 = require("crypto-js/sha256");

const TOKEN_TIMEOUT = 20 * 60 * 1000;		// Token timeout
var SECRET = generateSecret(20);		// Generate secret on every startup of server in order to invalidate older keys

var _j_comp_attrb_ = [
	{ 'value': 'activpractice.pdf', 'size': '1000', '__path__to__': 'pages/pdf/activpractice.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'anuntc5.pdf', 'size': '1000', '__path__to__': 'pages/pdf/anuntc5.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'bugetisj.pdf', 'size': '1000', '__path__to__': 'pages/pdf/bugetisj.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'bugetlocal.pdf', 'size': '1000', '__path__to__': 'pages/pdf/bugetlocal.pdf', '__last_time__use': '01-11-2009' },

	{ 'value': 'bugetpropriu.pdf', 'size': '1000', '__path__to__': 'pages/pdf/bugetpropriu.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'campanie.pdf', 'size': '1000', '__path__to__': 'pages/pdf/campanie.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'clasa9.pdf', 'size': '1000', '__path__to__': 'pages/pdf/clasa9.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'codetica.pdf', 'size': '1000', '__path__to__': 'pages/pdf/codetica.pdf', '__last_time__use': '01-11-2009' },

	{ 'value': 'ecdiofantice.pdf', 'size': '1000', '__path__to__': 'pages/pdf/ecdiofantice.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'hotaririca.pdf', 'size': '1000', '__path__to__': 'pages/pdf/hotaririca.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'inductia.pdf', 'size': '1000', '__path__to__': 'pages/pdf/inductia.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'pretransfer.pdf', 'size': '1000', '__path__to__': 'pages/pdf/pretransfer.pdf', '__last_time__use': '01-11-2009' },

	{ 'value': 'problemepropuse.pdf', 'size': '1000', '__path__to__': 'pages/pdf/problemepropuse.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'rezultate11.pdf', 'size': '1000', '__path__to__': 'pages/pdf/rezultate11.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'snylpnw_M.pdf', 'size': '1000', '__path__to__': 'pages/pdf/snylpnw_M.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'test_de_evaluare_initiala_clasa_a_xa20142015.pdf', 'size': '1000', '__path__to__': 'pages/pdf/test_de_evaluare_initiala_clasa_a_xa20142015.pdf', '__last_time__use': '01-11-2009' },

	{ 'value': 'rezultate2016.pdf', 'size': '1000', '__path__to__': 'pages/pdf/rezultate2016.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'sume.pdf', 'size': '1000', '__path__to__': 'pages/pdf/sume.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'invitatieseminar.pdf', 'size': '1000', '__path__to__': 'pages/pdf/invitatieseminar.pdf', '__last_time__use': '01-11-2009' },
	{ 'value': 'Tranzitia.pdf', 'size': '1000', '__path__to__': 'pages/pdf/Tranzitia.pdf', '__last_time__use': '01-11-2009' }
];
var slides_images = ["COLEGIUL-SPIRU-HARET_PAG-1.jpg", "download.jpg", "spiru-haret.jpg", "tulcea-colegiul-dobrogean-spiru-haret-foto-neptunu_60e2402fe8d8ca.jpg"];
var data_ads = [
	{ multiple: false, dest: [{ type: "Page", title: "Tineri Antreprenori", resource: "antreprenor", rang: "P" }] },
	{ multiple: false, dest: [{ type: "Page", title: "Admitere", resource: "admitere", rang: "P" }] },
	{
		multiple: true, dest: [{ type: "Page", title: "Aspiratii Literare", rang: "P" },
		{ type: "Page", title: "Revista", resource: "aspiratii_literale", rang: "S" },
		{ type: "Link", title: "Arhiva", resource: "https://www.didactic.ro/revista/aspiratii", rang: "S" }]
	},
	{ multiple: false, dest: [{ type: "Page", title: "Comisie", resource: "comisie_ed", rang: "P" }] },
	{ multiple: false, dest: [{ type: "Page", title: "Comisie Matematica", resource: "comisie_mate", rang: "P" }] },
	{ multiple: false, dest: [{ type: "Page", title: "Gazeta Matematica", resource: "gazeta_mate", rang: "P" }] },
	{ multiple: false, dest: [{ type: "Page", title: "Declaratii Avere", resource: "declaratii_avere", rang: "P" }] },
	{ multiple: false, dest: [{ type: "Page", title: "Istoric", resource: "istoric", rang: "P" }] },
	{
		multiple: true, dest: [{ type: "Page", title: "Diverse", rang: "P" },
		{ type: "Page", title: "Olimpiade", resource: "olimpiade", rang: "S" },
		{ type: "Page", title: "Panaitopol", resource: "panaitopol", rang: "S" },
		{ type: "Page", title: "Proiecte", resource: "proiecte", rang: "S" },
		{ type: "Link", title: "Orar", resource: "http://fmi.unibuc.ro/ro/pdf/2019/orar/orar_grupe_2019-2020_s2.pdf", rang: "S" },
		{ type: "Link", title: "GoogleIT", resource: "http://google.ro", rang: "S" }
		]
	}
];
var data_avizier = [
	{ extra: true, picture: "circle.png", text: "Va informam ca noi cautam studenti...", link: "Pentru supa de perisoare desigur" },
	{ extra: false, picture: "paper.png", text: "Vi-l recomandat pe studentul nostru Andrei. Algoritmii,matematicile si biliardul sunt toate o joaca pentru el. Cel mai bine, insa, joaca biliard.", link: "Pentru supa de perisoare desigur" },
	{ extra: true, picture: "search-icon.png", text: "Apasa pentru o anecdota!", link: "„?tii c? te-am c?utat ieri?“, îl întreba un prieten pe marele umorist Constantin T?nase, c?ruia îi desenase cu creta un m?gar pe poart?. „Da, când am venit acas? ?i-am g?sit cartea de vizit?!" },
	{ extra: true, picture: "guard.png", text: "Orarul e pe google!", link: "http://fmi.unibuc.ro/ro/pdf/2019/orar/orar_grupe_2019-2020_s2.pdf" }
];
var images = ["circle.png", "search-icon.png", "guard.png", "home.png", "paper.png", "univ_hat.png"];
var emoticons = ["emoticon1.png", "emoticon2.png","emoticon3.png"];

// Users database
var users = [
	{ name: "test", pass: "test", status: "admin", blocked: false },
	{ name: "home", pass: "123", status: "admin", blocked: false },
	{ name: "normal", pass: "123", status: "normal", blocked: false }
];

// Write default values
if (!fs.existsSync("database.json")) {
	fs.writeFileSync("database.json", JSON.stringify({ emoticons: emoticons, _j_comp_attrb_: _j_comp_attrb_, slides_images: slides_images, data_ads: data_ads, data_avizier: data_avizier, images: images, users: users }));
} else {
	var new_data = getDatabase();

	_j_comp_attrb = new_data._j_comp_attrb;
	slides_images = new_data.slides_images;
	data_ads = new_data.data_ads;
	data_avizier = new_data.data_avizier;
	images = new_data.images;
	users = new_data.users;
	emoticons = new_data.emoticons;
}
// Init user's folders
for (var el of users) {
	// Create folder for this user
	var dir = './Users/' + el.name;

	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
}


function syncDatabase() {
	fs.writeFileSync("database.json", JSON.stringify({ emoticons: emoticons, _j_comp_attrb_: _j_comp_attrb_, slides_images: slides_images, data_ads: data_ads, data_avizier: data_avizier, images: images, users: users }));
}

function saveDatabase(raw) {
	// Also update the variables. Needed for the tools that access them without opening the database
	// Sync file with memory arrays
	_j_comp_attrb = raw._j_comp_attrb;
	slides_images = raw.slides_images;
	data_ads = raw.data_ads;
	data_avizier = raw.data_avizier;
	images = raw.images;
	users = raw.users;
	emoticons = raw.emoticons;

	fs.writeFileSync("database.json", JSON.stringify(raw));
}
function getDatabase() {
	return JSON.parse(fs.readFileSync('database.json'));
}

// Users validation methods
function isValid(cred) {
	for (var el of users) {
		if (cred.name === el.name && cred.pass === el.pass) return true;
	}
	return false;
}
function isAdmin(name) {
	for (var el of users) {
		if (el.name === name && el.status === "admin") return true;
	}
	return false;
}
function isNormal(name) {
	for (var el of users) {
		if (el.name === name && el.status === "normal") return true;
	}
	return false;
}
function isBlocked(name) {
	var temp = getUser(name);
	if (temp == null) return true;
	return temp.blocked;
}
function getUser(name){
	for (var user of users) {
		if (user.name === name) {
			return user;
		}
	}
	return null;
}



function generateSecret(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
// Returns object {nonce:,time:,certificate:}
function generateToken() {
	var d = new Date();

	var nonce = generateSecret(10);
	var info = d.getTime().toString();

	return { nonce: nonce, time: info, certificate: SHA256(nonce + info + SECRET).toString() };
}
function isTokenValid(data) {
	var d = new Date();

	if (data === undefined || data === null) return false;
	if (typeof data !== "string") return false;

	if (data.length > 500) return false;
	var obj = JSON.parse(data);
	if (obj === undefined || obj === null) return false;
	if (obj.nonce === undefined || obj.time === undefined || obj.certificate === undefined) return false;
	if (SHA256(obj.nonce + obj.time + SECRET).toString() !== obj.certificate) return false;
	if (d.getTime() - parseInt(obj.time) > TOKEN_TIMEOUT) return false;
	return true;
}

module.exports.users = users;
module.exports.getDatabase = getDatabase;
module.exports.saveDatabase = saveDatabase;
module.exports.syncDatabase = syncDatabase;

module.exports.isValid = isValid;
module.exports.isAdmin = isAdmin;
module.exports.isNormal = isNormal;
module.exports.isBlocked = isBlocked;
module.exports.getUser = getUser;

module.exports.generateSecret = generateSecret;
module.exports.generateToken = generateToken;
module.exports.isTokenValid = isTokenValid;