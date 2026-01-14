import { MessageSquare, Cpu, Send } from 'lucide-react';

const FlowCanvas = ({ nodes }) => {
  return (
    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[300px]">
      <div className="flex items-center justify-center space-x-4">
        {/* User Query Node */}
        <div className="bg-white border-2 border-blue-500 rounded-lg p-4 shadow-md">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold">User Query</span>
          </div>
        </div>

        {/* Connection Line */}
        <div className="flex-1 h-0.5 bg-blue-500 relative">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-blue-500 border-y-4 border-y-transparent"></div>
        </div>

        {/* Processor Node */}
        <div className="bg-white border-2 border-purple-500 rounded-lg p-4 shadow-md">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-1">
              <Cpu className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold">Claude 3.5 Processor</span>
            </div>
            <span className="text-xs text-gray-600">Claude 3.5</span>
          </div>
        </div>

        {/* Connection Line */}
        <div className="flex-1 h-0.5 bg-blue-500 relative">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-blue-500 border-y-4 border-y-transparent"></div>
        </div>

        {/* Response Node */}
        <div className="bg-white border-2 border-green-500 rounded-lg p-4 shadow-md">
          <div className="flex items-center space-x-2">
            <Send className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold">Response</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowCanvas;
