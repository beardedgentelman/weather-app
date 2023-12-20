<template>
  <div class="charts-wrap" >
    <div id="chart">
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, watch } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies
import ApexCharts from 'apexcharts';

const props = defineProps({
  weatherData: Array,
});

const renderChart = () => {
  const temperatures = props.weatherData.map((data) => ({
    x: moment(data.dt_txt).format('HH:mm'),
    y: Math.round(data.main.temp),
  }));

  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      height: 350,
      width: 500,
      borderRadius: '10px',
      background: 'rgba(0, 0, 0, 0.1)',
      color: 'gainsboro',
    },
    series: [{
      name: 'Temperature',
      data: temperatures,
    }],
    xaxis: {
      type: 'category',
      labels: {
        formatter: (value) => value,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: true,
        formatter: (val) => moment(val).format('HH:mm'),
      },
      y: {
        formatter: (val) => `${val.toFixed(2)} °C`,
      },
    },
  };

  const chart = new ApexCharts(document.querySelector('#chart'), options);
  chart.render();
};

onMounted(renderChart);
watch(() => props.weatherData, () => {
  renderChart();
});

</script>

<style scoped>
.charts-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 600px) {
  .charts-wrap{
    display: none;
  }
}
</style>
