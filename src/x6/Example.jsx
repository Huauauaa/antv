import React, { useEffect } from 'react';
import { Graph, DataUri } from '@antv/x6';
import data from './data';

export default function Example() {
  let graph;

  useEffect(() => {
    graph = new Graph({
      container: document.getElementById('container'),
      width: 800,
      height: 600,
      background: {
        color: '#fffbe6', // 设置画布背景颜色
      },
      grid: {
        size: 10, // 网格大小 10px
        visible: true, // 渲染网格背景
      },
      panning: true,
    });
    graph.fromJSON(data);
  }, []);

  const onClick = (type) => (e) => {
    switch (type) {
      case 'png':
        graph.toPNG((dataUri) => {
          DataUri.downloadDataUri(dataUri, 'chart.png');
        });
        break;
      case 'svg':
        graph.toSVG((dataUri) => {
          DataUri.downloadDataUri(DataUri.svgToDataUrl(dataUri), 'chart.svg');
        });
        break;
      default:
        throw 'Not Supported type';
    }
  };

  return (
    <>
      <div id="container"></div>
      <button onClick={onClick('png')}>PNG</button>
      <button onClick={onClick('svg')}>SVG</button>
    </>
  );
}
