// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",ondeviceready,false);
	
});

function ondeviceready(){
	
	$('#position').on('click',function (){
	getposition ();
	});
	
	$('#watch').on('click',function (){
		watchposition ();
	});
	
}

function getposition(){
	
	var options={
		enablehighaccuracy:true,
		maximumage:3600000
	}
	
	var watchid=navigator.geolocation.getCurrentPosition(onsuccess,onerror,options);
	
	function onsuccess(position){
		
		alert('latitude:'      +position.coords.latitude   +'\n'+
		'longitude:'    +position.coords.longitude   +'\n'+
		'altitude:'    +position.coords.altitude   +'\n'+
		'accuracy:'   +position.coords.accuracy      +'\n'+
		'altitude accuracy:'   +position.coords.altitudeaccuracy +'\n'+
		'heading:'    +position.coords.heading    +'\n'+
		'speed:'      +position.coords.speed     +'\n'+
		'timestamp:'     +position.timestamp   +'\n');
	};
	
	function onerror(error){
		alert('code:'   +error.code  +'\n'+'message:'+error.message+'\n');
	}
}

function watchposition(){
	
	var options={
		maximumage:3600000,
		timeout:3000,
		enablehighaccuracy:true,
	}
	
	var watchid=navigator.geolocation.watchPosition(onsucces,onerror,options);
	
	function onsucces(position){
		
		$('#latitud').html(position.coords.latitude);
		$('#longitud').html(position.coords.longitude);
		$('#altitud').html(position.coords.altitude);
		$('#aaccuracy').html(position.coords.accuracy);
		$('#aaccuracy').html(position.coords.altitudeaccuracy);
		$('#heading').html(position.coords.heading);
		$('#speed').html(position.coords.speed);
		$('#timestamp').html(position.timestamp);
	};
	
 function onerror(error){
	 alert('code:'  +error.code   +'\n'+'message:'+error.message+'\n');
 }
}
		