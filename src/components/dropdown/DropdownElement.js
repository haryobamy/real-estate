import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

export const Icon = styled.div`
  top: 1.2rem;
  position: absolute;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const DropdownWrapper = styled.div``;

export const DropdpwnMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const CloseIcon = styled(FaIcons.FaTimes)`
  color: #000d1a;
`;

export const DropdownLink = styled(Link)`
  display: flex;
  /* flex-direction: column; */
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
