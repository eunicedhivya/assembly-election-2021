
function pollcarouselWidget(datasource, selector, filter = '', statename){
	statename = typeof statename !== 'undefined' ? statename : 'wb';
	statename_fixed = statename;
	filter = typeof filter !== 'undefined' ? filter : '';
	var filter_const = filter;
	var state_data = statename;
   
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