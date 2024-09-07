function PlantDetailsCard({ plant, handleAddToCart }) {
  return (
    <div className="product-card">
      <img className="product-image" src={plant.image} alt={plant.name} />
      <div className="product-title">{plant.name}</div>
      {/*Similarly like the above plant.name show other details like description and cost*/}
      <button className="product-button" onClick={() => handleAddToCart(plant)}>
        Add to Cart
      </button>
    </div>
  );
}

export default PlantDetailsCard;
