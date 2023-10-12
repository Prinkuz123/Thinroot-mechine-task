import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { products } from "../Productdetails/productdetails";
import '../Style.css';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate=useNavigate()
  return (
    <div className="d-inline-flex">
      <h1>E-Commerce</h1>
      <div className="home-1">
        {products.map((product) => ( 
          <Card  className="shadow p-3 m-4 bg-body-tertiary rounded"
          style={{ width: "14rem" }} key={product.id}>
            <Card.Img style={{ height: "15rem" }}
            className="p-2"
            variant="top"src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Button variant="primary" onClick={()=>navigate(`/view/${product.id}`)}>View Product</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
