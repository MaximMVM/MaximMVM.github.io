var progress = document.getElementById('progress_b');
var max_p = progress.max;
var step = document.getElementById('step');
var id_inc, id_dec;

var changeProgress = function() {
    progress.value += 5;
    id_inc = setInterval('stepProgress()', 40);
    if (step.value == step.max) {
        clearInterval(id_inc);
        id_dec = setInterval('step.value -= 10', 10);
    };
    //var id_dec = setInterval('step.value -= 10', 40);
    if (step.value == 0) clearInterval(id_dec);
    
    //$('#step').css('display', 'none');
    

    
    //
    if (progress.value == progress.max) {
        progress.value = 0;
    }
};

var stepProggres = function() {
    
    
};
