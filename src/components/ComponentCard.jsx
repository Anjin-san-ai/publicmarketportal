import { GripVertical } from 'lucide-react';

const ComponentCard = ({ component }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:shadow-md transition-all cursor-move">
      <div className="flex items-center space-x-2 mb-2">
        <GripVertical className="w-4 h-4 text-gray-400" />
        <component.icon className={`w-5 h-5 ${component.iconColor}`} />
      </div>
      <h4 className="text-sm font-semibold text-gray-900 mb-1">{component.name}</h4>
      <p className="text-xs text-gray-600">{component.description}</p>
    </div>
  );
};

export default ComponentCard;
