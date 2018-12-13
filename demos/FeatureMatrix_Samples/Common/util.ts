(function() { 
window.onerror=function(msg){
		let div : HTMLElement  = document.createElement('div') as HTMLElement;
		div.className ='e-errorfinder';
		div.style.display='none'
		div.innerHTML = msg;
       document.getElementsByTagName('body')[0].appendChild(div);
    }})(); 