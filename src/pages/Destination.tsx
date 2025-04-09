
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Globe, MapPin, Utensils, Palette, ArrowLeft, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import HiddenGemCard from "@/components/HiddenGemCard";
import CuisineCard from "@/components/CuisineCard";
import ArtisanCard from "@/components/ArtisanCard";
import Footer from "@/components/Footer";

// Mock destination data
const destinationsData = {
  kyoto: {
    name: 'Kyoto',
    country: 'Japan',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Kyoto, once the capital of Japan, is a city on the island of Honshu. It\'s famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It\'s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.',
    images: [
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1493997181344-712f2f19d87a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    ],
    hiddenGems: [
      {
        name: 'Kiyomizu-dera Trail',
        image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'A lesser-known path leading to the famous temple, offering stunning views and peaceful moments away from the crowds.',
        location: 'Eastern Kyoto'
      },
      {
        name: 'Toji Temple Flea Market',
        image: 'https://images.unsplash.com/photo-1622645636770-a0b2e49742c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        description: 'Monthly market where locals sell antiques, crafts, and traditional items around the temple grounds.',
        location: 'Southern Kyoto'
      },
      {
        name: 'Philosopher\'s Path Side Streets',
        image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'The tiny alleys branching off from the famous cherry-tree-lined path, hiding small temples and traditional teahouses.',
        location: 'Northern Higashiyama'
      },
    ],
    cuisine: [
      {
        name: 'Kaiseki Ryori',
        image: 'https://images.unsplash.com/photo-1577004686904-1a4f118bd274?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        description: 'Traditional multi-course Japanese dinner featuring seasonal ingredients prepared with exquisite attention to detail and presentation.',
        type: 'Fine Dining'
      },
      {
        name: 'Yudofu (Tofu Hot Pot)',
        image: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Kyoto\'s specialty of hot tofu simmered with vegetables in a light kombu dashi broth, often served at Buddhist temple restaurants.',
        type: 'Traditional'
      },
    ],
    artisans: [
      {
        name: 'Hiroshi Tanaka',
        image: 'https://images.unsplash.com/photo-1619525518022-b8eec7a32dcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        portrait: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80',
        description: 'Third-generation master of the ancient art of Kyoto pottery, creating exquisite ceramics using traditional techniques passed down through generations.',
        craft: 'Ceramics',
        years: 30
      },
      {
        name: 'Miyuki Yamamoto',
        image: 'https://images.unsplash.com/photo-1532289608746-8aaaa25428b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        portrait: 'https://images.unsplash.com/photo-1611403119860-57c4937ef987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Highly skilled textile artist specializing in traditional Kyoto silk dyeing techniques and kimono design with patterns inspired by the seasons.',
        craft: 'Textile Dyeing',
        years: 25
      },
    ]
  },
  marrakech: {
    name: 'Marrakech',
    country: 'Morocco',
    heroImage: 'https://images.unsplash.com/photo-1597212618440-806262de4f9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    description: 'Marrakech, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces and gardens. The medina is a densely packed, walled medieval city dating to the Berber Empire, with mazelike alleys where thriving souks (marketplaces) sell traditional textiles, pottery and jewelry. A symbol of the city, and visible for miles, is the Moorish minaret of 12th-century Koutoubia Mosque.',
    images: [
      'https://images.unsplash.com/photo-1560095633-7e9c5b4c1e0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      'https://images.unsplash.com/photo-1597212618429-b83804e6ad46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1539020140153-e839b9c3ab00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    ],
    hiddenGems: [
      {
        name: 'Le Jardin Secret',
        image: 'https://images.unsplash.com/photo-1560095633-7e9c5b4c1e0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        description: 'A hidden oasis in the heart of the medina, featuring Islamic gardens and architecture away from the bustling souks.',
        location: 'Medina of Marrakech'
      },
      {
        name: 'Tiskiwin Museum',
        image: 'https://images.unsplash.com/photo-1539020140153-e839b9c3ab00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        description: 'A lesser-known museum showcasing Berber artifacts from across North Africa, housed in a beautiful riad.',
        location: 'Southern Medina'
      },
      {
        name: 'Gueliz Art Galleries',
        image: 'https://images.unsplash.com/photo-1587264853833-d0bfc0ae8f7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        description: 'The contemporary art scene in the modern district of Gueliz, showcasing emerging Moroccan artists.',
        location: 'Gueliz District'
      },
    ],
    cuisine: [
      {
        name: 'Tagine',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Slow-cooked Moroccan stew named after the earthenware pot it\'s cooked in, typically combining meat, vegetables, fruits, and aromatic spices.',
        type: 'Traditional'
      },
      {
        name: 'Tanjia Marrakchia',
        image: 'https://images.unsplash.com/photo-1625498542602-6faf30fa1d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        description: 'A specialty of Marrakech, prepared in a clay urn with preserved lemon, spices, and tender meat, traditionally slow-cooked in the hot ashes of a hammam\'s furnace.',
        type: 'Local Specialty'
      },
    ],
    artisans: [
      {
        name: 'Fatima Zahra',
        image: 'https://images.unsplash.com/photo-1579873542903-b9064ba3c9ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        portrait: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        description: 'Skilled artisan specializing in traditional Moroccan textiles and rugs, using natural dyes and ancient Berber patterns in her stunning creations.',
        craft: 'Textiles',
        years: 25
      },
      {
        name: 'Hamid Bennani',
        image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        portrait: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80',
        description: 'Master metalworker creating intricately detailed lamps, lanterns, and decorative pieces using traditional techniques passed down through generations.',
        craft: 'Metalwork',
        years: 40
      },
    ]
  },
  cartagena: {
    name: 'Cartagena',
    country: 'Colombia',
    heroImage: 'https://images.unsplash.com/photo-1593014109521-48ea09f22592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    description: 'Cartagena is a port city on Colombia\'s Caribbean coast. By the sea is the walled Old Town, founded in the 16th century, with squares, cobblestone streets and colorful colonial buildings. With a tropical climate, the city is also a popular beach destination. Reachable by boat are Isla de Barú, with white-sand beaches and palm trees, and the Islas del Rosario, known for their coral reefs.',
    images: [
      'https://images.unsplash.com/photo-1616091278398-3bc5313ecb0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1562666956-333b9db8ec20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1549867073-88708ad15d24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ],
    hiddenGems: [
      {
        name: 'Getsemani Neighborhood',
        image: 'https://images.unsplash.com/photo-1616091278398-3bc5313ecb0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'An emerging district with vibrant street art, local cafes, and authentic Colombian life just outside the walled city.',
        location: 'Getsemani, Cartagena'
      },
      {
        name: 'La Boquilla Mangroves',
        image: 'https://images.unsplash.com/photo-1624711078028-41874f1f6852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Take a canoe tour through the mangrove tunnels with local fishermen to discover the natural beauty outside the city.',
        location: 'La Boquilla'
      },
      {
        name: 'Bazurto Market',
        image: 'https://images.unsplash.com/photo-1604719312566-8912e9667d9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        description: 'The authentic local market where tourists rarely venture, offering a glimpse into daily Colombian life with amazing food stalls.',
        location: 'Eastern Cartagena'
      },
    ],
    cuisine: [
      {
        name: 'Ceviche',
        image: 'https://images.unsplash.com/photo-1532347231450-80cfc75e424a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        description: 'Fresh seafood marinated in citrus juices and spiced with chili peppers, a Caribbean coast specialty with a Colombian twist.',
        type: 'Seafood'
      },
      {
        name: 'Arepa de Huevo',
        image: 'https://images.unsplash.com/photo-1604675223954-20978a2f230e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        description: 'A Caribbean Colombian specialty of fried corn cakes filled with egg and often ground meat, a popular street food in Cartagena.',
        type: 'Street Food'
      },
    ],
    artisans: [
      {
        name: 'Isabel Rodriguez',
        image: 'https://images.unsplash.com/photo-1531913223931-b0d3b261d1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        portrait: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Creates colorful mochila bags following traditional Wayuu techniques, bringing indigenous Colombian crafts to contemporary markets.',
        craft: 'Textile Art',
        years: 15
      },
      {
        name: 'Carlos Mendez',
        image: 'https://images.unsplash.com/photo-1572604802482-55dc762f9c6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        portrait: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Skilled woodcarver specializing in traditional Caribbean-influenced sculptures and masks reflecting the region\'s vibrant culture.',
        craft: 'Woodworking',
        years: 20
      },
    ]
  },
  santorini: {
    name: 'Santorini',
    country: 'Greece',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    images: [
      'https://images.unsplash.com/photo-1548580392-8d9c772d854e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1601581429487-37d152cd1370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      'https://images.unsplash.com/photo-1555079162-8961274c2828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    ],
    hiddenGems: [
      {
        name: 'Emporio Village',
        image: 'https://images.unsplash.com/photo-1555079162-8961274c2828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'A medieval fortress village with winding lanes, traditional architecture, and fewer tourists than the famous caldera towns.',
        location: 'Southern Santorini'
      },
      {
        name: 'Megalochori',
        image: 'https://images.unsplash.com/photo-1632149918888-5421efc206ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'A picturesque village with neoclassical houses, hidden cave houses, and wine traditions where locals outnumber tourists.',
        location: 'Southwest Santorini'
      },
      {
        name: 'Vlychada Beach',
        image: 'https://images.unsplash.com/photo-1631170709555-5b19cedea526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        description: 'A dramatic beach with lunar-like white cliffs sculpted by the wind and fewer crowds than the famous red and black beaches.',
        location: 'Southern Coast'
      },
    ],
    cuisine: [
      {
        name: 'Tomatokeftedes',
        image: 'https://images.unsplash.com/photo-1567156258437-d8b14cd3578b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Santorini\'s famous tomato fritters made with the island\'s unique small, sweet tomatoes, herbs, and spices.',
        type: 'Local Specialty'
      },
      {
        name: 'Fava',
        image: 'https://images.unsplash.com/photo-1616011146300-5761ff9f6ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'A traditional puree made from yellow split peas grown on the island\'s volcanic soil, topped with capers and olive oil.',
        type: 'Traditional'
      },
    ],
    artisans: [
      {
        name: 'Elena Dimitriou',
        image: 'https://images.unsplash.com/photo-1563822370596-9c4c7a940da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        portrait: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        description: 'Jewelry artist creating pieces inspired by ancient Minoan and Cycladic designs using traditional metalworking techniques.',
        craft: 'Jewelry',
        years: 18
      },
      {
        name: 'Georgios Papadopoulos',
        image: 'https://images.unsplash.com/photo-1613694554221-192452364e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        portrait: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Third-generation winemaker using ancient basket-trained vines (kouloura method) to create distinctive wines from the island\'s assyrtiko grapes.',
        craft: 'Winemaking',
        years: 35
      },
    ]
  },
};

// Fallback destination data for searches that don't match our mock data
const fallbackDestination = {
  name: 'Beautiful Destination',
  country: 'Explore the World',
  heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
  description: 'Every destination has its own unique charm, local treasures, and hidden gems waiting to be discovered.',
  images: [
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  ],
  hiddenGems: [
    {
      name: 'Local Hidden Gem',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Discover unique local experiences off the beaten path.',
      location: 'Nearby Area'
    },
    {
      name: 'Secret Viewpoint',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      description: 'Find breathtaking views known only to locals and adventurous travelers.',
      location: 'Scenic Vista'
    },
  ],
  cuisine: [
    {
      name: 'Traditional Dish',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1017&q=80',
      description: 'Taste the authentic flavors that tell the story of local culture and traditions.',
      type: 'Local Specialty'
    },
    {
      name: 'Street Food Delight',
      image: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Explore the vibrant street food scene that locals love.',
      type: 'Street Food'
    },
  ],
  artisans: [
    {
      name: 'Local Craftsperson',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      portrait: 'https://images.unsplash.com/photo-1559131530-a10937ffcc87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      description: 'Meet skilled artisans preserving traditional crafts and creating beautiful handmade items.',
      craft: 'Traditional Craft',
      years: 20
    },
    {
      name: 'Heritage Artist',
      image: 'https://images.unsplash.com/photo-1568802996147-c5c2ce48e315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      portrait: 'https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description: 'Discover artists keeping cultural heritage alive through their creative works.',
      craft: 'Heritage Art',
      years: 15
    },
  ]
};

const Destination = () => {
  const { destinationId } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [destination, setDestination] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset loading state when destination changes
    setIsLoaded(false);
    
    // Simulate API fetch with our mock data
    setTimeout(() => {
      let destinationData = destinationsData[destinationId as keyof typeof destinationsData];
      
      // If we don't have data for this destination, use fallback
      if (!destinationData) {
        destinationData = {
          ...fallbackDestination,
          name: destinationId ? destinationId.charAt(0).toUpperCase() + destinationId.slice(1) : 'Destination',
        };
      }
      
      setDestination(destinationData);
      setIsLoaded(true);
    }, 500);
  }, [destinationId]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-muted-foreground">Discovering {destinationId}...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[70vh] bg-center bg-cover flex items-end"
          style={{ backgroundImage: `url(${destination.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
          <div className="container mx-auto px-4 pb-12 relative z-10">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-white border-white/30 bg-white/10 mb-4 hover:bg-white/20"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
              <Globe className="h-4 w-4" />
              <span>{destination.country}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {destination.name}
            </h1>
          </div>
        </section>
        
        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="hidden-gems">Hidden Gems</TabsTrigger>
                <TabsTrigger value="cuisine">Local Cuisine</TabsTrigger>
                <TabsTrigger value="artisans">Artisans</TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview" className="animate-fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">Discover {destination.name}</h2>
                    <p className="text-muted-foreground mb-6">{destination.description}</p>
                    
                    <h3 className="text-xl font-semibold mb-4">Must-See Places</h3>
                    <div className="space-y-4 mb-8">
                      <div className="p-4 border rounded-lg flex gap-4 items-start">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Explore the Heart of {destination.name}</h4>
                          <p className="text-sm text-muted-foreground">Discover the cultural center with historic sites, local markets, and authentic experiences.</p>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg flex gap-4 items-start">
                        <Utensils className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Taste Local Flavors</h4>
                          <p className="text-sm text-muted-foreground">Sample regional specialties at traditional restaurants and bustling food markets.</p>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg flex gap-4 items-start">
                        <Palette className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Artisan Workshops</h4>
                          <p className="text-sm text-muted-foreground">Visit workshops and studios to see local crafts being made and meet the artisans.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link to="#hidden-gems" onClick={() => setActiveTab("hidden-gems")} className="text-primary flex items-center gap-1 hover:underline">
                      Discover hidden gems <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                  
                  <div>
                    <div className="sticky top-24">
                      <h3 className="text-xl font-semibold mb-4">Photo Gallery</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {destination.images.map((image: string, index: number) => (
                          <div key={index} className="overflow-hidden rounded-lg">
                            <img 
                              src={image} 
                              alt={`${destination.name} scenery`} 
                              className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Hidden Gems Tab */}
              <TabsContent value="hidden-gems" className="animate-fade-up">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Hidden Gems in {destination.name}</h2>
                  <p className="text-muted-foreground mb-8">
                    Discover these lesser-known treasures that most tourists miss but locals cherish.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {destination.hiddenGems.map((gem: any, index: number) => (
                      <HiddenGemCard
                        key={index}
                        name={gem.name}
                        image={gem.image}
                        description={gem.description}
                        location={gem.location}
                      />
                    ))}
                  </div>
                  
                  <div className="mt-12 p-6 bg-muted rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Insider Tips</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Visit hidden gems early in the morning or late afternoon to avoid any crowds.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Ask locals for recommendations - they often know spots that aren't in guidebooks.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Some hidden gems may have limited opening hours or seasonal access. Check before you go.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              {/* Cuisine Tab */}
              <TabsContent value="cuisine" className="animate-fade-up">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Local Cuisine of {destination.name}</h2>
                  <p className="text-muted-foreground mb-8">
                    Experience the authentic flavors that tell the culinary story of {destination.name}.
                  </p>
                  
                  <div className="space-y-6 mb-12">
                    {destination.cuisine.map((dish: any, index: number) => (
                      <CuisineCard
                        key={index}
                        name={dish.name}
                        image={dish.image}
                        description={dish.description}
                        type={dish.type}
                      />
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Where to Eat</h3>
                      <ul className="space-y-3">
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Local markets for authentic street food experiences</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Family-run tavernas away from tourist areas</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Culinary workshops to learn traditional recipes</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-muted rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Culinary Etiquette</h3>
                      <ul className="space-y-3">
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Meal times may differ from what you're used to - locals often dine later</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Sharing dishes is common and encouraged in many local restaurants</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Learn a few food-related phrases in the local language</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Artisans Tab */}
              <TabsContent value="artisans" className="animate-fade-up">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Local Artisans of {destination.name}</h2>
                  <p className="text-muted-foreground mb-8">
                    Meet the skilled craftspeople preserving cultural heritage and creating unique handmade treasures.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {destination.artisans.map((artisan: any, index: number) => (
                      <ArtisanCard
                        key={index}
                        name={artisan.name}
                        image={artisan.image}
                        portrait={artisan.portrait}
                        description={artisan.description}
                        craft={artisan.craft}
                        years={artisan.years}
                      />
                    ))}
                  </div>
                  
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Supporting Local Crafts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">How to Find Authentic Crafts</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>Look for workshops where you can see items being made</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>Ask about techniques and materials used</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>Check for local certification marks or labels</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Ethical Shopping Tips</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>Buy directly from artisans when possible</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>Be respectful when haggling - fair prices support livelihoods</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>Learn about the cultural significance of items you purchase</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Destination;
