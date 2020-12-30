import React from 'react'
import '../css/item.css'

export default function Item() {
    //single instance of an item
    //used in items.js
    return (
        
        <div className="row-item">

            <div className="item-name"> 
                name of item
                <div className="item-pic">
                    picture of item
                </div>
            </div>

            <div className="col2"> 
                stats of the item
            </div>

            <div className="col3"> 
                b/o,unit price, auction time left, quantity
            </div>

        </div>
        
    )
}
