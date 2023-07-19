import "./items-prices.css";

export function ItemsPrices(props) {
  return (
    <div className="items-list-prices">
      <span className="title">{props.title}</span>

      <div className="quantity-container">
        <span className="price">{props.price}</span>
      </div>
    </div>
  );
}
