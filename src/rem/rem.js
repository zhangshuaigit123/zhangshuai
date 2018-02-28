/*手机自适应设置*/
window.onload=window.onresize=window.onscroll=function(){	
	fontSize();
	pageShow();
};

function pageShow(){
	var oBox = document.getElementsByTagName('body')[0];
	oBox.style.visibility = 'visible';
	
}

function fontSize(){
	document.documentElement.style.fontSize = 100*(document.documentElement.clientWidth/375)+'px';
}