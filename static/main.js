document.querySelector(".mobile-nav-btn_open")?.addEventListener("click", function() {
	document.querySelector(".nav_mobile").style.display = "flex";
});

document.querySelector(".mobile-nav-btn_close")?.addEventListener("click", function() {
	document.querySelector(".nav_mobile").style.display = "none";
});
