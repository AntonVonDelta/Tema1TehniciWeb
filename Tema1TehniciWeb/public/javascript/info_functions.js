$(document).ready(function(){
	ControlInputs();

	$("table").on("click",".jq_btn_edit",function(){
		ControlInputs();
		ControlElement($(this).closest("tr"),1);
		Alert();
	});	

	$("table").on("click",".jq_btn_delete",function(){
		$(this).closest("tr").remove();
		Alert();
	});


	$(".NewEntry").click(function(){
		var i=parseInt($("#row_count_data").val());
		var html="\
                <tr class='data'>\
			<input type='hidden' class='editing' value='false' />\
			<td class='principal_row' >\
				<div>\
					<input type='text' class='princ_link_title' readonly value='' />\
				</div>\
				<div>\
					<input type='checkbox' class='checkbox_multiple' />Redirectioneaza catre(\
                            <input type='radio' name='dynamic_radio_"+i+"' class='checkbox_url' disabled value='Url' />Url sau\
                            <input type='radio' name='dynamic_radio_"+ i +"' class='checkbox_page' disabled value='Page' />Page )\
                        </div>\
				<div>\
					<input type='text' class='princ_link_addr' value='' />\
				</div>\
                    </td >\
			<td style='vertical-align:bottom' class='secondary_row'>\
				\
				<div class='NewLink'><h4 style='margin:0 auto;'>New Link</h4></div>\
			</td>\
			<td>\
				<button type='button' class='btn_edit jq_btn_edit'>Edit</button>\
				<button type='button' class='btn_delete jq_btn_delete'>Delete</button>\
			</td>\
		\
                </tr >\
		";
		$("#row_count_data").val(i+1);
		$(this).before(html);

		// Disable the last row
		ControlElement($("form .data").last());
	});

	$("table").on("click",".NewLink",function(){
		var i = parseInt($("#row_count_data").val());
		var tr = $(this).closest("tr");

		if ($(tr).find(".editing").val() === "false") return;

		var html = "\
			<div class='secondary' style = 'margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid grey' >\
				<div>\
					<input type='text' class='sec_link_title' value='' />\
				</div>\
				<div>\
					<input type='radio' name='dynamic_radio_"+ i +"' class='checkbox_url' value='Url' />Url sau\
					<input type='radio' name='dynamic_radio_"+ i +"' class='checkbox_page' value='Page' />Page\
			</div>\
				<div>\
					<input type='text' class='sec_link_addr' value='' />\
				</div>\
			</div >\
		";
		$("#row_count_data").val(i + 1);

		$(this).before(html);
	});

	//General operations:Saving, Deleting
	$("#btn_save").click(function(){
		$.post("/save_json", toJSON(), function (msg) {
			if(msg!=="") alert(msg);
		});

		ControlInputs();
		Alert(0);
	});

	$("#btn_delete_all").click(function(){
		Alert();

		$("tr").not("#header,.NewEntry,.footer").each(function(){
			$(this).remove();
		});
	});
});


// 0 disables the entire row; 1 enables it
function ControlElement(row,state = 0) {
	if (state === 0) {
		$(row).find("input[type=text]").attr("readonly", "readonly");
		$(row).find("input[type=text]").css("background-color", "transparent");
		$(row).find("input[type=text]").css("border-width", "1px");

		$(row).find("input[type=checkbox],input[type=radio]").attr("disabled", "disabled");
		$(row).find(".editing").val("false");
	}
	else {
		$(row).find("input").removeAttr("readonly");
		$(row).find("input").css("background-color", "");
		$(row).find("input").css("border-width", "thin");

		$(row).find("input[type=checkbox],input[type=radio]").removeAttr("disabled");
		$(row).find(".editing").val("true");
	}
}
function ControlInputs(state=0){
	if(state===0){
		$("input[type=text]").attr("readonly","readonly");
		$("input[type=text]").css("background-color","transparent");
		$("input[type=text]").css("border-width","1px");

		$("input[type=checkbox],input[type=radio]").attr("disabled", "disabled");
		$(".editing").val("false");
	}
	else{
		$("input").removeAttr("readonly");
		$("input").css("background-color","initial");
		$("input").css("border-width","thin");

		$("input[type=checkbox],input[type=radio]").removeAttr("disabled");
		$(".editing").val("true");
	}
}


function Alert(state=1){
	if(state){
		$("#jq_notify").css("display","block");
		$("#btn_save").html("*Save");
	}else{
		$("#jq_notify").css("display","none");
		$("#btn_save").html("Save");
	}
}

//{ multiple: false, dest: [{ type: "Page", title: "Tineri Antreprenori", resource: "antreprenor", rang: "P" }] },
//{
//	multiple: true, dest: [{ type: "Page", title: "Aspiratii Literare", rang: "P" },
//	{ type: "Page", title: "Revista", resource: "aspiratii_literale", rang: "S" },
//	{ type: "Link", title: "Arhiva", resource: "https://www.didactic.ro/revista/aspiratii", rang: "S" }]
//},
function toJSON() {
	var data = [];

	$(".data").each(function () {
		var princ = $(this).find(".principal_row");
		var sec = $(this).find(".secondary_row");

		var multiple = ($(princ).find(".checkbox_multiple").is(":checked")?false:true);
		var dest = [];

		if (multiple) {
			let title = $(princ).find(".princ_link_title").val();
			let rang = "P";

			dest[0] = { title: title, rang: rang };

			$(sec).find(".secondary").each(function () {
				let type = ($(this).find(".checkbox_page").is(":checked")? "Page" : "Link");
				let title = $(this).find(".sec_link_title").val();
				let resource = $(this).find(".sec_link_addr").val();
				let rang = "S";

				dest.push({ type: type, title: title, resource: resource, rang: rang });
			});

		} else {
			let type = ($(princ).find(".checkbox_page").is(":checked") ? "Page" : "Link");
			let title = $(princ).find(".princ_link_title").val();
			let resource = $(princ).find(".princ_link_addr").val(); 
			let rang = "P";

			dest[0] = { type: type, title: title, resource:resource,rang:rang };
		}

		var el = { multiple: multiple, dest:dest };
		data.push(el);
	});

	return  {
		data: data, page: $("#page").val(), token: $("#token").val()
	};
}