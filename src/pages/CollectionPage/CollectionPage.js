import React from 'react';
import CollectionItem from '../../components/CollectionItems/CollectionItems';
import "./CollectionPage.scss";

//redux
import {connect} from "react-redux";
import { selectCollection } from '../../redux/shop/shopSelector';

function CollectionPage({collection}) {
    const {title, items} = collection
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
