import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CustomButton = (props) => {
   return (
      <div
         className={`buttonContainer ${props.divClassName}`}
         onClick={props.onClick}
      >
         <FontAwesomeIcon
            className={`Icon ${props.iconClassName}`}
            icon={props.icon}
         />
      </div>
   );
};
