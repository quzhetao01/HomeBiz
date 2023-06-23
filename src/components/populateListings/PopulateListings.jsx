import { ListItemSecondaryAction } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import ListingPreview from './ListingPreview';
import PopulateListingsCSS from '../../styles/PopulateListings.module.css'

const PopulateListings = (props) => {

    const [listings, setListings] = useState(props.listings);
    
    return ( 
        <div>
            <div className='mb-3'>
                <h1>Explore These Businesses</h1>
            </div>
            <div className={PopulateListingsCSS.listingContainer}>
                {listings.map((item, index) => {
                        return <ListingPreview key={index} title={item.title} reviews={item.reviews} 
                                location={item.township} images={item.descriptionImages} link={item._id} /> }
                )}
            </div>
        </div>
    );
}

export default PopulateListings;