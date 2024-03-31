import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Title } from "../title";

import "./Section.scss";

interface TSectionProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    text?: Array<string>;
}

export const Section = ({ title, text, children, ...props }: TSectionProps) => {
    return (
        <section className="section" {...props}>
            <div className="section__container container">
                <Title text={title} />
                <div className="section__content">
                    {text && text.map((item, i) => (
                        <p key={i} className="section__contentItem">{item}</p>
                    ))}
                    {children}
                </div>
            </div>
        </section>
    );
};
