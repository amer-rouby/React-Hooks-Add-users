export default (state, action) => {
    switch(action.type){
        case"REMOVE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload ) 
            }

        case"ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case"EDIT_USER":
            const ubdateUser = action.payload;
            const ubdateUsers = state.users.map(user => {
                if(user.id === ubdateUser.id){
                    return ubdateUser;
                }
                return user;
            })

            return{
                ...state,
                users: ubdateUsers
            }

        default:
            return state
    }
}