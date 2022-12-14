import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginComponent from "./components/PostComponents/LoginComponent";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Col , Container , Row } from "react-bootstrap";
import HomeComponent from "./components/HomeComponent";
import SignUpComponent from "./components/PostComponents/SignUpComponent";
import NavbarComponent from "./components/NavbarComponent";
import SettingsComponent from "./components/SettingsComponent";
import ClientPostComponent from "./components/PostComponents/ClientPostComponent";
import AddressPostComponent from "./components/PostComponents/AddressPostComponent";
import ClientiComponent from "./components/GetComponents/ClientiComponent";
import UserComponent from "./components/GetComponents/UserComponent";
import PostUserComponent from "./components/PostComponents/PostUserComponent";
import PutClienteComponent from "./components/PutComponents/PutClienteComponent";
import { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import FattureComponent from "./components/GetComponents/FattureComponent";
import FatturaPostComponent from "./components/PostComponents/FatturaPostComponent";
import FatturaPutComponent from "./components/PutComponents/FatturaPutComponent";
import PutUserComponent from "./components/PutComponents/PutUserComponent";
import { RiListSettingsLine } from "react-icons/ri";

function App() {

    const [ settingsFlag , setSettingsFlag ] = useState ( false );


    return (
        <BrowserRouter>
            <Container fluid >
                <Row className="d-flex justify-content-between mainContainer">
                    <Col className="p-0" xs={ 2 }>
                        <NavbarComponent/>
                    </Col>
                    <Col xs={ settingsFlag ? 8 : 10 } className={ "px-5 py-1" }>
                        {
                            settingsFlag ? (
                                <Col xs={ 12 }>
                                    <SlArrowLeft
                                        onClick={ () => {
                                            setSettingsFlag ( !settingsFlag )
                                        } }
                                        style={ {
                                            color : "royalblue" ,
                                            zIndex : 10 ,
                                            position : "fixed" ,
                                            right : "5px" ,
                                            top : "15px" ,
                                            fontWeight : "bolder" ,
                                        } }
                                        className="openSettings"/>
                                </Col>
                            ) : (
                                <Col
                                    xs={ 12 }>
                                    <RiListSettingsLine
                                        onClick={ () => {
                                            setSettingsFlag ( !settingsFlag )
                                        } }
                                        style={ {
                                            color : "aliceblue" ,
                                            zIndex : 10 ,
                                            position : "fixed" ,
                                            right : "15px" ,
                                            top : "20px" ,
                                            fontWeight : "bolder" ,
                                            backgroundColor:"royalblue",
                                            borderBottomLeftRadius: "10px"
                                        } }
                                        className="hideSettings"
                                    />
                                </Col>
                            )
                        }

                        <Routes>
                            <Route path="/" element={ <HomeComponent/> }/>
                            <Route path="/login" element={ <LoginComponent/> }/>
                            <Route path="/signup" element={ <SignUpComponent/> }/>
                            <Route path="/postClient" element={ <ClientPostComponent/> }/>
                            <Route path="/postAddress" element={ <AddressPostComponent/> }/>
                            <Route path="/clienti" element={ <ClientiComponent/> }/>
                            <Route path="/utenti" element={ <UserComponent/> }/>
                            <Route path="/postUtenti" element={ <PostUserComponent/> }/>
                            <Route path="/putCliente" element={ <PutClienteComponent/> }/>
                            <Route path="/putUtente" element={ <PutUserComponent/> }/>
                            <Route path="/fatture" element={ <FattureComponent/> }/>
                            <Route path="/postFatture" element={ <FatturaPostComponent/> }/>
                            <Route path="/putFattura" element={ <FatturaPutComponent/> }/>
                        </Routes>
                    </Col>
                    {
                        settingsFlag && (
                            <Col className={ "p-0" } xs={ 2 }>
                                <SettingsComponent/>
                            </Col>
                        )
                    }

                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
