<script setup lang="ts">
import { useLeaderboardProfile } from '@/stores/leaderboardProfile';
import DropDownFilter from '@/components/Reusable/Leaderboard/DropDownFilter.vue';
import { Chart, registerables, Colors } from 'chart.js';
import { onMounted, ref } from 'vue';


const infoData = useLeaderboardProfile();

// FILTER DATA
const data = ref([
    {
        id: 0,
        name: "Players",
        checkedStatus: true,
    },
    {
        id: 1,
        name: "Guilds",
        checkedStatus: false,
    },
    {
        id: 2,
        name: "NFTs",
        checkedStatus: false,
    },
    {
        id: 3,
        name: "Academy",
        checkedStatus: false,
    },
]);

// FILTER CHANGE HANDLER
const setFilter = (id: number): void => {
    data.value.forEach(el => {
        if (el.id === id) {
            el.checkedStatus = true;
            if (el.name === 'Players') renderData.value = infoData.getPlayersInfo();
            else if (el.name === 'Guilds') renderData.value = infoData.getGuildsInfo();
            else if (el.name === 'NFTs') renderData.value = infoData.getNFTsInfo();
            else if (el.name === 'Academy') renderData.value = infoData.getAcademyInfo();
        } else {
            el.checkedStatus = false;
        }
    });
}

