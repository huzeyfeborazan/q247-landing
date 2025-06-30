import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';

type User = {
  id: number;
  nickname: string;
  score: number;
  avatar: string;
};

const TABS = ['daily', 'weekly', 'monthly', 'all'];

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState('daily');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const url = `http://localhost:8080/api/leaderboard/${activeTab}`
        const res = await fetch(url);
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        console.error('Failed to fetch leaderboard', err);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [activeTab]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex justify-center mb-6 space-x-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${
                activeTab === tab ? 'bg-yellow-400 text-black' : 'bg-purple-700 text-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <table className="w-full text-left bg-white rounded overflow-hidden shadow">
            <thead className="bg-purple-800 text-white">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Avatar</th>
                <th className="p-3">Nickname</th>
                <th className="p-3">Score</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{idx + 1}</td>
                  <td className="p-3">
                    <img src={user.avatar} alt={user.nickname} className="w-8 h-8 rounded" />
                  </td>
                  <td className="p-3">{user.nickname}</td>
                  <td className="p-3">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
}
