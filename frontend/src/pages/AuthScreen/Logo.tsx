import LogoImg from "../../assets/images/authpage/Logo.png";

export default function Logo() {
    const logoClasses = "absolute top-0 left-20"

    return (
        <img src={LogoImg} alt="Logo" className={logoClasses} />
    )
}