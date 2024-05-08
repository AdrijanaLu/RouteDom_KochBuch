import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './offcanvas.css';

function OffcanvasNav(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{backgroundColor: "rgb(180, 180, 180)", border: "none"}} 
      variant="primary" onClick={handleShow}>
        <img style={{width: "25px"}}
         src='https://cdn0.iconfinder.com/data/icons/ui-3-1/512/user-64.png' />
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Hallo <span>{props.name}</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <a className='off_a' 
          href='https://www.edamam.com/about/company/' target='_blank'>
            <img className='off_img'
            src='https://cdn2.iconfinder.com/data/icons/business-and-finance-372/30/office_business_work_workplace_home_company-_48-64.png' />
            About Company
          </a>
          <hr />
          <a className='off_a' 
          href='https://www.edamam.com/about/media/' target='_blank'>
            <img className='off_img'
            src='https://cdn3.iconfinder.com/data/icons/neutro-interface/32/play-64.png' />
            Media
          </a>
          <hr />
          <a className='off_a' 
          href='https://www.edamam.com/terms/' target='_blank'>
            <img className='off_img'
            src='https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-6/24/ic_fluent_select_all_off_24_regular-64.png' />
            Therms
          </a>
          <hr />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasNav;