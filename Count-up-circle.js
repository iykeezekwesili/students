var CountUp = function(temp){
	this.start = function(){
		window.addEventListener("scroll", statCounter)
	}
	
	statCounter = function(){
		var stage = document.getElementsByClassName(temp)[0]
		var elems = document.querySelectorAll("." + temp + " div")
		
		var elemPos = stage.offsetTop + stage.clientHeight
		var scrolltop = window.pageYOffset + window.innerHeight
		
		if(scrolltop >= elemPos-(stage.clientHeight/2)){
			elems.forEach(function(el, i){
				setTimeout(function(){
					count(el.getAttribute("data-stat"), el)
				}, 10)
			})
			
			this.removeEventListener("scroll", this.statCounter)
		}
	}
	
	count = function(x, el){
		(count.i === undefined) ? count.i=1 : count.i++
		
		if (count.i > x){
			var desc = document.createElement("span")
			var text = el.getAttribute("data-desc")
			desc.className = "statDesc"
			desc.textContent = text
			el.insertAdjacentElement("beforeend", desc)
			el.parentNode.classList.add("yellow-border")
			return
		}
		
		el.textContent = count.i
		
		setTimeout(function(){
			count(x, el)
		}, 30)
	}
}



/*********** HTYML template for this pugin

<div class="temp"><div data-stat="156" data-desc="Agboju">0</div></div>
		<div class="temp"><div data-stat="138" data-desc="Barracks">0</div></div>
		<div class="temp"><div data-stat="182" data-desc="Ijaniki">0</div></div>
		<div class="temp"><div data-stat="92" data-desc="FESTAC">0</div></div>

**********/