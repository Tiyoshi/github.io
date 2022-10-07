$(document).ready(function(){
        $(".burger").click(function(){
           $("body").toggleClass("show-sidebar");
            return false;
        });

				$(".mobile-nav_item").click(function(){
					setTimeout(() => { 
						$("body").toggleClass("show-sidebar");
					 return false;
					 }, 300);
					
			 });
});

document.querySelectorAll("a[href^='#']").forEach(link => {
	link.addEventListener("click", function (e) {
			e.preventDefault();
			let href = this.getAttribute("href").substring(1);
			const scrollTarget = document.getElementById(href);
			const topOffset = document.querySelector(".mobile-nav_inner").offsetHeight;
			// const topOffset = 0; // если не нужен отступ сверху
			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;

			window.scrollBy({
					top: offsetPosition,
					behavior: "smooth"
			});
	});
});