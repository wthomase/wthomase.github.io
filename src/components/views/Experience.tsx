import Chip from "../lib/Chip";
import ContentContainer from "../lib/ContentContainer";
import ContentItem from "../lib/ContentItem";

export default function Experience() {
    return (
        <article>
            <ContentContainer
                startStr={"June 2021"}
                endStr={"Current"}
                title={"Dev Lead"}
                description={"TecAce Software • Bellevue, WA"}
            >
                <ContentItem>
                    <p>
                        Worked on development and maintenance of a custom content management system
                        for a popular developer documentation site serving 500,000+ users.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center">
                        <Chip label="AWS Lambda" />
                        <Chip label="Node.js" />
                        <Chip label="React" />
                        <Chip label="TypeScript" />
                        <Chip label="MySQL" />
                        <Chip label="Docker" />
                    </div>
                </ContentItem>
                <ContentItem>
                    <p>
                        Converted existing backend services for a deployed project into
                        infrasturcutre-as-code with AWS CDK to improve ease of maintenance across
                        deployment environments.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center">
                        <Chip label="AWS CDK" />
                        <Chip label="AWS CodePipeline" />
                        <Chip label="Node.js" />
                        <Chip label="TypeScript" />
                        <Chip label="Docker" />
                    </div>
                </ContentItem>
                <ContentItem>
                    <p>
                        Started managing a small team of Software Engineers. Began assisting in code
                        review, leading standup meetings and planning new requirements with project
                        managers.
                    </p>
                </ContentItem>
            </ContentContainer>
            <ContentContainer
                startStr={"May 2017"}
                endStr={"June 2021"}
                title={"Software Engineer"}
                description={"TecAce Software • Bellevue, WA"}
            >
                <ContentItem>
                    <p>
                        Implemented customer feature requests into an existing admin dashboard and
                        content management system serving multiple IoT-based documentation sites.
                    </p>
                    <p className="mt-4">
                        Integrated a markdown based blog editing feature into the content management
                        system with a custom extension syntax allowing for new elements, such as
                        graphs, to be easily added to the markdown rendering pipeline.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center">
                        <Chip label="Node.js" />
                        <Chip label="React" />
                        <Chip label="Redux Saga" />
                        <Chip label="Material UI" />
                        <Chip label="AWS EC2" />
                    </div>
                </ContentItem>
                <ContentItem>
                    <p>
                        Worked on multiple backend microservices, building RESTful APIs and
                        providing storage, search and analytics services to an existing deployed
                        project.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center">
                        <Chip label="Node.js" />
                        <Chip label="Express.js" />
                        <Chip label="AWS CloudSearch" />
                        <Chip label="MySQL" />
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
