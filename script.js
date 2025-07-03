// Budget configurations
const budgetConfigs = {
    budget: {
        name: "Budget Traveler",
        amount: 3000,
        icon: "💰",
        description: "Hostels, trains, free activities"
    },
    midrange: {
        name: "Mid-Range Explorer",
        amount: 6000,
        icon: "🏨",
        description: "Hotels, mixed transport, tours"
    },
    luxury: {
        name: "Luxury Experience",
        amount: 12000,
        icon: "✨",
        description: "5-star hotels, flights, premium"
    }
};

// Travel methods with their specific details
const travelMethods = {
    plane: {
        icon: "✈️",
        type: "Flight",
        numberPrefix: "FL",
        durationRange: { min: 2, max: 8 },
        priceMultiplier: { budget: 0.8, midrange: 1.0, luxury: 1.5 }
    },
    train: {
        icon: "🚆",
        type: "Train",
        numberPrefix: "TR",
        durationRange: { min: 4, max: 12 },
        priceMultiplier: { budget: 0.6, midrange: 0.8, luxury: 1.2 }
    },
    car: {
        icon: "🚗",
        type: "Car Rental",
        numberPrefix: "CR",
        durationRange: { min: 6, max: 15 },
        priceMultiplier: { budget: 0.4, midrange: 0.6, luxury: 1.0 }
    },
    ship: {
        icon: "🚢",
        type: "Ferry/Cruise",
        numberPrefix: "SH",
        durationRange: { min: 8, max: 20 },
        priceMultiplier: { budget: 0.5, midrange: 0.7, luxury: 1.3 }
    }
};

