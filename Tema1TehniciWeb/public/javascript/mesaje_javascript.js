$(document).ready(function () {
	getMessagesList().then(list => {
		console.log(list);
		if (!list.error && list.data.length !== 0) {
			removeEntry(-1);

			for (el of list.data) {
				addEntry(el);
			}
		}
	});


	$(".control_send").click(function () {
		var message_text = $("#text_message").val();
		var message_title = $("#title_message").val();
		var message_img = $(".emoticon_select:checked").attr("data-src");

		$.get("/message_handler", { operation: "insert", user: getUser(), title: message_title, text: message_text, img: message_img }, function (data) {
			if (data.error) {
				alert(data.message);
				return;
			} else {
				removeEntry(-1);
				addEntry(data.data);
            }

		});
	});
	
	$("body").on("click", ".control_delete", function () {
		var message_id = parseInt($(this).closest(".message").attr("data-id"));

		$.get("/message_handler", { operation: "delete", user: getUser(), id: message_id }, function (data) {
			if (data.error) {
				alert(data.message);
				return;
			} else {
				removeEntry(message_id);
				if ($(".message").length === 0) {
					addEmptyEntry();
                }
			}

		});
	});
});

function getUser() {
    return $(".parent").attr("data-name");
}
function getMessagesList() {
    return $.get("/message_handler", { operation:"get_all", user: getUser()});
}
function populateList() {

}
function addEntry(data) {
	var new_element = entry_template;

	new_element = new_element.replace(/%id%/g, data.id);
	new_element = new_element.replace(/%title%/g, data.title);
	new_element = new_element.replace(/%img%/g, data.img);
	new_element = new_element.replace(/%text%/g, data.text);
	new_element = new_element.replace(/%date%/g, data.date);
	$(".message_list").append(new_element);
}
function addEmptyEntry() {
	var entry = "\
<li class='message' data-id='-1'>\
	<div class='line'>\
		<span class='message_text'>There are no messages for this user!</span>\
	</div>\
</li >\
	";
	$(".message_list").append(entry);
}
function removeEntry(id) {
	$(".message[data-id="+id+"]").remove();
}