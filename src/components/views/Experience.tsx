import Chip from "../lib/Chip";
import TimelineCrumb from "../lib/TimelineCrumb";
import TimelineBlock from "../lib/TimelineBlock";

export default function Experience() {
    return (
        <>
            <div className="text-4xl md:text-5xl animate-fade shadow-neutral-200 mb-16">
                Experience
            </div>
            <TimelineBlock
                startStr={"June 2021"}
                endStr={"Current"}
                title={"Dev Lead"}
                description={"TecAce Software, Bellevue, WA"}
            >
                <TimelineCrumb>
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
                </TimelineCrumb>
                <TimelineCrumb>
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
                </TimelineCrumb>
                <TimelineCrumb>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </TimelineCrumb>
            </TimelineBlock>
            <TimelineBlock
                startStr={"May 2017"}
                endStr={"June 2021"}
                title={"Software Engineer"}
                description={"TecAce Software, Bellevue, WA"}
            >
                <TimelineCrumb>
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
                </TimelineCrumb>
                <TimelineCrumb>
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
                        <Chip label="AWS EC2" />
                        <Chip label="HTML5/CSS3" />
                        <Chip label="Bootstrap" />
                    </div>
                </TimelineCrumb>
                <TimelineCrumb>
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
                </TimelineCrumb>
            </TimelineBlock>
            <TimelineBlock title={"Education"}>
                <TimelineCrumb>
                    <div className="text-base">Bachelor of Science (B.S.),</div>
                    <div className="text-base mb-4">Computer Science & Systems</div>
                    <div className="text-sm">University of Washington,</div>
                    <div className="text-sm">December 2016</div>
                </TimelineCrumb>
            </TimelineBlock>
        </>
    );
}
