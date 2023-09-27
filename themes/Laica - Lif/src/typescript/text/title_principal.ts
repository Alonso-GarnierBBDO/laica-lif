

const titlePrincipal = () : void => {

    const title : HTMLElement | null = document.querySelector('.presentation h1');
    let timeAnimation = 100;

    if(title){

        let itemsTitle : NodeListOf<ChildNode> = title.childNodes;

        itemsTitle.forEach( e => {
            if(e.nodeType !== Node.TEXT_NODE){
                const element = e as Element;
                if(element.tagName !== 'BR'){
                    setTimeout(() => {
                        element.classList.add("view");
                    }, timeAnimation);
                    timeAnimation += 80;
                }
            }
        })
        
        // itemsTitle = Array.from(itemsTitle).filter(node => {
        //     return node.nodeType !== Node.TEXT_NODE && node.tagName !== 'BR';
        // });
        
        console.log(itemsTitle[3]);
        

    }

}

export default titlePrincipal;