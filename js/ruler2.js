var canvas;
var ctx;
var images;
var smallInput;
var largeInput;
var indicesList;
var currentStep;
var output;
var timeout;


var referenceTable = [{'Name': 'index', 'Data':[0, 0, 1, 0, 1, 2, 0, 1, 2, 3, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 8]},
					{'Name': 0, 'Data':['0:0', '0:0', '1:-1', '0:0', '1:-1', '2:-2', '0:0', '1:-1', '2:-2', '3:-3', '0:0', '1:-1', '2:-2', '3:-3', '4:-4', '0:0', '1:-1', '2:-2', '3:-3', '4:-4', '5:-5', '0:0', '1:-1', '2:-2', '3:-3', '4:-4', '5:-5', '6:-6', '0:0', '1:-1', '2:-2', '3:-3', '4:-4', '5:-5', '6:-6', '7:-7', '0:0', '1:-1', '2:-2', '3:-3', '4:-4', '5:-5', '6:-6', '7:-7', '8:-8']},
					{'Name': 1, 'Data':['1:0','2:0','3:-1','3:0','4:-1','5:-2','4:0','5:-1','6:-2','7:-3','5:0','6:-1','7:-2','8:-3','9:-4','6:0','7:-1','8:-2','9:-3','0:-3','1:-4','7:0','8:-1','9:-2','0:-2','1:-3','2:-4','3:-5','8:0','9:-1','0:-1','1:-2','2:-3','3:-4','4:-5','5:-6','9:0','0:0','1:-1','2:-2','3:-3','4:-4','5:-5','6:-6','7:-7']},
					{'Name': 2, 'Data':['2:0','4:0','5:-1','6:0','7:-1','8:-2','8:0','9:-1','0:-1','1:-2','0:1','1:0','2:-1','3:-2','4:-3','2:1','3:0','4:-1','5:-2','6:-3','7:-4','4:1','5:0','6:-1','7:-2','8:-3','9:-4','0:-4','6:1','7:0','8:-1','9:-2','0:-2','1:-3','2:-4','3:-5','8:1','9:0','0:0','1:-1','2:-2','3:-3','4:-4','5:-5','6:-6']},
					{'Name': 3, 'Data':['3:0','6:0','7:-1','9:0','0:0','1:-1','2:1','3:0','4:-1','5:-2','5:1','6:0','7:-1','8:-2','9:-3','8:1','9:0','0:0','1:-1','2:-2','3:-3','1:2','2:1','3:0','4:-1','5:-2','6:-3','7:-4','4:2','5:1','6:0','7:-1','8:-2','9:-3','0:-3','1:-4','7:2','8:1','9:0','0:0','1:-1','2:-2','3:-3','4:-4','5:-5']},
					{'Name': 4, 'Data':['4:0','8:0','9:-1','2:1','3:0','4:-1','6:1','7:0','8:-1','9:-2','0:2','1:1','2:0','3:-1','4:-2','4:2','5:1','6:0','7:-1','8:-2','9:-3','8:2','9:1','0:1','1:0','2:-1','3:-2','4:-3','2:3','3:2','4:1','5:0','6:-1','7:-2','8:-3','9:-4','6:3','7:2','8:1','9:0','0:0','1:-1','2:-2','3:-3','4:-4']},
					{'Name': 5, 'Data':['5:0','0:1','1:0','5:1','6:0','7:-1','0:2','1:1','2:0','3:-1','5:2','6:1','7:0','8:-1','9:-2','0:3','1:2','2:1','3:0','4:-1','5:-2','5:3','6:2','7:1','8:0','9:-1','0:-1','1:-2','0:4','1:3','2:2','3:1','4:0','5:-1','6:-2','7:-3','5:4','6:3','7:2','8:1','9:0','0:0','1:-1','2:-2','3:-3']},
					{'Name': 6, 'Data':['6:0','2:1','3:0','8:1','9:0','0:0','4:2','5:1','6:0','7:-1','0:3','1:2','2:1','3:0','4:-1','6:3','7:2','8:1','9:0','0:0','1:-1','2:4','3:3','4:2','5:1','6:0','7:-1','8:-2','8:4','9:3','0:3','1:2','2:1','3:0','4:-1','5:-2','4:5','5:4','6:3','7:2','8:1','9:0','0:0','1:-1','2:-2']},
					{'Name': 7, 'Data':['7:0','4:1','5:0','1:2','2:1','3:0','8:2','9:1','0:1','1:0','5:3','6:2','7:1','8:0','9:-1','2:4','3:3','4:2','5:1','6:0','7:-1','9:4','0:4','1:3','2:2','3:1','4:0','5:-1','6:5','7:4','8:3','9:2','0:2','1:1','2:0','3:-1','3:6','4:5','5:4','6:3','7:2','8:1','9:0','0:0','1:-1']},
					{'Name': 8, 'Data':['8:0','6:1','7:0','4:2','5:1','6:0','2:3','3:2','4:1','5:0','0:4','1:3','2:2','3:1','4:0','8:4','9:3','0:3','1:2','2:1','3:0','6:5','7:4','8:3','9:2','0:2','1:1','2:0','4:6','5:5','6:4','7:3','8:2','9:1','0:1','1:0','2:7','3:6','4:5','5:4','6:3','7:2','8:1','9:0','0:0']},
					{'Name': 9, 'Data':['9:0','8:1','9:0','7:2','8:1','9:0','6:3','7:2','8:1','9:0','5:4','6:3','7:2','8:1','9:0','4:5','5:4','6:3','7:2','8:1','9:0','3:6','4:5','5:4','6:3','7:2','8:1','9:0','2:7','3:6','4:5','5:4','6:3','7:2','8:1','9:0','1:8','2:7','3:6','4:5','5:4','6:3','7:2','8:1','9:0']}
					];


