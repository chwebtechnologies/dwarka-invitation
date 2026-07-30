import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "invitation_title": "Grand Opening of Dwarkesh Pan Lounge",
      "ganesh_namah": "|| Shree Ganeshay Namah ||",
      "jai_dwarkadhish": "|| Jay Dwarkadhish ||",
      "event_title": "DWARKESH PAN LOUNGE",
      "date_label": "01 August 2026, Saturday",
      "description": "<div style=\"font-family: var(--font-main); line-height: 1.8; color: var(--text-color); text-align: center; max-width: 700px; margin: auto;\"><p style=\"font-size: 16px; letter-spacing: 2px; text-transform: uppercase;\">We are excited to</p><p style=\"font-size: 42px; margin: 5px 0; font-family: var(--font-decorative); color: var(--primary-color); letter-spacing: 4px;\">OPEN</p><p style=\"font-size: 16px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 30px;\">Our doors to a new beginning</p><p style=\"font-size: 18px;\">We warmly invite you and your family to join us as we celebrate the grand opening of <strong>Dwarkesh Pan Lounge</strong>.</p></div>",
      "program_title": "Event Details",
      "date_label_box": "Date",
      "date_text": "SATURDAY<br/>01 August 2026",
      "time_label_box": "Time",
      "time_text": "07:30 AM<br/>ONWARDS",
      "venue_label_box": "Venue",
      "venue_text": "GF/35, Rudra Near<br/>Judges Bunglows, Ahmedabad",
      "inviter_title": "With Warm Regards",
      "inviter_names": [
        { "type": "header-small", "text": "We are looking forward to celebrating this special moment with you." },
        { "type": "spacing" },
        { "type": "couple-highlight", "text": "The Dwarkesh Family" }
      ],
      "location_title": "Location Map",
      "location_address": "GF/35, Rudra Near Judges Bunglows, Ahmedabad",
      "venue_location_btn": "Get Directions",
      "whatsapp_message": "Hello, regarding the Grand Opening!",
      "family_name": "The Dwarkesh Family"
    }
  },
  hi: {
    translation: {
      "invitation_title": "द्वारकेश पान लाउंज का भव्य उद्घाटन",
      "ganesh_namah": "|| श्री गणेशाय नमः ||",
      "jai_dwarkadhish": "|| जय द्वारकाधीश ||",
      "event_title": "द्वारकेश पान लाउंज",
      "date_label": "01 अगस्त 2026, शनिवार",
      "description": "<div style=\"font-family: var(--font-main); line-height: 1.8; color: var(--text-color); text-align: center; max-width: 700px; margin: auto;\"><p style=\"font-size: 16px; letter-spacing: 2px; text-transform: uppercase;\">हमें यह घोषणा करते हुए अत्यंत हर्ष हो रहा है कि हम</p><p style=\"font-size: 42px; margin: 5px 0; font-family: var(--font-decorative); color: var(--primary-color); letter-spacing: 4px;\">उद्घाटन</p><p style=\"font-size: 16px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 30px;\">करने जा रहे हैं</p><p style=\"font-size: 18px;\">हम आपको और आपके परिवार को <strong>द्वारकेश पान लाउंज</strong> के भव्य उद्घाटन का जश्न मनाने के लिए सादर आमंत्रित करते हैं।</p></div>",
      "program_title": "कार्यक्रम का विवरण",
      "date_label_box": "दिनांक",
      "date_text": "शनिवार<br/>01 अगस्त 2026",
      "time_label_box": "समय",
      "time_text": "सुबह 07:30 बजे<br/>से",
      "venue_label_box": "स्थान",
      "venue_text": "GF/35, रुद्रा, जजेस बंगलो के पास,<br/>अहमदाबाद",
      "inviter_title": "सादर",
      "inviter_names": [
        { "type": "header-small", "text": "हम आपके साथ इस खास पल का जश्न मनाने के लिए उत्सुक हैं।" },
        { "type": "spacing" },
        { "type": "couple-highlight", "text": "द्वारकेश परिवार" }
      ],
      "location_title": "स्थान मानचित्र",
      "location_address": "GF/35, रुद्रा, जजेस बंगलो के पास, अहमदाबाद",
      "venue_location_btn": "दिशा-निर्देश प्राप्त करें",
      "whatsapp_message": "नमस्ते, भव्य उद्घाटन के संबंध में!",
      "family_name": "द्वारकेश परिवार"
    }
  },
  gu: {
    translation: {
      "invitation_title": "દ્વારકેશ પાન લાઉન્જનું ભવ્ય ઉદ્ઘાટન",
      "ganesh_namah": "|| શ્રી ગણેશાય નમઃ ||",
      "jai_dwarkadhish": "|| જય દ્વારકાધીશ ||",
      "event_title": "દ્વારકેશ પાન લાઉન્જ",
      "date_label": "૦૧ ઓગસ્ટ ૨૦૨૬, શનિવાર",
      "description": "<div style=\"font-family: var(--font-main); line-height: 1.8; color: var(--text-color); text-align: center; max-width: 700px; margin: auto;\"><p style=\"font-size: 16px; letter-spacing: 2px; text-transform: uppercase;\">અમને જણાવતા અત્યંત આનંદ થાય છે કે અમે એક નવી શરૂઆત માટે</p><p style=\"font-size: 42px; margin: 5px 0; font-family: var(--font-decorative); color: var(--primary-color); letter-spacing: 4px;\">ઉદ્ઘાટન</p><p style=\"font-size: 16px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 30px;\">કરવા જઈ રહ્યા છીએ</p><p style=\"font-size: 18px;\">અમે તમને અને તમારા પરિવારને <strong>દ્વારકેશ પાન લાઉન્જ</strong> ના ભવ્ય ઉદ્ઘાટનની ઉજવણીમાં જોડાવા હાર્દિક આમંત્રણ આપીએ છીએ.</p></div>",
      "program_title": "કાર્યક્રમની વિગત",
      "date_label_box": "તારીખ",
      "date_text": "શનિવાર<br/>૦૧ ઓગસ્ટ ૨૦૨૬",
      "time_label_box": "સમય",
      "time_text": "સવારે ૦૭:૩૦<br/>કલાકથી",
      "venue_label_box": "સ્થળ",
      "venue_text": "GF/૩૫, રુદ્રા, જજીસ બંગલો પાસે,<br/>અમદાવાદ",
      "inviter_title": "લિ.",
      "inviter_names": [
        { "type": "header-small", "text": "અમે આ ખાસ ક્ષણની તમારી સાથે ઉજવણી કરવા આતુર છીએ." },
        { "type": "spacing" },
        { "type": "couple-highlight", "text": "દ્વારકેશ પરિવાર" }
      ],
      "location_title": "સ્થળ નકશો",
      "location_address": "GF/૩૫, રુદ્રા, જજીસ બંગલો પાસે, અમદાવાદ",
      "venue_location_btn": "સ્થળ નકશો",
      "whatsapp_message": "નમસ્તે, ભવ્ય ઉદ્ઘાટન અંગે!",
      "family_name": "દ્વારકેશ પરિવાર"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Change default language to English for this design
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
