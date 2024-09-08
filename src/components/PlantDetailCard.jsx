function PlantDetailsCard({ plant, handleAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-title">{plant.name}</div>
      <img className="product-image" src={plant.image} alt={plant.name} />
      <div className="product-price"> {plant.cost}</div>
      <p>{plant.description}</p>
      <button className="product-button" onClick={() => handleAddToCart(plant)}>
        Add to Cart
      </button>
    </div>
  );
}

export default PlantDetailsCard;
