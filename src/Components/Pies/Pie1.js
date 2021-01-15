import React from "react";
import { ResponsivePie } from "@nivo/pie";

const MyResponsivePie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    sortByValue={true}
    innerRadius={0.85}
    colors={{ scheme: "red_yellow_green" }}
    borderColor={{ from: "color", modifiers: [["darker", "0"]] }}
    enableRadialLabels={false}
    radialLabelsTextXOffset={0}
    radialLabelsTextColor="#333333"
    radialLabelsLinkOffset={-24}
    radialLabelsLinkDiagonalLength={0}
    radialLabelsLinkHorizontalLength={0}
    radialLabelsLinkStrokeWidth={0}
    radialLabelsLinkColor={{ from: "color" }}
    enableSliceLabels={false}
    sliceLabelsRadiusOffset={0}
    sliceLabelsTextColor="#333333"
    defs={[]}
    fill={[]}
    legends={[
      {
        anchor: "bottom-left",
        direction: "column",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000"
            }
          }
        ]
      }
    ]}
  />
);
export default MyResponsivePie;
