console.log("This is auth module");
console.time("time");
const wait = (time) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Waiting done");
		}, time);
	});

wait(5000).then((res) => console.log(res));
console.log("after 2 sec waiting fn");
