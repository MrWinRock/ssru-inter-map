import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    th: {
        translation: {
            "title": "แผนที่แบบโต้ตอบ.",
            "buildings": "อาคาร",
            "area": "เขตพื้นที่",
            "building": "อาคาร",
            "reset": "รีเซ็ต",
            "contact": "ติดต่อ",
            "university_name": "มหาวิทยาลัยราชภัฏสวนสุนันทา",
            "university_address": "1 ถนนอู่ทองนอก ดุสิต กรุงเทพฯ 10300",
            "language": "ภาษา",
            "thai": "ไทย",
            "english": "อังกฤษ",
            "chinese": "จีน",
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
            "university_name": "SUAN SUAN‑SUNANDHA RAJABHAT UNIVERSITY",
            "university_address": "1 U‑Thong Nok Road, Dusit, Bangkok 10300 Thailand",
            "language": "Language",
            "thai": "Thai",
            "english": "English",
            "chinese": "Chinese",
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
            "title": "素攀孙他皇家大学互动地图",
            "buildings": "建筑物",
            "area": "区域",
            "building": "建筑",
            "reset": "重置",
            "contact": "联系",
            "university_name": "素攀孙他皇家大学",
            "university_address": "泰国曼谷都实区乌通诺路1号 10300",
            "language": "语言",
            "thai": "泰语",
            "english": "英语",
            "chinese": "中文",
            "buildings_data": {
                "11": {
                    "title": "甘纳帕蓬·披帕建筑",
                    "content": "教育学院"
                },
                "12": {
                    "title": "尼拉塔纳通建筑",
                    "content": "示范学校英语项目"
                },
                "13": {
                    "title": "帕春蓬索平建筑",
                    "content": "示范中学"
                },
                "14": {
                    "title": "示范中学建筑（中学）",
                    "content": "示范中学"
                },
                "15": {
                    "title": "示范中学建筑（中学）",
                    "content": "示范中学"
                },
                "16": {
                    "title": "示范小学建筑",
                    "content": "示范小学"
                },
                "17": {
                    "title": "素南塔努颂礼堂",
                    "content": ""
                },
                "21": {
                    "title": "诗朱达帕建筑",
                    "content": "研究生院"
                },
                "22": {
                    "title": "查达玛·拉贾·席帕·萨杜迪建筑",
                    "content": "科学技术学院"
                },
                "23": {
                    "title": "科学与技术学院",
                    "content": ""
                },
                "24": {
                    "title": "玛丽尼·诺布哈达拉建筑",
                    "content": ""
                },
                "25": {
                    "title": "萨达本迪·恰得卡森建筑",
                    "content": "家政学院"
                },
                "26": {
                    "title": "科学中心建筑",
                    "content": ""
                },
                "27": {
                    "title": "赛素达纳帕东建筑",
                    "content": "艺术文化办公室"
                },
                "31": {
                    "title": "信息与科技中心建筑",
                    "content": "信息技术中心"
                },
                "32": {
                    "title": "班查玛拉·班纳松建筑",
                    "content": "校长办公室"
                },
                "33": {
                    "title": "查勒姆普拉吉拉特建筑",
                    "content": "学术资源与信息技术（图书馆）楼"
                },
                "34": {
                    "title": "教育创新与科技建筑",
                    "content": ""
                },
                "35": {
                    "title": "尼帕·诺布哈达拉建筑",
                    "content": "人文与社会科学学院"
                },
                "36": {
                    "title": "美术与应用艺术学院建筑",
                    "content": ""
                },
                "37": {
                    "title": "赫姆瓦迪·披塔建筑",
                    "content": ""
                },
                "38": {
                    "title": "沃拉克萨南农建筑",
                    "content": ""
                },
                "41": {
                    "title": "萨西蓬塞普赖建筑",
                    "content": "研究与发展所"
                },
                "42": {
                    "title": "工业技术学院建筑",
                    "content": ""
                },
                "43": {
                    "title": "工业技术学院办公楼",
                    "content": ""
                },
                "44": {
                    "title": "比斯迈·比玛拉亚萨塔雅建筑",
                    "content": ""
                },
                "45": {
                    "title": "朱塔拉塔纳邦建筑",
                    "content": ""
                },
                "46": {
                    "title": "阿通迪巴雅尼瓦萨建筑",
                    "content": ""
                },
                "47": {
                    "title": "多媒体技术操作中心建筑",
                    "content": ""
                },
                "51": {
                    "title": "阿旺阿查瓦·潭塔瓦拉雅",
                    "content": ""
                },
                "54": {
                    "title": "王素攀孙他酒店",
                    "content": ""
                },
                "55": {
                    "title": "卡赛辛瑟姆萨特建筑",
                    "content": ""
                },
                "56": {
                    "title": "苏瓦巴克特拉尼维萨建筑",
                    "content": ""
                },
                "57": {
                    "title": "苏瓦巴克特拉尼维萨建筑",
                    "content": ""
                },
                "58": {
                    "title": "美术与应用艺术学院建筑",
                    "content": ""
                },
                "59": {
                    "title": "王素攀孙他酒店（第2区）",
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