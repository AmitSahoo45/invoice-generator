import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import { Route, Routes } from 'react-router-dom';
import InvoiceTab from './components/InvoiceTab';

class App extends Component {
  render() {
    return (
      <Container>
        <Routes>
          <Route path="/" element={<InvoiceTab />} />
          <Route path="/create" element={<InvoiceForm />} />
          <Route path="/edit/:id" element={<InvoiceForm />} />
        </Routes>
      </Container>
    );
  }
}

export default App;
