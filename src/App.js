import Container from './components/Container';
import dados from "./products.json"
console.log(dados)


const Item = ({ item }) => {
  return (
    <li className='item' data-testid='product-item'>
      {dados.map(item => (
        <>
        <img key={item.id} src={item.thumbnail}/>
        <h4> {item.title} </h4>
        <p> {item.description} </p>
        <span> {item.brand} </span>
        <span> {item.price} </span>
        </>
      ))}


    </li>
  )
}

function App() {
  return (
    <Container>
      <ul className='list' data-testid='product-list'>
        { /* TODO */}
        <Item />
      </ul>
    </Container>
  );
}

export default App;
