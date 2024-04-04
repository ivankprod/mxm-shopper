import "../scss/styles.scss";

import Popup from "./components/Popup";
import Tabs from "./components/Tabs";
import { cardsSellers, cardsTrending } from "./components/Tabs/Cards";

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

	Popup();

	const tabsSellers = new Tabs(
		document.querySelector(".content-sellers"),
		cardsSellers
	);

	const tabsTrending = new Tabs(
		document.querySelector(".content-trending"),
		cardsTrending
	);
});
