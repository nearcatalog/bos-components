const Css = styled.div`
.embed-responsive-item{
    width: 103%;
}
.near-item-sm{align-items:center;border-radius:.8rem;display: block;flex-direction:column;padding:.5rem;transition:all .15s ease;float: left;}
.near-item-sm:focus,.near-item-sm:hover{background:rgba(34,34,34,.05);text-decoration:none;}
.near-item-sm .tile-icon{box-shadow:0 .5rem 1.2rem rgba(34,34,34,.2);border-radius:50%;height:3.2rem;margin:.5rem auto;width:3.2rem;}
.near-item-sm .tile-icon img{border-radius:50%;height:100%;width:100%;}
.near-item-sm .tile-content{width:100%;}
.near-item-sm .tile-title{font-size:.7rem;text-align:center;color: rgb(34, 34, 34); font-weight:bold}
h1{font-size:2em;margin:.67em 0;}
a{background-color:transparent;-webkit-text-decoration-skip:objects;}
a:active,a:hover{outline-width:0;}
strong{font-weight:inherit;font-weight:bolder;}
small{font-size:80%;font-weight:400;}
img{border-style:none;}
svg:not(:root){overflow:hidden;}
*,:after,:before{box-sizing:inherit;}
a{color:#222;outline:none;text-decoration:none;}
a:active,a:focus,a:hover{color:#090909;text-decoration:underline;}
:focus{outline:0;}
h1,h2,h3{color:inherit;font-weight:500;line-height:1.2;margin-bottom:.5em;margin-top:0;}
.h4{font-weight:500;}
h1{font-size:2rem;}
h2{font-size:1.6rem;}
h3{font-size:1.4rem;}
.h4{font-size:1.2rem;}
p{margin:0 0 1.2rem;}
a{-webkit-text-decoration-skip:ink edges;text-decoration-skip:ink edges;}
ol,ul{padding:0;}
ol,ul{margin:.8rem 0 .8rem .8rem;}
ol li,ul li{margin-top:.4rem;}
ul{list-style:disc inside;}
ol{list-style:decimal inside;}
.btn{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:rgba(34,34,34,.05);border:.1rem solid transparent;border-radius:.4rem;color:#222;cursor:pointer;display:inline-flex;font-size:.7rem;height:1.8rem;line-height:1.2rem;outline:none;padding:.2rem .4rem;text-align:center;text-decoration:none;transition:background .2s,border .2s,box-shadow .2s,color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;}
.btn:focus{box-shadow:0 0 0 .1rem rgba(34,34,34,.2);}
.btn:focus,.btn:hover{background:rgba(34,34,34,.1);border-color:transparent;text-decoration:none;}
.btn:active{background:rgba(34,34,34,.15);border-color:rgba(34,34,34,.05);text-decoration:none;}
.btn:disabled{cursor:default;opacity:.5;pointer-events:none;}
.btn.btn-primary{background:#222;border-color:#1d1d1d;box-shadow:0 .1rem .4rem rgba(34,34,34,.25);color:#fff;}
.btn.btn-primary:focus,.btn.btn-primary:hover{background:#0052cc;border-color:#004cbd;color:#fff;}
.btn.btn-primary:active{background:#004cbd;border-color:#0046ad;color:#fff;}
.btn.btn-link{background:transparent;border-color:transparent;color:#222;}
.btn.btn-link:active,.btn.btn-link:focus,.btn.btn-link:hover{color:#222;}
.btn.btn-lg{font-size:.8rem;height:2rem;padding:.3rem .6rem;}
.btn-group{display:inline-flex;flex-wrap:wrap;}
.btn-group .btn{flex:1 0 auto;}
.btn-group .btn:first-child:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;}
.btn-group .btn:last-child:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-.1rem;}
.btn-group .btn:active,.btn-group .btn:focus,.btn-group .btn:hover{z-index:1;}
.markdown{font-size:.8rem;font-weight:400;line-height:1.25rem;word-break:break-word;}
.markdown>:first-child{margin-top:0;}
.markdown h2,.markdown h3{font-weight:700;line-height:1.5;margin-bottom:1.2rem;margin-top:.4rem;}
.markdown h2{font-size:24px;}
.markdown h3{font-size:22px;}
.markdown p{-webkit-hyphens:auto;hyphens:auto;margin:0 0 1.6rem;}
.markdown ul{margin:1.6rem 0 1.6rem 1.6rem;padding:0;}
.markdown ul li{margin-top:.4rem;}
.markdown ul{list-style:disc inside;}
.container{margin-left:auto;margin-right:auto;padding-left:.8rem;padding-right:.8rem;width:100%;}
.container.grid-xl{max-width:calc(.8rem + 1200px);}
.columns{display:flex;flex-wrap:wrap;margin-left:-.8rem;margin-right:-.8rem;}
.column{flex:1;max-width:100%;padding-left:.8rem;padding-right:.8rem;}
.column.col-12,.column.col-4,.column.col-8{flex:none;}
.col-12{width:100%;}
.col-8{width:66.66666667%;}
.col-4{width:33.33333333%;}
@media (max-width:960px){
.col-lg-12{flex:none;}
.col-lg-12{width:100%;}
}
@media (max-width:840px){
.col-md-12{flex:none;}
.col-md-12{width:100%;}
}
.breadcrumb{font-size:.6rem;list-style:none;margin:.2rem 0;padding:.2rem 0;}
.breadcrumb .breadcrumb-item{color:#888;display:inline-block;margin:0 .2rem 0 0;padding:.2rem 0;}
.breadcrumb .breadcrumb-item a{color:#888;}
.breadcrumb .breadcrumb-item:not(:first-child):before{color:#888;content:"→";padding-right:.2rem;}
.dropdown{display:inline-block;position:relative;}
.dropdown .menu{animation:slide-down .15s ease 1;display:none;left:0;max-height:50vh;overflow-y:auto;position:absolute;top:90%;}
.dropdown.dropdown-right .menu{left:auto;right:0;}
.dropdown .menu:hover,.dropdown:focus .menu,.dropdown:hover .menu{display:block;}
.menu{box-shadow:0 1rem 3rem rgba(34,34,34,.3);background:#fff;border-radius:.8rem;list-style:none;margin:0;min-width:180px;padding:.8rem;transform:translateY(.2rem);z-index:300;}
.menu .menu-item{margin-top:0;padding:0;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;}
.menu .menu-item>a{align-items:center;color:inherit;display:flex;margin:0;padding:.4rem;text-decoration:none;}
.menu .menu-item>a:active,.menu .menu-item>a:focus,.menu .menu-item>a:hover{color:rgba(34,34,34,.75);}
.menu .menu-item>span{align-items:center;color:inherit;display:flex;margin:0;padding:.4rem;}
.tile{align-content:space-between;align-items:flex-start;display:flex;}
.tile .tile-icon{flex:0 0 auto;}
.tile .tile-content{flex:1 1 auto;}
.tile .tile-content:not(:first-child){padding-left:.4rem;}
.tile .tile-title{line-height:1.2rem;}
.tooltip{position:relative;}
.tooltip:after{background:rgba(34,34,34,.95);border-radius:.4rem;bottom:100%;color:#fff;content:attr(data-tooltip);display:block;font-size:.6rem;left:50%;max-width:320px;opacity:0;overflow:hidden;padding:.2rem .4rem;pointer-events:none;position:absolute;text-overflow:ellipsis;transform:translate(-50%,.4rem);transition:opacity .2s,transform .2s;white-space:pre;z-index:300;}
.tooltip:focus:after,.tooltip:hover:after{opacity:1;transform:translate(-50%,-.2rem);}
.text-gray{color:#888!important;}
a.text-gray:focus,a.text-gray:hover{color:#7b7b7b;}
a.text-gray:visited{color:#959595;}
.c-hand{cursor:pointer;}
.text-assistive{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1px;}
.divider{display:block;position:relative;}
.divider[data-content]:after{background:#fff;color:#c8c8c8;content:attr(data-content);display:inline-block;font-size:.6rem;line-height:.6rem;padding:0 .4rem;transform:translateY(-.6rem);}
.divider{border-top:.05rem solid #d5d5d5;height:.1rem;margin:.4rem 0;}
.divider[data-content]{margin:.8rem 0;}
.ml-1{margin-left:.2rem!important;}
.ml-2{margin-left:.4rem!important;}
.mr-2{margin-right:.4rem!important;}
.text-small{font-size:.8em;}
.awesome-hero{border-radius:.8rem;color:#222;display:flex;padding:1rem 0;position:relative;z-index:1;}
.awesome-hero .hero-content{display:flex;flex-direction:column;flex:1;justify-content:center;margin-right:auto;max-width:840px;}
.awesome-hero .hero-img{height:5.6rem;margin:1.8rem 1rem 1rem 0;width:5.6rem;}
.awesome-hero .hero-img img{border-radius:50%;box-shadow:0 .2rem .6rem rgba(34,34,34,.05);height:5.6rem;width:5.6rem;}
@media screen and (max-width:960px){
.awesome-hero .hero-img{margin-top:0;}
}
.awesome-hero .hero-title{font-size:1.8rem;font-weight:900;line-height:1.25;margin-bottom:0;}
.awesome-hero .hero-title small{border-radius:.2rem;color:rgba(34,34,34,.9);font-size:.75rem;font-weight:500;padding:.2rem;vertical-align:middle;}
.awesome-hero .hero-subtitle{color:#222;font-size:.8rem;font-weight:400;line-height:1.5;margin:.5rem 0 1rem;}
.awesome-hero .hero-series{display:inline-flex;margin-bottom:.4rem;order:-1;}
.awesome-hero .hero-actions{flex:0 0 auto;margin-left:1rem;margin-top:1rem;}
.awesome-hero .hero-tags{margin:.4rem 0;}
.awesome-hero .hero-tags .tag-item+.tag-item{margin-left:.25rem;}
.awesome-hero .hero-links{display:flex;flex-wrap:wrap;justify-content:flex-end;margin:.5rem 0;}
@media screen and (max-width:960px){
.awesome-hero .hero-links{justify-content:flex-start;}
}
.awesome-hero .hero-links .link-item{align-items:center;display:inline-flex;height:2rem;font-size:.9rem;margin-bottom:.2rem;margin-right:.2rem;text-decoration:none;}
.awesome-hero .hero-links .link-item span{line-height:1;margin-left:.4rem;}
.awesome-hero .hero-links .link-item small{opacity:.5;}
.awesome-hero .hero-links .link-item.btn.btn-lg{padding:.3rem .5rem;}
.awesome-hero .hero-links .menu{color:#222;width:12rem;}
@media screen and (max-width:960px){
.awesome-hero{flex-wrap:wrap;flex-direction:column;}
.awesome-hero .hero-actions{flex:1 0 100%;margin-left:0;width:100%;}
}
@media screen and (max-width:600px){
.awesome-hero{padding:1rem 0;}
}
.hero-links .link-item.btn.btn-lg.btn-link{font-size:1.2rem}
.label-series{align-items:center;background:rgba(0,82,204,.1);border:.05rem solid transparent;border-radius:1rem;cursor:default;display:inline-flex;font-size:.6rem;font-weight:500;height:1rem;margin-bottom:0;margin-right:.2rem;padding:.1rem .3rem;}
.label-series .icon-series{height:.6rem;margin-right:.1rem;width:.6rem;}
.label-series.trending{background:rgba(0,82,204,.1);color:#0052cc;}
.label-series.near{background:rgba(38,38,38,.075);color:#262626;}
.label-series.aurora{background:rgba(120,214,75,.2);color:#5dc22c;}
.section-project .awesome-hero .hero-content{max-width:600px;}
.near-content .content-widget{background:#fff;border:.05rem solid #eee;border-radius:.8rem;box-shadow:0 .1rem 1.4rem rgba(34,34,34,.05);font-size:0.9rem;margin-bottom:1rem;padding:2rem;}
.near-content .twitter-widget{padding-bottom:.5rem;}
.near-content .related-widget .content-body{margin:auto -.5rem;}
@media screen and (max-width:600px){
.near-content .content-widget{padding:1.5rem 1rem;}
}
.near-content .content-title{font-size:.8rem;font-weight:900;margin-bottom:1rem;}
.near-content .stats-widget{display:flex;flex-wrap:nowrap;font-size:.7rem;justify-content:space-between;align-items:baseline;margin:.3rem 0;}
.near-content .stats-widget:last-child{margin-bottom:0;}
.near-content .stats-widget .stats-widget-label{color:rgba(34,34,34,.5);font-size:.6rem;font-weight:500;margin-bottom:.2rem;}
.near-content .stats-widget .stats-widget-value{font-weight:700;color:#222;text-align:right;overflow:hidden;}
.near-content .stats-widget .stats-widget-source{color:#888;font-size:.6rem;margin-top:.4rem;text-align:right;width:100%;}
.near-content .token-widget{display:flex;flex-direction:column;}
.near-content .token-widget:not(:last-child){margin-bottom:1rem;}
.near-content .token-widget .token-widget-label{color:rgba(51,51,51,.5);font-size:.6rem;font-weight:500;}
.near-content .token-widget .token-widget-value{background:#f6f6f6;border:.05rem solid #eee;border-radius:.4rem;color:#333;font-size:.6rem;font-weight:700;margin-top:.2rem;padding:.2rem .4rem;-webkit-user-select:all;-moz-user-select:all;user-select:all;word-break:break-all;}
.near-content .token-widget .token-widget-value:hover{background:#f3f3f3;}
.near-content .content-grants{align-items:center;display:flex;flex-wrap:wrap;}
.near-content .content-grants:not(:last-child){margin-bottom:.5rem;}
.label-grants{align-items:center;border:.05rem solid rgba(34,34,34,.075);border-radius:.4rem;color:#222;display:flex;font-size:.7rem;margin:.25rem;padding:.25rem .5rem .25rem .25rem;}
.label-grants .icon-grants{border-radius:50%;margin-right:.25rem;}
.label-grants.near .icon-grants{background:rgba(38,38,38,.075);color:#262626;}
.label-grants.proximity .icon-grants{background:linear-gradient(45deg,rgba(216,46,135,.25),rgba(255,173,1,.25));color:#d82e87;}
.markdown p:last-child{margin-bottom:0;}
.near-item{background:#fff;border:.05rem solid #eee;box-shadow:0 .05rem .05rem rgba(34,34,34,.05),0 .2rem .8rem rgba(34,34,34,.075);border-radius:.8rem;color:#222;display:flex;flex-direction:column;height:100%;min-height:8.5rem;padding:1rem;position:relative;transition:box-shadow .2s ease-in-out,transform .2s ease-in-out;}
.near-item:focus,.near-item:hover{box-shadow:0 .1rem .2rem rgba(34,34,34,.05),0 .4rem 1.6rem rgba(34,34,34,.15);text-decoration:none;transform:translateY(-.1rem);}
.near-item .tile-icon{box-shadow:0 .5rem 1.2rem rgba(34,34,34,.2);}
.near-item .tile-icon,.near-item .tile-icon img{border-radius:50%;height:2rem;width:2rem;}
.near-item .tile-content{overflow:hidden;}
.near-item .tile-content:not(:first-child){padding-left:.8rem;}
.near-item .near-item-header{display:flex;flex:1 1;flex-direction:column;}
.near-item .tile-title{color:#222;font-size:.8rem;font-weight:700;margin-bottom:0;padding-bottom:.1rem;}
.near-item .tile-tags,.near-item .tile-title{line-height:.9rem;overflow:hidden;text-overflow:ellipsis;}
.near-item .tile-tags{font-size:.6rem;height:1rem;padding-top:.1rem;white-space:nowrap;}
.near-item-list{background:transparent;border:0;box-shadow:none;min-height:auto;padding:.5rem;}
.awesome-tag{background:rgba(34,34,34,.05);border-radius:.4rem;color:#3c3c3c;font-size:.7rem;line-height:1.5rem;padding:.25rem .35rem;}
.awesome-tag:focus,.awesome-tag:hover{background:rgba(34,34,34,.08);border-color:rgba(34,34,34,.08);text-decoration:none;}
.articles-container{display:flex;flex-direction:column;}
.articles-container .article-item{display:flex;padding-bottom:.8rem;}
.articles-container .article-item:focus,.articles-container .article-item:hover{text-decoration:none;}
.articles-container .article-item:focus .article-title,.articles-container .article-item:hover .article-title{text-decoration:underline;}
.articles-container .article-image{border-radius:.4rem;box-shadow:0 .2rem .4rem rgba(34,34,34,.1);height:2rem;margin-right:.4rem;-o-object-fit:cover;object-fit:cover;width:2.4rem;}
.articles-container .article-detail{display:flex;flex-direction:column;}
.articles-container .article-title{padding-left:.2rem;font-weight:700;font-size:.7rem;}
.articles-container .article-info{color:#888;padding-left:.2rem;font-weight:400;font-size:.6rem;}
.tile-tags .badge{
    text-transform:lowercase;
    margin-right:5px;
    opacity:0.8;
}
/*! CSS Used keyframes */
@keyframes slide-down{0%{opacity:0;transform:translateY(-1.6rem);}to{opacity:1;transform:translateY(0);}}
.near-bg:before {
    background: linear-gradient(270deg,#fff0e2 35%,#d7dbff);
    right: 15vh;
    top: 10vh;
  }
  .near-bg:after, .near-bg:before {
    border-radius: 50%;
    content: "";
    display: block;
    filter: blur(3rem);
    height: 50vh;
    position: fixed;
    width: 50vh;
    z-index: -1;
  }
  .near-bg:after {
    background: linear-gradient(180deg,#e1d7ff 25%,#e1f4f8);
    bottom: 10vh;
    left: 15vh;
  }
`;

