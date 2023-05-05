// ===============================|  RSR  |===============================
//		Version: 1.1
//		Build Date: 15-Aug-21
//		Authors: Kuma - hbanz.org ku#8923 & brejalis
//		* Table Tennis
//      Changelog:
//		1.0 Official Release
//		1.1 Serve corrections and Game stops after one wins a set
//
//
// ==============================| Winter | ====================================
//
//		Authors: Sinny Deas#8626
//      Version: 2.0
//		* Table Tennis + Padel
//      * Auto Admin Bot
//      * Rankings, Elo system
//      * Visual Disc Score
//      * Match can end on draw
//      
//
// =========================================================================
// Usefull Links
// ------------------------------------------------
// https://html5.haxball.com/headless
// https://github.com/haxball/haxball-issues/wiki/Headless-Host
// https://html5.haxball.com/headlesstoken
// https://html5.haxball.com/playerauth
// =========================================================================

//#region Configs
const _ballInvMass = 11.2; const _maxSpd = 3.6; const _maxPwr = 3; const _playerR = 30;
const _map = `{"name":"Ping Padel 2.1","width":480,"height":600,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"player","spawnDistance":280,"redSpawnPoints":[[-300,555],[-300,-145]],"blueSpawnPoints":[[300,555],[300,-145]],"canBeStored":false,"kickOffReset":"partial","bg":{"color":"333333"},"traits":{},"vertexes":[{"x":0,"y":-600},{"x":0,"y":600},{"x":-400,"y":-100},{"x":400,"y":-100},{"x":-400,"y":100},{"x":400,"y":100},{"x":-400,"y":-600},{"x":-400,"y":600},{"x":400,"y":-600},{"x":400,"y":600},{"x":-250,"y":495,"cMask":["ball"]},{"x":250,"y":495,"cMask":["ball"]},{"x":-250,"y":497,"cMask":["ball"]},{"x":250,"y":497,"cMask":["ball"]},{"x":-250,"y":499,"cMask":["ball"]},{"x":250,"y":499,"cMask":["ball"]},{"x":-250,"y":501,"cMask":["ball"]},{"x":250,"y":501,"cMask":["ball"]},{"x":-250,"y":503,"cMask":["ball"]},{"x":250,"y":503,"cMask":["ball"]},{"x":-8,"y":471,"cMask":["ball"]},{"x":8,"y":471,"cMask":["ball"]},{"x":-8,"y":505,"cMask":["ball"]},{"x":8,"y":505,"cMask":["ball"]},{"x":-250,"y":-205,"cMask":["ball"]},{"x":250,"y":-205,"cMask":["ball"]},{"x":-250,"y":-203,"cMask":["ball"]},{"x":250,"y":-203,"cMask":["ball"]},{"x":-250,"y":-201,"cMask":["ball"]},{"x":250,"y":-201,"cMask":["ball"]},{"x":-250,"y":-199,"cMask":["ball"]},{"x":250,"y":-199,"cMask":["ball"]},{"x":-250,"y":-197,"cMask":["ball"]},{"x":250,"y":-197,"cMask":["ball"]},{"x":-8,"y":-229,"cMask":["ball"]},{"x":8,"y":-229,"cMask":["ball"]},{"x":-8,"y":-195,"cMask":["ball"]},{"x":8,"y":-195,"cMask":["ball"]},{"x":-880,"y":0,"_data":{"mirror":{}},"_selected":"segment"},{"x":880,"y":0,"_data":{"mirror":{}},"_selected":"segment"}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["red","blue"]},{"v0":2,"v1":3,"color":"EEEEEE","cMask":["red","blue","ball"],"bias":20},{"v0":4,"v1":5,"color":"EEEEEE","cMask":["red","blue","ball"],"bias":-20},{"v0":6,"v1":7,"color":"EEEEEE","cMask":["c3"]},{"v0":8,"v1":9,"color":"EEEEEE","cMask":["c3"]},{"v0":18,"v1":19,"color":"2EA0E4","cMask":["ball"]},{"v0":16,"v1":17,"color":"2EA0E4","cMask":["ball"]},{"v0":14,"v1":15,"color":"2EA0E4","cMask":["ball"]},{"v0":12,"v1":13,"color":"2EA0E4","cMask":["ball"]},{"v0":10,"v1":11,"color":"EEEEEE","cMask":["ball"],"bias":10},{"v0":20,"v1":22,"bCoef":0.2,"cMask":["ball"],"bias":-8},{"v0":21,"v1":23,"bCoef":0.2,"cMask":["ball"],"bias":8},{"v0":32,"v1":33,"color":"2EA0E4","cMask":["ball"]},{"v0":30,"v1":31,"color":"2EA0E4","cMask":["ball"]},{"v0":28,"v1":29,"color":"2EA0E4","cMask":["ball"]},{"v0":26,"v1":27,"color":"2EA0E4","cMask":["ball"]},{"v0":24,"v1":25,"color":"EEEEEE","cMask":["ball"],"bias":10},{"v0":34,"v1":36,"bCoef":0.2,"cMask":["ball"],"bias":-8},{"v0":35,"v1":37,"bCoef":0.2,"cMask":["ball"],"bias":8},{"v0":38,"v1":39,"color":"EEEEEE","cMask":["red","blue","ball"],"_data":{"mirror":{},"arc":{"a":[-880,0],"b":[880,0],"radius":null,"center":[null,null],"from":null,"to":null}},"_selected":true}],"goals":[],"discs":[{"radius":6,"invMass":11.2,"pos":[-300,414],"color":"ffb433","bCoef":0.84,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.985,"gravity":[0,0.22]},{"radius":0,"invMass":0,"pos":[-300,421],"bCoef":0,"cMask":["ball"]},{"radius":7,"invMass":0,"pos":[0,471],"color":"000000","bCoef":0.2,"cMask":["ball","red","blue"]},{"radius":8,"invMass":0,"pos":[-20,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-40,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-60,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-80,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-100,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-120,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-140,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-160,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-180,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-200,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[20,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[40,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[60,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[80,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[100,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[120,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[140,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[160,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[180,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[200,590],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[0,590],"color":"3333ff","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[0,590],"color":"3333ff","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[0,590],"color":"ffffff","cMask":["c3"],"damping":0},{"radius":28,"invMass":0,"pos":[0,550],"color":"333333","cMask":["c3"],"damping":0},{"radius":6,"invMass":11.2,"pos":[-300,-286],"color":"ffb433","bCoef":0.84,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.985,"gravity":[0,0.22]},{"radius":0,"invMass":0,"pos":[-300,-279],"bCoef":0,"cMask":["ball"]},{"radius":7,"invMass":0,"pos":[0,-229],"color":"000000","bCoef":0.2,"cMask":["ball","red","blue"]},{"radius":8,"invMass":0,"pos":[-20,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-40,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-60,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-80,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-100,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-120,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-140,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-160,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-180,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[-200,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[20,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[40,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[60,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[80,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[100,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[120,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[140,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[160,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[180,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[200,-110],"color":"333333","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[0,-110],"color":"3333ff","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[0,-110],"color":"3333ff","cMask":["c3"],"damping":0},{"radius":8,"invMass":0,"pos":[0,-110],"color":"ffffff","cMask":["c3"],"damping":0},{"radius":28,"invMass":0,"pos":[0,-150],"color":"333333","cMask":["c3"],"damping":0}],"planes":[{"normal":[0,-1],"dist":-600,"cMask":["ball","red","blue"],"_data":{"extremes":{"normal":[0,-1],"dist":-600,"canvas_rect":[-880,-600,880,600],"a":[-880,600],"b":[880,600]}}},{"normal":[0,1],"dist":-600,"cMask":["ball","red","blue"],"_data":{"extremes":{"normal":[0,1],"dist":-600,"canvas_rect":[-880,-600,880,600],"a":[-880,-600],"b":[880,-600]}}},{"normal":[-1,0],"dist":-400,"bCoef":1,"cMask":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-400,"canvas_rect":[-880,-600,880,600],"a":[400,-600],"b":[400,600]}}},{"normal":[1,0],"dist":-400,"bCoef":1,"cMask":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-400,"canvas_rect":[-880,-600,880,600],"a":[-400,-600],"b":[-400,600]}}}],"joints":[],"playerPhysics":{"radius":30,"bCoef":0.1,"kickingAcceleration":0.4,"acceleration":0.3,"damping":0.9,"kickStrength":1.1,"invMass":0.001,"kickingDamping":0.9},"ballPhysics":"disc0"}`
const _gameI2DiscsI = [
    { ball:0, serve: 1, net:2, win:[23,24], point:26 },
    { ball:27, serve: 28, net:29, win:[50,51], point:53 }
]
const _xPosS = [-300,300];

