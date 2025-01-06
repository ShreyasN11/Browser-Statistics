import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const FavoriteRepositories = () => {
  const favoriteRepos = [
    {
      name: 'Cycle Share',
      description: 'A full-stack web application for renting cycles using MERN stack.',
      url: 'https://github.com/ShreyasN11/Cycle-Share',
    },
    {
      name: 'Messi Tribute Website',
      description: 'A website with advanced animations using Next.js, Framer Motion, GSAP.',
      url: 'https://github.com/ShreyasN11/Ankara-Messi',
    },
    {
        name: 'Disease Prediction',
        description: 'A web application to predict diseases using Machine Learning.',
        url: 'https://github.com/ShreyasN11/Disease-Predictor',
      }
  ];

  return (
    <div style={{ height: '85vh'}}>
      <h3
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          padding: '10px',
        }}
      >
        GitHub Contributions Calendar
      </h3>
      <GitHubCalendar
        username="ShreyasN11"
        colorScheme="dark"
        hideColorLegend="true"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          padding: '10px',
        }}
      />
      <h3
        style={{
          marginTop: '30px',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Check Out Some of My Favorite Repositories
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {favoriteRepos.map((repo, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'hsl(0, 0%, 13%)',
              borderRadius: '10px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              margin: '10px',
              padding: '20px',
              width: '300px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <h2 style={{ fontWeight: 'bold', marginTop: '-2px'}}>{repo.name}</h2>
            <p>{repo.description}</p>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'grey',
                fontWeight: 'bold',
              }}
            >
              Visit Repository →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteRepositories;
