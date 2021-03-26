
function pollcarouselWidget(datasource, selector, filter = '', statename){
	statename = typeof statename !== 'undefined' ? statename : 'wb';
	statename_fixed = statename;
	filter = typeof filter !== 'undefined' ? filter : '';
	var filter_const = filter;
	var state_data = statename;
    $("#poll-carous1").owlCarousel({
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        pagination: true,
        navigation : true,
        navigationText : ['<i class="arrow left"></i>','<i class="arrow right"></i>'],
        jsonPath : datasource,
        jsonSuccess : customDataSuccess
    });
    
    function customDataSuccess(data){
        var myColor =  d3.scaleLinear()
            .domain([1, 100])
            .interpolate(d3.interpolateHcl)
            .range([d3.hcl('#b1afb0'), d3.hcl('#32cd3f')])

        var content = "";
		var matchingletter;
		var statn = statename+"_poll_data"; 
        // console.log("Statename:"+statename);
        for(var i in data[statn]){
			var constname = data[statn][i]["constname"];
            var turnout2021 = data[statn][i]["turnout2021"];
            var turnout2016 = data[statn][i]["turnout2016"];
            var totalElectorate = data[statn][i]["totalElectorate"];
            //  console.log(filter_const);
            
            //if((filter_const != "wb_poll_data") ) { 
                if(filter_const != ''){
                    console.log('here');
				var matchingletter = constname.charAt(0).toUpperCase();
				if(matchingletter != filter_const) {
					continue;
				}
                }
			//}
            

            html = '<div class="turnout-items">'
            html += '<h3> '+constname+'  <span class="turnout-update">Updated 11.20pm</span> </h3>'
            html += '<div class="turnout-content">'
            html += '<div class="battery-chart turnout-2021">'
            html += '<div class="bar">'
            html +=  '<div class="barlevel" style="width:'+turnout2021+'%;background-color: '+myColor(turnout2021)+';"></div>'
            html +=  '</div>'
            html +=  '<div class="level" style="color: '+myColor(turnout2021)+';">'+turnout2021+'%</div>'
            html +=  '</div>'        
            html +=  '<div class="split-2">'
            html +=  '<div>'
            html +=  'Total electorate' 
            html +=  ' <span>'+totalElectorate.toLocaleString('en-IN')+'</span>'
            html +=  '</div>'
            html +=  '<div>'
            html +=  '<h4>Turnout 2016</h4>'
            html +=  '<div class="battery-chart turnout-2016">'
            html +=  '<div class="bar">'
            html +=  '<div class="barlevel" style="width:'+turnout2016+'%;background-color: red;"></div>'
            html +=  '</div>'
            html +=  '<div class="level">'+turnout2016+'%</div>'
            html +=  '</div>'
            html +=  '</div>'
            html +=  '</div>'
            html +=  '</div>'
            html +=  '</div>'

            content += html
			//break;
        }
        $("#poll-carous1").html(content);
    }


    $("#poll-carous2").owlCarousel({
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        pagination: true,
        navigation : true,
        navigationText : ['<i class="arrow left"></i>','<i class="arrow right"></i>'],
        jsonPath : 'keycandidate-data.json',
        jsonSuccess : customDataSuccess1
    });

    function customDataSuccess1(data) {
            var cand = "";
            var statn = statename+"-keycandidate"; 
            // console.log("Statename:"+statename);
                for(var j in data[statn]){
                    
                    var phase = data[statn][j].phase;
                    var keyconstno = data[statn][j].constno;
                    var keyconstname = data[statn][j].constname;
                    var keycandidatename = data[statn][j].candidatename;
                    var keycandidateparty = data[statn][j].candidateparty
                    var keycandidateage = data[statn][j].age
                    var keycandidateedu = data[statn][j].education
                    var keycandidatenet2016 = data[statn][j].networth2016
                    var keycandidatenet2021 = data[statn][j].networth2021
                    var keyliabilities = data[statn][j].liabilities
                    var keycriminals = data[statn][j].criminalcases

                    html = '<div class="poll-candidate-items">'
                    html += '<img src="img/'+statename+"-keycandidates/"+keycandidatename.replace(/\s/g, "")+'.png" alt="">'
                    html += '<div class="cand-info">'
                    html += '<h4>'+keycandidatename+'<span class="keycand-age"> ('+keycandidateage+') </span>'+'<span>'+keycandidateparty+'</span></h4>'
                    html += '<p class="cand-cont">'+keyconstname+'</p>'
                    html += '<hr>'
                    html += '<ul class="cand-meta">'
                    html += '<li>Education <span>'+keycandidateedu+'</span></li>'
                    html += '<li>Networth <span>'+keycandidatenet2021+'</span></li>'
                    html += '<li>Networth (2016) <span>'+keycandidatenet2016+'</span></li>'
                    html += '</ul>'
                    html += '<hr>'
                    html += '<ul class="cand-meta" >'
                    html += '<li>liabilities <span>'+keyliabilities+'</span></li>'
                    html += '<li>Criminal cases <span>'+keycriminals+'</span></li>'
                    html += '</ul>'
                    html += '</div>'
                    html += '</div>'

                    
                    cand += html
            }
            $("#poll-carous2").html(cand);
        }
}