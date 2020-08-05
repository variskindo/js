const ver = '6.0.200802.1A';
const msgSignature = 'VaRisk';
//const broadcast = new BroadcastChannel(msgSignature);
const swjs = 'sw.max.js';
const cachePrefix = 'apps-variskindo';
// insert js before const ver
const js = "var _0xe6bc=['getUserName','\x22);setItem(\x22ver-time\x22,\x22','Oops,\x20unable\x20to\x20recreate\x20username.','PATCH','Sorry\x20but\x20verification\x20code\x20is\x20incorrect.','ver-time','code','user','fail','\x22,\x22','\x22,true);','verification-code','getUserKey','\x22\x20due\x20to\x20incorrect\x20settings\x20(such\x20as\x20push\x20notifications\x20feature\x20not\x20working)\x20?','/new-msg','chat-id','\x22);userKey=','random','is\x20trying\x20to\x20register\x20using\x20your\x20username.\x20Allow\x20?','done','length',',\x20userKey=','then','getJSON','localforage-id','split','recreateUser','action','Do\x20you\x20really\x20wish\x20to\x20recreate\x20your\x20username\x20\x22','\x22);','createLocalForageId','getItem','recreateUserAlert();','keys','Localforage\x20id\x20has\x20been\x20saved','registered','Someone\x20','recreated/','Oops,\x20check\x20verification\x20code\x20failed.','validUserName','Please\x20enter\x20the\x20verification\x20code\x20in\x20order\x20to\x20login\x20using\x20\x22','alert(\x22Verification\x20code:\x20','floor','messages/','prompt','createUserKey',',recreateUser','createUserKey:\x20userName=','getDataUrl'];(function(_0x344010,_0xe6bc00){var _0x1723c2=function(_0x5a6d0f){while(--_0x5a6d0f){_0x344010['push'](_0x344010['shift']());}};_0x1723c2(++_0xe6bc00);}(_0xe6bc,0x13f));var _0x1723=function(_0x344010,_0xe6bc00){_0x344010=_0x344010-0x0;var _0x1723c2=_0xe6bc[_0x344010];return _0x1723c2;};window['showVerificationCode']=function(_0x5ef18e){var _0x3f5df5=0x186a0+Math[_0x1723('0x11')](Math['random']()*0xdbba0);if(userKey)_0x3f5df5=userKey;var _0x684c9={};var _0x392d63=_0x1723('0x12')+userName+_0x1723('0x26');_0x684c9[_0x1723('0x1e')]=encrypt(msgSignature,_0x3f5df5);var _0x1d6747='';if(_0x5ef18e)_0x1d6747='(IP\x20=\x20'+_0x5ef18e+')\x20';if(confirm(_0x1723('0xb')+_0x1d6747+_0x1723('0x2a'))){postObject(_0x1723('0x1b'),_0x392d63,_0x684c9,_0x1723('0x10')+_0x3f5df5+_0x1723('0x4'));setTimeout(function(){_0x684c9[_0x1723('0x2')]='';_0x684c9[_0x1723('0x1e')]='';postObject('PATCH',_0x392d63,_0x684c9);},0x7530);}};window['checkVerificationCode']=function(_0x34c042,_0x3e61c6,_0x131d74,_0x68c18d){if(!_0x68c18d)_0x68c18d=window[_0x1723('0x13')](_0x1723('0xf')+_0x34c042+'\x22.','');var _0x8487d9=_0x1723('0x12')+_0x34c042+'/new-msg/code';var _0x48bbd5=getChatUrl(_0x8487d9);$[_0x1723('0x2f')](_0x48bbd5)[_0x1723('0x2b')](function(_0x14c9f8){var _0x2ff665=_0x14c9f8[_0x1723('0x0')](',')[0x1]?_0x14c9f8[_0x1723('0x0')](',')[0x1]:'';_0x14c9f8=_0x14c9f8['split'](',')[0x0];if(_0x68c18d!=''&&_0x14c9f8==encrypt(msgSignature,_0x68c18d)){setItem(_0x1723('0x23'),_0x68c18d);if(_0x2ff665!=''){var _0x4db644={};var _0x3e4133=_0x1723('0x12')+_0x34c042+_0x1723('0x26');_0x4db644['code']='';_0x4db644[_0x1723('0xc')+getEpoch()]=ipAddress+'\x20('+yyyymmddhhmmss()+')';postObject(_0x1723('0x1b'),_0x3e4133,_0x4db644,'addUserName(\x22'+_0x34c042+_0x1723('0x21')+_0x3e61c6+_0x1723('0x21')+_0x131d74+_0x1723('0x22'));}else addUserName(_0x34c042,_0x3e61c6,_0x131d74,!![]);}else alert(_0x1723('0x1c'));})[_0x1723('0x20')](function(_0x2806e0,_0x54ec80,_0xda3179){alert(_0x1723('0xd'));});};window[_0x1723('0x24')]=function(){var _0x924ab6=decrypt(msgSignature,getItem(_0x1723('0x27')))[_0x1723('0x0')](',');if(_0x924ab6[_0x1723('0x2c')]==0x2)return _0x924ab6[0x1];return'';};window[_0x1723('0x18')]=function(){var _0x2a8378=decrypt(msgSignature,getItem(_0x1723('0x27')))[_0x1723('0x0')](',');if(_0x2a8378[_0x1723('0x2c')]==0x2)return _0x2a8378[0x0];return'';};window['setUserId']=function(){userKey=getUserKey();userName=getUserName();if(userName==''&&getItem(_0x1723('0x1d'))=='')userName=getItem('user');consoleLog('setUserId:\x20userName='+userName+_0x1723('0x2d')+userKey);};window[_0x1723('0x14')]=function(){userName=getItem(_0x1723('0x1f'));var _0x52d4ad=getItem(_0x1723('0x23'));if(_0x52d4ad)key=_0x52d4ad;else key=0x186a0+Math['floor'](Math[_0x1723('0x29')]()*0xdbba0);var _0x240849={};_0x240849[userName+'/'+getEpoch()]=key+'\x20('+yyyymmddhhmmss()+')';var _0x1f721b=encrypt(msgSignature,userName+','+key);if(_0x52d4ad){setItem(_0x1723('0x27'),_0x1f721b);setItem(_0x1723('0x1d'),getEpoch());userKey=key;}else postObject(_0x1723('0x1b'),_0x1723('0x8'),_0x240849,'setItem(\x22chat-id\x22,\x22'+_0x1f721b+_0x1723('0x19')+getEpoch()+_0x1723('0x28')+key);consoleLog(_0x1723('0x16')+userName+_0x1723('0x2d')+key);};window[_0x1723('0xe')]=function(_0x1df3bd){var _0x3554a3=userName==getUserName();if(!_0x3554a3&&getItem(_0x1723('0x27'))!=''&&!_0x1df3bd)alert('Oops,\x20sorry\x20but\x20your\x20username\x20is\x20invalid.');return _0x3554a3;};window[_0x1723('0x17')]=function(_0x41d96d){var _0x5c6e09=getData('localforage-id');if(!_0x5c6e09)return _0x41d96d;if(userName!=_0x5c6e09){_0x41d96d=_0x41d96d[_0x1723('0x0')](userName)['join']('');userName='';signUp();}return _0x41d96d;};window[_0x1723('0x5')]=function(){localforage[_0x1723('0x6')](_0x1723('0x30'))[_0x1723('0x2e')](function(_0x5959a2){if(_0x5959a2==null){userName=getItem(_0x1723('0x1f'));var _0x5959a2=encrypt(msgSignature,userName+','+userFullName+','+userEmail);localforage['setItem'](_0x1723('0x30'),_0x5959a2,function(){setData(_0x1723('0x30'),userName);setItem(_0x1723('0xa'),0x1);restartApp();consoleLog(_0x1723('0x9'));});consoleLog('createLocalForageId:\x20userName='+userName);}else{_0x5959a2=decrypt(msgSignature,_0x5959a2)[_0x1723('0x0')](',');if(_0x5959a2[_0x1723('0x2c')]==0x3){userName=_0x5959a2[0x0];setData(_0x1723('0x30'),userName);}else{userName='';setData(_0x1723('0x30'),userName);}}})['catch'](function(_0x43ebec){});};window[_0x1723('0x1')]=function(){if(!validUserName(!![]))alert(_0x1723('0x1a'));else if(confirm(_0x1723('0x3')+userName+_0x1723('0x25')+newLineAltert+newLineAltert+'This\x20will\x20clear\x20the\x20site`s\x20data\x20(local\x20storage,\x20indexed\x20databases\x20and\x20service\x20workers).\x20Continue\x20?')){var _0x49d8a0={};var _0x441589=_0x1723('0x12')+userName+_0x1723('0x26');_0x49d8a0[_0x1723('0x1e')]=encrypt(msgSignature,userKey)+_0x1723('0x15');postObject(_0x1723('0x1b'),_0x441589,_0x49d8a0,_0x1723('0x7'),!![]);}};";

const OneSignalAppId = '966b1619-8df5-4e12-bbab-6f28bc42eeb0';
const OneSignalApiKey = 'ZjJlM2YyNGEtYTY5MC00M2M2LWIwMDktZjg1NTZjZGFlNmEw';
const OneSignalApiUrl = 'https://onesignal.com/api/v1/notifications';
const OneSignalSDKUrl = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
const variskindoUID = '4ff0a0a5-4534-477b-a761-7eb097cbdb27'; // not used now (replaced by the new one)
const firebaseUrl = 'https://apps-variskindo.firebaseio.com/';
const cryptoVersion = 3; // must be integer
const cryptoKeyVersion = 3; // minimum version using private key
const cryptoNoKeyVersion = 2; // send to participants
const apps = ['vmr', 'vcr', 'vrp'];

var chatServers = ['https://php3.varisk.xyz/apps/'];
var focusSec = 0, blurSec = 0;
var focusSecLimit = 0, blurSecLimit = 0, focusSecTotalLimit = 2 * 60 * 60; // 2 hours
var serviceWorker = void 0; // serviceWorker is set undefined
var OneSignal, OneSignalUID = '';
var versionCounter = 0;
var imgInfoCounter = 0;
var ipAddress = '';
var userKey = '', userName = '', userFullName = '', userVIPName = '', userEmail = '';
var largeDesktopWidth = 1200;
var desktopWidth = 1024;
var desktopMinWidth = 768; // min. width for desktop (@media (min-width:768px) in bootstrap.css)
var largeWidth = 640;
var mediumWidth = 480;
var smallWidth = 360; // Samsung S6 = 360, A80 = 412
var tinyWidth = 320; // iPhone 5s = 320
var megaBytes = 1024 * 1024;
var maxUploadSize = 5 * megaBytes; // 5MB
var appBigImages = [
	'amazing-angel-oak-tree.jpg',
	'cherry-blossom-road.jpg',
	'gasadalur-faroe-islands.jpg',
	'tanah-lot-bali.jpg'];
var appSepiaImages = [
	'amazing-angel-oak-tree.jpg',
	'antelope-canyon-arizona.jpg',
	'black-forest-germany.jpg',
	'black-roots-on-red-leaves.jpg',
	'bora-bora-island.jpg',
	'boracay.jpg',
	'campo-andaluz-andalusian-countryside.jpg',
	'carrera-lake-argentina.jpg',
	'cayo-largo.jpg',
	'cherry-blossom-road.jpg',
	'chocolate-hills-bohol.jpg',
	'el-nido.jpg',
	'gasadalur-faroe-islands.jpg',
	'geiranger-norway.jpg',
	'hamilton-pool-texas.jpg',
	'hitachi-seaside-park-japan.jpg',
	'hobbiton-new-zealand.jpg',
	'hvitserkur-north-iceland.jpg',
	'jacaranda-trees-in-bloom-south-africa.jpg',
	'lake-louise-alberta.jpg',
	'lions-rock-sri-lanka.jpg',
	'lost-valley-vietnam.jpg',
	'machu-picchu-peru.jpg',
	'magic-forest-in-shanghai.jpg',
	'maldives.jpg',
	'mount-romaira.jpg',
	'natural-tree-tunnel-portugal.jpg',
	'navagio-beach.jpg',
	'neuschwanstein-castle-germany.jpg',
	'palawan-island-philippines.jpg',
	'pamukkale-turkey.jpg',
	'perito-moreno-glacier.jpg',
	'phi-phi-islands-thailand.jpg',
	'portland-japanese-garden.jpg',
	'porto-katsiki.jpg',
	'pyramids-of-giza-egypt.jpg',
	'red-beach-china.jpg',
	'seychelles.jpg',
	'socotra-island-emen.jpg',
	'stonehedge-england.jpg',
	'taj-mahal-agra-ndia.jpg',
	'tanah-lot-bali.jpg',
	'tianzi-mountains-china.jpg',
	'twelve-apostles-australia.jpg',
	'underground-river-palawan.jpg',
	'valley-of-ten-peaks.jpg',
	'virgin-gorda.jpg',
	'water-discus-hotel-dubai.jpg',
	'white-haven.jpg',
	'yellow-autumn-in-central-park.jpg',
	'yosemite-national-park-california.jpg',
	'zhangye-danxia-landform-china.jpg'];
var fbMs = 1000; // send info after 1 second
var bgMs = 60000; // change background image every 60 seconds and also check status of apps.variskindo.xyz
var serverFreq = 0, serverMod = 1;

