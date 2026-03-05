import React from 'react';

const TicketStats = ({ inProgressCount, resolvedCount }) => {
    const stats = [
        {
            id: 1,
            label: "In-Progress",
            value: inProgressCount, 
            gradient: "bg-[#422AD5]",
        },
        {
            id: 2,
            label: "Resolved",
            value: resolvedCount, 
            gradient: "bg-[#02A53B]", 
        }
    ];

    return (
        <div className="p-6 mt-2 min-h-[200px] flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className={`relative overflow-hidden rounded-xl h-44 flex flex-col items-center justify-center text-white shadow-lg bg-gradient-to-br ${stat.gradient}`}
                    >
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <defs>
                                    <pattern id={`grid-${stat.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                                    </pattern>
                                </defs>
                                <rect width="100" height="100" fill={`url(#grid-${stat.id})`} />
                                <path 
                                    d="M0,100 C30,80 70,80 100,100" 
                                    stroke="white" 
                                    fill="none" 
                                    strokeWidth="0.2"
                                    className="opacity-50"
                                />
                            </svg>
                        </div>

                        <div className="relative z-10 text-center">
                            <p className="text-xl md:text-2xl font-medium mb-2 opacity-90">{stat.label}</p>
                            <h2 className="text-5xl md:text-6xl font-bold">{stat.value}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TicketStats;