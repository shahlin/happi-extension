import '../common/Page.css'

function PageContent() {

    return (
        <div className="InfoPageContent">
            <h1>SPACE Framework</h1>
            <p className='InfoPageSubtitle'>Research by Microsoft, GitHub and University of Victoria</p>

            <div className='InfoPageContentDataContainer' style={{ fontSize: '26px' }}>
                <p>
                    A group of individuals from <a href="https://www.microsoft.com/en-us/research/">Microsoft Research</a>, <a href="https://github.com/">Github</a> and <a href="https://www.uvic.ca/ecs/software/research/">University of Victoria</a> came together to identify metrics that can measure developer productivity with a holistic approach and not just based on developer activity alone. They divided the measures into 5 dimensions abbreviated as <em><strong>SPACE</strong></em> as shown above. Each of the dimension has been explained briefly to give you a sense of the framework and how it can be used to measure developer productivity.
                </p>
            </div>
        </div >
    );
}

export default PageContent;