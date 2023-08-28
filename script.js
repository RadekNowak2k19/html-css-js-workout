console.log("Hello from Nerdbord!");
const boxElement = document.querySelector(".box");

// #0000ff; #ff0000; #ffd700; #adff2f;

const generateRandomColor = () => {
	setInterval(() => {
		const color = `#${Math.floor(Math.random() * 0xffffff)}`;
		boxElement.style.borderColor = color;
	}, 3000);
};
generateRandomColor();
