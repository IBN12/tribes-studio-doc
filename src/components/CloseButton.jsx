import "../styles/CloseButton.css";

import PropTypes from 'prop-types';

//CloseButton(): The close button component container.
export const CloseButton = (props) => {
    const {setDisplayWorkspaceWindow} = props;

    return (
        <div className="close-button-component-container">
            <button onClick={() => setDisplayWorkspaceWindow(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
                </svg>
            </button>
        </div>
    );
}

// CloseButton PropType: 
CloseButton.propTypes = {
    setDisplayWorkspaceWindow: PropTypes.func,
}