/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';

export default function HornsSelector(props) {

  function handleSelection(event){
    const selection = event.target.value;
    props.onSelect(selection)
    console.log(selection)
  }

  return (
    <Form.Select  onChange={handleSelection}>
      <option>All Horned Beasts</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

