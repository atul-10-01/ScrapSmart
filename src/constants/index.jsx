import { BotMessageSquare } from "lucide-react";
import { Route } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { HandCoins } from "lucide-react";
import { BellDot } from "lucide-react";
import { Users } from "lucide-react";




export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Blogs", href: "#blogs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];



export const metroStations = {
  red: ['Shaheed Sthal', 'Hindon River', 'Arthala', 'Mohan Nagar', 'Shyam Park', 'Major Mohit Sharma', 'Rajendra Nagar', 'Shaheed Nagar', 'Dilshad Garden', 'Jhilmil', 'Mansarovar Park', 'Shahdara', 'Welcome', 'Seelampur', 'Shastri Park', 'Kashmere Gate', 'Tis Hazari', 'Pul Bangash', 'Pratap Nagar', 'Shastri Nagar', 'Inderlok', 'Kanhaiya Nagar', 'Keshav Puram', 'Netaji Subhash Place', 'Kohat Enclave', 'Pitampura', 'Rohini East', 'Rohini West', 'Rithala'],
  yellow: ['Samaypur Badli', 'Rohini Sector 18', 'Haiderpur Badli Mor', 'Jahangirpuri', 'Adarsh Nagar', 'Azadpur', 'Model Town', 'GTB Nagar', 'Vishwavidyalaya', 'Vidhan Sabha', 'Civil Lines', 'Kashmere Gate', 'Chandni Chowk', 'Chawri Bazar', 'New Delhi', 'Rajiv Chowk', 'Patel Chowk', 'Central Secretariat', 'Udyog Bhawan', 'Lok Kalyan Marg', 'Jorbagh', 'INA', 'AIIMS', 'Green Park', 'Hauz Khas', 'Malviya Nagar', 'Saket', 'Qutab Minar', 'Chhattarpur', 'Sultanpur', 'Ghitorni', 'Arjan Garh', 'Guru Dronacharya', 'Sikandarpur', 'MG Road', 'IFFCO Chowk', 'HUDA City Centre'],
  green: ['Inderlok', 'Ashok Park Main', 'Satguru Ram Singh Marg', 'Kirti Nagar', 'Punjabi Bagh West', 'Shivaji Park', 'Madipur', 'Paschim Vihar East', 'Paschim Vihar West', 'Peera Garhi', 'Udyog Nagar', 'Maharaja Surajmal Stadium', 'Nangloi', 'Nangloi Railway Station', 'Rajdhani Park', 'Mundka', 'Mundka Industrial Area', 'Ghevra', 'Tikri Kalan', 'Tikri Border', 'Pandit Shree Ram Sharma', 'Bahadurgarh City', 'Brigadier Hoshiyar Singh'],
  blue: ['Dwarka Sector 21', 'Dwarka Sector 8', 'Dwarka Sector 9', 'Dwarka Sector 10', 'Dwarka Sector 11', 'Dwarka Sector 12', 'Dwarka Sector 13', 'Dwarka Sector 14', 'Dwarka', 'Dwarka Mor', 'Nawada', 'Uttam Nagar West', 'Uttam Nagar East', 'Janakpuri West', 'Janakpuri East', 'Tilak Nagar', 'Subhash Nagar', 'Tagore Garden', 'Rajouri Garden', 'Ramesh Nagar', 'Moti Nagar', 'Kirti Nagar', 'Shadipur', 'Patel Nagar', 'Rajendra Place', 'Karol Bagh', 'Jhandewalan', 'Ramakrishna Ashram Marg', 'Rajiv Chowk', 'Barakhamba Road', 'Mandi House', 'Supreme Court', 'Indraprastha', 'Yamuna Bank', 'Akshardham', 'Mayur Vihar Phase 1', 'Mayur Vihar Extension', 'New Ashok Nagar', 'Noida Sector 15', 'Noida Sector 16', 'Noida Sector 18', 'Botanical Garden', 'Golf Course', 'Noida City Centre', 'Noida Sector 34', 'Noida Sector 52', 'Noida Sector 61', 'Noida Sector 59', 'Noida Sector 62', 'Noida Electronic City'],
  magenta: ['Botanical Garden', 'Okhla Bird Sanctuary', 'Kalindi Kunj', 'Jasola Vihar Shaheen Bagh', 'Okhla Vihar', 'Jamia Millia Islamia', 'Sukhdev Vihar', 'Okhla NSIC', 'Kalkaji Mandir', 'Nehru Enclave', 'Greater Kailash', 'Chirag Delhi', 'Panchsheel Park', 'Hauz Khas', 'IIT Delhi', 'R K Puram', 'Munirka', 'Vasant Vihar', 'Shankar Vihar', 'Terminal 1-IGI Airport', 'Sadar Bazar Cantonment', 'Palam', 'Dashrath Puri', 'Dabri Mor-Janakpuri South', 'Janakpuri West'],
  pink: ['Majlis Park', 'Azadpur', 'Shalimar Bagh', 'Netaji Subhash Place', 'Shakurpur', 'Punjabi Bagh West', 'ESI-Basaidarapur', 'Rajouri Garden', 'Mayapuri', 'Naraina Vihar', 'Delhi Cantt', 'Durgabai Deshmukh South Campus', 'Sir Vishweshwaraiah Moti Bagh', 'Bhikaji Cama Place', 'Sarojini Nagar', 'INA', 'South Extension', 'Lajpat Nagar', 'Vinobapuri', 'Ashram', 'Hazrat Nizamuddin', 'Mayur Vihar Phase 1', 'Mayur Vihar Pocket 1', 'Trilokpuri Sanjay Lake', 'East Vinod Nagar-Mayur Vihar II', 'Mandawali-West Vinod Nagar', 'IP Extension', 'Anand Vihar', 'Karkarduma', 'Karkarduma Court', 'Krishna Nagar', 'East Azad Nagar', 'Welcome', 'Jaffrabad', 'Maujpur-Babarpur', 'Gokulpuri', 'Johri Enclave', 'Shiv Vihar'],
};

