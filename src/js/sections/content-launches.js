import ElemHTML from "components/ElemHTML";

import imageLaunches1 from "assets/img/launches/1";
import imageLaunches2 from "assets/img/launches/2";

import "scss/sections/content-products-launches";

export default class ContentLaunches extends ElemHTML {
	constructor(className = [""]) {
		super("section", className);
	}

	async create() {
		new ElemHTML("h3", ["content__h3", "content-launches__h3"])
			.setContent("New Launches")
			.render(".wrapper");

		this.setContent(`
			<div class="content-products_left ontop">
				<div class="launches__photos">
					<img
						class="launches__photos-img"
						src="${imageLaunches1}"
						height="423"
						alt="earphones3"
					/>
					<img
						class="launches__photos-img"
						src="${imageLaunches2}"
						height="423"
						alt="earphones4"
					/>
				</div>
			</div>
			<div class="content-products_right ontop">
				<h2 class="content-launches_right__h2">Airdrop 500 Anc</h2>
				<p class="content-launches_right__text">
					Lorem ipsum is a placeholder text commonly used to
					demonstrate the visual form of a product...
					<a href="#">Read more</a>
				</p>
				<div class="launches__price">
					Price : &nbsp;
					<span class="products__price_bold">$ 45.99</span>
				</div>
				<div class="launches__colors">
					<div class="color color_black"></div>
					<div class="color color_yellow"></div>
					<div class="color color_blue"></div>
				</div>
				<div class="launches-actions">
					<button class="button button_color_green cart-btn">
						Add to cart
					</button>
					<a class="products-actions__view-link" href="#">
						View more
					</a>
				</div>
			</div>
		`);

		return this.render(".wrapper");
	}
}
