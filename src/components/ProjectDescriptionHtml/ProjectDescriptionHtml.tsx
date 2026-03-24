type ProjectDescriptionHtmlProps = {
    html: string;
    className?: string;
};

export const ProjectDescriptionHtml = ({ html, className }: ProjectDescriptionHtmlProps) => (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
);
