import React from 'react';

const shoppingListInput = (props) => {
    return(
        <form onSubmit={props.submit}>
            <label>
                Add fruit: 
                <input type="text" name="fruit-list">{props.fruit}</input>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}
 
export default shoppingListInput;