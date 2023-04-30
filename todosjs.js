const input = document.querySelector("input");
const addButton = document.querySelector("button");
const list = document.querySelector(".list");

addButton.addEventListener("click", addItem);

input.addEventListener("keyup", function(event) {
	if (event.key === "Enter") {
		addItem();
	}
});

const items = JSON.parse(localStorage.getItem("items")) || [];
for (let i = 0; i < items.length; i++) {
	const listItem = document.createElement("li");
	const doneCheckbox = document.createElement("input");
	const itemLabel = document.createElement("label");
	const deleteButton = document.createElement("button");
	
	doneCheckbox.setAttribute("type", "checkbox");
	itemLabel.innerText = items[i].text;
	deleteButton.innerText = "Delete";
	doneCheckbox.checked = items[i].done;
	
	if (doneCheckbox.checked) {
		itemLabel.style.textDecoration = "line-through";
	}
	
	listItem.appendChild(doneCheckbox);
	listItem.appendChild(itemLabel);
	listItem.appendChild(deleteButton);
	list.appendChild(listItem);
	
	deleteButton.addEventListener("click", function() {
		list.removeChild(listItem);
		
		items.splice(i, 1);
		localStorage.setItem("items", JSON.stringify(items));
	});
	
	doneCheckbox.addEventListener("click", function() {
		if (doneCheckbox.checked) {
			itemLabel.style.textDecoration = "line-through";
		} else {
			itemLabel.style.textDecoration = "none";
		}
		
		items[i].done = doneCheckbox.checked;
		localStorage.setItem("items", JSON.stringify(items));
	});
}

function addItem() {
	const itemText = input.value;
	const listItem = document.createElement("li");

	const doneCheckbox = document.createElement("input");
	doneCheckbox.setAttribute("type", "checkbox");
	listItem.appendChild(doneCheckbox);

	const itemLabel = document.createElement("label");
	itemLabel.innerText = itemText;
	listItem.appendChild(itemLabel);

	const deleteButton = document.createElement("button");
	deleteButton.innerText = "Delete";
	listItem.appendChild(deleteButton);

	list.appendChild(listItem);

	input.value = "";

	deleteButton.addEventListener("click", function() {
		list.removeChild(listItem);

		const index = items.findIndex(item => item.text === itemText);
		if (index > -1) {
			items.splice(index, 1);
			localStorage.setItem("items", JSON.stringify(items));
		}
	});

	doneCheckbox.addEventListener("click", function() {
		if (doneCheckbox.checked) {
			itemLabel.style.textDecoration = "line-through";
		} else {
			itemLabel.style.textDecoration = "none";
		}
	
		const index = items.findIndex(item => item.text === itemText);
		if (index > -1) {
			items[index].done = doneCheckbox.checked;
			localStorage.setItem("items", JSON.stringify(items));
		}
	});


	items.push({
		text: itemText,
		done: false
	});
	localStorage.setItem("items", JSON.stringify(items));
}