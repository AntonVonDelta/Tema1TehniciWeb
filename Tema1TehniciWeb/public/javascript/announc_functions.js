$(document).ready(function(){
	$("#btn_save").click(function(){
		//Notify the user-No need for saving
		Notify(false);

		//First..disable all possible passed enabled elements
		DisablePrevCtrls();

		//Re-enable all selections-!important
		$("select").attr("disabled",false);

		$.post("/save_json", toJSON(), function (msg) {
			if (msg !== "") alert(msg);
		});

		//Re-disable all selections
		$("select").attr("disabled",true);
	});
	$("#btn_delete_all").click(function(){
		//Notify the user-needs to save
		Notify(true);

		$("tr").not("#header,#NewEntry,#Controls").each(function(){
			$(this).remove();
		});
	});



	$("table").on("click",".jq_btn_edit",function(){
		//Notify the user-needs to save
		Notify(true);

		//First..disable all possible passed enabled elements
		DisablePrevCtrls();
		//Now enable all elements in this TR tag
		$(this).closest("tr").find("textarea").attr("readonly",false);
		$(this).closest("tr").find("textarea").css("border","1px solid #E0D6D6");
		$(this).closest("tr").find("select").attr("disabled",false);


		$(this).closest("tr").find("select").change(function(){
			$(this).closest("tr").find("img").attr("src","images/"+$(this).closest("tr").find("select").val());
		});
	});

	$("table").on("click",".jq_btn_delete",function(){
		//Notify the user-needs to save
		Notify(true);

		$(this).closest("tr").remove();
	});



	$("#NewEntry").click(function(){
		//Notify the user-needs to save
		Notify(true);

		$html = "<tr class='data'>\
			<td> <textarea readonly class='data_text'></textarea></td >\
				<td style='vertical-align:top;padding-bottom:0'>\
					<div style='height:50px'>\
						<textarea readonly class='extra_info' placeholder='Enter extra information or a website address here'></textarea>\
					</div>\
				</td>\
				<td>\
					<img title='' src='' />\
					<select class='data_picture' disabled>\
					</select>\
				</td>\
				<td>\
					<button type='button' class='btn_edit jq_btn_edit'>Edit</button>\
					<button type='button' class='btn_delete jq_btn_delete'>Delete</button>\
				</td>\
                </tr >\
		";
		$(this).before($html);
		$(".data").last().find(".data_picture").append($("#img_Data>option").clone());
	});
});


function Notify(activate){
	if(activate){
		$("#jq_notify").css("display","block");
		$("#btn_save").html("*Save");
	}else{
		$("#jq_notify").css("display","none");
		$("#btn_save").html("Save");
	}
}

function DisablePrevCtrls(){
	//First..disable all possible passed enabled elements
	$("textarea").attr("readonly",true);
	$("textarea").css("border","none");
	$("select").attr("disabled",true);
}

//{ extra: true, picture: "circle.png", text: "Va informam ca noi cautam studenti...", link: "Pentru supa de perisoare desigur" },
function toJSON() {
	var data = [];

	$(".data").each(function () {
		var extra = $(this).find(".extra_info").val().trim()!=="";
		var picture = $(this).find(".data_picture").find(":selected").text();
		var text = $(this).find(".data_text").val();
		var link = (extra ? $(this).find(".extra_info").val() : "");

		var el = { extra: extra, picture: picture, text: text, link: link };
		data.push(el);
	});

	return {
		data: data, page: $("#page").val(), token: $("#token").val()
	};
}