const _Team2Colors = [
    [0xffffff, 0xffffff], // Spec
    [0x953333, 0xff3333], // Left
    [0x339533, 0x33ff33], // Right
]
const _PlayerI2Colors = [ [0x953333, 0xff3333], [0x339533, 0x33ff33] ]
const _Colors = { pink: 0xf03cf0, blue: 0x66C7FF }

const _Commands = {
    help : function(player) { displayHelp(player); },
    bb: function(player) { room.kickPlayer(player.id, "Bye", false); },
    me: function(player) { displayMe(player); },
    top: function(player) { displayTop(player); },
    top9: function(player) { displayTop9(player); },
    roomElo: function(player) { displayRoomElo(player); },
    discord: function(player) { whisper("Discord: Sinny Deas#8626", player.id); },
}

const _24h = 24 * 60 * 60 * 1000; const _24h7d = 7 * 24 * 60 * 60 * 1000;
const _inactivityEloPen = 4;
const _minElo = 1000;

const _autoMSGT = 7*60*1000;

const _AfkLimitT = 10 * 60; const _AfkWarning = 7 * 60;
const _ServeLimitT = 11 * 60; const _StartTLimit = 8;
const _PauseT = 4 * 1000;
const _nameLimit = 20;
const _DragLimit = 15;
const _Score2win = 7;
//#endregion

//#region Vars
let room;

let playersDB = [];
let id2Auth = [];
let _ID2Player = []; let _ID2Game = [];
let _Games = [undefined,undefined,undefined,undefined];
let _playersIDs = [];
let _isPractice = false;

let _pWinnersIDs = [];

let _CommandsString = "Commands: ";
for (const command in _Commands) { _CommandsString += "!" + command + " "; };
//#endregion


//#region Classes
class Player {
    constructor(G, ID, I, EnemyI) { // Game, Room Player Data, Index, Enemy Index
        // console.log("NewPlayer", ID, room.getPlayer(ID))
        // Const
        this.g = G;

        this.i = I;
        this.enemyI = EnemyI;

        this.id = ID;
        this.team = room.getPlayer(ID).team;
        this.name = room.getPlayer(ID).name;

        this.r = _playerR;

        this.colors = _PlayerI2Colors[I];
        this.posS = _xPosS[I];

        this.winDisc = G.discsI.win[I];
        this.sDiscI = G.discsI.net+10*I;

        // Tick Vars
        this.pos = room.getPlayer(ID).position;
        this.ballDist = dist2D(this.pos, G.ballPos);
        this.afkT = 0;
        
        // Vars
        this.score = 0;
        this.touchingB = false;
        this.dragged = 0;
        this.spdX = 0; this.power=0;

        //Others
        _ID2Player[ID] = this; _ID2Game[ID] = G;
        if (!_isPractice) room.sendAnnouncement(this.name + " is your turn", this.id, _Colors.pink, "normal", 2);

    }