if (!props.id) {
  return " 🐲 🐉 Loading~ ";
}

const componentPath = props.componentPath;
const indexPath = props.indexPath;
const storageBookmark = Storage.get(
  "nearcatalogBookmark",
  componentPath + ".Project"
);

if (state.bookmark == null && storageBookmark) {
  State.update({
    bookmark: storageBookmark,
  });
  console.log("loaded storage bookmark to state: ", storageBookmark);
}
const isInBookmark = (p) => {
  if (!state.bookmark) return false;
  var isFound = false;
  var keys = Object.keys(state.bookmark);
  if (keys.length > 0) {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] == p.slug) {
        isFound = true;
        break;
      }
    }
  }
  return isFound;
};

const toggleBookmark = (p) => {
  var isFound = isInBookmark(p);
  var bookmark = state.bookmark ? state.bookmark : {};
  isFound ? delete bookmark[p.slug] : (bookmark[p.slug] = p);
  State.update({
    bookmarkStatus: isFound ? "removed" : "added",
    bookmark: bookmark,
  });
  Storage.set("nearcatalogBookmark", bookmark);
}; //toggleBookmark

State.init({
  bookmark: null,
  bookmarkStatus: isInBookmark(project) ? "added" : "removed",
});

const project = props.project;
console.log("project info: ", project);
const tags = project.profile.tags;
const tokenTicket = project.profile.tokens
  ? Object.keys(project.profile.tokens)[0]
  : false;
