import Surface from "./Surface";

function NavBar() {
    return (
        <>
            {
                //On utilise className a la place de class en react
            }
            <nav className="nav-bar">
                <Surface style={{width:'100%', height:'100%', display:'flex', alignItems:'center'}}>
                    <h1>Site Web Officiel 1A2 ESGI</h1>
                </Surface>
            </nav>
        </>
    )
}

export default NavBar;