const chartBar = (): void => {
    Chart.register(Colors, ...registerables);
    Chart.defaults.color = 'white';
    Chart.defaults.font.family = 'Qanelas';
    Chart.defaults.font.weight = '600';
    Chart.defaults.font.size = 16;
    const ctx = <HTMLCanvasElement>document.getElementById('myChartBar');

    const ctxCopy: any = ctx.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',],
                datasets: [
                    {
                        borderColor: '#BF6DFF',
                        data: [5, 0, 7.5, 10, 0, 12, 3],
                        backgroundColor: '#9037D6',
                        hoverBorderWidth: 1,
                        barThickness: 20,
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
                hover: {
                    intersect: true,
                    // point
                },
                scales: {
                    y: {
                        min: 0,
                        max: 15,
                        ticks: {
                            stepSize: 5,
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
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: (tooltip: any) => {
                                return tooltip[0].raw + ' h';
                            },
                            label: (tooltip: any) => {
                                return ''
                            },
                        },
                        caretPadding: 7,
                        yAlign: 'bottom',
                        displayColors: false,
                        backgroundColor: 'transparent',
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
        })
    }
};

const chartLine = (): void => {
    Chart.register(Colors, ...registerables);
    Chart.defaults.color = 'white';
    Chart.defaults.font.family = 'Qanelas';
    Chart.defaults.font.weight = '600';
    Chart.defaults.font.size = 16;
    const ctx = <HTMLCanvasElement>document.getElementById('myChartLine');

    const width = document.getElementsByClassName('chart-line')[0].getBoundingClientRect().width


    const ctxCopy: any = ctx.getContext('2d');
    const gradientFirst = ctxCopy.createLinearGradient(0, 0, 0, width);
    gradientFirst.addColorStop(0, 'rgba(220, 184, 104, 0.01)');
    gradientFirst.addColorStop(1, 'rgba(220, 184, 104, 0.9674)');
    const gradientSecond = ctxCopy.createLinearGradient(0, 0, 0, width);
    gradientSecond.addColorStop(0, 'rgba(157, 60, 232, 0.01)');
    gradientSecond.addColorStop(1, 'rgba(109, 20, 178, 0.9674)');
    const gradientThird = ctxCopy.createLinearGradient(0, 0, 0, width);
    gradientThird.addColorStop(0, 'rgba(215, 80, 72, 0.01)');
    gradientThird.addColorStop(1, 'rgba(215, 80, 72, 0.9674)');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['', 5, 10, 15],
                datasets: [
                    {

                        borderColor: '#DCB45B',
                        data: [13, 2, 13, 2.5],
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
                        data: [15, 2, 5, 6],
                        pointBorderColor: '#D7A4FF',
                        pointBackgroundColor: 'black',
                        fill: true,
                        backgroundColor: gradientSecond,
                        pointBorderWidth: 0,
                        hoverBorderWidth: 3,
                        tension: 0.3
                    },
                    {
                        borderColor: 'rgba(214, 65, 55, 1)',
                        data: [0, 10, 2, 14],
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
                        max: 15,
                        ticks: {
                            stepSize: 5,
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
                        backgroundColor(tooltipItem: any) {
                            if(tooltipItem.tooltip.dataPoints[0].datasetIndex === 0) {
                                return '#DCB45B'
                            }
                            if(tooltipItem.tooltip.dataPoints[0].datasetIndex === 1) {
                                return '#9037D6'
                            }
                            if(tooltipItem.tooltip.dataPoints[0].datasetIndex === 2) {
                                return 'rgba(214, 65, 55, 1)';
                            }
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
                    if (_chart.tooltip?._active?.length) {
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
const chartDoughnut = (): void => {
    Chart.register(Colors, ...registerables);
    Chart.defaults.color = 'white';
    Chart.defaults.font.family = 'Qanelas';
    Chart.defaults.font.weight = '600';
    Chart.defaults.font.size = 16;
    const ctx = <HTMLCanvasElement>document.getElementById('myChartCircle');

    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['TVL', 'Total earned', 'Yeild %'],
                datasets: [
                    {
                        borderWidth: 0,
                        data: [80, 15, 5],
                        backgroundColor: ['#9037D6', '#3A1457', '#260C39'],
                        hoverBorderWidth: 3,
                    },
                ],
            },

            options: {
                responsive: true,
                maintainAspectRatio: true,
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
                        display: false,
                    },
                    x: {
                        display: false,
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: (tooltip: any) => {
                                return tooltip[0].raw + ' %';
                            },
                            label: (tooltip: any) => {
                                return ''
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
                    if (_chart.tooltip?._active?.length) {
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

const innerWidth = ref(window.innerWidth);
onMounted(() => {
    chartBar();
    chartLine();
    chartDoughnut();
});



// RENDER DATA
const renderData = ref(infoData.getPlayersInfo());
</script>

<template>
    <div class="statistics">
        <div class="statistics__box time">
            <div class="statistics__box__wrapper">
                <div class="statistics__box__header">
                    <span class="statistics__box__header__title">Gaming time</span>
                    <DropDownFilter name="time-sort" />
                </div>
                <div class="chartWrapper wrapper-bar">
                    <div class="chartAreaWrapper">
                        <canvas id="myChartBar"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="statistics__box leaderboard">
            <div class="statistics__box__leaderboard__wrapper">
                <h4 class="statistics__box__leaderboard__title">Global leaderboard</h4>
                <div class="statistics__box__leaderboard__filters">
                    <button v-for="item in data" class="statistics__box__leaderboard__filters__el"
                        :class="item.checkedStatus ? 'active' : ''" @click="setFilter(item.id)">{{ item.name
                        }}</button>
                </div>
                <div class="statistics__box__leaderboard__info">
                    <div v-for="(item, index) in renderData" class="statistics__box__leaderboard__info__el">
                        <div class="statistics__box__leaderboard__info__el__left">
                            <span class="statistics__box__leaderboard__info__el__left__number">{{ index + 1 }}</span>
                            <img :src=item.img alt="pic" class="statistics__box__leaderboard__info__el__left__img">
                            <span class="statistics__box__leaderboard__info__el__left__name">{{ item.name }}</span>
                        </div>
                        <div class="statistics__box__leaderboard__info__el__right">
                            <span class="statistics__box__leaderboard__info__el__right__number">
                                {{ item.number }}
                            </span>
                            <span class="statistics__box__leaderboard__info__el__right__text">
                                {{ item.text }}
                            </span>
                        </div>
                    </div>
                </div>
                <button class="statistics__box__leaderboard__button">Load more</button>
            </div>
        </div>
        <div class="statistics__box guild-statistics">
            <div class="statistics__box__wrapper">
                <div class="statistics__box__header">
                    <span class="statistics__box__header__title">Guild Statistics</span>
                    <DropDownFilter name="guild-statistics-sort" />
                </div>
                <div class="statistics__box__content guild">
                    <div class="chartWrapper wrapper-circle">
                        <div class="chartAreaWrapper">
                            <canvas id="myChartCircle"></canvas>
                        </div>
                    </div>
                    <div class="statistics__box__content__info">
                        <div class="statistics__box__content__info__el">
                            <div class="statistics__box__content__info__el__img purple"></div>
                            <span class="statistics__box__content__info__el__text">TVL</span>
                        </div>
                        <div class="statistics__box__content__info__el">
                            <div class="statistics__box__content__info__el__img dark-purple"></div>
                            <span class="statistics__box__content__info__el__text">Total earned</span>
                        </div>
                        <div class="statistics__box__content__info__el">
                            <div class="statistics__box__content__info__el__img darkest-purple"></div>
                            <span class="statistics__box__content__info__el__text">Yield %</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="statistics__box ratios">
            <div class="statistics__box__wrapper">
                <div class="statistics__box__header">
                    <span class="statistics__box__header__title">Ratios</span>
                    <DropDownFilter name="ratios-sort" />
                </div>
                <div class="statistics__box__content ratio">
                    <div class="chartWrapper chart-line">
                        <div class="chartAreaWrapper">
                            <canvas id="myChartLine"></canvas>
                        </div>
                    </div>
                    <div class="statistics__box__content__info">
                        <div class="statistics__box__content__info__el">
                            <div class="statistics__box__content__info__el__img red"></div>
                            <span class="statistics__box__content__info__el__text">Gaming</span>
                        </div>
                        <div class="statistics__box__content__info__el">
                            <div class="statistics__box__content__info__el__img yellow"></div>
                            <span class="statistics__box__content__info__el__text">Learning</span>
                        </div>
                        <div class="statistics__box__content__info__el">
                            <div class="statistics__box__content__info__el__img purple"></div>
                            <span class="statistics__box__content__info__el__text">Earning</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.statistics {
    display: grid;
    gap: 2.57rem;

    grid-template-areas:
        "A A B B"
        "C C B B"
        "D D X X";

    @media only screen and (max-width: 1200px) {
        grid-template-areas:
            "A"
            "C"
            "D"
            "B";
    }

    .time {
        grid-area: A;
    }

    .leaderboard {
        grid-area: B;
        min-width: 49rem;

        @media only screen and (max-width: 850px) {
            min-width: none;
        }
    }

    .guild-statistics {
        grid-area: C;
    }

    .ratios {
        grid-area: D;
    }

    &__box {
        background: rgba(217, 217, 217, 0.05);
        border-radius: 15px;

        &__content {
            display: flex;
            margin-top: 3rem;
            justify-content: space-between;
            &.guild {
                gap: 5.9rem;
            }

            &.ratio {
                gap: 3rem;
            }

            &__info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 13rem;

                &__el {
                    display: flex;
                    align-items: center;

                    &__img {
                        height: 1.3rem;
                        width: 1.3rem;
                        border-radius: 100%;
                        margin-right: 2.23rem;
                        ;

                        &.purple {
                            background: #9037D6;
                        }

                        &.dark-purple {
                            background: #3A1457;
                        }

                        &.darkest-purple {
                            background: #260C39;
                        }

                        &.red {
                            background: #D64037;
                        }

                        &.yellow {
                            background: #DCB45B;
                        }
                    }

                    &__text {
                        font-weight: 600;
                        font-size: 1.71rem;
                        line-height: 2.06rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 15px !important;
                        }
                    }
                }
            }
        }

        &__leaderboard {
            background: rgba(217, 217, 217, 0.05);
            border-radius: 15px;
            height: 100%;

            &__info {
                display: flex;
                flex-direction: column;
                margin-top: 3.43rem;

                &__el {
                    padding: 1.3rem;
                    border-top: 1px solid rgba(242, 242, 242, 0.2);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    &:first-child {
                        padding-top: 0;
                        border: none;
                    }

                    &__left {
                        display: grid;
                        grid-template-columns: 1.7fr 6fr auto;
                        align-items: center;
                        gap: 2rem;

                        @media only screen and (max-width: 850px) {
                            grid-template-columns: 3fr 6fr auto;
                        }

                        &__img {
                            border-radius: 5px;
                            height: 4.3rem;
                            width: 4.3rem;
                        }

                        &__number {
                            font-weight: 600;
                            font-size: 2.06rem;
                            line-height: 85%;

                            @media only screen and (max-width: 850px) {
                                font-size: 23px !important;
                            }
                        }

                        &__name {
                            font-weight: 500;
                            font-size: 1.55rem;
                            line-height: 85%;

                            @media only screen and (max-width: 850px) {
                                font-size: 15px !important;
                            }
                        }
                    }

                    &__right {
                        display: flex;
                        align-items: flex-end;
                        gap: 0.5rem;

                        @media only screen and (max-width: 850px) {
                            flex-direction: column;
                        }

                        &__number {
                            font-weight: 500;
                            font-size: 2.06rem;
                            line-height: 85%;
                            color: #FFFFFF;

                            @media only screen and (max-width: 850px) {
                                font-size: 19px !important;
                            }
                        }

                        &__text {
                            font-size: 1.37rem;
                            line-height: 1.16rem;
                            color: rgba(136, 134, 140, 1);

                            @media only screen and (max-width: 850px) {
                                font-size: 13px !important;
                                margin-top: 5px;
                            }
                        }
                    }
                }
            }

            &__filters {
                display: grid;
                grid-template-columns: repeat(4, 1fr);

                &__el {
                    font-weight: 500;
                    font-size: 1.71rem;
                    line-height: 85%;
                    color: rgba(255, 255, 255, 0.5);
                    flex-direction: column;
                    display: flex;
                    text-align: center;
                    align-items: center;

                    @media only screen and (max-width: 850px) {
                        font-size: 19px !important;
                    }

                    &::after {
                        content: "";
                        align-self: center;
                        width: 2.6rem;
                        padding-top: 1.3rem;
                        display: none;
                    }

                    &:hover {
                        &::after {
                            display: block;
                            border-bottom: 4px solid rgba(255, 255, 255, 0.5);
                            animation: underlineAnimation 0.5s ease;
                        }
                    }

                    &.active {
                        color: #B960FF;

                        &::after {
                            content: "";
                            align-self: center;
                            display: block;
                            width: 2.6rem;
                            padding-top: 1.3rem;
                            border-bottom: 4px solid #B960FF;
                        }
                    }

                    &.active:hover {
                        &::after {
                            animation: none;
                        }
                    }
                }
            }

            &__wrapper {
                padding: 3.44rem 2.6rem 2.4rem;
                display: flex;
                flex-direction: column;
            }

            &__title {
                font-weight: 600;
                font-size: 2.75rem;
                line-height: 85%;
                text-align: center;

                @media only screen and (max-width: 850px) {
                    font-size: 19px !important;
                }
            }

            &__filters {
                margin-top: 3.44rem;
            }

            &__button {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                font-weight: 600;
                font-size: 1.71rem;
                line-height: 85%;
                padding: 1.65rem 0;

                &:hover {
                    opacity: 0.8;
                }

                @media only screen and (max-width: 850px) {
                    font-size: 15px !important;
                }
            }
        }

        &__wrapper {
            padding: 3rem 3.43rem 3.43rem 3.43rem;
            height: 100%;
        }

        &__header {
            display: flex;
            align-items: center;
            gap: 3rem;

            @media only screen and (max-width: 850px) {
                justify-content: space-between;
            }

            &__title {
                font-weight: 600;
                font-size: 3rem;
                line-height: 85%;

                @media only screen and (max-width: 850px) {
                    font-size: 19px !important;
                }
            }

            &__sort-button {
                background: linear-gradient(90.33deg, rgba(255, 255, 255, 0.094) 0.24%, rgba(240, 237, 247, 0.049) 94.13%);
                border-radius: 15px;
                border: 1px solid rgba(255, 255, 255, 0.37);

                display: flex;
                align-items: center;
                gap: 1.8rem;
                padding: 1.11rem 1.71rem;

                &:hover {
                    opacity: 0.8;
                }

                &__text {
                    font-weight: 500;
                    font-size: 1.71rem;
                    line-height: 2.06rem;

                    @media only screen and (max-width: 850px) {
                        font-size: 15px !important;
                    }
                }

                &__img {
                    height: 2.06rem;
                    width: 2.06rem;
                }
            }
        }
    }

    .wrapper-bar {
        margin-top: 4.53rem;
        width: 100%;
        aspect-ratio: 988/388;
    }
    .wrapper-circle {
        height: 100%;
        aspect-ratio: 1/1;
        width: calc(1px * 200 * v-bind('innerWidth') / 1920);

        @media (max-width: 1200px) {
            width: calc(1px * 168 * v-bind('innerWidth') / 375);
        }
    }
    .chart-line {
        aspect-ratio: 481/159;
        min-height: 20rem;
        @media (max-width: 1200px) {
            aspect-ratio: 176/124;
            width: calc(1px * 176 * v-bind('innerWidth') / 375);
        }
    }
    .chartAreaWrapper {
        height: 100%;
    }
    .myChartBar {
        width: 100%;
        height: 100%;
    }
}
</style>