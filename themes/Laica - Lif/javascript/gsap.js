window.addEventListener('load', () => {
    

    let type = 0;
    let scrollTimeout;

    
    window.onscroll = (e) => {

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(()=>{
            
            console.log("Type : " + type);
            console.log("Scroll : " + window.scrollY);

            if(type <= window.scrollY){

                console.log("REalizo el scroll hacia abajo");

            }else{
                console.log("REalizo el scroll hacia arriba")
            }

            type = window.scrollY;

            return;

        }, 100);

    }
      

})