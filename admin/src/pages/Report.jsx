// frontend/src/components/ReportPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const ReportPage = () => {
    const [interval, setInterval] = useState('month');
    const [report, setReport] = useState(null);

    const fetchReport = async (interval) => {
        try {
            const response = await axios.get(`${backendUrl}/api/sales-report?interval=${interval}`);
            if (response.data.success) {
                setReport(response.data);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Error fetching report: " + error.message);
        }
    };

    useEffect(() => {
        fetchReport(interval);
    }, [interval]);

    return (
        <div className="p-5 md:p-8">
            <h3>Sales Report</h3>
            
            <div className="mb-4">
                <label htmlFor="interval" className="font-medium mr-2">Select Interval:</label>
                <select
                    id="interval"
                    value={interval}
                    onChange={(e) => setInterval(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md"
                >
                    <option value="day">Daily</option>
                    <option value="week">Weekly</option>
                    <option value="month">Monthly</option>
                    <option value="year">Yearly</option>
                </select>
            </div>

            {report ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-start border-2 border-gray-200 p-5 md:p-8 text-sm sm:text-base text-gray-700">
                    <div>
                        <p className="font-medium">Total Sales</p>
                        <p className="text-gray-600">{currency}{report.totalSales.toFixed(2)}</p>
                    </div>
                    <div>
                        <p className="font-medium">Total Orders</p>
                        <p className="text-gray-600">{report.totalOrders}</p>
                    </div>
                    <div>
                        <p className="font-medium">Average Order Value</p>
                        <p className="text-gray-600">{currency}{report.averageOrderValue.toFixed(2)}</p>
                    </div>
                </div>
            ) : (
                <p className="text-gray-600">Loading report...</p>
            )}
        </div>
    );
};

export default ReportPage;
