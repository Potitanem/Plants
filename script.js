/*Start burger task*/ 

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".navigation");
let body = document.querySelector("body");

hamburger.addEventListener("click", event =>{
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	body.classList.toggle("lock");
	event.stopPropagation();
})

document.addEventListener("click", event =>{
	if(!navMenu.contains(event.target)){
		navMenu.classList.remove("active");
		hamburger.classList.remove("active");
		body.classList.remove("lock");
	}
})

document.querySelectorAll(".nav-link").forEach(element => 
	element.addEventListener("click", ()=>{
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
		body.classList.remove("lock");
	})
);

/*End burger task*/

/*Blur on cards*/

/* const serviceButtons = document.querySelectorAll(".service-buttons button");
const cards = document.querySelectorAll(".service-item"); */
const cardsGarden = document.querySelectorAll(".garden");
const cardsLawn = document.querySelectorAll(".lawn");
const cardsPlanting = document.querySelectorAll(".planting");
const buttonGarden = document.querySelector(".Gardens");
const buttonLawn = document.querySelector(".Lawn");
const buttonPlanting = document.querySelector(".Planting");

let count = 0;
buttonGarden.addEventListener('click', activeButton);
buttonLawn.addEventListener('click', activeButton);
buttonPlanting.addEventListener('click', activeButton);

function activeButton(){
	this.classList.toggle("active-button");
	count = [...document.querySelectorAll(".active-button")].length;
	return count;
}

buttonGarden.addEventListener('click', toBlur);
buttonLawn.addEventListener('click', toBlur);
buttonPlanting.addEventListener('click', toBlur);
buttonGarden.addEventListener('mouseover', addHover);
buttonLawn.addEventListener('mouseover', addHover);
buttonPlanting.addEventListener('mouseover', addHover);

function addHover(){
	this.classList.add("hover");
}

function toBlur(){
	if(count > 0){
		cardsGarden.forEach((card)=>{
			card.classList.add("blur");
		})
		cardsLawn.forEach((card)=>{
			card.classList.add("blur");
		})
		cardsPlanting.forEach((card)=>{
			card.classList.add("blur");
		})
	}
	else if(count == 0){
		cardsGarden.forEach((card)=>{
			card.classList.remove("blur");
		})
		cardsLawn.forEach((card)=>{
			card.classList.remove("blur");
		})
		cardsPlanting.forEach((card)=>{
			card.classList.remove("blur");
		})
	}
	buttonGarden.classList.remove("hover");
	cardsGarden.forEach((card)=>{
		buttonGarden.disabled = false;
		if((count == 1 || count == 2) && buttonGarden.classList.contains("active-button")){
			card.classList.remove("blur");
		}
		else if(count == 2 && !buttonGarden.classList.contains("active-button")){
			buttonGarden.disabled = true;
		}
	})
	buttonLawn.classList.remove("hover");
	cardsLawn.forEach((card)=>{
		buttonLawn.disabled = false;
		if((count == 1 || count == 2) && buttonLawn.classList.contains("active-button")){
			card.classList.remove("blur");
		}
		else if(count == 2 && !buttonLawn.classList.contains("active-button")){
			buttonLawn.disabled = true;
		}
	})
	buttonPlanting.classList.remove("hover");
	cardsPlanting.forEach((card)=>{
		buttonPlanting.disabled = false;
		if((count == 1 || count == 2) && buttonPlanting.classList.contains("active-button")){
			card.classList.remove("blur");
		}
		else if(count == 2 && !buttonPlanting.classList.contains("active-button")){
			buttonPlanting.disabled = true;
		}
	})
}
/*End blur*/


/*Accordion*/


const accordion = document.querySelectorAll(".accordion-item");

accordion.forEach((item, index)=>{
	const arrow = item.querySelector(".dropdown");
	arrow.addEventListener("click", ()=>{
		item.classList.toggle("open");
		const info = item.querySelector(".accordion-info"); 
		if(item.classList.contains("open")){
			info.style.maxHeight = info.scrollHeight + 'px';
		} else{
			info.style.maxHeight = 0;
		}
		collapseInfo(index);
	})
})

function collapseInfo(index){
	accordion.forEach((itemNotOpen, indexNotOpen)=>{
		if(index != indexNotOpen){
			itemNotOpen.classList.remove("open");
			const infoOff = itemNotOpen.querySelector(".accordion-info");
			infoOff.style.maxHeight = 0;
		}
	})
}