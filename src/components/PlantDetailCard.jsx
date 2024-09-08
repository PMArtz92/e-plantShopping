function PlantDetailsCard({ plant, handleAddToCart, disableAddToCart }) {
  const disableClass = disableAddToCart ? "added-to-cart" : "";
  const buttonClasses = `product-button ${disableClass}`;
  return (
    <div className="product-card">
      <div className="product-title">{plant.name}</div>
      <img className="product-image" src={plant.image} alt={plant.name} />
      <div className="product-price"> {plant.cost}</div>
      <p>{plant.description}</p>
      <button
        className={buttonClasses}
        onClick={() => handleAddToCart(plant)}
        disabled={disableAddToCart}
      >
        {disableAddToCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default PlantDetailsCard;