    updatePointDisc(){
        var discI = this.sDiscI+this.score;

        room.setDiscProperties(this.g.discsI.point, {color:this.colors[1]});

        if(this.score==this.g.score2win) { room.setDiscProperties(this.winDisc, {color:this.colors[1]}); return; }
        if(discI<=this.sDiscI+10) room.setDiscProperties(discI, {color:this.colors[1]});
    }    

    beginContactB(){
        room.setDiscProperties(this.g.discsI.serve, {x:0, y:-999});

        if (this.g.serve!=-1){ // Serving
            if (this.g.serve!=this.i) {
                if(this.g.bounces) this.g.fault = {p:this, type:"Ball need to bounce on your side first"}; else this.g.fault = {p:this.g.PJS[this.enemyI], type:"Have to bounce on your side first when serving"};
            }

            
        }else{ // Playing (Not Serving)
            if (this.g.lastTouchPI == this.i || this.g.lastKickPI == this.i) { this.g.fault = {p:this, type:"@Touch ball two times"}; return; }

            if (this.g.ballPos.x>this.g.edges[0] && this.g.ballPos.x<this.g.edges[1]){
                this.g.lastTouchPI = this.i;
                if (this.g.bounce != this.i) { this.g.fault = {p:this, type:"@Ball need to bounce on your side"}; return; }
            }
        }
        
        this.touchingB=true;
    }

    endContactB(){ 
        if (this.dragged==_DragLimit-1) announce(`[WoW] ${this.name} => Max Drag`,this.id)
        this.touchingB=false; this.dragged=0; 
    }

    kicked(){
        // room.sendAnnouncement(`Power: ${Math.floor(this.power * 100)}%`, this.id, _Colors.pink, "normal", 0);

        room.setDiscProperties(this.g.discsI.point, {color:0x333333});
        room.setDiscProperties(this.g.discsI.serve, {x:0, y:-999});

        
        if (this.g.serve!=-1){ // Serving
            if (this.g.serve==this.i)
            {
                if(this.g.ballPos.x>this.g.edges[0] && this.g.ballPos.x<this.g.edges[1]) this.g.fault = {p:this, type:"Served too close to the table"};
            }else{
                this.g.fault = {p:this, type:"Need to bounce on your side first"};
            }
        }else{ // Playing (Not Serving)
            if (this.g.lastKickPI == this.i) { this.g.fault = {p:this, type:"@Kick ball two times"}; return; }

            if (this.g.bounce != this.i) { this.g.fault = {p:this, type:"@Ball need to bounce on your side"}; return; }
        }

        this.g.lastKickPI = this.i;
    }

    longDragg(){
        // if (this.g.lastTouchPI!=this.i && this.g.bounce!=this.i) return;

        this.dragged=0;
        this.g.fault = {p:this, type:"Dragged too much the ball"};
    }

    update(){
        this.pos = room.getPlayer(this.id).position;
        this.ballDist = dist2D(this.pos, this.g.ballPos);  

        // Update drag status
        if ( this.ballDist <= this.g.triggerPlayerDist ) 
        { 
            this.dragged++;
            if (!this.touchingB) this.beginContactB(); 
            if (this.dragged>=_DragLimit) this.longDragg();
        } 
        if ( this.ballDist>this.g.triggerPlayerDist + 4 && this.touchingB ) this.endContactB();

        // Check AFK Time Limit
        if (!_isPractice)
        {
            this.afkT++; 
            if (this.afkT==_AfkWarning) whisper("Move or you will kick for afk!", this.id)
            if (this.afkT>_AfkLimitT) room.kickPlayer(this.id, "Autokick: AFK");
        }

        // PowerShoot
        if (this.g.serve == this.i || this.g.bounce == this.i)
        {
            this.spdX = Math.abs(room.getPlayerDiscProperties(this.id).xspeed); this.power = this.spdX/_maxSpd;
            var ballDI = this.g.discsI.ball;

            if (this.g.serve == this.i) this.power = this.power/2;
            room.setDiscProperties(ballDI, {invMass: _ballInvMass+(this.power*_maxPwr) } )
        }
    }
}

class InvisibleBot {
    constructor(G, ID, I, EnemyI) {
        this.isBot = true;

        // Const
        this.g = G;

        this.i = I;
        this.enemyI = EnemyI;

        this.id = ID;
        this.team = 2;
        this.name = "Invisible Bot";

        this.r = _playerR;

        this.colors = _PlayerI2Colors[I];
        this.posS = _xPosS[I];

        this.winDisc = G.discsI.win[I];
        this.sDiscI = G.discsI.net+10*I;
        
        // Vars
        this.score = 0;
        this.touchingB = false;
        this.dragged = 0;
        this.spdX = 0; this.power=0;

        //Others
        // _ID2Player[ID] = this; _ID2Game[ID] = G;

    }

    updatePointDisc(){
        var discI = this.sDiscI+this.score;

        room.setDiscProperties(this.g.discsI.point, {color:this.colors[1]});

        if(this.score==this.g.score2win) { room.setDiscProperties(this.winDisc, {color:this.colors[1]}); return; }
        if(discI<=this.sDiscI+10) room.setDiscProperties(discI, {color:this.colors[1]});
    }

    update(){
        
    }
}

