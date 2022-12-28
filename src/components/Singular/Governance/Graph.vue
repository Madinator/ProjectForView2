<script setup lang="ts">
import SelectGraph from '@/components/Reusable/Governance/SelectGraph.vue';
import { Chart, registerables, Colors } from 'chart.js';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const chart = () => {
    Chart.register(Colors, ...registerables);
    Chart.defaults.color = 'white';
    Chart.defaults.font.family = 'Qanelas';
    Chart.defaults.font.weight = '600';
    Chart.defaults.font.size = 16;
    const ctx = <HTMLCanvasElement> document.getElementById('myChart');
    
    const ctxCopy: any = ctx.getContext('2d');
        
    const width = document.getElementsByClassName('chartWrapper')[0].getBoundingClientRect().width
    
    const gradientFirst = ctxCopy.createLinearGradient(0, 0, 0, width);
    gradientFirst.addColorStop(0, 'rgba(220, 184, 104, 0.01)');
    gradientFirst.addColorStop(1, 'rgba(220, 184, 104, 0.9674)');
    const gradientSecond = ctxCopy.createLinearGradient(0, 0, 0, width);
    gradientSecond.addColorStop(0, 'rgba(157, 60, 232, 0.01)');
    gradientSecond.addColorStop(1, 'rgba(109, 20, 178, 0.9674)');
    const gradientThird = ctxCopy.createLinearGradient(0, 0, 0, width);
    gradientThird.addColorStop(0, 'rgba(215, 80, 72, 0.01)');
    gradientThird.addColorStop(1, 'rgba(215, 80, 72, 0.9674)');
    
    if(ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['','8 Sep 2022', '9 Sep 2022', '10 Sep 2022', '11 Sep 2022', '12 Sep 2022', '13 Sep 2022', '14 Sep 2022', '15 Sep 2022'],
                datasets: [
                    {
                        borderColor: '#9037D6',
                        data: [300, 1000, 1800, 1400, 600, 1100, 1800, 2200, 1000],
                        pointBorderColor: '#D7A4FF',
                        pointBackgroundColor: 'black',
                        fill: true,
                        backgroundColor: gradientSecond,
                        pointBorderWidth: 0,
                        hoverBorderWidth: 3,
                        tension: 0.3
                    },
                    {
                        borderColor: '#DCB45B',
                        data: [400, 2000, 2200, 1700, 800, 1300, 2100, 2500, 1200],
                        pointBorderColor: '#D7A4FF',
                        pointBackgroundColor: 'black',
                        fill: true,
                        backgroundColor: gradientFirst,
                        pointBorderWidth: 0,
                        hoverBorderWidth: 3,
                        tension: 0.4
                    },
                    {
                        borderColor: 'rgba(214, 65, 55, 1)',
                        data: [500, 3000, 2500, 2500, 1000, 1500, 2500, 3000, 1500],
                        pointBorderColor: '#D7A4FF',
                        pointBackgroundColor: 'black',
                        fill: true,
                        backgroundColor: gradientThird,
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
                        external: (context: any) => {
                            const {chart, tooltip} = context;
                            tooltip.backgroundColor = 'red'
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
                        backgroundColor(tooltipItem: any) {
                            if(tooltipItem.tooltip.dataPoints[0].datasetIndex === 0) {
                                return '#9037D6'
                            }
                            if(tooltipItem.tooltip.dataPoints[0].datasetIndex === 1) {
                                return '#DCB45B'
                            }
                            if(tooltipItem.tooltip.dataPoints[0].datasetIndex === 2) {
                                return 'rgba(214, 65, 55, 1)';
                            }
                        },
                        // backgroundColor: '#B14DFF',
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
}
onMounted(() => {
    chart();
});

</script>

<template>
    <div class="graph">
       <div class="header">
            <h2 class="title">Total value locked</h2>
            <div class="graph-select">
                <SelectGraph name="Last year"/>
            </div>
       </div>
       <div class="stats">
            <div class="stat">
                <div class="left">
                    <div class="square square-yellow"></div>
                    <span class="key">Staiking</span>
                </div>
                <span class="value">$456</span>
            </div>
            <div class="stat">
                <div class="left">
                    <div class="square square-red"></div>
                    <span class="key">Liqudity pools</span>
                </div>
                <span class="value">$232.04</span>
            </div>
            <div class="stat">
                <div class="left">
                    <div class="square square-purple"></div>
                    <span class="key">Lending</span>
                </div>
                <span class="value">$32</span>
            </div>
       </div>
       <div class="chartWrapper">
            <div class="chartAreaWrapper">
                <canvas id="myChart" ></canvas>
            </div>
            <canvas id="myChartAxis" ></canvas>
        </div>
    </div>
</template>

<style lang="scss" scoped> 

.graph {
    background: rgba(217, 217, 217, 0.1);
    padding: 3.87rem 4.28rem 5.1rem;
    width: fit-content;
    border-radius: 10px;

    @media (max-width: 850px) {
        padding: 4.22rem 0 5.35rem 3.24rem;
    }
    .header {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 850px) {
            flex-flow: column;
            align-items: flex-start;
            gap: 2.11rem;
        }
    }
    .title {
        font-weight: 700;
        font-size: 3.08rem;
        line-height: 3.85rem;

        @media (max-width: 850px) {
            font-size: 3.38rem;
            line-height: 4.22rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 23px !important;
        }
    }
    .graph-select {
        @media (max-width: 850px) {
            padding: 0 3.1rem 0 0;
            width: 100%;
        }
    }
    .stats {
        margin-top: 1.74rem;

        display: flex;
        flex-flow: column;
        gap: 1.28rem;

        @media (max-width: 850px) {
            margin-top: 3.8rem;
            gap: 2.11rem;
            padding: 0 12.81rem 0 0;
        }
    }
    .stat {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        width: 24.66rem;

        @media (max-width: 850px) {
            width: 100%;
        }
    }
    .left {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 1.31rem;

        @media (max-width: 850px) {
            gap: 0.84rem;
        }
    }
    .square {
        min-height: 1.71rem;
        min-width: 1.71rem;
        max-height: 1.71rem;
        max-width: 1.71rem;

        @media (max-width: 850px) {
            min-height: 2.81rem;
            min-width: 2.81rem;
            max-height: 2.81rem;
            max-width: 2.81rem;
        }
    }
    .square-yellow {
        background-color: var(--color-yellow);
    }
    .square-purple {
        background-color: var(--color-purple-dark);
    }
    .square-red {
        background-color: var(--color-red);
    }
    .key {
        font-weight: 500;
        font-size: 1.71rem;
        line-height: 2rem;

        @media (max-width: 850px) {
            line-height: 0.84rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .value {
        font-weight: 300;
        font-size: 1.71rem;
        line-height: 2rem;

        @media (max-width: 850px) {
            line-height: 0.84rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 15px !important;
        }
    }
    .chartWrapper {
        margin-top: 6.13rem;
        position: relative;
        height: 50%;

        @media (max-width: 850px) {
            margin-top: 4.93rem;
            width: 100%;
        }
    }

    .chartWrapper > canvas {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events:none;
        height: 100%;
    }

    .chartAreaWrapper {
        height: 100%;
    }
}
</style>