import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { STATE } from '../constants/constants';
import InvoiceModal from './InvoiceModal';
import { deleteInvoice } from '../action/action';
import Invoice from './Invoice';

const InvoiceTab = () => {
    const [view, setView] = useState(false);
    const [state, setState] = useState(STATE);
    const [reload, setReload] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const INVOICE = useSelector((state) => state.invoice);

    useEffect(() => { }, [reload]);

    const View_Invoice = (item) => {
        setState(item);
        setView(true);
    }

    const Delete_Invoice = (item) => {
        dispatch(deleteInvoice(item));
        setReload(!reload);
    }

    const closeInvoice = () => setView(false);
    const Edit_Invoice = item => navigate(`/edit/${item.invoiceNumber}`);

    return (
        <section className='p-3'>
            <main className='mb-4 d-flex justify-content-between'>
                <h2 className=''>Welcome to Invoice List</h2>
                <button
                    className="btn btn-primary"
                    onClick={() => navigate('/create')}
                >
                    Create New Invoice
                </button>
            </main>
            <Row className='list'>
                {INVOICE.length === 0 ?
                    <h2> No Invoices Available </h2>
                    :
                    INVOICE.map((inv, index) => {
                        return (
                            <Invoice
                                key={index}
                                item={inv}
                                edit={() => Edit_Invoice(inv)}
                                remove={() => Delete_Invoice(inv)}
                                view={() => View_Invoice(inv)}
                            />
                        )
                    })
                }
            </Row>
            <InvoiceModal
                showModal={view}
                closeModal={closeInvoice}
                info={state}
                items={state.items}
                currency={state.currency}
                subTotal={state.subTotal}
                taxAmmount={state.taxAmmount}
                discountAmmount={state.discountAmmount}
                total={state.total}
            />
        </section>
    )
}

export default InvoiceTab