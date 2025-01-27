const { useState, useEffect, useCallback } = React;
const { ChevronDown, ChevronUp, Calendar } = lucide;

// ユーティリティ関数
const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { isMobile };
};

// エラーバウンダリー
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <div className="p-4 text-red-600">エラーが発生しました。</div>;
        }
        return this.props.children;
    }
}

// トーナメントスケジュールコンポーネント
const TournamentSchedule = () => {
    const { isMobile } = useDeviceDetect();
    const [expandedTournaments, setExpandedTournaments] = useState({});

    const getExtraInfo = (tournament) => ({
        blindStructure: [
            { level: 1, sb: 100, bb: 200, ante: 200, duration: '20分' },
            { level: 2, sb: 100, bb: 300, ante: 300, duration: '20分' },
            { level: 3, sb: 200, bb: 400, ante: 400, duration: '20分' },
        ],
        prizeInfo: 'プライズ構造はDemo画面です。'
    });

    const toggleTournament = useCallback((date, index, event) => {
        if (event.type === 'keypress' && event.key !== 'Enter') {
            return;
        }
        const key = `${date}-${index}`;
        setExpandedTournaments(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    }, []);

    const events = [
    {
      date: '2025.02.21',
      tournaments: [
        { time: '15:00', regClose: 'TBD', type: 'NLH', id: '#02', name: 'Warm-up', buyin: '¥15,000', chips: '30,000 Chips' },
        { time: '18:00', regClose: 'TBD', type: 'NLH', id: '#01', name: 'Main Event / Day 1A', buyin: '1 Ticket + ¥7,000 or ¥70,000', chips: '50,000 Chips' },
        { time: '19:00', regClose: 'TBD', type: 'NLH', id: '#03', name: 'Lucky 7\'s', buyin: '¥7,700', chips: '20,000 Chips' },
        { time: '20:00', regClose: 'TBD', type: 'PLO', id: '#04', name: 'Kick-off', buyin: '¥15,000', chips: '30,000 Chips' },
        { time: '22:00', regClose: 'TBD', type: 'NLH', id: '#05', name: 'Turbo', buyin: '¥10,000', chips: '20,000 Chips' },
        { time: '24:00', regClose: 'TBD', type: 'NLH', id: '#06', name: 'Hyper', buyin: '¥8,000', chips: '15,000 Chips' },
        { time: '25:00', regClose: 'TBD', type: 'NLH', id: '#16(s)', name: 'Satellite to BYBIT1000 at 1/14', buyin: '¥8,000', chips: '10,000 Chips' }
      ]
    },
    {
      date: '2025.02.22',
      tournaments: [
        { time: '11:00', regClose: 'TBD', type: 'NLH', id: '#01', name: 'Main Event / Day 1B', buyin: '1 Ticket + ¥7,000 or ¥70,000', chips: '50,000 Chips' },
        { time: '15:00', regClose: 'TBD', type: 'NLH', id: '#07', name: 'Builder', buyin: '¥15,000', chips: '25,000 Chips' },
        { time: '17:00', regClose: 'TBD', type: 'NLH', id: '#01', name: 'Main Event / Day 1C Turbo', buyin: '1 Ticket + ¥7,000 or ¥70,000', chips: '50,000 Chips' },
        { time: '20:00', regClose: 'TBD', type: 'NLH', id: '#08', name: 'Mystery Bounty', buyin: '¥20,000', chips: '30,000 Chips' },
        { time: '20:00', regClose: 'TBD', type: 'PLO', id: '#09', name: 'Night', buyin: '¥15,000', chips: '30,000 Chips' },
        { time: '22:00', regClose: 'TBD', type: 'NLH', id: '#10', name: 'BYBIT500', buyin: '¥50,000', chips: '30,000 Chips' },
        { time: '22:00', regClose: 'TBD', type: 'NL', id: '#11', name: 'Super Hold\'em', buyin: '¥10,000', chips: '20,000 Chips' },
        { time: '24:00', regClose: 'TBD', type: 'PLO', id: '#12', name: 'Hi/Lo 8 or Better', buyin: '¥12,000', chips: '30,000 Chips' },
        { time: '25:00', regClose: 'TBD', type: 'NLH', id: '#13', name: 'Hyper', buyin: '¥8,000', chips: '15,000 Chips' },
        { time: '26:00', regClose: 'TBD', type: 'NLH', id: '#16(s)', name: 'Satellite to BYBIT1000 at 1/14', buyin: '¥8,000', chips: '10,000 Chips' }
      ]
    },
    {
      date: '2025.02.23',
      tournaments: [
        { time: '11:00', regClose: '-', type: 'NLH', id: '#01', name: 'Main Event / Day 2', buyin: '-', chips: '-' },
        { time: '11:00', regClose: 'TBD', type: 'NLH', id: '#14', name: 'Poker Players Championship / Day 1', buyin: '¥25,000', chips: '30,000 Chips' },
        { time: '16:00', regClose: 'TBD', type: 'NLH', id: '#15', name: 'Superstack', buyin: '¥20,000', chips: '40,000 Chips' },
        { time: '18:00', regClose: 'TBD', type: 'NLH', id: '#16', name: 'BYBIT1000', buyin: '¥100,000', chips: '50,000 Chips' },
        { time: '19:00', regClose: 'TBD', type: 'NLH', id: '#17', name: 'Tag Team', buyin: '¥20,000', chips: '40,000 Chips' },
        { time: '20:00', regClose: 'TBD', type: 'MIX', id: '#18', name: '2-7TD & Badugi', buyin: '¥15,000', chips: '40,000 Chips' },
        { time: '21:00', regClose: 'TBD', type: 'NLH', id: '#19', name: 'Nightstack', buyin: '¥15,000', chips: '30,000 Chips' },
        { time: '22:00', regClose: 'TBD', type: 'NLH', id: '#20', name: 'Tag Team Turbo', buyin: '¥14,000', chips: '30,000 Chips' },
        { time: '24:00', regClose: 'TBD', type: 'NLH', id: '#21', name: 'Turbo', buyin: '¥10,000', chips: '20,000 Chips' },
        { time: '24:00', regClose: 'TBD', type: 'MIX', id: '#22', name: 'FL Badugi', buyin: '¥12,000', chips: '30,000 Chips' },
        { time: '26:00', regClose: 'TBD', type: 'NLH', id: '#25(s)', name: 'Satellite to BYBIT500 at 1/8', buyin: '¥7,000', chips: '10,000 Chips' }
      ]
    },
    {
      date: '2025.02.24',
      tournaments: [
        { time: '11:00', regClose: '-', type: 'NLH', id: '#14', name: 'Poker Players Championship / Day 2', buyin: '-', chips: '-' },
        { time: '11:00', regClose: 'TBD', type: 'NLH', id: '#23', name: 'Megastack', buyin: '¥15,000', chips: '30,000 Chips' },
        { time: '12:00', regClose: 'TBD', type: 'PLO', id: '#24', name: 'Deep', buyin: '¥20,000', chips: '40,000 Chips' },
        { time: '13:00', regClose: 'TBD', type: 'NLH', id: '#25', name: 'BYBIT500', buyin: '¥50,000', chips: '30,000 Chips' },
        { time: '15:00', regClose: 'TBD', type: 'NLH', id: '#26', name: 'Deepstack', buyin: '¥12,000', chips: '25,000 Chips' },
        { time: '16:00', regClose: 'TBD', type: 'PLO', id: '#27', name: 'Closer', buyin: '¥12,000', chips: '30,000 Chips' },
        { time: '19:00', regClose: 'TBD', type: 'NLH', id: '#28', name: 'Employees', buyin: 'Staff Only', chips: '10,000 Chips' }
      ]
    }
  ];

    const getTypeColor = (type) => {
        switch (type) {
            case 'NLH': return 'bg-blue-600';
            case 'PLO': return 'bg-purple-600';
            case 'MIX': return 'bg-red-600';
            case 'NL': return 'bg-blue-600';
            default: return 'bg-gray-600';
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="tournament-header">
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <Calendar className="w-8 h-8 text-white/90" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-center mb-2">2025 Sapporo #01</h1>
                    <p className="text-center text-gray-300 text-lg">2025.02.21 - 24</p>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-4 pt-8 pb-16">
                {events.map((day, dayIndex) => (
                    <div key={dayIndex} className="mb-8">
                        <div className="flex items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">{day.date}</h2>
                            <div className="ml-4 h-px flex-1 bg-gray-200"></div>
                        </div>
                        <div className="tournament-card">
                            {/* トーナメント一覧の表示ロジック */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// アプリケーションのマウント
const rootElement = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <TournamentSchedule />
        </ErrorBoundary>
    </React.StrictMode>,
    rootElement
);