//Lucy Southall K1065379 - Sudoku 12-05-13 - Module C03060B - Sudoku Game for all

// JavaScript Document
//var level= "";
//debugging use the 			window.alert(easy);


//============================ASSIGNMENT OF GLOBAL VARIABLES===========================
		var easy = '400537091900100200850000004509080003700020405040000700108409000020050060000003000';
		var easyS='462537891937148256851692374519784623783926415246315789178469532324851967695273148';
		var med = '240057360000008009378000200060041702080000005000005010130000000050003026000812000';
		var medS= '249157368516238479378496251965341782481729635723685914132564897854973126697812543';	
		var dif = '500127008000000020039000000040070600006000002800030009005700000000400580170090300';	
		var difS= '564127938718359426239684715941278653356941872827536149485763291693412587172895364';

		var level= 'med'; //set level
		var solution= '1';//solution variable




//========================================VALIDATION OF CELLS ==========================

function validCell(val) {//input value is passed through from board
  if (val.value==='0') {
   	val.value='';
  }
  if (isNaN(val.value)===true || val.value<0 || val.value>9) {//checks if it is not a number isNAN, then chks if less than 1 or greater than 9 
    alert('INVALID INPUT \nPlease choose a number between 1-9\nYou entered: '+ val.value);//alert the user of invalid entry and their entered value
    val.value='';//sets value to blank
  }	
}

		
		
		
//=====================================SETTING OF GAME BOARD --------------------------
function levels(chosen){
	//select different levels	
				if(chosen=='1'){
		 		level = easy;//array pull from global variable
				 document.getElementById("selected").innerHTML="You are playing an Easy level game, Good Luck";//displays level chosen on board
				 document.getElementById("board").value="1";//sets game level on the board as a hidden value to reference
				 }
		
				if(chosen=='2'){
				level = med;
				document.getElementById("selected").innerHTML="You are playing an Medium level game, Good Luck";
				document.getElementById("board").value="2";
								}
				
				if(chosen=='3'){
				level = dif;
				document.getElementById("selected").innerHTML="You are playing a Difficult level game, Good Luck";
				document.getElementById("board").value="3";
				}
				
//setting up of the game board, runs for the length of the array of the game		
			    for (i=0; i<level.length; i++)
   								
				 {
//getting the table cell elements by the table cell id then incrementing value by 1 to run through loop 	
					var x=document.getElementById("cell"+i);
					var game=level[i];

						if (game == "0") {//sets the value 0 to an empty cell
						 	x.removeAttribute("readonly",0);//ensures all the cells are set to be writable (http://www.roseindia.net/javascript/javascript-removeattribute-method.shtml)
							x.value = "";//sets empty cell
						} else {//if not 0 then the value is inserted
							x.value= game;
							x.style.color="#000000";//colour is set to be different from input style
							x.style.fontWeight="bold";//weight is changed to be different from input style
							setReadOnly(x);  //using the readonly function to set the value to readonly
						}
						
				}
		}
		
		//================READONLY FUNCTION (http://mypuzzle.org/sudoku)============

function setReadOnly(element){
	// For IE
	if (window.ActiveXObject) {   
		element.setAttribute('readOnly', true);
	// Other browsers
	}else{
		element.setAttribute('readonly', true); 	
	}
}
	
	
	
//==============================SOLUTION=============================

function solutions(){
		
		var chosen=document.getElementById("board").value;//sets the level of the game by calling the board value and assigning to the chosen var

				
					if(chosen=='1'){
				 				solution=easyS;//sets the solution array for game level easy from the Global variables
					}
					if(chosen=="2"){
								solution=medS;
					}
					if(chosen=='3'){
								solution=difS;	
					}
				

			  for (i=0; i<solution.length; i++)//runs through loop for length of the array
   								
				 {
					var x=document.getElementById("cell"+i);//get the game board by cell id
					var game=solution[i];//sets the game var to the solution array value for same number as the cell value
					var board=level[i];//already set by assingment of the game through the global variable
					 
						if(game!=board) {//if the game array doesn't = the game array (solution) 
							x.value=game;//the value of the cell is set
							x.style.color="#fa0521";//it is then styled to be red to show it is a solution on main board
							setReadOnly(x); //set to read only
						} 
						 else{//if its part of the oringinal game then it is not styled 
							x.value= game;
							setReadOnly(x);  //set to readonly
						 }
						
				}
		}	
	
		
	
	
