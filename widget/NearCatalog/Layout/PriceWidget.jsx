if (!props?.platform?.coingecko) {
  return "";
}
console.log("PriceWidget props: ", props);
const data = fetch(`https://api.coingecko.com/api/v3/coins/${props.platform.coingecko}`, {
  subscribe: true,
  method: "GET",
  headers: {
    Accept: "*/*",
  },
});
console.log("price data: " , data ); 

if(!data) return <></>

return (
  <div className="rounded-4 p-3 mb-3">
    { ( data !== null && data.ok) ? (
      <p>
        <div class="d-flex clearfix flex-wrap flex-column flex-sm-row">
          <div class="p-2">
            <div>
              <img src={props.icon.small} style={{width:"25px"}}/>
              <b>{props.symbol}</b>/usd
            </div>
            <h1>
              ${data.body.market_data.current_price.usd}
              <small
                class={
                  data.body.market_data.price_change_percentage_24h_in_currency
                    .usd < 0
                    ? "text-danger"
                    : "text-success"
                }
                style={{ "font-size": "12px" }}
              >
                {data.body.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                  2
                )}
                %
              </small>
            </h1>
          </div>
          <div class="p-2">
            ATH
            <p class="text-success">
              ${data.body?.market_data?.ath.usd.toFixed(8)}
            </p>
          </div>
          <div class="p-2">
            24h high
            <p>

              <b>${data.body?.market_data?.high_24h.usd.toFixed(8)} </b>
            </p>
          </div>
          <div class="p-2">
            Volume 24h
            <p>
              <b>
                {"$" +
                  data.body.market_data.total_volume.usd
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </b>
            </p>
          </div>
          <div class="p-2">
            24h low
            <p>

              <b>${data.body.market_data.low_24h.usd.toFixed(8)} </b>
            </p>
          </div>
          <div class="p-2">
            Market Cap
            <p>
              <b>
                {
                  data.body.market_data.market_cap?.usd ? "$" + data.body.market_data.market_cap.usd
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-"}
              </b>
            </p>
          </div>

          <div class="p-2">
            Circulating Supply
            <p>
              <b>
                {
                 data.body.market_data?.circulating_supply ?  data.body.market_data.circulating_supply
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-"}
              </b>
            </p>
          </div>
        </div>
        <div>
            <a
              target="_blank"
              style={{ color: "inherit" }}
              variant="caption"
              rel="nofollow"
              href={`https://www.coingecko.com/en/coins/` + props.platform.coingecko }
            >
             View on CoinGecko
            </a>
        </div>
      </p>
    ) : ( 
      <div> {data.error ? data.error : "Loading ..." } </div>
    )}
  </div>
);