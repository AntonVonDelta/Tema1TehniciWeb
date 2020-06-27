<html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css">
    <link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600,700" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Gruppo" />
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Michroma">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Orbitron" />
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Jura" />
    
    <link href="http://fonts.googleapis.com/css?family=Oswald:400,300,700" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="../style/_page_style.css">

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js"></script>
   
    <style type="text/css">
    body , html
    {
      position: relative;
      background-color: #1F1815;
      top: 0;
      margin: 0;
      overflow-x:hidden; 
    } 

    .light_font
    {
      font-family: 'Open Sans', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 15px;
      color: white;
      text-transform: uppercase;
      font-weight: 400;
    }
    .text_align
    {
      display: inline-block;
      vertical-align: top;
      margin: 11px 20px;
    }
    #_title_container_
    {
      position: relative;
      top: 21px;
      margin-left: 3.5%;
      height: 40px;
      width: 50%;
      /*border-bottom: 1px solid rgba(255, 255, 255, 0.43);*/
    }    
    #logo_n
    {
      position: relative;
      background: url("../images/logo_simple.gif");
      background-repeat: no-repeat;
      height:40px;
      width:40px;
      display: inline-block;
      vertical-align: top;
    }
    .nav_title
    {
      position: relative;
      border-bottom: 1px solid rgba(255, 255, 255, 0.43);
      padding: 0 8px 5px;
    }
    ._home_
    {
      position: relative;
    }
    ._scroll_data_wrapper_
    {
      position: relative;
      display: inline-block;
      width: 80%;
      margin-top: 66px;
      text-align: center;
    }

    .scroll_container
    {
      position: relative;
      width: 49%;
      height: 571px;
      width: 100%;
      background-color: transparent;
      display: inline-block;
    }
    ._details_inf
    {
      position: relative;
      display: inline-block;

      vertical-align: top;
    }
    .desc_title
    {
      position: relative;
      display: inline-block;
      width: 200px;
      margin: 0 auto;
      border-bottom: 1px solid white;
      text-align: center;
      text-transform: uppercase;
      font-size: 25px;
      padding-bottom: 6px;
      float:right;
      font-family: 'Open Sans', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      letter-spacing: 2px;
      font-weight: 400;
      color: #fff;
    }
    .desc_
    {
      position: relative;
      width: 70%;
      margin: 0 auto;
      text-align: center;
      font-family: 'Open Sans', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      letter-spacing: 2px;
      font-weight: 400;
      font-size: 14px;
      margin-top: 14px;
      color: #fff;
      margin-bottom: 51px;
    }
    .simple_slider
    {
      position: absolute;
      width: 20%;
      height: 95%;
      overflow-y: scroll;
      overflow-x: hidden;
      background-color: #353131;
      -webkit-overflow-scrolling: touch;
      text-align: center;
      display: inline-block;
      vertical-align: top;
      right: 0;
      top: 0;
      padding-top: 39px;
      /*border-left: 1px solid #F93737;*/
      max-width: 20%;
    }
    .thumb
    {
      text-align: center;
      position: relative;
      display: inline-block;
      /* border: 1px solid #635656; */
      overflow: hidden;
      height: 227px;
      width: 194px;
      max-width: 194px;
      min-width: 194px;
      margin-bottom: 7px;
      border: 1px solid #ddd;
      transition: 0.3s;
    }

    .thumb:hover
    {
      cursor: pointer;
      box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    }
    .thumb img
    {
      position: absolute;
      left: 0;
      top: -25px;
      left: -40px;
      width: 271px;
      max-width: 271px;
      min-width: 271px;
      height: 337px;
    }
    ._cind_pn
    {
      position: absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
      background-color: transparent;
    }
    ._cind_pn:hover p:after
    {
      background-color: rgba(0,0,0,.2);
      font-family: 'Open Sans', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 15px;
      color: white;
      font-weight: 400;
      content: "Press the image to display it  .. ";
    }
    ._cind_pn:hover
    {
      background-color: rgba(0,0,0,.2);
    }
    .desc_panel
    {
      position: absolute;
      width: 99%;
      height: 15%;
      background-color: rgba(31, 24, 21, 0.75);
      margin: 0 auto;
      bottom: 0;
      z-index: 1;
      text-align: center;
      font-family: 'Open Sans', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 15px;
      color: white;
      font-weight: 400;
    }
    </style>

    <script type="text/javascript">
      $(window).load(function(){
          var pages = $('#container li'), current=0;
          var width_p = $(document).width();
          var currentPage,nextPage;
          var timeoutID;
          var buttonClicked=0;
          var name = pages.eq(current).find("img").attr("src");
          var title;

            name = pages.eq(current).find("img").attr("src");
            title=(name.split("../images/album_foto_actual/")[1]).split(".")[0];
            $(".desc_panel span").text(title);

          var handler1=function(){
            buttonClicked=1;
            $('#container .button').unbind('click');
            currentPage= pages.eq(current);
            if($(this).hasClass('prevButton'))
            {
              if (current <= 0)
                current=pages.length-1;
              else
                current=current-1;
              nextPage = pages.eq(current); 

              nextPage.css("marginLeft",-width_p);
              nextPage.show();
              nextPage.animate({ marginLeft: 0 }, 800,function(){
                currentPage.hide();
              });
              currentPage.animate({ marginLeft: width_p }, 800,function(){
                $('#container .button').bind('click',handler1);
              });
            }
            else
            {

              if (current >= pages.length-1)
                current=0;
              else
                current=current+1;
              nextPage = pages.eq(current); 

              nextPage.css("marginLeft",width_p);
              nextPage.show();
              nextPage.animate({ marginLeft: 0 }, 800,function(){
              });
              currentPage.animate({ marginLeft: -width_p }, 800,function(){
                currentPage.hide();
                $('#container .button').bind('click',handler1);
              });
            }   
            name = pages.eq(current).find("img").attr("src");
            title=(name.split("../images/album_foto_actual/")[1]).split(".")[0];

            $(".desc_panel span").text(title);
          }

      var handler2=function(){
            if (buttonClicked==0)
            {
                $('#container .button').unbind('click');
                currentPage= pages.eq(current);

            if (current >= pages.length-1)
              current=0;
            else
            current=current+1;
            nextPage = pages.eq(current); 
            nextPage.css("marginLeft",width_p);
            nextPage.show();


            nextPage.animate({ marginLeft: 0 }, 800,function(){});

            name = pages.eq(current).find("img").attr("src");
            title=(name.split("../images/album_foto_actual/")[1]).split(".")[0];
            $(".desc_panel span").text(title);

            currentPage.animate({ marginLeft: -width_p }, 800,function(){
              currentPage.hide();
                  $('#container .button').bind('click',handler1);
            });

            timeoutID=setTimeout(function(){
                 handler2(); 
              }, 4000);
            }
      }

          $('#container .button').click(function(){
            clearTimeout(timeoutID);
            handler1();
          });

          timeoutID=setTimeout(function(){
            handler2(); 
            }, 4000);

      $(".thumb").click(function(){
         var clicked_image= ($(this).find("img").attr("src"));
         var displayed_image = (pages.eq(current).find("img").attr("src"));

              $('#container li').find('img').each(function()
              {
                  if($(this).attr('src') == clicked_image)
                  {
                      $(this).attr('src' , displayed_image);
                  }
              });

         pages.eq(current).find("img").attr("src", clicked_image);  //change cuurent image 
            name = pages.eq(current).find("img").attr("src");
            title=(name.split("../images/album_foto_actual/")[1]).split(".")[0];
            $(".desc_panel span").text(title);
      });
          
      });
    </script>
  </head>

  <body>
    <div id = "_title_container_">
       <!--<div id = "logo_n"></div>-->
       <div class = "nav_title light_font text_align">Spiru Haret - Album olimpici</div>
      <!--<div class = "desc_title"> Spiru Haret</div>-->
    </div>

    <div class = "_scroll_data_wrapper_">
              <div class = "_details_inf">
                   <div class = "desc_">
                     Colegiul Dobrogean Spiru Haret este unul dintre cele mai bune colegii din judet in care sunt instruiti zilnic elevi de elita in sali si laboratoare corespunzatoare ...
                   </div>
              </div>
            <div class = "scroll_container">
                <!-- -->
                    <div id="container">
                      <div class="button_container" style="left:0"><span class="button prevButton"></span></div>
                      <div class = "desc_panel" ><br><br><span>fffffffffffffff</span></div>
                        <ul>
                          <?php 
                          $images = glob("../images/album_foto_actual/*.{gif,jpg,png}", GLOB_BRACE);
                          for ( $counter = 1; $counter < sizeof($images); $counter ++) {
                                echo 
                                "
                                <li style='text-align:center'>
                                  <img src = '".$images[$counter]."' height = '600' />
                                </li>
                                ";
                          }
                        ?>
                           </ul>
                      <div class="button_container" style="right:0"><span class="button nextButton"></span></div>
                    </div>
                <!-- -->
            </div>
    </div>
           <div class = "simple_slider" >
            <?php 
            $images = glob("../images/album_foto_actual/*.{gif,jpg,png}", GLOB_BRACE);
            for ( $counter = 1; $counter < sizeof($images); $counter ++) {
                      echo 
                            "
                          <div class = 'thumb'>
                            <img src = '".$images[$counter]."'  />

                            <div class = '_cind_pn' ><p></p></div>
                          </div>
                      ";
            }
          ?>
           </div>
  </body>
</html>