//====================================================	CHECK BOARD ====================================

	
function check(){
		
		var chosen=document.getElementById("board").value;//sets the level of the game by calling the board value and assigning to the chosen var
		var count="0";
				
					if(chosen=='1'){
								level = easy;
				 				solution=easyS;//sets the solution array for game level easy from the Global variables
					}
					if(chosen=="2"){
								level=med;
								solution=medS;
					}
					if(chosen=='3'){
								level=dif;
								solution=difS;	
					}
				

			  for (i=0; i<solution.length; i++)//runs through loop for length of the array
   								
				 {
					var x=document.getElementById("cell"+i);//get the game board by cell id
					var val=x.value;//sets the value
					var game=solution[i];//sets the game var to the solution array value for same number as the cell value
					var play=level[i];//sets the game var to the game being played array value for same number as the cell value
					
						if(game!=play){//checks whether the it is a user entry or board cell
										if(val===""){//checks if empty
											count=[i];//counts empty cells 
											}
						
										else if(game!= val) {//if the game array doesn't = the game array (solution) 
											window.alert('Sorry you have made an error by entering ' + val);//error alert
											val.style.color="#fa0521";//it is then styled to be red to show it is a solution on main board
												  {
  														return;//stops the loop
  													}
											} 

						
										}
						}	
				

			   if (count==0){//if no empty cells then the game is complete
					window.alert('Welldone you have completed the game');
					}
					else {//message correct to far
					window.alert('Well done you correct so far' );
				}
}
//================== increase font =======================


function IncreaseFont() {
 			 if (document.body.style.fontSize === "") {
 			   document.body.style.fontSize = "1.0em";
 			 }
 			 temp=document.body.style.fontSize.split("");
  			if (temp[0] < "2") {
 			   document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (0.1) + "em";
			 }
			  else {
  		  	alert("Font has reached maximun size");
 			 }
		}
//==========================decrease the font=========================
function DecreaseFont() {
 			 if (document.body.style.fontSize === "") {
    				document.body.style.fontSize = "1.0em";
  				}
 				 temp=document.body.style.fontSize.split("");
 			 if (temp[0] == "0" && temp[2] <8) {
   				 alert("Font has reached minimun size");
  				}
 			 else {
  			  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (-0.1) + "em";
 				 }
	}
	
//=============================Reset font size==================

function ResetFont() {
  document.body.style.fontSize = "1.0em";
}


//===============================================TIME DATE===========================================	

//function to display time/date in the footer source http://www.webestools.com/scripts_tutorials-code-source-7-display-date-and-time-in-javascript-real-time-clock-javascript-date-time.html

function date_time(id)
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("'+id+'");','1000');
        return true;
}// JavaScript Document

//===============================date last modified =======================

function last_mod(id){
		var date;
		date=document.lastModified;
	    document.getElementById(id).innerHTML = ("Last Modified on "+date);
	}
	
	//=====================================Black and White Theme====================================
	
	
function Mono() {
//header mono
  
  for(i=0;i<12;i++){
  		document.getElementsByTagName("a")[i].style.color = '#000000';
	  }
	  
  for(i=0;i<3;i++){
  		document.getElementsByTagName("li")[i].style.color = '#000000';
	  }	  

 for(i=0;i<12;i++){
  		document.getElementsByTagName("a")[i].style.background = 'none';
	  }	  

  document.getElementsByTagName("nav")[0].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("div")[1].style.backgroundColor = '#ffffff';
    document.getElementsByTagName("div")[2].style.backgroundImage = 'images/logo_blk.png';
  document.getElementsByTagName("p")[0].style.color = '#000000';
  document.getElementsByTagName("p")[1].style.color = '#000000';
  
  document.getElementsByTagName("body")[0].style.background = '#ffffff'; 
  
  document.getElementsByTagName("nav")[1].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("nav")[1].style.color = '#000000';

  document.getElementsByTagName("div")[97].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("div")[97].style.color = '#000000';
}

