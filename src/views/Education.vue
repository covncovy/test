<template>
    <div>
        <canvas id="ethnicityChart" width="400" height="400"></canvas>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
    name: 'EducationChart',
    setup() {
        const jsonData = ref([]);

        const renderChart = () => {
            if (!Array.isArray(jsonData.value)) {
                console.error('jsonData.value is not an array.');
                return;
            }

            const ethnicGroups = ['太魯閣族', '布農族', '卑南族', '阿美族', '泰雅族', '排灣族', '鄒族', '魯凱族', '賽夏族', '賽德克族', '雅美族'];

            const total = jsonData.value.reduce((acc, school) => {
                return acc + parseInt(school['總計']);
            }, 0);

            const ethnicData = ethnicGroups.map(ethnic => {
                const count = jsonData.value.reduce((acc, school) => {
                    return acc + (parseInt(school[ethnic]) || 0);
                }, 0);
                return {
                    label: ethnic,
                    count
                };
            });

            const chartData = {
                labels: ethnicData.map(item => item.label),
                datasets: [{
                    label: '各族群人数',
                    data: ethnicData.map(item => item.count),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            };

            const ctx = document.getElementById('ethnicityChart').getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: chartData,
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: '各族群人数比例'
                        }
                    }
                }
            });
        };

        onMounted(async () => {
    try {
        const response = await fetch(`https://covncovy.github.io/test/public/education.json`);
        const data = await response.json();

        if (Array.isArray(data.data)) {
            jsonData.value = data.data; 
            renderChart(); 
        } else {
            console.error('JSON data is not in the expected format.');
        }

    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
});


        return {
            jsonData,
            renderChart
        };
    }
};
</script>

