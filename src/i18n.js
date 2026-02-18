import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "invitation_title": "Divine Flag Hoisting Ceremony",
      "ganesh_namah": "|| Shree Ganeshay Namah ||",
      "jai_dwarkadhish": "|| Jay Dwarkadhish ||",
      "event_title": "Shree Divya Dhwajaji Aarohan",
      "date_label": "Date: 27-02-2026, Friday",
      "description": "<div style=\"font-family: var(--font-main); line-height: 1.8; color: var(--text-color); text-align: center; max-width: 700px; margin: auto;\"><p style=\"font-size: 18px;\">With the divine blessings of our family deity <span class=\"text-highlight-gold\">Shri Chamunda Mataji</span> and the infinite grace of our revered Gurujans</p><p style=\"font-size: 18px;\"><span class=\"text-highlight-gold\">Param Pujya Sharadbhai Vyas</span></p><p style=\"font-size: 18px;\"><span class=\"text-highlight-gold\">Param Pujya Swami Nalinanandgiri Maharaj</span></p><p style=\"font-size: 18px;\">we are blessed to announce the <span class=\"text-highlight-gold\">Flag Hoisting Ceremony of Shri Dwarkadhish</span></p><p style=\"font-size: 18px; margin-top: 18px;\">The ceremony is scheduled on <span class=\"text-highlight-gold\" style=\"font-size: 1.4rem !important;\">Phagan Sud Agiyaras (V.S. 2082), Friday, February 27, 2026</span></p><p style=\"margin-top: 22px; font-size: 18px;\">We cordially invite you and your family to grace this sacred and auspicious occasion</p></div>",
      "program_title": "Divine Program",
      "puja_label": "Dhwajaji Puja",
      "puja_time": "26-02-2026, 04:00 PM",
      "puja_location": "Lemon Tree Premier, Dwarka",
      "shobhayatra_label": "Dhwajaji Shobhayatra",
      "shobhayatra_time": "26-02-2026, 05:00 PM",
      "shobhayatra_location": "From Lemon Tree Premier, Dwarka to Dwarkadhish temple",
      "prasadi_label": "Prabhu Prasadi",
      "prasadi_time": "26-02-2026, 08:00 PM",
      "aarohan_label": "Dhwajaji Aarohan",
      "aarohan_time": "27-02-2026, 06:00 AM",
      "aarohan_location": "Dwarkadhish temple",
      "prasadi2_label": "Dhwaja Prabhu Prasadi",
      "prasadi2_time": "27-02-2026, 12:00 PM",
      "inviter_title": "Inviter",
      "inviter_names": [
        { "type": "header", "text": "In Loving Memory of" },
        { "type": "couple", "text": "Late Shri Ghelabhai & Late Smt Shantaben Chavda" },
        { "type": "couple", "text": "Late Shri Vallabhdas & Late Smt Taraben Davadra" },
        { "type": "spacing" },
        { "type": "header", "text": "In Honour of the Family" },
        { "type": "couple", "text": "Shri Ashokbhai & Bhanuben Chavda" },
        { "type": "couple", "text": "Shri Sunil & Hiral Kumar" },
        { "type": "couple", "text": "Shri Mitesh & Yaritza (Skye) Chavda" },
        { "type": "couple", "text": "Shri Sejul & Kiran Shah" },
        { "type": "couple", "text": "Shri Jignesh & Bhargavi Patel" },
        { "type": "spacing" },
        { "type": "header", "text": "And" },
        { "type": "kids", "text": "Diya • Sonam • Avaani • Aarya • Veer • Sanvi" },
        { "type": "spacing" },
        { "type": "header-small", "text": "Supported By" },
        { "type": "couple", "text": "Shri Yogesh Dave and Family" }
      ],
      "location_title": "Maha Prasad and Dhwajaji Puja Location",
      "location_address": "Lemon Tree Premier, Dwarka, Gujarat, India",
      "temple_location_btn": "Dwarkadhish Temple",
      "venue_location_btn": "Dhwajaji Puja Sthal",
      "whatsapp_message": "Jay Dwarkadhish",
      "family_name": "Chavda Family & Khashiyat Family"
    }
  },
  hi: {
    translation: {
      "invitation_title": "दिव्य ध्वजाजी आरोहण समारोह",
      "ganesh_namah": "|| श्री गणेशाय नमः ||",
      "jai_dwarkadhish": "|| जय द्वारकाधीश ||",
      "event_title": "श्री दिव्य ध्वजाजी आरोहण",
      "date_label": "दिनांक: 27-02-2026, शुक्रवार",
      "description": "<div style=\"font-family: var(--font-main); line-height: 1.8; color: var(--text-color); text-align: center; max-width: 700px; margin: auto;\"><p style=\"font-size: 18px;\">हमारी कुलदेवी <span class=\"text-highlight-gold\">श्री चामुंडा माताजी</span> के दिव्य आशीर्वाद और हमारे गुरुजनों</p><p style=\"font-size: 18px;\"><span class=\"text-highlight-gold\">परम पूज्य शरदभाई व्यास</span></p><p style=\"font-size: 18px;\"><span class=\"text-highlight-gold\">परम पूज्य स्वामी नलिनानंदगिरि महाराज</span></p><p style=\"font-size: 18px;\">की असीम कृपा से, हमें <span class=\"text-highlight-gold\">श्री द्वारकाधीश के ध्वजारोहण समारोह</span> की घोषणा करते हुए गर्व हो रहा है।</p><p style=\"font-size: 18px; margin-top: 18px;\">यह समारोह <span class=\"text-highlight-gold\" style=\"font-size: 1.4rem !important;\">फाल्गुन शुक्ल एकादशी (विक्रम संवत 2082), शुक्रवार, 27 फरवरी, 2026</span> को निर्धारित है।</p><p style=\"margin-top: 22px; font-size: 18px;\">हम आपको और आपके परिवार को इस पवित्र और शुभ अवसर पर पधारने के लिए सादर आमंत्रित करते हैं।</p></div>",
      "program_title": "दिव्य कार्यक्रम",
      "puja_label": "ध्वजाजी पूजा",
      "puja_time": "26-02-2026, शाम 04:00 बजे",
      "puja_location": "लेमन ट्री प्रीमियर, द्वारका",
      "shobhayatra_label": "ध्वजाजी शोभायात्रा",
      "shobhayatra_time": "26-02-2026, शाम 05:00 बजे",
      "shobhayatra_location": "लेमन ट्री प्रीमियर, द्वारका से द्वारकाधीश मंदिर तक",
      "prasadi_label": "प्रभु प्रसादी",
      "prasadi_time": "26-02-2026, रात 08:00 बजे",
      "aarohan_label": "ध्वजाजी आरोहण",
      "aarohan_time": "27-02-2026, सुबह 06:00 बजे",
      "aarohan_location": "द्वारकाधीश मंदिर",
      "prasadi2_label": "ध्वजा प्रभु प्रसादी",
      "prasadi2_time": "27-02-2026, दोपहर 12:00 बजे",
      "inviter_title": "निमंत्रक",
      "inviter_names": [
        { "type": "header", "text": "भावभीनी श्रद्धांजलि" },
        { "type": "couple", "text": "स्व. श्री घेलाभाई एवं स्व. श्रीमती शांताबेन चावड़ा" },
        { "type": "couple", "text": "स्व. श्री वल्लभदास एवं स्व. श्रीमती ताराबेन दावद्रा" },
        { "type": "spacing" },
        { "type": "header", "text": "निमंत्रक परिवार" },
        { "type": "couple", "text": "श्री अशोकभाई एवं भानुबेन चावड़ा" },
        { "type": "couple", "text": "श्री सुनील एवं हिरल कुमार" },
        { "type": "couple", "text": "श्री मितेश एवं यारित्ज़ा (स्काई) चावड़ा" },
        { "type": "couple", "text": "श्री सेजुल एवं किरण शाह" },
        { "type": "couple", "text": "श्री जिग्नेश एवं भार्गवी पटेल" },
        { "type": "spacing" },
        { "type": "header-small", "text": "एवं" },
        { "type": "kids", "text": "दिया • सोनम • अवनी • आर्या • वीर • सान्वी" },
        { "type": "spacing" },
        { "type": "header-small", "text": "सहयोगी" },
        { "type": "couple", "text": "श्री योगेश दवे एवं परिवार" }
      ],
      "location_title": "महा प्रसाद एवं ध्वजाजी पूजा स्थल",
      "location_address": "लेमन ट्री प्रीमियर, द्वारका, गुजरात, भारत",
      "temple_location_btn": "द्वारकाधीश मंदिर",
      "venue_location_btn": "ध्वजाजी पूजा स्थल",
      "whatsapp_message": "जय द्वारकाधीश",
      "family_name": "चावडा परिवार एवं खाशियत परिवार"
    }
  },
  gu: {
    translation: {
      "invitation_title": "દિવ્ય ધ્વજાજી આરોહણ મહોત્સવ",
      "ganesh_namah": "|| શ્રી ગણેશાય નમઃ ||",
      "jai_dwarkadhish": "|| જય દ્વારકાધીશ ||",
      "event_title": "શ્રી દિવ્ય ધ્વજાજી આરોહણ",
      "date_label": "તા. ૨૭-૦૨-૨૦૨૬, શુક્રવાર",
      "description": "<div style=\"font-family: var(--font-main); line-height: 1.8; color: var(--text-color); text-align: center; max-width: 700px; margin: auto;\"><p style=\"font-size: 18px;\">અમારા કુળદેવી <span class=\"text-highlight-gold\">શ્રી ચામુંડા માતાજી</span> ના દિવ્ય આશીર્વાદ અને અમારા ગુરુજનો</p><p style=\"font-size: 18px;\"><span class=\"text-highlight-gold\">પરમ પૂજ્ય શરદભાઈ વ્યાસ</span></p><p style=\"font-size: 18px;\"><span class=\"text-highlight-gold\">પરમ પૂજ્ય સ્વામી નલિનાનંદગિરિ મહારાજ</span></p><p style=\"font-size: 18px;\">ની અસીમ કૃપાથી, અમને <span class=\"text-highlight-gold\">શ્રી દ્વારકાધીશના ધ્વજારોહણ સમારોહ</span>ની જાહેરાત કરતા ગર્વ થાય છે.</p><p style=\"font-size: 18px; margin-top: 18px;\">આ સમારોહ <span class=\"text-highlight-gold\" style=\"font-size: 1.4rem !important;\">ફાગણ સુદ અગિયારસ (વિ. સંવત ૨૦૮૨), શુક્રવાર, ૨૭ ફેબ્રુઆરી, ૨૦૨૬</span> ના રોજ નિર્ધારિત છે.</p><p style=\"margin-top: 22px; font-size: 18px;\">આ પવિત્ર અને શુભ પ્રસંગે આપ અને આપના પરિવારને પધારવા અમારું ભાવભર્યું નિમંત્રણ છે.</p></div>",
      "program_title": "દિવ્ય કાર્યક્રમો",
      "puja_label": "ધ્વજાજી પૂજા",
      "puja_time": "૨૬-૦૨-૨૦૨૬, સાંજે ૦૪:૦૦ કલાકે",
      "puja_location": "લેમન ટ્રી પ્રીમિયર, દ્વારકા",
      "shobhayatra_label": "ધ્વજાજી શોભાયાત્રા",
      "shobhayatra_time": "૨૬-૦૨-૨૦૨૬, સાંજે ૦૫:૦૦ કલાકે",
      "shobhayatra_location": "લેમન ટ્રી પ્રીમિયર, દ્વારકા થી શ્રી દ્વારકાધીશ મંદિર સુધી",
      "prasadi_label": "પ્રભુ પ્રસાદી",
      "prasadi_time": "૨૬-૦૨-૨૦૨૬, રાત્રે ૦૮:૦૦ કલાકે",
      "aarohan_label": "ધ્વજાજી આરોહણ",
      "aarohan_time": "૨૭-૦૨-૨૦૨૬, સવારે ૦૬:૦૦ કલાકે",
      "aarohan_location": "શ્રી દ્વારકાધીશ મંદિર",
      "prasadi2_label": "ધ્વજા પ્રભુ પ્રસાદી",
      "prasadi2_time": "૨૭-૦૨-૨૦૨૬, બપોરે ૧૨:૦૦ કલાકે",
      "inviter_title": "નિમંત્રક",
      "inviter_names": [
        { "type": "header", "text": "સ્વર્ગસ્થ સ્મરણાર્થે" },
        { "type": "couple", "text": "સ્વ. શ્રી ઘેલાભાઈ અને સ્વ. શ્રીમતી શાંતાબેન ચાવડા" },
        { "type": "couple", "text": "સ્વ. શ્રી વલ્લભદાસ અને સ્વ. શ્રીમતી તારાબેન દાવદ્રા" },
        { "type": "spacing" },
        { "type": "header", "text": "નિમંત્રક પરિવાર" },
        { "type": "couple", "text": "શ્રી અશોકભાઈ અને ભાનુબેન ચાવડા" },
        { "type": "couple", "text": "શ્રી સુનીલ અને હીરલ કુમાર" },
        { "type": "couple", "text": "શ્રી મિતેશ અને યારિત્ઝા (સ્કાય) ચાવડા" },
        { "type": "couple", "text": "શ્રી સેજુલ અને કિરણ શાહ" },
        { "type": "couple", "text": "શ્રી જીગ્નેશ અને ભાર્ગવી પટેલ" },
        { "type": "spacing" },
        { "type": "header-small", "text": "અને" },
        { "type": "kids", "text": "દિયા • સોનમ • અવાની • આર્યા • વીર • સાન્વી" },
        { "type": "spacing" },
        { "type": "header-small", "text": "સહયોગ" },
        { "type": "couple", "text": "શ્રી યોગેશ દવે અને પરિવાર" }
      ],
      "location_title": "મહા પ્રસાદ અને ધ્વજાજી પૂજા સ્થળ",
      "location_address": "લેમન ટ્રી પ્રીમિયર, દ્વારકા, ગુજરાત, ભારત",
      "temple_location_btn": "દ્વારકાધીશ મંદિર",
      "venue_location_btn": "ધ્વજાજી પૂજા સ્થળ",
      "whatsapp_message": "જય દ્વારકાધીશ",
      "family_name": "ચાવડા પરિવાર અને ખાશિયત પરિવાર"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'gu', // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
