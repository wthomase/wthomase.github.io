import CardHeader from "./CardHeader";

interface ContentCardProps {
    headerVisible?: boolean;
    children?: JSX.Element[] | JSX.Element;
}

function ContentCard(props: ContentCardProps) {
    return (
        <div className="font-cascadiacode flex flex-col min-h-[480px] md:min-h-[640px] bg-slate-700 w-full rounded-xl p-8 text-slate-100 drop-shadow-2xl z-0 overflow-hidden">
            {/* <CardHeader /> */}
            {props.children}
        </div>
    );
}

export default ContentCard;
