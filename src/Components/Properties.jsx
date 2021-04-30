import React from 'react';
import Bproperty from './Bproperty';
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';
function Properties() {
    return (
        <div className='product'>
            <div className="p-heading">
                <h3>Properties</h3>
            </div>
            <div className="product-container">
                <Bproperty image={pimage1} name="EL-Clasico" price="$200,000" />
                <Bproperty image={pimage2} name="EL-Expresso" price="$300,000" />
                <Bproperty image={pimage3} name="EL-Stande" price="$400,000" />
            </div>
        </div>
    )
};

export default Properties;