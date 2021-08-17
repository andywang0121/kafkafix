import React, { FC, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import { MetricsState } from '../../state/reducers/metricsDataReducer';

import * as d3 from 'd3';

interface LineGraphProps {
  metric: keyof MetricsState;
}

export const LineGraph: FC<LineGraphProps> = ({ metric }) => {
  const data = useSelector((state: RootState) => state.metrics[metric]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const width = 400;
    const height = 500;
    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background', '#d3d3d3')
      .style('margin-top', '50')
      .style('overflow', 'visible');

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);

    const generateScaledLine = d3
      .line()
      .x((d: any, i: any) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i: any) => i + 1);

    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append('g').call(xAxis).attr('transform', `translate(0, ${height})`);

    svg.append('g').call(yAxis);

    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr('d', (d: any) => generateScaledLine(d))
      .attr('fill', 'none')
      .attr('stroke', 'black');
  }, [data]);

  return <svg ref={svgRef}></svg>;
};
