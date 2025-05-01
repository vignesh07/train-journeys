// Initialize Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoidmlnbmVzaG5hdGFyYWphbiIsImEiOiJjbTl4aWdibGMxODNuMnFvYngxOHhqYWp4In0.qo-8vUNvOMRXXkV8Jfp3Ng';

// Define routes and their stations
const routes = {
    californiaZephyr: {
        name: 'California Zephyr',
        stations: [
            { name: 'Chicago, IL', coords: [-87.6298, 41.8781] },
            { name: 'Omaha, NE', coords: [-95.9345, 41.2565] },
            { name: 'Denver, CO', coords: [-104.9903, 39.7392] },
            { name: 'Salt Lake City, UT', coords: [-111.8910, 40.7608] },
            { name: 'Reno, NV', coords: [-119.8138, 39.5296] },
            { name: 'Sacramento, CA', coords: [-121.4944, 38.5816] },
            { name: 'Emeryville, CA', coords: [-122.2852, 37.8315] }
        ],
        color: '#FF8C00',  // Dark Orange
        stats: {
            distance: '2,438 miles',
            duration: '51 hours',
            stations: '33'
        }
    },
    cascades: {
        name: 'Amtrak Cascades',
        stations: [
            { name: 'Vancouver, BC', coords: [-123.1088, 49.2827] },
            { name: 'Bellingham, WA', coords: [-122.4787, 48.7519] },
            { name: 'Seattle, WA', coords: [-122.3301, 47.6062] },
            { name: 'Tacoma, WA', coords: [-122.4400, 47.2529] },
            { name: 'Olympia, WA', coords: [-122.9007, 47.0379] },
            { name: 'Portland, OR', coords: [-122.6765, 45.5155] }
        ],
        color: '#228B22',  // Forest Green
        stats: {
            distance: '467 miles',
            duration: '10 hours 25 minutes',
            stations: '18'
        }
    },
    elizabeth: {
        name: 'Elizabeth Line',
        stations: [
            { name: 'Reading', coords: [-0.9742, 51.4584] },
            { name: '', coords: [-0.9000, 51.4700] },
            { name: '', coords: [-0.8500, 51.4800] },
            { name: 'Maidenhead', coords: [-0.7195, 51.5225] },
            { name: '', coords: [-0.6500, 51.5150] },
            { name: 'Slough', coords: [-0.5950, 51.5121] },
            { name: '', coords: [-0.5000, 51.5050] },
            { name: 'Hayes & Harlington', coords: [-0.4207, 51.5008] },
            { name: '', coords: [-0.3500, 51.5100] },
            { name: '', coords: [-0.2500, 51.5150] },
            { name: 'Paddington', coords: [-0.1778, 51.5154] },
            { name: '', coords: [-0.1600, 51.5148] },
            { name: 'Bond Street', coords: [-0.1496, 51.5142] },
            { name: '', coords: [-0.1200, 51.5160] },
            { name: 'Liverpool Street', coords: [-0.0833, 51.5186] },
            { name: '', coords: [-0.0500, 51.5100] },
            { name: 'Canary Wharf', coords: [-0.0186, 51.5054] },
            { name: '', coords: [0.0100, 51.5080] },
            { name: 'Custom House', coords: [0.0279, 51.5095] },
            { name: '', coords: [0.0500, 51.5000] },
            { name: 'Woolwich', coords: [0.0722, 51.4991] },
            { name: '', coords: [0.1000, 51.4950] },
            { name: 'Abbey Wood', coords: [0.1207, 51.4913] }
        ],
        color: '#6949a3',  // Keep Elizabeth Line Purple
        stats: {
            distance: '73 miles',
            duration: '1 hour 40 minutes',
            stations: '41'
        }
    },
    osloBergen: {
        name: 'Oslo-Bergen Railway',
        stations: [
            { name: 'Oslo S', coords: [10.7522, 59.9139] },
            { name: '', coords: [10.5000, 59.9000] },
            { name: 'Drammen', coords: [10.2052, 59.7440] },
            { name: '', coords: [10.1000, 59.8000] },
            { name: '', coords: [10.0000, 59.9500] },
            { name: 'Hønefoss', coords: [10.2587, 60.1675] },
            { name: '', coords: [9.5000, 60.3000] },
            { name: '', coords: [9.0000, 60.5000] },
            { name: 'Gol', coords: [8.9493, 60.7001] },
            { name: '', coords: [8.5000, 60.6500] },
            { name: 'Geilo', coords: [8.2080, 60.5341] },
            { name: '', coords: [7.8000, 60.5500] },
            { name: 'Finse', coords: [7.5026, 60.6012] },
            { name: '', coords: [7.3000, 60.6500] },
            { name: 'Myrdal', coords: [7.1227, 60.7341] },
            { name: '', coords: [6.8000, 60.7000] },
            { name: '', coords: [6.6000, 60.6500] },
            { name: 'Voss', coords: [6.4225, 60.6294] },
            { name: '', coords: [6.0000, 60.6000] },
            { name: 'Dale', coords: [5.8336, 60.5891] },
            { name: '', coords: [5.5000, 60.4500] },
            { name: 'Bergen', coords: [5.3220, 60.3913] }
        ],
        color: '#1E90FF',  // Dodger Blue
        stats: {
            distance: '371 miles',
            duration: '6 hours 45 minutes',
            stations: '22'
        }
    },
    thalys: {
        name: 'Thalys Paris-Amsterdam',
        stations: [
            { name: 'Paris Nord', coords: [2.3558, 48.8809] },
            { name: '', coords: [2.4000, 49.0000] },
            { name: '', coords: [2.5000, 49.2000] },
            { name: '', coords: [2.8000, 49.5000] },
            { name: '', coords: [3.2000, 49.8000] },
            { name: '', coords: [3.5000, 50.2000] },
            { name: '', coords: [3.8000, 50.5000] },
            { name: 'Brussels-South', coords: [4.3367, 50.8366] },
            { name: '', coords: [4.3500, 50.9000] },
            { name: '', coords: [4.3800, 51.0000] },
            { name: '', coords: [4.4000, 51.1000] },
            { name: 'Antwerp-Central', coords: [4.4211, 51.2172] },
            { name: '', coords: [4.4500, 51.4000] },
            { name: '', coords: [4.4700, 51.6000] },
            { name: '', coords: [4.4800, 51.8000] },
            { name: 'Rotterdam Centraal', coords: [4.4690, 51.9250] },
            { name: '', coords: [4.5500, 52.0000] },
            { name: '', coords: [4.6500, 52.1500] },
            { name: 'Schiphol Airport', coords: [4.7617, 52.3092] },
            { name: '', coords: [4.8500, 52.3500] },
            { name: 'Amsterdam Centraal', coords: [4.9003, 52.3791] }
        ],
        color: '#FFD700',  // Gold
        stats: {
            distance: '315 miles',
            duration: '3 hours 12 minutes',
            stations: '6'
        }
    },
    westCoast: {
        name: 'West Coast Main Line',
        stations: [
            { name: 'London Euston', coords: [-0.1332, 51.5284] },
            { name: '', coords: [-0.2500, 51.6000] },
            { name: 'Milton Keynes Central', coords: [-0.7743, 52.0344] },
            { name: '', coords: [-0.9000, 52.2000] },
            { name: 'Rugby', coords: [-1.2500, 52.3780] },
            { name: '', coords: [-1.4000, 52.4500] },
            { name: 'Birmingham New Street', coords: [-1.8983, 52.4778] },
            { name: '', coords: [-2.0000, 52.6000] },
            { name: 'Crewe', coords: [-2.4324, 53.0898] },
            { name: '', coords: [-2.5000, 53.2000] },
            { name: 'Warrington Bank Quay', coords: [-2.6280, 53.3867] },
            { name: '', coords: [-2.7000, 53.4500] },
            { name: 'Liverpool Lime Street', coords: [-2.9773, 53.4075] }
        ],
        color: '#00CED1',  // Dark Turquoise
        stats: {
            distance: '193 miles',
            duration: '2 hours 13 minutes',
            stations: '17'
        }
    }
};

