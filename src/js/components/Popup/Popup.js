import "./Popup.scss";

export const Popup = () => {
	const POPUP_KEY = "POPUP_KEY";
	const needNotShowPopup = JSON.parse(localStorage.getItem(POPUP_KEY));

	if (!needNotShowPopup) {
		const popup = document.createElement("section");
		const content = `
			<div class="welcome-popup animate-fadein-css">
                <div class="welcome-popup__wrapper">
                    <p>Добро пожаловать на Shopper!</p>
                    <button class="button button_color_green welcome-popup__button">
						Закрыть и не показывать больше
					</button>
                </div>
            </div>
		`;

		popup.innerHTML = content;
		popup
			.querySelector(".welcome-popup__button")
			.addEventListener("click", () => {
				localStorage.setItem(POPUP_KEY, "true");

				popup.remove();
			});

		setTimeout(() => document.body.append(popup), 1000);
	}
};

export default Popup;
