import styled from "styled-components";

export const Outer = styled.div.attrs({
  className: "crystallize-growl"
})`
  position: fixed;
  z-index: 999;
  top: 15px;
  right: 15px;
  min-width: 200px;
  max-width: 40vw;
`;

export const Growl = styled.div.attrs({
  className: "crystallize-growl__item"
})`
  padding: 10px 20px;
  background: #fff;
  box-shadow: 0 0 5px #000;
  cursor: pointer;
  text-align: center;

  transition: transform 100ms, opacity 100ms;
  transform: ${p => (p.animatedIn ? "none" : "scale(.75)")};
  opacity: ${p => (p.animatedIn ? "1" : "0")};

  &:not(:first-child) {
    margin-top: 10px;
  }
`;