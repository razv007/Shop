const hamburger2 = document.querySelector('.doi .header .nav-bar .nav-list .hamburger');
const mobile_menu2 = document.querySelector('.doi .header .nav-bar .nav-list ul');
const menu_item2 = document.querySelectorAll('.doi .header .nav-bar .nav-list ul li a');
const contacte = document.getElementsByClassName("contact-item");
const doi = document.getElementById('doi');

doi.style.backgroundColor = '#29323c';

hamburger2.addEventListener('click', () => {
	hamburger2.classList.toggle('active');
	mobile_menu2.classList.toggle('active');
}); 
menu_item2.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger2.classList.toggle('active');
		mobile_menu2.classList.toggle('active');
	});
});
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.getElementById('buton1').classList.remove("active-btn");
			document.getElementById('buton2').classList.remove("active-btn");
			document.getElementById('buton3').classList.remove("active-btn");
            document.getElementById(button.dataset.buton).classList.add("active-btn");
			document.querySelector(".produs_popup_shop").classList.remove("open");
        })
    });
})();