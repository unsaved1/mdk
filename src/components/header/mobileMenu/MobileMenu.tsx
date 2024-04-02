import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

import { Navbar } from "@/components/navbar";

import cn from "clsx";
import "./MobileMenu.scss";

interface IMobileMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isOpened: boolean;
    setIsOpened: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu = ({ isOpened, setIsOpened, className, ...props }: IMobileMenuProps) => {
    return (
        <div
            className={cn("mobileMenu", className, {
                mobileMenu_opened: isOpened,
            })}
            {...props}
        >
            <div className="mobileMenu__close" onClick={() => setIsOpened(false)}>
                <span />
                <span />
            </div>
            <Navbar className="mobileMenu__nav" dispatch={() => setIsOpened(false)} />
        </div>
    );
};
