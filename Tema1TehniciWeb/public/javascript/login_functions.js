$(document).ready(function () {
	current_page = localStorage.getItem('tab_selected');
	if (current_page !== undefined && current_page !== null && $("#" + current_page).length!==0) {
		navigateTo(current_page);

		$("a").css("box-shadow","none");
		$("#" + current_page).css("box-shadow","0 4px 2px -2px #732424");
    }

	$("a").click(function(){
		$("a").css("box-shadow","none");
		$(this).css("box-shadow","0 4px 2px -2px #732424");
	});
	$(".page").click(function () {
		localStorage.setItem('tab_selected', $(this).attr("id"));
	});
});

function navigateTo(page) {
	$("#page_content").attr("src",page);
}
