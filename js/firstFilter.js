(function(){
	window.newObjArr = objArr;
	var selects = document.querySelectorAll("select");
	var housingType = document.querySelector("#housing-type");
	var housingPrice = document.querySelector("#housing-price");
	var housingRooms = document.querySelector("#housing-rooms");
	var housingGuests = document.querySelector("#housing-guests");
	var getValue = function(){
		var valueType = housingType.value;
		var valuePrice = housingPrice.value;
		var valueRooms = housingRooms.value;
		var valueGuests = housingGuests.value;
		var valueArr = [valueType,valuePrice,valueRooms,valueGuests];
		return valueArr
	};

	window.powerFunc = function(){
		var valueArr = getValue();
		var type = valueArr[0];
		var price = valueArr[1];
		var rooms = valueArr[2];
		var guests = valueArr[3];

		var sortTypeArrFunc = function(){
			var sortTypeArr = [];
			if(type == "any"){
				sortTypeArr = newObjArr;
			}else{
				sortTypeArr =  newObjArr.filter(function(arrIt){
					return arrIt.offer.type == type;
				});
			}
			return sortTypeArr
		};

		var firstFilter = sortTypeArrFunc();
		
		var sortPriceArrFunc = function(){
			var sortPriceArr = [];
			if(price == "low"){
				sortPriceArr = firstFilter.filter(function(arrIt){
					return arrIt.offer.price <= 10000;
				});
			}else if(price == "middle"){
				sortPriceArr = firstFilter.filter(function(arrIt){
					return arrIt.offer.price > 10000 && arrIt.offer.price < 50000;
				});
			}else if(price == "high"){
				sortPriceArr = firstFilter.filter(function(arrIt){
					return arrIt.offer.price > 50000;
				});
			}else if(price == "any"){
				sortPriceArr = firstFilter;
			}
			return sortPriceArr
		};
		sortPriceArrFunc();

		var secondFilter = sortPriceArrFunc();
		
		var sortRoomsArrFunc = function(){
			var sortRoomsArr = [];
			if(rooms == "any"){
				sortRoomsArr = secondFilter;
			} else {
				sortRoomsArr = secondFilter.filter(function(arrIt){
					return arrIt.offer.rooms == rooms;
				});
			}
			return sortRoomsArr
		};
		sortRoomsArrFunc();
		var thirdFilter = sortRoomsArrFunc();
		
		var sortGuestsArrFunc = function(){
			var sortGuestsArr = [];
			if(guests == "any"){
				sortGuestsArr = thirdFilter;
			}else{
				sortGuestsArr = thirdFilter.filter(function(arrIt){
					return arrIt.offer.guests == guests;
				});
			}
			return sortGuestsArr
		};
		sortGuestsArrFunc();
		var foursFilter = sortGuestsArrFunc();
		
		return foursFilter
	};
	
	window.del = function(){
			for(var j = 0;j < buttons.length; j++){
				buttons[j].remove();
			}
	};

	for(var i = 0; i < selects.length; i++){
	(function(select){
		select.addEventListener("change",function(evt){
			var card = document.querySelector(".popup");
			var btnClose = newCard.querySelector(".popup__close"); 
				btnClose.addEventListener("click",function(){
				card.remove();
				});
			del();
			createAllMapPins(powerFunc());
			createdCardInMap();
			go(powerFunc());
		});
	})(selects[i]);
	};
}());
(function(){
	var mapFilters = document.querySelector(".map__filters-container");
	var checkboxArr = mapFilters.querySelectorAll( "input[type='checkbox']");
	
	var checkFilters = function(){
		var firstFilteredArr = powerFunc();
		var newCheckArr = getCheckValue();

		var filtered = function(arr,It){
			var filteredArr = [];
			for(var i = 0; i < arr.length;i++){

				for(var j = 0; j < arr[i].offer.features.length;j++){
					if(arr[i].offer.features[j] == newCheckArr[It]){
						filteredArr.push(arr[i]);
					}
				}
			}
			
			return filteredArr
		};
		var newCheckArr1 = filtered(firstFilteredArr,0);
		var newCheckArr2 = filtered(newCheckArr1,1);
		var newCheckArr3 = filtered(newCheckArr2,2);
		var newCheckArr4 = filtered(newCheckArr3,3);
		var newCheckArr5 = filtered(newCheckArr4,4);
		var newCheckArr6 = filtered(newCheckArr4,5);
		switch (newCheckArr.length) {
			case 0:
    			return firstFilteredArr
    			break;
  			case 1:
    			return newCheckArr1
    			break;
  			case 2:
    			return newCheckArr2
    			break;
  			case 3:
    			return newCheckArr3
    			break;
    		case 4:
    			return newCheckArr4
    			break;
    		case 5:
    			return newCheckArr5
    			break;
    		case 6:
    			return newCheckArr6
    			break;
  		default:
    	alert( 'Я таких значений не знаю' )
		}

		
	};
	
		for(var i = 0; i < checkboxArr.length; i++){
	(function(check){
		check.addEventListener("change",function(evt){
			var checkedArr = mapFilters.querySelectorAll( "input[type='checkbox']:checked");
			window.getCheckValue = function(){
				var ckeckValueArr = [];
				for(var i = 0; i < checkedArr.length; i++){
					var value = checkedArr[i].getAttribute("value");
					ckeckValueArr.push(value);
				}
				return ckeckValueArr
			};
		del();
		createAllMapPins(checkFilters());
		createdCardInMap();
		go(checkFilters());

		});
	})(checkboxArr[i]);
	};
}());