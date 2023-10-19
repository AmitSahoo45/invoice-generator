const initialState = {
    invoice: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_INVOICE':
            return {
                ...state,
                invoice: [...state.invoice, action.payload],
            };

        case 'DELETE_INVOICE':
            return {
                ...state,
                invoice: state.invoice.filter((item) => item !== action.payload),
            };
        case 'EDIT_INVOICE':
            console.log('Edit Invoice is called')
            return {
                ...state,
                invoice: state.invoice.map((item) =>
                    item.invoiceNumber == action.payload.invoiceNumber ? action.payload : item
                ),
            };

        default:
            return state;
    }
}