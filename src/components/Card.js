import React from "react";
import "./card.css";
import { TourCard } from "./styled";

export default function Card({
  id,
  title,
  price,
  currency,
  rating,
  isSpecialOffer,
}) {
  return (
    // <div className="card">
    //   <p>{title}</p>
    //   <p>
    //     {price} {currency}
    //   </p>
    //   <p>Rating: {rating}</p>
    //   {isSpecialOffer && <p>Special offerr!</p>}
    // </div>
    <TourCard />
  );
}
// const filteredKitasBySelect = this.state.kitas.filter(kita => {
//   if (this.state.select === "--") {
//     return true;
//   }
//   return kita.viertel === this.state.select;
// });

// const filteredKitas = filteredKitasBySelect.filter(kita => {
//   return kita.name.toLowerCase().includes(search);
// });
