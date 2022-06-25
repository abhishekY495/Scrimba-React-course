import githubLogo from "../images/github.svg";
import twitterLogo from "../images/twitter.svg";
import linkedinLogo from "../images/linkedin.svg";

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/abhishake21">
                <img src={twitterLogo} alt="twitter" />
            </a>
            <a href="https://github.com/abhishake21">
                <img src={githubLogo} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/abhishake21-yadav/">
                <img src={linkedinLogo} alt="linkedin" />
            </a>
        </footer>
    )
}