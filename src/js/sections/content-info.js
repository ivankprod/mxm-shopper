import ElemHTML from "components/ElemHTML";

import svgStarYellow from "assets/svg/star_yellow";

import imageReviews1 from "assets/img/reviews/1";
import imageReviews2 from "assets/img/reviews/2";
import imageReviews3 from "assets/img/reviews/3";
import imageReviews4 from "assets/img/reviews/4";

import imageManListening from "assets/img/man-listening";
import imagePhones from "assets/img/phones";

import "scss/sections/content-info";

export default class ContentInfo extends ElemHTML {
	constructor(className = [""]) {
		super("section", className);
	}

	async create() {
		this.setContent(`
			<div class="content-info__side_left">
				<h1 class="content__h1">Discover Our Latest Products</h1>
				<p class="content-info__description">
					Lorem ipsum is a placeholder text commonly used to
					demonstrate the visual form of a product
				</p>
				<button class="button button_color_green buy-btn">Buy Now</button>
				<div class="reviews">
					<div class="reviews__icons">
						<img
							class="reviews__icons-img"
							src="${imageReviews1}"
							height="60"
							width="60"
							alt="avatar1"
						/>
						<img
							class="reviews__icons-img"
							src="${imageReviews2}"
							height="60"
							width="60"
							alt="avatar2"
						/>
						<img
							class="reviews__icons-img"
							src="${imageReviews3}"
							height="60"
							width="60"
							alt="avatar3"
						/>
						<img
							class="reviews__icons-img"
							src="${imageReviews4}"
							height="60"
							width="60"
							alt="avatar4"
						/>
					</div>
					<div class="reviews__count">15k Well<br />Reviews</div>
				</div>
			</div>
			<div class="content-info__side_right">
				<div class="play-video">
					<div class="play-video__wrapper">
						<div class="play-video__icon">
							<img
								src="${imageManListening}"
								height="70"
								alt="man-listening"
							/>
						</div>
					</div>
					<a href="#">Play Video</a>
				</div>
				<div class="headphones">
					<img
						class="star-top"
						src="${svgStarYellow}"
						height="53"
						alt="star1"
					/>
					<img
						class="star-bottom"
						src="${svgStarYellow}"
						height="53"
						alt="star1"
					/>
					<div class="headphones__picture">
						<img
							class="headphones__picture-img"
							src="${imagePhones}"
							height="299"
							alt="headphones"
						/>
					</div>
					<div class="headphones__text">
						<span>R</span>
						<span>e</span>
						<span>d</span>
						<span>B</span>
						<span>e</span>
						<span>a</span>
						<span>t</span>
						<span>s</span>
						<span>M</span>
						<span>l</span>
						<span>9</span>
						<span>c</span>
						<span>2</span>
						<span>z</span>
						<span>m</span>
						<span>/</span>
						<span>a</span>
					</div>
				</div>
			</div>
		`);

		return this.render(".wrapper");
	}
}
