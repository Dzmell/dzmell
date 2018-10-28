onload=function begin(){
	
	var chartsBox=document.getElementById("chartsBox");
	var w=parseInt(getComputedStyle(chartsBox).width);
	console.log(w);
	
	var arr=[5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
	for(var i=0;i<arr.length;i++){
		x=arr[i];
		y=i;
		
		var newli=document.createElement("li");
		newli.style.height=(10*x)+"px";
		newli.style.width=((w/arr.length)-10)+"px";
		
			if(x>10){
				newli.style.backgroundColor="red";
			}
			if(x<11){
				newli.style.backgroundColor="yellow";
			}
			if(x<6){
				newli.style.backgroundColor="green";
			}
			
		chartsBox.appendChild(newli);
			
	}

}






