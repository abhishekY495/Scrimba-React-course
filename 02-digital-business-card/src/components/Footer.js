import githubLogo from "../images/github.svg";
import twitterLogo from "../images/twitter.svg";
import linkedinLogo from "../images/linkedin.svg";

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/abhishekY495">
                <img className='footer-logo' src={twitterLogo} alt="twitter" />
            </a>
            <a href="https://github.com/abhishekY495">
                <img className='footer-logo' src={githubLogo} alt="github" />
            </a>
            <a href="https://linkedin.com/in/abhishekY495">
                <img className='footer-logo' src={linkedinLogo} alt="linkedin" />
            </a>
        </footer>
    )
}
