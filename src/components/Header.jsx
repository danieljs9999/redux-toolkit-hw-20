import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authAction } from "../store/auth/authSlise";

const setActive = ({ isActive }) => (isActive ? "activeLink" : "noActiveLink");

const Header = () => {
  const dispatch = useDispatch((state) => state.auth.authReducer);
  const navigate = useNavigate();

  const isAuthorised = useSelector((state) => state.auth.isAuthOrised);

  const logoutHandler = () => {
    dispatch(authAction.logOut());
    navigate("/auth");
  };

  return (
    <HeaderStyle>
      <h1>Redux Auth</h1>
      {isAuthorised === true ? (
        <nav>
          <button onClick={logoutHandler}>
            <NavLink to="/auth" className={setActive}>
              Logout
            </NavLink>
          </button>
        </nav>
      ) : null}
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3c0080;
  color: white;
  padding: 0 10%;

  .activeLink {
    color: #2c2922;
    text-decoration: none;
  }

  .noActiveLink {
    text-decoration: none;
  }

  button {
    font-size: 1.25rem;
    background-color: #ffbb00;
    border: 1px solid #ffbb00;
    padding: 0.5rem 1.5rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    color: #2c2922;
    border-radius: 6px;

    :hover {
      background-color: #ffa600;
      border-color: #ffa600;
    }

    :active {
      background-color: #b97800;
      border-color: #b97800;
    }
  }
`;
