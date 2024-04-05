export default class ElemHTML {
	constructor(tag = "div", className = [""]) {
		this.elem = document.createElement(tag);

		this.elem.classList.add(...className);
	}

	setContent(content) {
		this.elem.innerHTML = content;

		return this;
	}

	render(container = "body") {
		document.querySelector(container)?.append(this.elem);

		return this;
	}
}