// Fixed 5 European destinations with budget-aware pricing  
const destinations = [
    {
        name: "🏛️ ROME, ITALY",
        baseTravel: {
            baseDuration: 6,
            basePrice: 400,
            date: "2024-03-15"
        },
        hotels: {
            budget: { name: "Roma Hostel Central", price: 180 },
            midrange: { name: "Historic Center Hotel", price: 450 },
            luxury: { name: "Hotel de Russie", price: 1200 }
        },
        activities: {
            budget: [
                { name: "Colosseum (Free Hour)", price: 0 },
                { name: "Vatican Museums", price: 35 },
                { name: "Trevi Fountain Walk", price: 0 },
                { name: "Local Pizza", price: 15 }
            ],
            midrange: [
                { name: "Colosseum Tour", price: 45 },
                { name: "Vatican Museums", price: 35 },
                { name: "Food Tour", price: 75 },
                { name: "Pantheon Visit", price: 15 }
            ],
            luxury: [
                { name: "Private Colosseum Tour", price: 200 },
                { name: "Private Vatican Experience", price: 300 },
                { name: "Michelin Restaurant", price: 250 },
                { name: "Private Rome by Night", price: 180 }
            ]
        },
        tripDuration: "4 days",
        weather: "Warm, 25°C"
    },
    {
        name: "🇫🇷 PARIS, FRANCE",
        baseTravel: {
            baseDuration: 5,
            basePrice: 350,
            date: "2024-03-20"
        },
        hotels: {
            budget: { name: "Paris Hostel Montmartre", price: 160 },
            midrange: { name: "Hotel des Grands Boulevards", price: 400 },
            luxury: { name: "The Ritz Paris", price: 1500 }
        },
        activities: {
            budget: [
                { name: "Eiffel Tower (Ground)", price: 0 },
                { name: "Louvre (Free Day)", price: 0 },
                { name: "Seine Walk", price: 0 },
                { name: "Café au Lait", price: 12 }
            ],
            midrange: [
                { name: "Eiffel Tower Top", price: 35 },
                { name: "Louvre Museum", price: 25 },
                { name: "Seine River Cruise", price: 45 },
                { name: "Montmartre Tour", price: 40 }
            ],
            luxury: [
                { name: "Private Eiffel Tower Dinner", price: 400 },
                { name: "Private Louvre Tour", price: 250 },
                { name: "Luxury Seine Cruise", price: 180 },
                { name: "Champagne Tasting", price: 220 }
            ]
        },
        tripDuration: "4 days",
        weather: "Mild, 18°C"
    },
    {
        name: "🇪🇸 BARCELONA, SPAIN",
        baseTravel: {
            baseDuration: 4,
            basePrice: 280,
            date: "2024-03-25"
        },
        hotels: {
            budget: { name: "Generator Barcelona", price: 140 },
            midrange: { name: "Gothic Quarter Hotel", price: 350 },
            luxury: { name: "Hotel Arts Barcelona", price: 900 }
        },
        activities: {
            budget: [
                { name: "Sagrada Familia (Outside)", price: 0 },
                { name: "Park Güell (Free Area)", price: 0 },
                { name: "Beach Day", price: 0 },
                { name: "Tapas Happy Hour", price: 20 }
            ],
            midrange: [
                { name: "Sagrada Familia", price: 30 },
                { name: "Park Güell", price: 25 },
                { name: "Tapas Tour", price: 65 },
                { name: "Flamenco Show", price: 45 }
            ],
            luxury: [
                { name: "Private Sagrada Familia", price: 150 },
                { name: "Private Gaudí Tour", price: 200 },
                { name: "Exclusive Tapas Experience", price: 180 },
                { name: "Premium Flamenco Dinner", price: 220 }
            ]
        },
        tripDuration: "4 days",
        weather: "Sunny, 24°C"
    },
    {
        name: "🇳🇱 AMSTERDAM, NETHERLANDS",
        baseTravel: {
            baseDuration: 3,
            basePrice: 200,
            date: "2024-03-30"
        },
        hotels: {
            budget: { name: "ClinkNOORD Hostel", price: 120 },
            midrange: { name: "Canal Ring Hotel", price: 300 },
            luxury: { name: "Waldorf Astoria Amsterdam", price: 800 }
        },
        activities: {
            budget: [
                { name: "Free Canal Walk", price: 0 },
                { name: "Vondelpark", price: 0 },
                { name: "Free Museum Day", price: 0 },
                { name: "Local Café", price: 15 }
            ],
            midrange: [
                { name: "Canal Cruise", price: 25 },
                { name: "Van Gogh Museum", price: 30 },
                { name: "Bike Tour", price: 35 },
                { name: "Brown Café Experience", price: 25 }
            ],
            luxury: [
                { name: "Private Canal Cruise", price: 200 },
                { name: "Private Van Gogh Tour", price: 180 },
                { name: "Luxury Bike Tour", price: 150 },
                { name: "Michelin Restaurant", price: 200 }
            ]
        },
        tripDuration: "3 days",
        weather: "Mild, 16°C"
    },
    {
        name: "🇨🇭 ZURICH, SWITZERLAND",
        baseTravel: {
            baseDuration: 4,
            basePrice: 320,
            date: "2024-04-05"
        },
        hotels: {
            budget: { name: "Youth Hostel Zurich", price: 200 },
            midrange: { name: "Lake View Hotel", price: 500 },
            luxury: { name: "Baur au Lac", price: 1400 }
        },
        activities: {
            budget: [
                { name: "Lake Zurich Walk", price: 0 },
                { name: "Old Town (Free)", price: 0 },
                { name: "Hiking Trail", price: 0 },
                { name: "Swiss Café", price: 18 }
            ],
            midrange: [
                { name: "Rhine Falls Trip", price: 50 },
                { name: "Cable Car Ride", price: 45 },
                { name: "Chocolate Factory", price: 35 },
                { name: "Traditional Restaurant", price: 60 }
            ],
            luxury: [
                { name: "Private Rhine Falls Helicopter", price: 800 },
                { name: "Luxury Mountain Experience", price: 400 },
                { name: "Private Chocolate Workshop", price: 250 },
                { name: "Michelin Star Dining", price: 350 }
            ]
        },
        tripDuration: "3 days",
        weather: "Fresh, 12°C"
    }
];

