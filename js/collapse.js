function collapseSetup(){
	var coll = document.getElementsByClassName("aboutCollapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
		console.log('ahahaha');
	  	coll[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var content = this.nextElementSibling;
	    if (content.style.maxHeight){
	      content.style.maxHeight = null;
	    } else {
	      content.style.maxHeight = content.scrollHeight + "px";
	    }	
	  });
	}
}

