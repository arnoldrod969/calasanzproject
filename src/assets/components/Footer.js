import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
    return (
        <div>
            <footer>
                <p className="float-right"><Link to={"/"}>Back to top</Link></p>
                <p>© 2019-2020 School project... · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>
        </div>
    )
}

export default Footer
