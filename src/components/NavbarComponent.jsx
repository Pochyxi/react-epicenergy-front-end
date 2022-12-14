import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClientList, logout } from "../redux/actions/actions";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FiUsers, FiHome, FiUser } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";

function NavbarComponent() {
  const dispatch = useDispatch();

  const location = useLocation();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.user.token);


  const navigate = useNavigate();

  useEffect(() => {
    if (user.token === undefined) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.token]);

  return (
    <Container className="text-center navbarContainer">
      <Row className="d-flex flex-column justify-content-between align-items-start h-100">
        <Col className="d-flex flex-column justify-content-start">
          {location.pathname === "/login" || location.pathname === "/signup" ? (
            <>
              <div
                style={{
                  height: "40px",
                  width: "40px",
                }}
              ></div>
              <Button
                className={
                  location.pathname === "/login"
                    ? "d-block w-100 boxShadowSelected"
                    : "d-block w-100"
                }
                variant="light"
                onClick={() => navigate("/login")}
              >
                ACCEDI
              </Button>
              {location.pathname === "/login" ? (
                <div className="segnalino ms-auto"></div>
              ) : (
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                ></div>
              )}
              <Button
                className={
                  location.pathname === "/signup"
                    ? "d-block w-100 boxShadowSelected"
                    : "d-block w-100"
                }
                variant="light"
                onClick={() => navigate("/signup")}
              >
                REGISTRATI
              </Button>
              {location.pathname === "/signup" ? (
                <div className="segnalino ms-auto"></div>
              ) : (
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                ></div>
              )}
            </>
          ) : (
            <>
              <div
                  style={{
                    backgroundColor: "aliceblue",
                    borderRadius: "50px"
                  }}
                  className="d-flex justify-content-beetween mt-2">
                <AiOutlineLogout
                  className="d-block me-auto"
                  color="red"
                  style={{ fontSize: "3rem", cursor: "pointer" }}
                  onClick={() => dispatch(logout())}
                />

                <FaRegUserCircle style={{ fontSize: "3rem" }} />
              </div>
                <p
                    style={{
                      color: "royalblue",
                      fontWeight: "bold",
                      textAlign: "center"
                    }}
                    >Autenticato come {user.username}</p>
              <div
                style={{
                  height: "40px",
                  width: "40px",
                }}
              ></div>
              {
                  user.roles?.filter ( el => el === "ROLE_ADMIN" ).length !== 0 && (
                      <>
                        <FiHome
                            className="d-block mx-auto "
                            style={{ fontSize: "3rem" }}
                            color={location.pathname === "/" ? "royalblue" : "black"}
                        />
                        <Button
                            className={
                              location.pathname === "/"
                                  ? "d-block w-100 boxShadowSelected"
                                  : "d-block w-100"
                            }
                            variant="light"
                            onClick={() => navigate("/")}
                        >
                          HOME
                        </Button>
                        {location.pathname === "/" ? (
                            <div className="segnalino ms-auto"></div>
                        ) : (
                            <div
                                style={{
                                  height: "40px",
                                  width: "40px",
                                }}
                            ></div>
                        )}
                      </>
                  )
              }

              <FiUsers
                className="d-block mx-auto"
                style={{ fontSize: "3rem" }}
                color={location.pathname === "/clienti" ? "royalblue" : "black"}
              />
              <Button
                className={
                  location.pathname === "/clienti"
                    ? "d-block w-100 boxShadowSelected"
                    : "d-block w-100"
                }
                variant="light"
                onClick={() => navigate("/clienti")}
              >
                CLIENTI
              </Button>
              {location.pathname === "/clienti" ? (
                <div className="segnalino ms-auto"></div>
              ) : (
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                ></div>
              )}
              {
                  user.roles?.filter ( el => el === "ROLE_ADMIN" ).length !== 0 && (
                      <>
                        <FiUser
                            className="d-block mx-auto"
                            style={{ fontSize: "3rem" }}
                            color={location.pathname === "/utenti" ? "royalblue" : "black"}
                        />
                        <Button
                            className={
                              location.pathname === "/utenti"
                                  ? "d-block w-100 boxShadowSelected"
                                  : "d-block w-100"
                            }
                            variant="light"
                            onClick={() => {navigate("/utenti"); dispatch(getClientList(token))}}
                        >
                          UTENTI
                        </Button>
                        {location.pathname === "/utenti" ? (
                            <div className="segnalino ms-auto"></div>
                        ) : (
                            <div
                                style={{
                                  height: "40px",
                                  width: "40px",
                                }}
                            ></div>
                        )}
                      </>
                  )
              }


              <RiBillLine
                  className="d-block mx-auto"
                  style={{ fontSize: "3rem" }}
                  color={location.pathname === "/fatture" ? "royalblue" : "black"}
              />
              <Button
                  className={
                    location.pathname === "/fatture"
                        ? "d-block w-100 boxShadowSelected"
                        : "d-block w-100"
                  }
                  variant="light"
                  onClick={() => navigate("/fatture")}
              >
                FATTURE
              </Button>
              {location.pathname === "/fatture" ? (
                  <div className="segnalino ms-auto"></div>
              ) : (
                  <div
                      style={{
                        height: "40px",
                        width: "40px",
                      }}
                  ></div>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default NavbarComponent;
