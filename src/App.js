import React from 'react';
import TableauReport from 'tableau-react';
import YouTube from 'react-youtube';
import ReactGA from 'react-ga';
import logo from './COVIDSupplyCentralLogo.png';
import VeraLogo from './VeraLogo.png';
import SalesforceLogo from './SalesforceLogo.png';
import HackathonLogo from './HackathonLogo.jpg';
import './App.css';

class App extends React.Component {
  componentDidMount(){
    ReactGA.initialize('UA-162191779-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  communityClicked(){
    ReactGA.event({
      category: 'Community',
      action: 'Clicked Community Button'
    });
  }
  
  dashboardClicked(){
    ReactGA.event({
      category: 'Dashboard',
      action: 'Clicked Tableau Dashboard'
    });
  }

  videoPlayed(){
    ReactGA.event({
      category: 'Video',
      action: 'Played Demo Video'
    });
  }

  feedbackSubmitted(){
    ReactGA.event({
      category: 'Feedback',
      action: 'Submitted Feedback'
    });
  }

  render(){

    const tableauOptions = {
      height: 991,
      width: 1016,
      hideTabs: true,
    }
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="Covid Supply Central" />
          <div className="Panel">
            <div className="IntroText">
              <h1>
                Real-time supply data on COVID-19
              </h1>
              <p>
                Helping hospitals and health facilities share data on supply and need of resources to combat COVID-19.
              </p>
            </div>
            <a
              className="App-link"
              href="https://covid19response.force.com/s/login/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={this.communityClicked}
            >
              Submit your data
            </a>
            <div className="Tableau">
              <TableauReport
                url="https://public.tableau.com/views/COVIDSupplyCentral/COVIDSupplyCentral?:display_count=y&publish=yes&:origin=viz_share_link"
                options={tableauOptions}
              />
            </div>
          </div>
          <div className="Panel">
            <h2>
              How it works
            </h2>
            <div className="Video">
              <YouTube
                videoId="WEJOn6EmoiQ"
                className="Youtube"
                onPlay={this.videoPlayed}
              />
            </div>
            <h3>Supported by</h3>
            <div className="LogoGrid">
              <img src={VeraLogo} className="Logo" alt="Vera Solutions" />
              <img src={SalesforceLogo} className="Logo" alt="Salesforce" />
              <img src={HackathonLogo} className="Logo" alt="Pandemic Response Hackathon" />
            </div>
          </div>
          <h3>Feedback</h3>
          <form className="Form" action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST">
            <input type="hidden" name="orgid" value="00D3h000001TYzR"/>
            <input type="hidden" name="retURL" value="https://www.covidsupplycentral.org"/>
            <textarea name="description" placeholder="Enter feedback here..."></textarea>
            <div className="TwoColumn">
              <div className="HalfField">
                <label for="name">Name</label>
                <input  id="name" maxlength="80" name="name" size="20" type="text" placeholder="Jane Doe"/>
              </div>
              <div className="HalfField">
                <label for="email">Email</label>
                <input id="email" maxlength="80" name="email" size="20" type="text" placeholder="jane@example.com"/>
              </div>
              <input type="submit" name="submit" value='Submit feedback' className="App-link" onClick={this.feedbackSubmitted}/>
            </div>
          </form>
          <hr className="Line"/>
          <div className="Footer">
            Copyright © 2020 Vera Solutions. All Rights Reserved
          </div>
        </div>
      </div>
    );
  }
}

export default App;