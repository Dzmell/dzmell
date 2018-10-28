$(document).ready(function(){
	 
	 $("#formChat").submit(function(event){
		 event.preventDefault();
		 var utc=10800000;
		 var t=Date.now()+utc;
		 console.log(t);
		 var h=Math.floor((t/3600000)%24);
		 var m=Math.floor((t/60000)%60);
		 var s=Math.floor((t/1000)%60);
		 var time=h+' : '+m+' : '+s;
		 
		 var user = $("#user").val();
		 var msg = $("#message").val();
		 var newRow='<em>'+time+'</em><br/><b>'+ user+'</b>: <br/> '+msg;
		 console.log(newRow);
		 
		 $z=document.createElement("li");
		 $("#chatLi").append($z);
		 $("#chatLi :last-child").html(newRow);
	 })
	
})

