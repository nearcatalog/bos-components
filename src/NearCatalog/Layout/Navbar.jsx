const Css=styled.div`
    .nav-item{
        list-style:none;
    }
    #nearcatalog-navbar .navbar-nav{
        margin:0;
    }
`;
return (
    <Css>
    <div id="nearcatalog-navbar" className="navbar navbar-expand-lg navbar-light" style={{
        "background": "white",
        "border": "0.05rem solid rgb(238, 238, 238)",
        "boxShadow": "rgba(34, 34, 34, 0.05) 0px 0.05rem 0.05rem, rgba(34, 34, 34, 0.075) 0px 0.2rem 0.8rem",
        "borderRadius": "0.8rem",
        "color": "rgb(34, 34, 34)",
        "marginBottom": "20px"
      }}>
        <div className="container-fluid">
            <a className="navbar-brand" href={`/${props.componentPath}.App`}>📒NEARCatalog </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href={`/${props.componentPath}.App`}>🏠Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={`/${props.componentPath}.App?cat=trending`}>🔥Trending</a>
                    </li>
                </ul>

                {/* <div class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                </div> */}

            </div>
        </div>
    </div>
    </Css>
)