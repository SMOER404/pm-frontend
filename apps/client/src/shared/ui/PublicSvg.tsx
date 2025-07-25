import { ReactNode } from 'react';

interface PublicSvgProps {
    src: string;
    className?: string;
    loadingElement?: ReactNode;
    filled?: boolean;
}

export const PublicSvg = ({
                              src,
                              className = '',
                              loadingElement = <div className="w-6 h-6 bg-gray-200 animate-pulse" />,
                              filled = false
                          }: PublicSvgProps) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const Svg = require(`@/public${src}`).default;
        return <Svg className={className} filled={filled} loadingElement={loadingElement}/>;
    } catch {
        return loadingElement;
    }
};