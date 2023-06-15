import { Children } from 'react';
import Container from './components/Container';
import dados from "./products.json"

const Item = ({ item }) => {
  return (
    <li className='item' data-testid='product-item'>
      {
        <>
        <img src={item.thumbnail}></img>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <span>{item.brand}</span>
        <span>{item.price}</span>       
        </>
         }
    </li>
  )
}

function App() {
  return (
    <Container>
      <ul className='list' data-testid='product-list'>
        {dados.filter(item => item.category === 'smartphones')
        .map(item => (
          <Item item={item} />
        ))        
        }

      </ul>
    </Container>
  );
}

export default App;


