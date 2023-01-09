interface ChipProps {
    label: string;
}

export default function Chip(props: ChipProps) {
    return (
        <div className="text-xs bg-slate-50 border-slate-50 text-slate-800 w-max inline-block px-2 py-1 m-1 rounded-md whitespace-nowrap">
            {props.label}
        </div>
    );
}
