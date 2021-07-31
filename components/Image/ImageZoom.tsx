import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index : 5000;
    background: black;
    width: 100vw;
    height: 100vh;
`;
const Header = styled.header`
    height : 44px;
    background: white;
    position: relative;
    padding : 0;
    text-align : center;
`

const ImageZoom = () => {
    return (
        <Overlay>
            <Header/>
        </Overlay>
    );
}

export default ImageZoom;
