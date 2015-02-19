   var mic_b = document.getElementById('web-speech');
    var result_s = document.getElementById('search_f');
  if (!('webkitSpeechRecognition' in window)) {
    mic_b.style.display = 'none';
    }
  else {
    var voice = new webkitSpeechRecognition();
    voice.lang - 'ru';
    voice.continuous = true;
    voice.interimResults = true;
    recognizing = false;
    final_transcript = '';
    
    
    
    voice.onstart = function(){
        recognizing = true;
        result_s.placeholder = 'распознавание...';
        mic_b.src = 'img/mic.gif';
        
    };
    
    voice.onerror = function(event) {
      if (event.error == 'no-speech'){
          result_s.placeholder = 'нихуя не слышно, блять!';
          mic_b.src = 'img/mic.png';
      };
      if (event.error == 'audio-capture'){
          mic_b.src = 'img/mic.png';
          result_s.placeholder = 'микрофон включи, блять!';
      }; 
        
        
    };
    
    voice.onend = function() {
 	recognizing = false;
    result_s.placeholder = 'распознавание окончено';
    final_transcript = '';
    setTimeout("result_s.placeholder = ''", 2000);
    mic_b.src = 'img/mic.png';
   };
   
   voice.onresult = function(event) {
        result_s.value = '';
        result_s.placeholder = '';
        var command_s, buff;
        var interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
		
		/* конечный результат */
      	if (event.results[i].isFinal) {
        	final_transcript += event.results[i][0].transcript;
            buff = event.results[i][0].transcript;
            command_s = buff.indexOf('крым');
             if(command_s != -1) ion.sound.play('our');
            
     	 }
         else { /*промежуточный */
        	interim_transcript += event.results[i][0].transcript;
    	 }
         
      }
      
      result_s.placeholder = interim_transcript;
      result_s.value = final_transcript;
      $.fn.searchQuote();
      nterim_transcript = '';
      

       
   };
   
   
   
   
    
 var startButton = function(event) {
            
    if (recognizing) {
    voice.stop();
    return;
  }
  result_s.value = '';
  voice.start();
       
   }; 
 } 
