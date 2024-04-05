import ElemHTML from "components/ElemHTML";

import svgArrow from "assets/svg/arrow";

import "scss/sections/content-sellers-trending";

export default class ContentSellers extends ElemHTML {
	constructor(className = [""]) {
		super("section", className);
	}

	async create() {
		this.setContent(`
			<h3 class="content__h3">Top Sellers</h3>
			<div class="tabs content__tabs">
				<button class="tab tab_active ontop">Top Picks</button>
				<button class="tab ontop">Watches</button>
			</div>
			<div class="tabs-wrapper">
				<button class="tabs-wrapper__button_left tabs-pg-btn" disabled>
					<img
						src="${svgArrow}"
						height="28"
						draggable="false"
						alt="arrow"
					/>
				</button>
				<div class="tabs-content"></div>
				<button class="tabs-wrapper__button_right tabs-pg-btn">
					<img
						src="${svgArrow}"
						height="28"
						draggable="false"
						alt="arrow"
					/>
				</button>
			</div>
		`);

		return this.render(".wrapper");
	}
}
