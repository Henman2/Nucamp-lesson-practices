const WAVE_POOL_MIN_HEIGHT = 42; // in inches
    	const WATERSLIDE_MIN_HEIGHT = 48; // in inches
    	const LAZY_RIVER_MIN_HEIGHT = 36; // in inches

        function buyTicket(){
            const attractionType = prompt('Which attraction do you want to visit: type "wave" for wave pool, "water" for waterslide, or "river" for lazy river?').toLowerCase();
            const userHeight = parseFloat(prompt('What is your height in inches?'));
            const userWithAdult = confirm("Are you with an adult? (OK for Yes, Cancel for No)"); //confirm if user is with an adult
            const isAllowed = checkHeight (attractionType, userHeight, userWithAdult);
            if(isAllowed) {
                alert(`You are allowed to visit the ${attractionType}. Enjoy your time!`);
            }
            else{
                alert(`Sorry, you are not tall enough for the ${attractionType}.`);
            }
        }
        // Function to check if the user is tall enough for the selected attraction
        function checkHeight(attraction, height, withAdult) {
            if(height > 42 && withAdult){
                return true;  //If taller than 42 inches and with an adult, allow access to all attractions
            }
            switch (attraction) {
                case 'wave':
                return height >= WAVE_POOL_MIN_HEIGHT; //tall than 42 but less than 48 inch
                break;
                case 'water':
                return height >= WATERSLIDE_MIN_HEIGHT; //taller than 48 inches
                break;
                case 'river':
                return height >= LAZY_RIVER_MIN_HEIGHT; //taller than 36 in but less than 42 inch
                break;
                default:
                return false; // Invalid attraction type
            }
        }