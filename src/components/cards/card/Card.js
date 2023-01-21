import React, { useEffect, useState } from "react";

import "../card/card.css";

export const Card = ({ imgUrl, title, descripton }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    import(`../../../assets/${imgUrl}.png`).then((im) => {
      setImg(im.default);
    });
  }, []);

  return (
    <div className="col-md-3 d-flex align-items-stretch">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <h5 className="card-title text-center">{title}</h5>
        <div className="card-body d-flex flex-column">
          <p className="card-text mb-4">{descripton}</p>
        </div>
      </div>
    </div>
  );
};
