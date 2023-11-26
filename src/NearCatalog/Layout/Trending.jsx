
const Css = styled.div`
.awesome-trending-content{
    overflow-x: scroll; 
   white-space: nowrap; 
}
.awesome-trending-content .near-item-sm { 
   display: inline-block; 
   float: none; 
}
.awesome-trending .awesome-trending-content{align-items:flex-start;display:flex;flex-wrap:nowrap;margin-top:1rem;overflow-x:auto;}
.awesome-trending .awesome-trending-content::-webkit-scrollbar{display:none;}
.awesome-trending .near-item-sm{flex:0 0 auto;margin-right:.1rem;width:5.5rem;}
.near-item-sm{align-items:center;border-radius:.8rem;display: block;flex-direction:column;padding:.5rem;transition:all .15s ease;float: left;}
.near-item-sm:focus,.near-item-sm:hover{background:rgba(34,34,34,.05);text-decoration:none;}
.near-item-sm .tile-icon{box-shadow:0 .5rem 1.2rem rgba(34,34,34,.2);border-radius:50%;height:3.2rem;margin:.5rem auto;width:3.2rem;}
.near-item-sm .tile-icon img{border-radius:50%;height:100%;width:100%;}
.near-item-sm .tile-content{width:100%;}
.near-item-sm .tile-title{font-size:.7rem;text-align:center;color: rgb(34, 34, 34); font-weight:bold}
`;
const componentPath = props.componentPath;
let query = false;
State.init({
    projects : false
});
asyncFetch("https://nearcatalog.loc/wp-json/nearcatalog/v1/projects-by-category?cid=trending").then( res =>{
    State.update({projects:  res.body});
    console.log("async fecth ready! " , res.body);
} );

if (!state.projects) {
  return "🔥🔥🔥";
}
// const projects = query.body;
return (
    <Css>
        <h3 className="my-3">🔥Trending</h3>
        <div className="awesome-trending-content overflow-auto">
            {
                Object.keys(state.projects).map((e) => {
                    let p = state.projects[e];
                    return (<a className="near-item-sm" title={p.profile.name} href={`/${componentPath}.Project?id=${e}`}>
                        <div className="tile-icon"><img src={p.profile.image?.url || "https://learnnear.club/wp-content/uploads/2021/09/lnc-profile-desktop-150x150.png"}
                         alt={p.profile.name}/></div>
                        <div className="tile-content">
                            <h2 className="tile-title">{p.profile.name}</h2>
                        </div>
                    </a>)
                })
            }
        </div>
    </Css>
);