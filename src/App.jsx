import './App.css';
import Cards from './components/cards';

const App = () => {
  return (
    <div className="App">
      <h1>Music Concerts</h1>
      <h2>Find out when these artists are performing live!</h2>
      <div class = "divvv">
      <Cards title="Lil Uzi Vert" link = "https://www.ticketmaster.com/lil-uzi-vert-tickets/artist/2119391?msockid=1706db249cd969931f0ecfaa9d5d6856" desc="Ticketmaster" image = "https://th.bing.com/th/id/OIP.xSvlW3-IYgu9lVrMGFG5awHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
      <Cards title="Bryson Tiller" link = "https://www.ticketmaster.com/bryson-tiller-tickets/artist/2171167#reviews" desc="Ticketmaster" image = "https://th.bing.com/th/id/OIP.gZ1U2FN_RsNqr-i44o7z0AHaE8?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Cards title="J Cole" link = "https://www.ticketmaster.com/j-cole-tickets/artist/1474871" desc="Ticketmaster" image = "https://th.bing.com/th/id/OIP.eDulvjGaF3fzKYl9obVB8gHaDt?w=282&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
      <Cards title="Future" link="https://www.ticketmaster.com/future-tickets/artist/1707739" desc="Ticketmaster" image="https://th.bing.com/th/id/OIP.S83fWW3ZFZCk2XA9_WWi_gHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Cards title="Kendrick Lamar" link="https://www.ticketmaster.com/kendrick-lamar-tickets/artist/1480454" desc="Ticketmaster" image="https://th.bing.com/th/id/OIP.5H_-0xkFOoV-ye-I7x_pLgHaE4?w=292&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Cards title="Travis Scott" link="https://www.ticketmaster.com/travis-scott-tickets/artist/1788754?awtrc=true&gad_source=1&msockid=1706db249cd969931f0ecfaa9d5d6856" desc="Ticketmaster" image="https://s1.ticketm.net/dam/a/900/d0e95074-2a57-4b0e-8cce-781b43a2a900_RETINA_PORTRAIT_3_2.jpg" />
      <Cards title="Polo G" link="https://www.ticketmaster.com/polo-g-tickets/artist/2617734" desc="Ticketmaster" image="https://s1.ticketm.net/dam/a/812/0c564683-95b8-4b51-81ee-6b03853c4812_RETINA_PORTRAIT_3_2.jpg" />
      <Cards title="The Weeknd" link="https://www.ticketmaster.com/the-weeknd-tickets/artist/1697014" desc="Ticketmaster" image="https://th.bing.com/th/id/OIP.QhK33o0cFmynbaOdgxMxvwHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Cards title="Lil Tecca" link="https://www.ticketmaster.com/lil-tecca-tickets/artist/2678236" desc="Ticketmaster" image="https://s1.ticketm.net/dam/a/136/7accf9bd-bfdf-4aaf-a9c8-d028ea3b3136_1531321_RETINA_PORTRAIT_3_2.jpg" />
      <Cards title="Roddy Richh" link="https://www.ticketmaster.com/roddy-ricch-tickets/artist/2540439" desc="Ticketmaster" image= "https://s1.ticketm.net/dam/a/f71/ee7cb9d7-c94a-4152-87eb-527ca7882f71_1201591_RETINA_PORTRAIT_3_2.jpg" />
      
      </div>
    </div>
  );
};

export default App;
