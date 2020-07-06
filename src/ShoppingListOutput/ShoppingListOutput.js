import React from 'react';

const shoppingListOutput = (props) => {
    return(
        <div>
            <ul>
                <li>{props.fruit}</li>
            </ul>
        </div>
    );
}
 
export default shoppingListOutput;