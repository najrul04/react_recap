import React from 'react';
import './Company.css';
const Company = ({company}) => {
    const {name, img, companies} = company;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text">{companies}</p>
                    <a href="#" className="btn btn-dark">See More</a>
                </div>
            </div>
        </div>
    );
};
export default Company;