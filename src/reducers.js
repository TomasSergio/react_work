import {
    LIKE,
    DISLIKE,
    RESTORE,
    initialState
} from './actions';

function reducer(state=initialState, action){
    switch (action.type) {
        case RESTORE:
            return state.map(
                (card) => {
                        return Object.assign({}, card, {
                            style: {
                                transform: 'translateX(0px)',
                                opacity: 1,
                                transitionProperty: "none"
                            }
                        })
                }
            )

        case LIKE:
            return state.map(
                (card) => {
                    if(action.id === card.id){
                        return Object.assign({}, card, {
                            likes: card.likes + 1,
                            style:{
                                transform: 'translateX(-500px)',
                                opacity: 0,
                                transition: 'all ease-out 500ms'
                            }
                        })
                    }
                    return card
                }
            )
        case DISLIKE:
            return state.map(
                (card) => {
                    if(action.id === card.id){
                        return Object.assign({}, card, {
                            dislikes: card.dislikes + 1,
                            style:{
                                transform: 'translateX(500px)',
                                opacity: 0,
                                transition: 'all ease-out 500ms'
                            }
                        })
                    }
                    return card
                }
            )

        default:
            return state
    }
}

export default reducer