// Function to generate random travel details based on budget
function generateRandomTravel(baseTravel, budgetTier) {
    const methods = Object.keys(travelMethods);
    const randomMethod = methods[Math.floor(Math.random() * methods.length)];
    const method = travelMethods[randomMethod];

    // Generate random duration within range  
    const duration = Math.floor(Math.random() * (method.durationRange.max - method.durationRange.min + 1)) + method.durationRange.min;

    // Calculate price based on budget tier multiplier
    const price = Math.round(baseTravel.basePrice * method.priceMultiplier[budgetTier]);

    // Generate random number
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    const number = `${method.numberPrefix}-${randomNum}`;

    return {
        method: randomMethod,
        icon: method.icon,
        type: method.type,
        number: number,
        date: baseTravel.date,
        duration: `${duration}h ${Math.floor(Math.random() * 60)}m`,
        price: price
    };
}

// Function to calculate total trip cost based on budget tier
function calculateTotalCost(destination, travel, budgetTier) {
    const travelCost = travel.price;
    const hotelCost = destination.hotels[budgetTier].price;
    const activitiesCost = destination.activities[budgetTier].reduce((sum, activity) => sum + activity.price, 0);
    return travelCost + hotelCost + activitiesCost;
}

// Application state
let selectedBudgetTier = null;
let selectedBudgetAmount = 0;
let currentDestinationIndex = 0;
let totalCostAccumulated = 0;
let userRating = 0;

// DOM elements
const budgetScreen = document.getElementById('budgetScreen');
const hotelPreviewScreen = document.getElementById('hotelPreviewScreen');
const mainScreen = document.getElementById('mainScreen');
const destinationScreen = document.getElementById('destinationScreen');
const endScreen = document.getElementById('endScreen');

// Budget selection elements
const budgetOptions = document.querySelectorAll('.budget-option');
const budgetOption1 = document.getElementById('budgetOption1');
const budgetOption2 = document.getElementById('budgetOption2');
const budgetOption3 = document.getElementById('budgetOption3');

// Navigation buttons
const nextDestinationBtn = document.getElementById('nextDestinationBtn');
const nextDestinationBtn2 = document.getElementById('nextDestinationBtn2');
const backBtn = document.getElementById('backBtn');
const newJourneyBtn = document.getElementById('newJourneyBtn');
const startJourneyBtn = document.getElementById('startJourneyBtn');

// Hotel preview elements
const hotelBudgetNameEl = document.getElementById('hotelBudgetName');
const hotelGridEl = document.getElementById('hotelGrid');

// Progress and stats elements
const progressFill = document.getElementById('progressFill');
const currentDestinationEl = document.getElementById('currentDestination');
const selectedBudgetEl = document.getElementById('selectedBudget');
const totalCostEl = document.getElementById('totalCost');
const remainingBudgetEl = document.getElementById('remainingBudget');

// Destination detail elements
const destinationNameEl = document.getElementById('destinationName');
const travelTypeEl = document.getElementById('travelType');
const travelNumberEl = document.getElementById('travelNumber');
const travelDateEl = document.getElementById('travelDate');
const travelDurationEl = document.getElementById('travelDuration');
const travelPriceEl = document.getElementById('travelPrice');
const hotelNameEl = document.getElementById('hotelName');
const checkInEl = document.getElementById('checkIn');
const checkOutEl = document.getElementById('checkOut');
const hotelPriceEl = document.getElementById('hotelPrice');
const activitiesEl = document.getElementById('activities');
const totalTripCostEl = document.getElementById('totalTripCost');
const tripDurationEl = document.getElementById('tripDuration');
const weatherEl = document.getElementById('weather');

// End screen elements
const finalBudgetEl = document.getElementById('finalBudget');
const finalSpentEl = document.getElementById('finalSpent');
const finalSavedEl = document.getElementById('finalSaved');
const starRating = document.getElementById('starRating');
const ratingTextEl = document.getElementById('ratingText');
const stars = document.querySelectorAll('.star');

// Initialize application
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
    addEventListeners();
    addButtonEffects();
});

// Initialize the application
function initializeApp() {
    // Start with budget selection screen
    showBudgetScreen();
}

