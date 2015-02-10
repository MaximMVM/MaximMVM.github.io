var progress = document.getElementById('progress_b');
var max_p = progress.max;
var step = document.getElementById('step');
var step_t = document.getElementById('step_t');
var crime_twee = document.getElementById("crimes_twee");
var id_inc, id_dec;

if (localStorage["crimes.progress"] == undefined || NaN) localStorage["crimes.progress"] = 0;


var changeProgress = function() {
    progress.value += 2.5;
    step.value = step.max;
    step_t.value = step_t.max;
    localStorage["crimes.progress1"] = progress.value;
    crime_twee.href = 'https://twitter.com/intent/tweet?text=Прокачал свою крымнашесть на  ' + localStorage["crimes.progress"] + progress.value;

    id_dec = setInterval('stepProgress()', 250);
    
    if (progress.value == progress.max) {
        localStorage["crimes.progress1"] = 0;
        localStorage["crimes.progress"] ++;
        progress.value = 0;
    }
    
};

var stepProgress = function() {

    if (step.value == 0) {
        clearInterval(id_dec);
    }
    step.value -= 10; 
 
    step_t.value -= 12;
    
};

$("#rus").bind("tripleclick", function() {
   alert();
});



$('#rus').dblclick(function (){
    $('#link').css('display','none');
    $('#quote').css('color', '#660000');
    $('#quote').text('ВОУ ВОУ, КУДА ТАК СПЕШИШЬ? Полехче. Подожди чуть-чуть, торопыга');
    var trig_l = setInterval('vou()', 40);
        
});

var vou = function(){
    if (step.value == 0) { 
        $('#link').css('display','block');
        $('#quote').css('color','#000');
        clearInterval(this);
    };
    
};