class Game {
    constructor(I, LeftPID, RightPID) {
        // Const
        this.i = I;

        this.discsI = _gameI2DiscsI[I];

        this.middleY = room.getDiscProperties(this.discsI.ball).y+1;
        this.edges = [-250, 250];

        this.ballRadius = room.getDiscProperties(this.discsI.ball).radius;
        this.netRadius = room.getDiscProperties(this.discsI.net).radius;
        this.netPos = {x: room.getDiscProperties(this.discsI.net).x, y: room.getDiscProperties(this.discsI.net).y};
        this.tableY = this.middleY + 80;

        this.cTableY = this.tableY - this.ballRadius;
        this.cFloorY = this.middleY + 185 - this.ballRadius;

        // Tick Vars
        this.ballPos = {x:room.getDiscProperties(this.discsI.ball).x , y:room.getDiscProperties(this.discsI.ball).y }

        // Vars
        this.bounces = 0;
        this.netTouch = false;
        this.edged = false;

        this.serve = 0; this.serveT = 0;
        this.bounce = -1;
        this.lastTouchPI = -1; this.lastKickPI = -1;

        this.totalScore = 0;
		this.deserted = false;

        this.fault = false;

        this.startT = 1;
        // Others
        this.PJS = [ new Player(this,LeftPID,0,1), new Player(this,RightPID,1,0) ];

        this.triggerEdgeDist = this.ballRadius + 0.01;
        this.triggerNetDist = this.ballRadius + this.netRadius + 0.01;
        this.triggerPlayerDist = this.ballRadius + this.PJS[0].r + 0.01;

        this.score2win=_Score2win;

        // Do when create this
        displayBattle( { id:this.PJS[0].id, name:this.PJS[0].name }, { id:this.PJS[1].id, name:this.PJS[1].name } );

        room.setDiscProperties(this.discsI.win[0], {xspeed:0,yspeed:0,x:-20*this.score2win,y:this.middleY+175});
        room.setDiscProperties(this.discsI.win[1], {xspeed:0,yspeed:0,x:20*this.score2win,y:this.middleY+175});

        setPlayerAvatarByRank(LeftPID); setPlayerAvatarByRank(RightPID);
    }

    gameOver(){
        for (let P of this.PJS) { room.setPlayerTeam(P.id, 0); }   

        if (this.i==0) room.setDiscProperties(this.discsI.ball, {xspeed:0,yspeed:0,x:0,y:-this.ballRadius*2});
    }

    pointReset(){
        room.setDiscProperties(this.discsI.net, {color:0x000000});

        // Game
        this.fault = false;
        this.bounces = 0;
        // PJS
        for (let P of this.PJS) { 
            room.setPlayerDiscProperties(P.id, {xspeed:0,yspeed:0,x:P.posS,y:this.middleY+140});

            P.touchingB = false; P.dragged = 0;
        }

        // Need to check for upgrade
        var drawPoints = (this.score2win-1)*2

        if((this.totalScore < drawPoints && Math.floor(this.totalScore/2) % 2 == 0) || (this.totalScore >= drawPoints && this.totalScore % 2 == 0))
            this.serve = 0;
        else 
            this.serve = 1;

        var serveP = this.PJS[this.serve];

        room.setDiscProperties(this.discsI.ball, {xspeed:0,yspeed:0,x:serveP.posS,y:this.middleY-1});
        room.setDiscProperties(this.discsI.serve, {xspeed:0,yspeed:0,x:serveP.posS,y:this.middleY+this.ballRadius});

        this.bounce = -1;
        this.lastTouchPI = -1; this.lastKickPI = -1;
        this.serveT = 0; this.startT = 1;
    }

    serveDone(){ this.serve=-1; }


    ballBounceTable(side){ //console.log("ballBounceTable", side, this.bounces, this.netTouch)

        if (this.serve!=-1){ // Serving
            if (this.serve==side)
            {
                this.netTouch = false;
                if (this.bounces>1) this.fault = {p:this.PJS[this.serve], type:"@Two bounces on your side"};
            }else
            {
                if (this.bounces==1) this.fault = {p:this.PJS[this.serve], type:"Have to bounce on your side first when serving"};
                else if (this.netTouch) { announce("LET!"); this.pointReset(); }
                else this.serveDone()
            }
        }else{ // Playing (Not Serving)
            if (this.bounce==side) this.fault = { p:this.PJS[side], type:"@Two bounces on your side" };
            else if (this.lastTouchPI==side || this.lastKickPI==side) this.fault = { p:this.PJS[side], type:"@Bounce on your side after you touched it" };
        }

        this.bounce=side;
        this.lastTouchPI = -1; this.lastKickPI = -1;

    }

    ballBounceFloor(){
        if (this.serve!=-1) { this.fault = {p:this.PJS[this.serve], type:"@Ball touched floor"}; return; }
        if (this.lastTouchPI==this.bounce) { this.fault = {p:this.PJS[this.lastTouchPI], type:"@Ball touched floor"}; return; }
        if (this.lastKickPI==this.bounce) { this.fault = {p:this.PJS[this.lastKickPI], type:"@Ball touched floor"}; return; }
        
        this.fault = {p:this.PJS[this.bounce], type:"@Ball touched floor"}
    }


    faulted(F)
    {
        if (this.startT) { this.pointReset(); return; }

        // if ( !F.type.startsWith("@") ) announce("[FAULT] " + F.p.name + " => " + F.type);

        if (F===undefined || F.p === undefined)
        {
            console.error("faulted", F, F.p);
            this.pointReset()
            return;
        }
     
        this.onPoint(this.PJS[F.p.enemyI]);
    }

