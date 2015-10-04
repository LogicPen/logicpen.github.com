
function myStartAni() {
    var myContainer = document.getElementById('mainHolder');
    myContainer.style.display = "block";
    
    var topBut = document.getElementById('topBut');
    var ease = Power4.easeInOut;
    var tl1 = new TimelineLite();
    var tl2 = new TimelineLite();
    var tl3 = new TimelineLite();
    var tl4 = new TimelineLite({onComplete:resetAnm});
    
    var repeateCounter = 0;
    
    myFrame0();
    
    function myFrame0() {
        tl1.to( '#bonzai-hero', 0, { transform:"translate(-900px,291px) scale(1.5,1.5) rotate(0deg)" } )
        .to(myContainer, .5, {delay:.25, opacity: 1,ease: Cubic.easeOut});
    
        tl2.to( '#bonzai-hero', 10, { transform: "translate(-45px,285px) scale(0.60,0.60) rotate(0deg)", delay:0.5, ease:Power4.easeOut });
        
        tl3.from( myHead1_0, 1,  { opacity:1, delay:0, ease:ease } )
            .to( myHead1_1, 2.5, { opacity:1, ease:ease }, '-=1')         
            .to( myHead1_2, 2.5, { opacity:1, ease:ease }, '-=2.2' )
            .to( myHead1_3, 2.5, { opacity:1, ease:ease }, '-=2.2' )
            .to( myHead1_4, 2.5, { opacity:1, ease:ease }, '-=2.2' )
            
            .to( myHead1_4, 2.5, { opacity:0, ease:ease }, '3.2')
            .to( myHead1_3, 2.5, { opacity:0, ease:ease }, '3.2')
            .to( myHead1_2, 2.5, { opacity:0, ease:ease }, '3.2')
            .to( myHead1_1, 2.5, { opacity:0, ease:ease }, '3.2')
            .to( myHead1_0, 2.5, { opacity:0, ease:ease }, '3.2');
        
                       
        tl4.to( myHead2_0, 2.5,  { opacity:1, delay:3.75, ease:ease } )
            .to( myHead2_1, 2.5, { opacity:1, ease:ease }, '-=2.2' )
            .to( myHead2_2, 2.5, { opacity:1, ease:ease }, '-=2.2' )
            .to( ctaCont, 2.5,   { opacity:1, ease:ease, onComplete:function(){
                topBut.addEventListener('mouseover', myRollOver, false);
                topBut.addEventListener('mouseout', myRollOut, false);
            } }, '-=2.2' )
            .to( myHead2_3, 2.5, { opacity:1, ease:ease }, '-=2.2' )
            .to( myHead2_4, 2.5, { opacity:1, ease:ease }, '-=2.5' )
            .to( myHead2_5, 2.5, { opacity:1, ease:ease}, '-=2.5' );
        
        
    }
    
    
    function resetAnm(){
        repeateCounter++;
        
        if(repeateCounter < 3){
            tl1.restart();
            tl2.restart();
            tl3.restart();
            tl4.restart();

            tl1.clear();
            tl2.clear();
            tl3.clear();
            tl4.clear();

            TweenLite.to( myHead1_0, 0.1, { opacity:1, ease:ease });
            TweenLite.to( myHead1_4, 0.1, { opacity:0, ease:ease });

            console.log(repeateCounter);

            myFrame0();
        }
    }
    
    function myRollOver(){
        TweenLite.to( ctaCont,  .1, { backgroundColor:"#ffac47", ease:ease } );
    }
    
    function myRollOut(){
        TweenLite.to( ctaCont,  .1, { backgroundColor:"#f6831f", ease:ease } );
    }
    
    function loopAnimation(){
        
    }
    
}//end myStartAni


// Bannner Looping 3 Times :)

// function loopBanner(containerId,bannerDuration,loopCount){

//         var interval = setInterval(loopIt,bannerDuration);
//         var loop = 0;

//         function loopIt(){
//             if(loop >= loopCount){
//                 clearInterval(interval);
//                 return;
//             }
//             loop++;
//             var mainHolder = document.getElementById(containerId);
//             var tmp = mainHolder.innerHTML;
//             mainHolder.innerHTML = tmp;
//         }
//     }

// loopBanner('mainHolder',6666,2);