// Group routes by region
const usRoutes = {
    californiaZephyr: routes.californiaZephyr,
    cascades: routes.cascades
};

const europeanRoutes = {
    elizabeth: routes.elizabeth,
    osloBergen: routes.osloBergen,
    thalys: routes.thalys,
    westCoast: routes.westCoast
};

// Initialize map variables
let usMap = null;
let euMap = null;

// Navigation function
function showPage(pageId) {
    console.log('showPage called with:', pageId);
    try {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('hidden');
            console.log('Hidden page:', page.id);
        });
        
        // Show requested page
        const targetPage = document.getElementById(pageId);
        if (!targetPage) {
            throw new Error(`Page ${pageId} not found`);
        }
        targetPage.classList.remove('hidden');
        console.log('Showing page:', pageId);
        
        // Initialize maps if needed
        if (pageId === 'us-page' && !usMap) {
            console.log('Initializing US map');
            initializeUSMap();
        } else if (pageId === 'eu-page' && !euMap) {
            console.log('Initializing EU map');
            initializeEUMap();
        }
    } catch (error) {
        console.error('Error in showPage:', error);
    }
}

// Map initialization functions
function initializeUSMap() {
    if (usMap) return;
    
    try {
        usMap = new mapboxgl.Map({
            container: 'us-map',
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [-98.5795, 39.8283],
            zoom: 3,
            maxPitch: 0,
            dragRotate: false,
            projection: 'mercator'
        });
        
        usMap.dragRotate.disable();
        usMap.touchZoomRotate.disableRotation();
        usMap.setPitch(0);
        
        // Add US routes when map loads
        usMap.on('load', () => {
            console.log('US map loaded, adding routes');
            addRoutesToMap(usMap, usRoutes);
        });
    } catch (error) {
        console.error('Error initializing US map:', error);
    }
}

