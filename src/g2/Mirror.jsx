import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';
import lanzhen from './data/lanzhen';
import jingcuiyijia from './data/jingcuiyijia';

let chart = null;
const keys = [
  ...new Set([...Object.keys(lanzhen), ...Object.keys(jingcuiyijia)]),
];

const data = [];
keys.forEach((key) => {
  data.push(
    {
      attr: key,
      brand: '蓝臻',
      value: lanzhen[key],
    },
    {
      attr: key,
      brand: '精粹益加',
      value: jingcuiyijia[key],
    }
  );
});

export default function () {
  useEffect(() => {
    chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 1800,
      padding: [10, 0, 0, 60],
    });

    chart.data(data);
    chart.scale('value', {
      alias: '每100kj',
    });

    chart.axis('value', false);
    chart.coordinate().transpose();
    chart.facet('mirror', {
      fields: ['brand'],
      transpose: true,
      showTitle: false,
      eachView: (view, facet) => {
        const facetIndex = facet.columnIndex;
        if (facetIndex === 0) {
          view.axis('attr', {
            position: 'top',
            label: {
              style: {
                fill: '#aaaaaa',
                fontSize: 12,
              },
            },
            tickLine: {
              alignTick: false,
              length: 0,
            },
            line: null,
          });
        } else {
          view.axis('attr', false);
        }
        const color = facetIndex === 0 ? '#1890ff' : '#2fc25b';
        view
          .interval()
          .position('attr*value')
          .color(color)
          .size(30)
          .label('value', (val) => {
            let offset = facetIndex === 1 ? -4 : 4;
            let shadowBlur = 2;
            let textAlign = facetIndex === 1 ? 'end' : 'start';
            let fill = 'white';
            if (val < 15) {
              offset = facetIndex === 1 ? 4 : -4;
              textAlign = facetIndex === 1 ? 'start' : 'end';
              fill = '#666666';
              shadowBlur = 0;
            }
            return {
              offset,
              style: {
                fill,
                stroke: null,
                shadowBlur,
                shadowColor: 'rgba(0, 0, 0, .45)',
                textAlign,
              },
            };
          });
      },
    });
    chart.interaction('element-highlight');
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="container"></div>;
}
