import ElemHTML from "components/ElemHTML";

import svgArrow from "assets/svg/arrow";

import svgSocialFacebook from "assets/svg/social/facebook";
import svgSocialTwitter from "assets/svg/social/twitter";
import svgSocialInstagram from "assets/svg/social/instagram";

import "scss/sections/footer";

export default class Footer extends ElemHTML {
	constructor(className = [""]) {
		super("footer", className);
	}

	async create() {
		this.setContent(`
			<div class="footer__block footer__block_get-started">
				<span class="get-started__text">Ready to get started?</span>
				<button class="button button_color_green get-started__button">
					Get started
				</button>
			</div>
			<div class="footer__block footer__block_menu">
				<div class="footer__block-item footer__block-item_subscribe">
					<span class="subscribe-form__title">
						Subscribe to our<br />Website
					</span>
					<form class="subscribe-form" onsubmit="return false;">
						<input
							class="subscribe-form__input"
							type="text"
							placeholder="Email address"
						/>
						<button class="subscribe-form__button">
							<img
								src="${svgArrow}"
								height="21"
								width="21"
								draggable="false"
								alt="subscribe"
							/>
						</button>
					</form>
				</div>
				<div class="footer__block-item">
					<span class="block-item__title">Services</span>
					<a class="block-item__link" href="#">Email Marketing</a>
					<a class="block-item__link" href="#">Campaigns</a>
					<a class="block-item__link" href="#">Brandings</a>
					<a class="block-item__link" href="#">Offline</a>
				</div>
				<div class="footer__block-item">
					<span class="block-item__title">About</span>
					<a class="block-item__link" href="#">Our Story</a>
					<a class="block-item__link" href="#">Benefits</a>
					<a class="block-item__link" href="#">Team</a>
					<a class="block-item__link" href="#">Careers</a>
				</div>
				<div class="footer__block-item">
					<span class="block-item__title">Help</span>
					<a class="block-item__link" href="#">FAQs</a>
					<a class="block-item__link" href="#">Contacts Us</a>
				</div>
			</div>
			<div class="footer__block footer__block_terms">
				<div class="footer__block-links">
					<a href="#" class="block-links__link">Terms & Conditions</a>
					<a href="#" class="block-links__link">Privacy Policy</a>
				</div>
				<div class="footer__block-socials">
					<a href="#" class="block-socials__icon">
						<img
							src="${svgSocialFacebook}"
							height="22"
							width="22"
							draggable="false"
							alt="facebook"
						/>
					</a>
					<a href="#" class="block-socials__icon">
						<img
							src="${svgSocialTwitter}"
							height="22"
							width="22"
							draggable="false"
							alt="twitter"
						/>
					</a>
					<a href="#" class="block-socials__icon">
						<img
							src="${svgSocialInstagram}"
							height="22"
							width="22"
							draggable="false"
							alt="instagram"
						/>
					</a>
				</div>
			</div>
		`);

		return this.render(".wrapper");
	}
}
