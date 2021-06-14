import React, { useEffect } from 'react';

import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';

const AgChartComponents = React.memo(({ options }) => {
  const defaultOption = options;
  return (
    <AgChartsReact options={defaultOption} />
  );
});

export default AgChartComponents;