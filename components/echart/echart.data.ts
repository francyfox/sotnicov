import type { EChartsOption } from 'echarts'
import { formatterGrafficA } from '~/components/echart/echart.formatter';
import type { EchartTotalProps } from '~/components/echart/echart.types';

export const optionTotalCost = {
  grid: {
    left: 0,
    top: 10,
    right: 0,
    bottom: 10,
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    className: '!inline-flex !justify-center !items-start !gap-2.5 !rounded !px-4 !py-2 !border-0',
    backgroundColor: '#212226',
    axisPointer: {
      type: 'shadow'
    },
    formatter: formatterGrafficA,
  },
  xAxis: {
    type: 'category',
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        width: 0
      }
    },
    axisTick: {
      alignWithLabel: false
    },
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
  },
  series: [
    {
      type: 'bar',
      name: 'Мясо',
      barWidth: '40px',
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
      barWidth: '40px',
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
      barWidth: '40px',
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
} satisfies EChartsOption


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