
let provincia;
let canton;
let distrito;

let idProvincia;
let idCanton;

const form = () => {
    const formElements: NodeListOf<HTMLFormElement> | null = document.querySelectorAll('.wpcf7-form.init');
  
    if (formElements) {
      formElements.forEach(async (element: HTMLFormElement) => {

        inicializarElementos(element, 'provincia');
        inicializarElementos(element, 'canton');
        inicializarElementos(element, 'distrito');

        inicializador(element, 'provincia');
  
      });
    }
  };


  function inicializador(element : HTMLFormElement, type: string, id? : string | null){

    const selectItem: HTMLSelectElement | null = element.querySelector(`select[name="${type}"]`);

    if(selectItem){
        if(id){
            setType(selectItem, type, element, id);
        }else{
            setType(selectItem, type, element, null);
        }

        selectItem.onchange = () => {

            const value = selectItem.value;

            let claveEncontrada;

            if(type == 'provincia'){
                claveEncontrada = getKeyByValue(provincia, value);
                idProvincia = claveEncontrada;
                inicializador(element, 'canton', claveEncontrada);
            }else if(type == 'canton'){
                claveEncontrada = getKeyByValue(canton, value);
                idCanton = claveEncontrada;
                inicializador(element, 'distrito', claveEncontrada);
            }

        }
    

    }
  }

   async function setType(element : HTMLSelectElement, type: string, father: HTMLFormElement, id: string | null){

    let url : string = '';
    let response : Response;
    const pagina : string = 'https://ubicaciones.paginasweb.cr/';

    if(element){

        element.innerHTML = '';

        if(type == 'provincia'){
            url = 'provincias.json'; 

        }else if(type == 'canton' && id){
            url = `provincia/${id}/cantones.json`;

            inicializarElementos(father, 'distrito');
            
        }else if(type == 'distrito' && idCanton && idProvincia){
            url = `provincia/${idProvincia}/canton/${idCanton}/distritos.json`;
        }

        const loadinOption = document.createElement('option');
        loadinOption.innerText = 'Cargando...';
        loadinOption.value = ''; // Asignar la clave como valor de opción
        element?.appendChild(loadinOption);


        // Esperamos que el fetch cargue
        response = await fetch(`${pagina}${url}`);

        element.innerHTML = '';

        // Default option

        const defaultOption = document.createElement('option');
        defaultOption.innerText = type;
        defaultOption.value = ''; // Asignar la clave como valor de opción
        element?.appendChild(defaultOption);


        if (response.ok) {
        const data = await response.json();
        
        if(type == 'provincia'){
            provincia = data;
        }else if(type == 'canton'){
            canton = data;
        }

        for (const key in data) {
            if (data.hasOwnProperty(key)) {

                const value = data[key];

                const newOption = document.createElement('option');
                newOption.innerText = value;
                newOption.value = value; // Asignar la clave como valor de opción

                // Agregar la nueva opción al select
                element?.appendChild(newOption);
    

            }
        }
        } else {
            console.error('Error al obtener los datos');
        }

    }

  }

  function inicializarElementos(element : HTMLFormElement, type : string){
    const selectItem: HTMLSelectElement | null = element.querySelector(`select[name="${type}"]`);

    if(selectItem){
        selectItem.innerHTML = '';

        const defaultOption = document.createElement('option');
        defaultOption.innerText = type;
        defaultOption.value = ''; // Asignar la clave como valor de opción
        selectItem.appendChild(defaultOption);

    }

  }

  function getKeyByValue(object: Record<string, string>, value: string): string | undefined {
    return Object.keys(object).find(key => object[key] === value);
  }
  
  
  export default form;
  