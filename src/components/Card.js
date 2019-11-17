import React from "react";

const Card = ({ name, email, id}) => { //instead of name,email,id; we could write props. props.name and props.id
    return (
        
        <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
         <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2> 
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;