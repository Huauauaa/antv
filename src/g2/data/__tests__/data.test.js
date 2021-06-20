import data1 from '../lanzhen';
import data2 from '../jingcuiyijia';

test('should ', () => {
  const keys = [
    ...new Set([
      ...Object.keys(data1).slice(0, 2),
      ...Object.keys(data2).slice(0, 2),
    ]),
  ];

  const result = [];
  keys.forEach((key) => {
    result.push(
      {
        attr: key,
        brand: '蓝臻',
        value: data1[key],
      },
      {
        attr: key,
        brand: '精粹益加',
        value: data2[key],
      },
    );
  });
  expect(result).toStrictEqual([
    { attr: '能量', brand: '蓝臻', value: 90 },
    { attr: '能量', brand: '精粹益加', value: 100 },
    { attr: '蛋白质', brand: '蓝臻', value: 0.5 },
    { attr: '蛋白质', brand: '精粹益加', value: 3.6 },
  ]);
});
