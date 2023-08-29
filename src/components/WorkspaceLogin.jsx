import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WorkspaceLogin.css";

// WorkspaceLogin(): The workspace login component container.
export const WorkspaceLogin = () =>{
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        const workspaceLoginInput = document.querySelector('#workspace-login > div:nth-child(1) > input');
        workspaceLoginInput.addEventListener('input', () => {
            if (workspaceLoginInput.value !== "cat")
            {
                workspaceLoginInput.setCustomValidity("Invalid Member Passsword");
            }
            else
            {
                workspaceLoginInput.setCustomValidity("");
            }
            workspaceLoginInput.reportValidity();
        });
    });

    return(
        <div className="workspace-login-component-container">
            <form id="workspace-login" onSubmit={(e) =>{
                e.preventDefault();
                const workspaceLogin = document.getElementById('workspace-login');
                if (password === "cat")
                {
                    console.log("Re-navigate the user to a different page.");
                    workspaceLogin.reset();
                    navigate("workspace", {replace:true});
                }
            }}>
                <div>
                    <label htmlFor="workspace-password">Workspace Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="text" name="workspace-password" maxLength={50} value={password} />
                    <p><i>The workspace password is for members working on projects.</i></p>
                </div>

                <div>
                    <button type="submit">Enter</button>
                </div>
            </form>
        </div>
    );
}