interface ContentCardProps {
    headerVisible?: boolean;
    children?: JSX.Element[] | JSX.Element;
}

function ContentCard(props: ContentCardProps) {
    return (
        <div className="bg-slate-700 text-slate-100 relative font-cascadiacode flex flex-col min-h-[480px] w-full z-0 p-6 overflow-hidden md:min-h-[640px] md:rounded-xl md:p-8 md:drop-shadow-2xl">
            {props.children}
        </div>
    );
}

export default ContentCard;