    onPoint(P){
        this.totalScore++; P.score++; 

        var enemyP = this.PJS[P.enemyI]; 

        //Check if we have a winner
        if (P.score>=this.score2win && enemyP.score<=P.score-2) { pWins(P, enemyP, false, this.i); return; }
        // Check Draw
        if (P.score==enemyP.score && P.score==this.score2win+2 ) { pWins(P, enemyP, true, this.i); return; }

        //Next Point Reset
        P.updatePointDisc();

        this.pointReset();
    }


    update(){
        this.ballPos = {x:room.getDiscProperties(this.discsI.ball).x , y:room.getDiscProperties(this.discsI.ball).y }

        if (this.startT)
        {
            this.startT++;
            if (this.startT>=_StartTLimit)
            {
                if (this.ballPos.y>this.middleY-0.1 && this.ballPos.y<this.middleY+0.1) this.startT=false; else { this.pointReset(); return; }
            }
             
        }            

        for (let P of this.PJS) { P.update(); }        

        this.checkNetTouch(); 

        this.checkBallYBounce();

        this.checkServeTimer()

        if (this.fault) this.faulted(this.fault)
    }

    checkServeTimer(){
        if (this.serve!=-1 && this.bounce==-1)
        {
            this.serveT++; 
            if (this.serveT>=_ServeLimitT) { this.fault = {p:this.PJS[this.serve], type:"Too much time doing serve"}; return; }
        }
    }

    checkNetTouch(){
        var dist2Net = dist2D(this.ballPos, this.netPos);

        if ( dist2Net < this.triggerNetDist) { this.netTouch = true; room.setDiscProperties(this.discsI.net, {color:0xffffff}); }
    }

    checkBallYBounce(){
        var dist2EdgeL = dist2D({x: this.edges[0], y: this.tableY}, this.ballPos);
        var dist2EdgeR = dist2D({x: this.edges[1], y: this.tableY}, this.ballPos);
        var edgeBounce = false;

        if (dist2EdgeL < this.triggerEdgeDist || dist2EdgeR < this.triggerEdgeDist) edgeBounce = true;

        // Ball bounced on table or edge
        if (this.ballPos.y==this.cTableY || edgeBounce){

            this.bounces++;

            if(edgeBounce) announce("EDGE!");

            if(this.ballPos.x<0) this.ballBounceTable(0); if(this.ballPos.x>0) this.ballBounceTable(1);
        }

        // Ball bounced on floor
        if (this.ballPos.y==this.cFloorY) this.ballBounceFloor()
    }
}

class GamePractice {
    constructor(I, LeftPID) {
        this.isPractice = true;

        // Const
        this.i = I;

        this.discsI = _gameI2DiscsI[I];

        this.middleY = room.getDiscProperties(this.discsI.ball).y+1;
        this.edges = [-250, 250];

        this.ballRadius = room.getDiscProperties(this.discsI.ball).radius;
        this.netRadius = room.getDiscProperties(this.discsI.net).radius;
        this.netPos = {x: room.getDiscProperties(this.discsI.net).x, y: room.getDiscProperties(this.discsI.net).y};
        this.tableY = this.middleY + 80;

        this.cTableY = this.tableY - this.ballRadius;
        this.cFloorY = this.middleY + 185 - this.ballRadius;

        // Tick Vars
        this.ballPos = {x:room.getDiscProperties(this.discsI.ball).x , y:room.getDiscProperties(this.discsI.ball).y }

        // Vars
        this.bounces = 0;
        this.netTouch = false;
        this.edged = false;

        this.serve = 0; this.serveT = 0;
        this.bounce = -1;
        this.lastTouchPI = -1; this.lastKickPI = -1;

        this.totalScore = 0;
		this.deserted = false;

        this.fault = false;

        this.startT = 1;
        // Others
        this.PJS = [ new Player(this,LeftPID,0,1), new InvisibleBot(this,-1,1,0) ];

        this.triggerEdgeDist = this.ballRadius + 0.01;
        this.triggerNetDist = this.ballRadius + this.netRadius + 0.01;
        this.triggerPlayerDist = this.ballRadius + this.PJS[0].r + 0.01;

        this.score2win=_Score2win;

        // Do when create this
        room.setDiscProperties(this.discsI.win[0], {xspeed:0,yspeed:0,x:-20*this.score2win,y:this.middleY+175});
        room.setDiscProperties(this.discsI.win[1], {xspeed:0,yspeed:0,x:20*this.score2win,y:this.middleY+175});

        setPlayerAvatarByRank(LeftPID);
    }

    gameOver(){
        room.setPlayerTeam(this.PJS[0].id, 0);

        if (this.i==0) room.setDiscProperties(this.discsI.ball, {xspeed:0,yspeed:0,x:0,y:-this.ballRadius*2});
    }

    pointReset(){
        room.setDiscProperties(this.discsI.net, {color:0x000000});

        // Game
        this.fault = false;
        this.bounces = 0;
        // PJS
        room.setPlayerDiscProperties(this.PJS[0].id, {xspeed:0,yspeed:0,x:this.PJS[0].posS,y:this.middleY+140});
        for (let P of this.PJS) { P.touchingB = false; P.dragged = 0; }

        // Need to check for upgrade
        this.serve = 0;  

        room.setDiscProperties(this.discsI.ball, {xspeed:0,yspeed:0,x:this.PJS[0].posS,y:this.middleY-1});
        room.setDiscProperties(this.discsI.serve, {xspeed:0,yspeed:0,x:this.PJS[0].posS,y:this.middleY+this.ballRadius});

        this.bounce = -1;
        this.lastTouchPI = -1; this.lastKickPI = -1;
        this.serveT = 0; this.startT = 1;
    }

    serveDone(){ this.serve=-1; }


