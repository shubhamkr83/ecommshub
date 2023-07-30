import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import styled from "styled-components";

const Product = (curElem) => {
  const { id, title, image, price } = curElem;
  return (
    <Wrapper >
      <div className="card">
        <figure>
          <img src={image} alt={title} />
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{title}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.card {
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    ${'' /* border: 2px solid red; */}


    .card-data {
      padding: 0 1.6rem;
      border: 2px solid #ffff;

    }

    .card-data-flex {
      width: 24rem;
      height: 8rem;
      margin: 1.6rem 0;
      padding: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${'' /* border: 2px solid red; */}
      
    }

    h3 {
      width: 14rem;
      height: 6.4rem;
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
      overflow: hidden;
      text-overflow: ellipsis;
      ${'' /* border: 2px solid red; */}
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default Product;
