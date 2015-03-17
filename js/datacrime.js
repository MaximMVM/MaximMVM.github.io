localStorage["backup.progress"] = localStorage["crimes.progress"];
localStorage["backup.progress1"] = localStorage["crimes.progress1"];
var crime_val = document.getElementById('progress_b');
var small_v = document.getElementById('small_value');
var big_val = document.getElementById('crime_val');
var set_win_st = document.getElementById('setting_window');

        if (crime_val.value == 0) {
                crime_val.value = Number(localStorage["crimes.progress1"]);
             };

        

 if (small_v.innerHTML == '0') small_v.innerHTML = localStorage["crimes.progress1"];
 if (big_val.innerHTML == '0') big_val.innerHTML = localStorage["crimes.progress"];
 
 document.addEventListener("visibilitychange", function() {
        
    small_v.innerHTML = localStorage["crimes.progress1"];
    big_val.innerHTML = localStorage["crimes.progress"];
    console.log('перключена вкладка')

    });

 
 $('#close').click(function(){
     $('#setting_window').css('z-index', '0');
     $('#setting_window').fadeOut(250);
     

 });
$('#setting').click(function(){
    if (set_win_st.style.display == 'block') $('#setting_window').fadeOut(250);
    $('#setting_window').css('display', 'block');
    $('#setting_window').css('z-index', '10');
    
    
});
 
 $('#clear_data').click(function(){
        if ((localStorage["crimes.progress1"] && localStorage["crimes.progress1"])!= '0') {
         localStorage["backup.progress"] = localStorage["crimes.progress"];
         localStorage["backup.progress1"] = localStorage["crimes.progress1"];
         localStorage["crimes.progress1"] = 0;
         localStorage["crimes.progress"] = 0;
         progress.value = 0;
     }
         
         $('#crime_val, #small_value').text('0');
     
 });
 
 $("#beckup_data").click(function(){

     localStorage["crimes.progress"]= localStorage["backup.progress"];
     localStorage["crimes.progress1"]= localStorage["backup.progress1"];
     progress.value = localStorage["crimes.progress1"];
     $('#small_value').text(localStorage["crimes.progress1"]);
     $('#crime_val').text(localStorage["crimes.progress"]);
 });
 
 $('#remove_data').click(function(){
    $('#must_no').css('display', 'block');
    $('#overlay').css('display', 'block');
    $('#must_no').css('z-index', '20');
 });
 
 $('#overlay, #close_must_no, #cansel').click(function(){
     $('#must_no').css('display', 'none');
    $('#overlay').css('display', 'none');
     
 });
 $('#ok').click(function() {
     localStorage["backup.progress"] = localStorage["crimes.progress"] = 0;
     localStorage["backup.progress1"] = localStorage["crimes.progress1"] = 0;
     progress.value = 0;
     $('#small_value').text(localStorage["crimes.progress1"]);
     $('#crime_val').text(localStorage["crimes.progress"]);
     //$('#close_must').('Данные удалены, крымнашесть равна нулю');
     //$('#no_remove').hide("slow");
     
     $('#must_no').hide("slow");
     $('#data_cl').show(1000);
     
     setTimeout("$('#overlay, #data_cl').css('display','none');", 1500);
     
     
 });
 
