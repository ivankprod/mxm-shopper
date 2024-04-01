import "../scss/styles.scss";

import Tabs from "./tabs";
import { cardsSellers, cardsTrending } from "./tabs/cards";

window.addEventListener("DOMContentLoaded", () => {
	document
		.querySelector(".mobile-nav-btn_open")
		?.addEventListener("click", () => {
			document.querySelector(".nav_mobile").style.display = "flex";
		});

	document
		.querySelector(".mobile-nav-btn_close")
		?.addEventListener("click", () => {
			document.querySelector(".nav_mobile").style.display = "none";
		});

	const tabsSellers = new Tabs(
		document.querySelector(".content-sellers"),
		cardsSellers
	);

	const tabsTrending = new Tabs(
		document.querySelector(".content-trending"),
		cardsTrending
	);
});
