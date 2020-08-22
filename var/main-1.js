console.log('v1-6-Build-600.1');
function getYahooObj(data) {
	var s = '', t = '', r, n = 0, arr = data.split('\n'), d;
	for (var i = 1, len = arr.length; i < len; i++) { // skip header
		t = arr[i].split(',');
		if (t.length == 7) { // Date,Open,High,Low,Close,Adj Close,Volume
			r = '{' + '"Date":"' + t[0] + '","Close":"' + t[5] + '","Volume":"' + t[6] + '"}';
			n++;
			if (r != '') { // Yahoo must be sorted descending
				if (s == '') s = r;
				else s = r + ',' + s;
			}
		}
	}
	//if (s != '') s = s.substring(0, s.length-1); // delete last comma
	s = '{"query":{"count":' + n + ',"results":{"quote":[' + s + ']}}}';
	// "{"query":{"results":{"quote":{"Symbol":"GOOG","Name":"Alphabet Inc","Currency":"USD","Exchange":"GOOG.O on Nasdaq","Bid":1036.05,"Ask":1036.05,"LastTradePriceOnly":1036.05,"PrevClose":1036.05,"Change":0,"Open":1043.29,"DaysLow":1031.15,"DaysHigh":1056.6,"Volume":1513702,"LastTradeDate":"13 Nov 2018","LastTradeTime":""}}}}"
	return JSON.parse(s);
}
var loadStockHistData1 = window.loadStockHistData;
window.loadStockHistData = function(i, idx, count, years, onDone) { // i = index of hist data, idx = index of stock list, count = number of stocks
	/*if (userEmail != 'info@variskindo.com') {
		loadStockHistData1(i, idx, count, years, onDone);
		return false;
	}*/
	if (!years) years = 1;
	if (onDone == undefined) onDone = '';
	if (idx == 0) {
		showSpinner();
		showProgressDiv(); // show & initialize progress bar
	}
	var code = getAppVar('stock-code-' + idx, '');
	var ticker = code;
	if (code.indexOf('.') >= 0) ticker = code.substring(0, code.indexOf('.'));
	var exch = getAppVar('stock-exch-' + idx, '');
	showSpinner('Loading "Data[' + i + '].' + code + '"...');
	var url;
	if (exch == 'CURRENCY') { // forex
		showError('Oops, sorry but this version is no longer able to load "' + code + '-' + exch + '". Please try again later.');
		return false;
	} else { // stock
		var date2 = Math.floor(getCurrentEpoch() / 1000);
		var date1 = date2 - years * 365 * 24 * 60 * 60;
		url = 'https://php.varisk.xyz/var-source.php?url=' + YhistDataUrl + YhistDataParam1 + code + YhistDataParam2a + date1 + YhistDataParam2b + date2 + YhistDataParam3;
	}
	//if (!mobile || webApp()) url = getCrossDomainUrl() + url;
	$.ajax({
		url: url,
/*		type: "GET",
		contentType: "application/json; charset=utf-8",
		dataType: "json",*/ // it is not JSON format
		success: function(output, status, xhr) { /* data == null when url not found  */
			var data = getYahooObj(output);
			data = cleanHistData(data);
			if (data == null || data.query == null || data.query.results == null) {
				//showError('Unable to download historical data "' + code + '". Please make sure date range is correct and not longer than 1 year.');
				showError('Unable to download historical data "' + code + '-' + exch + '". Please try again later.');
				return false;
			} else if (data.query.count == 0) {
				showError('No data found for "' + code + '-' + exch + '". Please make sure stock and exchange symbols are correct.');
				setAppVar('histdata-desc-' + i, '', '');
			} else {
				setAppVar('histdata-desc-' + i, getHistDataFormat(data.query.results.quote[data.query.count-1].Date, data.query.results.quote[0].Date), '');
			}
			saveToFile('histdata-' + code + '-' + i, JSON.stringify(data), '');
			if (idx == 0) setAppVar('histdata-info-' + i, code + '=' + data.query.count, '');
			else setAppVar('histdata-info-' + i, getAppVar('histdata-info-' + i, '') + ', ' + code + '=' + data.query.count, '');
			setAppVar('histdata-time-' + i, getCurrentTime(), ''); // data.query.created
			showProgressLoop(idx+1, count);
			if (idx < count-1) loadStockHistData(i, idx+1, count, years, onDone);
			else {
				var n = getAppVar('load-histdata-count', '');
				if (n == '' || isNaN(n)) n = '0';
				if (parseInt(n) > 0) {
					n = (parseInt(n) - 1).toString();
					var nextUrl = getAppVar('load-histdata-' + n, '');
					setAppVar('load-histdata-' + n, '', ''); // clear it now
					setAppVar('load-histdata-count', n, ''); // decrement now
					if (nextUrl != '') setTimeout(nextUrl, 0);
				} else {
					if (onDone != '') setTimeout(onDone, 0);
					else histData();
					setReady();
				}
			}
		},
		error: function(xhr, status, error) { /* fail */
			if (phoneGap()) ajaxError('Error(loadStockHistData): ' + status + ", " + error);
			else ajaxError('Unable to load historical data.');
		},
		complete: function() {
		},
	    timeout: timeoutAjaxInMs
	});
}
