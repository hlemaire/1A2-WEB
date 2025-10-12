import Surface from "./Surface";

function NavBar({width}) {
    return (
        <>
            {
                //On utilise className a la place de class en react
            }
            <nav className="nav-bar">
                <Surface style={
                    {width:'100%', height:'100%',
                    display:'flex', flexDirection:'row', justifyContent:'space-between',
                    alignItems:'center'}}>
                    {(width>480) ? <h1>ESGI 1A2</h1> : <h1>ESGI</h1>}
                    <div style={{display:'flex', flexDirection:'row', gap:'var(--sp-sm)'}}>
                        <a href="https://myges.fr/"><h2>myGES</h2></a>
                        <a href="https://discord.gg/zM5f9CrZ"><h2>Discord</h2></a>
                    </div>
                </Surface>
            </nav>
        </>
    )
}

export default NavBar;