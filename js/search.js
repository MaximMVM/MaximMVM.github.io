$(document).ready(function()
{   
        
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
            $('#quote').append('<span class = "quote_s">' + t1 + ') '+ filtered[t1].replace(qwe, str, 'gi') + '</span> <br>');
            
            
        };
     $('#quote').append('Вхождений ' + filtered.length);
     //selection text

      $('.quote_s').mouseup(function(){
          
      buff = window.getSelection().toString();
  });
      $('.quote_s').click(function(){
        var windowOptions =   'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
         width_t = 550;
         height_t = 420;
         winHeight_t = screen.height;
         winWidth_t = screen.width;
         left = Math.round((winWidth_t / 2) - (width_t / 2));
         top_s = 0;
        if (winHeight_t > height_t) {
          top_s = Math.round((winHeight_t / 2) - (height_t / 2));
        }
        
        var href_win = 'https://twitter.com/intent/tweet?text=' + buff;
        if(buff) {
        
            window.open(href_win, 'intent', windowOptions + ',width=' + width_t +
                                           ',height=' + height_t + ',left=' + left + ',top=' + top_s);
                                           
            window.__twitterIntentHandler = true;
        
         }
    
        
     
        });
     
     
     
 };
 

});
