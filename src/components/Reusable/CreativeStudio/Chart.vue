<script setup lang="ts">
import { Chart, registerables, Colors, type TooltipModel, type TooltipItem } from 'chart.js';
import { onMounted, ref, reactive, watchEffect } from 'vue';

const props = defineProps({
    isOptions: {
        type: Boolean,
        default: true,
    },
    options: {
        type: Array<any>,
    }
});

let chartElement = ref();
const state = reactive({
    optionsReactive: props.options,
    label: 'New views',
    data: [0,250, 300, 750, 200, 180, 50, 1000, 1300, 1500]
})


const setActiveOption = async (id: number) => {
    let chartStatus = Chart.getChart("myChart");
    if(chartStatus) {
        chartStatus.destroy();
        chart();
    }

    if(state.optionsReactive) {
        state.optionsReactive.map((item: any) => 
        {
            if(item.id === id) {
                item.active = true;
            } 
            else {
                item.active = false;
            }
        });
    }
    state.optionsReactive?.map(item => {
        if(item.active && item.id === 0 ) {
            state.label = 'New views';
            state.data = [0,250, 300, 750, 200, 180, 50, 1000, 1300, 1500];
        }
        if(item.active && item.id === 1) {
            state.label = 'Average Views';
            state.data = [0,1250, 245, 234, 987, 453, 1267, 345, 1111, 235];
        }
        if(item.active && item.id === 2) {
            state.label = 'Subscribers';
            state.data = [0,800, 100, 0, 1200, 1300, 1400, 300, 200, 1500];
        }
    });
}
const chart = () => {
    Chart.register(Colors, ...registerables);
    Chart.defaults.color = 'white';
    Chart.defaults.font.family = 'Qanelas';
    Chart.defaults.font.weight = '600';
    Chart.defaults.font.size = 16;
    const ctx = <HTMLCanvasElement> document.getElementById('myChart'); 
    if(ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['','8 Sep 2022', '9 Sep 2022', '10 Sep 2022', '11 Sep 2022', '12 Sep 2022', '13 Sep 2022', '14 Sep 2022', '15 Sep 2022'],
                datasets: [
                    {

                        borderColor: '#B14DFF',
                        data: state.data,
                        pointBorderColor: '#D7A4FF',
                        pointBackgroundColor: 'black',
                        pointBorderWidth: 0,
                        hoverBorderWidth: 3,
                        
                    }
                ],
            },
            
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
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
                        max: 1500,
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
                            title: (tooltip: any): string => {
                                return '+' + tooltip[0].raw;
                            },
                            label: (tooltip: any) => {
                                return state.label;
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
                    // console.log(_chart.tooltip)
                    if(_chart.tooltip?._active?.length) {
                        const ctx = chart.ctx;
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
        });
    }
}
onMounted(() => {
    chart();
});



</script>

<template>
    <div class="creative-studio-chart">
        <div v-if="isOptions" class="options">
            <button 
                class="option" 
                v-for="item in state.optionsReactive" 
                :class="[{'option--active': item.active}, {'option-last': item.id===0}]"
                @click="setActiveOption(item.id)">
                <div class="first">
                    <h2 class="title">{{item.title}}</h2>
                    <span class="value">{{item.value}}</span>
                </div>
                <span class="stats" v-if="item.stats">{{item.stats}}</span>
            </button>
        </div>
        <div class="chart" :class="{'chart--full-radius': !isOptions}">
            <canvas id="myChart"></canvas>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.creative-studio-chart {
    .options {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        gap: 2.57rem;
        @media (max-width: 850px) {
            flex-flow: column-reverse;
            gap: 1.41rem;
        }
    }
    .option {
        background: rgba(217, 217, 217, 0.05);
        padding: 1.71rem 1.71rem 1.11rem;
        width: 34rem;

        display: flex;
        flex-flow: column;
        align-items: center;
        transition: all 0.3s;
        justify-content: center;
        transition: all 0.3s;

        &:not(.option--active):hover {
            background: rgba(217, 217, 217, 0.08);
        }
        @media (max-width: 1300px) {
            width: 24rem;
        }
        @media (max-width: 850px) {
            background: rgba(217, 217, 217, 0.1);
            flex-flow: row;
            gap: 2.81rem;
            align-items: flex-start;
            justify-content: space-between;
            padding: 1.26rem 3.24rem 0.56rem 2.11rem;
            border-radius: 5px;
            width: 80%;
        }
    }
    .option--active {
        background: rgba(217, 217, 217, 0.1);
    }
    .option-last {
        @media (max-width: 850px) {
            border-radius: 5px 5px 0px 0px;  
        }
    }
    .first {
        display: flex;
        flex-flow: column;
        align-items: center;
        @media (max-width: 850px) {
            align-items: flex-start;
            min-width: 30%;
        }
    }
    .title {
        font-weight: 500;
        font-size: 1.54rem;
        line-height: 140%;
        opacity: 0.5;
        @media (max-width: 850px) {
            font-size: 2rem;
            white-space: nowrap;
        }
    }
    .value {
        font-weight: 500;
        font-size: 3.42rem;
        line-height: 140%;
        @media (max-width: 850px) {
            font-size: 2.53rem;
            white-space: nowrap;
        }
    }
    .stats {
        font-weight: 400;
        font-size: 1.54rem;
        line-height: 140%;
        opacity: 0.5;

        @media (max-width: 850px) {
            font-size: 2rem;
            text-align: left;
        }
    }
    .chart {
        background: rgba(217, 217, 217, 0.1);
        border-radius: 0px 0px 5px 5px;
        padding: 6rem 2rem 4.88rem;
        height: 34rem;
        margin: 0 auto;
        position: relative;
        flex: 1 1 auto;
        width: 100%;
        @media (max-width: 850px) {
            height: 45rem;
            aspect-ratio: 12/4;
        }
        canvas {
            width: 100% !important;
            @media (max-width: 850px) {
                width: none !important;
            }
        }
    }
    .chart--full-radius {
        border-radius: 5px;
    }
}
</style>