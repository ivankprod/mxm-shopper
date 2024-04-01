export default class Tabs {
	constructor(parentContentElement, cards) {
		this.tabs = parentContentElement.querySelectorAll(".tabs .tab");
		this.tabsContent = parentContentElement.querySelector(".tabs-wrapper .tabs-content");
		this.tabsButtons = parentContentElement.querySelectorAll(".tabs-wrapper .tabs-pg-btn");

		this.activeIndex = 0;
		this.tabsCount = this.tabs.length;
		this.cards = cards;

		for (let i = 0; i < this.tabsCount; i++) {
			this.tabs[i].addEventListener("click", () => this.play(i));
		}

		this.tabsButtons[0].addEventListener("click", () => this.prev());
		this.tabsButtons[1].addEventListener("click", () => this.next());
	}

	play(index) {
		if (index < 0 || index > this.tabsCount - 1) return;

		this.tabsContent.innerHTML = this.cards;

		this.tabs[this.activeIndex].classList.remove("tab_active");
		this.tabs[index].classList.add("tab_active");

		this.tabsButtons[0].disabled = index == 0;
		this.tabsButtons[1].disabled = index == this.tabsCount - 1;

		this.activeIndex = index;
	}

	prev() {
		this.play(this.activeIndex - 1);
	}

	next() {
		this.play(this.activeIndex + 1);
	}
}
