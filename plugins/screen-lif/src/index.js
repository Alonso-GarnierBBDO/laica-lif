/**
 * En este archivo registramos el nuevo bloque para mostrar las screens
 */

const { registerBlockType } = wp.blocks;
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import "./assets/css/style.css";
import arrow from "./assets/img/arrow_link.svg";
import screen from "./assets/img/screen_plugin.svg";
import React from "react";

// Registramos el nuevo bloque

registerBlockType("screens-lif/my-block", {
  title: "Fondos de pantalla - Lif",
  icon: "screenoptions",
  category: "widgets",
  attributes: {
    content: {
      type: "array",
      default: ["Sin screens que mostrar"],
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

    const [screens, setScreens] = useState([]);

    // Obtenemos todos las screens

    const noticiasFetch = async () => {
      try {
        const response = await fetch(
          `${firstMatchingScript}/?rest_route=/wp/v2/pantallas`
        );

        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }

        const jsonData = await response.json();
        setScreens(jsonData);
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
        <img src={screen} class="img-fluid rounded-top" alt="" />
      </>
    );
  },

  save: function (props) {
    const { attributes } = props;
    const contentFondos = attributes.content || []; // Asegurarse de que content sea una matriz

    return (
      <>
        <section className="screen_slider_content">
          <div className="glide__track" data-glide-el="track">
            <section className="allButtons">
              <button type="tablet" class="tablet active">
                <svg
                  width="34"
                  height="46"
                  viewBox="0 0 34 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.28006 45.0467H28.1548C31.6579 45.0467 33.9348 42.8475 33.9348 39.4612V5.89014C33.9348 2.5233 31.6579 0.304688 28.1548 0.304688H6.28006C2.77699 0.304688 0.5 2.5233 0.5 5.89014V39.4612C0.5 42.8475 2.77699 45.0467 6.28006 45.0467ZM6.80552 41.2322C5.20968 41.2322 4.31445 40.3564 4.31445 38.8385V6.51291C4.31445 4.99491 5.20968 4.11914 6.80552 4.11914H27.6488C29.2446 4.11914 30.1204 4.99491 30.1204 6.51291V38.8385C30.1204 40.3564 29.2446 41.2322 27.6488 41.2322H6.80552ZM9.43283 11.8064C10.7951 11.8064 11.9823 10.6193 11.9823 9.17913C11.9823 7.7779 10.7951 6.61021 9.43283 6.61021C7.97321 6.61021 6.80552 7.7779 6.80552 9.17913C6.80552 10.6193 7.97321 11.8064 9.43283 11.8064Z"
                    fill="#FFFDD7"
                  />
                </svg>
              </button>

              <button type="escritorio" class="escritorio">
                <svg
                  width="46"
                  height="38"
                  viewBox="0 0 46 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.32299 31.5492H40.6963C43.8749 31.5492 45.5796 29.8197 45.5796 26.577V5.82371C45.5796 2.58101 43.8749 0.851562 40.6963 0.851562H5.32299C2.12661 0.851562 0.421875 2.58101 0.421875 5.82371V26.577C0.421875 29.8197 2.12661 31.5492 5.32299 31.5492ZM5.51833 28.1083C4.38184 28.1083 3.81359 27.5498 3.81359 26.3789V6.02188C3.81359 4.8509 4.38184 4.29243 5.51833 4.29243H40.4832C41.6197 4.29243 42.1879 4.8509 42.1879 6.02188V26.3789C42.1879 27.5498 41.6197 28.1083 40.4832 28.1083H5.51833ZM23.862 23.3704C24.1994 23.3704 24.448 23.1181 24.519 22.7759C25.4602 17.4975 25.9752 16.5427 31.338 15.8221C31.7109 15.768 31.9595 15.4978 31.9595 15.1375C31.9595 14.7772 31.7109 14.507 31.338 14.4529C26.0107 13.7323 25.3181 12.7235 24.519 7.53514C24.4658 7.17484 24.1994 6.92263 23.862 6.92263C23.5069 6.92263 23.2405 7.15682 23.1695 7.51713C22.2461 12.7955 21.7133 13.7143 16.3683 14.4529C15.9954 14.507 15.7468 14.7772 15.7468 15.1375C15.7468 15.4978 15.9954 15.75 16.3683 15.8221C21.6956 16.4346 22.3881 17.4794 23.1695 22.7578C23.2405 23.1181 23.4891 23.3704 23.862 23.3704ZM16.8122 26.2888C17.0608 26.2888 17.2562 26.1267 17.3094 25.8564C17.7711 23.2623 17.6291 23.1542 20.417 22.7038C20.6834 22.6678 20.8432 22.4516 20.8432 22.1994C20.8432 21.9472 20.6656 21.731 20.417 21.695C17.6291 21.2446 17.7711 21.1365 17.3094 18.5784C17.2562 18.3081 17.0786 18.11 16.8122 18.11C16.5458 18.11 16.3683 18.2901 16.2972 18.5784C15.8178 21.1185 15.9954 21.2085 13.1896 21.695C12.9233 21.731 12.7635 21.9472 12.7635 22.1994C12.7635 22.4876 12.9233 22.6678 13.2429 22.7038C15.9954 23.1362 15.8178 23.2443 16.2972 25.8204C16.3683 26.1086 16.5281 26.2888 16.8122 26.2888ZM13.9177 37.8364H32.0838C32.9717 37.8364 33.6998 37.0978 33.6998 36.2151C33.6998 35.3143 32.9717 34.5757 32.0838 34.5757H13.9177C13.0298 34.5757 12.3195 35.3143 12.3195 36.2151C12.3195 37.0978 13.0298 37.8364 13.9177 37.8364Z"
                    fill="#FFFDD7"
                  />
                </svg>
              </button>

              <button type="mobile" class="mobile">
                <svg
                  width="29"
                  height="47"
                  viewBox="0 0 29 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.81362 46.2821H22.8505C26.3191 46.2821 28.6246 43.9825 28.6246 40.5642V6.67104C28.6246 3.25272 26.3191 0.953125 22.8505 0.953125H6.81362C3.30427 0.953125 0.9375 3.25272 0.9375 6.67104V40.5642C0.9375 43.9825 3.30427 46.2821 6.81362 46.2821ZM7.48692 42.118C5.87507 42.118 4.93652 41.2064 4.93652 39.6319V7.60331C4.93652 6.02881 5.87507 5.13797 7.48692 5.13797H22.0956C23.7074 5.13797 24.646 6.02881 24.646 7.60331V39.6319C24.646 41.2064 23.7074 42.118 22.0956 42.118H18.0966V41.3929C18.0966 40.4813 17.5049 39.8805 16.6275 39.8805H12.9754C12.0776 39.8805 11.5063 40.4813 11.5063 41.3929V42.118H7.48692Z"
                    fill="#FFFDD7"
                  />
                </svg>
              </button>
            </section>

            <div className="itemsScreen screen_slider_content_defined tablet">
              <div className="height">
                <div className="position">
                  <div className="glide__track tablet" data-glide-el="track">
                    <ul className="glide__slides">
                      {contentFondos
                        .filter((item) => item.fondo === "tablet")
                        .map((item, index) => (
                          <li className="glide__slide" key={index}>
                            <section className="content_slide">
                              <div className="image">
                                <img src={item.img} alt="Image slider" />
                              </div>
                              <section className="link">
                                <div>
                                  <a href={item.img}>
                                    <img src={arrow} />
                                  </a>
                                </div>
                              </section>
                            </section>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="itemsScreen screen_slider_content_defined escritorio">
              <div className="height">
                <div className="position">
                  <div
                    className="glide__track computadora"
                    data-glide-el="track"
                  >
                    <ul className="glide__slides">
                      {contentFondos
                        .filter((item) => item.fondo === "computadora")
                        .map((item, index) => (
                          <li className="glide__slide" key={index}>
                            <section className="content_slide">
                              <div className="image">
                                <img src={item.img} alt="Image slider" />
                              </div>
                              <section className="link">
                                <div>
                                  <a href={item.img}>
                                    <img src={arrow} />
                                  </a>
                                </div>
                              </section>
                            </section>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="itemsScreen screen_slider_content_defined mobile">
              <div className="height">
                <div className="position">
                  <div className="glide__track movil" data-glide-el="track">
                    <ul className="glide__slides">
                      {contentFondos
                        .filter((item) => item.fondo === "movil")
                        .map((item, index) => (
                          <li className="glide__slide" key={index}>
                            <section className="content_slide">
                              <div className="image">
                                <img src={item.img} alt="Image slider" />
                              </div>
                              <section className="link">
                                <div>
                                  <a href={item.img}>
                                    <img src={arrow} />
                                  </a>
                                </div>
                              </section>
                            </section>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  },
});
