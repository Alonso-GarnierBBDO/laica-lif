/**
 * En este archivo registramos el nuevo bloque para mostrar las noticias
 */

const { registerBlockType } = wp.blocks;
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import './assets/css/style.css';
import logo from './assets/img/img.svg';
import flor from './assets/img/flor.svg';

// Registramos el nuevo bloque

registerBlockType("notices-lif/my-block", {
  title: "Noticias Lif",
  icon: "text-page",
  category: "widgets",
  attributes: {
    content: {
        type: "array",
        default: ["Sin noticias que mostrar"],
    },
  },
  edit: function (props) {

    // Obtenemos la url del home
    const getFirstScript = document.querySelectorAll("script");
    const { attributes, setAttributes } = props;

    // Establecemos el primer slider del site

    let firstMatchingScript = null;

    for (const e of getFirstScript) {
      const work = e.getAttribute("src");
      if (work && work.includes("/wp-includes/")) {
        firstMatchingScript = work.slice(0, work.indexOf("/wp-includes/"));
        break; // Termina el bucle después de encontrar el primer elemento coincidente.
      }
    }

    const [noticias, setNoticias] = useState([]);

    // Obtenemos todos las noticias

    const noticiasFetch = async () => {
      try {
        const response = await fetch(
          `${firstMatchingScript}/?rest_route=/wp/v2/noticias`
        );

        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }

        const jsonData = await response.json();
        setNoticias(jsonData);
        setAttributes({ content: jsonData });
      } catch (err) {
        throw new Error("Error al obtener datos");
      }
    };

    useEffect(() => {
      // Llama a la función para realizar la solicitud fetch cuando el componente se monta
      noticiasFetch();
    }, []);


    // Mostramos un ejemplo de como se vera en el img
    return (
        <>
            <img src={logo} class="img-fluid rounded-top" alt=""/>
        </>
    );
  },

  save: function (props) {

    const { attributes } = props;
    const content = attributes.content || []; // Asegurarse de que content sea una matriz
  
  
    return (
        <>
            <section className="noticias_slider">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {
                            content.map((item, index) => (
                                <li className="glide__slide" key={index}>
                                    <section className="content_slide">
                                        <div className="image" style={{
                                          backgroundImage:  `url(${flor})`
                                        }}>
                                            <img src={item.img} alt="Image slider"/>
                                        </div>
                                        <section className="content_product_slider">
                                            <h3>{ item.titulo }</h3>
                                            <p>{ item.subtitle }</p>
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
  },
});
