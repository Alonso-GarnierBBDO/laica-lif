/**
 * En este archivo registramos el nuevo bloque para mostrar las noticias
 */

const { registerBlockType } = wp.blocks;
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import './assets/css/style.css';
import logo from './assets/img/img.svg';

// Registramos el nuevo bloque

registerBlockType("notices-lif/my-block", {
  title: "Noticias Lif",
  icon: "text-page",
  category: "widgets",
  attributes: {
    content: {
        type: "string",
        default: "Sin noticias que mostrar",
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
          `${firstMatchingScript}/wp-json/wp/v2/noticias`
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



    return (
        <>
            <img src={logo} class="img-fluid rounded-top" alt=""/>
        </>
    );
  },

  save: function (props) {

    // Contenido a mostrar en el html

    const { attributes } = props;
    const content = attributes.content;

    return (
        <>
            
        </>
    )


  },
});
