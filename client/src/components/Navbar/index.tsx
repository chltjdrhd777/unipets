import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Index() {
  return (
    <NavItems>
      <li>
        <i className="fas fa-home"></i>
        <Link to="/">home</Link>
      </li>

      <li>
        <i className="far fa-bell"></i>
        <Link to="/alarm">알람</Link>
      </li>

      <li>
        <i className="far fa-list-alt"></i>
        <Link to="/community">게시판</Link>
      </li>

      <li>
        <i className="fas fa-shopping-basket"></i>
        <Link to="/market">장터</Link>
      </li>

      <li>
        <i className="far fa-bookmark"></i>
        <Link to="/book">북마크</Link>
      </li>

      <li>
        <Link to="">내가 쓴 글</Link>
      </li>
    </NavItems>
  );
}

const NavItems = styled.ul`
  background-color: blue;
  position: fixed;
  height: 100%;
`;

export default Index;
