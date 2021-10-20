import './App.css';
import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import data from './data.json';
import config from './config'
import './chart.css'

console.log(data);

class Chart extends React.Component {
    render() {
        return (
            <div className="chart">
                <ResponsiveBar
                    data={data}
                    keys={config.keys}
                    indexBy="country"
                    margin={config.margin}
                    padding={0.3}
                    colors="nivo"
                    colorBy="id"
                    defs={config.defs}
                    fill={config.fill}
                    borderColor="inherit:darker(1.6)"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={config.axisBottom}
                    axisLeft={config.axisLeft}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={config.legends}
                />
            </div>
        )
    }
}
function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
        height: "10px",
        width: "100%",
        float: "left"
        }} >
        <p>
          Nivo Funnel chart!
        </p>
        <Chart/>
      </header>
      <main>
           
      </main>
    </div>
  );
}

export default App;
