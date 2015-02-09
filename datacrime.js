var crime_val = document.getElementById('progress_b');
var small_v = document.getElementById('small_value');
var big_val = document.getElementById('crime_val');
        if (crime_val.value == 0) {
                crime_val.value = localStorage["crimes.progress1"];
             };

        

 if (small_v.innerHTML == '0') small_v.innerHTML = localStorage["crimes.progress1"];
 if (big_val.innerHTML == '0') big_val.innerHTML = localStorage["crimes.progress"];
 
 $('#clear_data').click(function(){
         localStorage["crimes.progress1"] = 0;
         localStorage["crimes.progress"] = 0;
         alert();
     
 });
