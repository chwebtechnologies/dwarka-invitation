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
      "description": "With the blessings of our family deity <strong>Shri Chamunda Mataji</strong> and the infinite grace of our Gurujans <strong>Param Pujya Sharadbhai Vyas</strong> and <strong>Param Pujya Swami Nalinanandgiri Maharaj</strong>, the <strong>Flag Hoisting Ceremony of Shri Dwarkadhish</strong> is scheduled on Phagan Sud Agiyaras (V.S. 2082), <strong>Friday, February 27, 2026</strong>. We cordially invite you to join us on this auspicious occasion.",
      "program_title": "Divine Program",
      "puja_label": "Dhwajaji Puja",
      "puja_time": "26-02-2026, 05:00 PM",
      "shobhayatra_label": "Dhwajaji Shobhayatra",
      "shobhayatra_time": "26-02-2026, 06:30 PM",
      "sangeet_label": "Ras Garba & Sangeet Sandhya",
      "sangeet_time": "26-02-2026, 08:00 PM",
      "prasadi_label": "Dhwaja Prabhu Prasadi",
      "prasadi_time": "26-02-2026, 08:30 PM",
      "aarohan_label": "Dhwajaji Aarohan",
      "aarohan_time": "27-02-2026, 07:30 AM",
      "prasadi2_label": "Dhwaja Prabhu Prasadi",
      "prasadi2_time": "27-02-2026, 12:00 PM",
      "inviter_title": "Inviter",
      "inviter_names": "Smt. Bhanuben Ashokbhai Chavda | Shri Ashokbhai Ghelabhai Chavda\nSmt. Hiral Sunil Kumar | Shri Sunil Kumar\nSmt. Yaritza (Skye) Mitesh Chavda | Shri Mitesh Ashokbhai Chavda\nDiya, Sonam, Avani, Arya",
      "location_title": "Maha Prasad and Dhwajaji Puja Location",
      "location_address": "Vaanza Darji Gnati ni vaadi, Near shak market, Dwarka, Gujarat, India",
      "temple_location_btn": "Dwarkadhish Temple",
      "venue_location_btn": "Prasad & Venue Location",
      "whatsapp_message": "Jay Dwarkadhish",
      "family_name": "Chavda Family"
    }
  },
  hi: {
    translation: {
      "invitation_title": "दिव्य ध्वजाजी आरोहण समारोह",
      "ganesh_namah": "|| श्री गणेशाय नमः ||",
      "jai_dwarkadhish": "|| जय द्वारकाधीश ||",
      "event_title": "श्री दिव्य ध्वजाजी आरोहण",
      "date_label": "दिनांक: 27-02-2026, शुक्रवार",
      "description": "हमारी कुलदेवी <strong>श्री चामुंडा माताजी</strong> के आशीर्वाद और हमारे गुरुजनों <strong>परम पूज्य शरदभाई व्यास</strong>, <strong>परम पूज्य स्वामी नलिनानंदगिरि महाराज</strong> की असीम कृपा से <strong>श्री द्वारकाधीश का ध्वजारोहण</strong> विक्रम संवत 2082 फाल्गुन शुक्ल एकादशी, <strong>शुक्रवार दिनांक 27-02-2026</strong> के दिन निर्धारित किया गया है। अत: इस शुभ अवसर पर पधारने के लिए हमारा भावभीना निमंत्रण है।",
      "program_title": "दिव्य कार्यक्रम",
      "puja_label": "ध्वजाजी पूजा",
      "puja_time": "26-02-2026, शाम 05:00 बजे",
      "shobhayatra_label": "ध्वजाजी शोभायात्रा",
      "shobhayatra_time": "26-02-2026, शाम 06:30 बजे",
      "sangeet_label": "रास गरबा एवं संगीत संध्या",
      "sangeet_time": "26-02-2026, रात 08:00 बजे",
      "prasadi_label": "ध्वजा प्रभु प्रसादी",
      "prasadi_time": "26-02-2026, रात 08:30 बजे",
      "aarohan_label": "ध्वजाजी आरोहણ",
      "aarohan_time": "27-02-2026, सुबह 07:30 बजे",
      "prasadi2_label": "ध्वजा प्रभु प्रसादी",
      "prasadi2_time": "27-02-2026, दोपहर 12:00 बजे",
      "inviter_title": "निमंत्रक",
      "inviter_names": "श्रीमती भानुबेन अशोकभाई चावडा | श्री अशोकभाई घेलाभाई चाવડા\nश्रीमती हिरल सुनील कुमार | श्री सुनील कुमार\nश्रीमती यारिट्ज़ा (स्काई) मितेश चावडा | श्री मितेश अशोकभाई चावडा\nदिया, सोनम, अवनी, आर्या",
      "location_title": "महा प्रसाद एवं ध्वजाजी पूजा स्थल",
      "location_address": "वांजा दर्जी ज्ञाति नी वाडी, शाक मार्केट के पास, द्वारका, गुजरात, भारत",
      "temple_location_btn": "द्वारकाधीश मंदिर",
      "venue_location_btn": "प्रसाद एवं स्थल",
      "whatsapp_message": "जय द्वारकाधीश",
      "family_name": "चावडा परिवार"
    }
  },
  gu: {
    translation: {
      "invitation_title": "દિવ્ય ધ્વજાજી આરોહણ મહોત્સવ",
      "ganesh_namah": "|| શ્રી ગણેશાય નમઃ ||",
      "jai_dwarkadhish": "|| જય દ્વારકાધીશ ||",
      "event_title": "શ્રી દિવ્ય ધ્વજાજી આરોહણ",
      "date_label": "તા. ૨૭-૦૨-૨૦૨૬, શુક્રવાર",
      "description": "અમારા કુળદેવી <strong>શ્રી ચામુંડા માતાજી</strong> ના આશીર્વાદ તથા અમારા ગુરુજનો <strong>પરમ પૂજ્ય શરદભાઈ વ્યાસ</strong>, <strong>પરમ પૂજ્ય સ્વામી નલિનાનંદગિરિ મહારાજ</strong>ની અસીમ કૃપાથી <strong>શ્રી દ્વારકાધીશની ધ્વજારોહણ</strong> વિ. સંવત ૨૦૮૨ ફાગણ સુદ અગિયારસ ને <strong>તા. ૨૭-૦૨-૨૦૨૬, શુક્રવાર</strong> ના દિવસે નિર્ધારેલ છે. તો શુભ પ્રસંગે પધારવા અમારું ભાવભર્યું નિમંત્રણ છે.",
      "program_title": "દિવ્ય કાર્યક્રમો",
      "puja_label": "ધ્વજાજી પૂજા",
      "puja_time": "૨૬-૦૨-૨૦૨૬, સાંજે ૦૫:૦૦ કલાકે",
      "shobhayatra_label": "ધ્વજાજી શોભાયાત્રા",
      "shobhayatra_time": "૨૬-૦૨-૨૦૨૬, સાંજે ૦૬:૩૦ કલાકે",
      "sangeet_label": "રાસ ગરબા અને સંગીત સંધ્યા",
      "sangeet_time": "૨૬-૦૨-૨૦૨૬, રાત્રે ૦૮:૦૦ કલાકે",
      "prasadi_label": "ધ્વજા પ્રભુ પ્રસાદી",
      "prasadi_time": "૨૬-૦૨-૨૦૨૬, રાત્રે ૦૮:૩૦ કલાકે",
      "aarohan_label": "ધ્વજાજી આરોહણ",
      "aarohan_time": "૨૭-૦૨-૨૦૨૬, સવારે ૦૭:૩૦ કલાકે",
      "prasadi2_label": "ધ્વજા પ્રભુ પ્રસાદી",
      "prasadi2_time": "૨૭-૦૨-૨૦૨૬, બપોરે ૧૨:૦૦ કલાકે",
      "inviter_title": "નિમંત્રક",
      "inviter_names": "શ્રીમતી ભાનુબેન અશોકભાઈ ચાવડા | શ્રી અશોકભાઈ ઘેલાભાઈ ચાવડા\nશ્રીમતી હીરલ સુનીલ કુમાર | શ્રી સુનીલ કુમાર\nશ્રીમતી યારિત્ઝા (સ્કાય) મિતેશ ચાવડા | શ્રી મિતેશ અશોકભાઈ ચાવડા\nદિયા, સોનમ, અવાની, આર્યા",
      "location_title": "મહા પ્રસાદ અને ધ્વજાજી પૂજા સ્થળ",
      "location_address": "વાંજા દરજી જ્ઞાતિ ની વાડી, શાક માર્કેટ પાસે, દ્વારકા, ગુજરાત, ભારત",
      "temple_location_btn": "દ્વારકાધીશ મંદિર",
      "venue_location_btn": "પ્રસાદ અને સ્થળ",
      "whatsapp_message": "જય દ્વારકાધીશ",
      "family_name": "ચાવડા પરિવાર"
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
