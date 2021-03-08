function carouselWidget(datasource, selector){

    $("#owl-demo").owlCarousel({
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
        var content = "";
        for(var i in data["constituencywise"]){
            
            var constituencyname = data["constituencywise"][i].Constituency;
            var leadingname = data["constituencywise"][i]["Leading Candidate"];
            var leadingparty = data["constituencywise"][i]["Leading Party"];
            var leadingmargin = data["constituencywise"][i]["Margin"];
            var trailingname = data["constituencywise"][i]["Trailing Candidate"];
            var trailingparty = data["constituencywise"][i]["Trailing Party"];
            var trailingmargin = data["constituencywise"][i]["Margin"];
    
            html = '<div class="contituency-items">'
            html += '<h3> Tamil Nadu | <span>'+constituencyname+'</span> </h3>'
            html += '<span class="leadingindicator">Leading</span>'
            html += '<div class="leadingcand">'
            html += '<h4>'+leadingname+'<span>'+leadingparty+'</span></h4>'
            html += '<p>'+leadingmargin.toLocaleString('en-IN')+'</p>'
            html += '</div>'
            html += '<span class="trailingindicator">Leading</span>'        
            html += '<div class="trailingcand">'
            html += '<h4>'+trailingname+' <span>'+trailingparty+'</span></h4>'
            html += '<p>'+trailingmargin.toLocaleString('en-IN')+'</p>'
            html += '</div>'
            html += '</div>'
    
            
            content += html
        }
        $(selector).html(content);
    }
}