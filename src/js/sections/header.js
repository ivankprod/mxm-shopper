import ElemHTML from "components/ElemHTML";

import svgSearch from "assets/svg/search";
import svgCart from "assets/svg/cart";
import svgProfile from "assets/svg/profile";
import svgBurgerMenu from "assets/svg/burger-menu";

import "scss/sections/header";

export default class Header extends ElemHTML {
	constructor(className = [""]) {
		super("header", className);
	}

	async create() {
		this.setContent(`
			<div class="header-section">
				<a class="logo" href="#">
					<span class="logo__text_color_main">Shop</span>per
				</a>
				<div class="header-section__aside">
					<form class="search-form" onsubmit="return false;">
						<input
							class="search-form__input"
							type="text"
							size="18"
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
					<button class="aside__button">
						<img
							class="aside__button-icon"
							src="${svgCart}"
							height="20"
							width="16"
							draggable="false"
							alt="cart"
						/>
						0 Items Added
					</button>
					<button class="aside__button aside__button_login">
						<img
							class="aside__button-icon"
							src="${svgProfile}"
							height="20"
							width="16"
							draggable="false"
							alt="profile"
						/>
						Login or Sign Up
					</button>
				</div>
				<button class="mobile-nav-btn_open">
					<img
						src="${svgBurgerMenu}"
						height="38"
						width="38"
						draggable="false"
						alt="burger menu"
					/>
				</button>
			</div>
			<nav class="header-section nav">
				<ul class="nav__list">
					<li class="nav__link"><a href="#">Features</a></li>
					<li class="nav__link"><a href="#">Products</a></li>
					<li class="nav__link"><a href="#">Blog</a></li>
					<li class="nav__link"><a href="#">About</a></li>
				</ul>
			</nav>
		`);

		return this.render(".wrapper");
	}
}
