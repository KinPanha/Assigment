import { MouseEventHandler, ReactElement } from "react";

interface Button {
    text? : string
    className? : string
    isSelect? : MouseEventHandler
    children? : ReactElement | ReactElement[]
}
const Button = ({text,isSelect,children,className}:Button) => {
    return ( 
        <button type="button" onClick={isSelect} className={className}>{text} {children}</button>
     );
}
 
export default Button;