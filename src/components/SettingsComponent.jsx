import { Col , Container , Row } from "react-bootstrap";
import { Button , Form } from "react-bootstrap";
import { useLocation , useNavigate } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi"
import { MdOutlineAddLocationAlt } from "react-icons/md"
import { GrUserSettings } from "react-icons/gr";
import { RiUserSettingsLine } from "react-icons/ri";

function SettingsComponent() {

    const navigate = useNavigate ()
    const location = useLocation ()

    return (
        <Container className="text-center settingsContainer">
            <Row className="d-flex flex-column justify-content-between align-items-start h-100">
                    {
                        location.pathname === "/login" ||
                        location.pathname === "/signup" || (
                            <Col className="d-flex flex-column justify-content-end">
                                {
                                    location.pathname === "/putCliente" && (
                                        <>
                                            <RiUserSettingsLine color={ location.pathname === "/putCliente" ? "royalblue" : "black"} className="d-block mx-auto " style={ {fontSize : "3rem"} }/>
                                            <Button
                                                variant={ "light" }
                                                className={ location.pathname === "/putCliente" ? "d-block w-100 boxShadowSelected" : "d-block w-100" }
                                                onClick={ () => navigate ( "/putCliente" ) }
                                            >
                                                Modifica cliente
                                            </Button>
                                            {
                                                location.pathname === "/putCliente" ? (
                                                    <div className="segnalino2 me-auto"></div>
                                                ) : (
                                                    <div style={
                                                        {
                                                            height : "40px" ,
                                                            width : "40px"
                                                        }
                                                    }>

                                                    </div>
                                                )
                                            }
                                        </>
                                    )
                                }
                                {
                                    location.pathname === "/postClient" && (
                                        <>
                                            <FiUserPlus className="d-block mx-auto " style={ {fontSize : "3rem"} }
                                                        color={ location.pathname === "/postClient" ? "royalblue" : "black" }/>
                                            <Button
                                                variant={ "light" }
                                                className={ location.pathname === "/postClient" ? "d-block w-100 boxShadowSelected" : "d-block w-100" }
                                                onClick={ () => navigate ( "/postClient" ) }
                                            >
                                                Inserisci cliente
                                            </Button>
                                            {
                                                location.pathname === "/postClient" ? (
                                                    <div className="segnalino2 me-auto"></div>
                                                ) : (
                                                    <div style={
                                                        {
                                                            height : "40px" ,
                                                            width : "40px"
                                                        }
                                                    }>

                                                    </div>
                                                )
                                            }
                                        </>
                                    )
                                }
                                {
                                    location.pathname === "/postUtenti" && (
                                        <>

                                            <FiUserPlus className="d-block mx-auto " style={ {fontSize : "3rem"} }
                                                        color={ location.pathname === "/postUtenti" ? "royalblue" : "black" }/>
                                            <Button
                                                variant={ "light" }
                                                className={ location.pathname === "/signup" ? "d-block w-100 boxShadowSelected" : "d-block w-100" }
                                                onClick={ () => navigate ( "/postUtenti" ) }
                                            >
                                                Inserisci utente
                                            </Button>
                                            {
                                                location.pathname === "/postUtenti" ? (
                                                    <div className="segnalino2 me-auto"></div>
                                                ) : (
                                                    <div style={
                                                        {
                                                            height : "40px" ,
                                                            width : "40px"
                                                        }
                                                    }>

                                                    </div>
                                                )
                                            }

                                        </>
                                    )
                                }
                                {
                                    location.pathname === "/clienti" && (
                                        <>
                                            <GrUserSettings className="d-block mx-auto " style={ {fontSize : "3rem"} }
                                                        color={ location.pathname === "/putCliente" ? "royalblue" : "black" }/>
                                            <Button
                                                variant={ "light" }
                                                className={ location.pathname === "/putCliente" ? "d-block w-100 boxShadowSelected" : "d-block w-100" }
                                                onClick={ () => navigate ( "/putCliente" ) }
                                            >
                                                Modifica cliente
                                            </Button>
                                            {
                                                location.pathname === "/putCliente" ? (
                                                    <div className="segnalino2 me-auto"></div>
                                                ) : (
                                                    <div style={
                                                        {
                                                            height : "40px" ,
                                                            width : "40px"
                                                        }
                                                    }>

                                                    </div>
                                                )
                                            }
                                            <FiUserPlus className="d-block mx-auto " style={ {fontSize : "3rem"} }
                                                        color={ location.pathname === "/postClient" ? "royalblue" : "black" }/>
                                            <Button
                                                variant={ "light" }
                                                className={ location.pathname === "/postClient" ? "d-block w-100 boxShadowSelected" : "d-block w-100" }
                                                onClick={ () => navigate ( "/postClient" ) }
                                            >
                                                Inserisci cliente
                                            </Button>
                                            {
                                                location.pathname === "/postClient" ? (
                                                    <div className="segnalino2 me-auto"></div>
                                                ) : (
                                                    <div style={
                                                        {
                                                            height : "40px" ,
                                                            width : "40px"
                                                        }
                                                    }>

                                                    </div>
                                                )
                                            }
                                        </>
                                    )
                                }
                                {
                                    location.pathname === "/utenti" && (
                                        <>

                                            <FiUserPlus className="d-block mx-auto " style={ {fontSize : "3rem"} }
                                                        color={ location.pathname === "/signup" ? "royalblue" : "black" }/>
                                            <Button
                                                style={{
                                                    marginBottom: "40px"
                                                }}
                                                variant={ "light" }
                                                className={ location.pathname === "/signup" ? "d-block w-100 boxShadowSelected" : "d-block w-100" }
                                                onClick={ () => navigate ( "/postUtenti" ) }
                                            >
                                                Inserisci utente
                                            </Button>

                                        </>
                                    )
                                }
                                {
                                    location.pathname === "/" && (
                                        <>
                                            <MdOutlineAddLocationAlt className="d-block mx-auto " style={ {fontSize : "3rem"} }
                                                                     color={ location.pathname === "/postAddress" ? "royalblue" : "black" }/>
                                            <Button
                                                variant={ "light" }
                                                className={ location.pathname === "/postAddress" ? "d-block w-100 boxShadowSelected" : "d-block w-100" }
                                                onClick={ () => navigate ( "/postAddress" ) }
                                            >
                                                Aggiungi indirizzo
                                            </Button>
                                            {
                                                location.pathname === "/postAddress" ? (
                                                    <div className="segnalino2 me-auto"></div>
                                                ) : (
                                                    <div style={
                                                        {
                                                            height : "40px" ,
                                                            width : "40px"
                                                        }
                                                    }>

                                                    </div>
                                                )
                                            }
                                        </>
                                    )
                                }
                            </Col>
                        )
                    }
            </Row>

        </Container>
    );
}

export default SettingsComponent;
