import React from 'react';
import IGDTUW from '../images/IGDTUW.jpeg';
import './Body.css';

function Body() {
    return (
        // <div>This is body of the landing page</div>

        <div class="awardees-container">
            {/* Green line */}
            <div className="green-line"></div>
            {/* Body content */}
            <h1 class="heading">AWARDEES</h1>
            <h2>Faculty</h2>

            <div class="awardee">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
                <p>Dr. (Mrs.) Amita Dev</p>
            </div>
            <div class="awardee">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
                <p>Dr. (Mrs.) Amita Dev</p>
            </div>
            <div class="awardee">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
                <p>Dr. (Mrs.) Amita Dev</p>
            </div>
            <div class="awardee">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
                <p>Dr. (Mrs.) Amita Dev</p>
            </div>
            <div class="awardee">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
                <p>Dr. (Mrs.) Amita Dev</p>
            </div>
            <div class="awardee">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
                <p>Dr. (Mrs.) Amita Dev</p>
            </div>
            <h2>Students</h2>

            <div class="awardee">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
                <p>Dr. (Mrs.) Amita Dev</p>
            </div>
            <div class="awardee">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
                <p>Dr. (Mrs.) Amita Dev</p>
            </div>
            <div class="awardee">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
                <p>Dr. (Mrs.) Amita Dev</p>
            </div>
            <div class="awardee">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
                <p>Dr. (Mrs.) Amita Dev</p>
            </div>
            <div class="awardee">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
                <p>Dr. (Mrs.) Amita Dev</p>
            </div>
            <div class="awardee">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
                <p>Dr. (Mrs.) Amita Dev</p>
            </div>
            {/* Green line */}
            <div className="green-line"></div>
        </div>
    );
}

export default Body;



