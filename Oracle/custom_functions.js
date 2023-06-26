/**
* Formats the date
*/
function convertToIsoUtcFormatDateTime(date,offsetHours){
	var dateString = '';
	if(date){
		var dateTimeParts=date.split(' ');
        var dateParts = dateTimeParts[0].split('-');
        if(dateTimeParts[1]){
        	var timeParts = dateTimeParts[1].split(':');
			var date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[2], timeParts[0], timeParts[1]);
			//8 hr difference between UTC and Phillipines
			date.setHours(date.getHours() - offsetHours);
			dateString=date.toISOString();
        }else{
        	var date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[2]);
        	if(offsetHours>0){
            	//8 hr difference between UTC and Phillipines
				date.setHours(date.getHours() - offsetHours);
            }
        	dateString=date.toISOString();
        }

	}
	return dateString;
}
/**
* Convert date to next date
*/
function convertTonextDate(date,addcount){
	if(date){
		var date = new Date(date);
		date.setDate(date.getDate() + addcount);
	}
	var mmUTC = date.getUTCMonth() + 1;
	var ddUTC = date.getUTCDate();
	var hhUTC = date.getUTCHours();
	// local to the browser (client) time zone
	var mm = date.getMonth() + 1;
	var dd = date.getDate();
	// var hh = date.getHours();
	date = date.getFullYear() +'-'+ ((mm < 10) ? '0'+ mm : mm) +'-'+ dd;
	return date;
}
/**
* check value exitst
*/
function isset(array,column_name){
	var result;
	if (typeof array.column_name == 'undefined') {
		result = 'false';
	}else{
		result = 'true';
	}
	return result;
}
/**
* increment
*/
function increment(var1,increment){
	var result;
	result = var1+increment;
 	return result;
}
/**
* round to 4 decimal points
*/
function round_decimal(val,round_val){
	var result;
	result = val.toFixed(round_val);
 	return result;
}
/**
* convert to camel case
*/
function camelize(str) {
	var result;
	result = str.split(' ').map(a => a[0].toUpperCase() + a.substring(1)).join(" ");
  return result;
}
/**
* generate a random number
*/
function getRandomNum(min, max) {
  var rnd = Math.floor(Math.random() * (max - min)) + min;
  return rnd;
}
/**
* generate a random number string
*/
function getRandomNumberString(length) {
    var characters ='0123456789';
    var result = '';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    result = result.toString();
    return result;
}
/**
* convert to epoch timestamp
*/ 
function convertDateToEpochTimestamp(date){
	var d = new Date(date);
	var epochTimeStamp = d.getTime()/1000.0;
	return epochTimeStamp;
}
/**
* convert epoch timestamp to human-readable format in YYYY/MM/DD
*/ 
function convertEpochToString(date){
	const d = new Date(parseInt(date));
	var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
	var formattedDate = year+"-"+month+"-"+day;
	return formattedDate;    
}
/**
* multiply two float numbers and return the output as a string
*/
function multiplyFloat(num1,num2){
	var value = parseFloat(num1) * parseFloat(num2);
	value = value.toFixed(2);
	value = value.toString();
	return value;
}
/**
* check if given unix time stamp is between current time and yesterday
*/
function checkDatetime(unixtime,starttime){
	var ret_val="false";
	var end=new Date(starttime).toLocaleString({ timeZone: 'Asia/Kolkata' });
	var start=new Date(new Date(starttime).getTime() - (24 * 60 * 60 * 1000)).toLocaleString({ timeZone: 'Asia/Kolkata' });
	var modified=new Date(parseInt(unixtime)).toLocaleString({ timeZone: 'Asia/Kolkata' });
	if(modified<=end && modified>=start){
		ret_val="true";
	}
	return ret_val;
}