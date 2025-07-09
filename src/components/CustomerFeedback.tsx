import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  TrendingUp,
  Filter,
  Search,
  Calendar,
  User,
  RefreshCw,
  Reply,
  Plus,
  Trash2
} from 'lucide-react';
import { storageUtils } from '../utils/storage';
import { Feedback } from '../types';
import AddFeedbackModal from './modals/AddFeedbackModal';

const CustomerFeedback: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const loadFeedback = () => {
    setIsLoading(true);
    setTimeout(() => {
      setFeedbacks(storageUtils.getFeedback());
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  const handleAddFeedback = (newFeedback: Feedback) => {
    setFeedbacks(prev => [newFeedback, ...prev]);
  };

  const handleDeleteFeedback = (id: string) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      const success = storageUtils.deleteFeedback(id);
      if (success) {
        setFeedbacks(prev => prev.filter(feedback => feedback.id !== id));
      }
    }
  };

  const handleMarkResponded = (id: string) => {
    const success = storageUtils.updateFeedback(id, { responded: true });
    if (success) {
      setFeedbacks(prev => 
        prev.map(feedback => 
          feedback.id === id ? { ...feedback, responded: true } : feedback
        )
      );
    }
  };

  const handleHelpfulClick = (id: string) => {
    const feedback = feedbacks.find(f => f.id === id);
    if (feedback) {
      const success = storageUtils.updateFeedback(id, { helpful: feedback.helpful + 1 });
      if (success) {
        setFeedbacks(prev => 
          prev.map(f => 
            f.id === id ? { ...f, helpful: f.helpful + 1 } : f
          )
        );
      }
    }
  };

  const filteredFeedbacks = feedbacks.filter(feedback => {
    const matchesSearch = feedback.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.dish.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.comment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || feedback.sentiment === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const sentimentStats = {
    positive: feedbacks.filter(f => f.sentiment === 'positive').length,
    neutral: feedbacks.filter(f => f.sentiment === 'neutral').length,
    negative: feedbacks.filter(f => f.sentiment === 'negative').length,
    avgRating: feedbacks.length > 0 ? feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length : 0,
    totalReviews: feedbacks.length
  };

  const positivePercentage = feedbacks.length > 0 ? Math.round((sentimentStats.positive / feedbacks.length) * 100) : 0;
  const negativePercentage = feedbacks.length > 0 ? Math.round((sentimentStats.negative / feedbacks.length) * 100) : 0;

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-50';
      case 'negative': return 'text-red-600 bg-red-50';
      case 'neutral': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Customer Feedback</h1>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Feedback</span>
          </button>
          <button
            onClick={loadFeedback}
            disabled={isLoading}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600 transition-all duration-200 transform hover:-translate-y-0.5">
            <MessageSquare className="w-4 h-4" />
            <span>View All Reviews</span>
          </button>
        </div>
      </div>

      {/* Sentiment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Rating</p>
              <div className="flex items-center mt-1">
                <p className="text-2xl font-bold text-gray-800">{sentimentStats.avgRating.toFixed(1)}</p>
                <div className="flex ml-2">
                  {renderStars(Math.floor(sentimentStats.avgRating))}
                </div>
              </div>
            </div>
            <Star className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Reviews</p>
              <p className="text-2xl font-bold text-gray-800">{sentimentStats.totalReviews}</p>
            </div>
            <MessageSquare className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Positive</p>
              <p className="text-2xl font-bold text-green-600">{positivePercentage}%</p>
            </div>
            <ThumbsUp className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Negative</p>
              <p className="text-2xl font-bold text-red-600">{negativePercentage}%</p>
            </div>
            <ThumbsDown className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search feedback..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
            >
              <option value="all">All Sentiment</option>
              <option value="positive">Positive</option>
              <option value="neutral">Neutral</option>
              <option value="negative">Negative</option>
            </select>
          </div>
        </div>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {filteredFeedbacks.length > 0 ? (
          filteredFeedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-medium text-gray-800">{feedback.customer}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex">{renderStars(feedback.rating)}</div>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{feedback.dish}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-500">{feedback.date}</span>
                        </div>
                        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${getSentimentColor(feedback.sentiment)}`}>
                          {feedback.sentiment}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{feedback.comment}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => handleHelpfulClick(feedback.id)}
                          className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                        >
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm">Helpful ({feedback.helpful})</span>
                        </button>
                        <button 
                          onClick={() => handleMarkResponded(feedback.id)}
                          disabled={feedback.responded}
                          className="flex items-center space-x-1 text-yellow-600 hover:text-yellow-700 text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Reply className="w-4 h-4" />
                          <span>{feedback.responded ? 'Responded' : 'Reply'}</span>
                        </button>
                        <button 
                          onClick={() => handleDeleteFeedback(feedback.id)}
                          className="flex items-center space-x-1 text-red-600 hover:text-red-700 text-sm font-medium transition-colors duration-200"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Delete</span>
                        </button>
                      </div>
                      {feedback.responded && (
                        <span className="text-green-600 text-sm font-medium">✓ Responded</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No feedback found</p>
          </div>
        )}
      </div>

      {/* Trends */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Feedback Trends</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-medium text-gray-800 mb-1">Rating Improvement</h3>
              <p className="text-sm text-gray-600">+0.3 points this month</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MessageSquare className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-medium text-gray-800 mb-1">Response Rate</h3>
              <p className="text-sm text-gray-600">
                {feedbacks.length > 0 
                  ? Math.round((feedbacks.filter(f => f.responded).length / feedbacks.length) * 100)
                  : 0
                }% of reviews responded
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="font-medium text-gray-800 mb-1">Most Praised</h3>
              <p className="text-sm text-gray-600">Food quality & presentation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Feedback Modal */}
      <AddFeedbackModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddFeedback}
      />
    </div>
  );
};

export default CustomerFeedback;