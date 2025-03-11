import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Filters(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      
      </Modal.Header>
      <Modal.Body>
        <h4>filters</h4>
      
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



