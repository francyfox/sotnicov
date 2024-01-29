import type { EChartsOption } from 'echarts'
import { formatterGrafficA } from '~/components/echart/echart.formatter';
import type { EchartTotalProps } from '~/components/echart/echart.types';
import { defu } from 'defu';
import type { TooltipOption } from 'echarts/types/dist/shared';
import { graphGrowthData } from '~/util/util';

const symbolBlue = {
  symbol: 'circle',
  symbolSize: 10,
}

const tooltip = {
    trigger: 'axis',
    className: '!inline-flex !justify-center !items-start !gap-2.5 !rounded !px-4 !py-2 !border-0',
    backgroundColor: '#212226',
    axisPointer: {
      type: 'shadow'
    },
    formatter: formatterGrafficA,
} satisfies TooltipOption
export const optionBase = {
  tooltip,
  grid: {
    left: 0,
    top: 10,
    right: 10,
    bottom: 10,
    containLabel: true
  },
  xAxis: {
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        width: 0
      }
    },
    axisTick: {
      show: false,
      alignWithLabel: true
    },
  },
  yAxis: {
    position: 'left',
    splitLine: {
      lineStyle: {
        color: '#292829'
      }
    },
    axisLine: {
      lineStyle: {
        width: 0
      }
    },
  }
} satisfies EChartsOption

export const optionPlan = defu({
  grid: {
    top: 60
  },
  tooltip: {
    axisPointer: {
      type: 'line',
      axis: 'x',
      lineStyle: {
        color: '#18A0FB'
      }
    }
  },
  legend: {
    left: -15,
    top: 0,
    pageButtonPosition: 'start',
    padding: [8, 16],
    itemGap: 20,
    selectorPosition: 'start',
    selector: [{type: 'all', title: 'Все'}],
    icon: 'pin',
    inactiveColor: '#ccc',
    itemStyle: {
      shadowColor: 'rgba(33, 34, 38, 0.90)'
    },
    textStyle: {
      fontSize: 14,
      color: '#71717A',
      fontFamily: 'Inter, sans-serif',
    },
    selectorLabel: {
      backgroundColor: '#212226',
      borderRadius: 3,
      borderWidth: 0,
      fontSize: 14,
      padding: [8, 16],
      color: '#71717A',
      fontFamily: 'Inter, sans-serif'
    }
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 600,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    min: 0,
    max: 31,
  },
  series: [
    {
      type: 'line',
      name: 'План',
      data: graphGrowthData({ max: 600, count: 32, koef: 1 }),
      color: '#18A0FB',
      areaStyle: {
        color: 'rgba(24,160,251,0.61)'
      },
      ...symbolBlue
    },
    {
      type: 'line',
      name: 'Факт',
      data: graphGrowthData({ max: 600, count: 32, koef: 1 }),
      color: '#13D6FF',
      areaStyle: {
        color: '#BDFFFF'
      },
      ...symbolBlue
    },
  ]
} satisfies EChartsOption, optionBase)
export const optionTotalCost = defu(optionBase, {
  xAxis: {
    type: 'category',
    axisLabel: {
      interval: 0,
      overflow: 'truncate',
    },
    offset: 10,
    data: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 500,
  },
  series: [
    {
      type: 'bar',
      name: 'Мясо',
      barWidth: 'calc(100% - 16px)',
      data: [50, 220, 70, 150, 68, 100, 125, 112, 78, 48, 36, 19],
      color: '#9747FF',
      itemStyle: {
        borderRadius: 2,
        shadowOffsetY: 1,
      },
      stack: 'x'
    },
    {
      type: 'bar',
      name: 'ЗП',
      barWidth: 'calc(100% - 16px)',
      data: [150, 20, 50, 50, 58, 80, 105, 102, 48, 48, 16, 15],
      color: '#0077F7',
      itemStyle: {
        borderRadius: 2,
        shadowOffsetY: 1,
      },
      stack: 'x'
    },
    {
      type: 'bar',
      name: 'Прочее',
      barWidth: 'calc(100% - 16px)',
      data: [300, 10, 20, 20, 48, 10, 15, 12, 38, 48, 6, 11],
      color: '#13D6FF',
      itemStyle: {
        borderRadius: 2,
        shadowOffsetY: 1,
      },
      stack: 'x'
    },

    {
      type: 'line',
      showSymbol: false,
      smooth: true,
      tooltip: {
        show: false
      },
      data: [0, 320, 70, 450, 68, 100, 125, 112, 78, 48, 36, 0],
      lineStyle: {
        width: 2,
        color: '#C6EC92',
      },
    }
  ]
} satisfies EChartsOption)

/**
 * echart-vue не имеет слотов, поэтому о быстрой кастомизации легенды нет речи. Лучше использовать компонент
 * изначально созданный для vue. В данном случае проще расчитать чем выковыривать данные, к тому же
 * в данном графике они не интерактивны
 */

export const mockTotalData = [
  {
    title: 'Общее оплачено',
    sum: 1123500
  },
  {
    markerColor: '#9747FF',
    title: 'Деньги за мясо',
    sum: 145200
  },
  {
    markerColor: '#0077F7',
    title: 'Расходы на ЗП',
    sum: 1223500
  },
  {
    markerColor: '#13D6FF',
    title: 'Прочее',
    sum: 23500
  },
] satisfies EchartTotalProps[]