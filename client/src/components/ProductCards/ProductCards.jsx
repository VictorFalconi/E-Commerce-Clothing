import React from 'react';
import { Link } from 'react-router-dom';

const ProductCards = ({products}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'left', maxWidth: '1000px'}}>
            {products?.map((p, i) => {
                return (
                    <div key={i} style={{width: '200px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Link to={`/`+p._id} >
                            <img src={p.image} alt={p.name} style={{width: '170px', height: '170px'}}/>
                        </Link>
                        <p style={{margin: '0', fontWeight: '700', textAlign: 'center'}}>{p.name}</p>
                        <p style={{margin: '0'}}>Category: {p.category}</p>
                        <p style={{margin: '0'}}>Price: ${p.price}</p>
                        <p style={{margin: '0'}}>Sizes: {p.sizes.join(', ')}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCards;