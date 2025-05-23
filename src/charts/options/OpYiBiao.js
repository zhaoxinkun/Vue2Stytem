export default {
    series: [
        {
            type: 'gauge',
            axisLine: {
                lineStyle: {
                    width: 10,
                    color: [
                        [0.3, '#67e0e3'],
                        [0.7, '#37a2da'],
                        [1, '#fd666d']
                    ]
                }
            },
            pointer: {
                itemStyle: {
                    color: 'auto'
                }
            },
            axisTick: {
                distance: -30,
                length: 8,
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
            splitLine: {
                distance: -30,
                length: 30,
                lineStyle: {
                    color: '#fff',
                    width: 4
                }
            },
            axisLabel: {
                color: 'inherit',
                distance: 15,
                fontSize: 10
            },
            detail: {
                valueAnimation: true,
                formatter: '{value} km/h',
                color: 'inherit'
            },
            data: [
                {
                    value: 50
                }
            ]
        }
    ]
}
