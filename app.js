let time = document.querySelector ('#time');

let date = new Date ();
time.textContent = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();
// функция для обновления даты кажды секунда меняет время 
window.setInterval (getTime,1000);
// функция для показа настояшего времения
function getTime () {
	let date = new Date ();
	time.textContent = getZero(date.getHours()) + ' : ' + getZero(date.getMinutes()) + ' : ' + getZero(date.getSeconds());
}
// Функция для того чтобы добавит нол когда перед цифрами нету нуля 
function getZero (num) {
	if (num < 10){
		num = '0' + num;
	}
	return num;
}

// функция для изменения бекгроунда нашего блока 
let block = document.querySelector('#color');
let i = 0;
window.setInterval(getColor,4000);
function getColor () {
	let colors = ['red','blue','green','orange'];
		block.style.background = colors[i];
		i++;
		if (i == colors.length){
			i = 0;
		}
}