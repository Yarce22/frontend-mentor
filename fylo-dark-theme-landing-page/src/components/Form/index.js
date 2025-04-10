import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "../Button";
const Form = () => {
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setValidEmail(false);
            return;
        }
        setEmail("");
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: `flex flex-col lg:flex-row w-full ${validEmail ? "gap-6" : "gap-2"}`, children: [_jsxs("div", { children: [_jsx("input", { type: "text", placeholder: "email@example.com", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full lg:w-[480px] h-12 lg:h-12 pl-8 font-OpenSans text-[12px] text-DarkBlue-FooterBg bg-white rounded-full placeholder-text-Gray" }), !validEmail && (_jsx("p", { className: "pl-8 lg:mt-2 mb-4 text-LightRed font-OpenSans font-bold text-[10px]", children: "Error, please check your email" }))] }), _jsx(Button, { label: "Get Started For Free", width: (window.innerWidth < 1024) ? "0px" : "30px", height: (window.innerWidth < 1024) ? "13.5px" : "8px", FormButton: true })] }));
};
export { Form };
