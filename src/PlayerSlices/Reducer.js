
export const initialState={
    squad: [],
    matches:[],
    players:[],
    batss:[],
    bowlerss:[],
    allrounderss:[],
    wicketkeeperss:[],
    captains:[]

   
}
export const creditscalculator=(players)=>{
   return players.reduce((total,Playerdetails)=>total-Playerdetails.credits,100)
}

function reducer(state,action) {
    switch(action.type){
        case 'ADD_MATCHES':
            return{
                ...state,
                matches:action.matches
            }
        case 'ADD_PLAYERS':
            return{
                ...state,
                players:[...state.players,action.playerdetails]
            }
            case 'ADD_SQUAD':
            return{
                ...state,
                squad:[...state.squad,action.payload]
            }
        case 'ADD_BATS':
            return{
                ...state,
                batss:[...state.batss,action.batss]
            }
            case 'ADD_BOWLERS':
            return{
                ...state,
                bowlerss:[...state.bowlerss,action.bowlerss]
            }
            case 'ADD_ALLROUNDERS':
            return{
                ...state,
                allrounderss:[...state.allrounderss,action.allrounderss]
            }
            case 'ADD_WICKETKEEPERS':
            return{
                ...state,
                wicketkeeperss:[...state.wicketkeeperss,action.wicketkeeperss]
            }
            case 'ADD_CAPTAINS':
                return{
                    ...state,
                    captains:[...state.captains,action.captains]
                }
            break;
        default:
            return state
        }
}


export default reducer