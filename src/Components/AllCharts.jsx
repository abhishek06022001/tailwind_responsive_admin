
import React, { useState } from 'react'
import { Bar } from "react-chartjs-2"
import Pagination from '../Pages/Pagination';
import BasicTable from './BasicTable';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from '../utils/Data';
import PieChart from './PieChart';
import { BarChart } from './BarChart';
import Example from './Example';
import Chart1 from './Charts/AreaChart';
import Chart2 from './Charts/Chart2';




function AllCharts() {

    return (
        <div>
            <div className='bg-white p-2 lg:h-64 md:h-52 sm:h-32 grid sm:grid-cols-2    gap-1 mt-5 w-full '>
                <div className="flex-1 flex justify-center" >
                    <Chart2 />
                </div>
                <div className="flex-1 flex justify-center">
                    <Chart1 />
                </div>
            </div>
            <div className='md:flex gap-5 '>
                <div className=' mt-5 p-2 bg-white  sm:w-1/2 w-full  h-60  overflow-auto'>
                    <h1
                        className='font-medium'
                    >
                        BlueWave Technologies Inc. is a mid-sized company specializing in solar panel technology and sustainable energy solutions. The company was founded in 2015, and its core products include residential and commercial solar installations, energy storage systems, and consulting services for eco-friendly energy management.
                    </h1>
                    <div>
                        Additional Insights:<br />
                        -Top Markets: United States, Canada, Germany<br />
                        -Customer Segments: Residential (60%), Commercial (30%), Government (10%)<br />
                        -Growth: The company saw a 20% increase in revenue year-over-year, driven by expanded demand in the residential solar market.<br />
                        -Challenges: Rising costs in raw materials and supply chain delays have increased COGS by 5% this year.
                    </div>
                    <div>
                        Recent Initiatives <br />
                        -Launched a new solar battery storage product to address increased energy storage demand.<br />
                        -Expanding R&D efforts to create smart grid solutions to reduce energy waste.<br />
                        -Partnered with government agencies for incentive-based installations in underserved communities.
                    </div>
                </div>

                <div className=' p-2 bg-white sm:w-1/2 w-full mt-5 w-96 '>
                    <BasicTable />

                </div>
            </div>
        </div>
    )
}

export default AllCharts;
