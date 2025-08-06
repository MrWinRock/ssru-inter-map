import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    th: {
        translation: {
            "title": "แผนที่แบบโต้ตอบ",
            "buildings": "อาคาร",
            "area": "เขตพื้นที่",
            "building": "อาคาร",
            "reset": "รีเซ็ต",
            "contact": "ติดต่อ",
            "university_name": "มหาวิทยาลัยราชภัฏสวนสุนันทา",
            "university_address": "1 ถนนอู่ทองนอก ดุสิต กรุงเทพฯ 10300",
            "language": "ภาษา",
            "thai": "ไทย",
            "english": "English",
            "chinese": "中文",
            "buildings_data": {
                "11": {
                    "title": "อาคารกรรณาภรณ์พิพัฒน์",
                    "content": "คณะครุศาสตร์"
                },
                "12": {
                    "title": "อาคารนิลรัตนาทร",
                    "content": "โปรแกรมวิชาภาษาต่างประเทศ"
                },
                "13": {
                    "title": "อาคารประชุมพรโสภิณ",
                    "content": "มัธยมสาธิต"
                },
                "14": {
                    "title": "อาคารมัธยมสาธิต",
                    "content": "มัธยมสาธิต"
                },
                "15": {
                    "title": "อาคารมัธยมสาธิต",
                    "content": "มัธยมสาธิต"
                },
                "16": {
                    "title": "อาคารประถมสาธิต",
                    "content": "ประถมสาธิต"
                },
                "17": {
                    "title": "อาคารหอประชุมสุนันทานุสรณ์,ศูนย์อาหารและศูนย์หนังสือ",
                    "content": ""
                },
                "21": {
                    "title": "อาคารศรีจุฑาภา",
                    "content": "บัณฑิตศึกษาศูนย์คอมพิวเตอร์"
                },
                "22": {
                    "title": "อาคารดัฐมราชศิลปสดุดี",
                    "content": "คณะวิทยาศาสตร์และเทคโนโลยี"
                },
                "23": {
                    "title": "อาคารวิทยาศาสตร์และสิ่งแวดล้อม",
                    "content": "คณะวิทยาศาสตร์และเทคโนโลยี"
                },
                "24": {
                    "title": "อาคารมาลินีนกดารา",
                    "content": "อาคารประถมเก่า"
                },
                "25": {
                    "title": "อาคารสดับสนธิ์เดียดเกษม",
                    "content": "โปรแกรมวิชาคหกรรมศาสตร์"
                },
                "26": {
                    "title": "อาคารศูนย์วิทยาศาสตร์",
                    "content": "คณะวิทยาศาสตร์และเทคโนโลยี"
                },
                "27": {
                    "title": "อาคารสายสุทรานภดล",
                    "content": "สำนักศิลปวัฒนธรรม"
                },
                "31": {
                    "title": "อาคารหอประชุมช่อแก้ว",
                    "content": ""
                },
                "32": {
                    "title": "อาคารปัญจมราชบรรณาศรม",
                    "content": "สำนักวิทยบริการ"
                },
                "33": {
                    "title": "อาคารเฉลิมพระเกียรติฯ",
                    "content": "สำนักวิทยบริการ"
                },
                "34": {
                    "title": "อาคารเทคโนโลยีและนวัตกรรมทางการศึกษา",
                    "content": "สำนักวิทยบริการ"
                },
                "35": {
                    "title": "อาคารนิภานดล",
                    "content": "คณะมนุษยศาสตร์, อาคารเรียนรวม"
                },
                "36": {
                    "title": "อาคารศิลปกรรม",
                    "content": ""
                },
                "37": {
                    "title": "อาคารเหมวดีพิทักษ์",
                    "content": "สำนักงานอธิการบดี"
                },
                "38": {
                    "title": "อาคารลักษณานงค์",
                    "content": "อาคารพลศึกษา"
                },
                "39": {
                    "title": "อาคารศูนย์สุขภาพและสระว่ายน้ำ",
                    "content": ""
                },
                "41": {
                    "title": "อาคารศศิพงษ์ประไพ",
                    "content": "สำนักกิจการนักศึกษา"
                },
                "42": {
                    "title": "อาคารคณะเทคโนโลยีอุตสาหกรรม",
                    "content": ""
                },
                "43": {
                    "title": "อาคารสำนักงานคณะเทคโนโลยีอุตสาหกรรม",
                    "content": ""
                },
                "44": {
                    "title": "อาคารพิศมัยพิมลสัตย์",
                    "content": ""
                },
                "45": {
                    "title": "อาคารจุธารัตนาภรณ์",
                    "content": "โปรแกรมวิชาดนตรี"
                },
                "46": {
                    "title": "อาคารอาทรทิพยนิวาส",
                    "content": "คณะศิลปกรรมศาสตร์"
                },
                "47": {
                    "title": "อาคารศูนย์ปฏิบัติการเทคโนโลยีการพิมพ์",
                    "content": ""
                },
                "51": {
                    "title": "อาคารเอื้ออาชว์แถมถวัลย์",
                    "content": ""
                },
                "52": {
                    "title": "7-11",
                    "content": ""
                },
                "53": {
                    "title": "อาคารอรประพันธ์อดิศัยศักดิ์",
                    "content": "โปรแกรมวิชานาฎศิลป์"
                },
                "54": {
                    "title": "อาคารโรงแรมแก้วเจ้าจอม",
                    "content": ""
                },
                "55": {
                    "title": "อาคารเกษตรสินตเสริมศาสตร์",
                    "content": ""
                },
                "56": {
                    "title": "อาคารสุวภักตร์นิเวศน์",
                    "content": "คณะการจัดการ"
                },
                "57": {
                    "title": "อาคารสุวภักตร์นิเวศน์",
                    "content": "คณะการจัดการใหม่"
                },
                "58": {
                    "title": "อาคารคณะศิลปกรรมศาสตร์",
                    "content": ""
                }
            }
        }
    },
    en: {
        translation: {
            "title": "SSRU Interactive Map",
            "buildings": "Buildings",
            "area": "Area",
            "building": "Building",
            "reset": "Reset",
            "contact": "Contact",
            "university_name": "SUAN SUNANDHA RAJABHAT UNIVERSITY",
            "university_address": "1 U‑Thong Nok Road, Dusit, Bangkok 10300 Thailand",
            "language": "Language",
            "thai": "ไทย",
            "english": "English",
            "chinese": "中文",
            "buildings_data": {
                "11": {
                    "title": "Kannabhornbhibhat Building",
                    "content": "Faculty of Education"
                },
                "12": {
                    "title": "Nillarattanadorn Building",
                    "content": "English Program of Demonstration School"
                },
                "13": {
                    "title": "Prachumponsopin Building",
                    "content": "Demonstration School (secondary)"
                },
                "14": {
                    "title": "Demonstration School Building (secondary)",
                    "content": "Demonstration School (secondary)"
                },
                "15": {
                    "title": "Demonstration School Building (secondary)",
                    "content": "Demonstration School (secondary)"
                },
                "16": {
                    "title": "Demonstration School Building (elementary)",
                    "content": "Demonstration School (elementary)"
                },
                "17": {
                    "title": "Sunandhanusorn Hall",
                    "content": ""
                },
                "21": {
                    "title": "Srichudhabha Building",
                    "content": "The Graduate School"
                },
                "22": {
                    "title": "Chaddhama Raja Silapa Sadudee Building",
                    "content": ""
                },
                "23": {
                    "title": "Faculty of Sciences and Technology",
                    "content": ""
                },
                "24": {
                    "title": "Malini Nobhadara Building",
                    "content": ""
                },
                "25": {
                    "title": "Sadabsondhi Chiad Kasem Building",
                    "content": "Home Economics Building"
                },
                "26": {
                    "title": "Science Center",
                    "content": ""
                },
                "27": {
                    "title": "Sai Suddha Nobhadol Building",
                    "content": "Office of Arts and Culture"
                },
                "31": {
                    "title": "LIPC and Computer Building",
                    "content": "Information Technology Center"
                },
                "32": {
                    "title": "Banjama Raja Bannasom Building",
                    "content": "Office of the President"
                },
                "33": {
                    "title": "Chalerm Prakiat Building",
                    "content": "Academic Resource and Information Technology (Library) Building"
                },
                "34": {
                    "title": "Education Innovation and Technology Building",
                    "content": ""
                },
                "35": {
                    "title": "Nibha Nobhadol Building",
                    "content": "Faculty of Humanities and Social Sciences"
                },
                "36": {
                    "title": "Faculty of Fine and Applied Arts",
                    "content": ""
                },
                "37": {
                    "title": "Hemvadibhithug Building",
                    "content": ""
                },
                "38": {
                    "title": "Voralaksananong Building",
                    "content": ""
                },
                "41": {
                    "title": "Sasibongse Prabai Building",
                    "content": "Institute of Research and Development"
                },
                "42": {
                    "title": "Faculty of Industrial Technology",
                    "content": ""
                },
                "43": {
                    "title": "Office of Faculty of Industrial Technology",
                    "content": ""
                },
                "44": {
                    "title": "Bismai Bimalayasataya Building",
                    "content": ""
                },
                "45": {
                    "title": "Chudharatanabhorn Building",
                    "content": ""
                },
                "46": {
                    "title": "Adorndibayanivasa Building",
                    "content": ""
                },
                "47": {
                    "title": "Multimedia Technology Operation Building",
                    "content": ""
                },
                "51": {
                    "title": "Auan Achava Tamtawalaya",
                    "content": ""
                },
                "54": {
                    "title": "The Wang Suan Sunandha Hotel",
                    "content": ""
                },
                "55": {
                    "title": "Kasetsinsermsat Building",
                    "content": ""
                },
                "56": {
                    "title": "Suvabaktranivesa Building",
                    "content": ""
                },
                "57": {
                    "title": "Suvabaktranivesa Building",
                    "content": ""
                },
                "58": {
                    "title": "Faculty of Fine and Applied Arts Building",
                    "content": ""
                },
                "59": {
                    "title": "The Wang Suan Sunandha Hotel (Area 2)",
                    "content": ""
                }
            }
        }
    },
    zh: {
        translation: {
            "title": "素攀武里皇家大学互动地图",
            "buildings": "建筑物",
            "area": "区域",
            "building": "建筑",
            "reset": "重置",
            "contact": "联系我们",
            "university_name": "泰国宣素那他皇家大学",
            "university_address": "泰国曼谷都实区乌通诺路1号 10300",
            "language": "语言",
            "thai": "ไทย",
            "english": "English",
            "chinese": "中文",
            "buildings_data": {
                "11": {
                    "title": "甘纳蓬披帕楼",
                    "content": "教育学院"
                },
                "12": {
                    "title": "尼拉塔纳通楼",
                    "content": "外语课程项目"
                },
                "13": {
                    "title": "帕冲蓬索宾楼",
                    "content": "示范中学"
                },
                "14": {
                    "title": "示范中学楼",
                    "content": "示范中学"
                },
                "15": {
                    "title": "示范中学楼",
                    "content": "示范中学"
                },
                "16": {
                    "title": "示范小学楼",
                    "content": "示范小学"
                },
                "17": {
                    "title": "苏南塔努颂礼堂、餐饮中心与图书中心",
                    "content": ""
                },
                "21": {
                    "title": "希朱达帕楼",
                    "content": "研究生院与计算机中心"
                },
                "22": {
                    "title": "达玛拉查艺术纪念楼",
                    "content": "科学技术学院"
                },
                "23": {
                    "title": "科学与环境楼",
                    "content": "科学技术学院"
                },
                "24": {
                    "title": "玛琳妮诺帕达拉楼",
                    "content": "旧小学楼"
                },
                "25": {
                    "title": "萨达颂迪迪雅格森楼",
                    "content": "家政学课程"
                },
                "26": {
                    "title": "科学中心楼",
                    "content": "科学技术学院"
                },
                "27": {
                    "title": "赛苏达纳帕东楼",
                    "content": "文化艺术办公室"
                },
                "31": {
                    "title": "昭告会议厅",
                    "content": ""
                },
                "32": {
                    "title": "潘查玛拉班纳松楼",
                    "content": "学术资源办公室"
                },
                "33": {
                    "title": "崇圣纪念楼",
                    "content": "学术资源办公室"
                },
                "34": {
                    "title": "教育技术与创新楼",
                    "content": "学术资源办公室"
                },
                "35": {
                    "title": "尼帕纳东楼",
                    "content": "人文学院、综合教学楼"
                },
                "36": {
                    "title": "艺术学院楼",
                    "content": ""
                },
                "37": {
                    "title": "汉瓦迪披塔楼",
                    "content": "校长办公室"
                },
                "38": {
                    "title": "沃拉纳南楼",
                    "content": "体育教学楼"
                },
                "39": {
                    "title": "健康中心与游泳池",
                    "content": ""
                },
                "41": {
                    "title": "萨西蓬帕莱楼",
                    "content": "学生事务办公室"
                },
                "42": {
                    "title": "工业技术学院楼",
                    "content": ""
                },
                "43": {
                    "title": "工业技术学院办公室",
                    "content": ""
                },
                "44": {
                    "title": "比斯迈披玛拉萨塔亚楼",
                    "content": ""
                },
                "45": {
                    "title": "朱达拉塔纳蓬楼",
                    "content": "音乐课程项目"
                },
                "46": {
                    "title": "阿通迪巴尼瓦楼",
                    "content": "艺术学院"
                },
                "47": {
                    "title": "印刷技术实践中心",
                    "content": ""
                },
                "51": {
                    "title": "奥阿察塔塔瓦拉亚楼",
                    "content": ""
                },
                "52": {
                    "title": "7-11便利店",
                    "content": ""
                },
                "53": {
                    "title": "奥帕拉潘阿迪萨萨克楼",
                    "content": "舞蹈艺术课程"
                },
                "54": {
                    "title": "王宫宝石酒店",
                    "content": ""
                },
                "55": {
                    "title": "农业技术推广楼",
                    "content": ""
                },
                "56": {
                    "title": "苏瓦帕尼威楼",
                    "content": "管理学院"
                },
                "57": {
                    "title": "苏瓦帕尼威楼",
                    "content": "新管理学院"
                },
                "58": {
                    "title": "艺术学院楼",
                    "content": ""
                }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'th',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
        },
    });

export default i18n;