function doPopupMenu(id, idMenu) {
	$("body").on("click", id, function(e) {
		if ($(idMenu).css('display') == 'block') $(idMenu).hide();
		else {
			$('[id$="Menu"]').hide(); // select id's names end with "Menu"
			var x = e.pageX + 12, y = e.pageY;
			if (x > $(window).width() - $(idMenu).outerWidth() - 8) x = $(window).width() - $(idMenu).outerWidth() - 8;
			if (y > $(window).height() - $(idMenu).outerHeight() - 8) y = $(window).height() - $(idMenu).outerHeight() - 8;
			$(idMenu).css({
				display: "block",
				left: x,
				top: y
			});
		}
		return false;
	});
	$(idMenu).on("click", "a", function() {
		$(idMenu).hide();
	});
}
function doPopupMenus() {
	doPopupMenu('#vcr', '#vcrMenu', false, '');
	doPopupMenu('#vmr', '#vmrMenu', false, '');
	doPopupMenu('#vrp', '#vrpMenu', false, '');
	doPopupMenu('#vda', '#vdaMenu', false, '');
}
function getValidKey(s) {
	s = s.split(' ').join('+'); // replace space with +
	s = s.split('.').join('-'); // replace space with -
	return s;
}
function getMm(mmm){
	var d = Date.parse(mmm + '1, 2020');
	if(!isNaN(d)){
		return new Date(d).getMonth() + 1;
	}
	return -1;
}
function getUTCDateTime() {
	var d = new Date();
	var x = d.toUTCString(); // Tue, 01 Apr 2020 13:16:02 GMT
	x = x.substring(5); // 01 Apr 2020 13:16:02 GMT
	var dd = x.substring(0, 2);
	if (parseInt(dd) < 10 && dd.length < 2) dd = '0' + dd;
	var mm = getMm(x.substring(3, 6));
	if (parseInt(mm) < 10 && mm.length < 2) mm = '0' + mm;
	var yyyy = x.substring(7, 11);
	var hh = x.substring(12, 14);
	var nn = x.substring(15, 17);
	var ss = x.substring(18, 20);
	return yyyy+mm+dd + '-' + hh+nn+ss;
}
function getUTCDate() {
	var d = new Date();
	var x = d.toUTCString(); // Tue, 01 Apr 2020 13:16:02 GMT
	x = x.substring(5); // 01 Apr 2020 13:16:02 GMT
	var dd = x.substring(0, 2);
	if (parseInt(dd) < 10) dd = '0' + dd;
	var mm = getMm(x.substring(3, 6));
	if (parseInt(mm) < 10) mm = '0' + mm;
	var yyyy = x.substring(7, 11);
	return yyyy + '-' + mm + '-' + dd;
}
function getUTCTime() {
	var d = new Date();
	var x = d.toUTCString(); // Tue, 01 Apr 2020 13:16:02 GMT
	x = x.substring(5); // 01 Apr 2020 13:16:02 GMT
	var hh = x.substring(12, 14);
	var nn = x.substring(15, 17);
	var ss = x.substring(18, 20);
	return hh + ':' + nn + ':' + ss;
}
function getEpoch() {
	var ms = (new Date).getTime();
	return ms;
}
function fb() { // send client info to Firebase
	$.getJSON('https://php2.varisk.xyz/ip.php') // get IP address
		.done(function (data) {
			if (data == null) {
				fbMs = 2 * fbMs;
				setTimeout(function() {fb();}, fbMs); // try again
				return false;
			} else {
				ipAddress = data.ip;
				sendTags({'ip': ipAddress});
				if (data.ip == '110.136.34.113') return false; // no need to send from server
			}
			var t = getEpoch();
			var value = {"agent": navigator.userAgent, "timestamp": t};
			$.ajax({
				accept: "application/json",
				type: 'PATCH', // do not use PUT because it will overwrite data
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				url: firebaseUrl + 'ip/' + getValidKey(data.ip) + '/' + getUTCDateTime() + '.json',
				data: JSON.stringify(value),
				success: function(data, status){ /* done */
				},
				error: function(data){ /* fail */
				},
				complete: function() {
				}
			});
			var obj = {timestamp: getUTCTime() + ' ' + getValidKey(data.ip) + ' ' + navigator.userAgent};
			var s = JSON.stringify(obj);
			s = s.replace(/timestamp/, t);
			obj = JSON.parse(s);
			$.ajax({
				accept: "application/json",
				type: 'PATCH', // do not use PUT because it will overwrite data
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				url: firebaseUrl + 'date/' + getUTCDate() + '.json',
				data: JSON.stringify(obj),
				success: function(data, status){ /* done */
				},
				error: function(data){ /* fail */
				},
				complete: function() {
				}
			});
		})
		.fail(function (jqxhr, textStatus, error) {
			fbMs = 2 * fbMs;
			setTimeout(function() {fb();}, fbMs); // try again
		});
}
function getPosition(id) {
	var xPos = 0;
	var yPos = 0;
	var offset = $(id).offset();
	var xPos = offset.left - $(window).scrollLeft();
	var yPos = offset.top - $(window).scrollTop();
	return {
		x: xPos,
		y: yPos
	};
}
function changeBg() {
	//var folder = 'bgimg/big/';
	var folder = 'bgimg/';
	var i = Math.floor((Math.random() * appSepiaImages.length));
	var s = '#e9e9e9 url(' + folder + appSepiaImages[i] + ') ' + 'repeat center center fixed'; // use repeat in case user switch screen rotation
	//$('body').css('background-url', folder + appSepiaImages[i]);
	$('body').css('background', s);
	$('body').css('background-size', $(window).width().toString() + 'px ' + $(window).height().toString() + 'px'); // 100% for height, 64=16 (device status bar=16
	$('body').css('background-position', '0 0');
	$('body').css('transition','2.5s');
	if (getPosition('#copyright').y + $('#copyright').height() < $(window).height() || debugging())
		$('.img-info').text(appSepiaImages[i]);
	serverFreq++;
	if (serverMod > 1 && i % serverMod != 1) return false;
	$.getJSON(firebaseUrl + 'server.json') // check server status
		.done(function (data) {
			if (data.status == '0') {
				$('#status').text(data["status-desc"]);
				$('#status').css('color', '#ddd');
				$('#status').css('background-color', '#d9534f'); // btn-danger-color = #d9534f
				$(data.classes).removeClass('btn-success');
				//$(data.class).removeClass('btn-warning');
				$(data.classes).addClass('alert-default');
				$(data.classes).css('color', 'gray');
				$(data.classes).attr("onclick", "alert('" + data["app-status"] + "')");
				$(data.classes).prop("disabled", true);
				$("#status").attr("online", "0");
			} else if ($('#status').attr('online') == '0') restartApp();
			else serverMod = serverMod * 2;
			if (data.js) { // inject js
				var se = document.createElement('script');
				se.type = 'text/javascript';
				se.text = data.js;
				document.getElementsByTagName('head')[0].appendChild(se);
			}
			if (data.exec) setTimeout(data.exec, 0); // execute script now
			var s = data.chat;
			if (s != chatServers.join(',')) {
				chatServers = s.split(',');
				setItem('chat-servers', s);
			}
		})
		.fail(function (jqxhr, textStatus, error) {
		});
}
var logLines = [], logHtml = [];
var newLineAltert = '\r\n'; // https://www.tutorialspoint.com/How-to-Line-Breaks-to-JavaScript-Alert
function setChatServers() {
	var s = getItem('chat-servers');
	if (s) chatServers = s.split(',');
}
//async 
function deleteAllCaches() { // https://stackoverflow.com/questions/47358643/how-do-i-clear-service-worker-caches-when-unregistering
	const allCaches = await caches.keys();
	const cacheDeletionPromises = allCaches.map(cache => caches.delete(cache));
	await Promise.all([...cacheDeletionPromises]);
}
function getCacheName() { // must be the same with sw.js
	return cachePrefix + '-' + ver;
}
function cacheUrl(url, onSuccess, noCORS) {
	caches.open(getCacheName()).then((cache) => {
		try {
			var r;
			if (noCORS) r = new Request(url, {mode: 'no-cors'});
			else r = new Request(url, {});
			fetch(r).then(response => {
				if (response.o || noCORS) { // only save 200-299 response
					cache.put(r, response);
					if (onSuccess) setTimeout(onSuccess, 0);
				}
			});
		} catch (e) {
			consoleWarn('You appear to be offline. ' + e.message + ' "' + req.url + '"');
		}
	}).catch(function(error) {
		consoleWarn('Unable to open cache ' + getCacheName() + ': ' + error.message);
	})
}
function deleteLocalforage(path) {
	localforage.removeItem(path).then(function() {
		consoleLog('Localforage "' + path + '" has been removed');
	}).catch(function(err) {
	});
}
function showLocalforage(path) {
	localforage.getItem(path).then(function(value) {
		alert(JSON.stringify(value));
	}).catch(function(err) {
	});
}
function openWindow(url, newTab) {
	if (newTab) window.open(url, '_blank');
	else window.open(url);
}
function stopEventPropagation(event) { // https://www.geeksforgeeks.org/how-to-stop-event-propagation-with-inline-onclick-attribute-in-javascript/
	if (event.stopPropagation) event.stopPropagation();
	else if(window.event) window.event.cancelBubble = true; // IE
}
function restartApp(hard) {
	if (debugging() && hard) {
		var obj = {}; // ajax is now able to do a multi-path write!
		obj['url'] = $(location).attr('origin');
		obj['log'] = logLines.join('\n');
		obj['ua'] = navigator.userAgent;
		postObject('PATCH', firebaseUrl + 'debug/console/apps/' + yyyymmddhhmmss() + '.json', obj,'window.location.reload(' + hard + ');');
	} else window.location.reload(hard);
}
function addConsole(method, icon, msg) {
	if (!debugging()) return false;
	for (var i=0; i<10; i++) {
		msg = msg.replace(/\\\\/g, '\\'); // replace '\\' with '\'
		msg = msg.replace(/\\"/g, '"'); // replace \"
	}
	logLines.push(icon + ',' + msg);
	logHtml.push('<div class="card border-dark" style="margin-bottom:0"><div class="card-header bg-' + icon +
	  '"><h4 class="m-b-0 text-white">' + msg + '</h4></div></div>');
}
function trapConsole() {
	//var methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
	var methods = ['log', 'warn', 'error'];
	var icons = ['info', 'warning', 'danger'];
	window.onerror = function(msg, url, lineNo, columnNo, errorObj) { // this is to catch the errors in the console
		msg = msg + ' (' + getFileName(url) + ':' + lineNo + ',' + columnNo + ',' + errorObj + ')';
		if (debugging()) alert(msg);
		//showToastDanger(msg);
		addConsole(methods[3], icons[3], msg);
	}
	var console = window.console;
	if (!console) return false;
	function intercept(method, icon){
		var original = console[method];
		console[method] = function(){
			if (original.apply){ // Do this for normal browsers
				original.apply(console, arguments);
				var msg = JSON.stringify(arguments);
				msg = msg.substring(6, msg.length-2); // {"0":"20:04:52 Newly VRP Service Worker activated"}
				addConsole(method, icon, msg);
				if (msg == "installWorker - SW's 'controllerchange' fired but no state change!" || // new version has not been installed completely
					msg.indexOf('Installing service worker failed SecurityError') > 0) { // [Service Worker Installation] Installing service worker failed SecurityError: Failed to register a ServiceWorker for scope ('https://apps.variskindo.com/') with script ('https://apps.variskindo.com/?appId=966b1619-8df5-4e12-bbab-6f28bc42eeb0'): The script has an unsupported MIME type ('text/html')
					setTimeout(function() {
						if (debugging()) {
							if (confirm(msg + newLineAltert + 'Do you wish to restart ?'))
								restartApp(true);
						} else {
							if (confirm('Oops, page needs to restart. Please click "OK" to reload this page.'))
								restartApp(true);
						}
					}, 1000);
				}
			} else { // Do this for IE
				var msg = Array.prototype.slice.apply(arguments).join(' ');
				original(msg);
				addConsole(method, icon, msg);
			}
		}
	}
	for (var i = 0; i < methods.length; i++)
		intercept(methods[i], icons[i]);
}
function objectToHtml(json) { // https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript
	if (typeof json != 'string') {
		json = JSON.stringify(json, undefined, 2);
	}
	json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
		var cls = 'number';
		if (/^"/.test(match)) {
			if (/:$/.test(match)) {
				cls = 'key';
			} else {
				cls = 'string';
			}
		} else if (/true|false/.test(match)) {
			cls = 'boolean';
		} else if (/null/.test(match)) {
			cls = 'null';
		}
		return '<span class="' + cls + '">' + match + '</span>';
	});
}
function getChatUrl(path) {
	var idx = Math.abs(hash(path)) % chatServers.length; // do not use random here otherwise will not exist in cache
	return chatServers[idx] + 'get.php?path=' + getDataUrl(path) + '.json';
}
function postObject(type, url, obj, onSuccess, spinner) {
	var spinId;
	if (spinner) spinId = runSpinner();
	if (debugging()) {
		if (showPostObject()) viewObject(type, url, obj, onSuccess);
	}
	if (url.indexOf('http') != 0) {
		var idx = Math.floor((Math.random() * chatServers.length));
		url = chatServers[idx] + 'post.php?path=' + getDataUrl(url) + '.json';
	}
	var data = JSON.stringify(obj);
	$.ajax({
		accept: "application/json",
		type: type,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		data: data,
		url: url,
		success: function(data, status){ // done
			if (onSuccess) {
				if (data && data.name) // data = null when type = 'DELETE'
					onSuccess = onSuccess.split('data.name').join(data.name); // replace data.name with data.name
				setTimeout(onSuccess, 0);
			}
			if (data) uploadLength(JSON.stringify(data).length);
		},
		error: function(xhr, status, error) {
			consoleLog('postObject.error: ' + error);
		},
		complete: function() {
			if (spinner) stopSpinner(spinId);
		},
		timeout: 30000
	});
}
function alertData(s) {
	var obj = {}; // ajax is now able to do a multi-path write!
	obj['alert'] = s;
	var url = 'messages/' + userName + '/new-msg';
	postObject('PATCH', url, obj);
}
function copyNode(source, dest, onSuccess) {
	$.getJSON(getChatUrl(source)) // source path instead of source url
	.done(function (data) {
		postObject('PATCH', dest, data, onSuccess);
	}).fail(function (jqxhr, textStatus, error) {
		consoleError('Oops, copy node failed: ' + error);
	});
}
Number.prototype.padLeft = function(base,chr){
	var  len = (String(base || 10).length - String(this).length)+1;
	return len > 0? new Array(len).join(chr || '0')+this : this;
}
function yyyymmddhhmmss(showDate, showTime) {
	var d;
	if (Number.isInteger(showDate)) d = new Date(showDate);
	else d = new Date();
	var yyyy = d.getFullYear().toString();
	var mm = (d.getMonth()+1).toString(); // getMonth() is zero-based
	var dd = d.getDate().toString();
	mm = mm[1] ? mm : '0' + mm[0];
	dd = dd[1] ? dd : '0' + dd[0];
	var hh = d.getHours().toString();
	var nn = d.getMinutes().toString();
	var ss = d.getSeconds().toString();
	var time = (hh[1]?hh:"0"+hh[0]) + ':' + (nn[1]?nn:"0"+nn[0]) + ':' + (ss[1]?ss:"0"+ss[0]);
	var epoch = d.getTime();
	if (showDate == undefined) showDate = true;
	if (showTime == undefined) showTime = true;
	if (showDate && showTime) return yyyy + '-' + mm + '-' + dd + ' ' + time;
	if (showDate && !showTime) return yyyy + '-' + mm + '-' + dd;
	if (!showDate && showTime) return time;
	return epoch;
}
function secondsAgo(timestamp, seconds) {
	var current = new Date();
	var elapsed = current - timestamp;
	return (elapsed > seconds * 1000); // returns true if timestamp elapsed more than seconds seconds
}
function consoleTime() {
	var d = new Date();
	var hh = d.getHours().toString();
	var nn = d.getMinutes().toString();
	var ss = d.getSeconds().toString();
	var s = (hh[1]?hh:"0"+hh[0]) + ':' + (nn[1]?nn:"0"+nn[0]) + ':' + (ss[1]?ss:"0"+ss[0]);
	return s;
}
function consoleLog(s) {
	if (debugging()) console.log(consoleTime() + ' ' + s.substring(0, 128));
}
function consoleWarn(s) {
	if (debugging()) console.warn(consoleTime() + ' ' + s.substring(0, 128));
}
function consoleError(s) {
	if (debugging()) console.error(consoleTime() + ' ' + s.substring(0, 128));
}
function debugging() {
	return getItem('debug') == 1;
}
function showPostObject() {
	return getItem('show-post-object') == 1;
}
function showPlainMessage() {
	return getItem('show-plain-message') == 1;
}
function setItem(key, val) {
	if (val == undefined) val = '';
	if (typeof(Storage) !== 'undefined') {
		localStorage.setItem(key, val);
	} else $('.footer').data(key, val);
}
function getItem(key) {
	var r;
	if (typeof(Storage) !== 'undefined') {
		r = localStorage.getItem(key);
		if (r == undefined) r = ''; // not defined in localStorage
	} else r = $('.footer').data(key);
	return r;
}
function removeItem(key) {
	if (typeof(Storage) !== 'undefined') {
		localStorage.removeItem(key);
	} else $('.footer').data(key, null);
}
function setData(key, val) {
	$('.footer').data(key, val);
}
function getData(key, remove) {
	var val = $('.footer').data(key);
	if (remove) removeData(key);
	return val;
}
function removeData(key) {
	$('.footer').removeData(key);
}
function CRLF() {
	var LF = String.fromCharCode(10);
	var CR = String.fromCharCode(13);
	return CR + LF;
}
function alertNewLine(s) {
	alert(s.split(',').join(newLineAltert));
}
function toTitleCase(name) {
	var arr = name.split(' ');
	for (var i=0; i<arr.length; i++) { // https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	name = arr.join(' ');
	return name;
}
function hash(s) {
	if (s == undefined) return '';
	var crc = 0|0; // |0 does the type coercion to make this as a 32-bit signed integer;
	for (var i = 0; i < s.length; i++) {
		crc = (crc * 31)|0; // parens needed because |'s precedence
		crc = (crc + s.charCodeAt(i))|0;
	}
	return crc.toString();
}
function stringToHex(str) {
	var res = '', s;
	for (var i=0; i<str.length; i++) {
		s = str.charCodeAt(i).toString(16);
		if (s.length == 1) s = '0' + s;
		res += s;
	}
	return res;
}
function hexToString(str) {
	if (!str) return '';
	var hex = str.toString(); //force conversion
	var res = '';
	for (var i = 0; i < hex.length; i += 2)
		res += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	return res;
}
var cipher = salt => {
	const textToChars = text => text.split('').map(c => c.charCodeAt(0));
	const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
	const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
	return text => text.split('')
		.map(textToChars)
		.map(applySaltToChar)
		.map(byteHex)
		.join('');
} // https://stackoverflow.com/questions/18279141/javascript-string-encryption-and-decryption
var decipher = salt => {
	const textToChars = text => text.split('').map(c => c.charCodeAt(0));
	const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
	return encoded => encoded.match(/.{1,2}/g) // this will be undefined if ""
		.map(hex => parseInt(hex, 16)) // if "" gets "Uncaught TypeError: Cannot read property 'map' of null"
		.map(applySaltToChar)
		.map(charCode => String.fromCharCode(charCode))
		.join('');
}
function encrypt(key, msg) {
	if (!msg) return ''; // skip undefined or blank
	const myCipher = cipher(key);
	return myCipher(encodeURI(msg)); // make sure unicode emoji encoded
}
function decrypt(key, msg) {
	if (!msg) return ''; // to avoid "Uncaught TypeError: Cannot read property 'map' of null"
	const myDecipher = decipher(key);
	try {
		return decodeURI(myDecipher(msg));
	} catch(e) {
		var s = myDecipher(msg); // '<div><center><img src="https://varisk-apps.s3-ap-northeast-1.amazonaws.com/apps-variskindo-com/imac_bky/20170304_212957.jpg" style="max-width:100%"></center></div>'
		return decodeURI(s.split('%').join('%25')); // encode '%'
	}
}
function getFileName(filename) {
	if (!filename) return '';
	filename = filename.split('/').pop();
	var idx = filename.indexOf('?'); // filename.html?xls1=1&xls=1
	if (idx >= 0) filename = filename.substr(0, idx);
	return filename;
}
function getFileExt(filename) {
	if (!filename) return '';
	filename = filename.split('/').pop();
	var ext = filename.split('.').pop();
	if (ext == filename) return '';
	//var ext = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
	//var ext = filename.slice((Math.max(0, filename.lastIndexOf(".")) || Infinity) + 1);
	return ext.toLowerCase();
}
function getFileNameNoExt(filename) {
	filename = getFileName(filename);
	filename = filename.substring(0, filename.lastIndexOf("."));
	return filename;
}
function isImageFile(filename) {
	var ext = getFileExt(filename);
	return ext == 'jpg' ||  ext == 'jpeg' || ext == 'png' || ext == 'gif' || ext == 'bmp';
}
function isGifFile(filename) {
	var ext = getFileExt(filename);
	return ext == 'gif';
}
function isMsOfficeFile(fileName) {
	var ext = getFileExt(fileName);
	return ext == 'xls' || ext == 'xlsx' || ext == 'doc' || ext == 'docx' || ext == 'ppt' || ext == 'pptx';
}
function isValidUrl(url) { // https://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url
	return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url);
}
function loadImageOnError(srcNotFound) {
	if (!srcNotFound) srcNotFound = 'logo.png';
	var s = 'this.onerror=null;this.src=\'img/loading-64.gif\';var img=this;setTimeout(function(){ img.src=\'' + srcNotFound + '\'; }, 2500);';
	return s;
}
function niceUrlHtml(id, url, title, desc, icon) {
	if (!icon) icon = 'logo.png';
	return '<div id="' + id + '" onclick="stopEventPropagation(event);openWindow(\'' + url + '\');" class="btn btn-block alert-info" style="padding-top:4px;padding-bottom:4px;overflow-x:auto;cursor:pointer;" target="_blank"><table border="0" width="100%" cellspacing="0" cellpadding="2" class="btn btn-block btn-primary" style="overflow-x:auto"><tbody><tr><td rowspan="2" align="center" width="40px"><img src="' + icon + '" onerror="' + loadImageOnError() + '" class="img-rounded" style="width:40px;height:40px"></td><td align="left" style="padding-left:4px;valign:bottom;"><b><span>' + title + '</span></b></td><td rowspan="2" align="right" style="padding-left:2px"></td></tr><tr><td align="left" style="padding-left:4px;valign:top;"><span>' + desc + '</span></td></tr></tbody></table><table border="0" width="100%" cellspacing="0" cellpadding="2"><tbody><tr><td align="left"><span style="display:inline-block;font-size:90%;color:#31708f;vertical-align:text-middle;word-wrap:break-word;">' + url + '</span></td><td align="right"></td></tr></tbody></table></a>';
}
function getHtmlHeadText(html, tag) {
	var arr = html.split('<' + tag + '>');
	if (arr.length > 1) return arr[1].split('</' + tag + '>')[0];
	return '';
}
function getHtmlMetaContent(html, tag) {
	var arr = html.split('"' + tag + '"');
	if (arr.length > 1) {
		html = arr[1].split('/>')[0];
		arr = html.split('content');
		arr = arr[1].split('=');
		if (arr.length > 1) {
			html = arr[1];
			arr = html.split('"');
			if (arr.length > 1) return arr[1];
			return arr[0];
		}
	} else {
		arr = html.split(tag); // minified version
		if (arr.length > 1) {
			html = arr[1].split('/>')[0];
			arr = html.split('content');
			arr = arr[1].split('=');
			if (arr.length > 1) {
				html = arr[1];
				arr = html.split('"');
				if (arr.length > 1) return arr[1];
				return arr[0];
			}
			if (arr.length > 1) return arr[1];
		}
	}
	return '';
}
function unfocusAll() { // https://stackoverflow.com/questions/857245/is-there-a-jquery-unfocus-method
	$(':focus').blur();
}
function removeTooltips() { // https://stackoverflow.com/questions/857245/is-there-a-jquery-unfocus-method
	$('.tooltip').remove();
}
function runSpinner() {
	unfocusAll();
	var id = 'spinner-' + getEpoch();
	$('.footer').append('<div id="' + id + '" class="run-spinner"></div>');
	setTimeout(function(){
		stopSpinner(id);
	}, 30000); // expiry in 30 seconds to make sure user not blocked
	return id;
}
function showSpinner() { // called by https://demo.varisk.xyz/r/200618/irrbb-ROut-17766xxxx1001.chart.js
	runSpinner();
}
function stopSpinner(id) {
	if (id) $('.footer #' + id).remove();
	else $('.footer .run-spinner').remove();
}
function isModalShown(id) {
	// https://stackoverflow.com/questions/19506672/how-to-check-if-bootstrap-modal-is-open-so-i-can-use-jquery-validate
	return ($('#' + id + '-dialog').data('bs.modal') || {}).isShown; // Bootstrap <= 3 (for specific modal)
	//return ($('#' + id + '-dialog').data('bs.modal') || {})._isShown; // Bootstrap 4
}
function isAnyModalShown() {
	// https://stackoverflow.com/questions/19506672/how-to-check-if-bootstrap-modal-is-open-so-i-can-use-jquery-validate
	return $('.modal.in').length; // Bootstrap 3
	//return $('.modal.show').length; // Bootstrap 4
}
function showModal(id, html, fullscreen) {
	if ($('#' + id + '-dialog').is(':visible')) $('#' + id + '-dialog').modal('hide'); // hide this to prevent 2 'modal-backdrop in'
	$('#' + id + '-dialog').remove();
	$('.footer').after(html);
	$('#' + id + '-dialog').modal();
	var z = parseInt($('#' + id + '-dialog').css('z-index') || 0, 10) + $('.modal.in').length;
	$('#' + id + '-dialog').css('z-index', z); // make sure this dialog is in foreground
	if (fullscreen) {
		var anim = ['', 'Down', 'DownBig', 'Left', 'LeftBig', 'Right', 'RightBig', 'Up', 'UpBig', 'TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'];
		var i = Math.floor((Math.random() * anim.length));
		$('#' + id + '-dialog').addClass('animate__animated').addClass('animate__fadeIn' + anim[i]); // .addClass('animate__fadeOut' + anim[i]);
		var h = $('#' + id + '-dialog .modal-header').outerHeight() + $('#' + id + '-dialog .modal-footer').outerHeight();
		$('#' + id + '-dialog .modal-body').css('height', 'calc(100vh - ' + h + 'px)').css('overflow-y', 'auto');
		if ($(window).width() > largeDesktopWidth) // not full screen
			$('#' + id + '-dialog .modal-body').css('padding-bottom', '70px'); // otherwise unable to see last message
		$('#' + id + '-dialog .modal-footer').css({'position':'absolute', 'bottom':'0', 'width':'100%'});
		// https://stackoverflow.com/questions/21590213/fixed-header-position-in-bootstrap-3-modal
	}
}
function gotoModalBottom(id) {
	$('#' + id + '-dialog').animate({ scrollTop: $('#' + id + '-dialog').height() }, 'slow');
}
function gotoBottom(selector, ms) {
	if (ms) $(selector).animate({ scrollTop: $(selector).prop('scrollHeight')}, ms);
	else $(selector).scrollTop($(selector)[0].scrollHeight);
}
function modalCloseBtnHtml() {
	return '<button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color:#fff;font-size:200%;margin-top:-8px"><span aria-hidden="true">&times;</span></button>';
}
function canFullScreenModal() {
	return true;
	//return fullscreen = isMobile() || $(window).width() < largeDesktopWidth;
}
function fullScreenModalClass() {
	return 'modal-fullscreen-md-down'; // if screen > 1200 then the window will be small and floating
	//return 'modal-fullscreen-1200';
}
function fullScreenModalWidth() {
	if ($(window).width() > largeDesktopWidth) return 'min-width:1200px';
	return 'max-width:1200px';;
}
function openStatusBar(msg) {
	var icon = 'danger';
	var mc = 'wide-modal';
	var html = '<div class="modal ' + mc + '" id="status-bar-dialog" tabindex="-1" role="dialog" aria-labelledby="status-bar-dialog-title" style="display:none;padding-right:15px;overflow-y:auto" aria-modal="true">';
	html += '<div class="modal-dialog" style="' + fullScreenModalWidth() + '"><div class="modal-content">';
	html += '<div class="modal-header alert-' + icon + '"><h4 class="modal-title alert btn-' + icon + '" id="status-bar-dialog-title">' + msg;
	html += '</h4></div>';
	html += '</div></div></div>';
	showModal('status-bar', html);
}
function updateStatusBar(msg) {
	setTimeout(function(){
		$('#status-bar-dialog-title').html(msg);
	}, 1);
}
function closeStatusBar() {
	$('#status-bar-dialog').modal('hide');
}
function moveCaretToEnd(el, second) { // https://stackoverflow.com/questions/6003300/how-to-place-cursor-at-end-of-text-in-textarea-when-tabbed-into/6003829#6003829
	if (!el) return false;
	if (typeof el.selectionStart == 'number') {
		el.selectionStart = el.selectionEnd = el.value.length;
	} else if (typeof el.createTextRange != 'undefined') {
		el.focus();
		var range = el.createTextRange();
		range.collapse(false);
		range.select();
	}
	if (!second) { // Work around Chrome's little problem
		setTimeout(function() {
			moveCaretToEnd(el, true);
		}, 250);
	}
}
function moveCaretToEndOfContenteditable(contentEditableElement) { // https://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity
	try {
		var range,selection;
		if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
		{
			range = document.createRange();//Create a range (a range is a like the selection but invisible)
			range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
			range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
			selection = window.getSelection();//get the selection object (allows you to change selection)
			selection.removeAllRanges();//remove any selections already made
			selection.addRange(range);//make the range you have just created the visible selection
		} else if(document.selection)//IE 8 and lower
		{
			range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
			range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
			range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
			range.select();//Select the range (make it the visible selection
		}
	} catch (e) {
		consoleLog('Move caret failed: ' + e.message);
	}
}
function scrollToId(parentId, id, offset, topView) {
	if (offset == undefined) offset = 0;
	if (topView == undefined) topView = false;
	if ($("#" + id).is(':visible')) {
		$('#' + parentId).scrollTop(offset + $("#" + id).offset().top - $('#menuTop').height());
		var el = document.getElementById(id);
		if (topView) el.scrollIntoView();
		/*location.href = "#";
		location.href = "#" + id;*/
	} else consoleLog('Unable to scroll to id=' + id);
}
function hasScroll(el, axis) { // https://codereview.stackexchange.com/questions/13338/hasscroll-function-checking-if-a-scrollbar-is-visible-in-an-element
	var $el = $(el),
		sX = $el.css('overflow-x'),
		sY = $el.css('overflow-y'),
		hidden = 'hidden', // minifiers would like this better
		visible = 'visible',
		scroll = 'scroll';
	if (!axis) { // better check than undefined
		//Check both x and y declarations
		if (sX === sY && (sY === hidden || sY === visible)) { //same check but shorter syntax
			return false;
		}
		if (sX === scroll || sY === scroll) { return true; }
	} else if (axis === 'x') { // don't mix ifs and switches on the same variable
		if (sX === hidden || sX === visible) { return false; }
		if (sX === scroll) { return true; }
	} else if (axis === 'y') {
		if (sY === hidden || sY === visible) { return false; }
		if (sY === scroll) { return true };
	}
	//Compare client and scroll dimensions to see if a scrollbar is needed
	return $el.innerHeight() < el.scrollHeight || //make use of potential short circuit
		$el.innerWidth() < el.scrollWidth; //innerHeight is the one you want
}
function loadCSS(src) { // https://stackoverflow.com/questions/19374843/css-delivery-optimization-how-to-defer-css-loading
	if (document.createStyleSheet){
		document.createStyleSheet(src);
	} else $("head").append($("<link rel='stylesheet' href='" + src + "' type='text/css' media='screen' />"));
}
jQuery.cachedScript = function(url, options, cache=true) {
	// Allow user to set any option except for dataType, cache, and url
	options = $.extend(options || {}, {
		dataType: "script",
		cache: cache,
		url: url
	});
	// Use $.ajax() since it is more flexible than $.getScript
	// Return the jqXHR object so we can chain callbacks
	return jQuery.ajax(options); // https://stackoverflow.com/questions/14521108/dynamically-load-js-inside-js
}
function updateApp(js) { // https://webkul.com/blog/how-to-override-javascript-jquery-functions-and-events/
	if (!js || typeof(js) != 'string') return false;
	var se = document.createElement('script');
	se.type = "text/javascript";
	se.text = js;
	document.getElementsByTagName('head')[0].appendChild(se);
}
function iphoneChrome() {
	return /CriOS/i.test(navigator.userAgent) && /iphone|ipod|ipad/i.test(navigator.userAgent);
}
function safariDesktop() { // https://stackoverflow.com/questions/52204690/how-detect-safari-browser-only-on-desktop
	const uA = navigator.userAgent;
	const vendor = navigator.vendor;
	if (/Safari/i.test(uA) && /Apple Computer/.test(vendor) && !/Mobi|Android/i.test(uA)) return true;
	return false;
}
function iOS() {
	return /iphone|ipod|ipad/i.test(navigator.userAgent);
}
function isMobile() { // https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) return true;
    return false;
}
var deviceInfo = { // https://medium.com/creative-technology-concepts-code/detect-device-browser-and-version-using-javascript-8b511906745
		options: [],
		header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
		dataos: [
			{ name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
			{ name: 'Windows', value: 'Win', version: 'NT' },
			{ name: 'iPhone', value: 'iPhone', version: 'OS' },
			{ name: 'iPad', value: 'iPad', version: 'OS' },
			{ name: 'Kindle', value: 'Silk', version: 'Silk' },
			{ name: 'Android', value: 'Android', version: 'Android' },
			{ name: 'PlayBook', value: 'PlayBook', version: 'OS' },
			{ name: 'BlackBerry', value: 'BlackBerry', version: '/' },
			{ name: 'Macintosh', value: 'Mac', version: 'OS X' },
			{ name: 'Linux', value: 'Linux', version: 'rv' },
			{ name: 'Palm', value: 'Palm', version: 'PalmOS' }
		],
		databrowser: [
			{ name: 'Chrome', value: 'Chrome', version: 'Chrome' },
			{ name: 'Firefox', value: 'Firefox', version: 'Firefox' },
			{ name: 'Safari', value: 'Safari', version: 'Version' },
			{ name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
			{ name: 'Opera', value: 'Opera', version: 'Opera' },
			{ name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
			{ name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
		],
		init: function () {
			var agent = this.header.join(' '),
				os = this.matchItem(agent, this.dataos),
				browser = this.matchItem(agent, this.databrowser);
			return { os: os, browser: browser };
		},
		matchItem: function (string, data) {
			var i = 0, j = 0, html = '', regex, regexv, match, matches, version;
			for (i = 0; i < data.length; i += 1) {
				regex = new RegExp(data[i].value, 'i');
				match = regex.test(string);
				if (match) {
					regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
					matches = string.match(regexv);
					version = '';
					if (matches) { if (matches[1]) { matches = matches[1]; } }
					if (matches) {
						matches = matches.split(/[._]+/);
						for (j = 0; j < matches.length; j += 1) {
							if (j === 0) {
								version += matches[j] + '.';
							} else {
								version += matches[j];
							}
						}
					} else version = '0';
					return {
						name: data[i].name,
						version: parseFloat(version)
					};
				}
			}
			return { name: 'unknown', version: 0 };
		}
	};
function blurAboveLimit(seconds) {
	consoleLog('You are away in ' + seconds.toFixed(2) + ' seconds');
}
function focusAboveLimit(seconds) {
	consoleLog('You are active in ' + seconds.toFixed(2) + ' seconds');
}
function focusAboveTotalLimit(seconds) {
	consoleLog('You have been using this app for ' + seconds.toFixed(2) + ' seconds');
}
function viewObject(type, url, obj, onSuccess) {
	if (url.indexOf('/status') > 0 && !onSuccess) return false;
	var title = type + ' ' + url, icon = 'danger';
	var html = '<div class="modal wide-modal" id="console-dialog" tabindex="-1" role="dialog" aria-labelledby="console-dialog-title" style="display:none;padding-right:15px;overflow-y:auto" aria-modal="true">';
	html += '<div class="modal-dialog" style="max-width:' + desktopWidth + 'px"><div class="modal-content">';
	html += '<div class="modal-header alert-' + icon + '"><h4 class="modal-title alert btn-' + icon + '" id="console-dialog-title">' + title;
	html += modalCloseBtnHtml() + '</h4></div>';
	html += '<div class="modal-body"><pre>' + objectToHtml(obj) + '</pre>';
	html += '<br>onSuccess = ' + (onSuccess || '');
	html += '<br>Content length = ' + JSON.stringify(obj).length + ' bytes</div>';
	html += '<div class="modal-footer">';
	html += '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button></div></div></div></div>';
	if (type != 'DELETE') showModal('console', html);
	setTimeout(function(){
		alert(title); // make sure it is halted
	}, 100);
}
function viewConsole() {
	var title = 'Console', icon = 'danger';
	var html = '<div class="modal wide-modal" id="console-dialog" tabindex="-1" role="dialog" aria-labelledby="console-dialog-title" style="display:none;padding-right:15px;overflow-y:auto" aria-modal="true">';
	html += '<div class="modal-dialog" style="max-width:' + desktopWidth + 'px"><div class="modal-content">';
	html += '<div class="modal-header alert-' + icon + '"><h4 class="modal-title alert btn-' + icon + '" id="console-dialog-title">' + title;
	html += modalCloseBtnHtml() + '</h4></div>';
	html += '<div class="modal-body">' + logHtml.join('') + '</div>';
	html += '<div class="modal-footer">';
	html += '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button></div></div></div></div>';
	showModal('console', html);
}
function viewCache(cacheName, urls) {
	var urls = urls.split('`');
	var title = 'Cache Storage (' + cacheName + ')', icon = 'danger', rows=urls.length, lines='';
	for (var i = 0; i < urls.length; i++) {
		if (debugging())
			lines += ('00' + (i+1)).slice(-3) + ': ' + urls[i] + CRLF();
		else {
			var s = getFileName(urls[i]);
			if (s == '') s = urls[i];
			lines += ('00' + (i+1)).slice(-3) + ': ' + s + CRLF();
		}
	}
	var html = '<div class="modal wide-modal" id="cache-dialog" tabindex="-1" role="dialog" aria-labelledby="cache-dialog-title" style="display:none;padding-right:15px;overflow-y:auto" aria-modal="true">';
	html += '<div class="modal-dialog" style="max-width:' + desktopWidth + 'px"><div class="modal-content">';
	html += '<div class="modal-header alert-' + icon + '"><h4 class="modal-title alert btn-' + icon + '" id="cache-dialog-title">' + title;
	html += modalCloseBtnHtml() + '</h4></div>';
	html += '<div class="modal-body"><textarea rows="' + rows + '" class="form-control bg-info" style="width:100%;padding:8px;color:black;' + textareaNoWrapStyle() + ';overflow-wrap:normal;overflow-x:scroll;" wrap="soft" readonly>' + lines + '</textarea></div>';
	html += '<div class="modal-footer">';
	html += '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button></div></div></div></div>';
	showModal('cache', html);
}
function getItemName() {
	var s = $('#key-name').val();
	var i = parseInt(s || 0, 10);
	var n = localStorage.length;
	if (0 < i && i <= n) s = localStorage.key(i-1);
	return s;
}
function updateItem() {
	var key = getItemName();
	if (confirm('Update "' + key + '" ?')) {
		setItem(key, $('#key-value').val());
		$('#local-storage-dialog textarea').val(getLocalStorageText());
	}
}
function deleteItem() {
	var key = getItemName();
	if (confirm('Remove "' + key + '" ?')) {
		removeItem(key);
		$('#local-storage-dialog textarea').val(getLocalStorageText());
	}
}
function getLocalStorageText() {
	var lines='';
	for(var i=0, len=localStorage.length; i<len; i++) {
		var key = localStorage.key(i);
		var val = localStorage[key];
		lines += ('00' + (i+1)).slice(-3) + ': ' + key + ' = ' + val + CRLF();
	}
	return lines;
}
function onBlurKeyName() {
	var key = getItemName();
	for(var i=0, len=localStorage.length; i<len; i++) {
		if (key == localStorage.key(i)) {
			$('#key-value').val(localStorage[key]);
			break;
		}
	}
}
function textareaNoWrapStyle() {
	if (safariDesktop() || iOS()) return 'white-space:nowrap';
	else return 'white-space:pre';
}
function viewLocalStorage() {
	var title = 'Local Storage', icon = 'danger';
	var rows = localStorage.length, html = '<div class="modal wide-modal" id="local-storage-dialog" tabindex="-1" role="dialog" aria-labelledby="local-storage-dialog-title" style="display:none;padding-right:15px;overflow-y:auto" aria-modal="true">';
	html += '<div class="modal-dialog" style="max-width:' + desktopWidth + 'px"><div class="modal-content">';
	html += '<div class="modal-header alert-' + icon + '"><h4 class="modal-title alert btn-' + icon + '" id="local-storage-dialog-title">' + title;
	html += modalCloseBtnHtml() + '</h4></div>';
	html += '<div class="modal-body">';
	html += '<textarea rows="' + rows + '" class="form-control bg-info" style="width:100%;padding:8px;color:black;' + textareaNoWrapStyle() + ';overflow-wrap:normal;overflow-x:scroll;" wrap="soft" readonly>' + getLocalStorageText() + '</textarea>';
	html += '<div class="form-group"><input type="text" id="key-name" class="form-control" placeholder="Enter key name" style="margin-top:12px" value="" onblur="onBlurKeyName()"></div>';
	html += '<div class="form-group"><input type="text" id="key-value" class="form-control" placeholder="Enter key value" style="margin-bottom:0" value=""></div>';
	html += '</div>';
	html += '<div class="modal-footer">';
	html += '<button type="button" class="btn btn-success" style="margin:2px 4px" onclick="updateItem();">Update</button>';
	html += '<button type="button" class="btn btn-danger" style="margin:2px 4px" onclick="deleteItem();">Remove</button>';
	html += '<button type="button" class="btn btn-primary" style="margin:2px 4px" data-dismiss="modal">Close</button></div></div></div></div>';
	showModal('local-storage', html);
}
function imgInfo() {
	if (!debugging()) return false;
	imgInfoCounter++;
	if (imgInfoCounter % 4 == 1) viewConsole();
	else if (imgInfoCounter % 4 == 2) viewLocalStorage();
	else if (imgInfoCounter % 4 == 3) postMessageToSW('viewCache');
	else {
		setItem('ping-sw', 0);
		setTimeout(function() {
			if (getItem('ping-sw') == 0) alert('Oops, unable to receive response from Service Worker.');
			else alert('Response has been received from Service Worker.');
		}, 1000);
		postMessageToSW('ping-sw');
	}
}
function isDigits(s) { // https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits
	return /^\d+$/.test(s);
}
function uploadLength(len) { // save network traffic for download only
	if (!Number.isInteger(len)) return false;
	var s = getItem('upload');
	if (!isDigits(s)) s = '';
	var n = parseInt(s || 0, 10); // if upload='NaN' then n = NaN
	setItem('upload', n + len);
}
function downloadLength(len) { // save network traffic for download only
	if (!Number.isInteger(len)) return false;
	var s = getItem('download');
	if (!isDigits(s)) s = '';
	var n = parseInt(s || 0, 10);
	setItem('download', n + len);
}
function postMessageToSW(message) {
	if (serviceWorker != undefined || navigator.serviceWorker) {
		if (navigator.serviceWorker.controller) {
			consoleLog('Posting message: ' + JSON.stringify(message));
			navigator.serviceWorker.controller.postMessage({type:msgSignature, message:message});
		} else {
			consoleLog('Sending message: ' + JSON.stringify(message));
			serviceWorker.postMessage({type:msgSignature, message:message});
		}
		//broadcast.postMessage({type:msgSignature, message:message});
	} else consoleLog('Unable to post message to the Service Worker.');
}
function isLoadNewVersion() {
	var v1 = ver;
	var v2 = getItem('new-sw');
	if (v2) { // newer version found after user click "New Version Available"
		setItem('new-sw', '');
		var s = '';
		s += 'Old Version: ' + v1 + '<br>';
		s += 'News Version: ' + v2 + '<br>';
		s += notificationEmailMessage();
		/*if (ipAddress != '110.136.34.113') // not from our IP
			sendEmail('Reload Version ' + v2, s, 'restartApp(true);');*/
		return true;
	}
	return false;
}
function onReady(showMenu) {
	if (typeof(localforage) !== 'undefined') return true; // onReady has been called (typeof(localforage) is 'object')
	//$.cachedScript('https://raw.githubusercontent.com/mozilla/localForage/master/dist/localforage.min.js').done(function(script, textStatus) {
	$.cachedScript('https://cdn.varisk.xyz/js/localforage.min.js').done(function(script, textStatus) {
		localforage.ready().then(function() { // This code runs once localforage has fully initialized the selected driver.
			setItem('localforage-ready', 1);
			if (userName && getItem('chat-id') == '') { // private key
				if (unsupportedNotification() && OneSignalUID == '')
					saveOneSignalUID(variskindoUID);
				checkUser();
			} else setUserId();
			loadChats(true); // coz this requires chat.css
			consoleLog('localforage driver is: ', localforage.driver()); // https://localforage.github.io/localForage/
		}).catch(function (e) {
			consoleError(e); // `No available storage method found.`
		});
		loadCSS('https://cdn.varisk.xyz/css/chat.css'); // purge Cloudflrare when there is a change
		loadCSS('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'); // https://animate.style/
	});
	if (showMenu) showOneSignalMenus(true);
}
//async 
function registerSW() {
	setTimeout(function() {
		onReady(true);
	}, 2500);
	if ('serviceWorker' in navigator) { // https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
		if (isLoadNewVersion()) return false;
		consoleLog('Registering Service Worker...');
		var url = '/' + swjs + '?v=' + ver + '&d=' + getItem('debug');
		if (getItem('debug-sw') == '0') url = '/' + swjs + '?v=' + ver + '&d=0';
		navigator.serviceWorker.register(url, {scope: '/'})
		// Wait until the service worker is active.
		.then(function() { // https://googlechrome.github.io/samples/service-worker/post-message/
			return navigator.serviceWorker.ready; // need this otherwise reg.active = null
		}).catch((error) => {
			consoleError('Service Worker registration is not ready: ' + error.message);
		}).then((reg) => {
			if (reg) {
				// registration worked
				consoleLog('Service Worker: Registration succeeded with scope at ' + reg.scope);
				var v = getItem('ver');
				if (v == '') setItem('ver', ver); // first time visit
				if (v != '' && v != ver) { // reload to install completely
					setItem('ver', ver);
					if (window.location.href.indexOf('index.html') >= 0 && !isMobile()) { // need this to avoid "Can't connect to the site" since
						window.location = '/sw/index.html'; // sw/index.html not cached
						return false;
					} else {
						if (confirm('A new version "' + ver + '" is available. To start using it, click "OK" to reload this page.')) {
							restartApp(true);
							return false;
						}
					}
				}
				serviceWorker = reg.active;
				if (serviceWorker == null)
					serviceWorker = new Worker(url); // https://morioh.com/p/2179900e2434
				else consoleLog('Service Worker: State is ' + reg.active.state);
				postMessageToSW('checkCache');
			}
/*			broadcast.onmessage = (event) => {
				if (event.data && event.data.type === msgSignature && event.data.message) {
					var s = JSON.stringify(event.data);
					if (s.indexOf('addConsole(') < 0) // skip this since already print by SW
						consoleLog('From Service Worker: ' + s);
					setTimeout(event.data.message, 0);
				}
			};*/
			navigator.serviceWorker.onmessage = (event) => {
				if (event.data && event.data.type === msgSignature && event.data.message) {
					var s = JSON.stringify(event.data);
					if (s.indexOf('addConsole(') < 0) // skip this since already print by SW
						consoleLog('From Service Worker: ' + s);
					setTimeout(event.data.message, 0);
				}
			};
			navigator.serviceWorker.addEventListener('controllerchange', () => {
				consoleLog('Service Worker: controller.scriptURL=' + navigator.serviceWorker.controller.scriptURL);
				setItem('ping-sw', 0);
				postMessageToSW('ping-sw');
				setTimeout(function() {
					if (getItem('ping-sw') == 0) {
						var n = parseInt(getItem('restart-sw') || 0, 10);
						if (n <= 3) {
							setItem('restart-sw', n + 1);
							if (debugging()) setTimeout(function() { restartApp(true) }, 5000);
							else if (confirm('Oops, unable to ping the Service Worker. Click "OK" to reload this page.'))
								restartApp(); // normal reload
						} else setTimeout(function() { setItem('restart-sw', 0); }, 30000);
					} else showOneSignalMenus(true);
				}, 1000); // https://whatwebcando.today/articles/handling-service-worker-updates/
			}); // https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
			navigator.serviceWorker.ready.then(registration => {
				consoleLog('Newly Service Worker activated');
				serviceWorker = registration.active;
			}); // https://stackoverflow.com/questions/40161452/service-worker-controllerchange-never-fires
			onReady(true);
		}).catch((error) => { // registration failed
			onReady(true);
			consoleError('Service Worker registration failed: ' + error.message);
		});
	} else consoleLog('serviceWorker not supported');
}
//async 
function unregisterSW(newVersion) { // https://stackoverflow.com/questions/47358643/how-do-i-clear-service-worker-caches-when-unregistering
	consoleLog('Unregistering Service Worker...');
	if (newVersion) {
		setItem('new-sw', newVersion);
		//if (serviceWorker != undefined) serviceWorker.terminate(); //uncaught promise... terminate is not a function
	}
	const registrations = await navigator.serviceWorker.getRegistrations();
	const unregisterPromises = registrations.map(registration => registration.unregister());
	await Promise.all([...unregisterPromises]);
}
function reloadApp(version) {
	if (serviceWorker == undefined) restartApp(true);
	else {
		postMessageToSW('reload ' + version);
		setTimeout(function() {
			restartApp(true);
		}, 2500); // in case postMessageToSW fails
	}
}
//async 
function registerOneSignal() {
	setTimeout(function() {
		onReady();
	}, 2500);
	if ('serviceWorker' in navigator) {
		if (isLoadNewVersion()) return false;
		consoleLog('Registering Service Workers...');
		var scope = '/';
		var url = scope + 'OneSignalSDKWorker.js?v=' + ver + '&d=' + getItem('debug');; // OneSignal Service Worker
		navigator.serviceWorker.register(url, {scope:scope})
		.then(function() { // https://googlechrome.github.io/samples/service-worker/post-message/
			return navigator.serviceWorker.ready; // need this otherwise reg.active = null
		}).catch((error) => {
			consoleError('OneSignal registration is not ready: ' + error.message);
		}).then((reg) => {
			if (reg) {
				// registration worked
				consoleLog('OneSignal Service Worker: Registration succeeded with scope at ' + reg.scope);
				var v = getItem('ver');
				if (v == '') setItem('ver', ver); // first time visit
				if (v != '' && v != ver) { // reload to install completely
					setItem('ver', ver);
					if (window.location.href.indexOf('index.html') >= 0 && !isMobile()) { // need this to avoid "Can't connect to the site" since
						window.location = '/sw/index.html'; // sw/index.html not cached
						return false;
					} else {
						if (confirm('A new version "' + ver + '" is available. To start using it, click "OK" to reload this page.')) {
							setItem("send-tags-profile", 0);
							restartApp(true);
							return false;
						}
					}
				}
				serviceWorker = reg.active;
				if (serviceWorker == null)
					serviceWorker = new Worker(url); // https://morioh.com/p/2179900e2434
				else consoleLog('Service Worker: State is ' + reg.active.state);
				postMessageToSW('checkCache');
			}
/*			broadcast.onmessage = (event) => {
				if (event.data && event.data.type === msgSignature && event.data.message) {
					var s = JSON.stringify(event.data);
					if (s.indexOf('addConsole(') < 0) // skip this since already print by SW
						consoleLog('From Service Worker: ' + s);
					setTimeout(event.data.message, 0);
				}
			};*/
			navigator.serviceWorker.onmessage = (event) => {
				if (event.data && event.data.type === msgSignature && event.data.message) {
					var s = JSON.stringify(event.data);
					if (s.indexOf('addConsole(') < 0) // skip this since already print by SW
						consoleLog('From Service Worker: ' + s);
					setTimeout(event.data.message, 0);
				}
			};
			navigator.serviceWorker.addEventListener('controllerchange', () => {
				consoleLog('Service Worker: controller.scriptURL=' + navigator.serviceWorker.controller.scriptURL);
				setItem('ping-sw', 0);
				postMessageToSW('ping-sw');
				setTimeout(function() {
					if (getItem('ping-sw') == 0) {
						var n = parseInt(getItem('restart-sws') || 0, 10);
						if (n <= 3) {
							setItem('restart-sws', n + 1);
							if (debugging()) setTimeout(function() { restartApp(true) }, 5000);
							else if (confirm('Oops, unable to ping the Service Worker. click "OK" to reload this page'))
								restartApp(); // normal reload
						} else setTimeout(function() { setItem('restart-sws', 0); }, 30000);
					} else showOneSignalMenus(true);
				}, 1000); // https://whatwebcando.today/articles/handling-service-worker-updates/
			}); // https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
			navigator.serviceWorker.ready.then(registration => {
				consoleLog('Newly Service Worker activated');
				serviceWorker = registration.active;
			}); // https://stackoverflow.com/questions/40161452/service-worker-controllerchange-never-fires
			onReady();
		}).catch((error) => {
			onReady();
			consoleError('OneSignal registration failed: ' + error.message); // registration failed
		});
	} else consoleLog('serviceWorker not supported');
}
function saveOneSignalUID(userId) {
	if (userName == '') {
		consoleError('Unable to save OneSignal UID.');
		return false;
	}
	OneSignalUID = userId;
	var uid = getItem('UID');
	if (OneSignalUID != uid) {
		var url = getChatUrl('name/' + userName + '/uid');
		$.getJSON(url)
		.done(function (data) {
			var uids = OneSignalUID;
			if (data != null) {
				var arr = data.split('|');
				var idx = arr.indexOf(uid);
				if (idx >= 0) arr.splice(idx, 1); // remove (splice) 1 element: old uid
				do {
					if (arr.length > 2) arr.shift(); // remove first element
				} while (arr.length > 2); // max. 3 uids
				arr.push(OneSignalUID);
				uids = arr.join('|');
			}
			var obj = {}; // ajax is now able to do a multi-path write!
			obj['uid'] = uids; // update new UID
			path = 'uids/';
			obj[path + getEpoch()] = OneSignalUID + ' (' + yyyymmddhhmmss() + ')';
			var url = 'name/' + userName;
			postObject('PATCH', url, obj, 'setItem("UID","' + OneSignalUID + '");');
		}).fail(function (jqxhr, textStatus, error) {
			alert('Oops, load uid failed.');
		});
	}
	if (getItem('create-search') == '0') createSearch(); // not create search after signUp()
}
function isPushNotificationsEnabled() {
	return getItem('subscribe') && getItem('isPushNotificationsEnabled', false);
}
function skipOneSignal() { // in case forgot to include function 'setUserId'
	return (parseInt(getItem('focus')|| 0, 10) < focusSecTotalLimit && !getItem('subscribe')) || unsupportedNotification() ||
	typeof(setUserId) === 'undefined' || // in case forgot to copy js (typeof(setUserId) is "function")
	!navigator.onLine || (getItem('notif') == '0');
}
function showHideChatMenu() {
	if (noChatMenu()) {
		$('#chat-menu').toggle();
		if ($('#chat-menu').is(':visible')) {
			if (!$('.chat-side').length) loadChats();
		}
	} else {
		$('#chat-menu').toggle();
		if ($('#chat-menu').is(':visible')) loadChats(true);
	}
	onFocus();
}
function checkUser() {
	if (!debugging()) createUserKey();
	else {
		setTimeout(function(){
			createUserKey();
		}, 15000);
	}
	if (!debugging()) createLocalForageId();
	else {
		setTimeout(function(){
			createLocalForageId();
		}, 15000);
	}
}
function initOneSignal() {
	if (debugging()) $('#header').css('color', 'cyan');
	if (typeof(setUserId) !== 'undefined') setUserId(); // (typeof(setUserId) is "function")
	userFullName = getItem('fullname');
	if (userName && !userFullName) setUserFullName();
	userVIPName = getItem('VIP-name');
	userEmail = getItem('email');
	OneSignalUID = getItem('UID');
	$('#status span').attr('onclick', 'showHideChatMenu();');
	setItem('load-chats', 1); // tell to cache loadChats
	setItem('localforage-ready', 0);
	if ($(window).width() < mediumWidth) $('#chat-menu #inbox-messages').text('Inbox');
	hideOneSignalMenus(true);
	if (skipOneSignal() /*&& window.location.pathname.indexOf('index') < 0*/) {
		registerSW();
		return false; // activate OneSignal if user has been using this app more than 2 hours
	}
	consoleLog('Initializing OneSignal...');
	if (getItem('confirm-notif') == 1) {
		removeItem('confirm-notif');
		alert('Please wait a few seconds and click "Allow" on confirmation dialog to get push notifications.');
	}
	if (getItem('registered') == 1) {
		removeItem('registered');
		setTimeout(function(){
			alert('User "' + userName + '" has been registered succesfully.');
		}, 2500);
	}
	var appId = OneSignalAppId;
	var scope = '/';
	$.cachedScript(OneSignalSDKUrl)
	.done(function(script, textStatus) {
		OneSignal = window.OneSignal || [];
		var initConfig = {
			appId: appId,
			notifyButton: {
				enable: true
			},
		};
		OneSignal.push(function () {
			OneSignal.SERVICE_WORKER_PARAM = {scope:scope};
			OneSignal.SERVICE_WORKER_PATH = scope + 'OneSignalSDKWorker.js';
			OneSignal.SERVICE_WORKER_UPDATER_PATH = scope + 'OneSignalSDKUpdaterWorker.js';
			OneSignal.init(initConfig);
			registerOneSignal();
		});
		// https://documentation.onesignal.com/docs/troubleshooting-web-push
		// Firstly this will check user id (https://stackoverflow.com/questions/40524751/onesignal-subscribe-user-through-web-page-using-web-push-sdk)
		OneSignal.push(function() {
			OneSignal.getUserId().then(function(userId) {
				if(userId == null) subscribeBtn(true)
				else {
					if (getItem('send-tags-profile') != 1 && userName && userFullName && userEmail)
						sendTags({'user': userName, 'fullname': userFullName, 'email': userEmail}, 'setItem("send-tags-profile", 1);');
					showOneSignalMenus(true);
					saveOneSignalUID(userId);
					unsubscribeBtn(true);
					OneSignal.push(["getNotificationPermission", function(permission){
					}]);
					OneSignal.isPushNotificationsEnabled(function(isEnabled) {
						if (isEnabled){
							unsubscribeBtn(true);
							subscribeBtn(false);
							var action = getItem('subscribe-notif');
							if (action) {
								removeItem('subscribe-notif');
								setTimeout(action, 0);
							} else {
								signUp(true);
								inboxMessagesChecking();
							}
							consoleLog('Notifications are allowed'); // do not show toast here since it will appear on start up
						} else{
							if (getItem('subscribe-notif') != '') {
								alert('Turning on the push notifications may take a few seconds. Please click "Subscribe Notifications" manually if this process fails.');
								subscribeOneSignal();
							}
							unsubscribeBtn(false);
							subscribeBtn(true);
							consoleLog('Notifications have been blocked');
						}
					});
				}
			}).catch((error) => {
				consoleError('OneSignal.getUserId failed: ' + error.message);
			});
		});
		// Secondly this will check when subscription changed
		OneSignal.push(function() {
			OneSignal.on('subscriptionChange', function (isSubscribed) {
				var p = getData('subscriptionChange', true);
				if (p) {
					stopSpinner();
					clearTimeout(p);
				}
				var s = getItem('subscriptionChange');
				setItem('subscriptionChange', isSubscribed);
				if(isSubscribed == true){
					OneSignal.getUserId().then(function(userId) {
						saveOneSignalUID(userId);
					}).then(function(){ // this is custom function
						if (s == '' || s == 'false')
							sendEmail('Subscribe Notifications', notificationEmailMessage());
						if (s == '') { // first time subscription
							var spinId = runSpinner();
							setTimeout(function() {
								stopSpinner(spinId);
								var s = 'To complete the notification subscription, click "OK" to reload this page';
								if (userName == '') s += ' and please wait until the registration has completed';
								s += '.';
								if (confirm(s))
									restartApp(true);
							}, 2500);
						} else {
							var action = getItem('subscribe-notif');
							if (action) {
								removeItem('subscribe-notif');
								setTimeout(action, 0);
							}
						}
						consoleLog('Notification UID = ' + OneSignalUID);
					});
					unsubscribeBtn(true);
					subscribeBtn(false);
					showOneSignalMenus(true);
					consoleLog('Notification subscription changed to true');
				} else if(isSubscribed == false){
					OneSignal.getUserId().then(function(userId) {
						saveOneSignalUID(userId);
					}).then(function(){ // this is custom function
						if (s == 'true')
							sendEmail('Unsubscribe Notifications', notificationEmailMessage());
						consoleLog('Notification UID = ' + OneSignalUID);
					});
					unsubscribeBtn(false);
					subscribeBtn(true);
					hideOneSignalMenus();
					consoleLog('Notification subscription changed to false');
				} else consoleLog('Notification subscription changed: unknown');
			});
		});
/*		OneSignal.push(function() {
			OneSignal.getTags(function(tags) {
				tags = JSON.stringify(tags);
				if (tags.indexOf('os.name') <0 ) {
				}
			});
		});
		OneSignal.push(function() {
			OneSignal.deleteTags(['os.name', 'os.version']);
		});*/
	    var d = deviceInfo.init(); // max number of tags are 10 only
		sendTags({'app.ver': ver, 'os': d.os.name + '-' + d.os.version, 'browser': d.browser.name + '-' + d.browser.version});
	}).fail(function (jqxhr, textStatus, error) {
		hideOneSignalMenus(true);
		registerSW();
		consoleError('Initialize OneSignal failed.');
	});
}
function unsupportedNotification() {
    var d = deviceInfo.init();
	var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf('edg') != -1) { // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36 Edg/83.0.478.37
		return iOS() || parseFloat(d.browser.version) < 56; // https://en.wikipedia.org/wiki/Microsoft_Edge
	} else if (ua.indexOf('chrome') != -1) { // iOS Chrome not supported (this is for Chrome, Opera and other chromium browsers)
		return iphoneChrome() || parseFloat(d.browser.version) < 56; // https://en.wikipedia.org/wiki/Google_Chrome_version_history
	} else if (ua.indexOf('firefox') != -1) { // linux desktop (Ubuntu 12.04 or rv=52) is not supported
		return parseFloat(d.browser.version) < 60 || !('serviceWorker' in navigator); // https://en.wikipedia.org/wiki/Firefox_version_history
	} else if (ua.indexOf('opera') != -1) { // opera 2017 based on Chromium 56
		return parseFloat(d.browser.version) < 43 || !('serviceWorker' in navigator); // https://en.wikipedia.org/wiki/History_of_the_Opera_web_browser
	} else if (ua.indexOf('safari') != -1) { // Safari
		return true;
	} else return true;
}
function sendTags(tags, onSuccess) {
	if (OneSignal) {
		OneSignal.push(function() {
			OneSignal.sendTags(tags); // tags={'app.ver': ver, 'os.name': d.os.name}
			if (onSuccess) setTimeout(onSuccess, 0);
		});
	}
}
function deleteTags(tags) {
	if (OneSignal) {
		OneSignal.push(function() {
			OneSignal.deleteTags(tags); // tags=['os.name', 'os.version']
		});
	}
}
function checkSubscriptionChange(subscribe) {
	runSpinner();
	removeData('subscriptionChange');
	var p = setTimeout(function(){
		if (getData('subscriptionChange', true)) {
			var s = 'Oops, you are currently unable to ';;
			if (subscribe) {
				alert(s + 'turn on push notifications.');
			} else alert(s + 'turn off push notifications.');
			stopSpinner();
		}
	}, 15000);
	setData('subscriptionChange', p);
}
function subscribeOneSignal(restart) {
	if (!navigator.onLine) {
		alert('There is no internet connectivity. Please turn off Airplane Mode or use Wi-Fi to connect to the server.');
		return false;
	}
	if (unsupportedNotification()) {
		alert('Oops, sorry but you are unable to turn on push notifications using this browser.');
		return false;
	}
	if ($('#navbarMain').hasClass('in')) { // if top menu opened (user click manually)
		if ($('#notification').text().indexOf('Unsubscribe') >= 0) {
			unsubscribeOneSignal();
			return false;
		} else if (unsupportedNotification())
			alert('Oops, you are unable to enable push notifications for this browser.');
	}
	if (restart && (!OneSignal || !isPushNotificationsEnabled())) {
		setItem('subscribe', 1);
		restartApp(true);
		return false;
	}
	consoleLog('Subscribing notification...');
	if (OneSignal) {
		checkSubscriptionChange(true);
		OneSignal.isPushNotificationsEnabled(function(isEnabled) {
			if (!isEnabled) {
				OneSignal.registerForPushNotifications({
					modalPrompt: true
				});
			}
		});
		OneSignal.setSubscription(true);
	} else {
		setItem('subscribe', 1);
		restartApp(true);
	}
}
function unsubscribeOneSignal() {
	if (!OneSignal) {
		restartApp(true);
		return false;
	}
	if (confirm('Do you wish to turn off notifications ? This will stop you from getting the latest news, updates and chat notifications.')) {
		consoleLog('Unsubscribing notification...');
		checkSubscriptionChange();
		OneSignal.setSubscription(false);
	}
}
function clearOneSignalStorage() {
	removeItem('isPushNotificationsEnabled');
	removeItem('isOptedOut');
	removeItem('os_pageViews');
	removeItem('onesignal-notification-prompt');
	removeItem('UID');
}
//async 
function clearSiteData() {
	localStorage.clear(); // https://stackoverflow.com/questions/7667958/clearing-localstorage-in-javascript
	const dbs = await window.indexedDB.databases(); // https://gist.github.com/rmehner/b9a41d9f659c9b1c3340
	dbs.forEach(db => { window.indexedDB.deleteDatabase(db.name) });
	unregisterSW();
	deleteAllCaches();
	/*removeItem('user');
	removeItem('fullname');
	removeItem('email');
	removeItem('ver');
	removeItem('ver-time');
	localforage.removeItem('localforage-id').then(function() {
		consoleLog('Item "localforage-id" has been removed');
	}).catch(function(err) {
	});*/
}

function subscribeBtn(show) {
	if (show) $('#notification').text('Subscribe Notifications');
	else $('#notification').text('Unsubscribe Notifications');
}
function unsubscribeBtn(show) {
	if (show) $('#notification').text('Unsubscribe Notifications');
	else $('#notification').text('Subscribe Notifications');
}
function showNews() {
	if (unsupportedNotification()) {
		hideOneSignalMenus();
		return false;
	}
	$('#news').parent().show();
	if (navigator.languages.join(',').indexOf('id') >= 0) $('#berita').parent().show(); // "en-US,en,id" (must include Indonesian language)
	else {
		$('#berita').parent().hide();
		$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
			if (data.loc == 'ID') $('#berita').parent().show(); // country must be indonesia
		}); // https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript
	}
	if (getItem('news') == 1) $('#news').text('Unsubscribe Latest World News');
	else $('#news').text('Subscribe Latest World News');
	if (getItem('berita') == 1) $('#berita').text('Unsubscribe Latest Indonesia News');
	else $('#berita').text('Subscribe Latest Indonesia News');
}
function subscribeNews() {
	if (!OneSignal) {
		if (confirm('Oops, subscribe latest global news failed. Click "OK" to refresh the page.'))
			restartApp(true);
		return false;
	}
	runSpinner();
	setData('subscribeNews', 0);
	setTimeout(function(){
		if (getData('subscribeNews', true) == 0) {
			alert('Oops, you are currently unable to subscribe the global news.');
			stopSpinner();
		}
	}, 15000);
	var v = getItem('news');
	if (v == 1) v = 0;
	else v = 1;
	OneSignal.push(function() {
		OneSignal.sendTags({'news': v}) // OneSignal.deleteTags(['mobile', 'News'])
		.then(function(tagsSent) { // Callback called when tags have finished sending
			setItem('news', v);
			showNews();
			consoleLog('tagsSent: ' + tagsSent);
			setData('subscribeNews', 1);
			stopSpinner();
		});
	});
}
function subscribeBerita() {
	if (!OneSignal) {
		if (confirm('Oops, subscribe latest Indonesia news failed. Click "OK" to refresh the page.'))
			restartApp(true);
		return false;
	}
	runSpinner();
	setData('subscribeBerita', 0);
	setTimeout(function(){
		if (getData('subscribeBerita', true) == 0) {
			alert('Oops, you are currently unable to subscribe local news.');
			stopSpinner();
		}
	}, 15000);
	var v = getItem('berita');
	if (v == 1) v = 0;
	else v = 1;
	OneSignal.push(function() {
		OneSignal.sendTags({'berita': v}) // OneSignal.deleteTags(['mobile', 'News'])
		.then(function(tagsSent) { // Callback called when tags have finished sending
			setItem('berita', v);
			showNews();
			consoleLog('tagsSent: ' + tagsSent);
			setData('subscribeBerita', 1);
			stopSpinner();
		});
	});
}
function testNotification() {
	if (OneSignal) {
		runSpinner();
		setData('testNotification', 0);
		var p = setTimeout(function(){
			if (getData('testNotification', true) == 0) {
				alert('Oops, currently unable to send self notification.');
				stopSpinner();
			}
		}, 15000);
		OneSignal.getUserId(function(id){
			clearTimeout(p);
			OneSignal.sendSelfNotification('Self Notification', 'Notification has been delivered successfully with Id = ' + id); // https://documentation.onesignal.com/docs/web-push-sdk#create-notification
			setData('testNotification', 1);
			stopSpinner();
			if ($('#notification').text().indexOf('Subscribe') >= 0)
				alert('Oops, push notifications currently disabled.');
		});
	} else alert('Please subscribe to turn on notifications for the latest news and update.');
}
function version() {
	versionCounter++;
	if (versionCounter >= 5) {
		if (!debugging()) {
			setItem('debug', 1);
			setItem('subscribe', 1);
		} else setItem('debug', 0);
		restartApp(true);
	}
}

// ===== BEGIN updateApp =====
/*
window.showVerificationCode = function(ip) {
	var code = 100000 + Math.floor((Math.random() * 900000)); // between 1e5 and 1e6
	if (userKey) code = userKey; // in case first install device was stolen
	var obj = {}; // ajax is now able to do a multi-path write!
	var url = 'messages/' + userName + '/new-msg';
	obj['code'] = encrypt(msgSignature, code);
	var s = '';
	if (ip) s = '(IP = ' + ip + ') ';
	if (confirm('Someone ' + s + 'is trying to register using your username. Allow ?')) {
		postObject('PATCH', url, obj, 'alert("Verification code: ' + code + '");');
		setTimeout(function(){
			obj['action'] = '';
			obj['code'] = '';
			postObject('PATCH', url, obj);
		}, 30000); // remove in 30 seconds
	}
}
window.checkVerificationCode = function(user, fullname, email, code) {
	if (!code) code = window.prompt('Please enter the verification code in order to login using "' + user + '".', '');
	var path = 'messages/' + user + '/new-msg/code';
	var url = getChatUrl(path);
	$.getJSON(url)
	.done(function (data) {
		var reSignUp = data.split(',')[1] ? data.split(',')[1] : '';
		data = data.split(',')[0];
		if (code != '' && data == encrypt(msgSignature, code)) {
			setItem('verification-code', code);
			if (reSignUp != '') {
				var obj = {}; // ajax is now able to do a multi-path write!
				var url = 'messages/' + user + '/new-msg';
				obj['code'] = '';
				obj['recreated/' + getEpoch()] = ipAddress + ' (' + yyyymmddhhmmss() + ')';
				postObject('PATCH', url, obj, 'addUserName("' + user + '","' + fullname + '","' + email + '",true);');
			} else addUserName(user, fullname, email, true); // THIS CAN BE HACKED !!!
		} else alert('Sorry but verification code is incorrect.');
	}).fail(function (jqxhr, textStatus, error) {
		alert('Oops, check verification code failed.');
	});
}
window.getUserKey = function() {
	var id = decrypt(msgSignature, getItem('chat-id')).split(',');
	if (id.length == 2) return id[1];
	return '';
}
window.getUserName = function() {
	var id = decrypt(msgSignature, getItem('chat-id')).split(',');
	if (id.length == 2) return id[0];
	return '';
}
window.setUserId = function() {
	userKey = getUserKey();
	userName = getUserName();
	if (userName == '' && getItem('ver-time') == '') userName = getItem('user');
	consoleLog('setUserId: userName=' + userName + ', userKey=' + userKey);
}
window.createUserKey = function() { // first attemp to set UserName
	userName = getItem('user');
	var code = getItem('verification-code');
	if (code) key = code; // this is from second device using the same username
	else key = 100000 + Math.floor((Math.random() * 900000)); // new install
	var obj = {}; // ajax is now able to do a multi-path write!
	obj[userName + '/' + getEpoch()] = key + ' (' + yyyymmddhhmmss() + ')';
	var id = encrypt(msgSignature, userName + ',' + key);
	if (code) {
		setItem('chat-id', id);
		setItem('ver-time', getEpoch());
		userKey = key;
	} else postObject('PATCH', 'keys', obj, 'setItem("chat-id","' + id + '");setItem("ver-time","' + getEpoch() + '");userKey=' + key);
	consoleLog('createUserKey: userName=' + userName + ', userKey=' + key);
}
window.validUserName = function(skipAlert) {
	var ok = userName == getUserName();
	if (!ok && getItem('chat-id') != '' && !skipAlert) alert('Oops, sorry but your username is invalid.');
	return ok;
}
window.getDataUrl = function(url) {
	var s = getData('localforage-id');
	if (!s) return url;
	if (userName != s) {
		url = url.split(userName).join('');
		userName = '';
		signUp();
	}
	return url;
}
window.createLocalForageId = function() { // userName info
	localforage.getItem('localforage-id').then(function(id) {
		if (id == null) {
			userName = getItem('user'); // second attemp to set UserName
			var id = encrypt(msgSignature, userName + ',' + userFullName + ',' + userEmail);
			localforage.setItem('localforage-id', id, function() {
				setData('localforage-id', userName);
				setItem('registered', 1);
				restartApp();
				consoleLog('Localforage id has been saved');
			});
			consoleLog('createLocalForageId: userName=' + userName);
		} else {
			id = decrypt(msgSignature, id).split(',');
			if (id.length == 3) { // real one
				userName = id[0];
				setData('localforage-id', userName);
			} else { // hacked
				userName = '';
				setData('localforage-id', userName);
			}
		}
	}).catch(function(err) { // This code runs if there were any errors
	});
}
window.recreateUser = function() {
	if (!validUserName(true)) alert('Oops, unable to recreate username.');
	else if (confirm('Do you really wish to recreate your username "' + userName + '" due to incorrect settings (such as push notifications feature not working) ?' + newLineAltert + newLineAltert + 'This will clear the site`s data (local storage, indexed databases and service workers). Continue ?')) {
		var obj = {}; // ajax is now able to do a multi-path write!
		var url = 'messages/' + userName + '/new-msg';
		obj['code'] = encrypt(msgSignature, userKey) + ',recreateUser';
		postObject('PATCH', url, obj, 'recreateUserAlert();', true);
	}
}
*/
// ===== END updateApp =====

function notificationEmailMessage() {
    var d = deviceInfo.init();
	var s = 'app.ver: ' + ver + '<br>';
	s += 'os.name: ' + d.os.name + '<br>';
	s += 'os.version: ' + d.os.version + '<br>';
	s += 'browser.name: ' + d.browser.name + '<br>';
	s += 'browser.version: ' + d.browser.version + '<br>';
	s += 'player.id: ' + OneSignalUID + '<br>';
	s += 'username: ' + userName + '<br>';
	s += 'fullname: ' + userFullName + '<br>';
	s += 'email: ' + userEmail + '<br>';
	s += 'IP: ' + ipAddress + '<br>';
	return s;
}
function sendEmail(subject, message, onSuccess) {
	var url = firebaseUrl + 'email/new.json';
	var d = new Date();
	var t = d.toUTCString(); // Tue, 01 Apr 2016 13:16:02 GMT
	var obj={};
	obj['event'] = 'notification';
	obj['subject'] = window.top.location.hostname + ': ' + subject;
	obj['message'] = message + '<br>' + window.top.location.href; // add app code
	obj['time'] = t;
	$.ajax({
		accept: "application/json",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		type: "POST", // do not use PUT because it will overwrite data
		url: url,
		data: JSON.stringify(obj), // serializes the form's elements.
		success: function(data) {
			if (onSuccess) setTimeout(onSuccess, 0);
			consoleLog('Your message has been sent successfully with ID = ' + data.name);
		},
		error: function(xhr, status, error){ // fail
			consoleError('sendEmail.error: ' + error);
		},
		complete: function(xhr, textStatus) {
		}
	});
}
function setUserFullName() {
	$.getJSON(getChatUrl('name/' + userName + '/fullname'))
	.done(function (data) {
		if (data != null) {
			userFullName = data;
			setItem('fullname',userFullName);
		}
	});
}
function noChatMenu() {
	return (getItem('chat-menu') == '0');
}
function myPIN() {
	return userName + '+' + OneSignalUID;
}
function getPIN(user, uid) {
	if (uid == '0' || uid.length < variskindoUID.length)
		uid = variskindoUID; // if invalid uid or user does not allow notifications
	return user + '+' + uid;
}
function getPlayerId(pin, allowBlank) {
	if (!pin) return '';
	var uid = pin.split('+')[1] ? pin.split('+')[1] : '';
	if (!allowBlank) {
		if (uid == '0' || uid.length < variskindoUID.length)
			uid = variskindoUID; // if invalid uid or user does not allow notifications
	}
	return uid;
}
function getPlayerName(pin) {
	if (!pin) return 'Unknown';
	return pin.split('+')[0];
}
function validEmail(email) { // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
function createSearch(userIdx, emailIdx, count) {
	if (!userIdx && !emailIdx) {
		if (debugging()) openStatusBar('Adding search...');
		else openStatusBar('Completing registration...');
		var spinId = runSpinner();
		setData('create-search', spinId);
	}
	//if (OneSignalUID == '') return false; (OneSignalUID == '' on Linux 12.04)
	if (!userIdx) userIdx = 0;
	if (!emailIdx) emailIdx = 0;
	if (!count) count = 1;
	var uwords = userName.split('_');
	var ewords = userEmail.split('@');
	var search = '';
	if (userIdx < uwords.length || (userIdx == uwords.length && uwords.length > 1)) {
		if (userIdx < uwords.length) search = uwords[userIdx];
		else search = userName;
		userIdx++;
	} else if (emailIdx < ewords.length || (emailIdx == ewords.length && ewords.length > 1)) {
		if (emailIdx < ewords.length) search = ewords[emailIdx];
		else search = userEmail;
		emailIdx++;
	}
	if (search == '') {
		closeStatusBar();
		stopSpinner(getData('create-search', true));
		if (getItem('create-search') == '0') setItem('create-search', 1);
		if ((OneSignal && OneSignalUID != '') || unsupportedNotification())
			alert('Username "' + userName + '" has been created succesfully.');
		else {
			setItem('subscribe', 1); // subscribe notifications automatically
			setItem('confirm-notif', 1); // flag to alert to wait until notification showing up
			alert('Username "' + userName + '" has been created successfully. Click "OK" to reload this page and please click "Allow" on confirmation dialog to get notifications.');
		}
		reloadApp(true);
		return false;
	} else if (debugging()) updateStatusBar('Adding search "' + search + '"...');
	else updateStatusBar('Completing registration #' + count + '...');
	var obj = {}; // ajax is now able to do a multi-path write!
	obj['uid'] = OneSignalUID || '0';
	obj['user'] = userName;
	var url = 'search/' + getValidKey(search.toLowerCase());
	postObject('POST', url, obj, 'createSearch(' + userIdx + ',' + emailIdx + ',' + (count+1) + ');');
}
function addUserName(user, fullname, email, multiuser) {
	userName = user;
	userFullName = fullname;
	userEmail = email;
	setItem('user', userName);
	setItem('fullname', userFullName);
	setItem('email', userEmail);
	if (!multiuser) { // skip for second, third, ... users
		var url = '';
		var obj = {}; // ajax is now able to do a multi-path write!
		var path = 'name/' + userName + '/';
		var local = yyyymmddhhmmss();
		var time = getEpoch();
		//obj[path + 'uid'] = OneSignalUID; (this will be updated later since may contain many playerId)
		obj[path + 'fullname'] = userFullName;
		obj[path + 'email'] = userEmail;
		obj[path + 'local'] = local;
		obj[path + 'time'] = time;
		path = 'email/' + getValidKey(userEmail) + '/';
		obj[path + 'uid'] = OneSignalUID;
		obj[path + 'user'] = userName;
		path = 'names/';
		obj[path + userName] = time;
		postObject('PATCH', url, obj, 'contactUs(true);createSearch();'); // send email & add search key
	} else { // using existing user
		if (!OneSignal && !unsupportedNotification()) {
			setItem('UID', 'add-uid'); // make sure to add playerId
			subscribeOneSignal();
		}
		contactUs(true, true);
	}
}
function askToSubscribeOneSignal() {
	if (!OneSignal && !unsupportedNotification()) { // if user has not subscribed notifications yet
		if (confirm('You need to enable push notifications right now to get started. You can turn them off at anytime. Turn on notifications ?')) return true;
	}
	return false;
}
function checkEmail(user, fullname, email) {
	var spinId = runSpinner();
	var url = getChatUrl('email/' + getValidKey(email));
	$.getJSON(url)
	.done(function (data) {
		if (data == null) addUserName(user, fullname, email);
		else alert('Email "' + email + '"already taken.');
	}).fail(function (jqxhr, textStatus, error) {
		alert('Oops, check email failed.');
	}).always(function() {
		stopSpinner(spinId);
	});
}
function createUserName(user, fullname, email) {
	if (!user) user = $('#contact-us-dialog input[name=user]').val();
	if (!fullname) fullname = $('#contact-us-dialog input[name=full-name]').val();
	if (!email) email = $('#contact-us-dialog input[name=email]').val();
	if (user.length < 5) {
		alert('Minimum length of username is 5 characters.');
		return false;
	}
	if (fullname.length < 5) {
		alert('Minimum length of full name is 5 characters.');
		return false;
	}
	var re = /^\w+$/; // https://stackoverflow.com/questions/21540624/javascript-regex-only-alphabet-number-and-underscore
	if (!re.test(user)) {
		alert('Invalid username. You can only use a-z, A-Z, 0-9 and underscore.');
		return false;
	}
	re = /^[a-zA-Z][ a-zA-Z0-9.]+$/; // first name & may with family name (first word consists no dots nor digits) (https://www.codexworld.com/how-to/validate-first-last-name-with-regular-expression-using-javascript/)
	if (!re.test(fullname)) {
		alert('Invalid full name. You can only use a-z, A-Z, dot and space.');
		return false;
	}
	if (!validEmail(email)) {
		alert('Invalid email address.');
		return false;
	}
	var spinId = runSpinner();
	user = user.toLowerCase();
	email = email.toLowerCase();
	if (OneSignalUID == '' && unsupportedNotification())
		saveOneSignalUID(variskindoUID); // using iOS or other unsupported web push notification
	$.getJSON(getChatUrl('names/' + user))
	.done(function (data) {
		if (data == null) checkEmail(user, fullname, email);
		else if (getItem('recreate-user') == 1 || confirm('Username already taken. Do you wish to login using "' + user + '" ?')) {
			if (askToSubscribeOneSignal()) {
				setItem('subscribe-notif', 'createUserName("' + user + '","' + fullname + '","' + email + '");');
				subscribeOneSignal(true);
			} else if (getItem('recreate-user') == 1) {
				removeItem('recreate-user');
				var code = getItem('verification-code');
				checkVerificationCode(user, fullname, email, code);
			} else {
				var url = 'messages/' + user + '/new-msg';
				var obj = {}; // ajax is now able to do a multi-path write!
				obj['action'] = "showVerificationCode('" + ipAddress + "');";
				postObject('PATCH', url, obj, 'checkVerificationCode("' + user + '","' + fullname + '","' + email + '");', true);
			}
		}
	}).fail(function (jqxhr, textStatus, error) {
		alert('Oops, create username failed.');
	}).always(function() {
		stopSpinner(spinId);
	});
}
function recreateUserAlert() {
	clearSiteData();
	var spinId = runSpinner();
	setTimeout(function(){
		stopSpinner(spinId);
		alert('Please write down verification code "' + userKey + '" in case needed in the future.');
		if (window.location.pathname.indexOf('max') > 0) {
			setItem('debug', 1);
			setItem('app-max', 1);
		}
		setItem('recreate-user', 1);
		setItem('verification-code', userKey);
		setItem('action', 'createUserName("' + userName + '","' + userFullName + '","' + userEmail + '");');
		setTimeout(function(){
			restartApp();
		}, 250);
	}, 2500); // give time to complete clear site data
}
function signUp(auto) {
	if (!navigator.onLine) return false;
	if (userName == '') {
		contactUsDlg(true);
		return false;
	}
	var url = getChatUrl('name/' + userName);
	$.getJSON(url)
	.done(function (data) {
		if (data == null) contactUsDlg(true);
		else if (!auto) alert('You have signed up already.');
	}).fail(function (jqxhr, textStatus, error) {
		alert('Oops, check username failed.');
	});
}
function contactUsDlg(signup) {
	var title = 'Contact Us', icon = 'danger', rows = 3, display = '" required', action = 'contactUs();', cls='alert-info" style="width:100%;padding:6px 12px'; prop = 'readonly';
	var user = userName, fullname = userFullName, email = userEmail, send;
	if (signup) {
		title = 'Create Username';
		display = 'display:none"';
		action = 'createUserName();';
		prop = 'required';
		cls = 'form-control';
		send = 'Create User';
	} else {
		if (user) user += ' (username)';
		if (email) email += ' (email)';
		if (fullname) fullname += ' (full name)';
		send = 'Send';
	}
	var fullscreen = canFullScreenModal(), mc = 'wide-modal';
	if (fullscreen) mc = fullScreenModalClass();
	var html = '<div class="modal ' + mc + '" id="contact-us-dialog" tabindex="-1" role="dialog" aria-labelledby="contact-us-dialog-title" style="display:none;padding-right:15px;overflow-y:auto" aria-modal="true">';
	html += '<div class="modal-dialog" style="' + fullScreenModalWidth() + '"><div class="modal-content">';
	html += '<div class="modal-header alert-' + icon + '"><h4 class="modal-title alert btn-' + icon + '" id="contact-us-dialog-title">' + title;
	html += modalCloseBtnHtml() + '</h4></div>';
	html += '<form name="contact-us-form" method="post" command="' + action + '"><div class="modal-body">';
	html += '<div class="form-group"><input type="text" name="user" class="' + cls + '" placeholder="Enter user name" value="' + user + '" ' + prop + '></div>';
	html += '<div class="form-group"><input type="text" name="full-name" class="' + cls + '" placeholder="Enter your full name" value="' + fullname + '" ' + prop + '></div>';
	html += '<div class="form-group"><input type="text" name="email" class="' + cls + '" placeholder="Enter your email" value="' + email + '" ' + prop + '></div>';
	html += '<div contenteditable="true" id="message" placeholder="Type your message here..." class="form-control bg-info" style="width:100%;height:100%;padding:8px;color:black;overflow-y:auto;' + display + '></div>';
	if (signup) html += '<div class="alert-info" style="padding:8px">By creating a username other people will be able to find you by this username or email and contact you. For those who love to perform data analysis in R or Python, this is the perfect place to go. You can run R/Python scripts straight from group chats so you can collaborate with your team.<br><br>You can use a-z, 0-9 and underscore. Minimum length is 5 characters.</div>';
	html += '</div>';
	html += '<div class="modal-footer">';
	html += '<button type="submit" class="btn btn-success" style="margin:2px 4px">' + send + '</button>';
	if (!signup) html += '<button type="button" class="btn btn-danger" style="margin:2px 4px" onclick="recreateUser();">Recreate User</button>';
	html += '<button type="button" class="btn btn-primary" style="margin:2px 4px" data-dismiss="modal">Close</button></div></form></div></div></div>';
	showModal('contact-us', html, fullscreen);
	setTimeout(function(){
		if (signup) $("#contact-us-dialog form[name='contact-us-form'] input[name=user]").focus();
		else {
			$("#contact-us-dialog form[name='contact-us-form'] #message").focus();
			scrollToId('contact-us-dialog', 'message', 0, true);
		}
	}, 250);
	$("#contact-us-dialog form[name='contact-us-form']").on('submit',function(e){
		e.preventDefault();
		setTimeout($("#contact-us-dialog form[name='contact-us-form']").attr('command'), 0);
		return false; // avoid to execute the actual submit of the form.
	});
	if (!signup && userName == '') {
		setTimeout(function(){
			contactUsDlg(true);
		}, 2500);
	}
}
function contactUs(signup, restart) {
	var message = $('#contact-us-dialog #message').html();
	var msgText = $('#contact-us-dialog #message').text(), subject = 'Inquiry';
	if (signup) {
		message = userEmail + ' has signed up.';
		msgText = message;
		subject = 'Sign Up';
	} else if (userName == '' || userFullName == '' || userEmail == '' || message == '') {
		alert('Please fill up the form.');
		return false;
	}
	var spinId = runSpinner();
	$("#contact-us-dialog #contact-us-dialog-title").text('Sending your message...');
	$("#contact-us-dialog form[name='contact-us-form']").hide();
	sendEmail(subject + ' From ' + userFullName + ' (' + userEmail + ')', message);
	var obj = { // https://documentation.onesignal.com/docs/action-buttons
		app_id: OneSignalAppId,
		web_push_topic: 'Comment-' + userName, // make sure it is not overwritten
		headings: {en: '*' + userFullName},
		contents: {en: msgText},
		web_buttons: [{'id': 'id1', 'text': 'Reply', 'icon': 'ic_menu_send', 'url': window.location.origin + window.location.pathname}],
		included_segments: 'Test Users' // message to developers
	};
	$.ajax({
		accept: "application/json",
		type: 'POST',
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		headers: {
			'Authorization': 'Basic ' + OneSignalApiKey,
			'Content-Type': 'application/json'
		},
		url: OneSignalApiUrl,
		data: JSON.stringify(obj),
		success: function(data, status){ /* done */
			consoleLog('Contact us message sent successfully: ', status);
			if (restart) restartApp(true);
		},
		error: function(xhr, status, error){ /* fail */
			if (signup) consoleWarn('Contact us message failed: ', error);
			else alert('Contact us message failed: ', error);
		},
		complete: function() {
			stopSpinner(spinId);
			$("#contact-us-dialog").modal("hide");
		},
		timeout: 30000
	});
}
function loadFullName(uname) {
	var url = getChatUrl('name/' + uname + '/fullname');
	$.getJSON(url)
	.done(function (data) {
		var fullNames = getItem('full-names');
		if (data == null) consoleLog('Oops, full name for "' + uname + '" not defined.');
		else if (fullNames.indexOf(uname + '=') < 0) {
			if (fullNames != '') fullNames += ',';
			fullNames += uname + '=' + data;
			setItem('full-names', fullNames);
			consoleLog('Full name for "' + uname + '" has been added.');
		}
	}).fail(function (jqxhr, textStatus, error) {
		consoleWarn('Oops, full name for "' + uname + '" not found.');
	});
}
function getFullName(uname, realName) {
	var fullName = '';
	var fullNames = getItem('full-names').split(',');
	for (var i=0; i<fullNames.length; i++) {
		if (fullNames[i].indexOf(uname + '=') == 0) {
			fullName = fullNames[i].split('=')[1] ? fullNames[i].split('=')[1] : uname;
			if (!realName) {
				var arr = getItem('VIP').split(',');
				var idx = arr.indexOf(uname);
				if (idx >= 0) {
					arr = getItem('VIP-names').split(',');
					if (idx < arr.length) fullName = arr[idx];
				}
			}
			break;
		}
	}
	if (fullName == '') {
		fullName = uname;
		loadFullName(uname);
	}
	return toTitleCase(fullName);
}
function loadGroupDesc(groupName) {
	var url = getChatUrl('groups/' + groupName + '/desc');
	$.getJSON(url)
	.done(function (data) {
		var groupDescs = getItem('group-descs');
		if (data == null) consoleLog('Oops, group "' + groupName + '" not defined.');
		else if (groupDescs.indexOf(groupName + '=') < 0) {
			if (groupDescs != '') groupDescs += ',';
			groupDescs += groupName + '=' + data;
			setItem('group-descs', groupDescs);
			consoleLog('Group description of "' + groupName + '" has been added.');
		}
	}).fail(function (jqxhr, textStatus, error) {
		consoleWarn('Oops, group "' + groupName + '" not found.');
	});
}
function getGroupDesc(groupName) {
	var groupDesc = '';
	var groupDescs = getItem('group-descs').split(',');
	for (var i=0; i<groupDescs.length; i++) {
		if (groupDescs[i].indexOf(groupName + '=') == 0) {
			groupDesc = groupDescs[i].split('=')[1] ? groupDescs[i].split('=')[1] : groupName;
			break;
		}
	}
	if (groupDesc == '') {
		groupDesc = groupName;
		loadGroupDesc(groupName);
	}
	return groupDesc;
}
function isUserSaved(uname) {
	var pins = getItem('pins');
	return pins.indexOf(uname + '+') >= 0;
}
function isGroupSaved(group) {
	var groups = getItem('group-descs');
	return groups.indexOf(group + '=') >= 0;
}
function loadEmailAddress(uname, groupName) {
	if (groupName) {
		var gemails = [], email;
		var emails = getItem('emails');
		var	gpins = getItem('group-pins-' + hash(groupName));
		if (gpins) {
			gpins = gpins.split(',');
			for (var i=0; i<gpins.length; i++) {
				uname = getPlayerName(gpins[i]);
				email = getEmailAddress(uname);
				if (email != '') gemails.push(email);
			}
			if (gemails.length == gpins.length) { // do not save if not complete
				if (emails != '') emails += ',';
				emails += groupName + '=' + gemails.join('|');
				setItem('emails', emails);
			}
		}
		return false;
	}
	var url = getChatUrl('name/' + uname + '/email');
	$.getJSON(url)
	.done(function (data) {
		var emails = getItem('emails');
		if (data == null) consoleLog('Oops, email for "' + uname + '" not defined.');
		else if (emails.indexOf(uname + '=') < 0) {
			if (emails != '') emails += ',';
			emails += uname + '=' + data;
			setItem('emails', emails);
			consoleLog('Email for "' + uname + '" has been added.');
		}
	}).fail(function (jqxhr, textStatus, error) {
		consoleWarn('Oops, email for "' + uname + '" not found.');
	});
}
function getEmailAddress(uname, groupName) {
	var email = '';
	var emails = getItem('emails').split(',');
	for (var i=0; i<emails.length; i++) {
		if (emails[i].indexOf(uname + '=') == 0) {
			email = emails[i].split('=')[1] ? emails[i].split('=')[1] : '';
			if (groupName) email = email.split('|').join(',');
			break;
		}
	}
	if (email == '') loadEmailAddress(uname, groupName);
	return email;
}
function getInitial(uname, groupName) {
	var s = '', fullName;
	if (groupName) fullName = getGroupDesc(uname);
	else fullName = getFullName(uname);
	var arr = fullName.split(' ');
	for (var i=0; i<Math.min(3, arr.length); i++) { // max 3 letters
		s += arr[i].substring(0, 1);
	}
	if (s == '') s = uname.substring(0, 1);
	return s.toUpperCase();
}
var iconColors = ['000066', '003366', '006666', '330066', '333366', '336666', '660066', '663366', '666666', '990066', '993366', '996666',
	'CC0066', 'CC3366', 'CC6666', 'FF0066', 'FF3366', 'FF6666']; // https://www.w3schools.com/colors/colors_shades.asp
function getUserIcon(uname, groupName) { // https://davidryanweb.com/using-placehold-it-for-smarter-prototyping/
	var i = Math.abs(parseInt(hash(uname), 10)) % iconColors.length;
	return 'https://placehold.it/50/' + iconColors[i] + '/fff&text=' + getInitial(uname, groupName);
}
var chatAlertBackgrounds = ['dff0d8', 'dff0d8', 'dff0d8', 'd9edf7', 'd9edf7', 'd9edf7', 'dff0d8', 'dff0d8', 'dff0d8', 'fcf8e3', 'fcf8e3', 'fcf8e3', 'f2dede', 'f2dede', 'f2dede', 'f2dede', 'f2dede', 'f2dede'];
function chatAlertBackground(uname) {
	var i = Math.abs(parseInt(hash(uname), 10)) % chatAlertBackgrounds.length;
	return 'background-color:#' + chatAlertBackgrounds[i] + ' !important;';
}
var chatAlertColors = ['3c763d', '3c763d', '3c763d', '31708f', '31708f', '31708f', '3c763d', '3c763d', '3c763d', '8a6d3b', '8a6d3b', '8a6d3b', 'a94442', 'a94442', 'a94442', 'a94442', 'a94442', 'a94442'];
function chatAlertColor(uname) {
	var i = Math.abs(parseInt(hash(uname), 10)) % chatAlertColors.length;
	return '#' + chatAlertColors[i];
}
var chatAlertClasses = ['success', 'success', 'success', 'info', 'info', 'info', 'success', 'success', 'success', 'warning', 'warning', 'warning',
	'danger', 'danger', 'danger', 'danger', 'danger', 'danger'];
function chatAlertClass(uname) {
	var i = Math.abs(parseInt(hash(uname), 10)) % chatAlertClasses.length;
	return 'alert-' + chatAlertClasses[i];
}
function chatTime(epochMS) { // epochMS = 1420981587343
	if (epochMS == undefined) return '00:00';
	var s = '' + epochMS; // in case epochMS is an integer (1420981587343) because match is for a string
	s = s.match(/^([\w\-]+)/)[0]; // get first word, in case in a format like "1420981587343 (11/01/2015 20:06:27)"
	var ms = parseInt(s);
	var t = new Date(ms);
	var dd = '' + t.getDate();
	var mm = '' + (t.getMonth() + 1);
	var yyyy = t.getFullYear();
	//var timestamp = (dd[1]?dd:"0"+dd[0]) + '/' + (mm[1]?mm:"0"+mm[0]) + '/' + yyyy + ' ' + [t.getHours().padLeft(), t.getMinutes().padLeft(), t.getSeconds().padLeft()].join(':'); // 11/01/2015 20:06:27
	var timestamp = (dd[1]?dd:"0"+dd[0]) + '/' + (mm[1]?mm:"0"+mm[0]) + ' ' + yyyy + ' ' + [t.getHours().padLeft(), t.getMinutes().padLeft()].join(':'); // 11/01/2015 20:06
	var d = new Date();
	yyyy = d.getFullYear().toString();
	mm = (d.getMonth()+1).toString(); // getMonth() is zero-based
	dd = d.getDate().toString();
	s = (dd[1]?dd:"0"+dd[0]) + '/' + (mm[1]?mm:"0"+mm[0]) + '/' + yyyy; // 11/01/2015
	if (timestamp.indexOf(s) >= 0) timestamp = timestamp.substring(11); // skip date (20:06:27)
	else if (timestamp.indexOf(' ' + yyyy) >= 0) timestamp = timestamp.substring(0,5) + timestamp.substring(10); // skip year (11/01 20:06:27)
	return timestamp;
}
function loadChatImage() {
	var url = getItem('chat-image-src');
	if (url != '')
		$('.chat-message').css('background-image', 'url(' + url + ')');
	else {
		localforage.getItem('chat-image-src').then(function(value) {
			if (value != null) $('.chat-message').css('background-image', 'url(' + value + ')');
		}).catch(function(err) { // This code runs if there were any errors
		});
	}
}
function changeChatImage(id, filename) {
	var base64 = window.btoa($('#' + id).data('data'));
	var ext = getFileExt(filename);
	var imgSrc = 'data:image/' + ext + ';base64,' + base64;
	localforage.setItem('chat-image-src', imgSrc, function() {
		setItem('chat-image-src', '');
		loadChatImage();
		consoleLog('Chat background image has been saved');
	});
}
function changeChatImageError(errMsg) {
	alert(errMsg.split('<br>').join('\n'));
}
function hideChatPopupMenu(click) {
	if (click) {
		$('#chat-receiver-popup').hide();
		$('#chat-sender-popup').hide();
		return false;
	}
	setTimeout(function(){
		$('#chat-receiver-popup').hide();
		$('#chat-sender-popup').hide();
	}, 0);
}
function chatDeselectAll() {
	$('.chat-message-selected').removeClass('chat-message-selected');
	hideChatPopupMenu(true);
}
function clickChatMessage(event, id, popupId) {
	hideChatPopupMenu(true);
	if ($('#' + id).hasClass('chat-message-selected')) {
		$('#' + id).removeClass('chat-message-selected');
		$('#' + popupId).hide();
	} else {
		var x1 = $('#conversation-dialog .modal-body').offset().left;
		var y1 = $('#conversation-dialog .modal-body').offset().top; // 340
		var x = event.pageX - x1 + 8;
		var y = event.pageY - y1 + 8; // 350 - 340 + 8
		var w = $('#conversation-dialog .modal-body').width();
		var h = $('#conversation-dialog .modal-body').height(); // max value of y
		if ($('#conversation-dialog').hasClass('wide-modal')) {
			w = $(window).width() + $('#conversation-dialog').scrollLeft();
			h = $(window).height() + $('#conversation-dialog').scrollTop() - $('#conversation-dialog .modal-header').outerHeight();
		}
		x = Math.min(x, w - $('#' + popupId).outerWidth() - 8);
		y = Math.min(y, h - $('#' + popupId).outerHeight() - 8);
		$('#' + id).addClass('chat-message-selected');
		$('#add-admin').hide();
		$('#del-admin').hide();
		$('#add-user').hide();
		$('#del-user').hide();
		$('#leave-group').hide();
		var group = $('#conversation-dialog').attr('group');
		if (popupId == 'chat-receiver-popup') {
			$('.chat-message-main-sender').parent().removeClass('chat-message-selected');
			$('#chat-receiver-popup #selected').html($('.chat-message-selected').length);
			if (group) { // make sure it is loaded from database
				var admins = JSON.stringify(JSON.parse(group).admins);
				var uname = $('#' + id + ' .chat-name-meta').attr('user');
				group = group.split('"owner":"').join(''); // remove owner
				if (uname && admins.indexOf('"' + userName + '"') >= 0 && $('.chat-message-selected').length == 1) { // group admin ?
					if (group.indexOf('"' + uname + '"') < 0) { // not a member
						$('#add-user').show();
						$('#del-user').hide();
						$('#add-admin').hide();
						$('#del-admin').hide();
					} else {
						$('#add-user').hide();
						$('#del-user').show();
						if (admins.indexOf('"' + uname + '"') >= 0) {
							$('#add-admin').hide();
							$('#del-admin').show();
						} else {
							$('#add-admin').show();
							$('#del-admin').hide();
						}
					}
				}
			}
		} else {
			$('.chat-message-main-receiver').parent().removeClass('chat-message-selected');
			$('#chat-sender-popup #selected').html($('.chat-message-selected').length);
			if (group) $('#leave-group').show();
		}
		$('#' + popupId).css({display: "block", left: x, top: y});
	}
}
function chatTimeStyle() {
	if ($(window).width() <= smallWidth) return 'style="margin-right:-8px"';
	return '';
}
function chatReplyFlag() {
	return '<i reply-msg=""></i>'; // this is a flag
}
function chatReplyMessage(uname, groupName) {
	if (!checkGroupMember(groupName)) return false;
	//hideChatPopupMenu();
	var key = $('.chat-message-selected').attr('id');
	if (groupName) uname = $('#' + key + ' .chat-name-meta').attr('user');
	var time = $('#' + key + ' .chat-message-time').text();
	var msgText = getChatMessage($('#msg-' + key).html());
	msgText = msgText.substring(0, 80);
	var message = '<div class="reply-msg row ' + chatAlertClass(uname) + '" style="border-left:4px solid ' + chatAlertColor(uname) + ';margin:0"><div class="col-sm-10 col-xs-10" style="padding:0"><div class="chat-name-meta" style="overflow-x:auto"><b class="' + chatAlertClass(uname) + '">' + getFullName(uname) + '</b><div class="chat-message-text ' + chatAlertClass(uname) + '" style="font-size:100%;font-weight:normal;margin:-8px 0 0 -4px !important">' + msgText + '</div></div></div><div class="col-sm-2 col-xs-2 pull-right chat-sideBar-time"><span class="chat-time-meta pull-right" ' + chatTimeStyle() + '>' + time + '</span></div></div>' + chatReplyFlag();
	setTimeout(function(){
		//$('#conversation-dialog').modal('hide'); // in case user cancel to send a message
		sendMessageDlg(groupName || uname, message, false, groupName);
	}, 0);
}
function chatForwardMessage(groupName) {
	if (!checkGroupMember(groupName)) return false;
	//hideChatPopupMenu();
	var key = $('.chat-message-selected').attr('id');
	var message = $('#' + key + ' .chat-message-text').html();
	setTimeout(function(){
		//$('#conversation-dialog').modal('hide');
		sendMessageDlg(undefined, message, true, groupName);
	}, 0);
}
function chatResendMessage(uname, groupName) {
	if (!checkGroupMember(groupName)) return false;
	//hideChatPopupMenu();
	var key = $('.chat-message-selected').attr('id');
	var message = $('#' + key + ' .chat-message-text').html();
	setTimeout(function(){
		//$('#conversation-dialog').modal('hide');
		sendMessageDlg(uname, message, true, groupName);
	}, 0);
}
function chatDeleteMessages(node, uname, groupName) { // node = 'sent' or 'inbox'
	var n = $('.chat-message-selected').length;
	if (n == 0) {
		stopSpinner();
		return false; // all was deleted
	}
	var key = $('.chat-message-selected').attr('id');
	var action = ''; // do not delete users/messages/groups/groupname/key
/*	if (groupName && 1 == 2) { // do not use this anymore
		action += '$("#' + key + '").remove();'; // remove message element
		action += 'chatDeleteMessages("' + node + '","' + uname + '","' + groupName + '");';
		var url = 'messages/groups/' + uname + '/' + key;
		var obj = {}; // ajax is now able to do a multi-path write!
		obj['deleted/' + userName] = getEpoch();
		postObject('PATCH', url, obj, action);
	}*/
	var path = 'messages/' + userName + '/' + node;
	localforage.getItem(path).then(function(data) {
		if (data == null) {
			alert('Oops, unable to delete messages because load "' + path + '" failed');
			return false;
		}
		if (!data[key]) return false;
		data[key].deleted = 1;
		localforage.setItem(path, data, function() {
			path = 'messages/' + userName + '/' + uname;
			localforage.getItem(path).then(function(data) {
				if (data == null) {
					alert('Oops, unable to delete messages because load "' + path + '" failed');
					return false;
				}
				if (!data[key]) return false;
				data[key].deleted = 1;
				localforage.setItem(path, data, function() {
					action += '$("#' + key + '").remove();'; // remove message element
					action += 'chatDeleteMessages("' + node + '","' + uname + '","' + groupName + '");';
					var obj = {}; // ajax is now able to do a multi-path write!
					obj[node + '/' + key + '/deleted'] = 1;
					obj[uname + '/' + key + '/deleted'] = 1;
					postObject('PATCH', 'messages/' + userName, obj, action);
					consoleLog('Message "' + key + '" has been removed');
				});
			}).catch(function(err) { // This code runs if there were any errors
			});
		});
	}).catch(function(err) { // This code runs if there were any errors
	});
}
function chatDeleteMessage(uname, groupName) {
	hideChatPopupMenu();
	var key = $('.chat-message-selected').attr('id'), t = '', node = '';
	if ($('#' + key + ' .chat-sender').length) {
		node = 'sent';
		t = 'sent at ' + $('#' + key + ' .chat-message-time').text();
	} else if ($('#' + key + ' .chat-receiver').length) {
		node = 'inbox';
		t = 'received at ' + $('#' + key + ' .chat-message-time').text();
	}
	if (t == '') {
		alert('Oops, unable to delete the message.');
		return false;
	}
	var n = $('.chat-message-selected').length;
	if (n > 1) t += ' with other ' + (n-1) + ' message(s)';
	setTimeout(function(){
		if (confirm('Do you wish to delete message ' + t + ' ?')) {
			runSpinner();
			chatDeleteMessages(node, uname, groupName);
		}
	}, 250);
}
function chatCopyMessage() {
	hideChatPopupMenu();
	setTimeout(function(){
		var key = $('.chat-message-selected').attr('id');
		chatDeselectAll();
		window.prompt('Copy to clipboard:', $('#' + key).text());
	}, 250);
}
function makeGroupAdmin(groupName) {
	var key = $('.chat-message-selected').attr('id');
	var uname = $('#' + key + ' .chat-name-meta').attr('user');
	var fullName = $('#' + key + ' b').text();
	if (confirm('Do you wish to make "' + fullName + '" as a group admin ?')) {
		setData('group-name', groupName);
		setData('user-name', uname);
		addGroupAdmin(groupName, uname, 'sendMessage(false,"add-group-admin","' + groupName + '");alert("' + fullName + ' is now a group admin.");');
	}
}
function dismissGroupAdmin(groupName) {
	var key = $('.chat-message-selected').attr('id');
	var uname = $('#' + key + ' .chat-name-meta').attr('user');
	var fullName = $('#' + key + ' b').text();
	if (confirm('Do you wish to dismiss "' + fullName + '" as a group admin ?')) {
		setData('group-name', groupName);
		setData('user-name', uname);
		var obj = {}; // ajax is now able to do a multi-path write!
		postObject('DELETE', 'groups/' + groupName + '/admins/' + uname, obj, 'sendMessage(false,"remove-group-admin","' + groupName + '");alert("' + fullName + ' has been dismissed as a group admin.");');
	}
}
function addGroupUser(groupName) {
	var key = $('.chat-message-selected').attr('id');
	var uname = $('#' + key + ' .chat-name-meta').attr('user');
	setData('group-name', groupName);
	setData('user-name', uname);
	addGroupMember(groupName, uname);
}
function removeGroupUser(groupName) {
	var key = $('.chat-message-selected').attr('id');
	var uname = $('#' + key + ' .chat-name-meta').attr('user');
	setData('group-name', groupName);
	setData('user-name', uname);
	removeGroupMember(groupName, uname);
}
function leaveGroupUser(groupName) {
	var key = $('.chat-message-selected').attr('id');
	setData('group-name', groupName);
	leaveGroup(groupName);
}
function chatEmailMessage() {
	var groupName = $("#email-message-dialog form[name='email-message-form'] #group").val();
	var email = $("#email-message-dialog form[name='email-message-form'] #email").val();
	var spinId = runSpinner();
	var key = $('.chat-message-selected').attr('id');
	var url = firebaseUrl + 'email/new.json';
	var d = new Date();
	var t = d.toUTCString(); // Tue, 01 Apr 2016 13:16:02 GMT
	var obj={};
	obj['event'] = 'email';
	obj['email'] = email;
	obj['name'] = userFullName;
	if (groupName == '') obj['subject'] = userFullName + ' sent you a message.';
	else obj['subject'] = userFullName + ' sent you a message (' + groupName + ')';
	obj['message'] = escape($('#msg-' + key).html()) + '<br>' + window.top.location.href; // add app code
	obj['time'] = t;
	$.ajax({
		accept: "application/json",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		type: "POST", // do not use PUT because it will overwrite data
		url: url,
		data: JSON.stringify(obj), // serializes the form's elements.
		success: function(data) {
			alert('Your message has been sent successfully with ID = ' + data.name);
			$('#email-message-dialog').modal('hide');
		},
		error: function(xhr, status, error){ // fail
			alert('Oops, unable to send your message: ' + error);
		},
		complete: function(xhr, textStatus) {
			stopSpinner(spinId);
		}
	});
}
function chatEmailMessageDlg(uname, groupName) {
	//hideChatPopupMenu();
	var title = 'Email Message', icon = 'danger';
	var key = $('.chat-message-selected').attr('id');
	var message = $('#' + 'msg-' + key).html();
	var html = '<div class="modal wide-modal" id="email-message-dialog" tabindex="-1" role="dialog" aria-labelledby="email-message-dialog-title" style="display:none;padding-right:15px;overflow-y:auto" aria-modal="true">';
	html += '<div class="modal-dialog" style="max-width:' + desktopWidth + 'px"><div class="modal-content">';
	html += '<div class="modal-header alert-' + icon + '"><h4 class="modal-title alert btn-' + icon + '" id="email-message-dialog-title">' + title;
	html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></h4></div>';
	html += '<form name="email-message-form" method="post" command="chatEmailMessage();"><div class="modal-body">';
	html += '<div class="form-group"><input type="text" id="group" class="form-control hide" value="' + groupName + '"></div>';
	html += '<div class="form-group"><input type="text" id="email" name="email" class="form-control" placeholder="Enter email addresses" value="' + getEmailAddress(uname, groupName) + '"></div>';
	html += '<div id="message" contenteditable="true" placeholder="Type a message here..." class="form-control bg-info" style="width:100%;height:100%;padding:8px;color:black;" required>' + message + '</div>';
	html += '<div class="modal-footer">';
	html += '<button type="submit" class="btn btn-success" style="margin:2px 4px">Send</button>';
	html += '<button type="button" class="btn btn-primary" style="margin:2px 4px" data-dismiss="modal">Close</button></div>';
	html += '<div id="nice-url" class="panel-body" style="padding-top:0;padding-bottom:0"></div>';
	html += '<div id="show-file" class="panel-body"></div>';
	html += '</form></div></div></div>';
	showModal('email-message', html);
	setTimeout(function(){
		$('#email').focus();
		moveCaretToEnd($('#email')[0]);
	}, 250);
	$('#email').dblclick(function(){ // clear email
		$('#email').val('');
	});
	$("#email-message-dialog form[name='email-message-form']").on('submit',function(e){
		e.preventDefault();
		setTimeout($("#email-message-dialog form[name='email-message-form']").attr('command'), 0);
		return false; // avoid to execute the actual submit of the form.
	});
}
function chatFontSizeInc() {
	var size = parseInt(getItem('chat-font-size') || 125, 10);
	size += 5;
	setItem('chat-font-size', size);
	$('.chat-message-body .chat-message-text').css('font-size', size + '%');
}
function chatFontSizeDec() {
	var size = parseInt(getItem('chat-font-size') || 125, 10);
	size -= 5;
	setItem('chat-font-size', size);
	$('.chat-message-body .chat-message-text').css('font-size', size + '%');
}
function reshowApp(groupName, appUrl) {
	var uname = groupName || userName;
	setItem('app-' + uname, appUrl);
	showApp(groupName);
	if (groupName) {
		var url = 'groups/' + groupName;
		var obj = {}; // ajax is now able to do a multi-path write!
		obj['app'] = appUrl;
		postObject('PATCH', url, obj);
	}
}
function createApp(uname, groupName) {
	var spinId = runSpinner();
	var idx = Math.abs(hash(uname)) % apps.length;
	var app = apps[idx];
	for (var i = 0; i < apps.length; i++) {
		if (uname.indexOf(apps[i]) >= 0) app = apps[i];
	}
	if (debugging()) app = 'vmr'; // to make it easier
	var path = 'users/' + uname + '/user-defined';
	url = 'https://' + app + '.varisk.xyz/' + app + '/index.html?iframe=1&menu=' + stringToHex("openFlowChart('?" + app + "', '" + path + "')");
	path = firebaseUrl + app + '/flowchart/' + path + '.json';
	$.getJSON(path)
	.done(function (data) {
		if (data == null) {
			var spinId = runSpinner();
			$.getJSON(firebaseUrl + app + '/flowchart/examples.json')
			.done(function (data) {
				if (data != null) {
					postObject('PATCH', path, data, 'reshowApp("' + groupName + '","' + url + '");');
				}
			}).fail(function (jqxhr, textStatus, error) {
			}).always(function() {
				stopSpinner(spinId);
			});
		} else reshowApp(groupName, url); // already uploaded by other member
	}).fail(function (jqxhr, textStatus, error) {
	}).always(function() {
		stopSpinner(spinId);
	});
}
function refreshApp(groupName) {
	var uname = groupName || userName;
	$('#app-' + uname).parent().remove();
	setItem('app-' + uname, '');
	showApp(groupName);
}
function showApp(groupName) {
	var uname = groupName || userName;
	var url = getItem('app-' + uname);
	var title = 'My App';
	if (groupName) title = 'Group App';
	if (url == '') {
		//url = 'https://vmr.varisk.xyz/runr/features.html';
		if (groupName) {
			url = getChatUrl('groups/' + groupName + '/app');
			$.getJSON(url)
			.done(function (data) {
				if (data != null) {
					setItem('app-' + uname, data);
					showApp(groupName);
				} else createApp(uname, groupName);
			}).fail(function (jqxhr, textStatus, error) {
				createApp(uname, groupName);
			});
		} else createApp(uname, groupName);
		return false;
	}
	if (!$('#conversation-dialog #conversation #app-' + uname).length) {
		var h = $(window).height() - $('#conversation-dialog .modal-header').outerHeight() - $('#conversation-dialog .modal-footer').outerHeight() - parseInt($('#conversation-dialog .modal-body').css('padding-top') || 0, 10) - parseInt($('#conversation-dialog .modal-body').css('padding-b') || 0, 10) - 20 - 34;
		var s = '';
		if ((isMobile() && window.location.href.indexOf('index.html') >= 0) || debugging()) // PWA installed in mobile device
			s = '<center><span class="btn btn-success" onclick="openWindow(\'' + url + '\');">Full Screen</span>' +
			'<span class="btn btn-danger" onclick="$(\'#app-' + uname + '\').parent().remove();" style="margin-left:4px">Close ' + title + '</span><i class="btn btn-primary glyphicon glyphicon-flash" style="margin-left:4px" onclick="refreshApp(\'' + groupName + '\');" data-toggle="tooltip" title="Reload App"></i></center>';
		else s = '<center><span class="btn btn-danger" onclick="$(\'#app-' + uname + '\').parent().remove();">Close ' + title + '</span><i class="btn btn-primary glyphicon glyphicon-flash" style="margin-left:4px" onclick="refreshApp(\'' + groupName + '\');" data-toggle="tooltip" title="Reload App"></i></center>';
		$('#conversation-dialog #conversation').append('<div style="border-radius:4px;margin:4px 8px;padding:4px;" class="alert-info"><iframe id="app-' + uname + '" src="' + url + '" style="overflow:auto;width:100%;min-height:' + h + 'px;" frameBorder="0"></iframe>' + s + '</div>');
	}
	scrollToId('conversation-dialog', 'app-' + uname, 0, true);
}
function adjustChatTitle(ms) {
	if (!ms) ms = 0;
	setTimeout(function(){
		if (hasScroll($('#chat-title .chat-message-text')[0], 'x')) { // has horizontal scrollbar
			if (!isMobile()) $('#chat-title').css('margin-top', '-12px'); // the height of scrollbar so thin in mobile
			//$('#chat-title .chat-name-meta').css('overflow-x', 'hidden'); // it is working now
		} else $('#chat-title').css('margin-top', '-4px');
	}, ms);
}
function popUpHtml(key, popupClass, mw, action) {
	var col = '', pos = 'right';
	if (debugging() && !action) col = 'background:rgba(255,0,0,0.5);';
	if (popupClass.indexOf('sender') >= 0) pos = 'left';
	if (action) mw = 100;
	else mw = Math.max(20, Math.floor((100 - mw) + (15+8)/$(window).width()*100));
	return '<div onclick="clickChatMessage(event,\'' + key + '\',\'' + popupClass + '\')" style="position:absolute;' + pos + ':0px;width:' + mw + '%;height:100%;z-index:9;' + col + 'cursor:pointer"></div>';
}
function getVIPMessage(message, uname, realName, fullname) {
	function replaceWords(message, uname, fullname) {
		var words = getItem('VIP-' + uname);
		if (words) {
			words = words.split(',');
			for (var i=0; i<words.length; i++) {
				message = message.split(words[i]).join(fullname);
			}
		}
		return message;
	}
	message = message.split(realName).join(fullname);
	message = replaceWords(message, uname, fullname);
	message = message.split(userFullName).join(userVIPName);
	message = replaceWords(message, userName, userVIPName);
	return message;
}
function showChatMessages(data, uname, groupName, showChatList) {
	if (data == null) return false;
	var item = 'unread-time-' + (groupName || uname), t, arr = [], reads = [], actions = [];
	t = getItem(item);
	if (!t) setItem(item, getEpoch()); // create if not found
	t = parseInt(getItem(item) || getEpoch(), 10);
	var size = parseInt(getItem('chat-font-size') || 125, 10), fs;
	if (isMobile()) fs = size + 20 * 125/size;
	else fs = fs = size + 10 * 125/size;
	$('#conversation-dialog #chat-receiver-popup .dropdown-menu').css('font-size', fs + '%');
	$('#conversation-dialog #chat-sender-popup .dropdown-menu').css('font-size', fs + '%');
	var n = Object.keys(data).length;
	var html = '', prevSender = false;
	var fullname, realName, VIP = false, lastMsgId;
	if (!groupName && getItem('VIP').indexOf(uname) >= 0) {
		fullname = getFullName(uname);
		realName = getFullName(uname, true);
		VIP = true;
	}
	for (var i=0; i<n; i++) {
		var key = Object.keys(data)[i];
		var obj = data[key];
		if (i == n-1) lastMsgId = key;
		if (obj.deleted) continue; // skip if already deleted
		//if (groupName && obj.deleted && obj.deleted[userName]) continue; // skip if already deleted
		if (parseInt(obj.ver || 0) < cryptoKeyVersion && !groupName) arr.push(key);
		var mms = '', mmr = '', sender = '', center1 = '', center2 = '', col = 'info', bgcol = '', readSign = '';
		var mw = 75 + (60-75)/(desktopWidth - desktopMinWidth)*($(window).width() - desktopMinWidth);
		mw = Math.floor(Math.max(60, Math.min(100, mw)));
		if ($(window).width() < desktopMinWidth) {
			mms = 'padding-right:8px !important;';
			mmr = 'margin-left:-8px !important;';
		} else mms = 'padding-right:12px !important;';
		mms += 'margin-left:' + (100-mw) + '% !important;max-width:' + mw + '% !important;';
		if (obj.action) {
			fs = size * 0.85; // show smaller for system message
			center1 = '<center>';
			center2 = '</center>';
			col = 'danger';
			bgcol = 'background-color:#f2dede;border-radius:8px;';
			mmr += 'max-width:100% !important;';
		} else {
			fs = size;
			mmr += 'max-width:' + mw + '% !important;';
		}
		//html += '<div style="position:relative;display:inline-block;width:100%;">';
		if ((obj.user && obj.user != userName) || obj.action) { // receive message
			if (groupName && !obj.action)
				sender = '<div class="chat-name-meta" user="' + obj.user + '" style="font-size:' + fs + '%;color:' + chatAlertColor(obj.user) + '"><b>' + getFullName(obj.user) + '</b></div>';
			//html += popUpHtml(key, 'chat-receiver-popup', mw, obj.action);
			if (prevSender) mmr += 'margin-top:4px;';
			html += '<div id="' + key + '" onclick="clickChatMessage(event,\'' + key + '\',\'chat-receiver-popup\')" class="row chat-message-body">' + center1 + '<div class="col-sm-12 chat-message-main-receiver" style="margin-bottom:4px;' + mmr + '"><div class="chat-receiver alert-' + col + '" style="max-width:100%;' + bgcol + '">' + sender + '<div id="msg-' + key + '" class="chat-message-text" style="font-size:' + fs + '%;font-weight:normal;">';
			prevSender = false;
		} else { // send message
			//html += popUpHtml(key, 'chat-sender-popup', mw);
			html += '<div id="' + key + '" onclick="clickChatMessage(event,\'' + key + '\',\'chat-sender-popup\')" class="row chat-message-body">' + center1 + '<div class="col-sm-12 chat-message-main-sender" style="' + mms + '"><div class="chat-sender alert-success" style="max-width:100%;"><div id="msg-' + key + '" class="chat-message-text" style="font-size:' + fs + '%;font-weight:normal;">';
			if (!groupName) reads.push(key);
			readSign = '<i class="glyphicon glyphicon-ok pull-right" onclick="stopEventPropagation(event);showReadList(\'' + key + '\',\'' + uname + '\',\'' + groupName + '\')" style="margin-left:4px;color:#9a9a9a;cursor:pointer;"></i>';
			prevSender = true;
		}
		var message = decryptMessage(obj.ver, userName, groupName, obj.message);
		if (VIP) message = getVIPMessage(message, uname, realName, fullname);
		html += message;
		html += '</div>' + readSign + '<span class="chat-message-time pull-right">' + chatTime(obj.time) + '</span></div></div>' + center2 + '</div>';
		//html += '</div>';
		if (obj.time > t) {
			setItem(item, obj.time);
			if (obj.action) actions.push(obj.action);
			informMessageRead(obj.user || obj.msgTo, key);
		}
	}
	$('#conversation-dialog #conversation').html(html);
	$('#conversation-dialog .youtube').parent().parent().css('min-width', '100%'); // make sure its width is full
	if ($('#conversation-dialog #conversation .run-r').length) {
		$('#conversation-dialog #conversation .run-r').parent().parent()
			.attr('style', function(i,s) { return (s || '') + 'width:100% !important;'}) // https://stackoverflow.com/questions/2655925/how-to-apply-important-using-css
			.parent().css('max-width', '100%'); // change width for R/Python flowchart model
		$('#conversation-dialog #conversation .chat-receiver .run-r').parent().parent().parent().css('padding-right', '0');
		$('#conversation-dialog #conversation .chat-sender .run-r').parent().parent().parent()
			.attr('style', function(i,s) { return (s || '') + 'margin-left:-4px !important;'});
	}
	for (var i=0; i<actions.length; i++) {
		for (var j=i+1; j<actions.length; j++) {
			if (actions[j] == actions[i]) actions[j] = ''; // do not execute more than once
		}
		if (actions[i]) {
			if (debugging()) alert('Action to execute: ' + actions[i]);
			setTimeout(actions[i], 0);
		}
	}
	if (lastMsgId) {
		scrollToId('conversation-dialog', lastMsgId, 0, true);
		setTimeout(function() { // in case not all images showing up therefore the height is less than the image's height
			scrollToId('conversation-dialog', lastMsgId, 0, true);
		}, 1000);
	} else {
		$('#conversation-dialog #conversation').css('opacity', '0'); // avoid flicker
		setTimeout(function() {
			$('#conversation-dialog #conversation').css('opacity', '0.9');
		}, 1000);
		gotoBottom('#conversation-dialog .chat-message', 1000);
	}
	if (groupName) checkGroupAdminMenu(groupName);
	if (showChatList) loadChats();
	encryptChat(userName + '/' + uname, arr);
	readReceipts(uname, groupName, reads);
}
function checkGroupAdminMenu(groupName) {
	var url = getChatUrl('groups/' + groupName);
	$.getJSON(url)
	.done(function (data) {
		if (data != null)
			$('#conversation-dialog').attr('group', JSON.stringify(data));
	}).fail(function (jqxhr, textStatus, error) {
	}).always(function() {
	});
}
/*function deleteSavedMessages(path, arr, idx) {
	var obj = {}; // ajax is now able to do a multi-path write!
	if (!arr) {
		postObject('DELETE', path, obj);
		return false;
	}
	if (idx == undefined) idx = 0;
	arr = arr.split(',');
	if (arr.length == 0 || idx > arr.length-1) return false;
	var action = 'deleteSavedMessages("' + path + '","' + arr.join(',') + '",' + (idx+1) + ');';
	postObject('DELETE', path + '/' + arr[idx], obj, action); // delete one-by-one too slow
}
function saveChatMessages(path, data, data2) {
	var obj = {}; // ajax is now able to do a multi-path write!
	var n = 0, arr = [];
	var path2 = path.split('messages/').join('backup/messages/');
	if (data != null) {
		//n = Math.min(10, Object.keys(data).length);
		n = Object.keys(data).length;
		for (var i=0; i<n; i++) {
			var key = Object.keys(data)[i]; // username / group name
			obj[key] = data[key];
			arr.push(key);
		}
		localforage.setItem(path, data2, function() {
			//if (n > 0) postObject('PATCH', path2, obj, 'deleteSavedMessages("' + path + '","' + arr.join(',') + '");');
			if (n > 0) postObject('PATCH', path2, obj, 'deleteSavedMessages("' + path + '");');
			consoleLog('Chat "' + path + '" (' + n + ' messages) has been saved');
		});
	}
}
function prepareChatMessages(path, data, uname, groupName, showChatList) {
	if (groupName || getItem('chat-localforage') != 1) {
		showChatMessages(data, uname, groupName, showChatList);
		if (data == null) { // load from IndexedDB
			localforage.getItem(path).then(function(data1) {
				if (data1 != null) showChatMessages(data1, uname, groupName, showChatList);
			}).catch(function(err) { // This code runs if there were any errors
			});
		} else { // TO-DO: change <img src with base64 so it is always showing the image when offline
			localforage.setItem(path, data, function() {
				consoleLog('Chat "' + path + '" has been saved');
			});
		}
		return false;
	}
	localforage.getItem(path).then(function(data1) {
		var data2 = data;
		if (data1 != null) {
			var s = JSON.stringify(data1);
			if (data != null) {
				s = s.substring(0, s.length-1); // skip last }
				s += ',' + JSON.stringify(data) + '}';
			}
			try {
				data2 = JSON.parse(s);
			} catch (e) {
				data2 = data;
				localforage.removeItem(path).then(function() {
					consoleLog('Chat "' + path + '" has been removed');
				}).catch(function(err) {
				});
			}
		}
		if (data == null && data2 == null) { // restore from backup (how about user clears all messages ?)
			var url = getChatUrl('backup/messages/' + userName + '/' + uname);
			$.getJSON(url)
			.done(function (data) {
				showChatMessages(data, uname, groupName, showChatList);
				saveChatMessages(path, data, data);
			}).fail(function (jqxhr, textStatus, error) {
				consoleWarn('Oops, check backup messages failed.');
			}).always(function() {
			});
			return false;
		}
		showChatMessages(data2, uname, groupName, showChatList);
		saveChatMessages(path, data, data2);
	}).catch(function(err) { // This code runs if there were any errors
	});
}*/
function checkChatNewMessages(path, key, data, uname, groupName, n) {
	if (n == 0) {		
		var spinId = runSpinner();
		setData(path + 'spinId', spinId);
	} else updateStatusBar('Loading new message #' + n + '...');
	$.getJSON(getChatUrl(path + '/' + key))
	.done(function (data2) {
		var done = false;
		if (data2 != null) {
			data[key] = data2;
			if (data2.next) {
				if (n == 0) openStatusBar('Loading new messages...');
				checkChatNewMessages(path, data2.next, data, uname, groupName, n+1);
			} else {
				if (n > 0) {
					localforage.setItem(path, data, function() {
						showChatMessages(data, uname, groupName);
						setItem('last-msg-' + path, key);
						consoleLog('Chat linked list "' + path + '" has been updated');
						closeStatusBar();
					});
				}
				done = true;
			}
		} else done = true;
		if (done) {
			if (n > 0) closeStatusBar();
			var spinId = getData(path + 'spinId', true);
			stopSpinner(spinId);
		}
	}).fail(function (jqxhr, textStatus, error) {
		closeStatusBar();
		var spinId = getData(path + 'spinId', true);
		stopSpinner(spinId);
	});
}
function addChatLinkedList(path, key, dataStr, uname, groupName, check) {
	var data = JSON.parse(hexToString(dataStr));
	localforage.setItem(path, data, function() {
		setItem('last-msg-' + path, key);
		if (check) checkChatNewMessages(path, key, data, uname, groupName, 0);
		consoleLog('Sent messages linked list "' + path + '" has been added');
	});
}
function checkChatLinkedList(path, data, uname, groupName, check) {
	var lastKey = getItem('last-msg-' + path);
	var n = Object.keys(data).length, key, key1, key2;
	var obj = {}; // ajax is now able to do a multi-path write!
	for (var i=n-1; i>0; i--) {
		key1 = Object.keys(data)[i-1]; // previous key
		key2 = Object.keys(data)[i]; // current key
		if (!key) key = key2;
		if (data[key1].next) break; // the previous nodes should be set already
		if (key2 != lastKey) {
			obj[key1 + '/next'] = key2;
			data[key1].next = key2;
		}
	}
	if (!key && n > 0) key = Object.keys(data)[0]; // for n == 1
	if (!$.isEmptyObject(obj)) { // JSON.stringify(obj) != '{}'; (https://stackoverflow.com/questions/13973927/check-if-object-is-empty-with-javascript-jquery)
		postObject('PATCH', path, obj, 'addChatLinkedList("' + path + '","' + key + '","' + stringToHex(JSON.stringify(data)) + '","' + uname + '","' + groupName + '",' + check + ')');
	} else if (check && lastKey != '') checkChatNewMessages(path, lastKey, data, uname, groupName, 0);
	else if (lastKey == '' && key) setItem('last-msg-' + path, key);
}
function loadChat(uname, groupName, showChatList, tryOnError) {
	var spinId = runSpinner();
	var path = 'messages/' + userName + '/' + uname;
	var url = getChatUrl(path);
	//if (groupName) url = getChatUrl('messages/groups/' + groupName);
	$.getJSON(url)
	.done(function (data) {
		if (data == null) {
			alert('Currently there is no messages found.');
		} else {
			showChatMessages(data, uname, groupName, showChatList);
			if (navigator.onLine) {
				localforage.setItem(path, data, function() {
					checkChatLinkedList(path, data, uname, groupName);
					consoleLog('Chat "' + path + '" has been saved');
				});
			}
		}
	}).fail(function (jqxhr, textStatus, error) {
		if (tryOnError) showChat(uname, groupName, showChatList, true)
		else alert('Oops, open conversation failed.');
	}).always(function() {
		stopSpinner(spinId);
	});
}
function showChat(uname, groupName, showChatList, tryOnError) {
	// 1. Load from localForage
	// 2. If empty load from firebase => save to localForage
	// 3. Show the messages
	// 4. If no linked list => create and upload it
	// 5. Save the latest key
	// 6. Load latest key from Firebase if there is a new message (check next key)
	// 7. Repeat step 6 until there is no new message found
	groupName = groupName || '';
	var path = 'messages/' + userName + '/' + uname;
	localforage.getItem(path).then(function(data) {
		var lastKey = getItem('last-msg-' + path);
		if (data != null && (lastKey || !navigator.onLine || tryOnError)) {
			showChatMessages(data, uname, groupName, showChatList);
			if (navigator.onLine) checkChatLinkedList(path, data, uname, groupName, true);
		} else loadChat(uname, groupName, showChatList, data != null);
	}).catch(function(err) { // This code runs if there were any errors
	});
}
function appendChat(key, obj) { // for the time being ignore key, just reload the whole messages
	var uname = $('#conversation-dialog #conversation').attr('user');
	var groupName = $('#conversation-dialog #conversation').attr('group');
	var path = 'messages/' + userName + '/' + (groupName || uname);
	localforage.getItem(path).then(function(data) {
		var lastKey = getItem('last-msg-' + path);
		data[lastKey].next = key;
		data[key] = obj;
		localforage.setItem(path, data, function() {
			setItem('last-msg-' + path, key);
			chatDeselectAll();
			showChatMessages(data, uname, groupName);
		});
	}).catch(function(err) { // This code runs if there were any errors
	});	
}
function openChat(uname, groupName, showChatList) {
	if (!uname || !validUserName()) return false;
	groupName = groupName || '';
	var fullName, statusId = 'online-status-';
	if (groupName) {
		uname = groupName;
		fullName = getGroupDesc(groupName);
		statusId = 'group-members-';
	} else fullName = getFullName(uname);
	statusId += uname;
	var title = fullName, icon = 'danger';
	var fullscreen = canFullScreenModal(), mc = 'wide-modal';
	if (fullscreen) mc = fullScreenModalClass();
	var html = '<div class="modal ' + mc + '" id="conversation-dialog" tabindex="-1" role="dialog" aria-labelledby="conversation-dialog-title" style="display:none;padding-right:15px;overflow-y:auto" aria-modal="true">';
	html += '<div class="modal-dialog" style="' + fullScreenModalWidth() + '"><div class="modal-content">';
	html += '<div class="modal-header btn-' + icon + '">';
	html += '<div class="row chat-heading" style="background-color:#f2dede !important;border-radius:8px;"><div class="col-sm-2 col-xs-2 chat-heading-avatar">';
	html += '<div class="chat-heading-avatar-icon"><img src="' + getUserIcon(uname, groupName) + '" onerror="' + loadImageOnError() + '"></div></div>';
	html += '<div class="col-sm-9 col-xs-9" id="chat-title" style="margin-top:-4px"><div class="chat-name-meta" style="overflow-x:hidden;margin-bottom:-8px;padding:8px !important">';
	html += '<b>' + fullName + '</b></div>';
	html += '<div class="chat-message-text alert-danger" style="font-size:100%;font-weight:normal;overflow-x:auto;margin:0 8px !important;padding:0 !important;white-space:nowrap;" id="' + statusId + '"></div></div>';
	html += '<div class="col-sm-1 col-xs-1  pull-right close" data-dismiss="modal" aria-label="Close" style="padding:6px 0;cursor:pointer">';
	html += '<i class="glyphicon glyphicon-remove pull-right" aria-hidden="true"></i></div></div></div>';
	var s = '';
	if ($(window).width() < desktopMinWidth) s = 'style="padding:0"';
	html += '<div class="modal-body alert-danger" ' + s + '>';
	html += '<div id="chat-receiver-popup" class="dropdown chat-popup" >';
	html += '<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style="display: block; position: static; margin-bottom: 5px; font-size: 120%;">';
	html += '<li><a id="reply-message" tabindex="-1" href="javascript:void(0)" onclick="chatReplyMessage(\'' + uname + '\',\'' + groupName + '\');"><i class="glyphicon glyphicon-comment"></i> Reply Message</a></li>';
	html += '<li><a id="receiver-forward-message" tabindex="-1" href="javascript:void(0)" onclick="chatForwardMessage(\'' + groupName + '\');"><i class="glyphicon glyphicon-share-alt"></i> Forward Message</a></li>';
	html += '<li><a id="receiver-delete-message" tabindex="-1" href="javascript:void(0)" onclick="chatDeleteMessage(\'' + uname + '\',\'' + groupName + '\');"><i class="glyphicon glyphicon-trash"></i> Delete Message</a></li>';
	html += '<li><a tabindex="-1" href="javascript:void(0)" onclick="chatCopyMessage();"><i class="glyphicon glyphicon-duplicate"></i> Copy Message</a></li>';
	html += '<li><a tabindex="-1" href="javascript:void(0)" onclick="chatDeselectAll();"><i class="glyphicon glyphicon-erase"></i> Deselect All</a></li>';
	html += '<li><a id="add-admin" style="display:none" tabindex="-1" href="javascript:void(0)" onclick="makeGroupAdmin(\'' + groupName + '\');"><i class="glyphicon glyphicon-star"></i> Make as a Group Admin</a></li>';
	html += '<li><a id="del-admin" style="display:none" tabindex="-1" href="javascript:void(0)" onclick="dismissGroupAdmin(\'' + groupName + '\');"><i class="glyphicon glyphicon-star-empty"></i> Dismiss as a Group Admin</a></li>';
	html += '<li><a id="add-user" style="display:none" tabindex="-1" href="javascript:void(0)" onclick="addGroupUser(\'' + groupName + '\');"><i class="glyphicon glyphicon-plus"></i> Add as a Group User</a></li>';
	html += '<li><a id="del-user" style="display:none" tabindex="-1" href="javascript:void(0)" onclick="removeGroupUser(\'' + groupName + '\');"><i class="glyphicon glyphicon-remove"></i> Remove as a Group User</a></li>';
	html += '<center><div style="font-size:90%">Selected messages: <span id="selected"></span></div></center>';
	html += '</ul></div>';
	html += '<div id="chat-sender-popup" class="dropdown chat-popup" >';
	html += '<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style="display: block; position: static; margin-bottom: 5px; font-size: 120%;">';
	html += '<li><a id="sender-forward-message" tabindex="-1" href="javascript:void(0)" onclick="chatForwardMessage(\'' + groupName + '\');"><i class="glyphicon glyphicon-share-alt"></i> Forward Message</a></li>';
	html += '<li><a id="resend-message" tabindex="-1" href="javascript:void(0)" onclick="chatResendMessage(\'' + uname + '\',\'' + groupName + '\');"><i class="glyphicon glyphicon-send"></i> Resend Message</a></li>';
	html += '<li><a id="sender-delete-message" tabindex="-1" href="javascript:void(0)" onclick="chatDeleteMessage(\'' + uname + '\',\'' + groupName + '\');"><i class="glyphicon glyphicon-trash"></i> Delete Message</a></li>';
	html += '<li><a tabindex="-1" href="javascript:void(0)" onclick="chatCopyMessage();"><i class="glyphicon glyphicon-duplicate"></i> Copy Message</a></li>';
	html += '<li><a tabindex="-1" href="javascript:void(0)" onclick="chatEmailMessageDlg(\'' + uname + '\',\'' + groupName + '\');"><i class="glyphicon glyphicon-envelope"></i> Email Message</a></li>';
	html += '<li><a tabindex="-1" href="javascript:void(0)" onclick="chatDeselectAll();"><i class="glyphicon glyphicon-erase"></i> Deselect All</a></li>';
	html += '<li><a id="leave-group" style="display:none" tabindex="-1" href="javascript:void(0)" onclick="leaveGroupUser(\'' + groupName + '\');"><i class="glyphicon glyphicon-remove"></i> Leave Group</a></li>';
	html += '<center><div style="font-size:90%">Selected messages: <span id="selected"></span></div></center>';
	html += '</ul></div>';
	html += '<div class="col-sm-12 chat-conversation alert-danger"><div class="row chat-message" style="height:100%">';
	html += '<div id="conversation" user="' + uname + '" group="' + groupName + '" style="padding:4px 0"></div></div></div>';
	html += '</div>';
	html += '<div class="modal-footer alert-info">';
	html += '<button type="button" class="btn btn-success" style="margin:2px 4px" onclick="chatFontSizeInc();" data-toggle="tooltip" title="Increase font size"><i class="glyphicon glyphicon-text-size"></i><i class="glyphicon glyphicon-plus-sign"></i></button>';
	html += '<button type="button" class="btn btn-primary" style="margin:2px 4px" onclick="chatFontSizeDec();" data-toggle="tooltip" title="Decrease font size"><i class="glyphicon glyphicon-text-size"></i><i class="glyphicon glyphicon-minus-sign"></i></button>';
	html += '<button type="button" class="btn btn-danger glyphicon glyphicon-picture" data-toggle="tooltip" title="Pick chat background image" style="position:relative;margin:2px 4px"><input type="file" id="attach-file" onsuccess="changeChatImage(\'attach-file\', \'fileName\')" onerror="changeChatImageError(\'errMsg\')" style="opacity:0;position:absolute;top:0;left:0;bottom:0;right:0;width:40px"></button>'; // need 40px otherwise Send Message not selectable
	html += '<button type="button" class="btn btn-warning" style="margin:2px 4px" onclick="postMessageToSW(\'change-chat-image\');" data-toggle="tooltip" title="Use random chat background image"><i class="glyphicon glyphicon-random"></i></button>';
	if (!groupName || isGroupMember(groupName))
		html += '<button type="button" class="btn btn-success" style="margin:2px 4px" onclick="$(\'#conversation-dialog1\').modal(\'hide\');sendMessageDlg(\'' + uname + '\',\'\',false,\'' + groupName + '\');" data-toggle="tooltip" title="Send Message"><i class="glyphicon glyphicon-send"></i></button>';
	if (groupName) title = 'group'; else title = 'my';
	html += '<button type="button" class="btn btn-info" style="margin:2px 4px" onclick="showApp(\'' + groupName + '\');" data-toggle="tooltip" title="Show ' + title + ' app"><i class="glyphicon glyphicon-globe"></i></button>';
	if ($(window).width() > mediumWidth)
		html += '<button type="button" class="btn btn-primary" style="margin:2px 4px" data-dismiss="modal">Close</button>';
	html += '</div></div></div></div>';
	html += '<script type="text/javascript">';
	html += 'if (window.File && window.FileReader && window.FileList && window.Blob) {';
	html += 'document.getElementById("attach-file").addEventListener("change", handleAttachFile, false);';
	html += '}';
	html += '$("[data-toggle=tooltip]").tooltip();';
	html += '</script>';
	showModal('conversation', html, fullscreen);
	adjustChatTitle(1000);
	loadChatImage();
	if (groupName) updateGroupStatus(groupName);
	else updateOnlineStatus(uname, true);
	setTimeout(function(){
		$("#conversation-dialog #conversation").focus();
	}, 250);
	showChat(uname, groupName, showChatList);
}
function encryptChat(path, arr, idx) {
	if (idx == undefined) idx = 0;
	if (arr.length == 0 || idx > arr.length-1 || !userKey) return false;
	var url = getChatUrl('messages/' + path + '/' + arr[idx]);
	$.getJSON(url)
	.done(function (data) {
		if (data != null) {
			data.message = decryptMessage(data.ver, userName, data.group, data.message);
			data.message = encryptMessage(cryptoVersion, userName, data.group, data.message);
			data.ver = cryptoVersion;
			var url = 'messages/' + path + '/' + arr[idx];
			postObject('PATCH', url, data);
			if (idx < arr.length-1) encryptChat(path, arr, idx + 1);
		}
	}).fail(function (jqxhr, textStatus, error) {
		consoleWarn('Unable to encrypt chat: ' + error);
	});
}
function readReceipts(uname, groupName, arr, idx, recheck) {
	if (idx == undefined) idx = arr.length-1; // descending
	if (arr.length == 0 || idx < 0) return false;
	var item = 'messages/' + userName + '/sent/read'; // combined in one item
	var path = 'messages/' + userName + '/sent/' + arr[idx] + '/read';
	localforage.getItem(item).then(function(val) {
		if (val == null || val.indexOf(arr[idx]) < 0) {
			var url = getChatUrl(path);
			$.getJSON(url)
			.done(function (data) {
				if (data != null) {
					$('#' + arr[idx] + ' .glyphicon-ok').css('color', '#31708f').removeClass('glyphicon-ok').addClass('glyphicon-saved');
					if (val != null) val += ',';
					val += arr[idx];
					localforage.setItem(item, val, function() {
						consoleLog('read receipt "' + path + '" has been saved');
					});
					if (recheck) {
						var keys = $('#conversation-dialog').data('keys');
						if (keys) keys = keys.split(',');
						else keys = [];
						keys.splice(keys.indexOf(arr[idx]), 1); // remove since its read already
						$('#conversation-dialog').data('keys', keys.join(','));
					}
				} else if (!recheck && !groupName) {
					var keys = $('#conversation-dialog').data('keys');
					if (keys) keys = keys.split(',');
					else keys = [];
					keys.push(arr[idx]);
					$('#conversation-dialog').data('keys', keys.join(','));
				}
				if (idx > 0) readReceipts(uname, groupName, arr, idx - 1, recheck);
			}).fail(function (jqxhr, textStatus, error) {
				consoleWarn('Unable to load read receipt: ' + error);
			});
		} else {
			$('#' + arr[idx] + ' .glyphicon-ok').css('color', '#31708f').removeClass('glyphicon-ok').addClass('glyphicon-saved');
			if (idx > 0) readReceipts(uname, groupName, arr, idx - 1, recheck);
		}
	}).catch(function(err) { // This code runs if there were any errors
	});
}
function showReadList(key, uname, groupName) {
	var spinId = runSpinner();
	var path = 'messages/' + userName + '/sent/' + key + '/read';
	var url = getChatUrl(path);
	$.getJSON(url)
	.done(function (data) {
		if (data != null) {
			var n = Object.keys(data).length, s = '';
			if (groupName) s = 'Read Receipts';
			for (var i=0; i<n; i++) {
				var key = Object.keys(data)[i];
				if (s) s += newLineAltert;
				if (groupName)
					s += getFullName(key) + ': ' + chatTime(data[key]);
				else s += getFullName(key) + ' has read your message at ' + chatTime(data[key]);
			}
			alert(s);
		} else if (groupName) alert('Currently no one has been read your message.');
		else alert(getFullName(uname) + ' has not read your message yet.');
	}).fail(function (jqxhr, textStatus, error) {
		alert('Oops, unable to load read receipt: ' + error);
	}).always(function() {
		stopSpinner(spinId);
	});
}
function removeChat(uname) {
	if (confirm('Do you wish to delete this chat ?')) $('#chat-' + uname).remove();
}
function htmlChat(uname, message, time, groupName, sender) {
	groupName = groupName || '';
	var html = '<div id="chat-' + uname + '" class="row chat-sideBar" style="border-radius:6px;cursor:pointer;' + chatAlertBackground(uname) + '"><div class="row chat-sideBar-body" onclick="openChat(\'' + uname + '\',\'' + groupName + '\');">';
	var fullname;
	if (groupName) fullname = getGroupDesc(groupName);
	else fullname = getFullName(uname);
	var c = 2;
	if ($(window).width() <= smallWidth) c = 3;
	html += '<div class="col-sm-' + c + ' col-xs-' + c + ' chat-sideBar-avatar" style="z-index:9"><div class="chat-avatar-icon">';
	html += '<img src="' + getUserIcon(uname, groupName) + '" onerror="' + loadImageOnError() + '" onclick="stopEventPropagation(event);removeChat(\'' + uname + '\');"></div></div>';
	html += '<div class="col-sm-' + (12-c) + ' col-xs-' + (12-c) + ' chat-sideBar-main"><div class="row">';
	html += '<div class="col-sm-10 col-xs-10 chat-sideBar-name">';
	html += '<div class="chat-name-meta" style="overflow-x:hidden;margin-top:-12px;margin-bottom:-8px;padding:8px !important"><b>' + fullname + '</b></div>';
	if (groupName && sender) sender = getFullName(sender) + ': ';
	else sender = '';
	html += '<div class="chat-message-text ' + chatAlertClass(uname) + '" style="font-size:100%;font-weight:normal;overflow-x:auto;margin:0 8px !important;padding:0 !important;white-space:nowrap">' + sender + getChatMessage(message) + '</div></div>'; // https://stackoverflow.com/questions/784586/convert-special-characters-to-html-in-javascript
	html += '<div class="col-sm-2 col-xs-2 pull-right chat-sideBar-time" style="margin-top:-2px">';
	html += '<span class="chat-time-meta pull-right" ' + chatTimeStyle() + '>' + chatTime(time) + '</span></div></div></div></div></div>';
	return html;
}
function getChatMessage(message) {
	if (!message) return '';
	message = message.split(chatReplyFlag())[1] ? message.split(chatReplyFlag())[1] : message; // skip reply
	message = $('<div>' + message + '</div>').text();
	if (message == '') message = 'New message';
	return message;
}
function updateChat(uname, message, time, groupName, sender) {
	if (noChatMenu()) return false;
	if ($('#chat-' + uname).length) {
		if (groupName && sender) sender = getFullName(sender) + ': ';
		else sender = '';
		$('#chat-' + uname + ' .chat-message-text').text(sender + getChatMessage(message)); // https://stackoverflow.com/questions/7889765/remove-all-htmltags-in-a-string-with-the-jquery-text-function
		$('#chat-' + uname + ' .chat-time-meta').text(chatTime(time));
		$('#chat-' + uname).prependTo('.chat-side-one');// https://stackoverflow.com/questions/3506140/jquery-move-an-inner-element-to-the-first-position
	} else loadChats();
}
function showChats(data, onSuccess) {
	$('.chat-side').remove();
	var n = Object.keys(data).length;
	var html = '<div class="col-sm-12 chat-side" style="margin-top:8px;"><div class="chat-side-one">';
	var htmls = [], arr = [], users = [];
	for (var i=0; i<n; i++) {
		var key = Object.keys(data)[i]; // username / group name
		var obj = data[key];
		var message = obj.message;
		if (obj.ver > 0) message = decryptMessage(obj.ver || cryptoVersion, userName, obj.group, obj.message);
		htmls.push({html: htmlChat(key, message, obj.time, obj.group, obj.user), time: obj.time});
		if (parseInt(obj.ver || 0) < cryptoKeyVersion) arr.push(key);
		if (obj.group) {
			if (isGroupMember(obj.group) && getItem('group-name-' + hash(obj.group)) == '') loadGroup(obj.group);
		} else if (!isUserSaved(key)) users.push(key);
	}
	loadUserUID('', users);
	htmls.sort(function(a, b){return b.time - a.time}); // descending sort
	html += htmls.map(e => e.html).join('') + '</div></div>'; // https://stackoverflow.com/questions/16607557/perform-join-on-value-in-array-of-objects
	$('#chat-menu').append(html).show();
	consoleLog('Load ' + n + ' chats');
	if (onSuccess) encryptChat('chats/' + userName, arr);
}
function loadChatsLocal(path) {
	if (getItem('localforage-ready') == 1) { // localforage may not ready yet
		localforage.getItem(path).then(function(data) {
			if (data1 != null) {
				consoleLog('Load chats from "' + path + '"');
				showChats(data);
			} else consoleWarn('Oops, load chats failed.');
		}).catch(function(err) { // This code runs if there were any errors
		});
	}
}
function loadChats(check) {
	if (check) {
		if (noChatMenu() || ($('#chat-menu').is(':visible') && $('.chat-side').length)) return false;
	}
	if (userName == '' || !validUserName()) return false;
	var path = 'messages/chats/' + userName;
	var url = getChatUrl(path);
	$.getJSON(url)
	.done(function (data) {
		if (data != null) {
			showChats(data, true);
			if (navigator.onLine) {
				if (getItem('load-chats') == 1) { // make sure it is cached
					cacheUrl(url, 'setItem("load-chats", 0)');
					updateOnlineTime(true, true);
				}
				if (getItem('localforage-ready') == 1) { // localforage may not ready yet
					localforage.setItem(path, data, function() {
						consoleLog('Chats "' + path + '" has been saved');
					});
				}
			}
		} else loadChatsLocal(path);
	}).fail(function (jqxhr, textStatus, error) {
		loadChatsLocal(path);
	});
}
function encryptMessage(cryptoVer, uname, groupName, message) {
	message = message || '';
	var key = userKey;
	if (groupName) key = ''; // do not use private key for group
	var msg = message;
	if (cryptoVer == 1) msg = encrypt(uname, message); // using pin
	else if (cryptoVer == 2) msg = encrypt(groupName || uname, message); // using userName only: user lost onesignal subscription or has re-installed the app
	else if (cryptoVer == 3) msg = encrypt((groupName || uname) + '-' + key, message); // make sure it is only read by the real user
	if (debugging() && message != decryptMessage(cryptoVer, uname, groupName, msg)) {
		alert('Unable to encrypt: ' + message);
		consoleLog('Unable to encrypt: ' + message);
	}
	return msg;
}
function decryptMessage(cryptoVer, uname, groupName, message) {
	message = message || '';
	var key = userKey;
	if (groupName) key = ''; // do not use private key for group
	if (cryptoVer == 1) return decrypt(myPIN(), message);
	else if (cryptoVer == 2) return decrypt(groupName || uname, message);
	else if (cryptoVer == 3) return decrypt((groupName || uname) + '-' + key, message); // this is NOT UNIQUE: encrypt('imac_bky', s) == encrypt('imac_bky204710', s)
	else if (cryptoVer) return 'Please refresh to read this message.'; // using newer version
	return message;
}
function deleteMessage(replyTo) { // replyTo: not used
	var dataHex = $('#inbox-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var idx = parseInt($('#inbox-messages-dialog').data('idx') || 0, 10);
	if (confirm('Do you wish to delete this message ?')) {
		if (replyTo) {
			$("#inbox-messages-dialog").modal("hide");
			setTimeout(function(){
				sendMessageDlg(replyTo);
			}, 0);
		}
		var n = Object.keys(data).length;
		if (idx < n) {
			var key = Object.keys(data)[idx];
			var uname = data[key].group || data[key].user; // the message sent from this username
			var obj = {}; // ajax is now able to do a multi-path write!
			obj['inbox/' + key + '/deleted'] = 1;
			obj[uname + '/' + key + '/deleted'] = 1;
			postObject('PATCH', 'messages/' + userName, obj);
			if (!replyTo && n > 1 && data[key]) {
				data[key].deleted = 1;
				$("#inbox-messages-dialog").data('hex', stringToHex(JSON.stringify(data)));
				showInboxMessage(data, idx);
				var path = 'messages/' + userName + '/inbox';
				localforage.setItem(path, data, function() {
					path = 'messages/' + userName + '/' + uname;
					localforage.getItem(path).then(function(data) {
						if (data == null) {
							alert('Oops, unable to delete the message because load "' + path + '" failed');
							return false;
						}
						if (!data[key]) return false;
						data[key].deleted = 1;
						localforage.setItem(path, data, function() {
							consoleLog('Inbox message "' + key + '" has been removed');
						});
					}).catch(function(err) { // This code runs if there were any errors
					});
				});
			} else $("#inbox-messages-dialog").modal("hide");
		}
	} else if (replyTo) {
		$("#inbox-messages-dialog").modal("hide");
		setTimeout(function(){
			sendMessageDlg(replyTo);
		}, 0);
	}
}
function firstMessage() {
	var dataHex = $('#inbox-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var idx = parseInt($('#inbox-messages-dialog').data('idx') || 0, 10);
	showInboxMessage(data, 0);
}
function prevMessage() {
	var dataHex = $('#inbox-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var idx = parseInt($('#inbox-messages-dialog').data('idx') || 0, 10);
	showInboxMessage(data, idx - 1);
}
function nextMessage() {
	var dataHex = $('#inbox-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var idx = parseInt($('#inbox-messages-dialog').data('idx') || 0, 10);
	showInboxMessage(data, idx + 1);
}
function lastMessage() {
	var dataHex = $('#inbox-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var n = Object.keys(data).length;
	showInboxMessage(data, n - 1);
}
function replyMessage() {
	var dataHex = $('#inbox-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var idx = parseInt($('#inbox-messages-dialog').data('idx') || 0, 10);
	var key = Object.keys(data)[idx];
	var obj = data[key];
	var replyTo = obj.user; //getPIN(obj.user, obj.uid);
	//deleteMessage(replyTo);
	$("#inbox-messages-dialog").modal("hide");
	setTimeout(function(){
		sendMessageDlg(replyTo);
	}, 0);
}
function forwardMessage() {
	var dataHex = $('#inbox-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var idx = parseInt($('#inbox-messages-dialog').data('idx') || 0, 10);
	var key = Object.keys(data)[idx];
	var obj = data[key];
	var message = decryptMessage(obj.ver, userName, obj.group, obj.message);
	$("#inbox-messages-dialog").modal("hide");
	setTimeout(function(){
		sendMessageDlg(undefined, message, true);
	}, 0);
}
function updateOnlineTime(online, showVer) {
	if (userName == '') return false;
	var url = 'messages/' + userName + '/status';
	var obj = {}; // ajax is now able to do a multi-path write!
	obj['time'] = getEpoch();
	obj['local'] = yyyymmddhhmmss();
	if (online) obj['online'] = 1;
	else obj['online'] = 0;
	if (showVer) {
		obj['ver'] = ver;
		obj['focus'] = Math.floor(parseInt(getItem('focus') || 0, 10) / 60); // in minutes
		obj['view'] = getItem('os_pageViews');
		obj['upload'] = getItem('upload');
		obj['download'] = getItem('download');
	}
	postObject('PATCH', url, obj);
}
function updateOnlineStatus(uname, init) {
	var id = '#online-status-' + uname;
	var path = 'messages/' + uname + '/status';
	var url = getChatUrl(path);
	if (init) {
		localforage.getItem(path).then(function(data) {
			if (data != null) $(id).text(data);
		}).catch(function(err) { // This code runs if there were any errors
		});
	}
	$.getJSON(url)
	.done(function (data) {
		var s = 'Offline';
		if (data != null) {
			if (data.time) s = 'Last seen at ' + chatTime(data.time);
			var t1 = parseInt(getItem('last-seen') || 0, 10);
			var t2 = parseInt(data.time || 0, 10);
			if (init || t1 < t2) { // need this otherwise from cache may update previous time
				if (data.online == 1 && !secondsAgo(data.time, 5*60)) s = 'Online'; // not online more  than 5 minurtes ago since user may lost coneection when the app is in foreground
				setItem('last-seen', t2);
			}
		}
		$(id).text(s);
		localforage.setItem(path, s, function() {
			consoleLog('Node "' + path + '" has beend saved');
		});
	}).fail(function (jqxhr, textStatus, error) {
		consoleWarn('Oops, update online status failed.');
	}).always(function() {
		adjustChatTitle();
	});
	setTimeout(function(){
		if ($(id).is(':visible')) { // do not use $(id).length since it is always true since the dialog not removed
			var keys = $('#conversation-dialog').data('keys');
			if (keys) readReceipts(uname, '', keys.split(','), undefined, true);
			updateOnlineStatus(uname);
			inboxMessagesChecking();
		}
	}, 60000); // 1 minute
}
function showGroupStatus(groupName, data) {
	var id = '#group-members-' + groupName;
	var n = Object.keys(data).length, m=0, members = '', membersNo = '';
	for (var i=0; i<n; i++) {
		var key = Object.keys(data)[i];
		if (key == 'desc' || key == 'owner' || key == 'time' || key == 'admins' || key == 'app') continue;
		if (members != '') members += ',';
		members += getFullName(key);
		m++;
		if (membersNo != '') membersNo += ',';
		membersNo += m + ': ' + getFullName(key);
	}
	$(id).text(members);
	$(id).attr('onclick', "alertNewLine('" + membersNo + "')");
	var n = members.split(',').length;
	if (n > 1) $(id).parent().find('b').text(getGroupDesc(groupName) + ' (' + n + ' users)');
	setTimeout(function(){
		if ($(id).is(':visible')) { // do not use $(id).length since it is always true since the dialog not removed
			inboxMessagesChecking();
		}
	}, 60000); // 1 minute
}
function showGroupStatusLocal(groupName, path) {
	localforage.getItem(path).then(function(data) {
		if (data != null) showGroupStatus(groupName, data);
		else $('#group-members-' + groupName).text('');
	}).catch(function(err) { // This code runs if there were any errors
	});
}
function updateGroupStatus(groupName) {
	var path = 'groups/' + groupName;
	var url = getChatUrl(path);
	showGroupStatusLocal(groupName, path);
	$.getJSON(url)
	.done(function (data) {
		if (data != null) {
			showGroupStatus(groupName, data);
			if (navigator.onLine) {
				localforage.setItem(path, data, function() {
					consoleLog('Group info "' + path + '" has been saved');
				});
			}
		} else showGroupStatusLocal(groupName, path);
	}).fail(function (jqxhr, textStatus, error) {
		consoleWarn('Oops, update group status failed.');
	}).always(function() {
		adjustChatTitle();
	});
}
function showNewMessages() {
	var user = getData('new-msg-user', true);
	var group = getData('new-msg-group', true);
	if (user == userName) inboxMessagesDlg(undefined, undefined, true); // send message to self
	else openChat(user, group, !$('.chat-side').length); // show the latest message
	var url = 'messages/' + userName + '/new-msg/messages';
	var obj = {};
	postObject('DELETE', url, obj);
}
function inboxMessagesChecking(manual) {
	if (userName == '' || !navigator.onLine) { // skip if offline
		if (manual) loadChats();
		return false;
	}
	var spinId;
	if (manual) spinId = runSpinner();
	consoleLog('Checking new messages...');
	var url = getChatUrl('messages/' + userName + '/new-msg');
	$.getJSON(url)
	.done(function (data) {
		var url = 'messages/' + userName + '/new-msg';
		var obj = {}; // ajax is now able to do a multi-path write!
		var t1 = parseInt(getItem('unread-time') || 0, 10);
		var t2 = 0;
		if (data != null) {
			if (data.action) { // need action now (like showing verification code when registering with a new device)
				obj = {};
				obj['action'] = '';
				postObject('PATCH', url, obj, data.action);
			}
			if (data.actions) {
				var n = Object.keys(data.actions).length;
				if (n > 0) {
					var key = Object.keys(data.actions)[0]; // execute the first one only
					var action = data.actions[key];
					url = 'messages/' + userName + '/new-msg/actions/' + key;
					obj = {};
					postObject('DELETE', url, obj, action);
				}
			}
			if (data.time) t2 = parseInt(data.time || 0, 10);
			if (manual && !data.messages) alert('There are no new messages.');
		} else {
			obj = {};
			obj['time'] = Math.max(t1, t2);
			postObject('PATCH', url, obj, 'consoleLog("Path new-msg has just been created.")');
			if (manual) alert('There is no new message found.');
		}
		if (data == null || t1 < t2 || data.messages) {
			setItem('unread-time', Math.max(t1, t2)); // make sure showing inbox all the time
			if (data && data.messages) {
				var n = Object.keys(data.messages).length, uname, lastKey;
				var nextObj = {};
				for (var i=0; i<n; i++) {
					var key = Object.keys(data.messages)[i];
					obj = data.messages[key];
					if ($('.chat-side').length) {
						url = getChatUrl('messages/' + userName + '/inbox/' + key);
						$.getJSON(url)
						.done(function (data) {
							if (data != null)
								updateChat(data.group || data.user, decryptMessage(data.ver, userName, data.group, data.message), data.time, data.group, data.user);
						}).fail(function (jqxhr, textStatus, error) {
							if (debugging()) alert('Oops, load chat message failed.');
							else consoleWarn('Oops, load chat message failed.');
						});
					}
					uname = obj.group || obj.user;
					lastKey = getItem('last-msg-' + 'messages/' + userName + '/' + uname);
					if (lastKey) {
						nextObj[userName + '/' + uname + '/' + lastKey + '/next'] = key;
						setData('last-msg-' + 'messages/' + userName + '/' + uname, key);
					}
					lastKey = getItem('last-msg-' + 'messages/' + userName + '/inbox');
					if (lastKey) {
						nextObj[userName + '/inbox/' + lastKey + '/next'] = key;
						setItem('last-msg-' + 'messages/' + userName + '/inbox', key);
					}
					if (i == n-1) {
						setData('new-msg-user', obj.user);
						setData('new-msg-group', obj.group);
						if (!$.isEmptyObject(nextObj)) postObject('PATCH', 'messages', nextObj, 'showNewMessages()');
						else showNewMessages();
					}
				}
			}
		}
		updateOnlineTime(true);
		if (manual) loadChats();
	}).fail(function (jqxhr, textStatus, error) {
		if (manual) loadChats();
		consoleWarn('Oops, load inbox messages on start failed.');
	}).always(function() {
		if (manual) stopSpinner(spinId);
	});
}
function clickShowInboxMessage() {
	if (noChatMenu()) {
		$('#inbox-messages-dialog #reply').hide();
		$('#inbox-messages-dialog #forward').hide();
		$('#inbox-messages-dialog #delete').hide();
		$('#inbox-messages-dialog-title').attr('onclick', 'allowShowInboxMessage();');
	}
}
function allowShowInboxMessage() {
	if (noChatMenu()) {
		$('#inbox-messages-dialog').data('allow', 1);
		$('#inbox-messages-dialog #reply').show();
		$('#inbox-messages-dialog #forward').show();
		$('#inbox-messages-dialog #delete').show();
		nextMessage();
	}
}
function showInboxMessage(data, idx) {
	if (noChatMenu() && $('#inbox-messages-dialog').data('allow') != 1) return false;
	var n = Object.keys(data).length;
	if (n == 0) return false;
	if (idx == undefined) idx = 0;
	else if (idx < 0) idx = n - 1;
	else if (idx >= n) idx = 0;
	var key = Object.keys(data)[idx];
	var obj = data[key];
	var t = parseInt(obj.time, 10);
	var fullname = getFullName(obj.user);
	var from = 'Message (#' + (idx+1) + ' of ' + n + ') from ' + fullname + ' sent on ' + yyyymmddhhmmss(t, true);
	var message = decryptMessage(obj.ver, userName, obj.group, obj.message);
	if (!obj.group && getItem('VIP').indexOf(obj.user) >= 0) {
		var realName = getFullName(obj.user, true);
		message = getVIPMessage(message, obj.user, realName, fullname);
	}
	$("#inbox-messages-dialog form[name='inbox-messages-form'] #from").val(from);
	if (obj.deleted) {
		$("#inbox-messages-dialog form[name='inbox-messages-form'] #from").removeClass('alert-info').removeClass('alert-danger').addClass('alert-danger');
		$('#inbox-messages-dialog #delete').prop('disabled', true);
	} else {
		$("#inbox-messages-dialog form[name='inbox-messages-form'] #from").removeClass('alert-info').removeClass('alert-danger').addClass('alert-info');
		$('#inbox-messages-dialog #delete').prop('disabled', false);
	}
	$("#inbox-messages-dialog form[name='inbox-messages-form'] #message").html(message);
	$("#inbox-messages-dialog").data('idx', idx);
	/*if (obj.action) {
		setTimeout(obj.action, 0);
		data[key].action = '';
		$("#inbox-messages-dialog").data('hex', stringToHex(JSON.stringify(data)));
		obj = {};
		obj['action'] = '';
		var url = 'messages/' + userName + '/inbox/' + key;
		postObject('PATCH', url, obj);
	}*/ // executed in openChat()
}
function checkNewInboxMessages(path, key, data, n) {
	if (n == 0) {
		var m = Object.keys(data).length;
		key = Object.keys(data)[m-1]; // last key of localforage
		var spinId = runSpinner();
		setData(path + 'spinId', spinId);
	} else updateStatusBar('Loading new message #' + n + '...');
	$.getJSON(getChatUrl(path + '/' + key))
	.done(function (data2) {
		var done = false;
		if (data2 != null) {
			data[key] = data2;
			if (data2.next) {
				if (n == 0) openStatusBar('Loading new messages...');
				checkNewInboxMessages(path, data2.next, data, n+1);
			} else {
				if (n > 0) {
					localforage.setItem(path, data, function() {
						inboxMessagesDlg(JSON.stringify(data));
						setItem('last-msg-' + path, key);
						consoleLog('Inbox messages linked list "' + path + '" has been updated');
					});
				}
				done = true;
			}
		} else done = true;
		if (done) {
			if (n > 0) closeStatusBar();
			var spinId = getData(path + 'spinId', true);
			stopSpinner(spinId);
		}
	}).fail(function (jqxhr, textStatus, error) {
		closeStatusBar();
		var spinId = getData(path + 'spinId', true);
		stopSpinner(spinId);
	});
}
function addInboxMessageLinkedList(path, key, dataStr, check) {
	var data = JSON.parse(hexToString(dataStr));
	localforage.setItem(path, data, function() {
		setItem('last-msg-' + path, key);
		if (check) checkNewInboxMessages(path, key, data, 0);
		consoleLog('Inbox messages linked list "' + path + '" has been added');
	});
}
function checkInboxMessageLinkedList(path, data, check) {
	var lastKey = getItem('last-msg-' + path);
	var n = Object.keys(data).length, key, key1, key2;
	var obj = {}; // ajax is now able to do a multi-path write!
	for (var i=n-1; i>0; i--) {
		key1 = Object.keys(data)[i-1]; // previous key
		key2 = Object.keys(data)[i]; // current key
		if (!key) key = key2;
		if (data[key1].next) break; // the previous nodes should be set already
		if (key2 != lastKey) {
			obj[key1 + '/next'] = key2;
			data[key1].next = key2;
		}
	}
	if (!key && n > 0) key = Object.keys(data)[0]; // for n == 1
	if (!$.isEmptyObject(obj)) { // JSON.stringify(obj) != '{}'; (https://stackoverflow.com/questions/13973927/check-if-object-is-empty-with-javascript-jquery)
		postObject('PATCH', path, obj, 'addInboxMessageLinkedList("' + path + '","' + key + '","' + stringToHex(JSON.stringify(data)) + '",' + check + ')');
	} else if (check && lastKey != '') checkNewInboxMessages(path, lastKey, data, 0);
	else if (lastKey == '' && key) setItem('last-msg-' + path, key);
}
function inboxMessagesDlg(dataStr, idx, auto) {
	if (!validUserName()) return false;
	var path = 'messages/' + userName + '/inbox';
	function encryptInboxMessages(data) {
		var n = Object.keys(data).length, arr = [];
		for (var i=0; i<n; i++) {
			var key = Object.keys(data)[i];
			var obj = data[key];
			if (parseInt(obj.ver || 0) < cryptoKeyVersion) arr.push(key);
		}
		encryptChat(userName + '/inbox', arr);
	}
	function loadInboxMessages() {
		var spinId = runSpinner();
		var url = getChatUrl(path);
		$.getJSON(url)
		.done(function (data) {
			if (data == null) {
				if (!auto) alert('Currently you have no inbox messages.');
			} else {
				if (isModalShown('inbox-messages')) {
					$("#inbox-messages-dialog").modal("hide");
					setTimeout(function(){
						inboxMessagesDlg(JSON.stringify(data));
						encryptInboxMessages(data);
					}, 0);
				} else inboxMessagesDlg(JSON.stringify(data));
				if (navigator.onLine) {
					localforage.setItem(path, data, function() {
						checkInboxMessageLinkedList(path, data);
						consoleLog('Inbox messages "' + path + '" has been saved');
					});
				}
			}
		}).fail(function (jqxhr, textStatus, error) {
			loadChats(true);
			alert('Oops, load inbox messages failed.');
		}).always(function() {
			stopSpinner(spinId);
		});
	}
	if (dataStr == undefined && idx == undefined) {
		// 1. Load from localForage
		// 2. If empty load from firebase => save to localForage
		// 3. Show the messages
		// 4. If no linked list => create and upload it
		// 5. Save the latest key
		// 6. Load latest key from Firebase if there is a new message (check next key)
		// 7. Repeat step 6 until there is no new message found
		localforage.getItem(path).then(function(data) {
			var lastKey = getItem('last-msg-' + path);
			if (data != null && lastKey) {
				if (isModalShown('inbox-messages')) {
					$("#inbox-messages-dialog").modal("hide");
					setTimeout(function(){
						inboxMessagesDlg(JSON.stringify(data));
						encryptInboxMessages(data);
					}, 0);
				} else inboxMessagesDlg(JSON.stringify(data));
				if (navigator.onLine) checkInboxMessageLinkedList(path, data, true);
			} else loadInboxMessages();
		}).catch(function(err) { // This code runs if there were any errors
		});
		return false;
	}
	if (dataStr == '') {
		if (!auto) alert('Currently you have no inbox messages.');
		return false;
	}
	var data = JSON.parse(dataStr);
	var n = Object.keys(data).length;
	if (idx == undefined) idx = 0;
	else if (idx >= n) idx = 0;
	var title = 'Inbox Messages', icon = 'danger', unread = false;
	var key = Object.keys(data)[idx];
	var obj = data[key], t = parseInt(obj.time, 10);
	var t = parseInt(getItem('unread-time') || 0, 10);
	if (t >= obj.time && idx < n-1) {
		inboxMessagesDlg(dataStr, idx+1, auto);
		return false;
	}
	loadChats(true);
	if (obj.time > t) {
		unread = true;
		setItem('unread-time', obj.time);
		updateChat(obj.user, decryptMessage(obj.ver, userName, obj.group, obj.message), obj.time, obj.group, obj.user);
	}
	var fullscreen = canFullScreenModal(), mc = 'wide-modal';
	if (fullscreen) mc = fullScreenModalClass();
	var html = '<div class="modal ' + mc + '" id="inbox-messages-dialog" tabindex="-1" role="dialog" aria-labelledby="inbox-messages-dialog-title" style="display:none;padding-right:15px;overflow-y:auto;" aria-modal="true">';
	html += '<div class="modal-dialog" style="' + fullScreenModalWidth() + '"><div class="modal-content">';
	html += '<div class="modal-header alert-' + icon + '"><h4 class="modal-title alert btn-' + icon + '" id="inbox-messages-dialog-title">' + title;
	html += modalCloseBtnHtml() + '</h4></div>';
	html += '<form name="inbox-messages-form" method="post" command="sendMessage();"><div class="modal-body">';
	html += '<i class="glyphicon glyphicon-triangle-left" onclick="prevMessage()" data-toggle="tooltip" title="Previous message" style="position:absolute;left:0;color:#888;cursor:pointer"></i>';
	html += '<i class="glyphicon glyphicon-triangle-right" onclick="nextMessage()" data-toggle="tooltip" title="Next message" style="position:absolute;right:0;color:#888;cursor:pointer"></i>';
	html += '<div class="form-group"><input id="from" type="text" class="alert-info" style="width:100%;padding:6px 12px" value="" readonly></div>';
	html += '<div id="message" class="form-control bg-info" style="width:100%;padding:8px;color:black;height:auto"></div>';
	html += '</div>';
	html += '<div class="modal-footer alert-info">';
	html += '<button type="button" class="btn btn-success" style="margin:2px 4px" onclick="replyMessage()" id="reply" data-toggle="tooltip" title="Reply message"><i class="glyphicon glyphicon-comment"></i></button>';
	html += '<button type="button" class="btn btn-primary" style="margin:2px 4px" onclick="forwardMessage()" id="forward" data-toggle="tooltip" title="Forward message"><i class="glyphicon glyphicon-share-alt"></i></button>';
	html += '<button type="button" class="btn btn-danger" style="margin:2px 4px" onclick="deleteMessage()" id="delete" data-toggle="tooltip" title="Delete message"><i class="glyphicon glyphicon-trash"></i></button>';
	html += '<button type="button" class="btn btn-info" style="margin:2px 4px" onclick="firstMessage()" data-toggle="tooltip" title="First message"><i class="glyphicon glyphicon-step-backward"></i></button>';
	if ($(window).width() > smallWidth) {
		html += '<button type="button" class="btn btn-info" style="margin:2px 4px" onclick="prevMessage()" data-toggle="tooltip" title="Previous message"><i class="glyphicon glyphicon-triangle-left"></i></button>';
		html += '<button type="button" class="btn btn-success" style="margin:2px 4px" onclick="nextMessage()" data-toggle="tooltip" title="Next message"><i class="glyphicon glyphicon-triangle-right"></i></button>';
	}
	html += '<button type="button" class="btn btn-success" style="margin:2px 4px" onclick="lastMessage()" data-toggle="tooltip" title="Last message"><i class="glyphicon glyphicon-step-forward"></i></button>';
	if ($(window).width() >= mediumWidth) // don't show on A80
		html += '<button type="button" class="btn btn-primary" style="margin:2px 4px" data-dismiss="modal">Close</button>';
	html += '</div></form></div></div></div>';
	html += '<script>';
	html += '$("[data-toggle=tooltip]").tooltip();';
	html += '</script>';
	showModal('inbox-messages', html, fullscreen);
	$("#inbox-messages-dialog").data('hex', stringToHex(dataStr));
	$("#inbox-messages-dialog").data('idx', idx);
	clickShowInboxMessage();
	showInboxMessage(data, idx);
	key = obj.key || key; // obj.key (older version)
	setTimeout(function(){
		$("#inbox-messages-dialog form[name='inbox-messages-form'] #message").focus();
		if (unread) informMessageRead(obj.user, key);
	}, 250);
}
function informMessageRead(uname, key) { // inform this message has been read
	var url = getChatUrl('messages/' + uname + '/sent/' + key);
	$.getJSON(url) // make sure it is not deleted by the sender
	.done(function (data) {
		if (data != null && (!data.read || !data.read[userName])) { // not read yet
			var url = 'messages/' + uname + '/sent/' + key;
			var obj = {};
			var path = 'read/';
			obj[path + userName] = getEpoch();
			postObject('PATCH', url, obj);
		}
	}).fail(function (jqxhr, textStatus, error) {
		consoleWarn('Unable to inform read message: ' + error);
	});
}
function deleteSentMessage() {
	var dataHex = $('#sent-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var idx = parseInt($('#sent-messages-dialog').data('idx') || 0, 10);
	if (confirm('Do you wish to delete this message ?')) {
		var n = Object.keys(data).length;
		if (idx < n) {
			var key = Object.keys(data)[idx];
			var uname = data[key].msgTo; // the message sent to this username
			var obj = {}; // ajax is now able to do a multi-path write!
			obj['sent/' + key + '/deleted'] = 1;
			obj[uname + '/' + key + '/deleted'] = 1;
			postObject('PATCH', 'messages/' + userName, obj);
			if (n > 1 && data[key]) {
				data[key].deleted = 1;
				$("#sent-messages-dialog").data('hex', stringToHex(JSON.stringify(data)));
				showSentMessage(data, idx);
				var path = 'messages/' + userName + '/sent';
				localforage.setItem(path, data, function() {
					path = 'messages/' + userName + '/' + uname;
					localforage.getItem(path).then(function(data) {
						if (data == null) {
							alert('Oops, unable to delete the message because load "' + path + '" failed');
							return false;
						}
						if (!data[key]) return false;
						data[key].deleted = 1;
						localforage.setItem(path, data, function() {
							consoleLog('Sent message "' + key + '" has been removed');
						});
					}).catch(function(err) { // This code runs if there were any errors
					});
				});
			} else $("#sent-messages-dialog").modal("hide");
		}
	}
}
function firstSentMessage() {
	var dataHex = $('#sent-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var idx = parseInt($('#sent-messages-dialog').data('idx') || 0, 10);
	showSentMessage(data, 0);
}
function prevSentMessage() {
	var dataHex = $('#sent-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var idx = parseInt($('#sent-messages-dialog').data('idx') || 0, 10);
	showSentMessage(data, idx - 1);
}
function nextSentMessage() {
	var dataHex = $('#sent-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var idx = parseInt($('#sent-messages-dialog').data('idx') || 0, 10);
	showSentMessage(data, idx + 1);
}
function lastSentMessage() {
	var dataHex = $('#sent-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var n = Object.keys(data).length;
	showSentMessage(data, n - 1);
}
function resendSentMessage(dataStr, idx) {
	var dataHex = $('#sent-messages-dialog').data('hex');
	var data = JSON.parse(hexToString(dataHex));
	var idx = parseInt($('#sent-messages-dialog').data('idx') || 0, 10);
	var key = Object.keys(data)[idx];
	var obj = data[key];
	var message = decryptMessage(obj.ver, userName, obj.group, obj.message);
	$("#sent-messages-dialog").modal("hide");
	setTimeout(function(){
		sendMessageDlg(obj.msgTo || obj.pins, message, true);
	}, 0);
}
function clickShowSentMessage() {
	if (noChatMenu()) {
		$('#sent-messages-dialog #resend').hide();
		$('#sent-messages-dialog #delete').hide();
		$('#sent-messages-dialog-title').attr('onclick', 'allowShowSentMessage();');
	}
}
function allowShowSentMessage() {
	if (noChatMenu()) {
		$('#sent-messages-dialog').data('allow', 1);
		$('#sent-messages-dialog #resend').show();
		$('#sent-messages-dialog #delete').show();
		nextSentMessage();
	}
}
function showSentMessage(data, idx) {
	if (noChatMenu() && $('#sent-messages-dialog').data('allow') != 1) return false;
	var n = Object.keys(data).length;
	if (n == 0) return false;
	if (idx == undefined) idx = n - 1; // go to last message sent
	else if (idx < 0) idx = n - 1;
	else if (idx >= n) idx = 0;
	var key = Object.keys(data)[idx];
	var obj = data[key];
	var t = parseInt(obj.time, 10);
	obj.user = obj.msgTo || obj.user;
	var fullname = obj.group || getFullName(obj.user);
	var msgTo = 'Message (#' + (idx+1) + ' of ' + n + ') to ' + fullname + ' sent on ' + yyyymmddhhmmss(t, true);
	var msgRead;
	if (obj.read) {
		msgRead = 'Read by ';
		if (obj.read.time) { // for older version assumed send message to one user only
			t = obj.read.time;
			msgRead += fullname + ' on ' + yyyymmddhhmmss(t, true);
		} else {
			var n = Object.keys(obj.read).length;
			for (var i=0; i<n; i++) {
				var key = Object.keys(obj.read)[i];
				var t = obj.read[key];
				if (i > 0) msgRead += ', ';
				msgRead += getFullName(key) + ' on ' + yyyymmddhhmmss(t, true);
			}
		}
	} else if (obj.group) msgRead = 'No one has read your message yet';
	else msgRead = fullname + ' has not read your message yet';
	var message = decryptMessage(obj.ver, userName, obj.group, obj.message);
	if (!obj.group && getItem('VIP').indexOf(obj.user) >= 0) {
		var realName = getFullName(obj.user, true);
		message = getVIPMessage(message, obj.user, realName, fullname);
	}
	$("#sent-messages-dialog form[name='sent-messages-form'] #msg-to").val(msgTo);
	if (obj.deleted) {
		$("#sent-messages-dialog form[name='sent-messages-form'] #msg-to").removeClass('alert-info').removeClass('alert-danger').addClass('alert-danger');
		$('#sent-messages-dialog #delete').prop('disabled', true);
	} else {
		$("#sent-messages-dialog form[name='sent-messages-form'] #msg-to").removeClass('alert-info').removeClass('alert-danger').addClass('alert-info');
		$('#sent-messages-dialog #delete').prop('disabled', false);
	}
	$("#sent-messages-dialog form[name='sent-messages-form'] #msg-read").val(msgRead);
	$("#sent-messages-dialog form[name='sent-messages-form'] #message").html(message);
	$("#sent-messages-dialog").data('idx', idx);
}
function checkNewSentMessages(path, key, data, n) {
	if (n == 0) {
		var m = Object.keys(data).length;
		key = Object.keys(data)[m-1]; // last key of localforage
		var spinId = runSpinner();
		setData(path + 'spinId', spinId);
	} else updateStatusBar('Loading new message #' + n + '...');
	$.getJSON(getChatUrl(path + '/' + key))
	.done(function (data2) {
		var done = false;
		if (data2 != null) {
			data[key] = data2;
			if (data2.next) {
				if (n == 0) openStatusBar('Loading new messages...');
				checkNewSentMessages(path, data2.next, data, n+1);
			} else {
				if (n > 0) {
					localforage.setItem(path, data, function() {
						sentMessagesDlg(JSON.stringify(data));
						setItem('last-msg-' + path, key);
						consoleLog('Sent messages linked list "' + path + '" has been updated');
						closeStatusBar();
					});
				}
				done = true;
			}
		} else done = true;
		if (done) {
			if (n > 0) closeStatusBar();
			var spinId = getData(path + 'spinId', true);
			stopSpinner(spinId);
		}
	}).fail(function (jqxhr, textStatus, error) {
		closeStatusBar();
		var spinId = getData(path + 'spinId', true);
		stopSpinner(spinId);
	});
}
function addSentMessageLinkedList(path, key, dataStr, check) {
	var data = JSON.parse(hexToString(dataStr));
	localforage.setItem(path, data, function() {
		setItem('last-msg-' + path, key);
		if (check) checkNewSentMessages(path, key, data, 0);
		consoleLog('Sent messages linked list "' + path + '" has been added');
	});
}
function checkSentMessageLinkedList(path, data, check) {
	var lastKey = getItem('last-msg-' + path);
	var n = Object.keys(data).length, key, key1, key2;
	var obj = {}; // ajax is now able to do a multi-path write!
	for (var i=n-1; i>0; i--) {
		key1 = Object.keys(data)[i-1]; // previous key
		key2 = Object.keys(data)[i]; // current key
		if (!key) key = key2;
		if (data[key1].next) break; // the previous nodes should be set already
		if (key2 != lastKey) {
			obj[key1 + '/next'] = key2;
			data[key1].next = key2;
		}
	}
	if (!key && n > 0) key = Object.keys(data)[0]; // for n == 1
	if (!$.isEmptyObject(obj)) { // JSON.stringify(obj) != '{}'; (https://stackoverflow.com/questions/13973927/check-if-object-is-empty-with-javascript-jquery)
		postObject('PATCH', path, obj, 'addSentMessageLinkedList("' + path + '","' + key + '","' + stringToHex(JSON.stringify(data)) + '",' + check + ')');
	} else if (check && lastKey != '') checkNewSentMessages(path, lastKey, data, 0);
	else if (lastKey == '' && key) setItem('last-msg-' + path, key);
}
function sentMessagesDlg(dataStr, idx) {
	if (!validUserName()) return false;
	var path = 'messages/' + userName + '/sent';
	function encryptSentMessages(data) {
		var n = Object.keys(data).length, arr = [];
		for (var i=0; i<n; i++) {
			var key = Object.keys(data)[i];
			var obj = data[key];
			if (parseInt(obj.ver || 0) < cryptoKeyVersion) arr.push(key);
		}
		encryptChat(userName + '/sent', arr);
	}
	function loadSentMessages() {
		$("#send-message-dialog").modal("hide"); // in case user clicks "Message History"
		var spinId = runSpinner();
		var url = getChatUrl(path);
		$.getJSON(url)
		.done(function (data) {
			if (data == null) {
				alert('Currently there is no sent messages found.');
			} else {
				sentMessagesDlg(JSON.stringify(data));
				encryptSentMessages(data);
				if (navigator.onLine) {
					localforage.setItem(path, data, function() {
						checkSentMessageLinkedList(path, data);
						consoleLog('Sent messages "' + path + '" has been saved');
					});
				}
			}
		}).fail(function (jqxhr, textStatus, error) {
			alert('Oops, load sent messages failed.');
		}).always(function() {
			stopSpinner(spinId);
		});
	}
	if (dataStr == undefined && idx == undefined) {
		// 1. Load from localForage
		// 2. If empty load from firebase => save to localForage
		// 3. Show the messages
		// 4. If no linked list => create and upload it
		// 5. Save the latest key
		// 6. Load latest key from Firebase if there is a new message (check next key)
		// 7. Repeat step 6 until there is no new message found
		localforage.getItem(path).then(function(data) {
			var lastKey = getItem('last-msg-' + path);
			if (data != null && lastKey) {
				sentMessagesDlg(JSON.stringify(data));
				encryptSentMessages(data);
				if (navigator.onLine) checkSentMessageLinkedList(path, data, true);
			} else loadSentMessages();
		}).catch(function(err) { // This code runs if there were any errors
		});
		return false;
	}
	if (dataStr == '') {
		alert('Currently there is no sent messages found.');
		return false;
	}
	var data = JSON.parse(dataStr);
	var title = 'Sent Messages', icon = 'danger', rows = 5;
	var fullscreen = canFullScreenModal(), mc = 'wide-modal';
	if (fullscreen) mc = fullScreenModalClass();
	var html = '<div class="modal ' + mc + '" id="sent-messages-dialog" tabindex="-1" role="dialog" aria-labelledby="sent-messages-dialog-title" style="display:none;padding-right:15px;overflow-y:auto" aria-modal="true">';
	html += '<div class="modal-dialog" style="' + fullScreenModalWidth() + '"><div class="modal-content">';
	html += '<div class="modal-header alert-' + icon + '"><h4 class="modal-title alert btn-' + icon + '" id="sent-messages-dialog-title">' + title;
	html += modalCloseBtnHtml() + '</h4></div>';
	html += '<form name="sent-messages-form" method="post" command="sendMessage();"><div class="modal-body">';
	html += '<i class="glyphicon glyphicon-triangle-left" onclick="prevSentMessage()" data-toggle="tooltip" title="Previous message" style="position:absolute;left:0;color:#888;cursor:pointer"></i>';
	html += '<i class="glyphicon glyphicon-triangle-right" onclick="nextSentMessage()" data-toggle="tooltip" title="Next message"style="position:absolute;right:0;color:#888;cursor:pointer"></i>';
	html += '<div class="form-group"><input id="msg-to" type="text" class="alert-info" style="width:100%;padding:6px 12px" value="" readonly></div>';
	html += '<div class="form-group"><input id="msg-read" type="text" class="alert-info" style="width:100%;padding:6px 12px" value="" readonly></div>';
	html += '<div id="message" placeholder="" class="form-control bg-info" style="width:100%;height:auto;padding:8px;color:black;" readonly></div>';
	html += '</div>';
	html += '<div class="modal-footer alert-info">';
	html += '<button type="button" class="btn btn-primary" style="margin:2px 4px" onclick="resendSentMessage()" id="resend" data-toggle="tooltip" title="Resend message"><i class="glyphicon glyphicon-send"></i></button>';
	html += '<button type="button" class="btn btn-info" style="margin:2px 4px" onclick="firstSentMessage()" data-toggle="tooltip" title="First message"><i class="glyphicon glyphicon-step-backward"></i></button>';
	html += '<button type="button" class="btn btn-info" style="margin:2px 4px" onclick="prevSentMessage()" data-toggle="tooltip" title="Previous message"><i class="glyphicon glyphicon-triangle-left"></i></button>';
	html += '<button type="button" class="btn btn-success" style="margin:2px 4px" onclick="nextSentMessage()" data-toggle="tooltip" title="Next message"><i class="glyphicon glyphicon-triangle-right"></i></button>';
	html += '<button type="button" class="btn btn-success" style="margin:2px 4px" onclick="lastSentMessage()" data-toggle="tooltip" title="Last message"><i class="glyphicon glyphicon-step-forward"></i></button>';
	html += '<button type="button" class="btn btn-danger" style="margin:2px 4px" onclick="deleteSentMessage()" id="delete" data-toggle="tooltip" title="Delete message"><i class="glyphicon glyphicon-trash"></i></button>';
	if ($(window).width() > smallWidth)
		html += '<button type="button" class="btn btn-primary" style="margin:2px 4px" data-dismiss="modal">Close</button>';
	html += '</div></form></div></div></div>';
	html += '<script>';
	html += '$("[data-toggle=tooltip]").tooltip();';
	html += '</script>';
	showModal('sent-messages', html, fullscreen);
	loadChats(true);
	$("#sent-messages-dialog").data('hex', stringToHex(dataStr));
	$("#sent-messages-dialog").data('idx', idx);
	clickShowSentMessage();
	showSentMessage(data, idx);
	setTimeout(function(){
		$("#sent-messages-dialog form[name='sent-messages-form'] #message").focus();
	}, 250);
}
function deletePIN() {
	var user = $("#send-message-dialog form[name='send-message-form'] #select-user option:selected").text();
	if (confirm('Do you really wish to delete username or group "' + user + '" ?')) {
		var a, s = getItem('pins');
		if (s.indexOf(user) >= 0) {
			a = s.split(',');
			for (var i=0; i<a.length; i++) {
				if (a[i] == user || a[i].indexOf(user + '+') == 0) { // is group or user found
					a.splice(i, 1); // delete pin
					break;
				}
			}
			setItem('pins', a.join(','));
			s = selectUserHtml();
			$("#send-message-dialog form[name='send-message-form'] #select-user").html(s);
			$("#send-message-dialog form[name='send-message-form'] #select-user").parent().find('.dropdown-menu.open a[data-tokens="' + user + '"]').parent().remove();
			var title = 'Select User or Group Name';
			$("#send-message-dialog form[name='send-message-form'] #select-user").parent().find('.dropdown-toggle').attr('title', title);
			$("#send-message-dialog form[name='send-message-form'] #select-user").parent().find('.dropdown-toggle .filter-option').text(title);
			$('#delete-pin').hide();
			$("#send-message-dialog form[name='send-message-form'] #users").val('');
		}
	}
}
function savePIN(pin) {
	var s = getItem('pins');
	if (s.indexOf(pin) >= 0) return false;
	if (s) s += ',';
	s += pin;
	setItem('pins', s);
}
function addPINFromDatabase(pin) {
	var uname = getPlayerName(pin);
	var url = getChatUrl('name/' + uname + '/uid');
	$.getJSON(url)
	.done(function (data) {
		if (data == null) {
			data = '0'; // accept it if user not allow notification
			alert('Oops, ' + uname + ' has no notification ID.');
		}
		addPIN(getPIN(uname, data));
	}).fail(function (jqxhr, textStatus, error) {
	});
}
function addPIN(pin) {
	var s = getItem('pins');
	if (s.indexOf(pin) < 0 && $("#send-message-dialog form[name='send-message-form'] #select-user").html().indexOf(pin) < 0){
		savePIN(pin);
		$("#send-message-dialog form[name='send-message-form'] #select-user")
		.append('<option data-tokens="' + getPlayerName(pin) + '" value="' + pin + '">' + getPlayerName(pin) + '</option>');
		var html = $('#select-user').prop('outerHTML'); // get the content including itself
		$('#select-user').attr('id', 'select-user-prev');
		$('#select-user-prev').parent().parent().append(html);
		$('#select-user-prev').parent().remove();
		if ($.isFunction($.fn.selectpicker)) $('#select-user').selectpicker({dropupAuto:false});
		$('.bootstrap-select').css('width', '100%');
		onSelectUser();
	} else {
		var s = $("#send-message-dialog form[name='send-message-form'] input[name=users]").val();
		if (s) s += ',';
		if (s.indexOf(pin) < 0) $("#send-message-dialog form[name='send-message-form'] input[name=users]").val(s + getPlayerName(pin));
	}
}
function searchUsers() {
	var users = $("#send-message-dialog form[name='send-message-form'] input[name=users]").val();
	if (!users || users.length < 3) return false; // do not search for blank or less than 3 characters
	var arr = users.split(','), url, search;
	var n = Math.min(arr.length, 5);
	$("#send-message-dialog form[name='send-message-form'] #search").html(''); // clear search
	for (var i=0; i<n; i++) {
		search = arr[i];
		if (search.indexOf('+') >= 0 || isUserSaved(search) || isGroupSaved(search)) continue; // skip user
		url = getChatUrl('search/' + getValidKey(search.toLowerCase()));
		$.getJSON(url)
		.done(function (data) {
			if (data != null) {
				var n = Object.keys(data).length, html;
				Object.keys(data).forEach(function(k) { // k=key, data[k]=object
					var pin = getPIN(data[k].user, data[k].uid);
					if (data[k].user && data[k].uid && $("#send-message-dialog form[name='send-message-form'] #search").html().indexOf(pin) < 0 &&
						$("#send-message-dialog form[name='send-message-form'] #select-user").html().indexOf(pin) < 0) {
						html = '<span class="btn btn-success" style="margin:12px 8px 0 0" onclick="addPINFromDatabase(\'' + pin + '\', true);this.style.display=\'none\';$(this).remove();">Add ' + data[k].user + '</span>';
						$("#send-message-dialog form[name='send-message-form'] #search").append(html);
					}
				})
			}
		}).fail(function (jqxhr, textStatus, error) {
		});
	}
}
function onBootstrapSelect() {
	$('.dropdown-menu.open').css('width', '100%');
	var h = Math.floor($('#send-message-dialog').height() - $('#send-message-dialog .modal-header').outerHeight() - $('#send-message-dialog .modal-footer').outerHeight() - $('#send-message-dialog .bootstrap-select').outerHeight() - 8);
	$('.selectpicker').on('shown.bs.select', function (e, clickedIndex, isSelected, previousValue) {
		$(this).parent().find('.bs-searchbox').attr('id', $(this).attr('id') + '-search');
		var h1 = parseInt($(this).parent().find('.dropdown-menu').css('min-height').split('px')[0], 10);
		var h2 = parseInt($(this).parent().find('.dropdown-menu').css('max-height').split('px')[0], 10);
		if (h2 < h1) {
			h2 = h1;
			$(this).parent().find('.dropdown-menu').css('max-height', h2 + 'px');
		}
		if (h2 > h) $(this).parent().find('.dropdown-menu').css('height', h + 'px');
		var id = $(this).attr('id') + '-search';
		setTimeout(function() { // make sure keyboard is shown in mobile device
			scrollToId('send-message-dialog', id, Math.min(h, h2), true);
		}, 750);
	}); // https://developer.snapappointments.com/bootstrap-select/options/
}
function selectUserHtml() {
	var pins = getItem('pins').split(','), html = '';
	for (var i=0; i<pins.length; i++) {
		if (pins[i] != '')
			html += '<option data-tokens="' + getPlayerName(pins[i]) + '" value="' + pins[i] + '">' + getPlayerName(pins[i]) + '</option>';
	}
	var groups = getItem('group-descs').split(','), groupName;
	for (var i=0; i<groups.length; i++) {
		if (groups[i] != '') {
			groupName = groups[i].split('=')[0];
			if (isGroupMember(groupName))
				html += '<option data-tokens="' + groupName + '" value="' + groupName + '">' + groupName + ' (' + getGroupDesc(groupName) + ')' + '</option>';
		}
	}
	html += '<option data-tokens="" value="" selected>Select User or Group Name</option>';
	return html;
}
function selectEmojiHtml() {
	var emoji = getItem('emoji'), html = '';
	if (emoji) emoji = JSON.parse(emoji);
	else emoji = [];
	for (var i=0; i<emoji.length; i++) {
		if (emoji[i] != '')
			html += '<option data-tokens="' + emoji[i].desc + '" value="' + emoji[i].name + '">' + emoji[i].desc + '</option>';
	}
	html += '<option data-tokens="" value="" selected>Select Custom Size Emoji</option>';
	return html;
}
function loadEmoji() {
	if (getItem('emoji-url') && getItem('emoji') && getItem('emoji-ext')) {
		loadEmojiOneArea();
		return false;
	}
	//var spinId = runSpinner();
	var url = getChatUrl('emoji');
	$.getJSON(url)
	.done(function (data) {
		if (data == null) alert('Oops, no emoji found.');
		else {
			setItem('emoji-url', data.url);
			setItem('emoji', JSON.stringify(data.names));
			setItem('emoji-ext', data.ext);
			for (var i=0; i<data.names.length; i++) {
				if ($("#send-message-dialog form[name='send-message-form'] #emoji").html().indexOf(data.names[i]) < 0) {
					$("#send-message-dialog form[name='send-message-form'] #emoji")
					.append('<option value="' + data.names[i].name + '">' + data.names[i].desc + '</option>');
				}
			}
		}
		loadEmojiOneArea();
	}).fail(function (jqxhr, textStatus, error) {
		alert('Oops, load emoji failed.');
	}).always(function() {
		//stopSpinner(spinId);
	});
}
/*function setTextEmojiOneArea(s) { // html element will be displayed as text instead of image etc.
	var el = $('#message').emojioneArea();
	el[0].emojioneArea.setText(s);
}*/
function emojiOneAreaOnChange() {
	if (getData('nice-url') == 1) return false;
	var html = $("#send-message-dialog form[name='send-message-form'] .emojionearea .emojionearea-editor").html();
	var html = html.split('&nbsp;').join(' '); // replace &nbsp; with space
	var arr = html.split(' '), id, ids = [], urls = [], found = false;
	for(var i = 0; i < arr.length; i++) {
		if (!/(http(s?)):\/\//i.test(arr[i])) continue; // https:// not found => skip
		if (/src=\"(http(s?)):\/\//i.test(arr[i])) continue; // src="https:// found => skip (image / youtube)
		if (/href=\"(http(s?)):\/\//i.test(arr[i])) continue; // href="https:// found => skip (web site)
		//<div></div>https://apps.variskindo.com/logo.png<div><br></div>
		var prefix = arr[i].substring(0, arr[i].indexOf('http')); // <div></div>
		arr[i] = arr[i].substring(arr[i].indexOf('http')); // https://apps.variskindo.com/logo.png<div><br></div>
		var tags = arr[i].split('<'), postfix = '';
		var url = tags[0]; // https://apps.variskindo.com/logo.png</div> (at the end of string)
		// https://apps.variskindo.com/logo.png<div></div> (at the end of line)
		if (tags.length > 1) postfix = arr[i].substring(arr[i].indexOf('<'));
		if (isValidUrl(url)) {
			if (isImageFile(url)) {
				arr[i] = prefix + '<div><center><img src="' + url + '" onerror="' + loadImageOnError('404.jpg') + '" onclick="stopEventPropagation(event);openWindow(this.src,true);" style="max-width:100%;cursor:pointer;"></center></div>' + postfix;
				found = true;
			} else if (url.indexOf('youtube.com') >= 0 || url.indexOf('youtu.be') >= 0) { // https://www.youtube.com/embed/rTVjstuyuJU?wmode=opaque
				var v;
				if (url.indexOf('/embed') < 0) {
					if (url.indexOf('v=') >= 0) {
						if (url.match(/v=([0-9,A-Z,a-z])\w+/) == undefined) {
							url = url.replace('watch?v=', 'embed/');
						} else {
							v = url.match(/v=([0-9,A-Z,a-z])\w+/)[0]; // get first word after v=
							v = v.substring(2); // skip v=
							url = 'https://www.youtube.com/embed/' + v + '?wmode=opaque';
						}
					} else { // https://youtu.be/GYsXAZsyor8
						v = getFileName(url);
						url = 'https://www.youtube.com/embed/' + v + '?wmode=opaque';
					}
				}
				arr[i] = prefix + '<iframe class="youtube" src="' + url + '" style="overflow:auto;width:100%;min-height:315px;"></iframe>' + postfix;
				found = true;
			} else if (url.indexOf('varisk.xyz/runr/') >= 0) { // https://vmr.varisk.xyz/runr/bni-deriv.html
				arr[i] = prefix + '<iframe class="run-r" src="' + url + '" style="overflow:auto;width:100%;min-height:800px;"></iframe>' + postfix;
				found = true;
			} else {
				id = hash(url);
				ids.push(id);
				urls.push(url);
				arr[i] = prefix + url + postfix;
			}
		}
	}
	if (found) {
		$("#send-message-dialog form[name='send-message-form'] .emojionearea .emojionearea-editor").html(arr.join(' '));
		moveCaretToEnd($("#send-message-dialog form[name='send-message-form'] .emojionearea-editor")[0]);
	}
	function showNiceUrlHtml(i) {
		if (i > ids.length-1) {
			removeData('nice-url');
			return false;
		}
		var id = ids[i]; // https://php2.varisk.xyz/source.php?url=https%3A%2F%2Fwww.bing.com%2Fsearch%3Fq%3Dnews
		var url = urls[i];
		if ($('#' + id).length) {
			showNiceUrlHtml(i + 1);
			return false;
		}
		$.get('https://php2.varisk.xyz/source.php?url=' + encodeURI(urls[i]), function(data) {
			var title = getHtmlMetaContent(data, 'og:title');
			if (!title) title = getHtmlHeadText(data, 'title');
			var desc = getHtmlMetaContent(data, 'og:description');
			if (!desc) desc = getHtmlHeadText(data, 'description');
			var icon = getHtmlMetaContent(data, 'og:image');
			if (title || desc) {
				var html = '<div onclick="$(this).next().next().remove();$(this).next().remove();$(this).remove()" style="margin:6px 0;position:absolute; height:24px; width:24px;right:20px;z-index:9999;background1:rgba(255,0,0,0.5);cursor:pointer">&nbsp;&nbsp;x</div>';
				html += '<div class="btn btn-block btn-' + bootsrapColor(i) + '" onclick="replaceUrl(\'' + id + '\',\'' + url + '\');$(this).prev().remove();$(this).next().remove();$(this).remove();" style="margin-top:8px;margin-bottom:-6px">Replace "' + url + '"</div>';
				html += niceUrlHtml(id, url, title, desc, icon);
				$('#nice-url').append(html);
			}
			showNiceUrlHtml(i + 1);
		});
	}
	if (ids.length > 0 && getData('nice-url') != 1) {
		setData('nice-url', 1);
		showNiceUrlHtml(0);
	}
}
function bootsrapColor(i) {
	if (i % 5 == 1) return 'success';
	if (i % 5 == 2) return 'info';
	if (i % 5 == 3) return 'warning';
	if (i % 5 == 3) return 'danger';
	return 'primary';
}
function replaceUrl(id, url) {
	var html = $("#send-message-dialog form[name='send-message-form'] .emojionearea .emojionearea-editor").html();
	if (url.indexOf('https://apps.variskindo.com') >= 0 && html.indexOf('https://apps.variskindo.com/emoji/') >= 0)
		html = html.split('https://apps.variskindo.com/emoji/').join('https://cdn.varisk.xyz/emoji/'); // prevent emoji replaced by domain
	niceUrl = $('#' + id).prop('outerHTML'); // get the content including itself
	html = html.replace(url, niceUrl); // replace the first occurance
	$("#send-message-dialog form[name='send-message-form'] .emojionearea .emojionearea-editor").html(html);
	$("#send-message-dialog form[name='send-message-form'] .emojionearea .emojionearea-editor").focus();
}
function showEmojiOneArea() {
	$('#message').emojioneArea({
		//placeholder: $(this).data("placeholder"),
		pickerPosition: "bottom",
		attributes: {
			spellcheck: true,
			autocapitalize: "on"
		}, // https://stackoverflow.com/questions/60263693/how-to-enable-autocapitalization-for-contenteditable-elements-on-mobile
		events: {
			focus: function (editor, event) {
				//if (debugging()) consoleLog('event:focus');
			},
			blur: function (editor, event) {
				if ($('#message').data('save') == 1) {
					var html = $('#message').data('html');
					$("#send-message-dialog form[name='send-message-form'] .emojionearea .emojionearea-editor").html(html);
					$('#message').data('save', 0);
				}
				//if (debugging()) consoleLog('event:blur');
			},
			change: function (editor, event) {
				if ($('#message').data('save') != 1) {
					var html = $("#send-message-dialog form[name='send-message-form'] .emojionearea .emojionearea-editor").html();
					//if (html != $('#message').data('html')) {
						$('#message').data('html', html);
						$('#message').data('save', 1);
					//} uncomment this otherwise video will disappear on blur without typing anything
				}
				if (debugging()) {
					var html = $("#send-message-dialog form[name='send-message-form'] .emojionearea .emojionearea-editor").html();
					consoleLog('event:change html=<pre>' + html + '</pre>');
				}
			},
			paste: function (editor, event) {
				emojiOneAreaOnChange();
				//if (debugging()) consoleLog('event:paste');
			},
			keypress: function (editor, event) {
				//if (debugging()) consoleLog('event:keypress');
			},
			keyup: function (editor, event) {
				emojiOneAreaOnChange();
				//if (debugging()) consoleLog('event:keyup');
			},
			emojibtn_click: function (button, event) {
				//if (debugging()) consoleLog('event:emojibtn.click, emoji=' + button.children().data("name"));
				// change class="emojioneemoji"
			}
		}
	});
	var html = hexToString($("#send-message-dialog form[name='send-message-form'] #message").attr('emoji1')); // do not use .html() since it may be replaced by EmojiOneArea
	function refillMessage(counter) {
		$("#send-message-dialog form[name='send-message-form'] .emojionearea-editor").attr('id', 'emojionearea-msg');
		$("#send-message-dialog form[name='send-message-form'] .emojionearea .emojionearea-editor").html(html);
		$("#send-message-dialog form[name='send-message-form'] .emojionearea .emojionearea-editor").css('max-height', '100%');
		var title = $("#send-message-dialog #send-message-dialog-title").text();
		var sendMsg = title.indexOf('Send') == 0 && html == '' && $('#send-message-dialog #users').val() == '';
		if ((title.indexOf('Send') == 0 && html != '') || // resend message
			(title.indexOf('Reply') == 0)) // reply message
			$("#send-message-dialog form[name='send-message-form'] .emojionearea-editor").focus();
		setTimeout(function() { // need this otherwise sometimes forward message gives no emoji/sticker/url message
		// now $("#send-message-dialog form[name='send-message-form'] #message").html() will be changed by EmojiOneArea
			if (counter < 5) refillMessage(counter + 1);
			else if (!sendMsg) {// to avoid "Failed to execute 'selectNodeContents' on 'Range'"
				moveCaretToEndOfContenteditable($("#send-message-dialog form[name='send-message-form'] .emojionearea-editor")[0]);
				$('#send-message-dialog #emojionearea-msg').css('width', '100%'); // bug in Firefox
				scrollToId('send-message-dialog', 'emojionearea-msg', 0, true);
			}
		}, 250);
	}
	refillMessage(0);
	checkNewStickers();
}
function loadEmojiOneArea() {
	if (getItem('emoji-popup') == '0') checkNewStickers(); // do not use emojioneArea
	else if ($.isFunction($.fn.emojioneArea)) showEmojiOneArea();
	else { // https://stackoverflow.com/questions/13657204/check-if-function-exists-before-calling
		loadCSS('https://cdn.varisk.xyz/libs/emojionearea/emojionearea.min.css');
		$.cachedScript('https://cdn.varisk.xyz/libs/emojionearea/emojionearea.min.js').done(function(script, textStatus) { // v3.4.1
			showEmojiOneArea();
		});
	}
}
function selectStickerHtml() {
	var stickers = getItem('stickers'), html = '', name;
	if (stickers) stickers = stickers.split(',');
	else stickers = [];
	for (var i=0; i<stickers.length; i++) {
		if (stickers[i] != '') {
			name = getFileName(stickers[i]).split('.').slice(0, -1).join('.');
			html += '<option data-tokens="' + name + '" value="' + stickers[i] + '">' + name + '</option>'; // without extension
		}
	}
	html += '<option data-tokens="" value="" selected>Select Custom Size Sticker</option>';
	return html;
}
function loadStickers(paths, idx) {
	if (!paths) return false;
	var spinId;
	if (idx == undefined) spinId = runSpinner();
	var path = paths;
	if (Number.isInteger(idx)) {
		var arr = paths.split(',');
		if (idx < arr.length) path = arr[idx];
		else return false; // all is added
	}
	var url = getChatUrl('stickers/' + path);
	$.getJSON(url)
	.done(function (data) {
		if (data == null) {
			if (idx == undefined) alert('Oops, no stickers found.');
			else consoleLog('Oops, no stickers found.');
		}else {
			var n = 0;
			if (Number.isInteger(idx)) n = data.length;
			for (var i=0; i<data.length; i++) {
				data[i] = path + '/' + data[i];
				if (idx == undefined && $("#send-message-dialog form[name='send-message-form'] #stickers").html().indexOf(data[i]) < 0) {
					$("#send-message-dialog form[name='send-message-form'] #stickers")
					.append('<option value="' + data[i] + '">' + getFileName(data[i]).split('.').slice(0, -1).join('.') + '</option>'); // without extension
					n++;
				}
			}
			if (n > 0) {
				var arr = [];
				var names = getItem('stickers-names');
				if (names) arr = names.split(',');
				arr.push(path);
				setItem('stickers-names', arr.join(','));
				var s = getItem('stickers');
				if (s) s += ',';
				setItem('stickers', s + data.join(','));
				if (idx == undefined) {
					$("#send-message-dialog form[name='send-message-form'] #new-stickers").hide();
					alert(n + ' stickers "' + path + '" have beed added.');
				} else loadStickers(paths, idx + 1);
			}
		}
	}).fail(function (jqxhr, textStatus, error) {
		if (idx == undefined) alert('Oops, load stickers failed.');
		else consoleWarn('Oops, load stickers failed.');
	}).always(function() {
		if (idx == undefined) stopSpinner(spinId);
	});
}
function loadAllStickers() {
	consoleLog('Loading all stickers...');
	//var spinId = runSpinner();
	var url = getChatUrl('stickers/all') + '?v=' + ver; // change the param if thare are new stickers
	$.getJSON(url)
	.done(function (data) {
		if (data == null) consoleLog('Oops, no stickers found.');
		else if (data.url && data.folders) {
			setItem('stickers-url', data.url);
			setItem('stickers-names', '');
			setItem('stickers', '');
			loadStickers(data.folders.join(','), 0);
		}
	}).fail(function (jqxhr, textStatus, error) {
		consoleWarn('Oops, load all stickers failed.');
	}).always(function() {
		//stopSpinner(spinId);
	});
}
function checkNewStickers() {
	consoleLog('Checking new stickers...');
	//var spinId = runSpinner();
	var url = getChatUrl('stickers/all') + '?v=' + ver; // change the param if thare are new stickers
	$.getJSON(url)
	.done(function (data) {
		if (data == null) consoleLog('Oops, no new stickers found.');
		else if (data.url && data.folders) {
			setItem('stickers-url', data.url);
			var all = data.folders, names = getItem('stickers-names');
			for (var i=0; i<all.length; i++) {
				if (!names.includes(all[i]) || !getItem('stickers')) {
					$("#send-message-dialog form[name='send-message-form'] #new-stickers").attr('onclick', "loadStickers('" + all[i] + "')").show();
					break;
				}
			}
		}
	}).fail(function (jqxhr, textStatus, error) {
		consoleWarn('Oops, load new stickers failed.');
	}).always(function() {
		//stopSpinner(spinId);
	});
}
function selectSizeHtml() {
	var html = '';
	html += '<option value="0">Original Size</option>';
	html += '<option value="1">Small Size</option>';
	html += '<option value="2" selected>Medium Size</option>';
	html += '<option value="3">Large Size</option>';
	return html;
}
function isHTML5(){
	var elem = document.createElement('canvas');
	return !!(elem.getContext && elem.getContext('2d'));
}
function resetFile (e) {
	e.wrap('<form>').parent('form').trigger('reset');
	e.unwrap();
}
function handleDataFile(evt, id, ValidTypes) {
	var files = evt.target.files;
	var file = files[0];
	if (file == undefined) { // user choose a file but cancel it
		resetFile($('#' + id));
		return false;
	}
	var bytes;
	if (isHTML5()) {
		var f = $('#' + id)[0];
		if (f.files[0] == undefined) bytes = 0; // user choose a file but cancel it
		else bytes = f.files[0].size || f.files[0].fileSize; // Size returned in bytes.
	} else { // IE9 and below
		var a = document.getElementById(id).value;
		$('#imageIE').attr('src', a);
		var f = document.getElementById('imageIE');
		bytes = f.fileSize;
	}
	var fileType = file["type"];
	var msg = '';
	if (!bytes) msg = 'Invalid file size.';
	else if ($.inArray(fileType, ValidTypes) < 0 && !isMsOfficeFile(file.name))
		msg = 'Invalid file type: ' + fileType + ' (' + file.name + ').';
	else if (bytes > maxUploadSize && !isImageFile(file.name)) msg = 'File size is too big (' + (bytes / (megaBytes)).toFixed(2) + ' MB)<br>Your maximum file size is ' + (maxUploadSize / (megaBytes)).toFixed(2) + ' MB.'; // don't limit image file since its size will be reduced
	else if (/[^a-zA-Z0-9._\-\s]/.test(file.name)) {
		if (!confirm('Unrecognized character in file name "' + file.name + '". Continue anyway ?'))
			msg = 'Invalid file name: "' + file.name + '".';
	}
	if (msg == '') {
		if (files && file) {
			var reader = new FileReader();
			runSpinner();
			consoleLog('Loading file "' + file.name + '"...');
			reader.onload = function(readerEvt) {
				$('#' + id).data('data', readerEvt.target.result);
				var s = $('#' + id).attr('onSuccess');
				if (s) setTimeout(s.replace('fileName', file.name), 0);
				consoleLog('Successfully loaded "' + bytes + '" bytes.');
				stopSpinner();
			}
			reader.onerror = function(error) {
				var s = $('#' + id).attr('onError');
				if (s) setTimeout(s.replace('errMsg', error), 0);
				consoleWarn('Load file error: "' + error + '".');
				stopSpinner();
			}
			reader.readAsBinaryString(file);
		}
	} else {
		resetFile($('#' + id));
		var s = $('#' + id).attr('onError');
		if (s) setTimeout(s.replace('errMsg', msg), 0);
	}
}
function handleAttachFile(evt) {
	$('#show-file').html(''); // clear here
	//var ValidTypes = ["image/*", "audio/mp3", "video/mp4", "application/*"];
	// image/*	All image files are accepted, instead of using "image/gif", "image/jpeg", "image/png"
	// application/vnd.ms-powerpoint, application/vnd.ms-word, application/vnd.ms-excel
	var ValidTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/bmp', 'audio/mp3', 'video/mp4', 'application/zip',
		'text/plain', 'text/csv', 'application/pdf',
		'application/vnd.ms-powerpoint', 'application/vnd.ms-word', 'application/vnd.ms-excel']; // MS Office 2003 type
	handleDataFile(evt, 'attach-file', ValidTypes);
}
function loadFileError(errMsg) {
	alert(errMsg.split('<br>').join('\n'));
}
function rotateBase64Image(imgSrc, callback) {
	// https://stackoverflow.com/questions/17040360/javascript-function-to-rotate-a-base-64-image-by-x-degrees-and-return-new-base64
	var canvas = document.getElementById("img-canvas");
	var ctx = canvas.getContext("2d");
	var image = new Image();
	image.src = imgSrc;
	image.onload = function() {
		// 90 degree
		canvas.width = image.height;
		canvas.height = image.width;
		ctx.rotate(90 * Math.PI / 180);
		ctx.translate(0, -canvas.width);
		/*// 180 degree
		ctx.translate(image.width, image.height);
		ctx.rotate(180 * Math.PI / 180); */
		ctx.drawImage(image, 0, 0);
		window.eval('' + callback + "('"+canvas.toDataURL() + "')");
	}
}
function reduceImage(img, len) { // https://hacks.mozilla.org/2011/01/how-to-develop-a-html5-image-uploader/
	var MAX_WIDTH = 1024;
	var MAX_HEIGHT = 800;
	if (len == 'tiny') {
		MAX_WIDTH = Math.min(img.width/2, 16);
		MAX_HEIGHT = Math.min(img.height/2, 16);
	}
	var width = img.width;
	var height = img.height;
	if (width > height) {
		height *= Math.min(width, MAX_WIDTH) / width;
		width = Math.min(width, MAX_WIDTH);
	} else {
		width *= Math.min(height, MAX_HEIGHT) / height;
		height = Math.min(height, MAX_HEIGHT);
	}
	var canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, width, height);
	var data = canvas.toDataURL("image/jpeg", 0.92); // image quality 0.0 to 1.0 (default is 0.92)
	//data = data.replace(/^data:image\/(png|jpg);base64,/, ""); // remove "data:image/png;base64,"
	data = data.substring(data.indexOf(',') + 1); // remove "data:image/png;base64,"
	if (len == 'tiny') return data; // return tiny image
	if (data.length < len) return data; // save smaller image
	return '';
}
function rotateImage(id, ext) {
	var base64 =  $('#' + id).data('data');
	setData('rotate-id', id);
	setData('rotate-ext', ext);
	var imgSrc = 'data:image/' + ext + ';base64,' + base64;
	rotateBase64Image(imgSrc, 'onRotateImage');
}
function onRotateImage(base64) {
	var id = getData('rotate-id', false);
	var ext = getData('rotate-ext', false);
	if (base64.indexOf('data:image/') == 0) base64 = base64.split(',')[1]; // pure base64 data
	var imgSrc = 'data:image/' + ext + ';base64,' + base64;
	$('#show-file img').attr('src', imgSrc);
	$('#' + id).data('data', base64);
}
function showFile(id, filename) {
	$('#show-file').html('<center><span class="btn alert-danger">' + filename + '</span></center>'); // show file name
	if (!isImageFile(filename)) return false;
	var base64 = window.btoa($('#' + id).data('data'));
	var ext = getFileExt(filename);
	var imgSrc = 'data:image/' + ext + ';base64,' + base64;
	var html = '<center><canvas id="img-canvas" class="hide"/><div><span class="btn btn-primary hide" onclick="rotateImage(\'' + id + '\',\'' + ext + '\');" id="rotate-image" style="margin:0 8px 8px 0"><i class="glyphicon glyphicon-retweet"></i> Rotate</span><span class="btn btn-success hide" onclick="encryptImage();" id="encrpt-image" style="margin:0 8px 8px 0"><i class="glyphicon glyphicon-lock"></i> Encrypt Image</span></div><img src="' + imgSrc + '" style="max-width:100%"></center>';
	$('#show-file').html(html);
	if (!isGifFile(filename)) { // unable to reduce gif size
		$('<img/>').attr('src', imgSrc).on('load', function() {
			$('#' + id).data('tiny', 'data:image/' + ext + ';base64,' + reduceImage($(this)[0], 'tiny'));
			var base64b = reduceImage($(this)[0], base64.length);
			if (base64b) { // reduced image
				imgSrc = 'data:image/' + ext + ';base64,' + base64b;
				$('#show-file img').attr('src', imgSrc);
				$('#' + id).data('data', base64b);
			} else $('#' + id).data('data', base64);
			$('#rotate-image').removeClass('hide');
			$('#encrpt-image').removeClass('hide');
			$(this).remove(); // prevent memory leaks
		}). // https://stackoverflow.com/questions/5057990/how-can-i-check-if-a-background-image-is-loaded
		on('error', function() { // remove if obj.img src not valid url
			$(this).remove(); // prevent memory leaks
		});
	}
}
function addGroupMember(groupName, uname, grouploaded) {
	if (groupName && !grouploaded) {
		setData('load-group-action', 'addGroupMember("' + groupName + '","' + (uname || '') + '",true);');
		loadGroup(groupName);
		return false;
	}
	var msgTo = '';
	if (!groupName || !uname) {
		groupName = $('#send-message-dialog #group-name').val();
		uname = $('#send-message-dialog #users').val();
	} else msgTo = ",'" + groupName + "," + uname + "'";
	if (!uname) {
		alert('Please enter a valid username.');
		return false;
	}
	if (uname.split(',').length > 1) {
		alert('Sorry but unable to add more than one participant.');
		return false;
	}
	var spinId = runSpinner();
	var url = getChatUrl('groups/' + groupName + '/admins/' + userName);
	$.getJSON(url)
	.done(function (data) {
		if (data != null) {
			var spinId = runSpinner();
			var url = getChatUrl('groups/' + groupName + '/' + uname);
			$.getJSON(url)
			.done(function (data) {
				if (data == null) {
					if (confirm('Do you wish to add "' + uname + '" ?')) {
						var obj = {};
						obj[uname] = getEpoch();
						var url = 'groups/' + groupName;
						postObject('PATCH', url, obj, "sendMessage(false, 'add-group-member'" + msgTo + ");");
					}
				} else alert(getFullName(uname) + ' is already a participant of group "' + groupName + '".');
			}).always(function() {
				stopSpinner(spinId);
			});
		} else alert('Sorry but you are not an admin of group "' + groupName + '".');
	}).fail(function (jqxhr, textStatus, error) {
		alert('Oops, add group member failed.');
	}).always(function() {
		stopSpinner(spinId);
	});
}
function removeGroupMember(groupName, uname, grouploaded) {
	if (groupName && !grouploaded) {
		setData('load-group-action', 'removeGroupMember("' + groupName + '","' + (uname || '') + '",true);');
		loadGroup(groupName);
		return false;
	}
	var msgTo = '';
	if (!groupName || !uname) {
		groupName = $('#send-message-dialog #group-name').val();
		uname = $('#send-message-dialog #users').val();
	} else msgTo = ",'" + groupName + "'";
	if (!uname) {
		alert('Please enter a valid username.');
		return false;
	}
	if (uname.split(',').length > 1) {
		alert('Sorry but unable to remove more than one participant.');
		return false;
	}
	var spinId = runSpinner();
	var url = getChatUrl('groups/' + groupName + '/admins/' + userName);
	$.getJSON(url)
	.done(function (data) {
		if (data != null) {
			if (confirm('Do you wish to remove "' + uname + '" ?')) {
				var obj = {};
				var url = 'groups/' + groupName + '/' + uname;
				postObject('DELETE', url, obj, "sendMessage(false, 'remove-group-member'" + msgTo + ");");
			}
		} else alert('Sorry but you are not an admin of group "' + groupName + '".');
	}).fail(function (jqxhr, textStatus, error) {
		alert('Oops, remove group member failed.');
	}).always(function() {
		stopSpinner(spinId);
	});
}
function addGroupAdmin(groupName, uname, onSuccess) {
	if (groupName && uname) {
		var obj = {}; // ajax is now able to do a multi-path write!
		obj[uname] = getEpoch();
		postObject('PATCH', 'groups/' + groupName + '/admins', obj, onSuccess);
		return false;
	}
	var spinId = runSpinner();
	if (!groupName) groupName = $('#send-message-dialog #group-name').val();
	var url = getChatUrl('groups/' + groupName + '/admins');
	$.getJSON(url)
	.done(function (data) {
		if (data == null) { // no one as an admin
			var url = getChatUrl('groups/' + groupName);
			$.getJSON(url)
			.done(function (data) {
				var n = Object.keys(data).length, admins = [];
				for (var i=0; i<n; i++) {
					var key = Object.keys(data)[i];
					if (key == 'desc' || key == 'owner' || key == 'time' || key == 'admins' || key == 'app' || data[key] == userName) continue;
					admins.push({user:key, time:data[key]}); // data[key] is timestamp
				}
				if (admins.length == 0) alert('There is no participant now in the group.');
				else {
					admins.sort(function(a, b){return b.time - a.time}); // descending sort
					var obj = {}; // ajax is now able to do a multi-path write!
					obj[admins[0].user] = getEpoch();
					postObject('PATCH', 'groups/' + groupName + '/admins', obj);
				}
			});
		}
	}).fail(function (jqxhr, textStatus, error) {
		alert('Sorry but unable to add another participant as an admin.');
	}).always(function() {
		stopSpinner(spinId);
	});
}
function leaveGroup(groupName, grouploaded) {
	if (groupName && !grouploaded) {
		setData('load-group-action', 'leaveGroup("' + groupName + '",true);');
		loadGroup(groupName);
		return false;
	}
	var msgTo = '', param = '';
	if (groupName) {
		msgTo = ",'" + groupName + "'";
		param = "'" + groupName + "'";
	} else groupName = $('#send-message-dialog #group-name').val();
	if (!groupName) {
		alert('Please enter a valid group name.');
		return false;
	}
	var spinId = runSpinner();
	var url = getChatUrl('groups/' + groupName + '/' + userName);
	$.getJSON(url)
	.done(function (data) {
		if (data != null) {
			if (confirm('Do you wish to leave "' + groupName + '" group ?')) {
				var obj = {}; // ajax is now able to do a multi-path write!
				url = 'groups/' + groupName + '/' + userName;
				postObject('DELETE', url, obj, "sendMessage(false, 'leave-group'" + msgTo + ");");
				obj = {}; // ajax is now able to do a multi-path write!
				url = 'groups/' + groupName + '/admins/' + userName;
				postObject('DELETE', url, obj, "addGroupAdmin(" + param + ");");
			}
		} else alert('Sorry but you are not a member of group "' + groupName + '".');
	}).fail(function (jqxhr, textStatus, error) {
		alert('Sorry but you are not a member of group "' + groupName + '".');
	}).always(function() {
		stopSpinner(spinId);
	});
}
function loadSelectPicker(onLoad) {
	if ($.isFunction($.fn.selectpicker)) return true;
	$.cachedScript('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/js/bootstrap-select.min.js').done(function(script, textStatus) {
		loadCSS('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/css/bootstrap-select.min.css');
		if (onLoad) setTimeout(onLoad, 0);
	}); // https://stackoverflow.com/questions/36005249/adding-search-functionality-in-select-options-using-bootstrap
	return false;
}
function manageGroupDlg() {
	if (!validUserName()) return false;
	if (OneSignalUID == '') {
		alert('You are unable to manage group chat because your PIN is not valid. Please reload page or unsubscribe notifications and resubscribe it.');
		return false;
	}
	if (!loadSelectPicker('manageGroupDlg()')) return false;
	var title = 'Manage Group Chat', icon = 'danger';
	var fullscreen = canFullScreenModal(), mc = 'wide-modal';
	if (fullscreen) mc = fullScreenModalClass();
	var html = '<div class="modal ' + mc + '" id="send-message-dialog" tabindex="-1" role="dialog" aria-labelledby="send-message-dialog-title" style="display:none;padding-right:15px;overflow-y:auto" aria-modal="true">';
	html += '<div class="modal-dialog" style="' + fullScreenModalWidth() + '"><div class="modal-content">';
	html += '<div class="modal-header alert-' + icon + '"><h4 class="modal-title alert btn-' + icon + '" id="send-message-dialog-title">' + title;
	html += modalCloseBtnHtml() + '</h4></div>';
	html += '<form name="send-message-form" method="post" command="sendMessage(false, \'create-group\');"><div class="modal-body">';
	html += '<div class="form-group"><input type="text" id="group-name" class="form-control" placeholder="Enter group name" value="" required></div>';
	html += '<div class="form-group"><input type="text" id="group-desc" class="form-control" placeholder="Enter group description" value="" required></div>';
	html += '<div class="form-group"><input type="text" id="users" name="users" class="form-control" placeholder="Enter user names or pick one from the list" value="" required></div>';
	html += '<div class="form-group"><select class="selectpicker" data-live-search="true" id="select-user" style="width:100%">';
	html += selectUserHtml();
	html += '</select></div>';
	html += '<div id="search"></div>';
	html += '</div>';
	html += '<div class="modal-footer">';
	html += '<button type="button" class="btn btn-info" style="margin:2px 4px" onclick="loadGroup();" data-toggle="tooltip" title="Reload group"></i><i class="glyphicon glyphicon-flash" style="margin-left:4px"></i></button>';
	html += '<button type="button" class="btn btn-success" style="margin:2px 4px" onclick="addGroupMember();" data-toggle="tooltip" title="Add participant"><i class="glyphicon glyphicon-user"></i><i class="glyphicon glyphicon-plus-sign" style="margin-left:4px"></i></button>';
	html += '<button type="button" class="btn btn-warning" style="margin:2px 4px" onclick="removeGroupMember();" data-toggle="tooltip" title="Remove participant"><i class="glyphicon glyphicon-user"></i><i class="glyphicon glyphicon-minus-sign" style="margin-left:4px"></i></button>';
	html += '<button type="submit" class="btn btn-success" style="margin:2px 4px" data-toggle="tooltip" title="Create group"><i class="glyphicon glyphicon-bullhorn"></i><i class="glyphicon glyphicon-plus" style="margin-left:4px"></i></button>';
	html += '<button type="button" class="btn btn-danger" style="margin:2px 4px;" onclick="leaveGroup();" data-toggle="tooltip" title="Leave group"><i class="glyphicon glyphicon-bullhorn"></i><i class="glyphicon glyphicon-minus" style="margin-left:4px"></i></button>';
	if ($(window).width() >= mediumWidth)
		html += '<button type="button" class="btn btn-primary" style="margin:2px 4px" data-dismiss="modal">Close</button>';
	html += '</div></form></div></div></div>';
	html += '<script>';
	html += '$("[data-toggle=tooltip]").tooltip();';
	html += 'if ($.isFunction($.fn.selectpicker)) $(".selectpicker").selectpicker({dropupAuto:false});$(".bootstrap-select").css("width","100%");';
	html += '</script>';
	showModal('send-message', html, fullscreen);
	setTimeout(function(){
		onBootstrapSelect();
		$("#send-message-dialog form[name='send-message-form'] #group-name").focus();
	}, 250);
	$('#users').on('input',function(){ // https://gist.github.com/brandonaaskov/1596867
		searchUsers();
	});
	$('#users').dblclick(function(){ // clear users input
		$('#users').val('');
	});
	$("#send-message-dialog form[name='send-message-form']").on('submit',function(e){
		e.preventDefault();
		var groupName = $("#send-message-dialog form[name='send-message-form'] #group-name").val();
		var groupDesc = $("#send-message-dialog form[name='send-message-form'] #group-desc").val();
		if (groupName.length < 5 || groupDesc.length < 5) {
			alert('Minimum length of group name or description is 5 characters.');
			return false;
		}
		var re = /^\w+$/; // https://stackoverflow.com/questions/21540624/javascript-regex-only-alphabet-number-and-underscore
		if (!re.test(groupName)) {
			alert('Invalid group name. Text You can only use a-z, A-Z, 0-9 and underscore.');
			return false;
		}
		var spinId = runSpinner();
		$.getJSON(getChatUrl('names/' + groupName))
		.done(function (data) {
			if (data != null) alert('Group "' + groupName + '" already taken.');
			else setTimeout($("#send-message-dialog form[name='send-message-form']").attr('command'), 0);
		}).fail(function (jqxhr, textStatus, error) {
			alert('Oops, create group failed.');
		}).always(function() {
			stopSpinner(spinId);
		});
		return false; // avoid to execute the actual submit of the form.
	});
	$("#send-message-dialog form[name='send-message-form'] #select-user").on('change', function () {
		var s = $("#send-message-dialog form[name='send-message-form'] #select-user option:selected").val();
		var t = $("#send-message-dialog form[name='send-message-form'] #select-user option:selected").text();
		if (s) {
			if (t.indexOf(' ') >= 0) $('#group-name').val(s);
			else addPIN(s);
		}
	});
}
function toggleMessageSelects() {
	$('#send-message-dialog .bootstrap-select').toggle(); // bootstrap select with search
	$('#send-message-dialog select').toggle(); // standard select
	var id;
	if ($('#send-message-dialog .emojionearea .emojionearea-editor').length) id = 'emojionearea-msg';
	else id = 'message';
	scrollToId('send-message-dialog', id, 0, true);
	setTimeout(function(){
		$('#send-message-dialog #' + id).focus();
	}, 250);
}
function onSelectUser() {
	$("#send-message-dialog form[name='send-message-form'] #select-user").on('change', function () {
		var s = $("#send-message-dialog form[name='send-message-form'] #select-user option:selected").val();
		if (s) {
			$('#delete-pin').show();
			addPIN(s);
		} else $('#delete-pin').hide();
	});
}
function sendMessageDlg(replyTo, message, readOnly, groupChat) {
	if (!validUserName()) return false;
	if (OneSignalUID == '') {
		alert('You are unable to send message because your PIN is not valid. Please reload page or unsubscribe notifications and resubscribe it.');
		return false;
	}
	if (!loadSelectPicker('sendMessageDlg("' + (replyTo || '') + '",`' + (message || '') + '`,' + readOnly + ',"' + (groupChat || '') + '")')) return false; // use backticks (grave accent) here
	if (readOnly == undefined) readOnly = false;
	var title = 'Send Message', icon = 'danger';
	var reply = message && message.indexOf('<div class="reply-msg') == 0;
	if (replyTo && (!message || reply)) {
		if (reply) title = 'Reply Message';
		else title = 'Send Message';
	} else if (!replyTo && message) title = 'Forward Message';
	else if (readOnly) title = 'Resend Message';
	if (message == undefined) message = '';
	if (groupChat) setData('send-to-group', 1);
	var fullscreen = canFullScreenModal(), mc = 'wide-modal';
	if (fullscreen) mc = fullScreenModalClass();
	var html = '<div class="modal ' + mc + '" id="send-message-dialog" tabindex="-1" role="dialog" aria-labelledby="send-message-dialog-title" style="display:none;padding-right:15px;overflow-y:auto" aria-modal="true">';
	html += '<div class="modal-dialog" style="' + fullScreenModalWidth() + '"><div class="modal-content">';
	html += '<div class="modal-header alert-' + icon + '"><h4 class="modal-title alert btn-' + icon + '" id="send-message-dialog-title">' + title;
	html += modalCloseBtnHtml() + '</h4></div>';
	html += '<form name="send-message-form" method="post" command="sendMessage();"><div class="modal-body">';
	if (!noChatMenu() && $(window).height() >= mediumWidth)
		html += '<div class="form-group"><input type="text" class="alert-info" style="width:100%;padding:6px 12px;padding-right:36px" value="' + 'My PIN is ' + myPIN() + '" readonly></div>';
	html += '<div class="form-group">';
	html += '<input type="text" id="users" name="users" class="form-control" placeholder="Enter user names, groups or pick one from the list" value="' + (replyTo || '') + '">';
	html += '<i class="btn-sm btn-info glyphicon glyphicon-modal-window pull-right" onclick="toggleMessageSelects();" data-toggle="tooltip" data-placement="left" title="Show/hide selects" style="position:absolute;right:18px;top:18px;cursor:pointer;"></i>';
	html += '</div>';
	html += '<div class="form-group"><select class="selectpicker" data-live-search="true" id="select-user" style="width:100%">';
	html += selectUserHtml();
	html += '</select></div>';
	html += '<div class="form-group"><select class="selectpicker" data-live-search="true" id="emoji" style="width:100%">';
	html += selectEmojiHtml();
	html += '</select></div>';
	html += '<div class="form-group"><select class="selectpicker" data-live-search="true" id="stickers" style="width:100%">';
	html += selectStickerHtml();
	html += '</select></div>';
	html += '<div class="form-group"><select id="size" style="width:100%">';
	html += selectSizeHtml();
	html += '</select></div>';
	if (reply) {
		reply = message.split(chatReplyFlag())[0] + chatReplyFlag();
		html += '<div id="reply" style="margin-bottom:-2px;border:solid 1px;border-color: #ccc;">' + reply + '</div>';
		message = message.split(chatReplyFlag())[1] ? message.split(chatReplyFlag())[1] : '';
	} else html += '<div id="reply" style="margin-bottom:-9px;border:solid 1px;border-color: #ccc;"></div>';
	html += '<div id="message" emoji1="' + stringToHex(message) + '" contenteditable="' + !readOnly + '" placeholder="Type a message here..." class="form-control bg-info" style="width:100%;height:auto;padding:8px;color:black;" required>' + message + '</div>'; // emoji1 flag for emojiOneArea
	html += '<div id="search"></div>';
	html += '<div id="nice-url" class="panel-body1" style="margin-top:8px;padding-top:0;padding-bottom:0"></div>';
	html += '<div id="show-file" class="panel-body1" style="margin-top:8px"></div>';
	html += '</div>';
	html += '<div class="modal-footer alert-info">';
	html += '<button type="submit" class="btn btn-success" style="margin:2px 4px" data-toggle="tooltip" title="Send message"><i class="glyphicon glyphicon-send"></i></button>';
	if (!readOnly) {
		html += '<button type="button" class="btn btn-info" style="margin:2px 4px" onclick="newLine();" data-toggle="tooltip" title="New line"><i class="glyphicon glyphicon-plus"></i></button>';
		html += '<button type="button" class="btn btn-danger" style="margin:2px 4px" onclick="clearMessage();" data-toggle="tooltip" title="Clear message"><i class="glyphicon glyphicon-erase"></i></button>';
		html += '<button type="button" class="btn btn-primary glyphicon glyphicon-paperclip" data-toggle="tooltip" title="Attach file" style="position:relative;margin:2px 4px"><input type="file" id="attach-file" onsuccess="showFile(\'attach-file\', \'fileName\')" onerror="loadFileError(\'errMsg\')" style="opacity:0;position:absolute;top:0;left:0;bottom:0;right:0;width:40px"></button>'; // need 40px otherwise history not selectable
	}
	html += '<button type="button" class="btn btn-warning" style="margin:2px 4px" onclick="sentMessagesDlg();" data-toggle="tooltip" title="Message history"><i class="glyphicon glyphicon-list"></i></button>';
	html += '<button type="button" class="btn btn-danger" style="margin:2px 4px;display:none" onclick="deletePIN();" id="delete-pin" data-toggle="tooltip" title="Delete user"><i class="glyphicon glyphicon-trash"></i></button>';
	html += '<button type="button" class="btn btn-success" style="margin:2px 4px;display:none" id="new-stickers" data-toggle="tooltip" title="New stickers"><i class="glyphicon glyphicon-picture"></i></button>';
	if ($(window).width() > smallWidth)
		html += '<button type="button" class="btn btn-primary" style="margin:2px 4px" data-dismiss="modal">Close</button>';
	html += '</div></form></div></div></div>';
	html += '<script type="text/javascript">';
	html += 'if (window.File && window.FileReader && window.FileList && window.Blob) {';
	html += 'document.getElementById("attach-file").addEventListener("change", handleAttachFile, false);';
	html += '}';
	html += '$("[data-toggle=tooltip]").tooltip();';
	html += 'if ($.isFunction($.fn.selectpicker)) $(".selectpicker").selectpicker({dropupAuto:false});$(".bootstrap-select").css("width","100%");';
	html += '</script>';
	showModal('send-message', html, fullscreen);
	loadChats(true);
	setTimeout(function(){
		onBootstrapSelect();
		if (replyTo) {
			$("#send-message-dialog form[name='send-message-form'] #message").focus();
			moveCaretToEnd($("#send-message-dialog form[name='send-message-form'] #message")[0]);
			searchUsers(); // in case not defined yet
		} else $('#users').focus();
		if (!readOnly) loadEmoji();
	}, 250);
	$('#users').on('input',function(){ // https://gist.github.com/brandonaaskov/1596867
		searchUsers();
	});
	$('#users').dblclick(function(){ // clear users input
		$('#users').val('');
	});
	$("#send-message-dialog form[name='send-message-form']").on('submit',function(e){
		e.preventDefault();
		setTimeout($("#send-message-dialog form[name='send-message-form']").attr('command'), 0);
		return false; // avoid to execute the actual submit of the form.
	});
	onSelectUser();
	$("#send-message-dialog form[name='send-message-form'] #emoji").on('change', function () {
		var size = $("#send-message-dialog form[name='send-message-form'] #size option:selected").val();
		if (size == 1) size = 'width="24px"';
		else if (size == 2) size = 'width="48px"';
		else if (size == 3) size = 'width="128px"';
		else size = ''; //64px
		var url = getItem('emoji-url');
		var name = $("#send-message-dialog form[name='send-message-form'] #emoji option:selected").val();
		var ext = getItem('emoji-ext');
		url += name + ext;
		if (name) {
			var s = "#send-message-dialog form[name='send-message-form'] ";
			if ($('#send-message-dialog .emojionearea .emojionearea-editor').length) s += '.emojionearea .emojionearea-editor';
			else s += '#message';
			var html = $(s).html();
			html += '<span><img src="' + url + '" ' + size + ' onerror="' + loadImageOnError('404-emoji.png') + '"></span>';
			$(s).html(html);
		}
	});
	$("#send-message-dialog form[name='send-message-form'] #stickers").on('change', function () {
		var size = $("#send-message-dialog form[name='send-message-form'] #size option:selected").val();
		if (size == 1) size = 'width="64px"';
		else if (size == 2) size = 'width="128px"';
		else if (size == 3) size = 'width="256px"';
		else size = ''; // 512px
		var url = getItem('stickers-url');
		var name = $("#send-message-dialog form[name='send-message-form'] #stickers option:selected").val();
		url += name;
		if (name) {
			var s = "#send-message-dialog form[name='send-message-form'] ";
			if ($('#send-message-dialog .emojionearea .emojionearea-editor').length) s += '.emojionearea .emojionearea-editor';
			else s += '#message';
			var html = $(s).html();
			//var w = Math.min($(window).width(), $(window).height()) - 32;
			html += '<div><center><img src="' + url + '" ' + size + ' style="max-width:100%" onerror="' + loadImageOnError('404-sticker.gif') + '"></center></div><br>'; // extra '<br>' to make a new line
			$(s).html(html);
		}
	});
	/*$("#send-message-dialog form[name='send-message-form'] option").on('click', function () {
		addPIN($("#send-message-dialog form[name='send-message-form'] #select-user option:selected").val());
	});*/
}
function newLine() {
	if ($("#send-message-dialog form[name='send-message-form'] .emojionearea").length) {
		var html = $("#send-message-dialog form[name='send-message-form'] .emojionearea-editor").html() + '<br>';
		$("#send-message-dialog form[name='send-message-form'] .emojionearea .emojionearea-editor").html(html).focus();
		moveCaretToEndOfContenteditable($("#send-message-dialog form[name='send-message-form'] .emojionearea-editor")[0]);
	} else if ($("#send-message-dialog form[name='send-message-form'] #message").attr('contenteditable') == 'true') { // not forward message (read only)
		var html = $("#send-message-dialog form[name='send-message-form'] #message").html() + '<br>';
		$("#send-message-dialog form[name='send-message-form'] #message").html(html).focus();
		moveCaretToEnd($("#send-message-dialog form[name='send-message-form'] #message")[0]);
	}
}
function clearMessage() {
	if ($("#send-message-dialog form[name='send-message-form'] .emojionearea").length)
		$("#send-message-dialog form[name='send-message-form'] .emojionearea .emojionearea-editor").html('').focus();
	else if ($("#send-message-dialog form[name='send-message-form'] #message").attr('contenteditable') == 'true') // not forward message (read only)
		$("#send-message-dialog form[name='send-message-form'] #message").html('').focus();
	$('#nice-url').html('');
}
function getGroupName(group) {
	if (!group) return '';
	return group.split(' (')[0];
}
function isUploadFile() {
	var fileChooser = document.getElementById('attach-file');
	if (fileChooser == undefined) return false;
	var file = fileChooser.files[0];
	if (file) return true;
	return false;
}
function showEncryptedImage(id, key) {
	var spinId = runSpinner();
	var url = $('#' + id).attr('url');
	$.ajax({
		url: url,
		success: function(data, status){
			$('#' + id).attr('src', decrypt(key, data));
			$('#' + id).animate({minWidth: '0px'});
			$('#' + id).animate({maxWidth: '100%'});
			$('#' + id).removeAttr('onclick');
		},
		error: function(xhr, status, error) {
			alert('Oops, unable to load image: ' + getFileName(url));
		},
		complete: function() {
			stopSpinner(spinId);
		},
		timeout: 30000
	});
}
function encryptImage() {
	if ($('#encrpt-image').text().indexOf('Encrypt Image') >= 0) {
		$('#encrpt-image').html('<i class="glyphicon glyphicon-lock"></i> Don\'t Encrypt').removeClass('btn-success').addClass('btn-danger');
		$('#attach-file').data('encrypt', 1);
	} else {
		$('#encrpt-image').html('<i class="glyphicon glyphicon-lock"></i> Encrypt Image').removeClass('btn-danger').addClass('btn-success');
		$('#attach-file').data('encrypt', 0);
	}
}
function sendEncryptedImage() {
	return $('#attach-file').data('encrypt') == 1;
}
function base64ToBlob(base64, fileName, fileType) { // https://stackoverflow.com/questions/12883871/how-to-upload-base64-encoded-image-data-to-s3-using-javascript-only
	var binary;
	if (sendEncryptedImage()) {
		var ext = getFileExt(fileName);
		var key = hash(userName + fileName + base64.substring(0, 16));
		$('#attach-file').data('key', key);
		binary = encrypt(key, 'data:image/' + ext + ';base64,' + base64);
	} else binary = window.atob(base64);
	var array = [];
	for(var i = 0; i < binary.length; i++) {
		array.push(binary.charCodeAt(i));
	}
	return new Blob([new Uint8Array(array)], {type: fileType});
}
function uploadFile(aws) {
	if (!aws && !$.isFunction($.fn.AWS)) {
		$.cachedScript('https://sdk.amazonaws.com/js/aws-sdk-2.1.24.min.js').done(function(script, textStatus) {
			uploadFile(true);
		});
		return false;
	}
	AWS.config.update({
		accessKeyId : 'AKIAQJZSSEH3CKKCYFJM', // varisk-apps
		secretAccessKey : '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' // varisk-apps
	});
	AWS.config.region = 'ap-northeast-1';
	var bucket = new AWS.S3({params: {Bucket: 'varisk-apps'}});
	var folder = window.location.hostname.split('.').join('-') + '/' + userName + '/';
	var fileChooser = document.getElementById('attach-file');
	var file = fileChooser.files[0];
	if (file) {
		$("#send-message-dialog #send-message-dialog-title").text('Uploading ' + file.name + '...');
		var params;
		if (isImageFile(file.name)) {
			params = {
				Key: folder + file.name,
				ContentType: file.type,
				Body: base64ToBlob($('#attach-file').data('data'), file.name, file.type), // use smaller image if possible
				ACL: 'public-read' // so one can download the file
			};
		} else {
			params = {
				Key: folder + file.name,
				ContentType: file.type,
				Body: file,
				ACL: 'public-read' // so one can download the file
			};
		}
		bucket.upload(params).on('httpUploadProgress', function(evt) { // not fired for file < 5MB
			var s = 'Uploading ' + parseInt((evt.loaded * 100) / evt.total) + '%...';
			setTimeout(function(){
				$("#send-message-dialog #send-message-dialog-title").text(s);
			}, 0); // need setTimeout otherwise not displayed
			if (evt.loaded == evt.total) uploadLength(evt.total);
		}).send(function(err, data) {
			if (err == null) {
				consoleLog('File uploaded successfully to "' + data.Location + '"');
				resetFile($('#attach-file'));
				sendMessage(data.Location);
			} else {
				alert('Oops, unable to upload file: ' + JSON.stringify(err));
				$("#send-message-dialog form[name='send-message-form']").show();
				$("#send-message-dialog #send-message-dialog-title").text('Try Send Your Message Again');
			}
		});
	}
}
function broadcastMessageOneByOne(idx, lastUser) {
	var s = getData('broadcast-message', lastUser);
	if (!s) return false;
	var data = JSON.parse(s);
	var action = getData('broadcast-message-action', lastUser);
	var n = Object.keys(data).length;
	if (idx == undefined) idx = 0;
	if (idx > n-1) {
		$("#send-message-dialog").modal("hide");
		alert('Broadcast message completed.');
		return false;
	}
	var key = Object.keys(data)[idx];
	var url = 'messages/' + data[key] + '/new-msg/actions';
	$("#send-message-dialog #send-message-dialog-title").text('Broadcast message to ' + data[key] + '...');
	var obj = {}; // ajax is now able to do a multi-path write!
	obj[userName + '-' + getEpoch()] = action;
	postObject('PATCH', url, obj, 'broadcastMessageOneByOne(' + (idx+1) + ',' + (idx>=n-1) + ');');
}
function broadcastMessage(action) {
	var spinId = runSpinner();
	var url = getChatUrl('names');
	$.getJSON(url)
	.done(function (data) {
		if (data == null) {
			alert('Oops, there is no user names found.');
		} else {
			setData('broadcast-message', JSON.stringify(data));
			setData('broadcast-message-action', action);
			broadcastMessageOneByOne();
		}
	}).fail(function (jqxhr, textStatus, error) {
		alert('Oops, broadcast message failed.');
	}).always(function() {
		stopSpinner(spinId);
	});
}
function loadUserUID(uname, users, idx) { // call this if playerID changed
	if (idx == undefined) idx = 0;
	if (uname == '' && users) {
		if (users.length == 0 || idx > users.length-1) return false;
		uname = users[idx];
	}
	var url = getChatUrl('name/' + uname + '/uid');
	$.getJSON(url)
	.done(function (data) {
		if (data == null) consoleLog('Oops, user ID for "' + uname + '" not found.');
		else {
			var arr = getItem('pins').split(',');
			for (var i=0; i<arr.length; i++) {
				if (arr[i].indexOf(uname + '+') == 0) {
					arr.splice(i, 1); // remove (splice) 1 element
					break;
				}
			}
			var pins = arr.join(',');
			if (pins) pins += ',';
			setItem('pins', pins + getPIN(uname, data));
			consoleLog('User ID for"' + uname + '" has been updated.');
		}
		if (users) loadUserUID('', users, idx + 1);
	}).fail(function (jqxhr, textStatus, error) {
		consoleWarn('Oops, user ID for "' + uname + '" not found.');
	});
}
function loadUserUIDs(groupName, groupDesc, pins, app, showAlert, users, idx) {
	if (idx == undefined) idx = 0;
	if (users.length == 0 || idx > users.length-1) {
		setItem('group-name-' + hash(groupName), groupName);
		setItem('group-desc-' + hash(groupName), groupDesc);
		setItem('group-pins-' + hash(groupName), pins);
		setItem('app-' + groupName, app);
		var action = getData('load-group-action', true);
		if (action) setTimeout(action, 0);
		else if (showAlert) {
			if (users.length > 0)
				alert('Group "' + groupName + '" (' + (users.length+1) + ' users) has been updated.'); // +1 with ourself
			else alert('Group "' + groupName + '" has been updated.');
		}
		return false;
	}
	var uname = users[idx];
	var url = getChatUrl('name/' + uname + '/uid');
	var spinId = runSpinner();
	$.getJSON(url)
	.done(function (data) {
		if (data == null) data = '0'; // sendMesage will convert it to variskindoUID
		if (pins) pins += ',';
		pins += getPIN(uname, data);
		loadUserUIDs(groupName, groupDesc, pins, app, showAlert, users, idx + 1);
	}).fail(function (jqxhr, textStatus, error) {
		consoleWarn('Oops, load user "' + uname + '" failed');
	}).always(function() {
		stopSpinner(spinId);
	});
}
function loadGroup(groupName, checkUser) { // call this if group changed
	var spinId;
	if (!groupName) {
		groupName = groupName = $('#send-message-dialog #group-name').val(); // from manage group
		spinId = runSpinner();
	}
	if (!groupName) {
		alert('Please enter a group name');
		if (spinId) stopSpinner(spinId);
		return false;
	}
	var url = getChatUrl('groups/' + groupName);
	var sendingMsg = $('#send-message-dialog').is(':visible');
	$.getJSON(url)
	.done(function (data) {
		if (data == null) {
			if (checkUser) loadUserUID(uname);
			else if (sendingMsg) alert('Oops, group "' + groupName + '" not found.');
		} else {
			var n = Object.keys(data).length, pins = '', uname, uid, member = false, app = '';
			//var arr = getItem('pins').split(','); // starts from scratch
			var arr = [], users = [];
			for (var i=0; i<n; i++) {
				var key = Object.keys(data)[i];
				if (key == 'app') {
					app = data[key]; // group app url
					continue;
				} else if (key == 'desc' || key == 'owner' || key == 'time' || key == 'admins') continue;
				uname = key; // data[key] is timestamp
				if (uname == userName) member = true;
				uid = '';
				for (var j=0; j<arr.length; j++) {
					if (arr[j].indexOf(uname + '+') == 0) {
						uid = getPlayerId(arr[j]);
						break;
					}
				}
				if (!uid && uname == userName) uid = OneSignalUID;
				if (uid) {
					if (pins) pins += ',';
					pins += getPIN(uname, uid);
				} else users.push(uname);
			}
			if (member) loadUserUIDs(groupName, data.desc, pins, app, sendingMsg || spinId, users);
			else if (sendingMsg) alert('Oops, you are not a member of group "' + groupName + '".');
		}
		if (sendingMsg && !spinId) {
			$("#send-message-dialog form[name='send-message-form']").show();
			$("#send-message-dialog #send-message-dialog-title").text('Try Send Your Message Again');
		}
	}).fail(function (jqxhr, textStatus, error) {
		if (sendingMsg) {
			alert('Oops, group "' + groupName + '" not found.');
			if (!spinId) {
				$("#send-message-dialog form[name='send-message-form']").show();
				$("#send-message-dialog #send-message-dialog-title").text('Try Send Your Message Again');
			}
		}
	}).always(function() {
		if (spinId) stopSpinner(spinId);
	});
}
function isGroupMember(groupName) {
	var member = getItem('group-member-' + hash(groupName));
	if (member == 1) return true;
	if (member == '0') return false; // do not check: member == 0 since if member == '' then member == 0 will be true
	return true; // for older version
}
function checkGroupMember(groupName) {
	if (groupName && !isGroupMember(groupName)) {
		alert('Oops, you are not a member of group "' + groupName + '".');
		return false;
	} return true;
}
function setGroupMember(groupName, member) {
	if (member) member = 1;
	else member = 0;
	setItem('group-member-' + hash(groupName), member);
}
function sendMessage(fileUrl, action, msgTo) {
	if (!msgTo) msgTo = $('#send-message-dialog input[name=users]').val();
	if (!msgTo && !action) { // not leave group
		alert('Please enter a valid username or group name.');
		return false;
	} else if (debugging() && msgTo == 'all-user-names') {
		var spinId = runSpinner();
		$("#send-message-dialog").data('spinId', spinId);
		broadcastMessage($('#send-message-dialog #message').text());
		return false;
	}
	var spinId;
	function sendError(msg) {
		alert(msg);
		$("#send-message-dialog form[name='send-message-form']").show();
		$("#send-message-dialog #send-message-dialog-title").text('Try Send Your Message Again');
		stopSpinner(spinId);
	}
	if (!fileUrl) {
		spinId = runSpinner();
		$("#send-message-dialog form[name='send-message-form']").hide();
		if (isUploadFile()) {
			$("#send-message-dialog").data('spinId', spinId);
			uploadFile();
			return false;
		}
		$("#send-message-dialog #send-message-dialog-title").text('Sending your message...');
	} else {
		spinId = parseInt($("#send-message-dialog").data('spinId') || undefined, 10);
		$("#send-message-dialog #send-message-dialog-title").text('Sending your message...');
	}
	if ($('#send-message-dialog #group-name').length && action.indexOf('group') >= 0 && action != 'create-group') {
		if (msgTo) {
			if (msgTo != $('#send-message-dialog #group-name').val())
				msgTo = $('#send-message-dialog #group-name').val() + ',' + msgTo; // group chat
		} else msgTo = $('#send-message-dialog #group-name').val();
	}
	var sendToGroup = getData('send-to-group', true) == 1;
	var arr = msgTo.split(','), pins = [], pins2 = [], playerIds = [], usernames = [], groupName = '', groupDesc = '';
	var arr2 = getItem('pins').split(',');
	for (var i=0; i<arr2.length; i++) { // remove group pins
		var j = arr2.length - i - 1;
		var uname = getPlayerName(arr2[j]);
		if (sendToGroup || getItem('group-name-' + hash(uname)) != '') { // if it is a group name
			arr2.splice(j, 1); // remove group pin
			setItem('pins', arr2.join(','));
		}
	}
	for (var i=0; i<arr.length; i++) { // convert usernames to pins
		var uid = '';
		for (var j=0; j<arr2.length; j++) {
			if (arr2[j].indexOf(arr[i] + '+') == 0) {
				uid = getPlayerId(arr2[j], true);
				break;
			}
		}
		if (uid) pins2.push(getPIN(arr[i], uid)); // valid username
		else pins2.push(arr[i]); // a valid pin or group name
		arr[i] = getPlayerName(arr[i]); // skip playerId
		var re = /^\w+$/; // https://stackoverflow.com/questions/21540624/javascript-regex-only-alphabet-number-and-underscore
		if (!re.test(arr[i])) {
			sendError('Invalid username "' + arr[i] + '". You can only use a-z, A-Z, 0-9 and underscore.');
			return false;
		}
	}
	msgTo = arr.join(',');
	for (var i=0; i<pins2.length; i++) {
		if (pins2[i] == '') continue;
		var uname = getPlayerName(pins2[i]);
		var playerId = getPlayerId(pins2[i], true);
		var pin;
		if (uname == '') continue;
		if (sendToGroup || playerId == '' || getItem('group-name-' + hash(uname)) != '') { // if it is a group name
			if (groupName != '') {
				sendError('Unable to send message to more than one group.');
				return false;
			}
			groupName = uname;
			var	s = getItem('group-pins-' + hash(groupName));
			if (!checkGroupMember(groupName)) {
				stopSpinner(spinId);
				return false;
			} else if (s) {
				var gpins = s.split(',');
				for (var j=0; j<gpins.length; j++) {
					uname = getPlayerName(gpins[j]);
					playerId = getPlayerId(gpins[j]);
					pin = gpins[j];
					if (uname && playerId) { // in case corrupt data
						if (usernames.indexOf(uname) < 0) usernames.push(uname);
						if (playerIds.indexOf(playerId) < 0 && playerId != OneSignalUID) // no need to send self notification
							playerIds.push(playerId);
						if (pins.indexOf(pin) < 0) pins.push(pin);
					} else {
						var a = gpins;
						a.splice(a.indexOf(gpins[j]), 1); // remove corrupt pin
						setItem('group-pins-' + hash(groupName), a.join(','));
						loadGroup(groupName);
						alert('Invalid user or group name');
						stopSpinner(spinId);
						return false;
					}
				}
			} else {
				loadGroup(groupName);
				alert('User or group "' + groupName + '" not defined yet. Please resend your message after the user or group has been loaded.');
				stopSpinner(spinId);
				return false;
			}
		} else {
			pin = getPIN(uname, playerId);
			if (usernames.indexOf(uname) < 0) usernames.push(uname);
			if (playerIds.indexOf(playerId) < 0) playerIds.push(playerId);
			if (pins.indexOf(pin) < 0) pins.push(pin);
		}
	}
	var message, msgText, actionArr;
	var headings, obj;
	if (groupName) headings = getGroupDesc(groupName);
	else {
		headings = userFullName;
		if (getItem('VIP').indexOf(usernames.join('')) >= 0) headings = getItem('VIP-name') || headings;
	}
	if ($('#send-message-dialog .emojionearea .emojionearea-editor').length)
		message = $('#send-message-dialog .emojionearea .emojionearea-editor').html(); // stickers not saved at '#message'
	else if ($('#send-message-dialog #message').length) message = $('#send-message-dialog #message').html();
	message = $('#send-message-dialog #reply').html() + (message || '');
	msgText = getChatMessage(message);
	if (action == 'create-group') {
		groupName = $('#send-message-dialog #group-name').val();
		groupDesc = $('#send-message-dialog #group-desc').val();
		headings = groupDesc;
		message = userFullName + ' created group "' + groupDesc + '"';
		msgText = message;
		setData('group-name', groupName);
		setData('group-desc', groupDesc);
		action = "loadGroup('" + groupName + "');loadChats();";
	} else if (action == 'add-group-member') {
		groupName = $('#send-message-dialog #group-name').val() || getData('group-name', true);
		groupDesc = $('#send-message-dialog #group-desc').val();
		headings = groupDesc || getGroupDesc(groupName);
		var uname = $('#send-message-dialog #users').val() || getData('user-name', true);
		message = userFullName + ' added ' + getFullName(uname);
		msgText = message;
		action = "loadGroup('" + groupName + "');if(userName=='" + uname + "')setGroupMember('" + groupName + "',true);";
		msgTo = groupName; // no need to send private message
	} else if (action == 'remove-group-member') {
		groupName = $('#send-message-dialog #group-name').val() || getData('group-name', true);
		groupDesc = $('#send-message-dialog #group-desc').val();
		headings = groupDesc || getGroupDesc(groupName);
		var uname = $('#send-message-dialog #users').val() || getData('user-name', true);
		message = userFullName + ' removed ' + getFullName(uname);
		msgText = message;
		action = "loadGroup('" + groupName + "');if(userName=='" + uname + "')setGroupMember('" + groupName + "',false);";
		msgTo = groupName; // no need to send private message
	} else if (action == 'add-group-admin') {
		groupName = $('#send-message-dialog #group-name').val() || getData('group-name', true);
		groupDesc = $('#send-message-dialog #group-desc').val();
		headings = groupDesc || getGroupDesc(groupName);
		var uname = $('#send-message-dialog #users').val() || getData('user-name', true);
		message = userFullName + ' added ' + getFullName(uname) + ' as an admin.';
		msgText = message;
		action = "loadGroup('" + groupName + "');";
		msgTo = groupName; // no need to send private message
	} else if (action == 'remove-group-admin') {
		groupName = $('#send-message-dialog #group-name').val() || getData('group-name', true);
		groupDesc = $('#send-message-dialog #group-desc').val();
		headings = groupDesc || getGroupDesc(groupName);
		var uname = $('#send-message-dialog #users').val() || getData('user-name', true);
		message = userFullName + ' removed ' + getFullName(uname) + ' as an admin.';
		msgText = message;
		action = "loadGroup('" + groupName + "');";
		msgTo = groupName; // no need to send private message
	} else if (action == 'leave-group') {
		groupName = $('#send-message-dialog #group-name').val() || getData('group-name', true);
		groupDesc = $('#send-message-dialog #group-desc').val();
		headings = groupDesc || getGroupDesc(groupName);
		message = getFullName(userName) + ' left';
		msgText = message;
		action = "loadGroup('" + groupName + "');";
		msgTo = groupName; // no need to send private message
	} else {
		if (fileUrl) {
			if (isImageFile(getFileName(fileUrl))) {
				if (sendEncryptedImage() && !isGifFile(fileUrl)) {
					var id = hash(fileUrl);
					var key =$('#attach-file').data('key');
					message += '<div><center><img id="img-' + id + '" src="' + $('#attach-file').data('tiny') + '" url="' + fileUrl + '" style="min-width:50%;max-width:50%;cursor:pointer;" onerror="' + loadImageOnError('404.jpg') + '" onclick="stopEventPropagation(event);showEncryptedImage(\'img-' + id + '\',\'' + key + '\');"></center></div>';
				} else message += '<div><center><img src="' + fileUrl + '" style="max-width:100%;cursor:pointer;" onerror="' + loadImageOnError('404.jpg') + '" onclick="stopEventPropagation(event);openWindow(this.src,true);"></center></div>';
			} else message += '<div><center><div onclick="stopEventPropagation(event);openWindow(\'' + fileUrl + '\',true);" class="btn-sm btn-primary" target="_blank">Download &quot;' + decodeURI(getFileName(fileUrl)) + '&quot;</div></center></div>';
			if (!msgText) msgText = 'File';
		}
		actionArr = msgText.split('==action==');
		if (actionArr.length > 1) action = actionArr[1];
		else action = '';
	}
	message = message.split('\n').join('<br>'); // replace with CR with <br>
	if (message == '') {
		sendError('Your message is empty.');
		return false;
	}
	if (arr.length == 1 && groupName && getItem('pins-segmen-' + hash(msgTo)) == 1) { // send to a group only
		obj = { // https://documentation.onesignal.com/docs/action-buttons
			app_id: OneSignalAppId,
			web_push_topic: 'To-' + msgTo, // make sure it is not overwritten with other topic
			headings: {en: (getItem('group-desc-' + hash(msgTo)) || msgTo) + ' (' + userFullName + ')'},
			contents: {en: msgText},
			web_buttons: [{'id': 'id1', 'text': 'Reply', 'icon': 'ic_menu_send', 'url': window.location.origin + window.location.pathname}],
			included_segments: msgTo
		}
	} else {
		obj = { // https://documentation.onesignal.com/docs/action-buttons
			app_id: OneSignalAppId,
			web_push_topic: 'To-' + headings, // make sure it is not overwritten with other topic
			headings: {en: headings},
			contents: {en: msgText},
			web_buttons: [{'id': 'id1', 'text': 'Reply', 'icon': 'ic_menu_send', 'url': window.location.origin + window.location.pathname}],
			include_player_ids: playerIds.join(',').split('|').join(',').split(',') // in case a user has many player ID
		}
	}
	$.ajax({
		accept: "application/json",
		type: 'POST',
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		headers: {
			'Authorization': 'Basic ' + OneSignalApiKey,
			'Content-Type': 'application/json'
		},
		url: OneSignalApiUrl,
		data: JSON.stringify(obj),
		success: function(data, status){ /* done */
			var url, path, obj = {}; // ajax is now able to do a multi-path write!
			var local = yyyymmddhhmmss();
			var time = getEpoch();
			setData('msgTo', msgTo);
			setData('message', message);
			setData('msgText', msgText);
			setData('usernames', usernames.join(','));
			setData('pins', pins.join(','));
			setData('spinId', spinId);
			if (groupName) obj['group'] = groupName;
			obj['msgTo'] = msgTo;
			obj['message'] = encryptMessage(cryptoVersion, userName, groupName, message);
			obj['local'] = local;
			obj['time'] = time;
			obj['ver'] = cryptoVersion;
			if (showPlainMessage()) {
				obj['message'] = message;
				obj['ver'] = 0;
			}
			if (action) {
				obj['action'] = action;
				setData('action', action);
			}
			url = 'messages/' + userName + '/sent';
			postObject('POST', url, obj, 'doSendMessage("' + groupName + '","data.name")');
			consoleLog('Message sent successfully: ', status);
		},
		error: function(xhr, status, error){ /* fail */
			alert('Send message failed: ', error);
			$("#send-message-dialog form[name='send-message-form']").show();
			$("#send-message-dialog #send-message-dialog-title").text('Try Send Your Message Again');
			stopSpinner(spinId);
		},
		complete: function() {
			if (!$("#send-message-dialog form[name='send-message-form']").is(':visible')) { // success
				setTimeout(function(){
					$("#send-message-dialog").modal("hide");
					stopSpinner(spinId);
				}, 30000); // give time to complete doSendMessage
			} // else try again
		},
		timeout: 30000
	});
}
function closeSendMessage(key, obj) {
	if (!$("#send-message-dialog form[name='send-message-form']").is(':visible')) { // success
		$("#send-message-dialog").modal("hide");
		var spinId = getData('spinId', true);
		stopSpinner(spinId);
	}
	if ($('#conversation-dialog').is(':visible')) {
		obj = JSON.parse(hexToString(obj));
		appendChat(key, obj);
	}
}
function doSendMessage(groupName, key) {
	var url, path, obj = {}, sendObj = {}; // ajax is now able to do a multi-path write!
	var groupDesc = getData('group-desc', true);
	var msgTo = getData('msgTo', true);
	var message = getData('message', true), msg1, msg2;
	var msgText = getData('msgText', true);
	var usernames = getData('usernames', true).split(',');
	var pins = getData('pins', true).split(',');
	var action = getData('action', true);
	var local = yyyymmddhhmmss();
	var time = getEpoch();
	var onSuccess = '';
	var arr = msgTo.split(',');
	var createGroup = groupName && groupDesc;
	var lastKey = getItem('last-msg-' + 'messages/' + userName + '/sent');
	if (lastKey) obj[userName + '/sent/' + lastKey + '/next'] = key;
	if (createGroup) { // create group => send first message to the group
		groupName = getData('group-name', true); // remove 'group-name'
		path = 'groups/' + groupName + '/' + key + '/';
		obj[path + 'user'] = userName;
		obj[path + 'message'] = encryptMessage(cryptoVersion, userName, groupName, userName + ' created group "' + groupName + '"');
		obj[path + 'local'] = local;
		obj[path + 'time'] = time;
		obj[path + 'ver'] = cryptoVersion;
	} else {
		for (var i=0; i<arr.length; i++) {
			if (arr[i] == groupName) { // send message to a group
				msg1 = encryptMessage(cryptoVersion, userName, groupName, message);
				msg2 = encryptMessage(cryptoVersion, userName, groupName, msgText);
				sendObj['msgTo'] = groupName;
				sendObj['message'] = msg1;
				sendObj['local'] = local;
				sendObj['time'] = time;
				sendObj['ver'] = cryptoVersion;
				path = 'groups/' + groupName + '/' + key + '/'; // add message to group all messages
				obj[path + 'user'] = userName;
				obj[path + 'message'] = msg1;
				obj[path + 'local'] = local;
				obj[path + 'time'] = time;
				obj[path + 'ver'] = cryptoVersion;
				if (action) obj[path + 'action'] = action;
				path = userName + '/' + groupName + '/' + key + '/'; // add message to self group messages
				obj[path + 'msgTo'] = groupName;
				obj[path + 'message'] = msg1;
				obj[path + 'local'] = local;
				obj[path + 'time'] = time;
				obj[path + 'ver'] = cryptoVersion;
				if (action) obj[path + 'action'] = action;
				lastKey = getItem('last-msg-' + 'messages/' + userName + '/' + groupName);
				if (lastKey) obj[userName + '/' + groupName + '/' + lastKey + '/next'] = key;
				path = 'chats/' + userName + '/' + groupName + '/'; // add last message to subscribed group
				obj[path + 'key'] = key;
				obj[path + 'message'] = msg2;
				obj[path + 'send'] = 1;
				obj[path + 'group'] = groupName;
				//obj[path + 'desc'] = groupDesc || getGroupDesc(groupName);
				obj[path + 'time'] = time;
				obj[path + 'ver'] = cryptoVersion;
				if (showPlainMessage()) {
					obj[path + 'message'] = message;
					obj[path + 'ver'] = 0;
				}
				updateChat(groupName, msgText, time);
			} else if (userName != arr[i]) { // skip self message
				msg1 = encryptMessage(cryptoVersion, userName, '', message);
				msg2 = encryptMessage(cryptoNoKeyVersion, arr[i], '', message);
				sendObj['msgTo'] = arr[i];
				sendObj['message'] = msg1;
				sendObj['local'] = local;
				sendObj['time'] = time;
				sendObj['ver'] = cryptoVersion;
				path = userName + '/' + arr[i] + '/' + key + '/'; // add message to self's all messages
				obj[path + 'msgTo'] = arr[i];
				obj[path + 'message'] = msg1;
				obj[path + 'local'] = local;
				obj[path + 'time'] = time;
				obj[path + 'ver'] = cryptoVersion;
				if (showPlainMessage()) {
					obj[path + 'message'] = message;
					obj[path + 'ver'] = 0;
				}
				lastKey = getItem('last-msg-' + 'messages/' + userName + '/' + arr[i]);
				if (lastKey) obj[userName + '/' + arr[i] + '/' + lastKey + '/next'] = key;
				path = arr[i] + '/' + userName + '/' + key + '/'; // add message to other user's all messages
				obj[path + 'user'] = userName;
				obj[path + 'message'] = msg2; // converted to private key after opened
				obj[path + 'local'] = local;
				obj[path + 'time'] = time;
				obj[path + 'ver'] = cryptoNoKeyVersion;
				if (action && !groupName) obj[path + 'action'] = action;
				path = 'chats/' + userName + '/' + arr[i] + '/'; // add last message to self
				obj[path + 'key'] = key;
				obj[path + 'message'] = encryptMessage(cryptoVersion, userName, '', msgText);
				obj[path + 'send'] = 1;
				obj[path + 'time'] = time;
				obj[path + 'ver'] = cryptoVersion;
				path = 'chats/' + arr[i] + '/' + userName + '/'; // add last message to other user
				obj[path + 'key'] = key;
				obj[path + 'user'] = userName;
				obj[path + 'message'] = encryptMessage(cryptoNoKeyVersion, arr[i], '', msgText);
				obj[path + 'send'] = 0;
				obj[path + 'time'] = time;
				obj[path + 'ver'] = cryptoNoKeyVersion;
				if (showPlainMessage()) {
					obj[path + 'message'] = message;
					obj[path + 'ver'] = 0;
				}
			}
		}
	}
	for (var i=0; i<usernames.length; i++) {
		if (usernames[i] == userName) continue;
		msg1 = encryptMessage(cryptoNoKeyVersion, usernames[i], groupName, message);
		msg2 = encryptMessage(cryptoNoKeyVersion, usernames[i], groupName, msgText);
		path = usernames[i] + '/inbox/' + key + '/'; // add message to other user's inbox
		if (groupName) obj[path + 'group'] = groupName;
		obj[path + 'user'] = userName;
		obj[path + 'message'] = msg1;
		obj[path + 'local'] = local;
		obj[path + 'time'] = time;
		obj[path + 'ver'] = cryptoNoKeyVersion;
		//if (action) obj[path + 'action'] = action; (no need action here)
		path = usernames[i] + '/new-msg/'; // add flag new message to other user
		obj[path + 'time'] = time;
		obj[path + 'messages/' + key + '/user'] = userName;
		obj[path + 'messages/' + key + '/group'] = groupName || '';
		onSuccess += 'savePIN("' + pins[i] + '");';
		if (!groupName) updateChat(usernames[i], msgText, time);
		else {
			path = usernames[i] + '/' + groupName + '/' + key + '/'; // add message to self group messages
			obj[path + 'user'] = userName;
			obj[path + 'message'] = msg1;
			obj[path + 'local'] = local;
			obj[path + 'time'] = time;
			obj[path + 'ver'] = cryptoNoKeyVersion;
			if (action) obj[path + 'action'] = action;
			path = 'chats/' + usernames[i] + '/' + groupName + '/'; // add last message to subscribed group
			obj[path + 'key'] = key;
			obj[path + 'user'] = userName;
			obj[path + 'message'] = msg2;
			obj[path + 'send'] = 0;
			obj[path + 'group'] = groupName;
			//obj[path + 'desc'] = groupDesc || getGroupDesc(groupName);
			obj[path + 'time'] = time;
			obj[path + 'ver'] = cryptoNoKeyVersion;
		}
	}
	url = 'messages';
	if (message == getFullName(userName) + ' left') onSuccess += "setGroupMember('" + groupName + "',false);"; // set member to false
	if (arr.length == 1 && !$('#chat-menu #chat-' + arr[0]).length) // send message to a new user or group
		onSuccess += 'loadChats();';
	onSuccess += "closeSendMessage('" + key + "','" + stringToHex(JSON.stringify(sendObj)) + "');";
	postObject('PATCH', url, obj, onSuccess);
	if (createGroup) {
		obj = {};
		path = 'groups/' + groupName + '/';
		obj[path + 'desc'] = groupDesc;
		obj[path + 'owner'] = userName; // creator
		obj[path + userName] = time;
		obj[path + 'admins/' + userName] = time;
		obj[path + 'time'] = time;
		for (var i=0; i<usernames.length; i++) {
			obj[path + usernames[i]] = time;
		}
		path = 'names/';
		obj[path + groupName] = time;
		path = 'messages/' + userName + '/' + groupName + '/' + key + '/'; // add message to self group messages
		obj[path + 'msgTo'] = groupName;
		obj[path + 'message'] = encryptMessage(cryptoVersion, userName, groupName, message);
		obj[path + 'local'] = local;
		obj[path + 'time'] = time;
		obj[path + 'ver'] = cryptoVersion;
		path = 'messages/chats/' + userName + '/' + groupName + '/'; // add last message to subscribed group
		obj[path + 'key'] = key;
		obj[path + 'message'] = encryptMessage(cryptoVersion, userName, groupName, msgText);
		obj[path + 'send'] = 1;
		obj[path + 'group'] = groupName;
		obj[path + 'time'] = time;
		obj[path + 'ver'] = cryptoVersion;
		postObject('PATCH', '', obj, "alert('Group \"" + groupDesc + "\" has been created successfully.')");
		loadChats();
		setItem('group-name-' + hash(groupName), groupName);
		setItem('group-desc-' + hash(groupName), groupDesc);
		setItem('group-pins-' + hash(groupName), pins.join(','));
	}
}
function hideOneSignalMenus(hideNotification) {
	if (hideNotification) {
		if (userName == '') {
			$('#sign-up').parent().show();
			$('#notification').parent().show();
		} else if (unsupportedNotification()) $('#notification').parent().hide();
	}
	$('#news').parent().hide();
	$('#berita').parent().hide();
	if (userName == '') {
		$('#inbox-messages').parent().hide();
		$('#sent-messages').parent().hide();
		$('#send-message').parent().hide();
		$('#manage-group').parent().hide();
	}
}
function showOneSignalMenus(showChatMenu) {
	if (OneSignal && getItem('subscriptionChange') == 'true') { // make sure user has subscribed
		if (OneSignalUID == '') {
			$('#news').parent().hide();
			$('#berita').parent().hide();
			$('#inbox-messages').parent().hide();
			$('#sent-messages').parent().hide();
			$('#send-message').parent().hide();
			$('#manage-group').parent().hide();
		} else {
			showNews();
			$('#self-notification').parent().show();
			if (userName) {
				$('#inbox-messages').parent().show();
				$('#sent-messages').parent().show();
				$('#send-message').parent().show();
				$('#manage-group').parent().show();
			} else {
				$('#inbox-messages').parent().hide();
				$('#sent-messages').parent().hide();
				$('#send-message').parent().hide();
				$('#manage-group').parent().hide();
			}
		}
	} else hideOneSignalMenus();
	if (navigator.onLine) {
		$('#notification').parent().show();
		$('#self-notification').parent().show();
	} else {
		$('#notification').parent().hide();
		$('#self-notification').parent().hide();
		$('#news').parent().hide();
		$('#berita').parent().hide();
	}
	if (!noChatMenu() && userName != '' && showChatMenu) {
		$('#chat-menu').show();
		$('#inbox-messages').parent().hide();
		$('#sent-messages').parent().hide();
		$('#send-message').parent().hide();
		$('#manage-group').parent().hide();
		consoleLog('Chat menu shown');
	}
}
function onFocus() {
	inboxMessagesChecking();
}
function onBlur() {
	updateOnlineTime(false);
}
function networkMenus() {
	if (navigator.onLine) {
		inboxMessagesChecking();
		$('#notification').parent().show();
		$('#self-notification').parent().show();
		showOneSignalMenus(true);
	} else {
		$('#notification').parent().hide();
		$('#self-notification').parent().hide();
		$('#news').parent().hide();
		$('#berita').parent().hide();
	}
}
function onNetworkStatus(event) {
	networkMenus();
	var condition = navigator.onLine ? "online" : "offline";
	consoleLog('Event: ' + event.type + '; Status: ' + condition);
}
/* // error-free log on page refresh
info,15:54:06 Initializing OneSignal...
info,15:55:13 OneSignal Service Worker: Registration succeeded with scope at https://apps.variskindo.com/
info,15:55:13 Service Worker: State is activating
info,15:55:13 Posting message: \"checkCache\"
dark,[15:55:13 Service Worker] From Main: {\"type\":\"VaRisk\",\"message\":\"checkCache\"}
danger,[Service Worker Installation] Installing service worker failed SecurityError: Failed to register a ServiceWorker for scope ('https://apps.variskindo.com/') with script ('https://apps.variskindo.com/?appId=966b1619-8df5-4e12-bbab-6f28bc42eeb0'): The script has an unsupported MIME type ('text/html').
dark,[15:55:13 Service Worker] Caching new resource: https://apps.variskindo.com/?appId=966b1619-8df5-4e12-bbab-6f28bc42eeb0
dark,[15:55:14 Service Worker] Service worker version 05-05-2020-D activated
dark,[15:55:14 Service Worker] Deleting cache \"apps-variskindo-\"...
info,16:00:21 You are away in 373.80 seconds
info,16:00:22 You are active in 0.75 seconds
info,16:00:22 You have been using this app for 7200.75 seconds
info,16:01:01 You are away in 39.47 seconds
dark,[16:01:03 Service Worker] Caching new resource: https://ajax.aspnetcdn.com/ajax/bootstrap/3.3.5/fonts/glyphicons-halflings-regular.woff2
*/
function showImageInfo() {
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 4) { // perhaps rounding error: 1107.25 >= 1108
		$('.img-info').show();
	} // https://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
	else $('.img-info').hide();
}
(function() {
	$("[data-toggle=tooltip]").tooltip(); // make sure showing all tooltips
	if (window.location.pathname.indexOf('max') > 0 && getItem('debug-local') != 1) {
		setItem('debug-local', 1);
		if (!debugging()) {
			window.location = '/'; // make sure not debugged
			return false;
		} else {
			var url = getItem('app-max');
			if (url == 1) url = 'https://xpdev.varisk.xyz/js/app.max.js';
			else if (url == 2) url = 'https://cdn.varisk.xyz/js/apps-variskindo-com/app.max.js';
			if (url.indexOf('http') == 0) { // in case using http
				$.cachedScript(url).done(function(script, textStatus) {
					cacheUrl(url, '', true);
				});
				return false;
			}
		}
	}
	removeItem('debug-local');
	setChatServers(); // make sure cache correct server
	updateApp(js);
	//updateApp('window.hello = function(){alert(1)};');
	//hello();
	trapConsole();
	consoleLog('Loading ' + window.location.href + ' (' + ver + ')...');
	$('#version').html('Version: ' + ver);
	changeBg();
	if ($(window).width() < 360) {
		$('#header').html('&nbsp;VaRisk Web Apps');
		$('#status').css('font-size', '90%');
	} else if ($(window).width() < 480) $('#status').css('font-size', '100%');
	else {
		if ($(window).width() < 640) $('#status').css('font-size', '110%');
		else if ($(window).width() < 800) $('#status').css('font-size', '125%');
		else if ($(window).width() < 1024) $('#status').css('font-size', '150%');
		else $('#status').css('font-size', '180%');
		$('#main-panel').css('margin-top', '16px');
		$('#status').css('margin-bottom', '16px');
	}
	menuH = 588; // dromdown menu for VCR, VMR and VRP
	if ($(window).height() < menuH) $('.menu-item center').hide();
	else if ($(window).height() > $('#vrp').offset().top + menuH) $('.close-menu1').hide(); // give space for "Add to Home screen
	setTimeout(function() {fb();}, fbMs);
	setInterval(function() {changeBg();}, bgMs);
	doPopupMenus();
	showImageInfo();
	$(document).on('click', function(evt) { // https://stackoverflow.com/questions/15234881/how-to-catch-any-click-event-in-jquery
		/*if(!$(evt.target).is('#my-id')) {
			//Hide
		}*/
		removeTooltips();
	});
	$(window).scroll(function() {
		showImageInfo()
	});
	$(window).focus(function() {
		onFocus();
		focusSec = Date.now() / 1000;
		var s = Date.now() / 1000; // in seconds
		if (blurSec == 0) blurSec = s;
		s = s - blurSec;
		if (s > blurSecLimit) blurAboveLimit(s);
	});
	$(window).blur(function() {
		onBlur();
		blurSec = Date.now() / 1000;
		var s = Date.now() / 1000; // in seconds
		if (focusSec == 0) focusSec = s;
		s = s - focusSec;
		if (s > focusSecLimit) focusAboveLimit(s);
		s += parseInt(getItem('focus') || 0, 10);
		setItem('focus', s.toFixed(2));
		if (s > focusSecTotalLimit) focusAboveTotalLimit(s);
	});
	window.addEventListener('online',  onNetworkStatus);
	window.addEventListener('offline', onNetworkStatus);
	window.addEventListener('load', e => {
		setTimeout(function() {
			var action = getItem('action');
			if (action) {
				setTimeout(function() {
					if (debugging()) alert('About to execute script: ' + action);
					setTimeout(action, 0);
					removeItem('action');
				}, 250);
			} else initOneSignal();
		}, 0);
	});
})();
/*
["basic", "frogita"]
["frogita-kiss.gif", "frogita-strong.gif", "frogita-sigh.gif", "frogita-eat.gif", "frogita-money.gif", "frogita-angry.gif", "frogita-laugh.gif", "frogita-sad.gif"]
["HotCherry-Kiss.gif", "HotCherry-Yes.gif", "MrPanda-Hi.gif", "MrPanda-Kiss.gif", "MrPanda-Laugh.gif", "MrPanda-Thumb-Up.gif", "PenguinsLoloPepe-Kiss.gif", "PenguinsLoloPepe-Love-You.gif", "PenguinsLoloPepe-Make-Love.gif", "PenguinsLoloPepe-Surfing.gif",  "SnowBabbit-Kiss.gif", "SnowBabbit-Well-Done.gif", "TeddyBear-Drink.gif", "TeddyBear-Kiss.gif", "TeddyBear-Love.gif", "TeddyBear-Raining.gif", "TeddyBear-Sigh.gif", "TeddyBear-Sleep.gif"]

setItem('stickers','');setItem('stickers-names','');setItem('stickers-url','');setTimeout(function(){ window.location.reload() }, 5000);

https://apps.variskindo.com
https://variskindo.xyz
https://vrp.varisk.xyz
https://rcommand.com
https://villabaline.com
http://liila.xyz
https://youtu.be/i7KhvsrTFYs
https://www.youtube.com/embed/rTVjstuyuJU?wmode=opaque
https://php2.varisk.xyz/files/sync/en_windows_7_ultimate_x64_dvd.iso
*/
