import { Plot } from '../../core/plot';
import { deepAssign } from '../../utils';
import { Adaptor } from '../../core/adaptor';
import { PieOptions } from './types';
import { adaptor } from './adaptor';
import './interactions';
import './label';

export { PieOptions };

export class Pie extends Plot<PieOptions> {
  /** 图表类型 */
  public type: string = 'pie';

  /**
   * 获取 饼图 默认配置项
   */
  protected getDefaultOptions(): Partial<PieOptions> {
    return deepAssign({}, super.getDefaultOptions(), {
      legend: {
        position: 'right',
      },
      tooltip: {
        shared: false,
        showTitle: false,
      },
      /** 饼图样式, 不影响暗黑主题 */
      pieStyle: {
        stroke: 'white',
        lineWidth: 1,
      },
      /** 饼图中心文本默认样式 */
      statistic: {
        title: {
          style: { fontSize: 14, fontWeight: 300, fill: '#4D4D4D', textAlign: 'center' },
        },
        content: {
          style: { fontSize: 21, fontWeight: 'bold', fill: '#4D4D4D', textAlign: 'center' },
        },
      },
      /** 默认关闭 text-annotation 动画 */
      theme: {
        components: {
          annotation: {
            text: {
              animate: false,
            },
          },
        },
      },
    });
  }

  /**
   * 获取 饼图 的适配器
   */
  protected getSchemaAdaptor(): Adaptor<PieOptions> {
    return adaptor;
  }
}