function setup(){
	canvas = document.getElementById("Genaille–Lucas");

	ctx = canvas.getContext("2d");

	output = document.getElementById("outputField");
	
	smallInput = document.getElementById('smallNumber').value;

	largeInput = document.getElementById('numberEntry').value;

	solveIndices(largeInput, smallInput);

	//console.log('Setup Complete');

	currentStep = undefined;
}

function solveAll(){
	setup();
	killTimer();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	buildIndex(indicesList[indicesList.length-1]);


	for(let i = 0; i < largeInput.length; i++)
	{
		xpos = 100+i*100;
		activeIndicie = indicesList[indicesList.length-(i+2)]
		buildRuler(xpos, largeInput[i], activeIndicie);
	}

	let solution = String(Number(smallInput) * Number(largeInput));

	

	for(let i = solution.length; i < largeInput.length+1; i++)
	{
		solution = '0'+solution;
	}
	output.innerHTML = solution;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function slowSolveAll(){
	setup();
	stepSolve();

	killTimer();

	var i = 1;                  
	var stepLength = largeInput.length+1;

	function stepLoop() {         
  		timeout = setTimeout(function() {   
    		stepSolve();   
    		i++;                   
    		if (i < stepLength) {           
      			stepLoop();            
    		}                      
  		}, 500)
	}

	stepLoop();    
	
}



function killTimer(){
	if(typeof timeout !=='undefined'){
		clearTimeout(timeout);
		timeout = 'undefined';
	}
}

function stepSolve(){
	killTimer();
	if(typeof currentStep === "undefined")
	{
    	setup();
    	currentStep =  largeInput.length-1;
	}

	if(!isStepSolved())
	{
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		buildIndex(-1);

		for(let i = 0; i < currentStep; i++)
		{
			xpos = 100+i*100;
			buildRuler(xpos, largeInput[i], -1);
		}

		for(let i = currentStep; i < largeInput.length; i++)
		{
			xpos = 100+i*100;
			activeIndicie = indicesList[indicesList.length-(i+2)]
			buildRuler(xpos, largeInput[i], activeIndicie);
		}
		highlightSolution();

		currentStep -= 1;
	}

	else if (currentStep == -1)
	{
		buildIndex(indicesList[indicesList.length-1]);
		highlightSolution();
		currentStep = undefined;
	}

	else
	{
		currentStep = undefined;

	}

	function isStepSolved(){
		if (currentStep < 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}		
}


function highlightSolution(){
	let solution = String(Number(smallInput) * Number(largeInput));

	for(let i = solution.length; i < largeInput.length+1; i++)
	{
		solution = '0'+solution;
	}
	peiceA = solution.slice(0, currentStep+1);
	peiceB = solution.slice(currentStep+1, currentStep+2);
	peiceC = solution.slice(currentStep+2);
	output.innerHTML = peiceA + '<cur>' + peiceB + '</cur>' + peiceC;
}


function solveIndices(largeInput, smallInput){
	let currentRuler = largeInput[largeInput.length-1];
	let currentIndex = [0,0,1,3,6,10,15,21,28,36][smallInput];
	//let indicesRulerPairs = [{'ruler': currentRuler, 'index': currentIndex}];
	indicesList = [currentIndex];
	
	for(let i = 1; i < largeInput.length+1; i++)
	{
		data = referenceTable[Number(currentRuler)+1]['Data'];
		relevantData = data[currentIndex].split(':');
		//console.log(relevantData);
		currentIndex = currentIndex + Number(relevantData[1]);
		currentRuler = largeInput[largeInput.length-(i+1)];
		//indicesRulerPairs[i] = {'ruler': currentRuler, 'index': currentIndex}
		indicesList[i] = currentIndex;
		
	}
}



function buildOutline(xpos, rulerType){
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.font = "18px Verdana";
	ctx.fillText(rulerType, xpos+47, 16); 
	ctx.rect(xpos, 0, 100, 20);
	ctx.rect(xpos, 20, 100, 675);
	ctx.rect(xpos+85, 20, 15, 675);
	ctx.stroke();

	let previousY = 20;

	for(let i = 1; i < 10; i++){
		ctx.beginPath();
		ctx.strokeStyle = "grey";
		ctx.lineWidth = 1;

		currentY = previousY + (i*15);
		previousY = currentY;

		ctx.moveTo(xpos, currentY);
		ctx.lineTo(xpos+100, currentY);
		ctx.stroke();
	}	
	
}

function buildIndex(activeIndex){
	let xpos = 0
	buildOutline(xpos, 'Index');

	let data = referenceTable[0]['Data'];

	for(let i = 0; i < 45; i++)
	{
		let value = data[i];
		//Build Rect
		ctx.beginPath();
		if(activeIndex == i)
		{
			ctx.fillStyle = "#facd5f";
			ctx.fillRect(xpos+85, 20+(i*15), 15, 15);
		}
		else
		{
			ctx.strokeStyle = "black";
			ctx.rect(xpos+85, 20+(i*15), 15, 15);
		}
		
		
		ctx.stroke();

		//Build text
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.font = "11px Verdana";
		ypos = 32+(i*15)
		ctx.fillText(value, xpos+89, ypos);
		ctx.stroke();
	}

	let previousY = 20;

	for(let i = 1; i < 10; i++){
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;

		currentY = previousY + (i*15);
		previousY = currentY;

		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.font = "18px Verdana";
		ctx.fillText(i, xpos+47, currentY); 
		ctx.stroke();
	}	

}

function buildRuler(xpos, rulerType, activeIndex){
	buildOutline(xpos, rulerType);

	let data = referenceTable[Number(rulerType)+1]['Data'];

	for(let i = 0; i < 45; i++)
	{
		let splitVal = data[i].split(':');
		let value = splitVal[0];
		let relativeIndex = splitVal[1];

		if(i == activeIndex)
		{
			//Build Rect
			ctx.beginPath();
			ctx.fillStyle = "#facd5f";
			ctx.fillRect(xpos+85, 20+(i*15), 15, 15);
			ctx.stroke();

			//Build text
			ctx.beginPath();
			ctx.fillStyle = "black";
			ctx.font = "11px Verdana";
			ypos = 32+(i*15)
			ctx.fillText(value, xpos+89, ypos);
			ctx.stroke();
			
			//Build line
			ctx.beginPath();
			ctx.strokeStyle = "red";
			ctx.moveTo(xpos+85, 27+(i*15));
			ctx.lineTo(xpos, ypos-5+(relativeIndex*15));
			ctx.lineWidth = 5;
			ctx.stroke();


			ctx.beginPath();
			ctx.strokeStyle = "black";
			ctx.lineWidth = 1;
			ctx.moveTo(xpos+85, 27+(i*15));
			ctx.lineTo(xpos, ypos-5+(relativeIndex*15));
			ctx.stroke();
	
		}
		else
		{
			
			ctx.beginPath();
			ctx.rect(xpos+85, 20+(i*15), 15, 15);
			ctx.font = "11px Verdana";
			ypos = 32+(i*15)
			ctx.fillText(value, xpos+89, ypos);

			ctx.strokeStyle = "black";
			ctx.moveTo(xpos+85, 27+(i*15));
			ctx.lineTo(xpos, ypos-5+(relativeIndex*15));
			ctx.stroke();
		}
		
	}

	ctx.stroke();
}