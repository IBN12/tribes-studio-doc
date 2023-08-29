import { AnimatePresence, motion } from "framer-motion";

import { WorkspaceLogin } from "./WorkspaceLogin";

import "../styles/WorkspaceWindow.css";

// workspace variant: 
const workspace = {
    hidden: {x: "100%"},
    visible: {opacity: 1, x: 0,},
}

// WorkspaceWindow(): The workspace window component container.
export const WorkspaceWindow = () => {
    return (
        <AnimatePresence>
            <motion.div 
                className="workspace-window-component-container"
                variants={workspace}
                animate="visible"
                initial="hidden"
                transition={{duration: 0.8, ease: "easeOut", type: 'spring', bounce: 0.3, restSpeed: 0.3}}
                exit="hidden"
            >
                <WorkspaceLogin />
            </motion.div>
        </AnimatePresence>
    );
}