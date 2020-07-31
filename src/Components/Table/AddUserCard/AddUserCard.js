import React from "react";
import Inputs from "./Inputs";

export default class AddUserCard extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <>
                <div className="nav-item p-t-13">
                    <a href="#open-modal" className={'button is-outline '}>Add Card</a>
                </div>
                <div id="open-modal" className="modal">
                    <div className="modal-container">
                        <a href="#close"
                           className="close"><i
                            className="d-icon d-close"/>
                        </a>
                        <div className="modal-content">
                            <h3 className={'center-xs'}>Add ur card</h3>
                            <hr/>
                                <Inputs/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
