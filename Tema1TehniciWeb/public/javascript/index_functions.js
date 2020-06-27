
var window_has_been_clicked = false;
var item_old_color;                  //stores the color of the item after hovering


jQuery.fn.align_table = function () {
  var window_width = $(window).width();
  this.css("margin-left", window_width / 7);
};

jQuery.fn.resize_table = function () {
  var window_width = $(window).width(); //
  this.css("width", window_width / 1.58);
};

function loop_in_parrent_and_clear() {
  $('#ml_clsid001').find('.invisible_cls').each(function () {
    $(this).css("display", "none");
  });
}


var mouse_over_once = 0;
function mouse_over_table_school() {
  if (mouse_over_once == 0) {
    //say what to do 

  }

  if (mouse_over_once == 0) {
    mouse_over_once = 1; //has already been over the element
  }


}

// I am supposed to use localStorage...so get THIS:
window.onbeforeunload = function () {
    localStorage.setItem('scrollPos', window.scrollY);
};
window.onload = function () {
    scrollTo(0,parseInt(localStorage.getItem('scrollPos')));
};

$(document).ready(function () {

  var initial_logo_form_margin_top = ($("#logo_form").css("margin-top")).split("px")[0];
  var aut_wrapper_str = '<div id = "aut_wrapper"><div style = "display: inline-block;padding-top: 16px;">&copy Created by Reznicencu Bogdan &amp Sergiu</div></div>';


   
  setInterval(function () {
    if (document.getElementById("aut_wrapper") === null) {
      $(aut_wrapper_str).appendTo(".cls01_bot");
    }
    if ($("#aut_wrapper").css("display") === "none") {
      $("#aut_wrapper").css("display", "block");
    }
  }, 5000);

  var panel_content_up_height = $("#panel-content-up").css("height"); // getting the first's panel height and store it in a variable 
  $(".clsid_wrapp_fak").css("height", panel_content_up_height);      // setting the height stored in variable to the fake element

  //$("#logo_form").append('<div id="logo_form_left_border" style = "position: absolute;width: 34%;height: 5px;background-color: rgb(43, 45, 51);bottom: 0;"></div>');
  //effect for background-panel reveal
  setTimeout(function () {
    $("._wt_time_").animate({ opacity: '0' }, 1000);
  }, 1000);
  setTimeout(function () {
    $("._wt_time_").remove();
  }, 3000);


  // Annoucements load

  // Rules:
  //   Ads are composed of a list of small titles on the left navbar of the page
  //   An ad can be 'simple'=>user clicks on the navbar entry and is redicrected
  //                'multiple'=>the ads contains sub-titles.
  //   Ads on the navbar are configured by the rang="P" while sub-ads are configured by rang="S"
  //
  //   If this title should simply redicrect user to a link or page you must use:
  //        multiple: false(there are no sub-ads)
  //        add a single 'dest' entry with type="Page"(if local resource like pdf, html page or image) or "Link" if should go to that link
  //                                       title(shown on the navbar)
  //                                        resource: the actual link(document or url link)
  //                                        rand="P"(P is for ads shown on navbar. S configures the multiple ads shown in the iframe)
  //    If there are sub-ads to be shown:
  //        multiple: true(this enables the use of the rang="S")
  //        add single 'dest' entry with rang="P"(with description above)
  //        add multiple 'dest' entries with rang="S" to be shown as sub-ads
  //      



});


var keep_panel_b = false;
var clsid_temp_val = 0;

function keep_panel() {
  keep_panel_b = true;
  $(".panel_id_selector").css("display", "block");
}

function abort_panel() {
  keep_panel_b = false;
  $(".panel_id_selector").css("display", "none");
  loop_in_parrent_and_clear();                    //clear all the items after leaving the panel
}


function left_on(el, clsid) {
  var width = el.offsetWidth - 1;
  loop_in_parrent_and_clear();                    //clear all the items after leaving the panel
  $(".panel_id_selector").css("display", "block");
  clsid_temp_val = clsid;
  $(".clsid_" + clsid).css("display", "block");


  for (var lx = 0, ly = 0;
    el != null;
    lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);

  $(".panel_id_selector").css("top", ly);
  $(".panel_id_selector").css("left", lx + width);
}

function left_off(el) {
  if (keep_panel_b == false) {
    $(".panel_id_selector").css("display", "none");
  }
}


var __frame_content = '<iframe id = "iframe_content" src = "pages/index_data.html" style = "position:relative;left:0;top:0;width:100%;height:auto;margin:0;overflow:hidden" onload="resizeIframe(this)"> \
              </iframe>';

function resizeIframe(obj) {
  obj.style.height = (obj.contentWindow.document.body.scrollHeight + 50) + 'px';
}
function change_content(page_n) {
  $("#iframe_content").attr('src', "pages/" + page_n + ".html");
  $("iframe_content").remove();
  $(".__node_001_").append(__frame_content);
  $("#iframe_content").css("height", "0px");
}
function Redirect(NewAddr) {
  window.location.href = NewAddr;
}

var window_ebl = false;
function msg_box() {
  this.show = function (message) {
    $("#text_input").append(message);

    $("#info_panel_wnd").css("display", "block");
    $("#blur_panel").css("display", "block");
  };
  this.hide = function () {
    $("#text_input").text(" ");
    $("#info_panel_wnd").css("display", "none");
    $("#blur_panel").css("display", "none");
  };
}

