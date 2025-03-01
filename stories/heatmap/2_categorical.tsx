/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { extent } from 'd3-array';
import React from 'react';

import { Chart, Heatmap, Position, ScaleType, Settings } from '../../packages/charts/src';
import { BABYNAME_DATA } from '../../packages/charts/src/utils/data_samples/babynames';

export const Example = () => {
  const data = BABYNAME_DATA.filter(([year]) => year > 1950);
  const values = data.map((d) => +d[3]);
  const [min, max] = extent(values);

  const legendPos = select('Legend position', ['top', 'right', 'bottom'], 'top');
  const xAxisPosition = select('X Axis Position', ['top', 'bottom'], 'top');

  return (
    <Chart className="story-chart">
      <Settings
        onElementClick={action('onElementClick')}
        showLegend
        legendPosition={legendPos as Position}
        brushAxis="both"
      />
      <Heatmap
        id="heatmap2"
        colorScale={ScaleType.Linear}
        ranges={[min!, (max! - min!) / 2, max!]}
        colors={['green', 'yellow', 'red']}
        data={BABYNAME_DATA.filter(([year]) => year > 1950)}
        xAccessor={(d) => d[2]}
        yAccessor={(d) => d[0]}
        valueAccessor={(d) => d[3]}
        valueFormatter={(value) => value.toFixed(0.2)}
        xSortPredicate="alphaAsc"
        config={{
          grid: {
            // cellHeight: {
            //   min: 0,
            //   max: 20,
            // },
            stroke: {
              width: 0,
            },
          },
          cell: {
            maxWidth: 'fill',
            maxHeight: 20,
            label: {
              visible: true,
            },
            border: {
              stroke: 'white',
              strokeWidth: 1,
            },
          },
          yAxisLabel: {
            visible: true,
          },
          xAxisLabel: {
            position: xAxisPosition,
          },
          onBrushEnd: action('onBrushEnd'),
        }}
      />
    </Chart>
  );
};
