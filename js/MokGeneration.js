(function(){
// вспомогательная ф-ция для расчёта
function compareRand() {
  	return Math.random() - 0.5
}
// сортировка массива
function sortArrRand(arr) {
	return arr.sort(compareRand);
}
// рандомное число в диапазоне
function randInt(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
// рандомный массив в диапазоне от мин и до макс, числа не повторяются
function randIntArr(min, max){
	var randArr = [];
	for(var i = min;i < max + 1;i++){
		randArr.push(i);
	}
	return randArr.sort(compareRand)
}
// рандом для выбора удобств в номере
function randFeatyresLength (){
	var newArr = [];
	for(var i = 0; i < randInt(1,featyresInHouse.length);i++){
		newArr.push(featyresInHouse[i]);
	}
	return newArr
}
// переменные для создания объкта
var autorAvatarInt = randIntArr(1,8);
var titleArr = sortArrRand(titleVarible);
var typeArr = sortArrRand(typeOfHouse);
var checkinArr = sortArrRand(checkInTime);
var featuresArr = sortArrRand(randFeatyresLength());
var photosArr = sortArrRand(photos);
// создание рандомных объектов настранице
window.objArr = [];
	for(var i = 0;i < 8;i++){
		var myObj = {
 		"author": {
			"avatar": "img/avatars/user0" + autorAvatarInt[i] +".png"
 		},

		"offer": {
			"title": titleArr[randInt(0,titleVarible.length)],
			"address": randInt(300,650) + ", " + randInt(300,650),
			"price": priseArr[randInt(0,3)],
			"type": typeArr[randInt(0,2)],
			"rooms": randInt(1,3),
			"guests": randInt(1,2),
			"checkin": checkinArr[randInt(1,checkInTime.length)],
			"checkout": checkinArr[randInt(1,checkInTime.length)],
			"features": sortArrRand(randFeatyresLength()),
			"description": "",
			"photos": photosArr
		},
		"location": {
			"x":randInt(0,1200),
			"y":randInt(130, 630)
		}
	};
		objArr.push(myObj)
}

}());