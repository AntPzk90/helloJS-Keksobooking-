var map = document.querySelector(".map");
(function(){
var fildsetDisabled = function(){
	var fieldset = document.querySelectorAll("fieldset");
	for(var i = 0; i < fieldset.length; i++){
		fieldset[i].setAttribute("disabled", "disabled");
	}
	return fieldset;
}
window.removeFildsetDisabled = function(){
	var fieldset = document.querySelectorAll("fieldset");
	for(var i = 0; i < fieldset.length; i++){
		fieldset[i].removeAttribute("disabled");
	}
	return fieldset;
}
fildsetDisabled();
}());
(function(){
// событие клика по метке. С помощьюнего мы отрисовываем метки на карте
	window.notiseForm = document.querySelector(".notice__form");
	window.mapPinButton = document.querySelector(".map__pin--main");
	var newMapPin =  document.querySelector("#similar-map-template")// создание случайных меток на странице
	.content.querySelector(".map__pin");
	window.isResizeble = false;
	window.createAllMapPins = function(adList){//создание меток на карте
		window.renredObj = function(){
			newMapPin.style.left = adList[i].location.x +"px";
			newMapPin.style.top = adList[i].location.y - 40 + "px";
			var newElement = newMapPin.cloneNode(true);
			var img = newElement.querySelector("img");
			img.removeAttribute("src");
			img.setAttribute("src", adList[i].author.avatar);
			newMapPin.setAttribute("alt", adList[i].offer.title);
			newMapPin.setAttribute("title", adList[i].offer.title);
			return newElement
		};//renderObj
	var fragment = document.createDocumentFragment();// вставляем метки на страницу.
	for(var i = 0; i < adList.length; i++){
		fragment.appendChild(renredObj(objArr))
	}
	map.appendChild(fragment);
};//createAllMapPins
// создание карточки
window.createdCardInMap = function(){// клонирование краточки
	(function(){
	var card = document.querySelector("#similar-map-template")
	.content.querySelector(".map__card");
	window.newCard = card.cloneNode(true);
	// функция для отрисовки карточки
window.renderCard = function(cardObj,i){// переменные для работы с карточкой	
	var cardAva = newCard.querySelector(".popup__avatar"),
		cardTitle = newCard.querySelector("h3"),
		cardAdress = newCard.querySelector("small"),
		cardPrice = newCard.querySelector(".popup__price"),
		cardFeaturesList = newCard.querySelector(".popup__features"),
		cardType = newCard.querySelector("h4"),
		cardCapacity = newCard.querySelector(".popup__text--capacity"),
		cardTime = newCard.querySelector(".popup__text--time"),
		cardDescr = newCard.querySelector(".popup__description"),
		cardFotos = newCard.querySelector(".popup__pictures");
	cardAva.removeAttribute("src");// отрисока аватарки	
	cardAva.setAttribute("src", cardObj[i].author.avatar);
// отрисовка текстовой информации
	cardTitle.textContent = cardObj[i].offer.title;
	// название
	cardAdress.textContent = cardObj[i].location.x + ", " + cardObj[i].location.y;// адрес
	cardPrice.textContent = cardObj[i].offer.price + " &#x20bd;" + " /ночь";// цена за ночь
	var typeOfHouseFnc = function(){// Тип жилья
	if(cardObj[i].offer.type === "flat"){
		 var typetrans = "Квартира";
	}else if(cardObj[i].offer.type === "house"){
		var typetrans = "Дом";
	}else if(cardObj[i].offer.type === "bungalo"){
		var typetrans = "Сарай";
	}
	return typetrans
	}
	cardType.textContent = typeOfHouseFnc();
	cardCapacity.textContent = cardObj[i].offer.rooms + " комнаты для "
	 + cardObj[i].offer.guests + " гостей";// количество комнат
	cardTime.textContent = "Заезд после " + cardObj[i].offer.checkin +
	 ", выезд до " + cardObj[i].offer.checkin;// время заезда и выезда
	var thisCardFeaturesArr = cardObj[i].offer.features;// отрисовка карточек  с удобствами
		cardFeaturesLi = cardFeaturesList.querySelectorAll(".feature"),
		featuresLiWifi = cardFeaturesList.querySelector(".feature--wifi"),
		featuresLiDishwasher = cardFeaturesList.querySelector(".feature--dishwasher"),
		featuresLiParking = cardFeaturesList.querySelector(".feature--parking"),
		featuresLiWasher = cardFeaturesList.querySelector(".feature--washer"),
		featuresLiElevator = cardFeaturesList.querySelector(".feature--elevator"),
		featuresLiConditioner = cardFeaturesList.querySelector(".feature--conditioner");
	for(var i = 0; i < cardFeaturesLi.length;i++){
		cardFeaturesLi[i].style.display = 'none';
	}
	for(var i = 0; i < thisCardFeaturesArr.length; i++){
		if(thisCardFeaturesArr[i] === "wifi"){
			featuresLiWifi.style.display = "inline-block"
		}else if(thisCardFeaturesArr[i] === "dishwasher"){
			featuresLiDishwasher.style.display = "inline-block"
		}else if(thisCardFeaturesArr[i] === "parking"){
			featuresLiParking.style.display = "inline-block"
		}else if(thisCardFeaturesArr[i] === "washer"){
			featuresLiWasher.style.display = "inline-block"
		}else if(thisCardFeaturesArr[i] === "elevator"){
			featuresLiElevator.style.display = "inline-block"
		} else if(thisCardFeaturesArr[i] === "conditioner"){
			featuresLiConditioner.style.display = "inline-block"
		}
	}
	//cardDescr.textContent = cardObj[i].offer.descr;// отрисовка описания	
	return newCard
};//renderedcard
cardFotos = newCard.querySelector(".popup__pictures");// создание и отрисовка Li для фотографий	
var newLI = function(){
		var createLi = document.createElement("li");
		createLi.innerHTML = "<img src = "+ objArr[0].offer.photos[i] +
		" style='width: 40px; height:40px; margin-right: 5px;'></img>";
		return createLi;
		};
		for(var i = 0;i < objArr[0].offer.photos.length;i++){
			cardFotos.appendChild(newLI());
		}
window.createCard  = function (newCardObj){ // вставляем карточкуна страницу
	window.mapFilters = document.querySelector(".map__filters-container");
	var fragment1 = document.createDocumentFragment();
	fragment1.appendChild(newCardObj);
	map.insertBefore(fragment1,mapFilters);
	};
})();
var allMapPins = document.querySelectorAll(".map__pin");
var createAttr = function(){
	for(var i = 0; i < allMapPins.length;i++){
	allMapPins[i].setAttribute("data-index", i-1)
	}
};
createAttr();
window.go = function(arrGo){
window.buttons = document.querySelectorAll(".map__pin:not(.map__pin--main)");
	for(var i = 0; i < buttons.length; i++){
		(function(button){
			button.addEventListener("click",function(evt){
				if(evt.target = "button"){
					butIndex = button.getAttribute("data-index");
				}
				createCard(renderCard(arrGo,butIndex));
				var btnClose = newCard.querySelector(".popup__close"); 
				btnClose.addEventListener("click",function(){
				newCard.remove();
				});
			});
		})(buttons[i]);
	};
};
go(objArr);
};// конец фции
})();