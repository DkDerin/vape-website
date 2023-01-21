import React from 'react';
import bloodOrange from "../assets/blood-orange.png";
import coolMint from "../assets/cool-mint.png";
import blueberryRasp from "../assets/blueberry-raspberry.png";
import grapeParadise from "../assets/grape-paradise.png";
import iceMango from "../assets/ice-mango.png";
import guavaIce from "../assets/guava-ice.png";
import iceCola from "../assets/ice-cola.png";

import lushIce from "../assets/lush-ice.png";
import peachIce from "../assets/peach-ice.png";
import pureTobacco from "../assets/pure-tobacco.png";



export const Products = () => {



    

    return (
        <section id="products">
            <div className="container">
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ddsfdsfdsfsdfdsfdsf
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                <div className="row justify-content-center">

                    <div className="title_lines text-center">PRODUKTER</div>
                    <div className="col-12 col-lg-3">
                        <div className="card my-5">
                            <img src={bloodOrange} className="card-img-top" alt="..." />
                            <h5 className="card-title text-light text-center">
                                Alpha
                            </h5>

                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Launch demo modal
                            </button>
                           
                            
                            <a href="#" className="btn btn-light">Läs mer</a>
                        </div>
                        
                    </div>
                    
                    <div className="col-12 col-lg-3">
                        <div className="card my-5">
                            <img src={coolMint} className="card-img-top" alt="..." />
                            <h5 className="card-title text-light text-center">
                                Cool mint
                            </h5>
                            <a className="btn btn-light" >Läs mer</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card my-5">
                            <img src={coolMint} alt="..." />
                            <h5 className="card-title text-light text-center">
                                Blueberry Raspberry
                            </h5>
                            <a href="#" className="btn btn-light">Läs mer</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card my-5">
                            <img src={grapeParadise} alt="..." />
                            <h5 className="card-title text-light text-center">
                                Grape Paradise
                            </h5>
                            <a href="#" className="btn btn-light">Läs mer</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card my-5">
                            <img src={iceMango} alt="..." />
                            <h5 className="card-title text-light text-center">
                                Ice Mango
                            </h5>
                            <a href="#" className="btn btn-light">Läs mer</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card my-5">
                            <img src={guavaIce} alt="..." />
                            <h5 className="card-title text-light text-center">
                                Guava Ice
                            </h5>
                            <a href="#" className="btn btn-light">Läs mer</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card my-5">
                            <img src={iceCola} alt="..." />
                            <h5 className="card-title text-light text-center">
                                Ice Cola
                            </h5>
                            <a href="#" className="btn btn-light">Läs mer</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card my-5">
                            <img src={lushIce} alt="..." />
                            <h5 className="card-title text-light text-center">
                                Lush Ice
                            </h5>
                            <a href="#" className="btn btn-light">Läs mer</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card my-5">
                            <img src={peachIce} alt="..." />
                            <h5 className="card-title text-light text-center">
                                Peach Ice
                            </h5>
                            <a href="#" className="btn btn-light">Läs mer</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    }
