import React from "react";
import { Card as CardBootstrap } from "react-bootstrap";



const Cards = (props) => {
    const { photo, title, desc } = props;

return (
/*
<div className="card" style={{ width: "200px"}}>
<img src={photo}
className="card-img-top"
alt="..."
style={{width: "100%"}}
/>
<div className="card-body">
        <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    </div>
</div>
*/

    <CardBootstrap className="col-4">
    <CardBootstrap.Img variant="top" src={photo} />
    <CardBootstrap.Body>
        <CardBootstrap.Title>{title}</CardBootstrap.Title>
        <CardBootstrap.Text>{desc}</CardBootstrap.Text>
    </CardBootstrap.Body>
</CardBootstrap>
)
};

export default Cards;