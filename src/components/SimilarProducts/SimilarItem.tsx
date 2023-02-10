import { t } from "i18next";
import React from "react";
import { ISimilarProduct } from "../../model/type";
import { formatCurrencyUSDWithoutDecimals } from "../../utils/currency";
import "./SimilarItem.scss";
export default function SimilarItem({ product }: { product: ISimilarProduct }) {
  return (
    <div className="similar-item-container">
      <img
        src={product.image}
        alt={product.name}
        width={336}
        height={336}
      ></img>
      <h3 className="text-normal lh16 bold is-primary">{product.name}</h3>
      <div className="similar-item-info">
        <span className="text-xs lh16 semi-bold is-primary">
          {formatCurrencyUSDWithoutDecimals(product.price.min)} -{" "}
          {formatCurrencyUSDWithoutDecimals(product.price.max)}
        </span>
        <div className="text-xxs lh16 regular is-primary">
          <span className="is-light-text">{t("SIMILAR_MINIMUN")} </span>
          <span>24</span>
        </div>
      </div>
    </div>
  );
}
