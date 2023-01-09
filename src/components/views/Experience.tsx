import Chip from "../lib/Chip";
import ContentItem from "../lib/ContentItem";
import ContentContainer from "../lib/ContentContainer";

export default function Experience() {
    return (
        <article>
            <ContentContainer
                startStr={"June 2021"}
                endStr={"Current"}
                title={"Dev Lead"}
                description={"TecAce Software, Bellevue, WA"}
            >
                <ContentItem>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                    <div className="mt-4 flex flex-wrap justify-center">
                        <Chip label="AWS CDK" />
                        <Chip label="AWS CodePipeline" />
                        <Chip label="Node.js" />
                        <Chip label="TypeScript" />
                        <Chip label="Docker" />
                    </div>
                </ContentItem>
                <ContentItem>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                    <div className="mt-4 flex flex-wrap justify-center">
                        <Chip label="AWS SQS" />
                        <Chip label="AWS Lambda" />
                        <Chip label="Node.js" />
                        <Chip label="React" />
                    </div>
                </ContentItem>
                <ContentItem>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </ContentItem>
            </ContentContainer>
            <ContentContainer
                startStr={"May 2017"}
                endStr={"June 2021"}
                title={"Software Engineer"}
                description={"TecAce Software, Bellevue, WA"}
            >
                <ContentItem>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                    <div className="mt-4 flex flex-wrap justify-center">
                        <Chip label="Node.js" />
                        <Chip label="React" />
                        <Chip label="Redux Saga" />
                        <Chip label="Material UI" />
                    </div>
                </ContentItem>
                <ContentItem>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                    <div className="mt-4 flex flex-wrap justify-center">
                        <Chip label="Node.js" />
                        <Chip label="jQuery" />
                        <Chip label="AWS CloudSearch" />
                        <Chip label="AWS EC2" />
                        <Chip label="HTML5/CSS3" />
                        <Chip label="Bootstrap" />
                    </div>
                </ContentItem>
            </ContentContainer>
            <ContentContainer title={"Education"}>
                <ContentItem>
                    <div className="text-base">Bachelor of Science (B.S.),</div>
                    <div className="text-base mb-4">Computer Science & Systems</div>
                    <div className="text-sm">University of Washington,</div>
                    <div className="text-sm">December 2016</div>
                </ContentItem>
            </ContentContainer>
        </article>
    );
}
