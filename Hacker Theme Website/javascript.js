window.onload = function() {
  const textContainer = document.querySelector(".typing-animation");
  const text = textContainer.innerHTML;
  textContainer.innerHTML = "";

  const lines = text.split('<br>');
  let lineIndex = 0;
  let charIndex = 0;

  function typeWriter() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        textContainer.innerHTML += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50); // Adjust typing speed here
      } else {
        lineIndex++;
        charIndex = 0;
        textContainer.innerHTML += '<br>';
        setTimeout(typeWriter, 50); // Adjust typing speed here
      }
    }
  }

  typeWriter();
};




  // After 5 seconds, show the div with a fading effect
  setTimeout(function() {
    var divE = document.getElementById("C-drive");
    divE.style.display = "block"; // Show the div
    divE.style.opacity = "1"; // Make it fully opaque
  }, 1000); // 5000 milliseconds = 5 seconds


  // After 5 seconds, show the div with a fading effect
  setTimeout(function() {
    var divE = document.getElementById("D-drive");
    divE.style.display = "block"; // Show the div
    divE.style.opacity = "1"; // Make it fully opaque
  }, 1250); // 5000 milliseconds = 5 seconds

  // After 5 seconds, show the div with a fading effect
  setTimeout(function() {
    var divE = document.getElementById("E-drive");
    divE.style.display = "block"; // Show the div
    divE.style.opacity = "1"; // Make it fully opaque
  }, 1500); // 5000 milliseconds = 5 seconds

  const ipElement = document.getElementById("ip");
  const locationElement = document.getElementById("location");

  const ipAddresses = [
"192.168.1.1",
"203.120.45.67",
"CodeNinja",
"87.65.433.21",
"SecureSorcerer",
"172.217.13.110",
"DataDynamo",
"65.43.21.10",
"CrypticGuardian",
"67.8129.12.34",
"HackHustler",  "98.76.54.32",
"172.217.13.110",
"65.43.21.10",
"12.34.56.78",
"67.89.12.34",
"128.0.0.1"
];


const locationCoordinates = [
"37.7749°N | 122.4194°W",
"40.7128°N | 74.0060°W",
"34.0522°N | 118.2437°W",
"48.8566°N | 2.3522°E",
"19.4326°N | 99.1332°W",
"37.9838°N | 23.7275°E",
"52.5200°N | 13.4050°E",
"19.0760°N | 72.8777°E",
"25.276987°N | 55.296249°E",
"37.7749°N | 122.4194°W"
];

  let ipIndex = 0;
  let locationIndex = 0;

  function getNextIP() {
    const ip = ipAddresses[ipIndex];
    ipIndex = (ipIndex + 1) % ipAddresses.length;
    return ip;
  }

  function getNextLocation() {
    const location = locationCoordinates[locationIndex];
    locationIndex = (locationIndex + 1) % locationCoordinates.length;
    return location;
  }

  const ipTyped = new Typed(ipElement, {
    strings: ipAddresses,
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
    smartBackspace: true
  });

  const locationTyped = new Typed(locationElement, {
    strings: locationCoordinates,
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
    smartBackspace: true
  });
