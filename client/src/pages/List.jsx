import { useEffect, useState } from "react";
import { getRegistrations } from "../api/registrationApi";


function List() {
  const [namelist, setNameList] = useState([]);
  const [page, setPage] = useState(1);

  const perPage = 5;

   useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await getRegistrations();
      setNameList(data);
    } catch (error) {
      console.log(error);
    }
  };


  const start = (page - 1) * perPage;
  const items = namelist.slice(
    start,
    start + perPage
  );

  const totalPages = Math.ceil(
    namelist.length / perPage
  );

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">
          List
        </h2>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Department</th>
              <th>Number</th>
              <th>Location</th>
              <th>Address</th>
              <th>Experience</th>
            </tr>
          </thead>

          <tbody>
            {items.map((p, index) => (
              <tr key={p._id}>
                <td>
                  {String(
                    start + index + 1
                  ).padStart(2, "0")}
                </td>

                <td>
                  <div className="d-flex flex-column">
                    <span className="fw-bold">
                      {p.fullName}
                    </span>

                    <small className="text-muted">
                      {p.email}
                    </small>
                  </div>
                </td>

                <td>
                  {p.department}
                </td>

                <td>
                  {p.contact}
                </td>

                <td>
                  {p.city}
                </td>

                <td>
                  {p.address}
                </td>

                <td>
                  {p.working}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center flex-wrap mt-4">

        <div>
          Total Records :
          {" "}
          {namelist.length}
        </div>

        <ul className="pagination mb-0">

          <li
            className={`page-item ${
              page === 1
                ? "disabled"
                : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() =>
                setPage(page - 1)
              }
            >
              Previous
            </button>
          </li>

          {[...Array(totalPages)].map(
            (_, i) => (
              <li
                key={i}
                className={`page-item ${
                  page === i + 1
                    ? "active"
                    : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() =>
                    setPage(i + 1)
                  }
                >
                  {i + 1}
                </button>
              </li>
            )
          )}

          <li
            className={`page-item ${
              start + perPage >=
              namelist.length
                ? "disabled"
                : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() =>
                setPage(page + 1)
              }
            >
              Next
            </button>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default List;