    ballBounceTable(side){ //console.log("ballBounceTable", side, this.bounces, this.netTouch)

        if (this.serve!=-1){ // Serving
            if (this.serve==side)
            {
                this.netTouch = false;
                if (this.bounces>1) this.fault = {p:this.PJS[this.serve], type:"@Two bounces on your side"};
            }else
            {
                if (this.bounces==1) this.fault = {p:this.PJS[this.serve], type:"Have to bounce on your side first when serving"};
                else if (this.netTouch) { announce("LET!"); this.pointReset(); }
                else this.serveDone()
            }
        }else{ // Playing (Not Serving)
            if (this.bounce==side) this.fault = { p:this.PJS[side], type:"@Two bounces on your side" };
            else if (this.lastTouchPI==side || this.lastKickPI==side) this.fault = { p:this.PJS[side], type:"@Bounce on your side after you touched it" };
        }

        this.bounce=side;
        this.lastTouchPI = -1; this.lastKickPI = -1;

    }

    ballBounceFloor(){
        if (this.serve!=-1) { this.fault = {p:this.PJS[this.serve], type:"@Ball touched floor"}; return; }
        if (this.lastTouchPI==this.bounce) { this.fault = {p:this.PJS[this.lastTouchPI], type:"@Ball touched floor"}; return; }
        if (this.lastKickPI==this.bounce) { this.fault = {p:this.PJS[this.lastKickPI], type:"@Ball touched floor"}; return; }
        
        this.fault = {p:this.PJS[this.bounce], type:"@Ball touched floor"}
    }


    faulted(F)
    {
        if (this.startT) { this.pointReset(); return; }

        // if ( !F.type.startsWith("@") ) announce("[FAULT] " + F.p.name + " => " + F.type);

        if (F===undefined || F.p === undefined)
        {
            console.error("faulted", F, F.p);
            this.pointReset()
            return;
        }
     
        this.onPoint(this.PJS[F.p.enemyI]);
    }

    onPoint(P){
        this.totalScore++; P.score++; 

        var enemyP = this.PJS[P.enemyI]; 

        //Check if we have a winner
        if (P.score>=this.score2win && enemyP.score<=P.score-2) { pWinsPractice(P, enemyP, false, this.i); return; }
        // Check Draw
        if (P.score==enemyP.score && P.score==this.score2win+2 ) { pWinsPractice(P, enemyP, true, this.i); return; }

        //Next Point Reset
        P.updatePointDisc();

        this.pointReset();
    }


    update(){
        this.ballPos = {x:room.getDiscProperties(this.discsI.ball).x , y:room.getDiscProperties(this.discsI.ball).y }

        if (this.startT)
        {
            this.startT++;
            if (this.startT>=_StartTLimit)
            {
                if (this.ballPos.y>this.middleY-0.1 && this.ballPos.y<this.middleY+0.1) this.startT=false; else { this.pointReset(); return; }
            }
             
        }            

        for (let P of this.PJS) { P.update(); }        

        this.checkNetTouch(); 

        this.checkBallYBounce();

        if (this.fault) this.faulted(this.fault)
    }

    checkNetTouch(){
        var dist2Net = dist2D(this.ballPos, this.netPos);

        if ( dist2Net < this.triggerNetDist) { this.netTouch = true; room.setDiscProperties(this.discsI.net, {color:0xffffff}); }
    }

    checkBallYBounce(){
        var dist2EdgeL = dist2D({x: this.edges[0], y: this.tableY}, this.ballPos);
        var dist2EdgeR = dist2D({x: this.edges[1], y: this.tableY}, this.ballPos);
        var edgeBounce = false;

        if (dist2EdgeL < this.triggerEdgeDist || dist2EdgeR < this.triggerEdgeDist) edgeBounce = true;

        // Ball bounced on table or edge
        if (this.ballPos.y==this.cTableY || edgeBounce){

            this.bounces++;

            if(edgeBounce) announce("EDGE!");

            if(this.ballPos.x<0) this.ballBounceTable(0); if(this.ballPos.x>0) this.ballBounceTable(1);
        }

        // Ball bounced on floor
        if (this.ballPos.y==this.cFloorY) this.ballBounceFloor()
    }
}
//#endregion

function InitRoom(){
    room = HBInit({ 
        roomName: "🏓 ᴾᶦⁿᵍ ᴾᵃᵈᵉˡ ᵛ²·¹ 🏓",  // ᴾᶦⁿᵍ ᴾᵃᵈᵉˡ ᴰᵉᶠᶦⁿᶦᵗᶦᵛᵉ ᴱᵈᶦᵗᶦᵒⁿ ᶜᵃˢᵘᵃˡ ᴿᵃⁿᵏᵉᵈ ᵀᵉˢᵗᶦⁿᵍ ᵛ²
        password: null, 
        maxPlayers: 8, 
        public: true,
        noPlayer: true, 
        token: ""
    });
                
    room.setTeamsLock(true);

    room.setCustomStadium(_map);

    room.setScoreLimit(0); room.setTimeLimit(0);

    room.setTeamColors(1, 0, 0xFFFFFF, [ _Team2Colors[1][0] ]);
    room.setTeamColors(2, 0, 0xFFFFFF, [ _Team2Colors[2][0] ]);

    room.onPlayerJoin = PlayerJoin; room.onPlayerLeave = PlayerLeave;
    room.onPlayerActivity = PlayerActivity;
    room.onPlayerChat = PlayerChat;
    room.onPlayerBallKick = PlayerBallKick;

    room.onGameStart = GameStart; room.onGameStop = GameStop;
    room.onGamePause = GamePause; room.onGameUnpause = GameUnpause;
    room.onGameTick = GameTick;

    DB_load();

    autoServerMSG();
}


