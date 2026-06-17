import { useEffect, useState } from "react";
import ProductModal from "../components/ProductModal";
import "../styles/product.css";
import { getProducts } from "../api/productApi";


function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const perPage = 6;

  useEffect(() => {
    loadProducts();
  }, []);


  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const start = (page - 1) * perPage;
  const items = products.slice(
    start,
    start + perPage
  );

  return (
    <div className="container-fluid py-4">

      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
        <h2 className="fw-bold">
          Products
        </h2>

        <p className="text-muted mb-0">
          {start + 1} -
          {" "}
          {Math.min(
            start + perPage,
            products.length
          )}
          {" "}
          over
          {" "}
          {products.length}
          {" "}
          results
        </p>
      </div>

      <div className="row g-4">
        {items.map((p) => (
          <div
            className="col-lg-4"
            key={p._id}
          >
            <div
              className="card product-card shadow-sm border-0"
              onClick={() =>
                setSelected(p)
              }
            >
              <div className="text-center pt-4">
                <img
                  src={p.image}
                  alt={p.name}
                  className="product-image"
                />
              </div>

              <div className="card-body">
                <h5>
                  {p.name}
                </h5>

                <div className="d-flex align-items-center mb-3">
                  <span className="text-warning">
                    ★
                  </span>

                  <span className="ms-2">
                    {p.rating}
                  </span>
                </div>

                <div className="d-flex justify-content-between">

                  <h4>
                    $
                    {p.price}
                  </h4>

                  <button
                    className="btn btn-primary"
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                  >
                    + Add
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center gap-3 mt-5">

        <button
          className="btn btn-outline-primary"
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
        >
          Prev
        </button>

        <span>
          Page {page}
        </span>

        <button
          className="btn btn-outline-primary"
          disabled={
            start + perPage >=
            products.length
          }
          onClick={() =>
            setPage(page + 1)
          }
        >
          Next
        </button>

      </div>

      <ProductModal
        product={selected}
        onClose={() =>
          setSelected(null)
        }
      />

    </div>
  );
}

export default ProductList;