import { HeatmapRect } from '../src';
import { genBins } from '../../vx-mock-data';

const data = genBins(1, 1);
const xScale = d => 50;
const yScale = d => 50;
const HeatmapWrapper = props =>
  shallow(<HeatmapRect data={data} xScale={xScale} yScale={yScale} {...props} />);

describe('<HeatmapRect />', () => {
  test('it should be defined', () => {
    expect(HeatmapRect).toBeDefined();
  });

  test('it should have the .vx-heatmap-rects class', () => {
    const wrapper = HeatmapWrapper();
    expect(wrapper.prop('className')).toBe('vx-heatmap-rects');
  });

  test('it should have the .vx-heatmap-rect class', () => {
    const wrapper = HeatmapWrapper({ className: 'test' });
    expect(wrapper.find('rect').prop('className')).toBe('vx-heatmap-rect test');
  });

  test('it should set <rect /> width & height to bin{Width,Height} - gap', () => {
    const wrapper = HeatmapWrapper({ binWidth: 10, binHeight: 14, gap: 2 });
    expect(wrapper.find('rect').prop('width')).toBe(8);
    expect(wrapper.find('rect').prop('height')).toBe(12);
  });
});
