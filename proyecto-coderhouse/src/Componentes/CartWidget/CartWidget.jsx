import carritoImg from './carrito-de-compras.png';

function CartWidget() {
  return (
    <>
      <img src={carritoImg} alt="carrito" width="32" height="32" className='imagen-carrito'/>
    </>
  );
}

export default CartWidget;
