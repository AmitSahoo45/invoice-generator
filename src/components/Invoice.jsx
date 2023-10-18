import React from 'react'

const Invoice = ({ item, view, edit, remove }) => {
    return (
        <div className="p-3 mt-3 rounded">
            <div>Date : {item.dateOfIssue} </div>
            <div>
                <b>Invoice No: {item.invoiceNumber}</b>
                <span className="right">
                    Total: {item.currency}{item.total}
                </span>
            </div>
            <div>
                From : {item.billFrom}
                <span className="right">
                    To:  {item.billTo}
                </span>
            </div>
            {item.items.map(el => {
                return (<div key={el.id}>
                    {el.description.toUpperCase()} - {el.quantity}
                    <span className="right">
                        {item.currency}{el.price}
                    </span>
                </div>)
            })}
            <div className="action">
                <img className="image" onClick={view} src="https://www.svgrepo.com/show/513026/view-close-818.svg" alt="view button" />
                <img className="image" onClick={edit} src="https://www.svgrepo.com/show/511904/edit-1479.svg" alt="edit button" />
                <img className="image" onClick={remove} src="https://www.svgrepo.com/show/500534/delete-filled.svg" alt="delete button" />
            </div>
        </div>
    )
}

export default Invoice