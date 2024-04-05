import ElemHTML from "components/ElemHTML";

import svgClose from "assets/svg/close";
import svgSearch from "assets/svg/search";

import "scss/sections/nav-mobile";

export default class NavMobile extends ElemHTML {
	constructor(className = [""]) {
		super("section", className);
	}

	async create() {
		this.setContent(`
			<div class="nav_mobile__shadow"></div>
			<div class="nav_mobile__menu animate-slidein-css">
				<button class="mobile-nav-btn_close">
					<img
						src="${svgClose}"
						height="52"
						width="52"
						draggable="false"
						alt="close menu"
					/>
				</button>
				<form class="search-form search-form_mobile" onsubmit="return false;">
					<input
						class="search-form__input search-form__input_mobile"
						type="text"
						size="28"
						placeholder="Search Items"
					/>
					<button class="search-form__button">
						<img
							src="${svgSearch}"
							height="21"
							width="21"
							draggable="false"
							alt="search"
						/>
					</button>
				</form>
				<ul class="nav__list nav_mobile__list">
					<li class="nav_mobile__link">
						<a href="#">Features</a>
					</li>
					<li class="nav_mobile__link">
						<a href="#">Products</a>
					</li>
					<li class="nav_mobile__link">
						<a href="#">Blog</a>
					</li>
					<li class="nav_mobile__link">
						<a href="#">About</a>
					</li>
				</ul>
			</div>
		`);

		return this.render(".wrapper");
	}
}
