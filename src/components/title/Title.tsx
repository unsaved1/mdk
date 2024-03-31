import { DetailedHTMLProps, HTMLAttributes } from "react";
import './Title.scss';

interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    text: string;
}

export const Title = ({text}: ITitleProps) => (
    <h2 className='title'>{text}</h2>
);
