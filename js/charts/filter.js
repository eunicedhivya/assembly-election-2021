jQuery(document).ready(function(){
    
    var all_data, wb_data, as_data, kl_data, pd_data, tn_data;
    var turnout_carous = (function () {
        var turnout_carous = null;
        
        $.ajax({
           'async': false,
           'global': false, 
           'url': 'https://script.google.com/macros/s/AKfycbzJM3q31Lt3r5mL0U3oZ0pWmobbS-HI3bcFd-pzxrApSTpmXF0ni8-EFlSYQLE6FWgEQA/exec',
           'dataType' : 'json',
           'success': function (data) {
                 turnout_carous = data["wb_poll_data"];
                 all_data = data
                
           }
        });
        return turnout_carous;
     })();

    
    var find_let, get_state = "wb";
    var alphabetswise = {};
     $(".dashfilters").click(function(){
        $('ul#letters-listing li').removeClass('active');
        $('ul#letters-listing li').css("pointer-events", "auto")
        $('ul#letters-listing li').css("opacity", "1")
        
        find_let = $(this).attr('data');
        console.log("find_let", find_let)
        console.log("all_data", all_data[find_let+"_poll_total"][0])

        $("#turnout_statename").text(all_data[find_let+"_poll_total"][0]["statename"])
        $(".turnout-2021 .barlevel").css("width", all_data[find_let+"_poll_total"][0]["totalturnout2021"]+"%")
        $(".turnout-2016 .barlevel").css("width", all_data[find_let+"_poll_total"][0]["totalturnout2016"]+"%")
        $(".turnout-2021 .level").text(all_data[find_let+"_poll_total"][0]["totalturnout2021"]+"%")
        $(".turnout-2016 .level").text(all_data[find_let+"_poll_total"][0]["totalturnout2016"]+"%")
        $("#statetotalelectorate").text(all_data[find_let+"_poll_total"][0]["totalelectorate"])

    
	   $("#poll-carous1").html('Loading...');
	   pollcarouselWidget('https://script.google.com/macros/s/AKfycbzJM3q31Lt3r5mL0U3oZ0pWmobbS-HI3bcFd-pzxrApSTpmXF0ni8-EFlSYQLE6FWgEQA/exec', "#poll-carous1", "",find_let);
   });
   $("#letters-listing li.clickable").click(function(){
	   find_let = $(this).text();
    //    console.log("find_let", find_let)
	   $("#poll-carous1").html('Loading...');
	   pollcarouselWidget('https://script.google.com/macros/s/AKfycbzJM3q31Lt3r5mL0U3oZ0pWmobbS-HI3bcFd-pzxrApSTpmXF0ni8-EFlSYQLE6FWgEQA/exec', "#poll-carous1", find_let,statename_fixed);
   });
   
});