// Add event listeners
function addEventListeners() {
    // Budget selection
    budgetOption1.addEventListener('click', () => selectBudget('budget'));
    budgetOption2.addEventListener('click', () => selectBudget('midrange'));
    budgetOption3.addEventListener('click', () => selectBudget('luxury'));

    // Navigation buttons
    nextDestinationBtn.addEventListener('click', startJourney);
    nextDestinationBtn2.addEventListener('click', showNextDestination);
    backBtn.addEventListener('click', showMainScreen);
    newJourneyBtn.addEventListener('click', startNewJourney);
    startJourneyBtn.addEventListener('click', showMainScreen);

    // Star rating
    stars.forEach(star => {
        star.addEventListener('click', function () {
            const rating = parseInt(this.getAttribute('data-rating'));
            setUserRating(rating);
        });

        star.addEventListener('mouseenter', function () {
            const rating = parseInt(this.getAttribute('data-rating'));
            highlightStars(rating);
        });
    });

    starRating.addEventListener('mouseleave', function () {
        highlightStars(userRating);
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (budgetScreen.style.display !== 'none' && selectedBudgetTier) {
                showMainScreen();
            } else if (mainScreen.style.display !== 'none') {
                if (currentDestinationIndex === 0) {
                    startJourney();
                }
            }
        } else if (e.key === 'Escape') {
            if (destinationScreen.style.display !== 'none') {
                showMainScreen();
            }
        }
    });
}

// Screen Navigation Functions
function showBudgetScreen() {
    budgetScreen.style.display = 'flex';
    hotelPreviewScreen.style.display = 'none';
    mainScreen.style.display = 'none';
    destinationScreen.style.display = 'none';
    endScreen.style.display = 'none';
}

function showHotelPreviewScreen() {
    budgetScreen.style.display = 'none';
    hotelPreviewScreen.style.display = 'flex';
    mainScreen.style.display = 'none';
    destinationScreen.style.display = 'none';
    endScreen.style.display = 'none';

    // Populate hotel preview
    populateHotelPreview();
}

function showMainScreen() {
    budgetScreen.style.display = 'none';
    hotelPreviewScreen.style.display = 'none';
    mainScreen.style.display = 'flex';
    destinationScreen.style.display = 'none';
    endScreen.style.display = 'none';

    updateStats();
}

function showDestinationScreen() {
    budgetScreen.style.display = 'none';
    hotelPreviewScreen.style.display = 'none';
    mainScreen.style.display = 'none';
    destinationScreen.style.display = 'block';
    endScreen.style.display = 'none';

    // Trigger animation
    destinationScreen.style.animation = 'none';
    destinationScreen.offsetHeight; // Trigger reflow
    destinationScreen.style.animation = 'slideInRight 0.5s ease-out';
}

function showEndScreen() {
    budgetScreen.style.display = 'none';
    hotelPreviewScreen.style.display = 'none';
    mainScreen.style.display = 'none';
    destinationScreen.style.display = 'none';
    endScreen.style.display = 'flex';

    // Update final stats
    finalBudgetEl.textContent = `$${selectedBudgetAmount.toLocaleString()}`;
    finalSpentEl.textContent = `$${totalCostAccumulated.toLocaleString()}`;
    finalSavedEl.textContent = `$${(selectedBudgetAmount - totalCostAccumulated).toLocaleString()}`;
}

// Budget Selection Functions
function selectBudget(budgetTier) {
    selectedBudgetTier = budgetTier;
    selectedBudgetAmount = budgetConfigs[budgetTier].amount;

    // Update UI
    budgetOptions.forEach(option => option.classList.remove('selected'));
    document.querySelector(`[data-budget="${budgetTier}"]`).classList.add('selected');

    // Auto-advance to hotel preview screen after selection
    setTimeout(() => {
        showHotelPreviewScreen();
    }, 800);
}

// Journey Functions
function startJourney() {
    if (!selectedBudgetTier) {
        alert('Please select a budget first!');
        showBudgetScreen();
        return;
    }

    // Reset journey state
    currentDestinationIndex = 0;
    totalCostAccumulated = 0;

    // Start with first destination
    showNextDestination();
}

