const initState = {
    list: [],
    activeId: null,
};

const hobbyReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_HOBBY":
            {
                return state;
            }

        case "SET_ACTIVE_HOBBY":
            {
                return state;
            }

        default:
            return state;
    }
};

export default hobbyReducer;