import Timer from '../components/Timer/Timer';
import './page.css';

const Page = () => {
    return (
        <main>
            <div className="container">
                <div className="main">
                    <div className="imageBackground">
                        <div className="imageBackgroundInfo">
                            <h1>
                                ՎԵՐՋԻՆ ԶԱՆԳ
                            </h1>    

                            <Timer />
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page;