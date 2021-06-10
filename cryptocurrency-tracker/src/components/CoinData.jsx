import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white mt-4 p-4 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Капитализация (руб.)</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Всего монет
              </span>
              <span>{data.total_supply}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Капитализация
              </span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">low 24h</span>
              <span>{data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