var message_box = new msg_box();
function show_msg_wnd(message_content) {
  window_ebl = !window_ebl;

  if (window_ebl == true) {
    message_box.show(message_content);
  }
  else {
    message_box.hide();
  }
}
$(document).ready(function () {
  $("#ok").click(function () {
    $("#info_panel_wnd").css("display", "none");
    $("#blur_panel").css("display", "none");
    $("#text_input").text("");
    window_ebl = false;
  });
  $("#donate_survey").click(function () {
    show_msg_wnd("Pagina in lucru ... ");
  });

  $("#blur_panel").click(function () {
    $("#info_panel_wnd").css("display", "none");
    $("#blur_panel").css("display", "none");
    $("#text_input").text("");
    $("#user_panel_wnd").css("display", "none");

    window_ebl = false;
  });

  $("#login_button").click(function () {
    $("#user_panel_wnd").css("display", "block");
    $("#blur_panel").css("display", "block");
  });
  $("#cancel_log_in").click(function () {
    $("#user_panel_wnd").css("display", "none");
    $("#blur_panel").css("display", "none");
  });

  $(window).resize(function () {  //handle the resize of the iframe
    $('#iframe_content').height(0);
    $('#iframe_content').height($('#iframe_content').contents().height());
    console.log($(document).width() + " ----- " + $(document).height());
  });
});




//-------------------------------------------------------------------------------------------------

$(window).load(function () {
  var pages = $('#container li'), current = 0;
  var width_p = $(document).width();
  var currentPage, nextPage;
  var timeoutID;
  var buttonClicked = 0;

  $(window).resize(function () {
    width_p = $(document).width();
  });

  var handler1 = function () {
    buttonClicked = 1;
    $('#container .button').unbind('click');
    currentPage = pages.eq(current);
    if ($(this).hasClass('prevButton')) {
      if (current <= 0)
        current = pages.length - 1;
      else
        current = current - 1;
      nextPage = pages.eq(current);

      nextPage.css("marginLeft", -width_p);
      nextPage.show();
      nextPage.animate({ marginLeft: 0 }, 800, function () {
        currentPage.hide();
      });
      currentPage.animate({ marginLeft: width_p }, 800, function () {
        $('#container .button').bind('click', handler1);
      });
    }
    else {

      if (current >= pages.length - 1)
        current = 0;
      else
        current = current + 1;
      nextPage = pages.eq(current);

      nextPage.css("marginLeft", width_p);
      nextPage.show();
      nextPage.animate({ marginLeft: 0 }, 800, function () {
      });
      currentPage.animate({ marginLeft: -width_p }, 800, function () {
        currentPage.hide();
        $('#container .button').bind('click', handler1);
      });
    }
  }

  var handler2 = function () {
    if (buttonClicked == 0) {
      $('#container .button').unbind('click');
      currentPage = pages.eq(current);

      if (current >= pages.length - 1)
        current = 0;
      else
        current = current + 1;
      nextPage = pages.eq(current);
      nextPage.css("marginLeft", width_p);
      nextPage.show();
      nextPage.animate({ marginLeft: 0 }, 800, function () { });

      currentPage.animate({ marginLeft: -width_p }, 800, function () {
        currentPage.hide();
        $('#container .button').bind('click', handler1);
      });

      timeoutID = setTimeout(function () {
        handler2();
      }, 4000);
    }
  }

  $('#container .button').click(function () {
    clearTimeout(timeoutID);
    handler1();
  });

  timeoutID = setTimeout(function () {
    handler2();
  }, 4000);

});




//---------------------------------

$(function () {
  $("#search_subj").autocomplete({
    source: function (req, response) {
      var re = $.ui.autocomplete.escapeRegex(req.term);
      var matcher = new RegExp("^" + re, "i");
      response($.grep(_j_comp_attrb_, function (item) { return matcher.test(item.value); }));
    },
    minLength: 1,
    select: function (event, ui) {
      Redirect("pages/pdf/" + ui.item.value);
    }
  }).data("autocomplete")._renderItem = function (ul, item) {
    return $("<li></li>").data("item.autocomplete", item)
      .append("<img src = '../images/paper.png' width = '20px' height = '20px' style = 'position:relative;display:inline-block;padding-left: 20px;padding-top: 5px;'>" + "<a>" + item.value + "</a>" + "<a style = 'position:absolute;right:20px;display:inline-block;vertical-align:top:padding-top:5px;' >" + item.__last_time__use + "&nbsp" + item.size + "  bits </a>")
      .appendTo(ul);
  };
});


// button click effect code
/*jQuery*/

$(function () {
  var ink, d, x, y;
  $(".left_item").click(function (e) {
    if ($(this).find(".ink").length === 0) {
      $(this).prepend("<span class='ink'></span>");
    }

    ink = $(this).find(".ink");
    ink.removeClass("animate");

    if (!ink.height() && !ink.width()) {
      d = Math.max($(this).outerWidth(), $(this).outerHeight());
      ink.css({ height: d, width: d });
    }

    x = e.pageX - $(this).offset().left - ink.width() / 2;
    y = e.pageY - $(this).offset().top - ink.height() / 2;

    ink.css({ top: y + 'px', left: x + 'px' }).addClass("animate");
  });
});