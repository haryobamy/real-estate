import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const NavLink = css`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;
  color: #fff;
  text-decoration: none;
`;

export const Nav = styled.div`
  height: 60px;

  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

export const Logo = styled(Link)`
  ${NavLink}

  font-style: italic;
`;

export const MenuBars = styled(FaIcons.FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 30px;
    width: 30px;
    cursor: pointer;
    transform: translate(-50%, 5%);
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  margin-right: -48px;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// export const Bars = styled(FaIcons.FaBars)`
//   font-size: 1.5rem;
//   top: -240px;
//   position: relative;
//   /* transform: translate(-50%, -15%); */
//   /* margin: -80px 0px 0px 0px; */
// `;
