
import { ButtonOrder, ButtonOrderCtn , ButtonAll} from "./styled";
export function OrderPriceCategory({products, setProducts, dataProducts}){
  const orderPrice = () => {
    setProducts(
      [...products].sort((a, b) => (a.price > b.price ? -1 : 1))
    );
  };
  const orderPrice2 = () => {
    setProducts(
    [...products].sort((a, b) => (a.price > b.price ? 1 : -1))
    );
  };
 
  return (
 
<div>
     
      <h3>Ordenar PREÇO</h3>
       
            
          <ButtonOrderCtn>    <ButtonOrder id="b1" onClick={orderPrice}>MAIOR PRECO</ButtonOrder>
        <ButtonOrder  onClick={orderPrice2}>MENOR PRECO </ButtonOrder>
  
</ButtonOrderCtn>       

</div>
      
  );
}


 export function ButtonAllReset({products, dataProducts, setProducts}){
  const orderReset = () => { 
  setProducts([...dataProducts])};
  return(
  <ButtonAll onClick={orderReset}>MOSTRAR PRODUTOS SEM FILTROS</ButtonAll>
 )}