
const titlePrincipal = () => {

    const allTitle: NodeListOf<HTMLElement> | null = document.querySelectorAll('.title_fragment');

    if (allTitle) {

        console.log(allTitle);

        allTitle.forEach(title => {
            const titleCotent: string | null = title.textContent;
            const arrayText = titleCotent?.split(" ");
            let newTitle: string = '';

            arrayText?.forEach((word, key) => {
                if (key === 0) {
                    newTitle += `
                    <span class="principal">${word}</span>
                    <br/>
                `;
                } else if (key % 3 === 0) {

                    if (word.length <= 2 && word.length > 0) {
                        newTitle += `<span class="small">${word} </span>`;  
                    } else {
                        newTitle += `<span class="normal">${word} </span>`;
                    }
                    newTitle += `<br/>`;

                } else {

                    if (word.length <= 2 && word.length > 0) {
                        newTitle += `<span class="small">${word} </span>`;
                    } else {
                        newTitle += `<span class="normal">${word} </span>`;
                    }

                }

            })

            title.innerHTML = newTitle;
        });

    }

}

export default titlePrincipal;