export default function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
            </div>
        </div>
    );
}