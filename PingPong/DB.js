// Consts
const fs = require('fs');

const DataFilePath = `${__dirname}/data.json`;
const TopIcon = [ "🥇", "🥈", "🥉", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
const MsgColors = [ 0xFFD700, 0xC0C0C0, 0xCD7F32, 0xA4A4FF, 0xA4A4FF, 0xA4A4FF, 0xA4A4FF, 0xA4A4FF, 0xA4A4FF ];
const Avatars = [ "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];

// Vars
let DB = {}; let DBsorted = [];

// Private (Not exposed)
function newPlayer(player){
	DB[player.auth] =  {
		auth: player.auth,
		name: player.name,
		elo: 1200,
		lastEloC: "+0",
		lastTime: new Date().getTime()
	};

	fs.writeFileSync(DataFilePath, JSON.stringify(DB));

	DBsorted.push(DB[player.auth]);
	DBsorted.sort((first, second) => { return second.elo - first.elo } );
}

function eloChange(elo,opponentElo,score)
{
    var K = 32; // Coeficiente de puntos maximos

	var dif = (opponentElo - elo) / 400;
	var pVictory = 1 / (1 + Math.pow(10, dif) );

	return K * (score - pVictory);
}

// Public (Exposed)
function DB_load(){
	DB = JSON.parse(fs.readFileSync(DataFilePath));

	Object.keys(DB).forEach( key => DBsorted.push( DB[key] ));
	DBsorted.sort((first, second) => { return second.elo - first.elo } );
}

function DB_getElo(auth){ return DB[auth].elo; }
function DB_checkPlayerLogin(player){ if (!DB[player.auth]) newPlayer(player); }

function DB_meString(auth){
	let P = DB[auth];

	if (!P) return ["Data not found, try again later"];

	let pos = DBsorted.findIndex(p => p.auth == auth);

	let s = [];

	if (DBsorted[pos-1]) s.push(`${pos}} [${Math.floor(DBsorted[pos-1].elo)}] ${DBsorted[pos-1].name}`);
	s.push(`${pos+1}} [${Math.floor(P.elo)}] ${P.name}`);
	if (DBsorted[pos+1]) s.push(`${pos+2}} [${Math.floor(DBsorted[pos+1].elo)}] ${DBsorted[pos+1].name}`);
	

	return s;
}

function DB_topString(pos){
	let name = DBsorted[pos] ? `[${Math.floor(DBsorted[pos].elo)}]${DBsorted[pos].name}` : "??" ;
	let icon = TopIcon[pos] ? TopIcon[pos] : "❔";

	return `${icon}${name}${icon}`;
}

function DB_chatString(auth, name, msg){
	let cs = { s:`${name}: ${msg}`, c:0xFFFFFF };
	let pos = DBsorted.findIndex(p => p.auth == auth);	if (pos==-1) return cs;

	cs.c = MsgColors[pos] ? MsgColors[pos] : 0xFFFFFF;
	let icon = TopIcon[pos] ? TopIcon[pos] : pos+1;
	cs.s = `[${icon}] ${name}: ${msg}`;

	return cs;
}

function DB_getAvatar(auth){
	let pos = DBsorted.findIndex(p => p.auth == auth);	
	if (pos==-1) return "?"; if (pos>=98) return "⬇️";
	return Avatars[pos] ? Avatars[pos] : `${pos+1}`;
}

function DB_updateElo(authA, authB, scoreA, scoreB, mult){
	try {
		let eloCA = eloChange(DB[authA].elo,DB[authB].elo,scoreA);if (mult) eloCA = eloCA * mult;
		let eloCB = eloChange(DB[authB].elo,DB[authA].elo,scoreB);if (mult) eloCB = eloCB * mult;
	
		DB[authA].elo = DB[authA].elo + eloCA; DB[authB].elo = DB[authB].elo + eloCB;
	
		// Save DB
		fs.writeFileSync(DataFilePath, JSON.stringify(DB));
	
		// Sort DB
		DBsorted = [];
		Object.keys(DB).forEach( key => DBsorted.push( DB[key] ));
		DBsorted.sort((first, second) => { return second.elo - first.elo } );
	
		//
		let iconA = eloCA>=0 ? "🏆" : "🔻"; let iconB = eloCB>=0 ? "🏆" : "🔻";
		let stringA = `${DB[authA].name}[${Math.floor(DB[authA].elo)}](${iconA}${eloCA.toFixed(2)})`;
		let stringB = `${DB[authB].name}[${Math.floor(DB[authB].elo)}](${iconB}${eloCB.toFixed(2)})`;
		console.log([stringA,stringB]);
		return [stringA,stringB];
	} catch (e) {
		console.error('\x1b[31m%s\x1b[0m', e);
		return ["A","B"];
	}

}

function DB_updateTime(auth){
	DB[auth].lastTime = new Date().getTime();
	fs.writeFileSync(DataFilePath, JSON.stringify(DB));
}




module.exports = async function (page) { 
	await page.exposeFunction("DB_load", DB_load);
	await page.exposeFunction("DB_getElo", DB_getElo);
	await page.exposeFunction("DB_checkPlayerLogin", DB_checkPlayerLogin);
	await page.exposeFunction("DB_meString", DB_meString);
	await page.exposeFunction("DB_topString", DB_topString);
	await page.exposeFunction("DB_chatString", DB_chatString);
	await page.exposeFunction("DB_getAvatar", DB_getAvatar);
	await page.exposeFunction("DB_updateElo", DB_updateElo);
	await page.exposeFunction("DB_updateTime", DB_updateTime);
};