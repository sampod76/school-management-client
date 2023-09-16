import React from "react";

export default function TabileLoading() {
  return (
    <div>
      <section class="bg-white">
        <div class="container mx-auto  animate-pulse">
          <table class="w-full table-fixed">
            <thead>
              <tr>
                <th class="w-48 bg-gray-200 rounded-lg"></th>
                <th class="w-64 bg-gray-200 rounded-lg"></th>
                <th class="w-64 bg-gray-200 rounded-lg sm:w-80"></th>
                <th class="w-64 bg-gray-200 rounded-lg sm:w-80"></th>
                <th class="w-64 bg-gray-200 rounded-lg sm:w-80"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="w-full h-64 bg-gray-300 rounded-lg animate-pulse"></td>
                <td class="w-56 bg-gray-200 rounded-lg animate-pulse"></td>
                <td class="w-24 bg-gray-200 rounded-lg animate-pulse"></td>
              </tr>
              <tr>
                <td class="w-full h-64 bg-gray-300 rounded-lg animate-pulse"></td>
                <td class="w-56 bg-gray-200 rounded-lg animate-pulse"></td>
                <td class="w-24 bg-gray-200 rounded-lg animate-pulse"></td>
              </tr>
              <tr>
                <td class="w-full h-64 bg-gray-300 rounded-lg animate-pulse"></td>
                <td class="w-56 bg-gray-200 rounded-lg animate-pulse"></td>
                <td class="w-24 bg-gray-200 rounded-lg animate-pulse"></td>
              </tr>
              <tr>
                <td class="w-full h-64 bg-gray-300 rounded-lg animate-pulse"></td>
                <td class="w-56 bg-gray-200 rounded-lg animate-pulse"></td>
                <td class="w-24 bg-gray-200 rounded-lg animate-pulse"></td>
              </tr>
              <tr>
                <td class="w-full h-64 bg-gray-300 rounded-lg animate-pulse"></td>
                <td class="w-56 bg-gray-200 rounded-lg animate-pulse"></td>
                <td class="w-24 bg-gray-200 rounded-lg animate-pulse"></td>
              </tr>
              <tr>
                <td class="w-full h-64 bg-gray-300 rounded-lg animate-pulse"></td>
                <td class="w-56 bg-gray-200 rounded-lg animate-pulse"></td>
                <td class="w-24 bg-gray-200 rounded-lg animate-pulse"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
