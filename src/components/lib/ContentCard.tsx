import CardHeader from "./CardHeader";

interface ContentCardProps {
    headerVisible?: boolean;
    children?: JSX.Element[] | JSX.Element;
}

function ContentCard(props: ContentCardProps) {
    return (
        <div className="font-cascadiacode flex flex-col min-h-[400px] bg-slate-700 mx-8 mt-24 mb-8 w-full rounded-xl p-8 text-slate-100 drop-shadow-2xl z-0 md:mt-8 md:mx-16">
            <CardHeader />
            <div className="grow overflow-auto">{props.children}</div>
        </div>
    );
}

export default ContentCard;
