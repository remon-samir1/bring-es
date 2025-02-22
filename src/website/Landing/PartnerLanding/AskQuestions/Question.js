import Accordion from 'react-bootstrap/Accordion';

function Question() {
  return (
    <Accordion defaultActiveKey="0" className='col-md-5 col-12 justify-content-reverse'>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Lorem ipsum dolor sit amet</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo 
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

export default Question;