import React from 'react';
import CollectionPreview from './../CollectionPreview/CollectionPreview';
import { selectCollectionsForPreview } from './../../redux/shop/shopSelector';
import "./CollectionsOverview.scss";

//redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
  );

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);