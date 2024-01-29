import type { TopLevelFormatterParams, CallbackDataParams } from 'echarts/types/dist/shared';

export const formatterGrafficA = (params: TopLevelFormatterParams) => {
  let message = '';

  for (const key in params) {
    const item = (params as any)[key] as unknown as CallbackDataParams;

    message += `<div class="flex flex-col gap-1.5">
                  ${item.seriesName}
                   <div class="flex items-center text-white font-bold gap-1.5">
                    ${item.marker} ${item.value}
                   </div>
                </div>`
  }

  return message;
}