const tokenInfo =
  tokenTicket && project.profile.tokens
    ? project.profile.tokens[tokenTicket]
    : {};
console.log("token info: ", tokenInfo, "ticket: ", tokenTicket);

const twtIframe = `<div align="center"><a class="twitter-timeline"  data-dnt="true"  data-tweet-limit="10"
 href="https://twitter.com/${project.profile.linktree?.twitter}">Twitter</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>`;
return (
  <Css>
    <div className="container grid-xl near-bg">
      <Widget
        src={`${componentPath}.Layout.Navbar`}
        props={{
          indexPath,
        }}
      />

      <Widget
        src={`${componentPath}.Layout.SearchBar`}
        props={{
          indexPath,
          indexer: props.indexer,
          defaultImg: props.defaultImg,
        }}
      />

      <div className="columns">
        <div className="hero-container column col-md-12">
          <div className="awesome-hero">
            <div className="hero-img">
              <img src={project.profile.image.url} alt={project.profile.name} />
            </div>

            <div className="hero-content">
              <h1 className="hero-title">
                {project.profile.name}{" "}
                {tokenTicket && <small>({tokenTicket})</small>}{" "}
              </h1>
              <h2 className="hero-subtitle">{project.profile.tagline}</h2>
              <div className="tile-tags">
                {Object.keys(project.profile.tags).length > 0 &&
                  Object.keys(project.profile.tags).map((e) => {
                    return (
                      <span
                        className="badge rounded-pill bg-secondary text-light"
                        title={e}
                      >
                        {e}
                      </span>
                    );
                  })}
              </div>
            </div>

            <div className="hero-actions">
              <div className="hero-links">
                <div className="btn-group">
                  <a
                    onClick={() => toggleBookmark(project)}
                    rel="noopener noreferrer"
                    className="link-item btn btn-lg"
                  >
                    <i
                      class={
                        isInBookmark(project) ? "bi bi-star-fill" : "bi bi-star"
                      }
                    ></i>
                  </a>
                  {project.profile.linktree.website && (
                    <a
                      href={project.profile.linktree.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-item btn btn-lg btn-primary"
                    >
                      Website
                    </a>
                  )}
                  {project.profile.linktree.twitter && (
                    <a
                      href={project.profile.linktree.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-item btn btn-lg btn-primary"
                      title="Open DApp"
                    >
                      Twitter (X){" "}
                    </a>
                  )}
                </div>
                <div className="btn-group">
                  <div
                    className="link-item btn btn-lg dropdown dropdown-right dropdown-toggle c-hand"
                    tabindex="0"
                  >
                    <i class="bi bi-three-dots-vertical"></i>
                    <ul className="menu">
                      <li className="menu-item">
                        <a
                          href={`https://submit.nearcatalog.xyz/?pid=${props.id}&pname=${project.profile.name}&title=${project.profile.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Report or give feedback
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="hero-links">
                {project.profile.linktree.twitter && (
                  <a
                    href={project.profile.linktree.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item btn btn-lg btn-link"
                    title="Twitter"
                  >
                    <i class="bi bi-twitter-x"></i>
                  </a>
                )}

                {project.profile.linktree.medium && (
                  <a
                    href={project.profile.linktree.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item btn btn-lg btn-link"
                    title="Medium, blog, news, tutorials, and announcements"
                  >
                    <i class="bi bi-medium"></i>
                  </a>
                )}

                {project.profile.linktree.telegram && (
                  <a
                    href={project.profile.linktree.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item btn btn-lg btn-link"
                    title="Telegram groups and channels"
                  >
                    <i class="bi bi-telegram"></i>
                  </a>
                )}
                {project.profile.linktree.github && (
                  <a
                    href={project.profile.linktree.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item btn btn-lg btn-link"
                    title="GitHub, Open source org, Source code repos"
                  >
                    <i class="bi bi-github"></i>
                  </a>
                )}
                {project.profile.linktree.linkedin && (
                  <a
                    href={project.profile.linktree.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item btn btn-lg btn-link"
                    title="Ref Finance LinkedIn company page"
                  >
                    <i class="bi bi-linkedin"></i>
                  </a>
                )}

                {project.profile.linktree.astrodao && (
                  <a
                    href={project.profile.linktree.astrodao}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item btn btn-lg btn-link"
                    title="AstroDAO"
                  >
                    <i class="bi bi-people-fill"></i>
                  </a>
                )}

                {project.profile.linktree.whitepaper && (
                  <a
                    href={project.profile.linktree.whitepaper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item btn btn-lg btn-link"
                    title="Whitepaper"
                  >
                    <i class="bi bi-journal-code"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="content-container column col-12">
          <div
            className="columns content-container"
            id="stats-columns-container-sidebar"
          >
            <div className="column col-lg-12 col-8">
              <div className="near-content">
                <div className="content-widget markdown">
                  <h2 className="content-title">
                    About {project.profile.name}
                  </h2>
                  <div className="content-desc">
                    {project.profile?.description
                      ?.split("\n")
                      .map((item, key) => {
                        return (
                          <span key={key}>
                            {item}
                            <br />
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
              {/* <div className="near-content">
                                <div className="content-widget article-widget">
                                    <h2 className="content-title">{project.profile.name} News</h2>

                                    <div className="articles-container">

                                        <a className="article-item" target="_blank" title="" href="">
                                            <img className="article-image" src=""
                                                alt="" />
                                            <div className="article-detail">
                                                <h3 className="article-title">Orderbook Launch on Ref: Trading Competition with Orderly Network</h3>
                                                <div className="article-info">March 30, 2023</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div> */}
              <div className="near-content">
                <div className="content-widget related-widget">
                  <h2 className="content-title">Related Projects</h2>
                  <div className="content-body">
                    <a
                      className="near-item near-item-list"
                      target="_blank"
                      title="LNC"
                      href="#"
                    >
                      <div className="near-item-header">
                        <div className="tile">
                          <div className="tile-icon">
                            <img src={props.defaultImg} alt="" />
                          </div>
                          <div className="tile-content">
                            <h3 className="tile-title">Learn NEAR Club</h3>
                            <div className="tile-tags text-gray">
                              Learn how to use and build on NEAR and Earn NEAR
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column col-lg-12 col-4">
              {tokenTicket && (
                <div className="near-content">
                  <div className="content-widget chart-widget">
                    <h2 className="content-title">
                      {project.profile.name} Token Stats
                    </h2>

                    <div className="stats-widget">
                      <div class="embed-responsive embed-responsive-4by3">
                        <Widget
                          src={`${componentPath}.Layout.PriceWidget`}
                          props={tokenInfo}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {(tokenInfo.address.near ||
                tokenInfo.address.aurora ||
                tokenInfo.address.ethereum) && (
                <div className="near-content">
                  <div className="content-widget">
                    <h2 className="content-title">Token Contract</h2>

                    {tokenInfo.address.near && (
                      <div className="token-widget">
                        <h3 className="token-widget-label">
                          NEAR Chain (NEP-141)
                          <a
                            href={`https://nearblocks.io/address/${tokenInfo.address.near}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray ml-2"
                            title="NEAR Explorer"
                          >
                            ↗
                          </a>
                        </h3>
                        <div className="token-widget-value">
                          {tokenInfo.address.near}
                        </div>
                      </div>
                    )}

                    {tokenInfo.address.aurora && (
                      <div className="token-widget">
                        <h3 className="token-widget-label">
                          Aurora Chain
                          <a
                            href={`https://explorer.aurora.dev/address/${tokenInfo.address.aurora}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray ml-2"
                            title="Aurorascan Explorer"
                          >
                            ↗
                          </a>
                        </h3>
                        <div className="token-widget-value">
                          {tokenInfo.address.aurora}
                        </div>
                      </div>
                    )}

                    {tokenInfo.address.ethereum && (
                      <div className="token-widget">
                        <h3 className="token-widget-label">
                          Ethereum
                          <a
                            href={`https://etherscan.io/address/${tokenInfo.address.ethereum}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray ml-2"
                            title="Etherscan"
                          >
                            ↗
                          </a>
                        </h3>
                        <div className="token-widget-value">
                          {tokenInfo.address.ethereum}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {project.profile.linktree.twitter && (
                <div className="near-content">
                  <div className="content-widget twitter-widget">
                    {
                      <h2 className="content-title">
                        <a
                          href={project.profile.linktree.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Twitter"
                        >
                          <i class="bi bi-twitter-x"></i>
                          {project.profile.name} Twitter
                        </a>
                      </h2>
                    }
                    <div className="twitter-content embed-responsive embed-responsive-4by3">
                      <small>
                        <i>Open link in new tab with right click or hold</i>{" "}
                      </small>
                      <iframe
                        style={{ minHeight: "500px", width: "103%" }}
                        srcDoc={twtIframe}
                        className="embed-responsive-item"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Css>
);
