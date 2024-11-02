import React from 'react'
import { Link } from 'react-router-dom'
import DashboardStatsGrid from '../Components/DashboardStatsGrid'
import TransactionChart from '../Components/TransactionChart'
import PieChartM from '../Components/PieChartM'
import AllCharts from '../Components/AllCharts'
import Pagination from './Pagination'

function Dashboard() {
    return (
        <div >
            <DashboardStatsGrid />
            {/* charts below */}
            <AllCharts />
           
        </div>
    )
}
export default Dashboard