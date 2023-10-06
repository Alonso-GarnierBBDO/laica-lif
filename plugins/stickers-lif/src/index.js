
const { registerBlockType } = wp.blocks;
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import preview from '../src/assets/img/preview_stikers.svg';
import arrow from '../src/assets/img/arrow_link.svg';

// Ingresamo el nuevo bloque del slider

registerBlockType('stickers/stikers-lif', {
    title: 'Stickers Lif',
    icon: 'sticky',
    category: 'widgets',
    attributes: {
        content: {
            type: "array",
            default: ["Sin stickers que mostrar"],
        },
    },
    edit(props){
        // Aqui se muestrara en el editor y se guardara los datos en el attibute

        // Obtenemos la url del home
        const getFirstScript = document.querySelectorAll("script");
        let firstMatchingScript = null;

        for (const e of getFirstScript) {
            const work = e.getAttribute("src");
            if (work && work.includes("/wp-includes/")) {
              firstMatchingScript = work.slice(0, work.indexOf("/wp-includes/"));
              break; // Termina el bucle después de encontrar el primer elemento coincidente.
            }
        }

        const { attributes, setAttributes } = props;
        const [stikets, setStikers] = useState([]);

        const stikersFetch = async () => {
            try {
              const response = await fetch(
                `${firstMatchingScript}/wp-json/wp/v2/stickers`
              );
      
              if (!response.ok) {
                throw new Error("La solicitud no fue exitosa");
              }
      
              const jsonData = await response.json();
              setStikers(jsonData);
              setAttributes({ content: jsonData });
            } catch (err) {
              throw new Error("Error al obtener datos");
            }
        };

        useEffect(() => {
            // Llama a la función para realizar la solicitud fetch cuando el componente se monta
            stikersFetch();
        }, []);

        return (
            <>
                <img src={preview} />
            </>
        );

    },
    save(props){

        const { attributes } = props;
        const contentStickers = attributes.content || [];

        return (
            <>
                <section className="sticker_slider">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            {
                                 contentStickers.map((item, index) => (
                                    <li className="glide__slide" key={index}>
                                        <section className="content_slide">
                                            <div className="image">
                                                <img src={item.img} alt="Image slider"/>
                                            </div>
                                            <section className="link">
                                                <div>
                                                    <a href={item.enlace}>
                                                        <img src={arrow} />
                                                    </a>
                                                </div>
                                            </section>
                                        </section>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
            </>
        );
    }
})