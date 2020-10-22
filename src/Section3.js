import React from "react";
import "./section3.css";

import { Grid, Row, Col } from "react-flexbox-grid";
export const Section3 = (props) => {
    return (
        <div>
            <Grid>
                <Row center="xs">
                    <Col id="S3Container">

                        {props.S3}

                        {/* <div className="pz"><img src="/images/autko.jpg" /></div> */}
                        {/* <div className="pz"><img src="/images/drugieautko.jpg" /></div> */}

                        {/* <div className="pz"><img id="autko" src="/images/trzecieautko.jpg" /></div> */}




                    </Col>
                </Row>
            </Grid>
            <div className="pz"><img id="autko" src="/images/trzecieautko.jpg" /></div>
        </div>



    )

}
