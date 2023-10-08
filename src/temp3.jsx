return(

    <>
        <div className="container">
  <div className="row">

    <div className="col-12 mb-3">
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">AwesomeNEAR</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Articles</a>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </div>
    </div>

    <div className="col-12">
      <h1>Projects</h1>
      <h2>All projects building on NEAR Protocol and Aurora ecosystem.</h2>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#">All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">NEAR</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Aurora</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Octopus</a>
        </li>
      </ul>
    </div>

  </div>

  <div className="row">

    <div className="col-3">

      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
          All Projects
        </a>
        <a href="#" className="list-group-item list-group-item-action">Infrastructure</a>
        <a href="#" className="list-group-item list-group-item-action">DeFi</a>
        <a href="#" className="list-group-item list-group-item-action">Gaming</a>
      </div>

    </div>

    <div className="col-9">

      <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Project Name</h5>
          <p className="card-text">Description...</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>

      <div className="card">
        ...
      </div>

      <div className="card">
        ...
      </div>

      <button className="btn btn-primary">Load More</button>

    </div>

  </div>

  <div className="footer">
    <div className="container">
      <span className="text-muted">Place footer content here.</span>
    </div>
  </div>

</div>
    </>
)