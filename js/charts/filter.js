jQuery(document).ready(function(){
    
    var all_data, wb_data, as_data, kl_data, pd_data, tn_data;
    var turnout_carous = (function () {
        var turnout_carous = null;
        
        $.ajax({
           'async': false,
           'global': false, 
           'url': 'https://script.google.com/macros/s/AKfycbyvz9WiMBlhWSmI7JsuduqkxdEp3J-a_nj4ZGssqSi0v8eCCWw6uYmnFd9553HhqlroOg/exec',
           'dataType' : 'json',
           'success': function (data) {
                 turnout_carous = data["wb_poll_data"];
                 all_data = data
                //  wb_data = data["wb_poll_data"]
                //  as_data = data["as_poll_data"]
                //  kl_data = data["kl_poll_data"]
                //  pd_data = data["pd_poll_data"]
                //  tn_data = data["tn_poll_data"]
           }
        });
        return turnout_carous;
     })();

    wb_data = all_data["wb_poll_data"]
    as_data = all_data["as_poll_data"]
    kl_data = all_data["kl_poll_data"]
    pd_data = all_data["pd_poll_data"]
    tn_data = all_data["tn_poll_data"]

     console.log("all", all_data)
     console.log("wb", wb_data)
     console.log("as", as_data)
     console.log("kl", kl_data)
     console.log("tn", tn_data)
     console.log("pd", pd_data)
    
    var l = turnout_carous.length, find_let, find_state, set_state = "wb";
    var alphabetswise = {};
   $("#letters-listing li.clickable").click(function(){
	   find_let = $(this).text();
       console.log("find_state", find_state)
       console.log("find_let", find_let)
	   $("#poll-carous1").html('Loading...');
	   pollcarouselWidget('https://script.google.com/macros/s/AKfycbyvz9WiMBlhWSmI7JsuduqkxdEp3J-a_nj4ZGssqSi0v8eCCWw6uYmnFd9553HhqlroOg/exec', "#poll-carous1", find_let, find_state);
   });

   $(".dashfilters").click(function(){
    get_state = $(this).data().state;
    set_state = get_state+"_poll_data"
    console.log("find_state", set_state)
    $("#poll-carous1").html('Loading...');
    pollcarouselWidget('https://script.google.com/macros/s/AKfycbyvz9WiMBlhWSmI7JsuduqkxdEp3J-a_nj4ZGssqSi0v8eCCWw6uYmnFd9553HhqlroOg/exec', "#poll-carous1", find_state, set_state);
});
   
    // $("#letters-listing1 li.clickable").click(function(){
    //     var termli = {};
    //     find_let = $(this).text();

    //     for (var j = 0;  j < l; j++) {
    //     var letter =turnout_carous[j].constname.charAt(0).toUpperCase();
    //         if (!alphabetswise[letter]) { alphabetswise[letter] = []; }
    //         alphabetswise[letter].push(turnout_carous[j]);
    //     }
    
    //     // console.log(turnout_carous)

    //     termli = alphabetswise[find_let]
        
    //     // console.log(termli)

    //     $("#poll-carous1 .owl-item").remove()
       

    //     var myColor = d3.scaleSequential()
    //     .domain([0, 100])
    //     .interpolator(d3.interpolateYlGn);

    //     var elements = [];
	// 	var element = '';
    //     const listOfTags =  termli,
    //     keys = ['constname'],
    //     filtered = listOfTags.filter(
    //         (s => o => 
    //             (k => !s.has(k) && s.add(k))
    //             (keys.map(k => o[k]).join('|'))
    //         )
    //         (new Set)
    //     );

    //     termli = filtered;
    //     var numberofitems;

    //     for(var i = 0; i < termli.length ; i++) {
            
    //         numberofitems = termli.length
    //         html = '<div class="owl-item">'
    //         html += '<div class="turnout-items">'
    //         html += '<h3> '+termli[i]["constname"]+'  <span class="turnout-update">Updated 11.20pm</span> </h3>'
    //         html += '<div class="turnout-content">'
    //         html += '<div class="battery-chart turnout-2021">'
    //         html += '<div class="bar">'
    //         html +=  '<div class="barlevel" style="width:'+termli[i]["turnout2021"]+'%;background-color: '+myColor(termli[i]["turnout2021"])+';"></div>'
    //         html +=  '</div>'
    //         html +=  '<div class="level" style="color: '+myColor(termli[i]["turnout2021"])+';">'+termli[i]["turnout2021"]+'%</div>'
    //         html +=  '</div>'        
    //         html +=  '<div class="split-2">'
    //         html +=  '<div>'
    //         html +=  'Total electorate' 
    //         html +=  ' <span>'+termli[i]["totalElectorate"].toLocaleString('en-IN')+'</span>'
    //         html +=  '</div>'
    //         html +=  '<div>'
    //         html +=  '<h4>Turnout 2016</h4>'
    //         html +=  '<div class="battery-chart turnout-2016">'
    //         html +=  '<div class="bar">'
    //         html +=  '<div class="barlevel" style="width:'+termli[i]["turnout2016"]+'%;background-color: red;"></div>'
    //         html +=  '</div>'
    //         html +=  '<div class="level">'+termli[i]["turnout2016"]+'%</div>'
    //         html +=  '</div>'
    //         html +=  '</div>'
    //         html +=  '</div>'
    //         html +=  '</div>'
    //         html +=  '</div>'
    //         html +=  '</div>'
            
    //         element += html
    //     }
    //     elements.push(element);
    //     // console.log(termli)

        

    //     $('#poll-carous1 .owl-wrapper').append(elements);
    //     // var width = $('#poll-carous1 .owl-item').width();
    //     // var wrapWidth = (width * numberofitems);
    //     // console.log(wrapWidth);
    //     // $('#poll-carous1 .owl-wrapper').width(wrapWidth);
 
    // });

    
});