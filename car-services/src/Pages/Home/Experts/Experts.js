import React from 'react';
import company1 from '../../../images/experts/company1.jpg';
import company2 from '../../../images/experts/company2.png';
import company3 from '../../../images/experts/company3.jpg';
import company4 from '../../../images/experts/company4.jpg';
import company5 from '../../../images/experts/company5.jpg';
import company6 from '../../../images/experts/company6.jpg';
import Expert from '../Expert/Expert';
import './Experts.css';

const experts = [
    {id: 1, name: 'Will Smith', img: company1},
    {id: 2, name: 'Chris Rock', img: company2},
    {id: 3, name: 'Dwayne Rock', img: company3},
    {id: 4, name: 'Messy Vai', img: company4},
    {id: 5, name: 'Ronaldo Bro', img: company5},
    {id: 6, name: 'Stachy Jhonson', img: company6},
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary text-center mt-5'>Game Companies</h2>
            <div className="row">
                {
                    experts.map(expert=> <Expert
                    key={expert.id}
                    expert={expert}
                    />)
                }
        </div>
        </div>
    );
};

export default Experts;