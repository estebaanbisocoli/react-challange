import React from "react";
import { useTranslation } from "react-i18next";
import { IProduct, ISimilarProduct } from "../../model/type";
import SimilarItem from "./SimilarItem";
import "./SimilarProducts.scss";
export default function SimilarProducts({
  similarProducts,
}: {
  similarProducts: ISimilarProduct[];
}) {
  const { t } = useTranslation();
  return (
    <div className="similar-products-container ">
      <h2 className="text-lg bold lh16 is-primary">{t("SIMILAR_TITLE")}</h2>
      <div className="similar-products-list">
        {similarProducts.map((product) => (
          <SimilarItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
