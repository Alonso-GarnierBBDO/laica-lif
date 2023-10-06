
const backgroundIitems = () => {

    const background : NodeListOf<HTMLElement> | null = document.querySelectorAll('.background_items');

    if(background){

        background.forEach( e =>{
            console.log(e);
        })

    }

    


}

export default backgroundIitems;