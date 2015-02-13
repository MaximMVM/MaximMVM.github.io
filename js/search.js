$(document).ready(function(){



$('#search_f').keydown(function(event){
    if(event.keyCode==13) $.fn.searchQuote();
});


 $.fn.searchQuote = function() {
     qwe = $('#search_f').val();
     
        var e;
        var searchQuote1 = function(e) {
            var qwe1 = qwe;
            regex =  new RegExp("(.*?)" + qwe +"(.*?)", 'ig');
            //var result;
            return !e.search(regex);
        };
        
        $('#quote').text(null);    
        var filtered = x.filter(searchQuote1);
        console.log(filtered);
        //$('#quote').prepend('Вхождений ' + filtered.length +'<br>');
        
        for (var t1 in filtered){
            
            $('#quote').append('<span class = "small_reg">' + filtered[t1].replace(regex, '<span class = "reg">'+qwe+'</span>') + '<br> </span>');
            $('#quote').append(t1+') ' + filtered[t1] + '<br>');
            
        };
     $('#quote').append('Вхождений ' + filtered.length);
     
     //$('#quote').text('Вхождений ' + filtered.length + '\n' + filtered[0]);
     //$('#quote').text(filtered);
 };
 















});