//==============================RESET BACKGROUND To COLOUR ==================
	
function Reset_colour() {

    for(i=0;i<3;i++){
  		document.getElementsByTagName("li")[i].style.color = '#000000';
	  }
	  
  for(i=0;i<12;i++){
  		document.getElementsByTagName("a")[i].style.color = '#444444';
	  }
	  
 for(i=0;i<12;i++){
  		document.getElementsByTagName("a")[i].style.background = '#C499AA'; 
		document.getElementsByTagName("a")[i].style.background = '-webkit-linear-gradient(top,  #c499aa 0%,#dedbdb 100%)';
		 document.getElementsByTagName("a")[i].style.background = '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,.2)), color-stop(100%,rgba(0,0,0,.2)))'; /* Chrome,Safari4+ */
  		document.getElementsByTagName("a")[i].style.background = '-webkit-linear-gradient(top,  #c499aa 0%,#dedbdb 100%)'; /* Chrome10+,Safari5.1+ */
  		document.getElementsByTagName("a")[i].style.background = ' -o-linear-gradient(top, #c499aa 0%,#dedbdb 100%)'; /* Opera11.10+ */
  		document.getElementsByTagName("a")[i].style.background = '-ms-linear-gradient(top,  #c499aa 0%,#dedbdb 100%)'; /* IE10+ */
	  }	  

 for(i=0;i<2;i++){
	document.getElementsByTagName("nav")[i].style.background = '#cc100d';
  document.getElementsByTagName("nav")[i].style.background = '-webkit-linear-gradient(top, #cc100d, #e6e8b7)';
  document.getElementsByTagName("nav")[i].style.background = '-webkit-gradient(linear, 0% 0%, 0% 100%, from(#cc100d), to(#e6e8b7))';  
  document.getElementsByTagName("nav")[i].style.background = '-moz-linear-gradient(top, #cc100d, #e6e8b7)';
   document.getElementsByTagName("nav")[i].style.background = ' -o-linear-gradient(top, #cc100d, #e6e8b7)';
   document.getElementsByTagName("nav")[i].style.background = '-ms-linear-gradient(top, #cc100d, #e6e8b7)'; 
 }
  
  
   document.getElementsByTagName("nav")[0].style.borderradius = '15px';
  document.getElementsByTagName("div")[1].style.background = '#cc100d';
  document.getElementsByTagName("div")[2].style.backgroundImage = "../images/logo.png";
  document.getElementsByTagName("p")[0].style.color = '#000000';
  document.getElementsByTagName("p")[1].style.color = '#000000';
  
  document.getElementsByTagName("body")[0].style.background = '#ffffff'; 
  document.getElementsByTagName("nav")[1].style.color = '#000000';
  document.getElementsByTagName("nav")[1].style.borderradius = '15px';
  document.getElementsByTagName("div")[97].style.background = '#cc100d';
  document.getElementsByTagName("div")[97].style.color = '#ffffff';
  
}

//====================================STYLE SWITCHER===============================================
//from csstricks.co.uk
//this starts the function to change the style sheet by identifying all of the link elements and looking for all the ones which are stylesheets with a title

//once identified the disabled attribute is set to true for all of the style sheets the style sheet required is set to disabled false

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}


//this gets the active stylesheet which has been set to disabled false
function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

//create a cookie to maintain the stylesheet of choice when the user opens the browser window.

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}


//onload funtion will set the cookie and selected stylesheet when the page loads
window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}


//sets the active stylesheet when the site is closed to be the prefered style sheet
window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);

				
