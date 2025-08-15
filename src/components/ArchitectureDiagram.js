import React from 'react';
import './ArchitectureDiagram.css';

const ArchitectureDiagram = () => {
  return (
    <div className="architecture-diagram">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Engenix Ordering System Architecture</h1>
        
        <div className="diagram-container bg-white rounded-lg shadow-lg p-6 mb-8">
          {/* Current Architecture with localStorage */}
          <div className="current-architecture mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Current Architecture (Frontend Only with localStorage)</h2>
            
            <div className="flow-diagram">
              {/* User Guide Component */}
              <div className="component user-guide">
                <div className="component-header bg-blue-100 border border-blue-300 rounded-t-lg p-3">
                  <h3 className="font-bold text-blue-800">User Guide (/guide)</h3>
                </div>
                <div className="component-body border border-blue-300 rounded-b-lg p-3 bg-blue-50">
                  <p className="text-sm text-gray-700">Interactive tutorial explaining the ordering process</p>
                  <ul className="text-xs text-gray-600 mt-2">
                    <li>• Step-by-step instructions</li>
                    <li>• Visual animations</li>
                    <li>• Progress tracking</li>
                  </ul>
                </div>
              </div>
              
              <div className="arrow-down mx-auto my-4 w-1 h-8 bg-gray-400 relative">
                <div className="arrowhead absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400"></div>
              </div>
              
              {/* User Login Component */}
              <div className="component user-login">
                <div className="component-header bg-green-100 border border-green-300 rounded-t-lg p-3">
                  <h3 className="font-bold text-green-800">User Login (/user/login)</h3>
                </div>
                <div className="component-body border border-green-300 rounded-b-lg p-3 bg-green-50">
                  <p className="text-sm text-gray-700">Authentication entry point</p>
                  <ul className="text-xs text-gray-600 mt-2">
                    <li>• Username/password input</li>
                    <li>• Registration link</li>
                    <li>• localStorage user persistence</li>
                  </ul>
                </div>
              </div>
              
              <div className="arrow-down mx-auto my-4 w-1 h-8 bg-gray-400 relative">
                <div className="arrowhead absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400"></div>
              </div>
              
              {/* User Dashboard Component */}
              <div className="component user-dashboard">
                <div className="component-header bg-purple-100 border border-purple-300 rounded-t-lg p-3">
                  <h3 className="font-bold text-purple-800">User Dashboard (/user/dashboard)</h3>
                </div>
                <div className="component-body border border-purple-300 rounded-b-lg p-3 bg-purple-50">
                  <p className="text-sm text-gray-700">Main shopping interface</p>
                  <ul className="text-xs text-gray-600 mt-2">
                    <li>• Product listings</li>
                    <li>• Cart management</li>
                    <li>• Order history</li>
                    <li>• Order actions (track, cancel, etc.)</li>
                  </ul>
                </div>
              </div>
              
              <div className="arrow-down mx-auto my-4 w-1 h-8 bg-gray-400 relative">
                <div className="arrowhead absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400"></div>
              </div>
              
              {/* Data Storage */}
              <div className="component data-storage">
                <div className="component-header bg-yellow-100 border border-yellow-300 rounded-t-lg p-3">
                  <h3 className="font-bold text-yellow-800">localStorage</h3>
                </div>
                <div className="component-body border border-yellow-300 rounded-b-lg p-3 bg-yellow-50">
                  <p className="text-sm text-gray-700">Client-side data persistence</p>
                  <ul className="text-xs text-gray-600 mt-2">
                    <li>• User session data</li>
                    <li>• Cart items</li>
                    <li>• Order history</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Future Architecture with Backend */}
          <div className="future-architecture">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Future Architecture (With Backend Integration)</h2>
            
            <div className="flow-diagram">
              {/* User Guide Component */}
              <div className="component user-guide">
                <div className="component-header bg-blue-100 border border-blue-300 rounded-t-lg p-3">
                  <h3 className="font-bold text-blue-800">User Guide (/guide)</h3>
                </div>
                <div className="component-body border border-blue-300 rounded-b-lg p-3 bg-blue-50">
                  <p className="text-sm text-gray-700">Interactive tutorial explaining the ordering process</p>
                </div>
              </div>
              
              <div className="arrow-down mx-auto my-4 w-1 h-8 bg-gray-400 relative">
                <div className="arrowhead absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400"></div>
              </div>
              
              {/* User Login Component */}
              <div className="component user-login">
                <div className="component-header bg-green-100 border border-green-300 rounded-t-lg p-3">
                  <h3 className="font-bold text-green-800">User Login (/user/login)</h3>
                </div>
                <div className="component-body border border-green-300 rounded-b-lg p-3 bg-green-50">
                  <p className="text-sm text-gray-700">Authentication entry point</p>
                </div>
              </div>
              
              <div className="arrow-horizontal my-4 w-full flex justify-center">
                <div className="arrow-line w-3/4 h-1 bg-gray-400 relative">
                  <div className="arrowhead-right absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-400"></div>
                  <div className="arrowhead-left absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-400"></div>
                </div>
              </div>
              
              {/* API Layer */}
              <div className="component api-layer">
                <div className="component-header bg-red-100 border border-red-300 rounded-t-lg p-3">
                  <h3 className="font-bold text-red-800">API Layer</h3>
                </div>
                <div className="component-body border border-red-300 rounded-b-lg p-3 bg-red-50">
                  <p className="text-sm text-gray-700">Backend services and endpoints</p>
                  <ul className="text-xs text-gray-600 mt-2">
                    <li>• User authentication</li>
                    <li>• Product catalog</li>
                    <li>• Order management</li>
                    <li>• Payment processing</li>
                  </ul>
                </div>
              </div>
              
              <div className="arrow-down mx-auto my-4 w-1 h-8 bg-gray-400 relative">
                <div className="arrowhead absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400"></div>
              </div>
              
              {/* User Dashboard Component */}
              <div className="component user-dashboard">
                <div className="component-header bg-purple-100 border border-purple-300 rounded-t-lg p-3">
                  <h3 className="font-bold text-purple-800">User Dashboard (/user/dashboard)</h3>
                </div>
                <div className="component-body border border-purple-300 rounded-b-lg p-3 bg-purple-50">
                  <p className="text-sm text-gray-700">Main shopping interface</p>
                </div>
              </div>
              
              <div className="arrow-down mx-auto my-4 w-1 h-8 bg-gray-400 relative">
                <div className="arrowhead absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400"></div>
              </div>
              
              {/* Database */}
              <div className="component database">
                <div className="component-header bg-yellow-100 border border-yellow-300 rounded-t-lg p-3">
                  <h3 className="font-bold text-yellow-800">Database</h3>
                </div>
                <div className="component-body border border-yellow-300 rounded-b-lg p-3 bg-yellow-50">
                  <p className="text-sm text-gray-700">Persistent data storage</p>
                  <ul className="text-xs text-gray-600 mt-2">
                    <li>• User accounts</li>
                    <li>• Product inventory</li>
                    <li>• Order records</li>
                    <li>• Payment transactions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="legend mt-8 p-4 border border-gray-300 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">Legend</h3>
            <div className="legend-items">
              <div className="legend-item flex items-center mb-1">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className="text-sm">User Guide Component</span>
              </div>
              <div className="legend-item flex items-center mb-1">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className="text-sm">Authentication Components</span>
              </div>
              <div className="legend-item flex items-center mb-1">
                <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                <span className="text-sm">Shopping Components</span>
              </div>
              <div className="legend-item flex items-center mb-1">
                <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                <span className="text-sm">Data Storage</span>
              </div>
              <div className="legend-item flex items-center mb-1">
                <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                <span className="text-sm">API Layer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
