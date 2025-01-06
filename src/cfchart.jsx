import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const CodeforcesRatingGraph = () => {
  const [ratingData, setRatingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRatingData = async () => {
      try {
        const response = await fetch('https://codeforces.com/api/user.rating?handle=shreyasmnaik11');
        const data = await response.json();
        if (data.status === 'OK') {
          setRatingData(data.result);
        }
      } catch (error) {
        console.error('Error fetching Codeforces data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRatingData();
  }, []);

  const chartData = {
    labels: ratingData.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Rating',
        data: ratingData.map((entry) => entry.newRating),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: { display: true, text: 'Contests' },
      },
      y: {
        title: { display: true, text: 'Rating' },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const { dataIndex } = tooltipItem;
            const contest = ratingData[dataIndex];
            return `Contest: ${contest.contestName}\nRating: ${contest.newRating}`;
          },
          title: () => '',
        },
      },
    },
  };

  return (
    <>
      <h3
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          padding: '10px',
        }}
      >
        Codeforces Statistics
      </h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          padding: '10px',
          width: '90%',
          height: '75%',
        }}
      >
        {loading ? (
          <p style={{ fontSize: '18px', textAlign: 'center' }}>Loading...</p>
        ) : (
          <Line data={chartData} options={chartOptions} />
        )}
      </div>

      {/* Additional Content Below the Chart */}
      <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '600px' }}>
        <a
          href="https://codeforces.com/profile/shreyasmnaik11"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: 'grey',
            fontWeight: 'bold',
          }}
        >
          View Profile →
        </a>
      </div>
    </>
  );
};

export default CodeforcesRatingGraph;
