import React, { useEffect, useState } from "react";

export default function Tweet() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    setLoading(true);
    const data = await fetch("/tweets");
    const items = await data.json();
    setItems(items);
    setLoading(false);
    console.log(items);
  };

  return (
    <section>
      {/* <div>{items.length > 0 ? console.log("yes") : <></>}</div> */}
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          {items.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.username}</p>
            </div>
          ))}
        </>
      )}
    </section>
  );
}
