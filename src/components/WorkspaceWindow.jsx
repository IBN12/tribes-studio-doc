import { AnimatePresence, motion } from "framer-motion";

import { WorkspaceLogin } from "./WorkspaceLogin";
import { CloseButton } from "./CloseButton";

import "../styles/WorkspaceWindow.css";

import PropTypes from 'prop-types';

import { useLocation } from "react-router-dom";

// workspace variant: 
const workspace = {
    hidden: {x: "100%"},
    visible: {opacity: 0.9, x: 0,},
}

// WorkspaceWindow(): The workspace window component container.
export const WorkspaceWindow = (props) => {
    const {setDisplayWorkspaceWindow} = props;
    const location = useLocation();

    return (
        <AnimatePresence>
                <motion.div 
                    key={location}
                    className="workspace-window-component-container"
                    variants={workspace}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{duration: 0.8, ease: "easeIn", type: 'spring', bounce: 0.3, restSpeed: 0.3}}
                >
                    <CloseButton setDisplayWorkspaceWindow={setDisplayWorkspaceWindow} />
                    <WorkspaceLogin />
                </motion.div>
        </AnimatePresence>
    );
}

// WorkspaceWindow PropType:
WorkspaceWindow.propTypes = {
    setDisplayWorkspaceWindow: PropTypes.func,
    displayWorkspaceWindow: PropTypes.bool,
};