 document.querySelector("#top").addEventListener("click",function(){
                    window.scrollTo(0,0);

                if(speechSynthesis){
                var vls = new SpeechSynthesisUtterance();
                vls.language="en-us";
                vls.text="Backed top your website";
                vls.volume=1;
                vls.rate=0.67;
                vls.pitch=1;
                window.speechSynthesis.speak(vls);
                }
              });
 

             function displayShow(x){
                var test = x.getAttribute("id");
                if(test == 'iconSlide'){
                    console.log(test);
                    document.querySelector("#leftPopupBox").style.display = "none";
                    document.querySelector("#popupBox").style.display = "inline-block"; 
                }else if(test =='thDots'){
                    document.querySelector("#popupBox").style.display = "none"; 
                    document.querySelector("#leftPopupBox").style.display = "inline-block";
                }else{
                    x.style.display = "inline-block";
                }
             }
             document.querySelector("#bodyEvent").addEventListener('mouseover',function(){
                    event.stopPropagation;
                    document.querySelector("#leftPopupBox").style.display = "none"; 
                    document.querySelector("#popupBox").style.display = "none"; 
                },true);
             



            var arr=["d1","img2","img3","img4","img5","img6","img7","img8","img9"],i=0;
            function slideMove(data){ 
               var getAtt = data.getAttribute("class");   
               if(getAtt == "next"){
                    i++;                  
               }else{
                  i--;
               }if(i<0){
                  i = (arr.length-1);
               }else if(i == arr.length){
                  i = 0;
               }  
               document.querySelector(".slideImage").src = arr[i]+".webp";
            }

            window.setInterval('slideAuto()',3000);
            function slideAuto(){ 
                  i++;
                  if(i == arr.length){
                    i = 0;
               }
               document.querySelector(".slideImage").src = arr[i]+".webp";
             };