function initializeEUMap() {
    if (euMap) return;
    
    try {
        euMap = new mapboxgl.Map({
            container: 'eu-map',
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [5, 52],
            zoom: 4,
            maxPitch: 0,
            dragRotate: false,
            projection: 'mercator'
        });
        
        euMap.dragRotate.disable();
        euMap.touchZoomRotate.disableRotation();
        euMap.setPitch(0);
        
        // Add European routes when map loads
        euMap.on('load', () => {
            console.log('EU map loaded, adding routes');
            addRoutesToMap(euMap, europeanRoutes);
        });
    } catch (error) {
        console.error('Error initializing EU map:', error);
    }
}

// Helper functions
function addRoutesToMap(map, routes) {
    Object.entries(routes).forEach(([routeId, routeData]) => {
        const routeGeoJSON = createRouteGeoJSON(routeData.stations);
        
        // Add the route source
        map.addSource(routeId, {
            'type': 'geojson',
            'data': routeGeoJSON
        });

        // Add route layers
        addRouteLayers(map, routeId, routeData);
        
        // Add station markers
        addStationMarkers(map, routeData);
        
        // Add train animation
        addTrainAnimation(map, routeId, routeData, routeGeoJSON);
        
        // Add image overlays
        addImageOverlays(map, routeId);
    });
}

function addRouteLayers(map, routeId, routeData) {
    // Add the track bed
    map.addLayer({
        'id': `${routeId}-track-bed`,
        'type': 'line',
        'source': routeId,
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#2b2b2b',
            'line-width': [
                'interpolate',
                ['linear'],
                ['zoom'],
                2, 2,
                5, 4
            ]
        }
    });

    // Add parallel rail lines
    [-1, 1].forEach((offset, index) => {
        map.addLayer({
            'id': `${routeId}-rails-${index}`,
            'type': 'line',
            'source': routeId,
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#787878',
                'line-width': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    2, 1,
                    5, 2
                ],
                'line-offset': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    2, offset,
                    5, offset * 2
                ]
            }
        });
    });
}

function addStationMarkers(map, routeData) {
    routeData.stations.forEach((station, index) => {
        if (!station.name) return; // Skip unnamed waypoints
        
        const el = document.createElement('div');
        el.className = 'station-marker';
        
        // Create popup for station info
        const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        // Add station name popup
        el.addEventListener('click', () => {
            if (popup.isOpen()) {
                popup.remove();
            } else {
                const content = `<h3>${station.name}</h3>`;
                if (index === 0 || index === routeData.stations.length - 1) {
                    // Add route stats for terminal stations
                    content += `
                        <p>Distance: ${routeData.stats.distance}</p>
                        <p>Duration: ${routeData.stats.duration}</p>
                        <p>Stations: ${routeData.stats.stations}</p>
                    `;
                }
                popup.setLngLat(station.coords)
                    .setHTML(content)
                    .addTo(map);
            }
        });

        // Add marker to map
        new mapboxgl.Marker(el)
            .setLngLat(station.coords)
            .addTo(map);
    });
}

