import  { useContext } from "react";
import { myContext } from "../Context/context";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ViewComponent = () => {
  const contextValue = useContext(myContext);
  console.log("context",contextValue);
  const { details ,cart,setCart} = contextValue;
  const { id } = useParams();


  const viewData = details.filter((item) => item.id === parseInt(id));
  const handleAdd=(e)=>{
    const id=e.target.id
    const updatedCart = [...cart, id];

    setCart(updatedCart);
console.log(cart);

    
    
    
  }

  return (
    <div className="view" >
      <h3>View</h3>

      {viewData.map((item) => (
        <Card style={{ width: '18rem' }} key={item.id}>
          <Card.Img variant="top" src={item.image}/>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary" id={item.id} onClick={handleAdd}>Add to cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ViewComponent;
