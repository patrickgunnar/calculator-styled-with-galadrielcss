import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="@module:headerComponent::headerContainer">
            <h3 className="@module:headerComponent::h3">Styled with</h3>
            <Link href="/" className="@class:unstyledLink">
                <div className="@module:headerComponent::logoContainer">
                    <h1>Galadriel</h1>
                    <Image
                        src="/img/Galadriel CSS Logo.png"
                        alt="Galadriel CSS Logo"
                        className="@module:headerComponent::logoImage"
                        height={135}
                        width={135}
                    />
                    <h1>CSS</h1>
                </div>
            </Link>
        </header>
    );
}
