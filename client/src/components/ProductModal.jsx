import "../styles/modal.css";

function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <>
      <div
        className="offcanvas-backdrop fade show"
        onClick={onClose}
      ></div>

      <div
        className="offcanvas offcanvas-end show product-drawer"
        tabIndex="-1"
      >
        <div className="offcanvas-header border-bottom">
          <div>
            <small className="text-muted">
              Product Details
            </small>

            <h4 className="mb-0 mt-1">
              {product.name}
            </h4>
          </div>

          <button
            className="btn-close"
            onClick={onClose}
          ></button>
        </div>

        <div className="offcanvas-body">

          <div className="text-center mb-4 position-relative">

            {product.discount && (
              <span className="badge bg-danger position-absolute top-0 start-0">
                SAVE {product.discount}%
              </span>
            )}

            <img
              src={product.image}
              alt={product.name}
              className="img-fluid product-image"
            />

          </div>

          <p className="text-muted">
            {product.description}
          </p>

          <div className="card border-0 bg-light mb-4">
            <div className="card-body">

              <div className="d-flex justify-content-between mb-3">
                <span>Availability</span>

                <span className="badge bg-success">
                  In Stock
                </span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>SKU</span>
                <strong>
                  {product.sku || "SH-001"}
                </strong>
              </div>

              <div className="d-flex justify-content-between">
                <span>Category</span>
                <strong>
                  {product.category}
                </strong>
              </div>

            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">

            <div>

              {product.oldPrice && (
                <div className="text-decoration-line-through text-muted">
                  ${product.oldPrice}
                </div>
              )}

              <h3 className="text-primary mb-0">
                ${product.price}
              </h3>

            </div>

            <button className="btn btn-primary px-4">
              Add to Cart
            </button>

          </div>

        </div>
      </div>
    </>
  );
}

export default ProductModal;