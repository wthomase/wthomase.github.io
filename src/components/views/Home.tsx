import ContentCard from "../lib/ContentCard";

export default function Home() {
    return (
        <ContentCard>
            <div className="text-5xl shadow-neutral-200 mb-10">Hello!</div>
            <div className="text-lg">
                I am a Software Engineer currently based in Seattle. In my short
                time in the industry I've primarily worked in web development.
            </div>
        </ContentCard>
    );
}
