import React from 'react';

// eslint-disable-next-line react/prop-types
export default function ShopButton({ sectionStyle }) {
  return (
    <button className={`shop-link__button bold-font-style ${sectionStyle}`} type="button">shop</button>
  );
}
