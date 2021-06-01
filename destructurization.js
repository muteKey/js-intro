// let arr = ["Kirill", "Ushkov"];

// let [firstName, lastName] = arr;

// alert(firstName);
// alert(lastName);

// let [firstName, , title] = ["Julius", "Caesar", "Consul"];
// alert(firstName + title)


let options = {
	title: "Menu",
	width: 100,
	height: 300
};

// let {title, width, height} = options;

// alert(title);
// alert(width);
// alert(height);

let {width: w, title: t, height: h} = options;
alert(w);
alert(t);
alert(h);