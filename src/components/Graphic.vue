<template>
  <article
      class="shadow-lg bg-white dark:bg-gray-800 px-6 py-4 lg:rounded-md pb-6 md:pb-0"
  >
    <div>
      <h2 class="text-lg text-gray-400 font-semibold dark:text-white">
        Why do you create a startup?
      </h2>
      <p class="text-gray-300">Trends</p>
    </div>
    <div>
      <div class="flex justify-center py-6 items-center ">
        <apexchart
            class="mb-8"
            type="pie"
            width="380"
            :options="chartOptions"
            :series="series"
        ></apexchart>
      </div>
    </div>
  </article>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "VueGraphic",
  components: {
    apexchart: VueApexCharts,
  },

  async mounted() {
    // Reports
    await this.getReports();
  },
  data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: [],
        colors: ["#855CF8", "#B085FF", "#503795", "#E289F2"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],

        legend: {
          show: true,
          showForSingleSeries: false,
          position: "bottom",
          labels: {
            colors: ["#9CA3AF"],
            useSeriesColors: false,
          },
          markers: {
            fillColors: ['#D8CBFD', '#9D7DF9', '#263238', '#DCDEDF'],
          },
        },
      },
    };
  },
  methods: {
    async getReports() {
      const reportResponse = await fetch("../api/reports");
      const resp = await reportResponse.json();

      const series = resp.reports.map((item) => parseInt(item.total));
      const labels = resp.reports.map((item) => item.category);

      series.forEach((e) => {
        this.series.push(e);
      });
      labels.forEach((e) => {
        this.chartOptions.labels.push(e);
      });
    },
  },
};
</script>
