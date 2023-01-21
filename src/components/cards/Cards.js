import React from "react";

import { Card } from "./card/Card";

export const Cards = () => {
  return (
    <div className="container">
      <div className="text-center mt-5 title">
        <h1 className="h1-title">Våra smaker</h1>
      </div>
      <p className="text-center title-under-text">
        Kings Nordic finns i olika varianter av fruktsorter, mentol, godis eller
        tobak. Välj din egna favorit bland 15 st olika smaker.
      </p>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div
            id="regularHeadingFirst"
            className="read-more-button text-center"
          >
            <a
              className="collapse-btn"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Specifikation & Ingredienser
            </a>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="collapse mt-5" id="collapseExample">
        <div className="row">
          <div className="title_lines text-center spec-ing">
            Specifikation & Ingredienser
          </div>
          <div className="col-md-6 mt-3">
            <h1 className="under-rubrik text-center">
              Nordic Kings Engångs E-Cigg specifikation
            </h1>
            <div className="mt-3 text-center">
              <p>
                <span className="taste-span">Nicotine:</span>20mg salt
              </p>
              <p>
                <span className="taste-span">Battery capacity:</span>550mAh
              </p>
              <p>
                <span className="taste-span">E-juice capacity:</span>2ml
              </p>
              <p>
                <span className="taste-span">Resistance:</span>1.8ohm
              </p>
              <p>
                <span className="taste-span">Voltage:</span>3.7V
              </p>
              <p>
                <span className="taste-span">Weight:</span>20g
              </p>
              <p>
                <span className="taste-span"> E-juice mix:</span>50/50 PG/VG
              </p>
              <p>
                <span className="taste-span"> Puffs:</span> Aprox 800
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <h1 className="under-rubrik text-center">Ingredients</h1>

            <div className="mt-3 text-center">
              <p>Vegetable</p>
              <p> glycerin</p>
              <p>propylene glycol</p>
              <p> nicotine</p>
              <p>benzoic acid</p>
              <p>flavourings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <Card
          imgUrl={"lush-ice"}
          title={"Lush Ice"}
          descripton={"Smak av vattenmelon med cooling."}
        />
        <Card
          imgUrl={"apple-ice"}
          title={"Apple Ice"}
          descripton={"En smak av grönt äpple med cooling."}
        />

        <Card
          imgUrl={"strawberry-ly"}
          title={"Strawberry Lychee"}
          descripton={
            "Har en smak av tropisk litchifrukt tillsammans med jordgubbar."
          }
        />
        <Card
          imgUrl={"blueberry-raspberry"}
          title={"Blueberry Raspberry"}
          descripton={"Är en bärmix med blåbär tillsammans med hallon."}
        />
        <Card
          imgUrl={"ice-mango"}
          title={"Ice Mango"}
          descripton={
            "Exotisk smak av mango tillsammans med sval mentol-eftersmak."
          }
        />
        <Card
          imgUrl={"cool-mint"}
          title={"Cool Mint"}
          descripton={"Svalkande mintvape med klassiskt kylig mint."}
        />
        <Card
          imgUrl={"ice-cola"}
          title={"Ice Cola"}
          descripton={"Uppfriskande smak av coladryck med kylning."}
        />
        <Card
          imgUrl={"strawberry-apple"}
          title={"Strawberry Apple"}
          descripton={"Ger dig en blandning av färska äpplen och jordgubbar."}
        />
        <Card
          imgUrl={"guava-ice"}
          title={"Guava Ice"}
          descripton={"Tropisk fruktsmak i form av Guava med kylning."}
        />
        <Card
          imgUrl={"blood-orange"}
          title={"Blood Orange"}
          descripton={"Fruktig smak i form av färsk blodapelsin."}
        />
        <Card
          imgUrl={"grape-paradise"}
          title={"Grape Paradise"}
          descripton={"Levererar en smak av färska vindruvor."}
        />
        <Card
          imgUrl={"pure-tobacco"}
          title={"Pure Tobacco"}
          descripton={"Autentisk smak av cigaretter."}
        />
        <Card
          imgUrl={"cocktail"}
          title={"Cocktail"}
          descripton={"Här har vi en fruktig Cocktal-dryck."}
        />
        <Card
          imgUrl={"pure-tobacco"}
          title={"Hitta bild"}
          descripton={"Smak av grapefruit och jordgubbar."}
        />
        <Card
          imgUrl={"peach-ice"}
          title={"Peach Ice"}
          descripton={"Smak av söt persika med cooling."}
        />
      </div>

      {/* <div className='row'>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={iceMango} alt="Card image" />
                        <div className="card-image-overlay">
                           
                            <p className="card-text text-center">Smak av vattenmelon med cooling.</p>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={lush} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image"></h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={cola} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image">Jo</h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={guavaIce} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image">Jo</h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={bloodOrange} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image">Jo</h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={grapeParadise} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image">Jo</h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={pureTobacco} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image">Jo</h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={peachIce} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image">Jo</h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={apple} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image">Jo</h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={strawberryLychee} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image">Jo</h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={blueberryRaspberry} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image">Jo</h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={strawberryApple} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image">Jo</h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={cocktail} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image">Jo</h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <image className="card-image-top" src={mint} alt="Card image" />
                        <div className="card-image-overlay">
                            <h4 className="card-image">Jo</h4>
                            <h2 className="card-text text-center">Some example text.</h2>

                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
};