export const testimonials = [
  {
    user: "Sunita Narain",
    company: "Director General of the Centre for Science and Environment",
    text: "ScrapSmart's approach to managing electronic waste is both innovative and necessary. Their efforts to create awareness and provide practical solutions for e-waste disposal are commendable. This platform is a significant step towards a sustainable future.",
  },
  {
    user: "Medha Patkar",
    company: "Founder of the Narmada Bachao Andolan",
    text: "I am deeply impressed by ScrapSmart's commitment to environmental conservation. Their initiatives to involve educational institutions and communities in e-waste management are inspiring. Together, we can make a substantial impact on reducing electronic waste.",
  },
  {
    user: "Dr. Vandana Shiva",
    company: "Founder of the Navoanya",
    text: "ScrapSmart is doing exceptional work in promoting responsible e-waste disposal and reducing our environmental footprint. Their educational campaigns and user-friendly platform make it easy for everyone to contribute to a greener planet. Let's support this vital cause.",
  },
  {
    user: "Rajendra Singh",
    company: "Water Conservationist and Environmentalist",
    text: "ScrapSmart's dedication to tackling the issue of electronic waste is truly commendable. Their innovative solutions and awareness campaigns are making a significant difference. I encourage everyone to join hands with ScrapSmart for a cleaner, healthier environment.",
  },
  {
    user: "Jadav Payeng",
    company: "The Forest Man of India",
    text: "ScrapSmart has taken a crucial step in addressing the growing problem of electronic waste. Their platform not only provides effective disposal solutions but also educates and engages the community. I applaud their efforts and urge everyone to participate in this initiative.",
  },
  {
    user: "M.C. Mehta",
    company: "Environmental Lawyer and Activist",
    text: "ScrapSmart's initiative to manage e-waste is a much-needed effort in today's world. Their focus on reducing carbon emissions and promoting sustainable practices is commendable. Let's all support ScrapSmart and work together to protect our environment.",
  },
];

export const features = [
  {
    icon: <Route />,
    text: "Pickup & Sites",
    description:
      "Convenient home-pickup or drop-off at metro stations. Choose the most suitable option for your e-waste disposal.",
  },
  {
    icon: <BotMessageSquare />,
    text: "AI Chatbot",
    description:
      "Interactive chatbot to assist with queries and personalized recommendations. Get instant support and guidance anytime.",
  },

  {
    icon: <HandCoins />,
    text: "Earn Rewards",
    description:
      "Earn coins for e-waste disposal that can be redeemed for rewards through our advertising partners.",
  },

  {
    icon: <BellDot />,
    text: "Real-Time Alerts",
    description:
      "Instant notifications on e-waste disposal and impact. Stay updated on your contributions and their effects.",
  },
  {
    icon: <Users />,
    text: "Community Campaigns",
    description:
      "Engage in e-waste awareness and action initiatives. Participate in campaigns to promote environmental responsibility.",
  },
  {
    icon: <MessageCircle />,
    text: "Educational Blogs",
    description:
      "Informative articles on e-waste and sustainability. Stay informed about the latest in e-waste management.",
  },
];

export const checklistItems = [
 
  {
    title: "Each Step towards Greener Society",
    description:
      "From Pickup to Recycle, we ensure a sustainable disposal of e-waste.",
  },
  {
    title: "Save Environment, Earn Rewards",
    description:
      "Contribute to environmental conservation and earn rewards for your efforts.",
  },
  {
    title: "Awareness Campaigns",
    description:
      "A space for educational institutions to collaborate on e-waste initiatives.",
  },
  {
    title: "Happy Earth, Happy People",
    description:
      "Alongwith saving the environment, we are aiming to expand our community, thus providing employment opportunities.",
  },
];



export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
