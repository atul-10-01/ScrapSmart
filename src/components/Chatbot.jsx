import React, { useState, useEffect, useRef } from 'react';
import { BotMessageSquare, RefreshCcw } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi there! I'm Prakriti, your environmental chatbot from ScrapSmart. What is your good name?",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [userName, setUserName] = useState('');
  const chatEndRef = useRef(null);
  const chatbotRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const capitalizedInput = capitalizeFirstLetter(inputValue.trim());
      const newMessages = [
        ...messages,
        { sender: 'user', text: capitalizedInput },
      ];
      setMessages(newMessages);
      setInputValue('');

      if (!userName) {
        setUserName(capitalizedInput);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: 'bot',
            text: `Welcome ${capitalizedInput}! How can I assist you today?`,
          },
          {
            sender: 'bot',
            text: 'Choose an option below:',
            options: [
              "Pickup scheduling",
              "Check coins",
              "ScrapSmart initiative",
              "Know about Prakriti",
              "Our centers",
              "Carbon footprint tracking",
            ],
          },
        ]);
      } else {
        setTimeout(() => {
          const botResponse = getBotResponse(capitalizedInput.toLowerCase());
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'bot', text: botResponse },
            {
              sender: 'bot',
              text: 'Choose an option below:',
              options: [
                "Pickup scheduling",
                "Check coins",
                "ScrapSmart initiative",
                "Know about Prakriti",
                "Our centers",
                "Carbon footprint tracking",
              ],
            },
          ]);
        }, 1000);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const getBotResponse = (input) => {
    const responses = {
      hi: "Hi there! How can I assist you today?",
      hey: "Hey there! How can I assist you today?",
      hello: "Hello! I'm Prakriti, your environmental chatbot. How can I help you today?",
      help: "Sure! How can I assist you?",
      bye: "Goodbye! Have a great day!",
      default: "I'm sorry, I didn't understand that. Do you want to connect with an expert?",
    };
    return responses[input] || responses.default;
  };

  const handleOptionClick = (option) => {
    const descriptions = {
      "Pickup scheduling": "To schedule a pickup, please visit our scheduling page or contact us directly.",
      "Check coins": "Please login first in order to track your coins!",
      "ScrapSmart initiative": "Our ScrapSmart Initiative focuses on reducing e-waste and promoting recycling.",
      "Know about Prakriti": "Prakriti is here to assist you with all your environmental queries and activities. Whether you need help with recycling e-waste or tips on sustainable living, Prakriti has got you covered. Join us in our mission to create a greener, cleaner future together!",
      "Our centers": "We have several collection centers near metro stations in Delhi-NCR. Find the nearest one on our dumping page.",
      "Carbon footprint tracking": "Track your carbon footprint reduction by using our e-waste collection services.",
    };

    const botMessage = descriptions[option] || "I'm sorry, I didn't understand that option.";
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'bot', text: botMessage },
    ]);

    if (option === "Pickup scheduling") {
      // Scroll to the scheduling section
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: 'bot',
          text: 'Choose an option below:',
          options: [
            "Pickup scheduling",
            "Check coins",
            "ScrapSmart initiative",
            "Know about Prakriti",
            "Our centers",
            "Carbon footprint tracking",
          ],
        },
      ]);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        sender: 'bot',
        text: "Hi there! I'm Prakriti, your environmental chatbot from ScrapSmart. What is your good name?",
      },
    ]);
    setUserName('');
    setInputValue('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50" ref={chatbotRef}>
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-orange-500 to-orange-800 text-white p-4 rounded-full shadow-lg focus:outline-none hover:bg-green-600 hover:shadow-md hover:shadow-gray-200/40 hover:scale-105 transition-all duration-100 align-middle" aria-label='chatbot'
      >
        <BotMessageSquare size={30} />
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-[90%] max-w-sm h-[60%] sm:w-96 sm:h-[31rem] bg-neutral-900 shadow-lg border border-green-900 border-t-0 rounded-lg flex flex-col">
          <div className="bg-green-700 text-white p-3 flex items-center rounded-t-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9izsEt0LSmCTgwjKeChZLE1YYXEKuS-K4g&usqp=CAU"
              alt="Prakriti Avatar"
              className="w-10 h-10 rounded-full mr-3"
            />
            <h2 className="text-lg tracking-wide lg:text-xl flex-1">Prakriti</h2>
            <button
              onClick={handleResetChat}
              className="bg-neutral-900 p-2 rounded-full transition-all hover:bg-orange-700 duration-150"
              title="Reset Chat"
            >
              <RefreshCcw size={20} className="text-white" />
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === 'bot'
                    ? 'bg-neutral-800 text-white self-start'
                    : 'bg-green-700 text-white self-end'
                  } p-2 mb-2 rounded-lg text-sm font-extralight`}
                style={{
                  borderRadius:
                    msg.sender === 'bot'
                      ? '10px 10px 10px 0'
                      : '10px 10px 0 10px',
                }}
              >
                {msg.text}
                {msg.options && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {msg.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className="bg-neutral-900 text-white p-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-150"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-3 flex items-center:w-full">
            <input
              type="text"
              className="flex-1 p-2 border bg-neutral-900 focus:ring-green-900 focus:border-green-900 border-gray-300 rounded-lg text-gray-50 font-extralight text-sm max-[300px]:w-[50%]"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-500 text-white p-2 rounded-lg ml-2 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
