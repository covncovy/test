<template>
    <div>
      <canvas ref="myChartCanvas" style="width: 400px; height: 300px;"></canvas>
    </div>
  </template>
  
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  export default {
    setup() {
      const myChartCanvas = ref(null); 
  
      const jsonData = ref([]); 
  
      onMounted(async () => {
        try {
          
          const response = await fetch(`/land.json`);
          const data = await response.json();
          jsonData.value = data;
  
          renderChart(myChartCanvas.value); 
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      });
  
      const renderChart = (canvas) => {
        if (!canvas) {
          console.error('Canvas element not found');
          return;
        }
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: jsonData.value.map(item => item.區名),
            datasets: [{
              label: '高雄市共有土地總面積',
              data: jsonData.value.map(item => item.高雄市共有土地總面積),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                suggestedMin: 0,   
                suggestedMax: 100
              }
            }
          }
        });
      };
  
    
  
      return {
        jsonData,
        myChartCanvas
      };
    }
  };
  </script>
  