export const ProductsReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_ITEM":
             //clone the state
             let newState = Object.assign({}, state);

           //the value received from our presentational component
            let value = action.payload;
           let filteredValues = state.products.filter(product => {
               return product.name.toLowerCase().includes(value) ||
                      product.category.toLowerCase().includes(value) ||
                      product.price.toLowerCase().includes(value);
           });
 
          let appliedFilters = state.appliedFilters;
           //if the value from the input box is not empty
          if (value) {
                appliedFilters = addFilterIfNotExists('SEARCH_ITEM', appliedFilters)
                newState.filteredProducts = filteredValues
              } else {
              appliedFilters = removeFilter('SEARCH_ITEM', appliedFilters);
                if (appliedFilters.length === 0) {
                    newState.filteredProducts = newState.products
                   
                }
       
   }
     return newState
           
        default:
            return state

    }


function addFilterIfNotExists(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    if (index===-1) appliedFilters.push(filter);

    return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
    return appliedFilters;
}


}