

function startgame(){
	
	var ques=['You are inside Yard , you see long grass around, decide and do something',
	'Very Good with the grass , now  there is a  broken door , decide quickly before lose the challenge',
	'BOO!! A Ghost appeared in front of you , what to do now?? ',
	'You see alot of  spiders around , hurry up !! do something ,get these creepy creatures away',
	'Your picked a table lamb but wait someone is watching you, there is a clown in room with  a  knife , what is he doing  here ?? omg  do something !!'];
	var options =[
	       [ 'grab a stick ,carefully place step', 'run quickly through the  grass',' burn the  grass with matchstick'],
		   [ 'get inside by kicking door', 'remove  pieces out of the way',' slide in through the space'],
		   [ 'Close your eyes and Stand Firmly Confident', ' Run as fast you can',' call ghostbusters'],
		   [ 'Call the best web designer of the city', 'accept defeat','walk through the webs there is nothing to fear'],
		   [ 'ask him "Is Salad Ready ?"', 'Run out of  the Mansion','Crack a Joke'],
	]
	var ans=[1,3,1,3,2];
	
	if(sessionStorage.getItem('flag')=="1")
	{
		var source = "./resources/sounds/sound.mp3"
 var audio = document.createElement("audio");
 //
 audio.autoplay = true;
 //
 audio.load()
 audio.addEventListener("load", function() { 
     audio.play(); 
 }, true);
 audio.src = source;
		
		if(parseInt(sessionStorage.getItem('count'))==5){
			
			alert('YOU COMPLETED CHALLENGE ALIVE !!');
			return
			
		}
		          var p=parseInt(sessionStorage.getItem('count'));
		
				showQues(ques[p],options[p][0],options[p][1],options[p][2]);
				sessionStorage.setItem('ans',ans[parseInt(sessionStorage.getItem('count'))]);
				
		
	
	}
	else{
				showIntro();
	}
	
	
}

function showIntro(){
	
	sessionStorage.setItem('flag',1);
	sessionStorage.setItem('count',0);
	var quesdiv = document.getElementById('quesdiv');
	var optionsdiv= document.getElementById('optionsdiv');
	
	optionsdiv.style.display="none";
	
	
	quesdiv.innerHTML="<h5>On Halloween Night while out on hunt for delicious treats, Sal and  his friends were moving door to door,suddenly his  friends decided to make it more exiciting & adventurous ,so they take out  a challenge to visit the Mr. HIEN's Mansion which was famous as  haunted place for  years. <br><br>As per Challenge each kid has to go the place  all alone and comeback with one of the belongings, Sal is a  brave and rational boy , he  is  confident and decides to accept the challenge and jumped into the mansion through the  outer wall, now you play as Sal and get out alive.  </h5>";
	
	quesdiv.style.display="block";
	
	var startbtn = document.getElementById('startbtn');
	startbtn.innerHTML="GET OUT OF THE PLACE ALIVE!!";
	startbtn.style.display="block";	
	
	
	
}


function showQues(txt,opt1,opt2,opt3){
	
	var startbtn = document.getElementById('startbtn');
	startbtn.style.display="none";	
	
	var quesdiv = document.getElementById('quesdiv');
	var optionsdiv= document.getElementById('optionsdiv');
	quesdiv.innerHTML="<h4>"+txt+"</h4>";
	
	optionsdiv.style.display="inline";
	
	var optionbtn1 = document.getElementById('option1');
	var optionbtn2 = document.getElementById('option2');
	var optionbtn3 = document.getElementById('option3');
	
	optionbtn1.innerHTML=opt1;
	optionbtn2.innerHTML=opt2;
	optionbtn3.innerHTML=opt3;
		
	
}

function showResult(m){
	
	x=-1;
	
	if(m==parseInt(sessionStorage.getItem('ans'))){
		
		x=1;
	}
	
	
	var m = parseInt(sessionStorage.getItem('count'));
	m=m+1;
	sessionStorage.setItem('count',m);
	
	if(x==1){
		
	var startbtn = document.getElementById('startbtn');
	startbtn.style.display="block";	
	startbtn.innerHTML="Move Next";
	var quesdiv = document.getElementById('quesdiv');
	var optionsdiv= document.getElementById('optionsdiv');
	quesdiv.innerHTML="<h1>You Survived ,Click To Move Further</h1>";
	
	optionsdiv.style.display="none";	
		
	}else{
			sessionStorage.setItem('flag',-1);
	var startbtn = document.getElementById('startbtn');
	startbtn.style.display="block";
    startbtn.innerHTML="restart";	
	var quesdiv = document.getElementById('quesdiv');
	var optionsdiv= document.getElementById('optionsdiv');
	
	quesdiv.innerHTML="<h1>You Got Killed !!  Click  Below Button  to Restart Adventure</h1>";
	
	optionsdiv.style.display="none";		
		
		
		
		
	}
	
	
	
	
	
}