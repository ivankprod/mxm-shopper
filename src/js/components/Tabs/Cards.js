import imageStarRating from "assets/svg/star_rating";

import imageSellers1 from "assets/img/sellers/1";
import imageSellers2 from "assets/img/sellers/2";
import imageSellers3 from "assets/img/sellers/3";

import imageTrending1 from "assets/img/trending/1";
import imageTrending2 from "assets/img/trending/2";
import imageTrending3 from "assets/img/trending/3";

import getData from "services/get-data";

const imagesSellers = [imageSellers1, imageSellers2, imageSellers3];
const imagesTrending = [imageTrending1, imageTrending2, imageTrending3];

const defaultsSellers = [
	{
		title: "Boat Rockerz 333",
		reviews: 75,
		price: 20,
		discount: "60",
		color: "mint-cream"
	}, {
		title: "Boat kerz 234",
		reviews: 75,
		price: 40,
		color: "light-cyan"
	}, {
		title: "Boat Rockerz 323",
		reviews: 75,
		price: 30,
		discount: "40",
		color: "light-mallow"
	}
];

const defaultsTrending = [
	{
		title: "Boat Rockerz 333",
		reviews: 75,
		price: 20,
		discount: "60",
		color: "dark-blue-alice"
	}, {
		title: "Boat kerz 234",
		reviews: 75,
		price: 40,
		color: "light-blue-alice"
	}, {
		title: "Boat Rockerz 323",
		reviews: 75,
		price: 30,
		discount: "40",
		color: "paleturquoise"
	}
];

export const getCardsSellers = async () => {
	const dataSellers = await getData("get-cards", "type=sellers") || defaultsSellers;

	return dataSellers.reduce((html, data, i) => html + `
		<div class="card-wrapper animate-fadein-long-css">
			<div class="card card_color_${data.color}">
				<img
					class="card__photo-img"
					src="${imagesSellers[i]}"
					height="200"
					alt="earphones${i}"
				/>
				<div class="card__info">
					<div class="card__info-title">
						${data.title}
					</div>
					<div class="card__info-rating">
						<div class="rating__stars">
							<img
								src="${imageStarRating}"
								draggable="false"
								alt="star"
							/>
							<img
								src="${imageStarRating}"
								draggable="false"
								alt="star"
							/>
							<img
								src="${imageStarRating}"
								draggable="false"
								alt="star"
							/>
							<img
								src="${imageStarRating}"
								draggable="false"
								alt="star"
							/>
							<img
								src="${imageStarRating}"
								draggable="false"
								alt="star"
							/>
						</div>
						<div class="rating__reviews">
							${data.reviews} Reviews
						</div>
					</div>
					<div class="card__info-price">$${data.price}</div>
				</div>
				${data.discount ? `<div class="card__discount card__discount_color_primary">
					Save ${data.discount}<br />%
				</div>` : ``}
			</div>
			<button class="button button_color_green card-btn">
				Add to cart
			</button>
		</div>
	`, "");
}

export const getCardsTrending = async () => {
	const dataTrending = await getData("get-cards", "type=trending") || defaultsTrending;

	return dataTrending.reduce((html, data, i) => html + `
		<div class="card-wrapper animate-fadein-long-css">
			<div class="card card_color_${data.color}">
				<img
					class="card__photo-img"
					src="${imagesTrending[i]}"
					height="200"
					alt="earphones${i}"
				/>
				<div class="card__info">
					<div class="card__info-title">
						${data.title}
					</div>
					<div class="card__info-rating">
						<div class="rating__stars">
							<img
								src="${imageStarRating}"
								draggable="false"
								alt="star"
							/>
							<img
								src="${imageStarRating}"
								draggable="false"
								alt="star"
							/>
							<img
								src="${imageStarRating}"
								draggable="false"
								alt="star"
							/>
							<img
								src="${imageStarRating}"
								draggable="false"
								alt="star"
							/>
							<img
								src="${imageStarRating}"
								draggable="false"
								alt="star"
							/>
						</div>
						<div class="rating__reviews">
							${data.reviews} Reviews
						</div>
					</div>
					<div class="card__info-price">$${data.price}</div>
				</div>
				${data.discount ? `<div class="card__discount card__discount_color_primary">
					Save ${data.discount}<br />%
				</div>` : ``}
			</div>
			<button class="button button_color_green card-btn">
				Add to cart
			</button>
		</div>
	`, "");
}
