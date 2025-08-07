declare module '@/public/*.svg' {
    import { SVGProps } from 'react';
    const content: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    export default content;
}