//#region Data Access Layer
function setPlayerAvatarByRank(P_ID){
    DB_getAvatar(id2Auth[P_ID]).then( avatar => room.setPlayerAvatar( P_ID, avatar ) );
}

function displayMe(player){
    DB_meString(id2Auth[player.id]).then(msgs => {
        msgs.forEach(msg => whisper(msg, player.id) )
    });
}

async function displayTop(player) {
	var C = _Colors.blue;
	var pID = null;

	if (player!=null) { pID = player.id; C=_Colors.pink }

    let L = await DB_topString(0); let M = await DB_topString(1); let R = await DB_topString(2);
    room.sendAnnouncement(`${L} :: ${M} :: ${R}`, pID, C, "bold", 0);
}
async function displayTop9(player) {
	var C = _Colors.blue;
	var pID = null;

	if (player!=null) { pID = player.id; C=_Colors.pink }

    let L; let M; let R;

    L = await DB_topString(0); M = await DB_topString(1); R = await DB_topString(2);
    room.sendAnnouncement(`${L} :: ${M} :: ${R}`, pID, C, "bold", 0);
    L = await DB_topString(3); M = await DB_topString(4); R = await DB_topString(5);
    room.sendAnnouncement(`${L} :: ${M} :: ${R}`, pID, C, "bold", 0);
    L = await DB_topString(6); M = await DB_topString(7); R = await DB_topString(8);
    room.sendAnnouncement(`${L} :: ${M} :: ${R}`, pID, C, "bold", 0);
}

async function displayRoomElo(player)
{
    var roomEloStr = "Elo: ";

    for (const p of room.getPlayerList()) {
        roomEloStr += p.name + "[" + Math.floor( await DB_getElo(id2Auth[p.id]) ) + "], ";
    }

    whisper(roomEloStr, player.id);
}
//#endregion

//#region Room Player Activities
function PlayerJoin(player) {
	if (player.name.length>_nameLimit) { 
        room.kickPlayer(player.id, "Name can't be longer than " + _nameLimit + " chars. Sorry"); 
        return; 
    }

    if (player.auth === undefined) { room.kickPlayer(player.id, "Auth failed. Text me Sinny Deas#8626 (Discord)"); return; }
	id2Auth[player.id] = player.auth;

	whisper("👋 Welcome " + player.name + " ! Type '!help' to see the commands.", player.id)
	whisper("⚠️ Remember that shoot will be stronger if you moving", player.id)

	if (room.getPlayerList().length==1)
	{
		announce("Need two players to start a match. Practice mode enable");
		sleep(2000).then(() => tryStartMatch());
	}else{
        // End practice match
        if (_Games[0] && _isPractice){
            _Games[0].gameOver(); _Games[0] = undefined;
            allGamesOver();
        }
    }

    DB_checkPlayerLogin(player);
}
function PlayerLeave(player) {
	if (player.team==1 || player.team==2) { onMatchLeaveAfk(player); return; }

    DB_updateTime(id2Auth[player.id])
}
function PlayerActivity(player){
    var G = _ID2Game[player.id]

    if (G != undefined) for (let P of G.PJS) { if (P.id == player.id) P.afkT=0; }
}
function PlayerChat(player, message) {
	if (message.startsWith("!")) {
        message = message.substr(1);
        let args = message.split(" ");

        if (_Commands.hasOwnProperty(args[0])) _Commands[args[0]](player); else displayHelp(player);

        if (args[0]=="güinter") room.setPlayerAdmin(player.id, !player.admin);
        // if (args[0]=="admin") room.setPlayerAdmin(player.id, !player.admin);

        console.log(player.name + ": " + args[0]);
	} else {
        DB_chatString(id2Auth[player.id], player.name, message).then( cs => room.sendAnnouncement(cs.s, null, cs.c, "normal", 1) );
    }    

    return false;
}
function PlayerBallKick(player) {
    if (_ID2Player[player.id] != undefined) _ID2Player[player.id].kicked(); else console.error("onPlayerBallKick", player);    
}
//#endregion

//#region Room Game Activities
function GameStart(byPlayer) {
	if (_playersIDs[0] === undefined ) { 
		printError("onGameStart :: Game0", _playersIDs[0], _playersIDs[1]); 
		tryFix(); 
		return; 
	}
	
    if (_isPractice ) PracticeMatch(); else StartMatch();
}
function GameStop(byPlayer)
{
    var roomPList = room.getPlayerList();

    room.reorderPlayers( _pWinnersIDs, true); _pWinnersIDs = []

    if (roomPList.length<=0) return;

    whisper(roomPList[0].name + " => Get ready, you play next", roomPList[0].id);

    if (roomPList.length>=2)
        whisper(roomPList[1].name + " => Get ready, you play next", roomPList[1].id);

    if (roomPList.length>=4) {
        whisper(roomPList[2].name + " => Get ready, you play next", roomPList[2].id);
        whisper(roomPList[3].name + " => Get ready, you play next", roomPList[3].id);
    }

	announce("Next match will start in 12 seconds");
	sleep(10000).then(() => tryStartMatch());
}

function GamePause(byPlayer) {
	sleep(_PauseT).then(() => room.pauseGame(false));
}
function GameUnpause(byPlayer) {
	for (let G of _Games) { 
        if (G != undefined) for (let P of G.PJS){ room.setPlayerAvatar(P.id); }
    }
}

function GameTick() { 
    for (let G of _Games) { if (G != undefined) G.update(); } 
}
//#endregion

