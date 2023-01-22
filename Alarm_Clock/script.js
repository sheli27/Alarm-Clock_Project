starttime.addEventListener("click",checkStartTimer);
settime.addEventListener("click",setTimeF);
stoptime.addEventListener("click",stopTimer);
time5.addEventListener("click",timer5);
let x = 0;
let days, hour, min, sec;
let timeOut;
let checkStart = 0;

function timer5(){
	x = 60*5;
	checkStartTimer();
}

function stopTimer(){
	clearTimeout(timeOut);
	checkStart = 0;
	myaudio.currentTime = 0;
	myaudio.pause();
}

function checkStartTimer(){
	if (checkStart===0) {
		startTimer();
		checkStart = 1;
	}
}

function startTimer(){
	x--;
	timeOut = setTimeout(startTimer, 1000);
	calcTimer();

	if (x<1) {
		stopTimer();
		myaudio.play();
		//alert("Время вышло!");
		x=1;
	}
}

function setTimeF() {
	x = +xvalue.value; //вытягиваем значение х из инпута
	calcTimer();
}

function calcTimer(){
	sec = x%60;
	days = (x - (x%86400))/86400;
	hour = (((x - days*86400))/3600);
	hour = parseInt(hour);
	min = (x-days*86400-hour*3600-sec)/60;

	if (hour < 10) {hourhtml.innerHTML = "0" + hour;}else{
		hourhtml.innerHTML = hour;
	}

	if (min < 10) {minhtml.innerHTML = "0" + min;}else{
		minhtml.innerHTML = min;
	}

	if (sec < 10) {sechtml.innerHTML = "0" + sec;}else{
		sechtml.innerHTML = sec;
	}
	dayshtml.innerHTML = days;
}

/*
playa.addEventListener("click",playAudio);
function playAudio(){
	myaudio.play();
}
*/

playa.onclick = () => myaudio.play();

/*

test.onclick = function(){
	myaudio.currentTime = 0;
	myaudio.pause();
} */

/*
1) - убрать ускорение таймера при нажатии старт
2) кнопка стоп должна работать
3) добавить кнопки с заготовками в минутах (5, 15, 30, 60 минут)
4) по окончанию времени, останавливать таймер и выводить сообщение

5*) добавить звук звонка - будильника  <audio>


*/