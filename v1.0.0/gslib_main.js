function get(id){
var element=document.getElementById(id)
return element
}

function getValue(id){
var element=document.getElementById(id).value
return element
}

function getText(id){
var element=document.getElementById(id).innerHTML
return element
}

var slide=function(obj,pixels,delay){
var ok=get(obj)
setTransition(obj,delay)
ok.style.width=pixels
}

function setTransition(obj,effect){
get(obj).style.transition=effect+"ms"
get(obj).style.webkitTransition= effect+"ms"
}

function scale(obj,effect){
  var sk="scale("+effect+")"
  obj.style.transform=sk
}

function setBg(obj,color,transition){
setTransition(obj,transition)
get(obj).style.backgroundColor=color
}

function printf(message){
document.write(message)
}

function fadeIn(obj,transition,func){
setTransition(obj,transition)
get(obj).style.opacity=1
setTimeout(transition,func)
}

function fadeOut(obj,transition,func){
setTransition(obj,transition)
get(obj).style.opacity=0
setTimeout(transition,func)
}

function set(obj,str){
get(obj).innerHTML=str
get(obj).value=str
} 

function show(obj){
get(obj).style.display="block"
}

function display(obj){
get(obj).style.display="block"
}

function height(obj,value){
get(obj).style.height=value
}

function hide(obj){
get(obj).style.display="none"
}

function destroy(obj){
get(obj).style.display="none"
}

function setImage(obj,loc){
get(obj).src=loc
}

function marginLeft(obj,value){
get(obj).style.marginLeft=value
}

function marginRight(obj,value){
get(obj).style.marginRight=value
}

function marginTop(obj,value){
get(obj).style.marginTop=value
}

function paddingLeft(obj,value){
get(obj).style.paddingLeft=value
}

function paddingRight(obj,value){
get(obj).style.paddingRight=value
}

function paddingTop(obj,value){
get(obj).style.paddingTop=value
}

function delay(func,sec){
setTimeout(sec,func)
}

function top(obj,value){
get(obj).style.top=value
}

function left(obj,value){
get(obj).style.left=value
}

function ab(value){
if(value<0){
value=value*-1
}
return value
}

function random(min,max){
var ra=Math.floor(Math.random()*max)+min
return max
}

//this storage plugin was designed from kodi studio and ported to green switch
//all rights reserved


var Storage=function(){
//this is for cookie or local storage
this.write=function(dataKey,dataValue){
localStorage.setItem(dataKey, dataValue)
}//end fn
,
this.read=function(dataKey){
var dkey=localStorage.getItem(dataKey)
return dkey
},
this.writeCookie=function(dataKey,dataValue){
document.cookie=dataKey+"="+dataValue
},
this.readCookie=function(dataKey){
var cks=document.cookie
alert(cks)
}
}

//this js library connects to any database server or java pages

function KMOConnect(value,loader) {
	try{show(loader)}catch(err){}
	var ajax = new XMLHttpRequest();
	var url=value;
	var responseData=""
	ajax.open("GET", url, false);
	
	ajax.onreadystatechange = function(){
		if (ajax.readyState==3) {
			//the document is processing the data and isnt ready for view
			responseData="connectando"
			try{show(loader)}catch(err){}
		}
		else if (ajax.readyState==0) {
			//alert("Connection not initialised")
			responseData="connection not started"
			
		}
		else if (ajax.readyState==1) {
			responseData="url error"
			try{show(loader)}catch(err){}
		}
		else if (ajax.readyState==2) {
			responseData="no connection data"
			try{show(loader)}catch(err){}
		}
		else if (ajax.readyState==4) {
			//creating post has been successfull
			if (ajax.status!=200) {
				responseData="no headers"
				try{show(loader)}catch(err){}
				}
			else{
				var data=ajax.responseText
				responseData=data
				try{show(loader)}catch(err){}
			}
		}

	};
	
	ajax.send(null)
	return responseData
}

function connect(link,loader){
var respond=""
try{
//script originality from kmoscript
respond=KMOConnect(link,loader)
try{hide(loader)}catch(err){}
}
catch(err){
respond="Bad Connection : "+err
try{hide(loader)}catch(err){}
}
return respond
}


function create(otype){
var obj=document.create(otype)
return obj
}








