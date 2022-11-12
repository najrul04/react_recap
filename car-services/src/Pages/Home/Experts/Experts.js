import React from 'react';
import company1 from '../../../images/experts/company1.jpg';
import company2 from '../../../images/experts/company2.png';
import company3 from '../../../images/experts/company3.jpg';
import company4 from '../../../images/experts/company4.jpg';
import company5 from '../../../images/experts/company5.jpg';
import company6 from '../../../images/experts/company6.jpg';
import Company from '../Company/Company';
import './Experts.css';

const experts = [
    {id: 1, name: 'Ubisoft', img: company1, companies: 'Ubisoft has become one of the largest video game publishers, and it has the largest in-house development team'},
    {id: 2, name: 'Nintendo Switch', img: company2, companies: 'Nintendos mission is to put smiles on the faces of everyone we touch.The company is known for worldwide.'},
    {id: 3, name: 'Sony', img: company3, companies: 'Sony Interactive Entertainment handles the research and development.Spider Man is the most recent one.'},
    {id: 4, name: 'Tencent', img: company4, companies: 'Tencent is a world-leading internet and technology companyto produce more user friendly game.'},
    {id: 5, name: 'EA Sports', img: company5, companies: 'EA Sports is a division of Electronic Arts that develops and publishes sports video games.'},
    {id: 6, name: 'Activision', img: company6, companies: 'Activision Publishing, Inc. is an American video game publisher based in Santa Monica, California.'},
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-dark text-center mt-5'>Game Companies</h2>
            <div className="row">
                {
                    experts.map(company=> <Company
                    key={company.id}
                    company={company}
                    />)
                }
        </div>
        </div>
    );
};

export default Experts;