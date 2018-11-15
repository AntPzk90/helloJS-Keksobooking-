mapPinButton.addEventListener("mousedown",function(eDwn){
	eDwn.preventDefault();
	map.classList.remove("map--faded");
	notiseForm.classList.remove("notice__form--disabled");
	mapPinButton.setAttribute("draggable","true");
	removeFildsetDisabled();
	if(!isResizeble) {
 	createAllMapPins(objArr);
	isResizeble = true;
	}
	startCords = {
		x: eDwn.clientX,
		y: eDwn.clientY
	};
			var onMouseMove = function(eMove){
			eMove.preventDefault();
			var shift = {
				x: startCords.x - eMove.clientX,
				y: startCords.y - eMove.clientY
			};
			startCords = {
				x: eMove.clientX,
				y: eMove.clientY
			};
			mapPinButton.style.top = (mapPinButton.offsetTop - shift.y) +"px";
			mapPinButton.style.left = (mapPinButton.offsetLeft - shift.x) +"px";
			var addressInp = notiseForm.querySelector("#address");
			addressInp.value = mapPinButton.style.top + ", " +mapPinButton.style.left;
			};
			window.onMouseUp = function(e){
			e.preventDefault();
			createdCardInMap();
			mapPinsOverlay.removeEventListener("mousemove", onMouseMove);
			mapPinsOverlay.removeEventListener("mouseup", onMouseUp);
			};
			var mapPinsOverlay = document.querySelector(".map__pinsoverlay");
			mapPinsOverlay.addEventListener("mousemove", onMouseMove);
			mapPinButton.addEventListener("mouseup", onMouseUp);
});