function showNextDestination() {
    if (currentDestinationIndex >= destinations.length) {
        // Journey complete - show end screen
        showEndScreen();
        return;
    }

    const destination = destinations[currentDestinationIndex];

    // Add button loading effect
    const activeBtn = mainScreen.style.display === 'none' ? nextDestinationBtn2 : nextDestinationBtn;
    showButtonLoading(activeBtn);

    setTimeout(() => {
        // Generate random travel for this destination
        const randomTravel = generateRandomTravel(destination.baseTravel, selectedBudgetTier);
        const totalTripCost = calculateTotalCost(destination, randomTravel, selectedBudgetTier);

        populateDestinationDetails(destination, randomTravel, totalTripCost);
        showDestinationScreen();

        // Update stats
        totalCostAccumulated += totalTripCost;
        currentDestinationIndex++;

        updateStats();
        removeButtonLoading(activeBtn);

        // Update button text for next destination
        if (currentDestinationIndex >= destinations.length) {
            nextDestinationBtn2.innerHTML = '🏁 FINISH JOURNEY';
        } else {
            nextDestinationBtn2.innerHTML = '🎯 NEXT DESTINATION';
        }
    }, 1000);
}

// Populate destination details
function populateDestinationDetails(destination, travel, totalCost) {
    destinationNameEl.textContent = destination.name;

    // Travel details (randomized transport method)
    travelTypeEl.textContent = `${travel.icon} ${travel.type}`;
    travelNumberEl.textContent = travel.number;
    travelDateEl.textContent = formatDate(travel.date);
    travelDurationEl.textContent = travel.duration;
    travelPriceEl.textContent = `$${travel.price}`;

    // Hotel details (budget-aware)
    const hotel = destination.hotels[selectedBudgetTier];
    hotelNameEl.textContent = hotel.name;
    checkInEl.textContent = formatDate(travel.date);
    checkOutEl.textContent = formatDate(getCheckoutDate(travel.date, destination.tripDuration));
    hotelPriceEl.textContent = `$${hotel.price}`;

    // Activities (budget-aware)
    activitiesEl.innerHTML = '';
    destination.activities[selectedBudgetTier].forEach(activity => {
        const activityEl = document.createElement('div');
        activityEl.className = 'activity-item';
        activityEl.innerHTML = `
            <span class="activity-name">${activity.name}</span>
            <span class="activity-price">${activity.price === 0 ? 'FREE' : '$' + activity.price}</span>
        `;
        activitiesEl.appendChild(activityEl);
    });

    // Trip summary
    totalTripCostEl.textContent = `$${totalCost}`;
    tripDurationEl.textContent = destination.tripDuration;
    weatherEl.textContent = destination.weather;
}

// Helper function to calculate checkout date
function getCheckoutDate(checkinDate, duration) {
    const date = new Date(checkinDate);
    const days = parseInt(duration.split(' ')[0]); // Extract number from "4 days"
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0]; // Return YYYY-MM-DD format
}

// Populate hotel preview with all hotels for selected budget
function populateHotelPreview() {
    if (!selectedBudgetTier) return;

    // Update budget info
    const config = budgetConfigs[selectedBudgetTier];
    hotelBudgetNameEl.textContent = config.name;

    // Clear existing hotels
    hotelGridEl.innerHTML = '';

    // Create hotel cards for each destination
    destinations.forEach(destination => {
        const hotel = destination.hotels[selectedBudgetTier];
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';

        // Extract city name from destination name (remove emoji and country)
        const cityName = destination.name.split(' ')[1].replace(',', '');

        // Get tier description based on budget
        let tierDescription = '';
        switch (selectedBudgetTier) {
            case 'budget':
                tierDescription = '💰 Budget-Friendly';
                break;
            case 'midrange':
                tierDescription = '🏨 Mid-Range Comfort';
                break;
            case 'luxury':
                tierDescription = '✨ Luxury Experience';
                break;
        }

        hotelCard.innerHTML = `
            <div class="hotel-location">${cityName}</div>
            <div class="hotel-name">${hotel.name}</div>
            <div class="hotel-tier">${tierDescription}</div>
            <div class="hotel-price">$${hotel.price}/stay</div>
        `;

        hotelGridEl.appendChild(hotelCard);
    });
}

// Star Rating Functions
function setUserRating(rating) {
    userRating = rating;
    highlightStars(rating);
    updateRatingText(rating);
}

function highlightStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function updateRatingText(rating) {
    const messages = {
        1: "😞 Not great - needs improvement",
        2: "😐 Okay - could be better",
        3: "🙂 Good - enjoyable experience",
        4: "😊 Great - highly recommend!",
        5: "🤩 Amazing - absolutely perfect!"
    };
    ratingTextEl.textContent = messages[rating] || "";
}

