const initialState = {
    invoice: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_INVOICE':
            return {
                ...state,
                invoice: [...state.invoice, action.payload]
            }

        case 'DELETE_INVOICE':
            return {
                ...state,
                invoice: state.invoice.filter(invoice => invoice.id !== action.payload)
            }
            
        case 'UPDATE_INVOICE':
            return {
                ...state,
                invoice: state.invoice.map(invoice => {
                    if (invoice.id === action.payload.id) {
                        return action.payload
                    }
                    return invoice
                })
            }
        default:
            return state
    }
}