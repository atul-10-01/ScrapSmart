import React, { useState, useEffect, useRef } from 'react';
import { BotMessageSquare, RefreshCcw, ChevronDown } from 'lucide-react';
import { metroStations } from '../constants';

const Dropdown = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between w-full rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-neutral-800 text-sm font-medium text-gray-200 hover:bg-neutral-700 focus:outline-none "
      >
        {selectedOption}
        <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-neutral-800  focus:outline-none z-10 max-h-60 overflow-y-auto">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-neutral-700 hover:text-white"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

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
  const [pickupState, setPickupState] = useState({ deviceCategory: '', otherDevice: '', address: '' });
  const [dropoffState, setDropoffState] = useState({ location: '', metroLine: '', metroStation: '', address: '', localStore: '' });
  const [showDeviceDropdown, setShowDeviceDropdown] = useState(false);
  const [showDropoffOptions, setShowDropoffOptions] = useState(false);
  const [showMetroLineDropdown, setShowMetroLineDropdown] = useState(false);
  const [showMetroStationDropdown, setShowMetroStationDropdown] = useState(false);
  const [showLocalStoreDropdown, setShowLocalStoreDropdown] = useState(false);
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
              "ScrapSmart initiative",
              "Schedule Pickup",
              "Schedule Drop-off",
              "Track your rewards",
            ],
          },
        ]);
      } else if (pickupState.deviceCategory === 'Others' && !pickupState.otherDevice) {
        setPickupState({ ...pickupState, otherDevice: capitalizedInput });
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: "Thank you for specifying your device. Now, please enter your address:" },
        ]);
      } else if (pickupState.deviceCategory && !pickupState.address) {
        setPickupState({ ...pickupState, address: capitalizedInput });
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: "You would soon receive the confirmation on your mail." },
          {
            sender: 'bot',
            text: 'Is there anything else I can help you with?',
            options: [
              "ScrapSmart initiative",
              "Schedule Pickup",
              "Schedule Drop-off",
              "Track your rewards",
            ],
          },
        ]);
        setPickupState({ deviceCategory: '', otherDevice: '', address: '' });
        setShowDeviceDropdown(false);
      } else if (dropoffState.location === 'Local Store' && !dropoffState.address) {
        setDropoffState({ ...dropoffState, address: capitalizedInput });
        setShowLocalStoreDropdown(true);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: "Thank you for providing your address. Please select a local store from the dropdown below:" },
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
                "ScrapSmart initiative",
                "Schedule Pickup",
                "Schedule Drop-off",
                "Track your rewards",
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
      "ScrapSmart initiative": "ScrapSmart is a digital platform aimed at solving India's e-waste problem by promoting responsible disposal through gamification and community engagement. Users earn redeemable coins for each item they dispose of, encouraging environmental responsibility.",
      "Schedule Pickup": "Great! Let's schedule a pickup for you. Please select your device category from the dropdown menu below:",
      "Schedule Drop-off": "Great! Let's schedule a drop-off for you. Please choose your preferred drop-off location:",
      "Track your rewards": "Please login to your account to track your rewards. You can redeem these rewards for discounts at our partner stores."
    };
    
    const botMessage = descriptions[option] || "I'm sorry, I didn't understand that option.";
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: option },
      { sender: 'bot', text: botMessage },
    ]);

    if (option === "Schedule Pickup") {
      setShowDeviceDropdown(true);
    } else if (option === "Schedule Drop-off") {
      setShowDropoffOptions(true);
    } else {
      setShowDeviceDropdown(false);
      setShowDropoffOptions(false);
    }
  };

  const handleDeviceCategorySelect = (category) => {
    setPickupState({ ...pickupState, deviceCategory: category });
    setShowDeviceDropdown(false);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: category },
      { sender: 'bot', text: category === 'Others' ? "Please specify your device:" : `You've selected ${category}. Now, please enter your address:` },
    ]);
  };

  const handleDropoffLocationSelect = (location) => {
    setDropoffState({ ...dropoffState, location });
    setShowDropoffOptions(false);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: location },
      { sender: 'bot', text: location === 'Metro Stations' ? "Please select a metro line from the dropdown below:" : "Please enter your address:" },
    ]);
    if (location === 'Metro Stations') {
      setShowMetroLineDropdown(true);
    }
  };

  const handleMetroLineSelect = (metroLine) => {
    setDropoffState({ ...dropoffState, metroLine });
    setShowMetroLineDropdown(false);
    setShowMetroStationDropdown(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: metroLine },
      { sender: 'bot', text: `You've selected ${metroLine}. Now, please choose a metro station from the dropdown below:` },
    ]);
  };

  const handleMetroStationSelect = (metroStation) => {
    setDropoffState({ ...dropoffState, metroStation });
    setShowMetroStationDropdown(false);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: metroStation },
      { sender: 'bot', text: `You've selected ${metroStation}. You will soon receive a confirmation email.` },
      {
        sender: 'bot',
        text: 'Is there anything else I can help you with?',
        options: [
          "ScrapSmart initiative",
          "Schedule Pickup",
          "Schedule Drop-off",
          "Track your rewards",
        ],
      },
    ]);
  };

  const handleLocalStoreSelect = (localStore) => {
    setDropoffState({ ...dropoffState, localStore });
    setShowLocalStoreDropdown(false);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: localStore },
      { sender: 'bot', text: `You've selected ${localStore}. You will soon receive a confirmation email.` },
      {
        sender: 'bot',
        text: 'Is there anything else I can help you with?',
        options: [
          "ScrapSmart initiative",
          "Schedule Pickup",
          "Schedule Drop-off",
          "Track your rewards",
        ],
      },
    ]);
  };

  const handleResetChat = () => {
    setMessages([{
      sender: 'bot',
      text: "Hi there! I'm Prakriti, your environmental chatbot from ScrapSmart. What is your good name?",
    }]);
    setUserName('');
    setInputValue('');
    setPickupState({ deviceCategory: '', otherDevice: '', address: '' });
    setDropoffState({ location: '', metroLine: '', metroStation: '', address: '', localStore: '' });
    setShowDeviceDropdown(false);
    setShowDropoffOptions(false);
    setShowMetroLineDropdown(false);
    setShowMetroStationDropdown(false);
    setShowLocalStoreDropdown(false);
  };

  const deviceCategories = [
    "Laptop", "Monitor", "CPU", "Television", "Refrigerator", 
    "Washing Machine", "AC", "Microwave", "Others"
  ];

  const metroLines = [
    "Red", "Yellow", "Blue", "Green", "Violet",
     "Magenta", "Pink"
  ];

  

  const localStores = ["Jio Smart Bazaar", "D Mart", "Big Bazaar", "Reliance Fresh"];

  return (
    <div className="fixed bottom-5 right-5 z-50" ref={chatbotRef}>
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-orange-500 to-orange-800 text-white p-4 rounded-full shadow-lg focus:outline-none hover:bg-green-600 hover:shadow-md hover:shadow-gray-200/40 hover:scale-105 transition-all duration-100 align-middle"
        aria-label='chatbot'
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
            {showDeviceDropdown && (
              <div className="mt-2">
                <Dropdown
                  options={deviceCategories}
                  onSelect={handleDeviceCategorySelect}
                  placeholder="Select device category"
                />
              </div>
            )}
            {showDropoffOptions && (
              <div className="mt-2">
                <Dropdown
                  options={["Metro Stations", "Local Store"]}
                  onSelect={handleDropoffLocationSelect}
                  placeholder="Select drop-off location"
                />
              </div>
            )}
            {showMetroLineDropdown && (
              <div className="mt-2">
                <Dropdown
                  options={metroLines}
                  onSelect={handleMetroLineSelect}
                  placeholder="Select metro line"
                />
              </div>
            )}
            {showMetroStationDropdown && (
              <div className="mt-2">
                <Dropdown
                  options={metroStations[dropoffState.metroLine] || []}
                  onSelect={handleMetroStationSelect}
                  placeholder="Select metro station"
                />
              </div>
            )}
            {showLocalStoreDropdown && (
              <div className="mt-2">
                <Dropdown
                  options={localStores}
                  onSelect={handleLocalStoreSelect}
                  placeholder="Select local store"
                />
              </div>
            )}
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
