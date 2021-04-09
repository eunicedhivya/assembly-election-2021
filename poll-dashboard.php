<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assembly Election Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.css">
    <link rel="stylesheet" href="style.css"> 
    <link rel="stylesheet" href="responsive.css">

</head>
<body>
    <div class="tf_wrap pollDash-wrap">
        <header class="dash-header">
            <h2 class="poll-mainhead">Assembly Elections 2021</h2>
            <nav>
                <button class="dashfilters active" data="wb">West Bengal </button>
                <button class="dashfilters" data="as">Assam </button>
                <button class="dashfilters" data="tn">Tamil Nadu</button>
                <button class="dashfilters" data="kl">Kerala</button>
                <button class="dashfilters" data="pd">Puducherry</button>
                <!-- <button class="dashfilters disabled" data="pu">Puducherry</button> -->
            </nav>
        </header>
        <section class="const-carousel">
        </section>
        <div class="split-cand-total">
            <section class="turnout-section">
                <h2 class="can-watchh2">Total Voter Turnout</span></h2>
                <div class="turnout-items">  
                    <h3 id="statename"> <span id="turnout_statename"></span> <span id="updatedWrap"> Updated <span id="updatedTime"></span> </span> </h3>
                    <div class="turnout-content">
                        <div class="battery-chart turnout-2021">
                            <div class="bar"><div class="barlevel" style="background-color: #2A80B9;"></div></div><div class="level" style="color: #2A80B9;"></div></div>
                            <div class="split-2"><div>Total electorate <span id="statetotalelectorate"></span></div><div><h4>Turnout 2016</h4><div class="battery-chart turnout-2016"><div class="bar"><div class="barlevel" style="width:78.9%;background-color:#F59A13;"></div></div><div class="level"></div></div></div></div></div>
                </div>
            </section>
            <section class="const-carousel">
                <h2 class="can-watchh2">Key Candidates</span></h2>
                <div id="poll-carous2" class="owl-carousel"> </div>
            </section>
        </div>
    </div>
	<script type="text/javascript">
	var statename_fixed = 'wb';
	</script>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src='https://thefederal.com/embed/common-js/underscore-min.js' ></script>
    <script src='https://thefederal.com/embed/common-js/d3.v4.min.js' ></script>
    <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>
    <script src='https://d3js.org/topojson.v2.min.js'></script>
    <script src='js/d3-cooltip.0.1.0.min.js'></script>
    <script src="js/map.js"></script>
    <script src="js/owl.carousel.js"></script>
    <script src="js/d3-parliament.js"></script>
    <script src="js/charts/poll-carousel.js"></script>
    <!-- <script src="https://huynhhuynh.github.io/owlcarousel2-filter/dist/owlcarousel2-filter.min.js"></script> -->
    <script src="js/charts/filter.js?v=1825662456"></script>
    <script type="text/javascript">
        pollcarouselWidget('https://thefederal.com/api/scraper.php?m=Election2021&t=constData', "#poll-carous1", "","wb")

        jQuery("nav button.dashfilters").click(function() {
            $('nav button').removeClass('active');
            $(this).addClass('active');
        })

        jQuery(document).ready(function(){
            var wb_poll = null;
            var tot_percent = (function () {
                $.ajax({
                'async': false,
                'global': false, 
                'url': 'https://thefederal.com/api/scraper.php?m=Election2021&t=constData',
                'dataType' : 'json',
                'success': function (data) {
                    wb_poll = data["wb_poll_total"];  
                    console.log(wb_poll);                    
                }
                });
                return wb_poll;
            })();

            $("#turnout_statename").text(wb_poll[0]["statename"])
            $(".turnout-2021 .barlevel").css("width", wb_poll[0]["totalturnout2021"]+"%")
            $(".turnout-2016 .barlevel").css("width", wb_poll[0]["totalturnout2016"]+"%")
            $(".turnout-2021 .level").text(wb_poll[0]["totalturnout2021"]+"%")
            $(".turnout-2016 .level").text(wb_poll[0]["totalturnout2016"]+"%")
            $("#statetotalelectorate").text(wb_poll[0]["totalelectorate"])
            $("#updatedTime").text(wb_poll[0]["timeupdated"])
        })


    </script>

</body>
</html>
