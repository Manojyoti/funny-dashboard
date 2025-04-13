document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.cute-btn');
    const miniPopup = document.querySelector('.mini-pop-up');
    const messageText = document.getElementById('message-text');
  
    const translations = {
      "English": "I miss you so much Joe.",
      "Hindi": "Main tumhe bahut yaad karta hoon Joe.",
      "Odiya": "Mane paduchha yarr bahuttt",
      "Spanish": "Te extraño mucho Joe.",
      "French": "Tu me manques beaucoup Joe.",
      "German": "Ich vermisse dich so sehr Joe.",
      "Chinese": "Wo hen xiang ni Joe.",
      "Japanese": "Joe, anata ga totemo natsukashii.",
      "Korean": "Joe, neomu bogosipeo.",
      "Russian": "Ya ochen skuchayu po tebe Joe.",
      "Arabic": "Ana mushtaq lak kathiran Joe.",
      "Portuguese": "Sinto muito a sua falta Joe.",
      "Italian": "Mi manchi tanto Joe.",
      "Dutch": "Ik mis je zo erg Joe.",
      "Turkish": "Seni çok özlüyorum Joe.",
      "Polish": "Tak bardzo tęsknię za tobą Joe.",
      "Thai": "Phom khit thueng khun mak Joe.",
      "Swedish": "Jag saknar dig så mycket Joe.",
      "Greek": "Mou leipeis poly Joe.",
      "Hebrew": "Ani mitga'agea elecha me'od Joe.",
      "Urdu": "Main tumhein bohat yaad karta hoon Joe.",
      "Tamil": "Nan unai romba miss panren Joe.",
      "Telugu": "Nenu ninnu chaala miss avutunnanu Joe.",
      "Bengali": "Ami tomar khub onek mone porchi Joe.",
      "Punjabi": "Main tenu bahut yaad karda haan Joe.",
      "Gujarati": "Hu tane khub yaad karu chu Joe.",
      "Kannada": "Naanu ninna tumba miss maaduttiddini Joe.",
      "Malayalam": "Njan ninne valare miss cheyyunnu Joe.",
      "Marathi": "Mi tuzya var khup prem karto Joe.",
      "Sinhala": "Mama oyāva bohōma sēpaṭa noməda Joe.",
      "Vietnamese": "Tôi nhớ bạn rất nhiều Joe.",
      "Czech": "Moc mi chybíš Joe.",
      "Romanian": "Mi-e dor de tine Joe.",
      "Hungarian": "Nagyon hiányzol Joe.",
      "Finnish": "Kaipaan sinua niin paljon Joe.",
      "Norwegian": "Jeg savner deg så mye Joe.",
      "Indonesian": "Aku sangat merindukanmu Joe.",
      "Filipino": "Miss na miss kita Joe.",
      "Ukrainian": "Ya duzhe sumuyu za toboyu Joe."
    };
  
    let languageListVisible = false;
    let languageList;
  
    button.addEventListener('click', () => {
      if (languageListVisible) {
        // Hide and remove the list
        languageList.remove();
        languageListVisible = false;
      } else {
        // Show the list
        languageList = document.createElement('div');
        languageList.classList.add('language-list');
  
        const ul = document.createElement('ul');
  
        Object.keys(translations).forEach(lang => {
          const li = document.createElement('li');
          li.textContent = lang;
          li.classList.add('lang-item');
  
          li.addEventListener('click', () => {
            const translatedText = translations[lang];
            messageText.textContent = translatedText;
          });
  
          ul.appendChild(li);
        });
  
        languageList.appendChild(ul);
        miniPopup.appendChild(languageList);
        languageListVisible = true;
      }
    });
  });


  