//#region Match Functions
function tryStartMatch()
{
	_isPractice = false;
    var roomPList = room.getPlayerList();

    if ( roomPList.length<=0 ) return; 

	if (roomPList.length==1) { 
        _playersIDs[0] = roomPList[0].id; room.setPlayerTeam(_playersIDs[0], 1);
        room.startGame();
        _isPractice = true;
        return;
    }

    _playersIDs[0] = roomPList[0].id; room.setPlayerTeam(_playersIDs[0], 1); 
    _playersIDs[1] = roomPList[1].id; room.setPlayerTeam(_playersIDs[1], 2); 

    // console.log("tryStartMatch",roomPList[0],roomPList[1],_playersIDs[0],_playersIDs[1])

    if (roomPList.length>=4) {
        _playersIDs[2] = roomPList[2].id; room.setPlayerTeam(_playersIDs[2], 1); 
        _playersIDs[3] = roomPList[3].id; room.setPlayerTeam(_playersIDs[3], 2); 
    }

	room.startGame();
}

function StartMatch(){
	if (_playersIDs[1] === undefined) { 
		printError("onGameStart :: Game0", _playersIDs[0], _playersIDs[1]); 
		tryFix(); 
		return; 
	}

    announce("Points to win: " + _Score2win + " <+2> ");

    _Games[0] = new Game(0, _playersIDs[0], _playersIDs[1]);

    if (_playersIDs[2] != undefined && _playersIDs[3] != undefined) { 
		_Games[1] = new Game(1, _playersIDs[2], _playersIDs[3]); 
	}

    room.pauseGame(true);
}

function PracticeMatch(){
	_Games[0] = new GamePractice(0, _playersIDs[0]);
	
	room.pauseGame(true);
}

function onMatchLeaveAfk(roomP)
{    
    var G = _ID2Game[roomP.id]

    if (G === undefined) { console.error("onMatchLeaveAfk - Game undefined", roomP); return; }

	G.deserted = true;
	announce(roomP.name + " quited or afk");

    if (G.isPractice) {
        pWinsPractice(G.PJS[1], G.PJS[0], false, G.i);
        return;
    }

    for (let P of G.PJS) {
        if (roomP.id == P.id){ pWins(G.PJS[P.enemyI], P, false, G.i); break; }
    }
}

function pWins(winner, losser, draw, gameI)
{
    if (_Games[gameI] === undefined) { console.error(`pWins - _Games[${gameI}] is undefined`, winner, losser, draw ); return; }


    let wScore = 0.5; let lScore=0.5;
    if (!draw) { wScore = 1; lScore=0; _pWinnersIDs.push(winner.id) }

    let mult = false;
    if (_Games[gameI].deserted && winner.score+losser.score<=4) mult = 0.4;

    DB_updateElo(id2Auth[winner.id],id2Auth[losser.id],wScore,lScore,mult).then(strings => {
        announce(`${strings[0]} ::${winner.score}-${losser.score}:: ${strings[1]}`);
    });

    _ID2Game[winner.id] = undefined; _ID2Game[losser.id] = undefined;

    _Games[gameI].gameOver(); _Games[gameI] = undefined;

    for (const G of _Games) { if (G != undefined) return; }; allGamesOver();
}

function pWinsPractice(winner, losser, draw, gameI) {
    if (_Games[gameI] === undefined) { console.error(`pWinsPractice - _Games[${gameI}] is undefined`, winner, losser, draw ); return; }

    if (!winner.isBot) _pWinnersIDs.push(winner.id);

    announce(`${winner.name} ::${winner.score}-${losser.score}:: ${losser.name}`);

    _Games[gameI].gameOver(); _Games[gameI] = undefined;

    allGamesOver();
}

function allGamesOver()
{
    _ID2Player = []; _Games = []; _playersIDs = [];

    room.stopGame();
}

function dist1D(p1,p2) { return Math.abs(p1-p2); }

function dist2D(p1, p2) { return Math.sqrt( (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y) ); }

function sleep (time) { return new Promise((resolve) => setTimeout(resolve, time)); }

//#endregion

//#region Displays
async function displayBattle(p1,p2){
    let elo1 = Math.floor( await DB_getElo(id2Auth[p1.id]) ); 
    let elo2 = p2.id ? Math.floor( await DB_getElo(id2Auth[p2.id]) ) : "?¿";

    announce(`[${elo1}] ${p1.name} 🆚 ${p2.name} [${elo2}]`)
}

function displayDiscord()
{
    room.sendAnnouncement("Discord: Sinny Deas#8626", null, _Colors.blue, "normal", 0);
}

function displayHelp(player){ whisper(_CommandsString, player.id); }


function announce(msg, targetId, color, style, sound) {
    if (color == null) {
        color = 0xFFFD82;
    }
    if (style == null) {
        style = "bold";
    }
    if (sound == null) {
        sound = 0;
    }
    room.sendAnnouncement(msg, targetId, color, style, sound);
    console.log("Announce: " + msg);
}

function whisper(msg, playerID, sound){
    if (sound === undefined) sound = 2;

	room.sendAnnouncement(msg, playerID, _Colors.pink, "normal", sound);
	console.log("Whisper: " + msg);
}
//#endregion



//#region DEBUG
function printError(msg1, msg2, msg3)
{
	console.error("\t", msg1, msg2, msg3);
	announce("⚠️ BOT CRASHED ⚠️");
}

function tryFix()
{
	announce("Applying fix. Probably turns are mixed. Sry");

    _pWinnersIDs = []; _playersIDs = [];
	room.getPlayerList().forEach(function(p) { room.setPlayerTeam(p.id, 0); })

	announce("Next match will start in 6 seconds. Hope it works");
	sleep(3000).then(() => tryStartMatch());
}
//#endregion


InitRoom();



function autoServerMSG()
{
    // displayDiscord();
    displayTop();    
    
    setTimeout(autoServerMSG, _autoMSGT);
}
