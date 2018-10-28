		onload=function begin(){
			var f=document.getElementById("forward");
				f.onclick=start;
					console.log("ready");
			var b=document.getElementById("back");
				b.onclick=end;
					console.log("steady");
				document.getElementById("displayPlayer").onclick=playVideo;
					console.log("action");
				document.getElementById("cv").onclick=loadCV;
					console.log("form-is-ready");
				document.getElementById("cancelCV").onclick=cancelCV;
				document.getElementById("location-company").onclick=init_map;
				document.getElementById("closeMap").onclick=closeMap;
			
		};
		///--------------TESTIMONIALS------------------------------------///
		function start(){
			var PicArray=document.getElementsByClassName("slider-img");
				for(i=0; i<PicArray.length; i++){
					var PicSrc=PicArray[i].getAttribute("src");
					var PicNum=PicSrc.charAt(4,0);
						newPicNum=PicNum-(-1);
							if(newPicNum==PicArray.length+1){
								newPicNum=1;
							};
					var newSrcPic=PicSrc.slice(0,4)+newPicNum+PicSrc.slice(-4);
					PicArray[i].setAttribute("src",newSrcPic);
					
				};	
				var residentsNameBase=document.getElementsByClassName("rezidents-name");
				var residentsPositionBase=document.getElementsByClassName("rezidents-position");
				var s=PicNum;
						if(s==5){s=0};
					document.getElementById("rezidentsName").innerHTML=(residentsNameBase[s].innerHTML);
					document.getElementById("rezidentsPosition").innerHTML=(residentsPositionBase[s].innerHTML);
		};
		function end(){
			var PicArray=document.getElementsByClassName("slider-img");
			for(i=0;i<PicArray.length;i++){
			var PicSrc=PicArray[i].getAttribute("src");
					var PicNum=PicSrc.charAt(4,0);
						newPicNum=PicNum-1;
							if(newPicNum==0){
								newPicNum=PicArray.length;
							};
					var newSrcPic=PicSrc.slice(0,4)+newPicNum+PicSrc.slice(-4);
					PicArray[i].setAttribute("src",newSrcPic);	
			};
			var residentsNameBase=document.getElementsByClassName("rezidents-name");
			var residentsPositionBase=document.getElementsByClassName("rezidents-position");
			var s=PicNum-2;
					if(s==-1){s=4};
				document.getElementById("rezidentsName").innerHTML=(residentsNameBase[s].innerHTML);
				document.getElementById("rezidentsPosition").innerHTML=(residentsPositionBase[s].innerHTML);
		};
		///------------------------------VIDEO------------------------------------///
		function playVideo(){
			document.getElementById("displayPlayer").style.display = "none";
			document.getElementById("player-watch").style.display = "block";
		};
		function loadCV(){
			document.getElementById("cvForm").style.display = "block";
		};
		function cancelCV(){
			document.getElementById("cvForm").style.display = "none";
		};
		///--------------------------GOOGLE MAP -------------------------------------///
		function init_map()
		{document.getElementById("googleMap").style.display = "block";
		};
		function closeMap(){
			document.getElementById("googleMap").style.display = "none";
		};