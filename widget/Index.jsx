const owner = "${config_account}";
const componentPath = `${owner}/widget/NearCatalog`;
const indexer = "https://nearcatalog.xyz/wp-json/nearcatalog/v1";
const defaultImg =
  "https://learnnear.club/wp-content/uploads/2021/09/lnc-profile-desktop-150x150.png";

const projects = {};
let router = "home";
const query = "";

let widgetSrc = "";
let widgetProps = {};

if (props?.bookmark) {
  router = "bookmark";
} else if (props?.cat.length > 0) {
  router = "category";
} else if (props?.id) {
  router = "project";
}

function loadingScreen() {
  return <>👀📗~~</>;
}

console.log("router: ", router);

switch (router) {
  case "project":
    query = fetch(indexer + "/project?pid=" + props.id);
    if (!query || !query.body) {
      return loadingScreen();
    }
    widgetSrc = `${componentPath}.Project`;
    widgetProps = {
      id: props.id,
      project: query.body,
    };
    break;

  case "category":
    query = fetch(indexer + "/projects-by-category?cid=" + props.cat);
    projects = query.body;
    if (!query) {
      return loadingScreen();
    }
    widgetSrc = `${componentPath}.Layout.AppGrid`;
    widgetProps = {
      cat: props.cat,
    };
    break;

  case "bookmark":
    widgetSrc = `${componentPath}.Layout.AppGrid`;
    widgetProps = {
      bookmark: true,
    };
    projects = Storage.get("nearcatalogBookmark", componentPath + ".Project");
    break;

  default:
    //home router
    query = fetch(indexer + "/projects");
    if (!query || !query.body) {
      return loadingScreen();
    }
    projects = query.body;
    widgetSrc = `${componentPath}.Layout.AppGrid`;
    break;
}

let p = {
  ...{
    componentPath,
    indexPath: owner + "/widget/Index",
    owner,
    indexer,
    projects,
    defaultImg,
    router,
  },
  ...widgetProps,
};
console.log("final props", p);
return (
  <div key={router}>
    <Widget src={widgetSrc} props={p} />
  </div>
);