// Start New Journey
function startNewJourney() {
    // Reset all state
    selectedBudgetTier = null;
    selectedBudgetAmount = 0;
    currentDestinationIndex = 0;
    totalCostAccumulated = 0;
    userRating = 0;

    // Reset UI
    budgetOptions.forEach(option => option.classList.remove('selected'));
    highlightStars(0);
    ratingTextEl.textContent = '';
    nextDestinationBtn.innerHTML = '📍 START JOURNEY';
    nextDestinationBtn2.innerHTML = '🎯 NEXT DESTINATION';

    // Return to budget selection
    showBudgetScreen();
}

// Update statistics
function updateStats() {
    if (selectedBudgetTier) {
        selectedBudgetEl.textContent = `$${selectedBudgetAmount.toLocaleString()}`;
        totalCostEl.textContent = `$${totalCostAccumulated.toLocaleString()}`;
        remainingBudgetEl.textContent = `$${(selectedBudgetAmount - totalCostAccumulated).toLocaleString()}`;

        // Update progress bar
        const progress = (currentDestinationIndex / destinations.length) * 100;
        progressFill.style.width = `${progress}%`;

        // Update current destination counter
        currentDestinationEl.textContent = Math.max(1, currentDestinationIndex);

        // Update button text based on progress
        if (currentDestinationIndex === 0) {
            nextDestinationBtn.innerHTML = '📍 START JOURNEY';
        } else if (currentDestinationIndex >= destinations.length) {
            nextDestinationBtn.innerHTML = '🎉 VIEW RESULTS';
        }
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

// Add button effects
function addButtonEffects() {
    const buttons = document.querySelectorAll('.pixel-button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });

        button.addEventListener('mousedown', function () {
            this.style.transform = 'translateY(0) scale(0.95)';
        });

        button.addEventListener('mouseup', function () {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
    });
}

// Show button loading
function showButtonLoading(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="loading"></span> LOADING...';
    button.disabled = true;
    button.style.opacity = '0.7';

    // Store original text for restoration
    button.dataset.originalText = originalText;
}

// Remove button loading
function removeButtonLoading(button) {
    button.innerHTML = button.dataset.originalText;
    button.disabled = false;
    button.style.opacity = '1';
}

// Add some fun easter eggs
let clickCount = 0;
document.addEventListener('click', function () {
    clickCount++;

    if (clickCount === 10) {
        showEasterEgg();
    }
});

function showEasterEgg() {
    const easter = document.createElement('div');
    easter.innerHTML = '🎮 PIXEL MASTER UNLOCKED! 🎮';
    easter.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #e74c3c;
        color: white;
        padding: 15px;
        border: 2px solid white;
        font-family: 'Press Start 2P', cursive;
        font-size: 10px;
        z-index: 1000;
        animation: bounce 2s infinite;
    `;

    document.body.appendChild(easter);

    setTimeout(() => {
        easter.remove();
    }, 3000);
}

// Add CSS for bounce animation
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
    
    .completion-message {
        border-radius: 0 !important;
    }
    
    .completion-message h2 {
        font-size: 16px;
        color: #f39c12;
        margin-bottom: 20px;
        text-shadow: 2px 2px 0px #000000;
    }
    
    .completion-message p {
        font-size: 10px;
        margin-bottom: 15px;
        color: #ecf0f1;
    }
`;
document.head.appendChild(style);

// Make the application responsive to window resize
window.addEventListener('resize', function () {
    // Adjust layout if needed
    const container = document.querySelector('.game-container');
    if (window.innerWidth < 768) {
        container.style.padding = '10px';
    } else {
        container.style.padding = '20px';
    }
});

// Add touch support for mobile
document.addEventListener('touchstart', function () {
    // Enable touch interactions
});

// Prevent context menu on long press (for mobile)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

console.log('🎮 Pixel Europe Adventure initialized!');
console.log('Fixed journey: 5 European destinations with budget system');
console.log('Budget options: $3K, $6K, $12K');
console.log('Features: Budget selection → 5 sequential destinations → Star rating end screen');
console.log('Press Enter or Space to navigate, Escape to go back'); 