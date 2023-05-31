//import data from './translations.json' assert { type: 'json' };

function loadTranslations(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", "translations.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var translations = JSON.parse(xhr.responseText);
        callback(translations);
      }
    };
    xhr.send(null);
  }
  
  // Function to retrieve the translated text based on the current language
  function translate(key, translations, language) {
    if (translations.hasOwnProperty(key) && translations[key].hasOwnProperty(language)) {
      return translations[key][language];
    }
    // If the translation is not available, return the key itself as fallback
    return key;
  }
  
  // Function to update the HTML content with translations
  function updateTranslations(translations, language) {
    document.getElementById("hero-text").innerText = translate("hero", translations, language);
    document.getElementById("get-started").innerText = translate("get_started", translations, language);
    document.getElementById("about-us").innerText = translate("about", translations, language);
    document.getElementById("services-link").innerText = translate("services", translations, language);
    document.getElementById("contact-link").innerText = translate("contact", translations, language);
  
    document.getElementById("welcome-message").innerText = translate("welcome_message", translations, language);
    document.getElementById("about-content").innerText = translate("about_us_content", translations, language);
    document.getElementById("services-content").innerText = translate("services_content", translations, language);
    document.getElementById("contact-content").innerText = translate("contact_content", translations, language);
  }
  
  // Function to set the language and update translations
  function setLanguage(language) {
    loadTranslations(function(translations) {
      updateTranslations(translations, language);
    });
  }
  
  // Usage example
  setLanguage("pt"); // Set the initial language (e.g., "en" for English)
  
  // Example event listener to change the language
//   document.getElementById("language-selector").addEventListener("change", function(event) {
//     var selectedLanguage = event.target.value;
//     setLanguage(selectedLanguage);
//   });
  