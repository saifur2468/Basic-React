import React, { useState, useEffect } from 'react';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TicketStats from './TicketStats';

const TicketSystem = () => {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/restart.json');
        const data = await response.json();
        setTickets(data);
      } catch (err) {
        toast.error("Data load hote somossa hoyeche!");
        console.error("Data load hoyni:", err);
      }
    };
    loadData();
  }, []);

  const handleAddToProgress = (ticket) => {
    if (inProgress.find(t => t.id === ticket.id)) {
      toast.info("Ei ticket ta already progress section e ache!");
      return;
    }
    setInProgress([...inProgress, ticket]);
    toast.success(`Added: ${ticket.title}`, { position: "top-right", autoClose: 2000 });
  };

  const handleComplete = (id, title) => {
    const completedTask = inProgress.find(t => t.id === id);
    setInProgress(inProgress.filter(t => t.id !== id));
    setResolvedTasks([...resolvedTasks, completedTask]);
    toast.success(`Success: ${title} completed!`, { theme: "colored" });
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen p-4 sm:p-6 md:p-10 font-sans text-[#334155]">
      <ToastContainer />

      <div className="max-w-7xl mx-auto mb-6 md:mb-10 px-2 sm:px-0">
        <TicketStats 
          inProgressCount={inProgress.length} 
          resolvedCount={resolvedTasks.length} 
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 px-2 sm:px-0">
       
        <div className="lg:w-3/4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#1e293b]">Customer Tickets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
            {tickets.map((ticket) => (
              <div 
                key={ticket.id} 
                onClick={() => handleAddToProgress(ticket)}
                className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow relative"
              >
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-bold">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {ticket.status || "Open"}
                </div>

                <h3 className="text-base sm:text-lg font-bold pr-14 sm:pr-16 mb-2 leading-tight">{ticket.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2">{ticket.description}</p>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] sm:text-[11px] font-bold uppercase tracking-wider gap-2 sm:gap-0">
                  <div className="flex gap-2 sm:gap-3">
                    <span className="text-gray-400">#{ticket.id}</span>
                    <span className={ticket.priority === 'Critical' || ticket.priority === 'High' ? 'text-red-500' : 'text-yellow-600'}>
                      {ticket.priority} PRIORITY
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-400 normal-case font-medium">
                    <span className="text-xs sm:text-sm">{ticket.customer}</span>
                    <span className="flex items-center gap-1">
                      <BsCalendar2DateFill className="text-[10px] sm:text-[12px]" />{ticket.createdAt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/4 space-y-6 sm:space-y-8 mt-6 lg:mt-0">
         
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Task Status</h2>
            {inProgress.length === 0 ? (
              <p className="text-gray-400 text-sm italic">Select a ticket to add to Task Status</p>
            ) : (
              <div className="space-y-2 sm:space-y-3">
                {inProgress.map(task => (
                  <div key={task.id} className="bg-white p-3 sm:p-4 rounded-lg border border-blue-100 shadow-sm">
                    <p className="text-sm sm:text-[13px] font-bold mb-2 sm:mb-3">{task.title}</p>
                    <button 
                      onClick={() => handleComplete(task.id, task.title)}
                      className="w-full bg-[#02A53B] font-bold py-2 rounded text-xs sm:text-sm text-white hover:bg-green-600 transition-colors"
                    >
                      Complete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

         
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Resolved Task</h2>
            {resolvedTasks.length === 0 ? (
              <p className="text-gray-400 text-sm italic">No resolved tasks yet.</p>
            ) : (
              <div className="space-y-2 sm:space-y-3">
                {resolvedTasks.map(task => (
                  <div key={task.id} className="bg-green-50 p-2 sm:p-3 rounded border border-green-100 flex items-center gap-2">
                    <p className="text-sm sm:text-[13px] text-green-800 font-medium">{task.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSystem;