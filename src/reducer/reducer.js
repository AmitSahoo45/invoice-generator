const initialState = {
    invoice: [],
    invoiceNumber: 0
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

        case 'COPY_TO_NEW_INVOICE':
            // only set the invoice number to action.payload.invoiceNumber rest remains the same
            console.log(action.payload.invoiceNumber)
            return {
                ...state,
                invoiceNumber: action.payload.invoiceNumber
            }

        default:
            return state;
    }
}