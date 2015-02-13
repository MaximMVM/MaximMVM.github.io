$(document).ready(function(){



$('#search_f').keydown(function(event){
    if(event.keyCode==13) $.fn.searchQuote();
});


 $.fn.searchQuote = function() {
     qwe = $('#search_f').val();
     
        var e;
        var searchQuote1 = function(e) {
            var qwe1 = qwe;
            regex =  new RegExp("(.*?)" + qwe +"(.*?)", 'mig');

            return !e.search(regex);
        };
        
        $('#quote').text(null);    
        var filtered = x.filter(searchQuote1);
        console.log(filtered);
        
        for (var t1 in filtered){
             var str = '<span class = "reg">'+ qwe +'</span>';
            $('#quote').append('<br>' + t1 + ') '+ filtered[t1].replace(qwe, str, 'gi') + ' <br>');
            
            
        };
     $('#quote').append('Вхождений ' + filtered.length);
     
     
 };
 















});
