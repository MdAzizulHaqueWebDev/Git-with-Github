console.log("This is auth module");

const wait = (time) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Waiting done");
		}, time);
	});

wait(2000).then((res) => console.log(res));
