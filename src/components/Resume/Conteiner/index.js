import React from "react";
import { ConteinerStyle, Header, HeaderTitle, TotalMoney } from "./style";


 const Conteiner = ( { title, Icon, value } ) => {

    return(
        <>
            <ConteinerStyle>
                <Header>
                    <HeaderTitle>{title}</HeaderTitle>
                    <Icon />
                </Header>
                <TotalMoney>{value}</TotalMoney>
            </ConteinerStyle>
        </>
    )

}

export default Conteiner;