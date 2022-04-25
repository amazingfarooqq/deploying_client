import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAuth } from "../../AuthContext";

export const UserDetail = () => {
  const {   userInfo } = useAuth();

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <Button className="w-100" onClick={() => handleShow(true)}>
        Details
      </Button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
              <div className="row justify-content-around">
                <div className="col-4">
                <img className="w-100" height={350} src="https://www.pngitem.com/pimgs/m/22-224000_profile-pic-dummy-png-transparent-png.png" alt="img" />
                </div>
                <div className="col-5">
                  <h2 className="fw-bold p-0 m-0">Farooq Dad Khan</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi provident.</p>

                  <div className="row">
                    <div className="col-12 fs-4"><h5 className="fw-bold" style={{display: 'inline'}}>Birthday</h5>: 12/12/12</div>
                    <div className="col-12 fs-4"><h5 className="fw-bold" style={{display: 'inline'}}>Age</h5>: 22</div>
                    <div className="col-12 fs-4"><h5 className="fw-bold" style={{display: 'inline'}}>Phone</h5>: +323 1231223</div>
                    <div className="col-12 fs-4"><h5 className="fw-bold" style={{display: 'inline'}}>Email</h5>: admin@gmail.com</div>
                    <div className="col-12 fs-4"><h5 className="fw-bold" style={{display: 'inline'}}>Role</h5>: user</div>
                    <div className="col-12 fs-4"><h5 className="fw-bold" style={{display: 'inline'}}>Approvement</h5>: approved</div>
                  </div>
                </div>
              </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
