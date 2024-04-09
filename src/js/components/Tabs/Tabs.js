import postData from "services/post-data";

import "./Tabs.scss";

export default class Tabs {
	constructor(parentContentElement, cards) {
		this.tabs = parentContentElement.querySelectorAll(".tabs .tab");
		this.tabsContent = parentContentElement.querySelector(".tabs-wrapper .tabs-content");
		this.tabsButtons = parentContentElement.querySelectorAll(".tabs-wrapper .tabs-pg-btn");

		this.activeIndex = 0;
		this.tabsCount = this.tabs.length;
		this.content = cards;

		[...this.tabs].map((tab, i) => {
			tab.addEventListener("click", () => this.play(i));
		});

		this.tabsButtons[0].addEventListener("click", () => this.prev());
		this.tabsButtons[1].addEventListener("click", () => this.next());

		this.play(0);
	}

	play(index) {
		if (index < 0 || index > this.tabsCount - 1) return;

		this.tabsContent.innerHTML = this.content.html;

		[...this.tabsContent.querySelectorAll("button.card-btn")].map(button => {
			button.addEventListener("click", async (e) => {
				const [_, index] = e.currentTarget.dataset.item.split(":");

				alert(await postData("cart/add", this.content.cards[index]));
			});
		});

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
