const { default: LoginPage } = require("./loginPage");

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return(
        <modal className={showHideClassName}>
            <LoginPage><Button onClick={handleClose}>X</Button></LoginPage>
            
        </modal>
    );
};