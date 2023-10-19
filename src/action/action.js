export const addInvoice = (invoice) => {
    return {
        type: 'ADD_INVOICE',
        payload: invoice
    }
}

export const editInvoice = (invoice) => {
    return {
        type: 'EDIT_INVOICE',
        payload: invoice
    }
}

export const deleteInvoice = (invoice) => {
    return {
        type: 'DELETE_INVOICE',
        payload: invoice
    }
}

export const copyToNewInvoice = (invoice) => {
    return {
        type: 'COPY_TO_NEW_INVOICE',
        payload: invoice
    }
}
