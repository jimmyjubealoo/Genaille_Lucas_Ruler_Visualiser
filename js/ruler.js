var canvas;
var ctx;
var images;

function drawCards(cardOrder){
	canvas = document.getElementById("Genaille–Lucas");
	ctx = canvas.getContext("2d");
	images = [];

	xoffest = 87;
	cardCount = 0;

	function addCard(cardType){
		images[cardCount] = new Image();
		switch(cardType)
		{
			case 'index':
				images[cardCount].src = "images/indexcard.png";
				break;

			case 'zero':
				images[cardCount].src = "images/zerocard.png";
				break;

			case 'four':
				images[cardCount].src = "images/fourcard.png";
				break;
		}
	}

	addCard('index');
	cardCount += 1;

	for(let i = 0; i < cardOrder.length; i++)
	{
		addCard(cardOrder[i]);
		cardCount += 1;
	}
	
}

function cardboosted(){
	var testCard = ['zero', 'four', 'four', 'four', 'four', 'four'];
	var testorder = 044444;
	var testinout = 5;
	drawCards(testCard);
	loadImages();
	drawRectangle();
}

function loadImages(){
	for(let i = 0; i < images.length; i++)
	{
		ctx.drawImage(images[i], xoffest*i, 0);
	}
}

function drawRectangle(){
	let yoffset = 22;

	for(let i = 0; i < 45; i++){
		ctx.beginPath();
		ctx.rect(407, 43+i*yoffset, 13, 15);
		ctx.stroke();
	}
	
}