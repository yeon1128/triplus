import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { useGetData } from "../../hooks/useGetData";
import * as S from "./style";

export default function ProfileMidSection() {
  const { data, isLoading, getData, setData } = useGetData();
  const { accountname } = useParams();
  const url = `${process.env.REACT_APP_API_KEY}/product/${accountname}`;
  useEffect(() => {
    getData(url, "product");
  }, [accountname]);
  return isLoading ? null : data.length > 0 ? (
    <S.ProfileMidSec>
      <S.ProfileMidSectionCon>
        <S.ProfileMidSectionH2>판매중인 상품</S.ProfileMidSectionH2>
        <S.ProfileMidSectionUl>
          {/* {data.map((product) => {
            return (
              <li key={product.id}>
                <a href={product.link}>
                  <S.ProfileMidSectionImg
                    src={product.itemImage}
                    alt="상품 이미지"
                  />
                  <S.ProfileMidSectionTxt>
                    {product.itemName}{" "}
                  </S.ProfileMidSectionTxt>
                  <S.ProfileMidSectionPrice>
                    {product.price.toLocaleString("ko-KR")}원
                  </S.ProfileMidSectionPrice>
                </a>
              </li>
            );
          })} */}
          {data.map((product) => {
            return (
              <ProductCard
                setData={setData}
                accountname={accountname}
                productId={product.id}
                productLink={product.link}
                productItemImage={product.itemImage}
                productItemName={product.itemName}
                productPrice={product.price}
              />
            );
          })}
        </S.ProfileMidSectionUl>
      </S.ProfileMidSectionCon>
    </S.ProfileMidSec>
  ) : null;
}
