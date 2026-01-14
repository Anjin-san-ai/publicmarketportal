import { useState } from 'react';
import { Wrench, Save, Play, Upload, Code, Settings, GripVertical, Plus } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import ModelCard from '../components/ModelCard';
import ComponentCard from '../components/ComponentCard';
import TemplateCard from '../components/TemplateCard';
import FlowCanvas from '../components/FlowCanvas';
import { aiModels, components, platforms, templates } from '../data/agentBuilderData';

const AgentBuilder = () => {
  const [selectedModel, setSelectedModel] = useState('claude');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(2048);
  const [enableMemory, setEnableMemory] = useState(true);
  const [streamResponse, setStreamResponse] = useState(true);
  const [logInteractions, setLogInteractions] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-700 text-white py-8">
        <div className="max-w-[1600px] mx-auto px-6">
          <Breadcrumb items={[{ label: 'Agent Builder Studio' }]} />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1">Agent Builder Studio</h1>
                <p className="text-blue-100">Design, configure, and deploy custom AI agents</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
              <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                <Play className="w-4 h-4" />
                <span>Test</span>
              </button>
              <button className="flex items-center space-x-2 bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                <Upload className="w-4 h-4" />
                <span>Deploy</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - 3 Column Layout */}
      <div className="max-w-[1600px] mx-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-6">
            {/* AI Models */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Wrench className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-gray-900">AI Models</h3>
              </div>
              <div className="space-y-3">
                {aiModels.map(model => (
                  <ModelCard
                    key={model.id}
                    model={model}
                    isSelected={selectedModel === model.id}
                    onClick={() => setSelectedModel(model.id)}
                  />
                ))}
              </div>
            </div>

            {/* Components */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="mb-2">
                <div className="flex items-center space-x-2 mb-1">
                  <GripVertical className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-900">Components</h3>
                </div>
                <p className="text-xs text-gray-600">Drag to canvas to add</p>
              </div>
              <div className="space-y-3 mt-4">
                {components.map(component => (
                  <ComponentCard key={component.id} component={component} />
                ))}
              </div>
            </div>

            {/* Orchestration Platform */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Settings className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-gray-900">Orchestration Platform</h3>
              </div>
              <div className="space-y-3">
                {platforms.map(platform => (
                  <div
                    key={platform.id}
                    className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{platform.emoji}</span>
                        <div>
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-semibold text-gray-900">{platform.name}</p>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              platform.status === 'Connected' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              {platform.status}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600">{platform.templates} templates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Canvas */}
          <div className="col-span-6 space-y-4">
            {/* Canvas Header */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    defaultValue="My Custom Agent"
                    className="text-lg font-semibold text-gray-900 border-none focus:outline-none focus:ring-0 px-2 py-1 rounded hover:bg-gray-50"
                  />
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Draft
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Settings className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="flex items-center space-x-1 px-3 py-2 hover:bg-gray-100 rounded-lg">
                    <Code className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Code</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Flow Canvas */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <FlowCanvas nodes={[]} />
              <div className="mt-6 text-center">
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mx-auto">
                  <Plus className="w-4 h-4" />
                  <span>Add Node</span>
                </button>
              </div>
            </div>

            {/* Console Output */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Code className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-gray-900">Console Output</h3>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-400 min-h-[100px]">
                <p>Click Test to run your agent...</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-6">
            {/* Configuration */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Settings className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-gray-900">Configuration</h3>
              </div>

              {/* System Prompt */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">System Prompt</label>
                <textarea
                  defaultValue="You are a helpful government assistant..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  rows="3"
                />
              </div>

              {/* Temperature */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Temperature</label>
                  <span className="text-sm font-bold text-gray-900">{temperature}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">Lower = more focused, Higher = more creative</p>
              </div>

              {/* Max Tokens */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Max Tokens</label>
                  <span className="text-sm font-bold text-gray-900">{maxTokens}</span>
                </div>
                <input
                  type="range"
                  min="256"
                  max="4096"
                  step="256"
                  value={maxTokens}
                  onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Advanced Options */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-medium text-gray-700 mb-3">Advanced Options</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Enable Memory</span>
                    <button
                      onClick={() => setEnableMemory(!enableMemory)}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        enableMemory ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                        enableMemory ? 'transform translate-x-5' : ''
                      }`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Stream Response</span>
                    <button
                      onClick={() => setStreamResponse(!streamResponse)}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        streamResponse ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                        streamResponse ? 'transform translate-x-5' : ''
                      }`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Log Interactions</span>
                    <button
                      onClick={() => setLogInteractions(!logInteractions)}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        logInteractions ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                        logInteractions ? 'transform translate-x-5' : ''
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Templates */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="mb-2">
                <div className="flex items-center space-x-2 mb-1">
                  <Code className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-900">Templates</h3>
                </div>
                <p className="text-xs text-gray-600">Start from pre-built configurations</p>
              </div>
              <div className="space-y-3 mt-4">
                {templates.map(template => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentBuilder;
