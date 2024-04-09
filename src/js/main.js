import "scss/styles";

import Header from "sections/header";
import NavMobile from "sections/nav-mobile";
import ContentInfo from "sections/content-info";
import ContentProducts from "sections/content-products";
import ContentSellers from "sections/content-sellers";
import ContentTrending from "sections/content-trending";
import ContentLaunches from "sections/content-launches";
import Footer from "sections/footer";

import Tabs from "components/Tabs";
import { getCardsSellers, getCardsTrending } from "components/Tabs/Cards";

import Popup from "components/Popup";

new Header(["header"])?.create().then(() => {
	Promise.all([
		new NavMobile(["nav_mobile", "animate-fadein-css"])?.create()
			.then((self) => {
				document
					.querySelector(".mobile-nav-btn_open")
					?.addEventListener("click", () => {
						self.elem.style.display = "flex";
					});

				document
					.querySelector(".mobile-nav-btn_close")
					?.addEventListener("click", () => {
						self.elem.style.display = "none";
					});
			}),
		new ContentInfo(["content", "content-info"])?.create(),
		new ContentProducts(["content", "content-products"])?.create(),
		new ContentSellers(["content", "content-sellers"])?.create()
			.then(async (self) => {
				new Tabs(self.elem, await getCardsSellers());
			}),
		new ContentTrending(["content", "content-trending"])?.create()
			.then(async (self) => {
				new Tabs(self.elem, await getCardsTrending());
			}),
		new ContentLaunches(["content", "content-launches"])?.create(),
		new Footer(["footer"])?.create().then(() => {
			Popup();
		}),
	]);
});
