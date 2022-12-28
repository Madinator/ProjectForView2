<script setup lang="ts">
import { Chart, registerables, Colors } from 'chart.js';
import { onMounted, ref } from 'vue';

const innerWidth = ref();
onMounted(() => {
    innerWidth.value = window.innerWidth;
    Chart.register(Colors, ...registerables);
    Chart.defaults.color = 'white';
    Chart.defaults.font.family = 'Qanelas';
    Chart.defaults.font.weight = '600';
    Chart.defaults.font.size = 16;
    const ctx = <HTMLCanvasElement> document.getElementById('myChart2');
    
    const ctxCopy: any = ctx.getContext('2d');
    const gradientFirst = ctxCopy.createLinearGradient(0, 0, 0, ctxCopy.canvas.offsetWidth);
    gradientFirst.addColorStop(0, '#DCB868');
    gradientFirst.addColorStop(1, 'rgba(220, 184, 104, 0)');
    const gradientSecond = ctxCopy.createLinearGradient(0, 0, 0, ctxCopy.canvas.offsetWidth);
    gradientSecond.addColorStop(0, 'rgba(157, 60, 232, 1)');
    gradientSecond.addColorStop(1, 'rgba(109, 20, 178, 0)');
    if(ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['','8 Sep 2022', '9 Sep 2022', '10 Sep 2022', '11 Sep 2022', '12 Sep 2022', '13 Sep 2022', '14 Sep 2022', '15 Sep 2022'],
                datasets: [
                    {

                        borderColor: '#DCB45B',
                        data: [0,250, 300, 750, 200, 180, 50, 1000, 1300, 1500],
                        pointBorderColor: '#D7A4FF',
                        pointBackgroundColor: 'black',
                        fill: true,
                        backgroundColor: gradientFirst,
                        pointBorderWidth: 0,
                        hoverBorderWidth: 3,
                        tension: 0.3
                    },
                    {

                        borderColor: '#9037D6',
                        data: [1500,1250, 350, 150, 1200, 1180, 250, 0, 500, 1300],
                        pointBorderColor: '#D7A4FF',
                        pointBackgroundColor: 'black',
                        fill: true,
                        backgroundColor: gradientSecond,
                        pointBorderWidth: 0,
                        hoverBorderWidth: 3,
                        tension: 0.3
                    },
                ],
            },
            
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'nearest',
                    intersect: false
                },
                elements: {
                    point: {
                        radius: 0,
                        hoverRadius: 4.5,

                    }
                },
                hover: {
                    intersect: true,
                    // point
                },
                scales: {
                    y: {
                        min: 0,
                        max: 3000,
                        ticks: {
                            stepSize: 500,
                        },
                        border: {
                            display: true,
                            color: 'rgba(212, 157, 255, 0.6)',
                            width: 1
                        }
                    },
                    x: {
                        border: {
                            display: true,
                            color: 'rgba(212, 157, 255, 0.6)',
                            width: 1
                        }
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: (tooltip: any) => {
                                return '+' + tooltip[0].raw;
                            },
                            label: (tooltip: any) => {
                                return 'New views'
                            },
                        },
                        caretPadding: 7,
                        yAlign: 'bottom',
                        displayColors: false,
                        padding: {
                            top: 1,
                            bottom: 3,
                            left: 21,
                            right: 21
                        },
                        backgroundColor: '#B14DFF',
                        titleColor: 'white',
                        titleFont: {
                            family: 'Qanelas',
                            lineHeight: '140%',
                            size: 20,
                            weight: '500'
                        },
                        titleAlign: 'center',
                        titleMarginBottom: -5,
                        bodyFont: {
                            family: 'Qanelas',
                            size: 12,
                            weight: '400',
                            lineHeight: '140%'  
                        },
                        bodyAlign: 'center'
                    },
                },
            },
            plugins: [{
                id: 'CustomPlugin',
                beforeDraw: chart => {
                    let _chart: any = chart;
                    if(_chart.tooltip?._active?.length) {
                        const ctx = _chart.ctx;
                        console.log(_chart.datasetIndex)
                        // let datasetIndex = _chart.datasetIndex
                        // debugger
                        const activePoint = _chart.tooltip._active[0];

                        ctx.save();
                        ctx.setLineDash([5]);
                        ctx.beginPath();
                        ctx.moveTo(activePoint.element.x, _chart.chartArea.bottom);
                        ctx.lineTo(activePoint.element.x, activePoint.element.y);
                        ctx.lineWidth = 2;
                        ctx.lineDashOffset = 40
                        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }]
        })
    }
})
</script>

<template>
    <div class="general-dashboard">
        <h2 class="title">General Dashboard</h2>
        <div class="chartWrapper">
            <div class="chartAreaWrapper">
                <canvas class="chart" id="myChart2" ></canvas>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.general-dashboard {
    padding: 4.28rem 3.51rem 3.16rem;
    background: rgba(217, 217, 217, 0.1);    
    width: 100%;
    @media (max-width: 850px) {
        padding: 4.22rem 0 5.35rem 3.38rem;
    }
    .title {
        font-weight: 700;
        font-size: 2.74rem;
        line-height: 3.42rem;

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }
    .chartWrapper {
        margin-top: 4.45rem;
        height: 95%
    }
    .chartAreaWrapper {
        height: 95%;
    }
    .chart {
        width: 100%;
        height: 95%;
        // height: calc(1px * 384 * v-bind('innerWidth') / 1920);
        aspect-ratio: 1190/437;
        @media (max-width: 850px) {
            height: 35rem;
        }
    }
}
</style>