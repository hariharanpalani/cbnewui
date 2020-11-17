import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface IArrowProps {
    
}

function ArrowComponent(prpos: IArrowProps) {
    return (
        <Svg width="10.23" height="10.23" viewBox="0 0 10.23 10.23">
            <Path d="M4,8.476h7.782L8.207,4.9,9.115,4,14.23,9.115,9.115,14.23l-.9-.9,3.568-3.574H4Z" transform="translate(-4 -4)" fill="#fff"/>
        </Svg>
    );
}

export default ArrowComponent;