import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { STATE } from '../constants/constants';
import InvoiceModal from './InvoiceModal';
import { deleteInvoice, copyToNewInvoice } from '../action/action';
import Invoice from './Invoice';
import NotFound from '../not_found.svg'

const InvoiceTab = () => {
    const [view, setView] = useState(false);
    const [state, setState] = useState(STATE);
    const [copyToNew, setCopyToNew] = useState(false);
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

    const Copy_To_New = (item) => {
        dispatch(copyToNewInvoice(item));
        navigate('/create');
    }

    const closeInvoice = () => setView(false);
    const Edit_Invoice = item => navigate(`/edit/${item.invoiceNumber}`);

    return (
        <section className='p-3'>
            <main className='mb-4 d-flex justify-content-between align-items-center'>
                <h3 className='Poppins mb-0'>InvokR</h3>
                <button
                    className="btn btn-primary"
                    onClick={() => navigate('/create')}
                >
                    Create New Invoice
                </button>
            </main>
            <Row className='list'>
                {INVOICE.length === 0 ?
                    <div className='d-flex align-items-center justify-content-center flex-column w-100'>
                        <img
                            height={200}
                            src={NotFound} alt="not found"
                        />
                        <h3 className='text-muted text-center mt-3'>
                            No Invoice Found
                        </h3>
                    </div>
                    :
                    INVOICE.map((inv, index) => {
                        return (
                            <Invoice
                                key={index}
                                item={inv}
                                edit={() => Edit_Invoice(inv)}
                                remove={() => Delete_Invoice(inv)}
                                view={() => View_Invoice(inv)}
                                copy={() => Copy_To_New(inv)}
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