var bilder = JSON.parse(bilder_data);

function createImages() {
	Object.keys(bilder).forEach(key => {
		var bild = bilder[key];
		
		var bild_element = document.createElement("div");
		bild_element.className = "imageContainer";
		bild_element.innerHTML = `<a><img src="${bild.path}" id="mainImage"></img></a>`

		var container = document.getElementById(bild.category);
		container.appendChild(bild_element);
	});
}

createImages();
