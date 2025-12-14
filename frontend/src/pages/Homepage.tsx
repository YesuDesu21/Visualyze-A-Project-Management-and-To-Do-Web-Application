import VisualyzeNavbar from "../layouts/VisualyzeNavbar";

function Homepage() {
    return (
        <div>
            <h1>homepage</h1>
            <VisualyzeNavbar />
            <div id="side-navbar">
                <div id="side-calendar"></div>
                <div id="main-side-buttons"></div>
                <div id="other-side-buttons"></div>
            </div>
            //Grid will be used?
            <div id="calendar"></div>
        </div>
    );
}

export default Homepage;