function addTrainAnimation(map, routeId, routeData, routeGeoJSON) {
    // Create train marker
    const trainEl = document.createElement('div');
    trainEl.className = 'train-marker';
    trainEl.style.backgroundColor = routeData.color;
    trainEl.style.borderColor = '#000000';

    const trainMarker = new mapboxgl.Marker({
        element: trainEl,
        rotationAlignment: 'map'
    })
        .setLngLat(routeData.stations[0].coords)
        .addTo(map);

    // Animation function
    function animate() {
        const line = routeGeoJSON.geometry.coordinates;
        let step = 0;
        const numSteps = 1000;

        function frame() {
            step = (step + 1) % numSteps;
            const t = step / numSteps;

            // Calculate current point
            const totalLength = line.length - 1;
            const currentIndex = Math.floor(t * totalLength);
            const nextIndex = Math.min(currentIndex + 1, line.length - 1);
            const segmentT = (t * totalLength) % 1;

            const current = line[currentIndex];
            const next = line[nextIndex];

            const point = [
                current[0] + (next[0] - current[0]) * segmentT,
                current[1] + (next[1] - current[1]) * segmentT
            ];

            // Calculate bearing
            const bearing = calculateBearing(current, next);
            
            // Apply rotation based on route
            let rotationOffset = 0;
            if (routeId === 'elizabeth' || routeId === 'thalys') {
                rotationOffset = -90;
            } else if (routeId === 'osloBergen') {
                rotationOffset = 90;
            } else if (routeId === 'californiaZephyr' || routeId === 'cascades') {
                rotationOffset = 90;
            } else if (routeId === 'westCoast') {
                rotationOffset = 90;
            }

            trainMarker.setRotation(bearing + rotationOffset);
            trainMarker.setLngLat(point);

            requestAnimationFrame(frame);
        }

        frame();
    }

    // Start animation
    animate();
}

// Helper function to calculate bearing between two points
function calculateBearing(start, end) {
    const startLat = start[1] * Math.PI / 180;
    const startLng = start[0] * Math.PI / 180;
    const endLat = end[1] * Math.PI / 180;
    const endLng = end[0] * Math.PI / 180;

    const dLng = endLng - startLng;

    const y = Math.sin(dLng) * Math.cos(endLat);
    const x = Math.cos(startLat) * Math.sin(endLat) -
            Math.sin(startLat) * Math.cos(endLat) * Math.cos(dLng);

    let bearing = Math.atan2(y, x) * 180 / Math.PI;
    bearing = (bearing + 360) % 360;

    return bearing;
}

// Create GeoJSON route
function createRouteGeoJSON(stations) {
    return {
        'type': 'Feature',
        'properties': {},
        'geometry': {
            'type': 'LineString',
            'coordinates': stations.map(s => s.coords)
        }
    };
}

