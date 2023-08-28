console.log("Hello from Nerdbord!");
const boxElement = document.querySelector(".box");
let i = 0;
const changeColor = () => {
	const colors = ["#0000ff", "#ff0000", "#ffd700", "#adff2f"];
	i = (i + 1) % colors.length;
	console.log(i);
	boxElement.style.borderColor = colors[i];
};
setInterval(changeColor, 3000);
