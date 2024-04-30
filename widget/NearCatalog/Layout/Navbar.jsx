const Css = styled.div`
    margin-top:10px;
    .nav-item{
        list-style:none;
    }
    #nearcatalog-navbar .navbar-nav{
        margin:0;
    }
`;
const navItems = [
  { t: "🏠Home", l: ``, r: "home" },
  { t: "🔥Trending", l: `?cat=trending`, r: "trending" },
  { t: "⭐Bookmark", l: `?bookmark=lfg`, r: "trending" },
];
return (
  <Css>
    <div
      id="nearcatalog-navbar"
      className="navbar navbar-expand-lg navbar-light"
      style={{
        background: "white",
        border: "0.05rem solid rgb(238, 238, 238)",
        boxShadow:
          "rgba(34, 34, 34, 0.05) 0px 0.05rem 0.05rem, rgba(34, 34, 34, 0.075) 0px 0.2rem 0.8rem",
        borderRadius: "0.8rem",
        color: "rgb(34, 34, 34)",
        marginBottom: "20px",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href={`/${props.indexPath}`}>
          📒NEARCatalog{" "}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {navItems.map((e) => {
              return (
                <li className="nav-item">
                  <Link className="nav-link" href={`/${props.indexPath}` + e.l}>
                    {e.t}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
              {" "}
              <a
                className="nav-link"
                href="https://submit.nearcatalog.xyz/new-project/"
              >
                📥 Submit project
              </a>
            </li>
          </ul>
          <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
            <li class="nav-item col-2 col-md-auto">
              <a
                class="nav-link p-2"
                href="https://twitter.com/nearcatalog"
                target="_blank"
                title="NEARCatalog on Twitter"
              >
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li class="nav-item col-2 col-md-auto">
              <a
                class="nav-link p-2"
                href="https://t.me/nearcatalog"
                target="_blank"
                title="NEARCatalog on Telegram"
              >
                <i class="bi bi-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Css>
);
