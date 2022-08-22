import React from "react";
import { CampConteiner } from "./style";
import Conteiner from "./Conteiner";

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

export const Resume = ({ income, expense, total }) => {

    return(
            <CampConteiner>
                <Conteiner title="Input:" Icon={FaRegArrowAltCircleUp} value={income}/>
                <Conteiner title="Output:" Icon={FaRegArrowAltCircleDown} value={expense}/>
                <Conteiner title="Total:" Icon={FaDollarSign} value={total}/>
            </CampConteiner>
    )

}