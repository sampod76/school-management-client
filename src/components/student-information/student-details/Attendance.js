import { Progress } from 'antd'
import React from 'react'

export default function Attendance() {
  return (
    <div className="lg:w-[70%] p-3">
        <h1 className="text-2xl font-bold mb-2">Attendance</h1>
        <div className="lg:flex justify-between items-center gap-3">

          <div className="bg-white p-4 rounded-2xl shadow-2xl lg:w-[18%] space-y-2 w-full mb-2 lg:mb-0">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
              <p className="text-white text-2xl">A</p>
            </div>

            <h1 className="text-xl font-bold">
              Engineering Graphics
            </h1>
            <h1 className="text-xl font-bold">
              12/<span>14</span>
            </h1>
            <div className="text-center">
              <Progress
                type="circle"
                percent={90}
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              />
            </div>
            <p className="text-center">Last 24 Hours</p>
          </div>

          
          <div className="bg-white p-4 rounded-2xl shadow-2xl lg:w-[18%] space-y-2 w-full mb-2 lg:mb-0">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
              <p className="text-white text-2xl">A</p>
            </div>

            <h1 className="text-xl font-bold">
              Engineering Graphics
            </h1>
            <h1 className="text-xl font-bold">
              12/<span>14</span>
            </h1>
            <div className="text-center">
              <Progress
                type="circle"
                percent={90}
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              />
            </div>
            <p className="text-center">Last 24 Hours</p>
          </div>


          
          <div className="bg-white p-4 rounded-2xl shadow-2xl lg:w-[18%] space-y-2 w-full mb-2 lg:mb-0">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
              <p className="text-white text-2xl">A</p>
            </div>

            <h1 className="text-xl font-bold">
              Engineering Graphics
            </h1>
            <h1 className="text-xl font-bold">
              12/<span>14</span>
            </h1>
            <div className="text-center">
              <Progress
                type="circle"
                percent={90}
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              />
            </div>
            <p className="text-center">Last 24 Hours</p>
          </div>


          
          <div className="bg-white p-4 rounded-2xl shadow-2xl lg:w-[18%] space-y-2 w-full mb-2 lg:mb-0">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
              <p className="text-white text-2xl">A</p>
            </div>

            <h1 className="text-xl font-bold">
              Engineering Graphics
            </h1>
            <h1 className="text-xl font-bold">
              12/<span>14</span>
            </h1>
            <div className="text-center">
              <Progress
                type="circle"
                percent={90}
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              />
            </div>
            <p className="text-center">Last 24 Hours</p>
          </div>


          
          <div className="bg-white p-4 rounded-2xl shadow-2xl lg:w-[18%] space-y-2 w-full mb-2 lg:mb-0">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
              <p className="text-white text-2xl">A</p>
            </div>

            <h1 className="text-xl font-bold">
              Engineering Graphics
            </h1>
            <h1 className="text-xl font-bold">
              12/<span>14</span>
            </h1>
            <div className="text-center">
              <Progress
                type="circle"
                percent={90}
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              />
            </div>
            <p className="text-center">Last 24 Hours</p>
          </div>

          
        </div>
      </div>
  )
}
