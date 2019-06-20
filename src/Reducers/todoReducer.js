const todoReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TASK':
    return [
      ...state, action.payload
    ];
    case 'REMOVE_TASK':
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload+ 1)
      ];
    default:
      return state;
  }
}

export default todoReducer;

/**
 * La fonction cardReducer prend deux params
 *  - le state (valeur par défault)
 *  - l'action entrante
 *  dans le cas ou le type de l'action passé en param est 
 *  - ADD_ARTICLE 
 *    nous remplaçons la valeur du state par sa copie avec l'ajout du
 *    contenu de l'action (le nouvel article)
 *  - REMOVE_ARTICLE
 *    nous remplaçons la valeur du state par sa copie à laquelle nous avons supprimé 
 *    l'article passé en payload de l'action
 */
