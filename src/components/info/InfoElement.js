import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

export const Container = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;

export const ColumnRight = styled.div`
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};

    img {
      width: 90%;
      height: 90%;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
