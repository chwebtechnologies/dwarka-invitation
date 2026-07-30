import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "invitation_title": "Grand Opening of Dwarkesh Pan Lounge",
      "event_title": "DWARKESH PAN LOUNGE",
      "date_label": "01 August 2026",
      "scroll_text": "Scroll to Discover the Experience",
      
      // Vision Section
      "vision_title": "A New Era of Luxury",
      "vision_text": "Dwarkesh Pan Lounge introduces a completely new standard of taste and elegance to the city. Designed for the modern connoisseur, we bring together the finest ingredients, masterful craftsmanship, and an unparalleled ambiance. Experience the ultimate fusion of authentic flavors and contemporary luxury.",
      
      // Details Section
      "program_title": "Event Details",
      "date_label_box": "Date",
      "date_text": "SATURDAY<br/>01 August 2026",
      "time_label_box": "Time",
      "time_text": "07:30 AM<br/>ONWARDS",
      "venue_label_box": "Venue",
      "venue_text": "GF/35, Rudra Near<br/>Judges Bunglows, Ahmedabad",
      
      // Inviter Section
      "inviter_title": "With Warm Regards",
      "protocol_text": "We are looking forward to celebrating this special moment with you.",
      "family_name": "The Dwarkesh Family",
      
      // Map
      "location_title": "Location Map",
      
      // Outro
      "jai_dwarkadhish": "|| Jay Dwarkadhish ||",
      "whatsapp_message": "Hello, I am reaching out regarding the Grand Opening!"
    }
  },
  hi: {
    translation: {
      "invitation_title": "द्वारकेश पान लाउंज का भव्य उद्घाटन",
      "event_title": "द्वारकेश पान लाउंज",
      "date_label": "01 अगस्त 2026",
      "scroll_text": "अनुभव को खोजने के लिए स्क्रॉल करें",
      
      "vision_title": "विलासिता का नया युग",
      "vision_text": "द्वारकेश पान लाउंज शहर में स्वाद और लालित्य का एक पूरी तरह से नया मानक पेश कर रहा है। आधुनिक पारखी लोगों के लिए डिज़ाइन किया गया, हम बेहतरीन सामग्री, शानदार शिल्प कौशल और एक अद्वितीय माहौल लेकर आए हैं। प्रामाणिक स्वादों और समकालीन विलासिता के बेहतरीन संगम का अनुभव करें।",
      
      "program_title": "कार्यक्रम का विवरण",
      "date_label_box": "दिनांक",
      "date_text": "शनिवार<br/>01 अगस्त 2026",
      "time_label_box": "समय",
      "time_text": "सुबह 07:30 बजे<br/>से",
      "venue_label_box": "स्थान",
      "venue_text": "GF/35, रुद्रा, जजेस बंगलो के पास,<br/>अहमदाबाद",
      
      "inviter_title": "सादर",
      "protocol_text": "हम आपके साथ इस खास पल का जश्न मनाने के लिए उत्सुक हैं।",
      "family_name": "द्वारकेश परिवार",
      
      "location_title": "स्थान मानचित्र",
      
      "jai_dwarkadhish": "|| जय द्वारकाधीश ||",
      "whatsapp_message": "नमस्ते, मैं भव्य उद्घाटन के संबंध में संपर्क कर रहा हूँ।"
    }
  },
  gu: {
    translation: {
      "invitation_title": "દ્વારકેશ પાન લાઉન્જનું ભવ્ય ઉદ્ઘાટન",
      "event_title": "દ્વારકેશ પાન લાઉન્જ",
      "date_label": "૦૧ ઓગસ્ટ ૨૦૨૬",
      "scroll_text": "અનુભવ માણવા નીચે સ્ક્રોલ કરો",
      
      "vision_title": "વૈભવનો નવો યુગ",
      "vision_text": "દ્વારકેશ પાન લાઉન્જ શહેરમાં સ્વાદ અને વૈભવના એક નવા યુગની શરૂઆત કરી રહ્યું છે. આધુનિક શોખીનો માટે તૈયાર કરાયેલ, અમે શ્રેષ્ઠ સામગ્રી, ઉત્તમ કલા કારીગરી અને અજોડ વાતાવરણ લઈને આવ્યા છીએ. વાસ્તવિક સ્વાદ અને સમકાલીન સુંદરતાના અદભુત સંગમનો અનુભવ કરો.",
      
      "program_title": "કાર્યક્રમની વિગત",
      "date_label_box": "તારીખ",
      "date_text": "શનિવાર<br/>૦૧ ઓગસ્ટ ૨૦૨૬",
      "time_label_box": "સમય",
      "time_text": "સવારે ૦૭:૩૦<br/>કલાકથી",
      "venue_label_box": "સ્થળ",
      "venue_text": "GF/૩૫, રુદ્રા, જજીસ બંગલો પાસે,<br/>અમદાવાદ",
      
      "inviter_title": "લિ.",
      "protocol_text": "અમે આ ખાસ ક્ષણની તમારી સાથે ઉજવણી કરવા આતુર છીએ.",
      "family_name": "દ્વારકેશ પરિવાર",
      
      "location_title": "સ્થળ નકશો",
      
      "jai_dwarkadhish": "|| જય દ્વારકાધીશ ||",
      "whatsapp_message": "નમસ્તે, હું ભવ્ય ઉદ્ઘાટન અંગે સંપર્ક કરી રહ્યો છું."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
