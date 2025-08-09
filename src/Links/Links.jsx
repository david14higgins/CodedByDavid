import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import "./Links.css"; 

function Links() {
    return (
        <>
            <div className="icon-menu">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaLinkedin />
            </a>
            <a href="/your-cv.pdf" target="_blank" rel="noopener noreferrer" className="icon-link">
                <HiOutlineDocumentText />
            </a>
            </div>
        </>
    )
}

export default Links;