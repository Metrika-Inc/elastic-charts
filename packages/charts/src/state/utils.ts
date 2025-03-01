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

import { SpecList, PointerState } from './chart_state';
import { ChartType } from '../chart_types';
import { Spec } from '../specs';

/** @internal */
export function getSpecsFromStore<U extends Spec>(specs: SpecList, chartType: ChartType, specType?: string): U[] {
  return Object.keys(specs)
    .filter((specId) => {
      const currentSpec = specs[specId];
      const sameChartType = currentSpec.chartType === chartType;
      const sameSpecType = specType ? currentSpec.specType === specType : true;
      return sameChartType && sameSpecType;
    })
    .map((specId) => specs[specId] as U);
}

/** @internal */
export function isClicking(prevClick: PointerState | null, lastClick: PointerState | null) {
  if (prevClick === null && lastClick !== null) {
    return true;
  }
  return prevClick !== null && lastClick !== null && prevClick.time !== lastClick.time;
}

/** @internal */
export const getInitialPointerState = () => ({
  dragging: false,
  current: {
    position: {
      x: -1,
      y: -1,
    },
    time: 0,
  },
  down: null,
  up: null,
  lastDrag: null,
  lastClick: null,
});
