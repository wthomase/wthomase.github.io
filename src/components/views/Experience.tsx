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
                        Worked on development and maintenance of a full content management system
                        for a popular developer documentation site.
                    </p>
                    <p className="mt-8">
                        Implemented a review and publishing feature for the content management
                        system, allowing administrators to review and comment on pending changes
                        before publishing.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center">
                        <Chip label="AWS SQS" />
                        <Chip label="AWS Lambda" />
                        <Chip label="Node.js" />
                        <Chip label="React" />
                        <Chip label="Material UI" />
                        <Chip label="MySQL" />
                    </div>
                </ContentItem>
                <ContentItem>
                    <p>
                        Managed a small team of Software Engineers, leading daily standup meetings
                        and assisting in code review.
                    </p>
                </ContentItem>
            </ContentContainer>
            <ContentContainer
                startStr={"May 2017"}
                endStr={"June 2021"}
                title={"Software Engineer"}
                description={"TecAce Software, Bellevue, WA"}
            >
                <ContentItem>
                    <p>
                        Implemented a blog content management system for a multi-project admin
                        dashboard.
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
                        Worked on frontend design implementation and search integration for a home
                        IoT developer documentation site.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center">
                        <Chip label="Node.js" />
                        <Chip label="jQuery" />
                        <Chip label="AWS CloudSearch" />
                        <Chip label="AWS EC2" />
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
