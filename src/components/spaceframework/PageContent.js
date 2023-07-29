import { Divider } from '@mui/material';
import '../common/Page.css'
import './PageContent.css'

function PageContent() {

    return (
        <div className="InfoPageContent">
            <h1>SPACE Framework</h1>
            <p className='InfoPageSubtitle'>Research by Microsoft, GitHub and University of Victoria</p>

            <div className='InfoPageContentDataContainer' style={{ fontSize: '26px' }}>
                <p>
                    A group of individuals from <a href="https://www.microsoft.com/en-us/research/">Microsoft Research</a>, <a href="https://github.com/">Github</a> and <a href="https://www.uvic.ca/ecs/software/research/">University of Victoria</a> came together to identify metrics that can measure developer productivity with a holistic approach and not just based on developer activity alone. They divided the measures into 5 dimensions abbreviated as <em><strong>SPACE</strong></em> as shown above. Each of the dimension has been explained briefly to give you a sense of the framework and how it can be used to measure developer productivity.
                </p>
                <h3 className='SpaceFrameworkDimensionTitle'>Satisfaction and well-being</h3>
                <p className='SpaceFrameworkDimensionSubText'>Satisfaction refers to how fulfilled developers feel with their work, team, culture or tools. Well-being, on the other hand, refers to how healthy and happy they are.</p>

                <h3 className='SpaceFrameworkDimensionTitle'>Performance</h3>
                <p className='SpaceFrameworkDimensionSubText'>Performance measures the outcome of a process or a desired goal. It is not to be mistaken with output. A developer can write thousand lines of code (output) but this does not necessarily mean that it is of high quality (outcome).</p>

                <h3 className='SpaceFrameworkDimensionTitle'>Activity</h3>
                <p className='SpaceFrameworkDimensionSubText'>Most commonly used dimension for measuring productivity. Simply put, it's the developer's activity. It's the number of actions or outputs in the course of performing a task.</p>

                <h3 className='SpaceFrameworkDimensionTitle'>Communication and Collaboration</h3>
                <p className='SpaceFrameworkDimensionSubText'>This focuses more on teams rather than individuals. It's how easily developers and teams can communicate and work together. It also aims to measure the flow of information.</p>

                <h3 className='SpaceFrameworkDimensionTitle'>Efficiency and Flow</h3>
                <p className='SpaceFrameworkDimensionSubText'>How well developers and teams can make progress on their work or complete it without interruption or delays. Sometimes we get into this state called Flow where we feel like we're 'in the zone' and highly productive. This dimension tries to measure that. It's how well a developer can get a piece of work done while being efficient and feeling good about the work that they're doing.</p>

                <Divider />
                <p>To measure developer productivity, you can pick the metrics from different dimensions and measure against those. It is recommended that you pick metrics across at least 3 dimensions to get a better result. The second recommendation is that at least 1 metric must be based on perceptual measure like asking an individual how they felt about the day.</p>
                <p>Read about it in detail on my blog post <a href="https://www.shahlin.com/blog/2023/05/measuring-developer-productivity-with-space-framework">Measuring Developer Productivity with SPACE Framework</a></p>
            </div>
        </div >
    );
}

export default PageContent;