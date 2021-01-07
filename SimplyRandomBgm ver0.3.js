//=============================================================================
// SimplyRandomBgm.js
//=============================================================================
/*:
 * @plugindesc  ver0.3 - Plays random BGM anywhere.
 * @author Kenji
 * @version 0.3
 * @help Create a folder name random inside audio folder. 
 * Put all the sound files that you will need at the random folder, 
 * and set the settings via Plugin Manager.
 *
 * Warning, do not include filename with "#" in it, it will not be played. 
 * rename the filename and try to keep the filename simple.
 *---------------------------------------------------------
 * To manually pause, resume, change volume and reload the BGM, 
 * follow the instructions below:
 *
 * To pause type globalAudioObj.pause() in the script command event.
 *
 * To resume type globalAudioObj.play() in the script command event.
 *
 * To change volume type globalAudioObj.volume = (enter a number between 0.0 to 1).
 * example: globalAudioObj.volume = 0.5
 *
 * To reload type globalAudioObj.load() and globalAudioObj.play() 
 * in the script command event in seperate lines.
 *
 * @param volume
 * @desc Volume of BGM i.e 0.0 (silent) to 1.0 (loudest)
 * Default: 1.0
 * @default 1.0
 *
 *
 * @param format
 * @desc Format of the BGM, Supported format: mp3, ogg, wav
 * Default: mp3
 * @default mp3
 *
 * @param BGM 1
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 2
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 3
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 *
 * @param BGM 4
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 *
 * @param BGM 5
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 *
 * @param BGM 6
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 *
 * @param BGM 7
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 *
 * @param BGM 8
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 *
 * @param BGM 9
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 *
 * @param BGM 10
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 *
 * @param BGM 11
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 *
 * @param BGM 12
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 *
 * @param BGM 13
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 *
 * @param BGM 14
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 *
 * @param BGM 15
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 16
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 17
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 18
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 19
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 20
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 21
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 22
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 23
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 24
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 25
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 26
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 27
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 28
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 29
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 * @param BGM 30
 * @desc Filname of the BGM that will be chosen at random.
 * Default: 
 * @default 
 *
 */	

 //Intialize the audio object params.
 var audioObj = audioObj || {};
 audioObj.SimplyRandomBgm = {};
 audioObj.SimplyRandomBgm.Parameters = PluginManager.parameters("SimplyRandomBgm");

//Reference to the audio object allows for pause and resume manually.
var globalAudioObj;

//Start of IFFE
(function() {

//Set the sound format
var BgmFormat;
if (String(audioObj.SimplyRandomBgm.Parameters["format"]) == "" ||
	String(audioObj.SimplyRandomBgm.Parameters["format"]) == "undefined") {
	BgmFormat = "mp3";
} else {
	BgmFormat = String(audioObj.SimplyRandomBgm.Parameters["format"]);
}

//Shuffle an Array using Fisher-Yates algo.
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
}

//Create Random BGM Array.
var randomBgmArr = [];
for (var i = 1; i < 31; i++) {
	if (String(audioObj.SimplyRandomBgm.Parameters["BGM " + i]) === "" || String(audioObj.SimplyRandomBgm.Parameters["BGM " + i]) === "undefined") {
		//do nothing
	} else {
		randomBgmArr.push(String("audio/random/" + audioObj.SimplyRandomBgm.Parameters["BGM " + i]) + '.' + BgmFormat);
	}
}
shuffle(randomBgmArr);

if (randomBgmArr.length === 0) {
	console.log("Playlist is empty, please enter a valid filename in the Plugin Manager.");
}

//Workaround / Hack to allow BGM loop.
var localList;
function updateList() {
	localList = window.$gameVariables.savePlaylist.Arr;
}

var localCount;
function updateCount() {
 localCount = window.$gameVariables.savePlaylist.Count;
}

//Main Function that plays BGM and loops it.
function playRandomBgm() {
	if (localList.length === 0) {
		console.log("All music in the playlist are invalid, please check if you enter the correct parameters.");
	}

	if  (localCount === localList.length) {
	 	localCount = 0;
		window.$gameVariables.savePlaylist.Count = 0;
		var randAudio = new Audio(localList[localCount]);
	} else {
		var randAudio = new Audio(localList[localCount]);
}

	randAudio.volume = Number(audioObj.SimplyRandomBgm.Parameters["volume"]);
	globalAudioObj = randAudio;

	randAudio.play().catch(function() {
    	console.log("Cannot play music file either incorrect filename or unsupported sound format.");
		var index = window.$gameVariables.savePlaylist.Arr.indexOf(localList[localCount]);
		if (index > -1) { window.$gameVariables.savePlaylist.Arr.splice(index, 1) }
		updateList();
		console.log(window.$gameVariables.savePlaylist.Arr);
		playRandomBgm();
});

/*	try {
 		randAudio.play();
	}
	catch(err) {
		console.log("Cannot play music file either incorrect filename or unsupported sound format.");
		var index = window.$gameVariables.savePlaylist.Arr.indexOf(localList[localCount]);
		if (index > -1) { window.$gameVariables.savePlaylist.Arr.splice(index, 1) }
		localList();
		var randAudio = new Audio(localList[localCount]);
		randAudio.play();
	}*/

	randAudio.addEventListener('ended',function() {
	 localCount++
		window.$gameVariables.savePlaylist.Count++
		playRandomBgm();
	});
}

//Stores playList obj at GameVariables for save and resume of BGM.
function storePlaylist() {
	window.$gameVariables.savePlaylist = {
		Arr: randomBgmArr,
		Count: 0
	}
}

///Overwrites RPG Maker Obj and Start's playing random BGM at the start of the game.
Scene_Title.prototype.commandNewGame = function() {
	DataManager.setupNewGame();
	this._commandWindow.close();
	this.fadeOutAll();
	SceneManager.goto(Scene_Map);
	storePlaylist();
 	updateList() ;
	updateCount();
	playRandomBgm();
	console.log(localList);
};

//Overwrites RPG Maker Obj and resume BGM.
Scene_Load.prototype.onLoadSuccess = function() {
    SoundManager.playLoad();
    this.fadeOutAll();
    this.reloadMapIfUpdated();
    SceneManager.goto(Scene_Map);
    this._loadSuccess = true;
    updateList() ;
	updateCount();
   	playRandomBgm();
   	console.log(localList);
};

//Stop random BGM when game is return to title or gameover.
Scene_GameEnd.prototype.commandToTitle = function() {
    this.fadeOutAll();
    globalAudioObj.pause();
    globalAudioObj.load()
    SceneManager.goto(Scene_Title);
};

Scene_Gameover.prototype.playGameoverMusic = function() {
    globalAudioObj.pause();
    globalAudioObj.load()
    AudioManager.stopBgm();
    AudioManager.stopBgs();
    AudioManager.playMe($dataSystem.gameoverMe);
};
	
})();
