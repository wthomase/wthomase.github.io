interface ContentCardProps {
    children?: JSX.Element[];
}

function ContentCard(props: ContentCardProps) {
    return (
        <div className="bg-slate-700 mx-8 mt-24 mb-8 w-full rounded-xl p-8 text-slate-100 drop-shadow-2xl z-0 md:mt-8 md:mx-16">
            {props.children}
        </div>
    );
}

export default ContentCard;
