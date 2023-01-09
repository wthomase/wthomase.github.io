import Divider from "./Divider";

interface TitleProps {
    currentString: string;
    cursorVisible: boolean;
}

export default function Title(props: TitleProps) {
    const { currentString, cursorVisible } = props;
    return (
        <>
            <div className="text-4xl animate-fade shadow-neutral-200 h-9 md:h-12">
                <div className="flex h-full items-center">
                    {currentString}
                    <div
                        className={`h-full bg-slate-50 w-[2px] ${
                            cursorVisible ? "visible" : "invisible"
                        }`}
                    ></div>
                </div>
            </div>
            <Divider />
        </>
    );
}
