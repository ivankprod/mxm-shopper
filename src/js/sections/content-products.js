import ElemHTML from "components/ElemHTML";

import imageEarphones1 from "assets/img/earphones/1";
import imageEarphones2 from "assets/img/earphones/2";
import imageEarphones3 from "assets/img/earphones/3";

import "scss/sections/content-products-launches";

export default class ContentProducts extends ElemHTML {
	constructor(className = [""]) {
		super("section", className);
	}

	async create() {
		this.setContent(`
			<div class="content-products_left ontop">
				<h2 class="content-products_left__h2">
					Apple wireless Airpod
				</h2>
				<div class="products">
					<div class="products__photos">
						<img
							class="products__photos-img"
							src="${imageEarphones1}"
							height="331"
							alt="earphones1"
						/>
						<img
							class="products__photos-img"
							src="${imageEarphones2}"
							height="331"
							alt="earphones2"
						/>
						<img
							class="products__photos-img"
							src="${imageEarphones3}"
							height="331"
							alt="earphones3"
						/>
					</div>
					<div class="products__price">
						Price : &nbsp;
						<span class="products__price_bold">$ 45.99</span>
					</div>
				</div>
			</div>
			<div class="content-products_right ontop">
				<h2 class="content-products_right__h2">
					Our Featured Products
				</h2>
				<p class="content-products_right__text">
					Lorem ipsum is a placeholder text commonly used to
					demonstrate the visual form of a product
				</p>
				<div class="products-actions">
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
