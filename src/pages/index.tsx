import Head from 'next/head';
import { Container, Typography, Button, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import HeroCarousel from "@/components/HeroCarousel";

const carouselTexts = [
  'Ready to Play Every Hour?',
  'Join Live Quizzes & Win!',
  'Climb the Leaderboard!'
];

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Q247 - The Ultimate Quiz App</title>
        <meta name="description" content="Play timed quizzes every hour and climb the leaderboard!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-tr from-[#3C0D99] via-[#5B21B6] to-[#7C3AED] text-center">

        <HeroCarousel />

        <Container maxWidth="sm" className="pt-24 px-4" id="home">
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#ffffff',
              fontSize: {
                xs: '2.5rem',
                sm: '3rem',
                md: '3.5rem',
              },
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            {carouselTexts[currentTextIndex]}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#e0e0e0',
              mb: 4,
              fontWeight: 400,
            }}
          >
            Compete in live quizzes every hour. Answer fast. Score high. Top the leaderboard.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="#stats"
            sx={{
              backgroundColor: '#facc15',
              color: '#000',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#eab308',
              },
            }}
          >
            View Statistics
          </Button>
        </Container>
        
        <Box id="about" className="text-white py-32 px-6">
          <Typography variant="h4" gutterBottom>About Q247</Typography>
          <Typography variant="body1" maxWidth="md" margin="auto">
            Q247 is your hourly challenge to test your knowledge and speed. Join live quizzes, compete with others, and top the leaderboard to win glory.
          </Typography>
        </Box>

        <Box id="stats" className="text-white py-32 px-6 bg-purple-900">
          <Typography variant="h4" gutterBottom>Leaderboard Stats</Typography>
          <Typography variant="body1" maxWidth="md" margin="auto">
            Track your daily, weekly, and monthly progress against other players. Get live rankings and stay ahead.
          </Typography>
        </Box>
      </main>
    </Layout>
  );
}
