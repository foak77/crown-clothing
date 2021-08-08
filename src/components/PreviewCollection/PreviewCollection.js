import React from 'react'
import CollectionItems from './../CollectionItems/CollectionItems'
import "./PreviewCollection.scss"

function PreviewCollection({title, items}) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item,idx)=> idx<4)
                    .map(({id, ...otherItemProps})=>(
                <CollectionItems key={id} {...otherItemProps}/>
                ))}
            </div>
        </div>
    )
}

export default PreviewCollection
