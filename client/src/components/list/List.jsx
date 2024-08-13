import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import "./List.scss";
import { useState, useEffect } from "react";

const List = ({ subCats, sort, maxPrice, catId }) => {
  const [sortQuery, setSortQuery] = useState("");
  const filter = subCats
    .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
    .join("");

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${filter}&[filters][price][$lte]=${maxPrice}${sortQuery}`
  );

  useEffect(() => {
    if (sort) {
      setSortQuery(`&sort=price:${sort}`);
    }
  }, [sort]);

  return (
    <div className="list">
      {loading
        ? "loading.."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
