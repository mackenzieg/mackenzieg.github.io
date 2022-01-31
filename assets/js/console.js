const manageConsole = () => {
	console.clear();
	console.log(
		'%cIf you found this good job! I\'m looking for a job as well so send me an email!',
		'background: #f4f4f4; color: #001d3d; padding: 10px; margin: 20px 0px; font-size: 16px;  border-radius: 2px'
	);
	console.log(
		`
		/$$      /$$                     /$$                                     /$$          
		| $$$    /$$$                    | $$                                    |__/          
		| $$$$  /$$$$  /$$$$$$   /$$$$$$$| $$   /$$  /$$$$$$  /$$$$$$$  /$$$$$$$$ /$$  /$$$$$$ 
		| $$ $$/$$ $$ |____  $$ /$$_____/| $$  /$$/ /$$__  $$| $$__  $$|____ /$$/| $$ /$$__  $$
		| $$  $$$| $$  /$$$$$$$| $$      | $$$$$$/ | $$$$$$$$| $$  \ $$   /$$$$/ | $$| $$$$$$$$
		| $$\  $ | $$ /$$__  $$| $$      | $$_  $$ | $$_____/| $$  | $$  /$$__/  | $$| $$_____/
		| $$ \/  | $$|  $$$$$$$|  $$$$$$$| $$ \  $$|  $$$$$$$| $$  | $$ /$$$$$$$$| $$|  $$$$$$$
		|__/     |__/ \_______/ \_______/|__/  \__/ \_______/|__/  |__/|________/|__/ \_______/
		`
	);

	console.log(
		"%c Let's talk! :) ",
		'background: #000814; color: #f4f4f4; padding: 6px; border-radius: 5px; margin: 10px; font-size: 16px'
	);
	console.log = () => {};
	console.error = () => {};
	console.info = () => {};
	console.warn = () => {};
	console.clear = () => {};
};

manageConsole();