// Image overlay data structure
const routeImages = {
    californiaZephyr: [
        {
            path: 'images/compressed/californiaZephyr_4.jpg',
            coords: [-111.8910, 40.7608], // Salt Lake City
            title: 'Rocky Mountains',
            description: 'California Zephyr passing through the Rocky Mountains'
        },
        {
            path: 'images/compressed/californiaZephyr_5.jpg',
            coords: [-122.2852, 37.8315], // Emeryville
            title: 'Golden Gate Bridge',
            description: 'View of the Golden Gate Bridge from the California Zephyr'
        },
        {
            path: 'images/compressed/californiaZephyr_6.jpg',
            coords: [-104.9903, 39.7392], // Denver
            title: 'Near Denver',
            description: 'Scenic view near Denver on the California Zephyr'
        },
        {
            path: 'images/compressed/californiaZephyr_7.jpg',
            coords: [-95.9345, 41.2565], // Omaha
            title: 'Mississippi River',
            description: 'View of the Mississippi River from the California Zephyr'
        }
    ],
    cascades: [
        {
            path: 'images/compressed/cascades_2.jpg',
            coords: [-122.4400, 47.2529], // Tacoma
            title: 'Mount Rainier',
            description: 'View of Mount Rainier from near Tacoma'
        }
    ],
    elizabeth: [
        {
            path: 'images/compressed/elizabeth_3.jpg',
            coords: [-0.1778, 51.5154], // Paddington
            title: 'Elizabeth Line',
            description: 'Elizabeth Line train at the station'
        }
    ],
    osloBergen: [
        {
            path: 'images/compressed/oslo_bergen_2.jpg',
            coords: [7.5026, 60.6012], // Finse
            title: 'Finse Station',
            description: 'Oslo-Bergen Railway at Finse Station'
        },
        {
            path: 'images/compressed/oslo_bergen_3.jpg',
            coords: [8.2080, 60.5341], // Geilo
            title: 'Geilo Station',
            description: 'Oslo-Bergen Railway at Geilo Station'
        },
        {
            path: 'images/compressed/oslo_bergen_4.jpg',
            coords: [6.4225, 60.6294], // Voss
            title: 'Voss Station',
            description: 'Oslo-Bergen Railway at Voss Station'
        },
        {
            path: 'images/compressed/oslo_bergen_5.jpg',
            coords: [5.3220, 60.3913], // Bergen
            title: 'Bergen Station',
            description: 'Oslo-Bergen Railway at Bergen Station'
        }
    ],
    thalys: [
        {
            path: 'images/compressed/thalys_1.jpg',
            coords: [2.3558, 48.8809], // Paris Nord
            title: 'Eiffel Tower',
            description: 'The iconic Eiffel Tower in Paris'
        },
        {
            path: 'images/compressed/thalys_2.jpg',
            coords: [2.3538, 48.8819], // Paris Nord + slight offset
            title: 'Arc de Triomphe',
            description: 'View of the Arc de Triomphe from the Thalys'
        },
        {
            path: 'images/compressed/thalys_3.jpg',
            coords: [2.3578, 48.8799], // Paris Nord + slight offset
            title: 'Louvre Museum',
            description: 'The magnificent Louvre Museum in Paris'
        },
        {
            path: 'images/compressed/thalys_4.jpg',
            coords: [2.3548, 48.8829], // Paris Nord + slight offset
            title: 'Paris Architecture',
            description: 'Beautiful Parisian architecture along the route'
        },
        {
            path: 'images/compressed/champs_elysee.jpg',
            coords: [2.3568, 48.8789], // Paris Nord + slight offset
            title: 'Champs-Élysées View',
            description: 'Stunning view down the Champs-Élysées towards Place de la Concorde, with the Grande Roue de Paris (Ferris wheel) visible'
        },
        {
            path: 'images/compressed/thalys_5.jpg',
            coords: [4.9003, 52.3791], // Amsterdam Centraal
            title: 'Rijksmuseum',
            description: 'View of the Rijksmuseum from the Thalys'
        },
        {
            path: 'images/compressed/thalys_6.jpg',
            coords: [4.9023, 52.3781], // Amsterdam Centraal + slight offset
            title: 'Amsterdam Architecture',
            description: 'Beautiful architecture in Amsterdam'
        }
    ],
    westCoast: [
        {
            path: 'images/compressed/westCoast_1.jpg',
            coords: [-2.9773, 53.4075], // Liverpool Lime Street station
            title: 'Anfield Stadium',
            description: 'View of Anfield Stadium near Liverpool Lime Street station'
        },
        {
            path: 'images/compressed/london.JPG',
            coords: [-0.1332, 51.5284], // London Euston
            title: 'Modern Station Architecture',
            description: 'Distinctive geometric facade featuring white hourglass-shaped elements near London Euston'
        }
    ]
};

function addImageOverlays(map, routeId) {
    const images = routeImages[routeId];
    if (!images || images.length === 0) return;

    images.forEach(image => {
        // Create image thumbnail
        const thumbnailEl = document.createElement('div');
        thumbnailEl.className = 'image-thumbnail';
        thumbnailEl.style.width = '30px';
        thumbnailEl.style.height = '30px';
        thumbnailEl.style.backgroundImage = `url(${image.path})`;
        thumbnailEl.style.backgroundSize = 'cover';
        thumbnailEl.style.backgroundPosition = 'center';
        thumbnailEl.style.borderRadius = '50%';
        thumbnailEl.style.border = '2px solid white';
        thumbnailEl.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
        thumbnailEl.style.cursor = 'pointer';
        thumbnailEl.style.zIndex = '1000';

        // Create popup for image
        const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
            maxWidth: '300px',
            className: 'image-popup-container'
        });

        // Add click handler to show image
        thumbnailEl.addEventListener('click', () => {
            if (popup.isOpen()) {
                popup.remove();
            } else {
                const content = `
                    <div class="image-popup">
                        <img src="${image.path}" alt="${image.title}" style="width: 100%; height: auto;">
                        <h3>${image.title}</h3>
                        <p>${image.description}</p>
                    </div>
                `;
                popup.setLngLat(image.coords)
                    .setHTML(content)
                    .addTo(map);
            }
        });

        // Add marker to map
        new mapboxgl.Marker(thumbnailEl)
            .setLngLat(image.coords)
            .addTo(map);
    });
}

// Set up navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Setting up navigation listeners');
    
    // Set up click handlers for all navigation buttons
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            const targetPage = button.getAttribute('data-target');
            console.log('Navigation clicked:', targetPage);
            showPage(targetPage);
        });
    });
}); 