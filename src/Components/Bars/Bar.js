import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const MyResponsiveBar = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger", "sandwich"]}
    indexBy="country"
    margin={{ top: 12, right: 30, bottom: 10, left: 12 }}
    padding={0.2}
    innerPadding={4}
    groupMode="grouped"
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "nivo" }}
    colorBy="index"
    defs={[]}
    fill={[]}
    borderColor={{ from: "color", modifiers: [["darker", "2.5"]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    enableGridY={false}
    enableLabel={false}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    legends={[]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default MyResponsiveBar;
