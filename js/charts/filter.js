jQuery(document).ready(function(){
    
    var all_data, wb_data, as_data, kl_data, pd_data, tn_data;
    var turnout_carous = (function () {
        var turnout_carous = null;
        
        $.ajax({
           'async': false,
           'global': false, 
           'url': 'https://thefederal.com/api/scraper.php?m=Election2021&t=constData',
           'dataType' : 'json',
           'success': function (data) {
                 turnout_carous = data["wb_poll_data"];
                 all_data = data
                
           }
        });
        return turnout_carous;
     })();

    
    var l = turnout_carous.length, find_let, get_state = "wb";
    var alphabetswise = {};
     $(".dashfilters").click(function(){
        $('ul#letters-listing li').removeClass('active');
        $('ul#letters-listing li').css("pointer-events", "auto")
        $('ul#letters-listing li').css("opacity", "1")
        
        find_let = $(this).attr('data');
        console.log("find_let", find_let)
        console.log("all_data", all_data[find_let+"_poll_total"][0])

        $("#turnout_statename").text(all_data[find_let+"_poll_total"][0]["state"])
    //    console.log("find_let", get_state)
       var disable_list = {
            wb: ["A", "F", "H", "I", "L", "O", "Q", "T", "U", "V", "W", "X", "Y", "Z"],
            as: ["E", "F", "H", "I", "O", "P", "Q", "U", "V", "W", "X", "Y", "Z"]
        }

        for(var t=0; t<disable_list[find_let].length; t++){
            // console.log(disable_list[find_let]);
            $("#"+disable_list[find_let][t].toLowerCase()).css("pointer-events", "none")
            $("#"+disable_list[find_let][t].toLowerCase()).css("opacity", "0.3")
        }
    
	   $("#poll-carous1").html('Loading...');
	   pollcarouselWidget('https://thefederal.com/api/scraper.php?m=Election2021&t=constData', "#poll-carous1", "",find_let);
   });
   $("#letters-listing li.clickable").click(function(){
	   find_let = $(this).text();
    //    console.log("find_let", find_let)
	   $("#poll-carous1").html('Loading...');
	   pollcarouselWidget('https://thefederal.com/api/scraper.php?m=Election2021&t=constData', "#poll-carous1", find_let,statename_fixed);
   });
   
});