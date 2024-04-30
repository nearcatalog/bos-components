console.log("trending props:  ", props);

const Css = styled.div`
.awesome-trending-content{
    overflow-x: scroll; 
    text-align: center;
}

.awesome-trending-content .near-item-sm { 
    display: inline-block; 
    float: none; 
}

@media screen and ( max-width : 700px ){
    .awesome-trending-content{white-space: nowrap !important;} 
}


`;
State.init({
  projects: false,
});
const router = props.router || "";
if (props.cat == "trending") return <></>;

asyncFetch(props.indexer + "/projects-by-category?cid=trending").then((res) => {
  State.update({ projects: res.body });
  console.log("Trending: ", res.body);
});

if (!state.projects) {
  return "🔥🔥🔥";
}
return (
  <Css>
    <h3 className="my-3">🔥Trending</h3>
    <div
      className="awesome-trending-content overflow-auto"
      style={{
        whiteSpace: ["category", "bookmark"].indexOf(router) ? "nowrap" : "",
      }}
    >
      {Object.keys(state.projects).map((e) => {
        let p = state.projects[e];
        return (
          <Link
            className="near-item-sm"
            title={p.profile.name}
            href={`/${props.indexPath}?id=${e}`}
          >
            <div className="tile-icon">
              <img
                src={p.profile.image?.url || props.defaultImg}
                alt={p.profile.name}
              />
            </div>
            <div className="tile-content">
              <h2 className="tile-title">{p.profile.name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  </Css>
);
