import { LanguageCode } from '../types';

export interface TranslationStrings {
  officialBanner: string;
  officialBannerDetails: string;
  howYouKnow: string;
  secureGovNotice: string;
  httpsNotice: string;
  services: string;
  trackApplication: string;
  payBills: string;
  council: string;
  report311: string;
  directory: string;
  emergencyHotline: string;
  nonEmergencyHotline: string;
  heroHeading: string;
  heroSubheading: string;
  searchPlaceholder: string;
  quickActions: string;
  allServices: string;
  applyPermit: string;
  trackPermit: string;
  payTaxes: string;
  scheduleAppointment: string;
  contactAssistance: string;
}

export const translations: Record<LanguageCode, TranslationStrings> = {
  en: {
    officialBanner: "An official website of the City & County Government",
    officialBannerDetails: "Here's how you know",
    howYouKnow: "Official websites use .gov. A .gov website belongs to an official government organization in the United States.",
    secureGovNotice: "Secure .gov websites use HTTPS. Look for a lock or https:// to ensure you are connecting securely.",
    httpsNotice: "All citizen transactions are protected by 256-bit encryption.",
    services: "Public Services",
    trackApplication: "Track Status",
    payBills: "Pay Taxes & Fees",
    council: "City Council & Agendas",
    report311: "311 Service Request",
    directory: "Department Directory",
    emergencyHotline: "Emergency: 911",
    nonEmergencyHotline: "City Helpdesk: 311",
    heroHeading: "Serving the Residents of Fairview County",
    heroSubheading: "Access public services, permits, property records, municipal hearings, and official citizen resources securely.",
    searchPlaceholder: "Search for services, permits, parcel IDs, public records...",
    quickActions: "Priority Citizen Services",
    allServices: "Explore All Department Services",
    applyPermit: "Apply for Permit",
    trackPermit: "Check Status",
    payTaxes: "Pay Property Tax",
    scheduleAppointment: "Book Appointment",
    contactAssistance: "Contact Civic Assistance",
  },
  es: {
    officialBanner: "Sitio web oficial del Gobierno de la Ciudad y el Condado",
    officialBannerDetails: "Cómo saber que es oficial",
    howYouKnow: "Los sitios web oficiales usan .gov. Un sitio .gov pertenece a una organización gubernamental oficial.",
    secureGovNotice: "Los sitios seguros usan HTTPS. Busque el candado para asegurarse de que navega de forma segura.",
    httpsNotice: "Todas las transacciones ciudadanas están protegidas con cifrado de 256 bits.",
    services: "Servicios Públicos",
    trackApplication: "Consultar Trámite",
    payBills: "Pagar Impuestos y Tarifas",
    council: "Concejo Municipal y Agendas",
    report311: "Reportes Ciudadanos 311",
    directory: "Directorio de Departamentos",
    emergencyHotline: "Emergencias: 911",
    nonEmergencyHotline: "Atención Ciudadana: 311",
    heroHeading: "Al servicio de los ciudadanos del Condado de Fairview",
    heroSubheading: "Acceda a trámites de permisos, registros de propiedad, audiencias públicas y servicios oficiales de forma segura.",
    searchPlaceholder: "Buscar servicios, trámites, impuestos, actas públicas...",
    quickActions: "Servicios Ciudadanos Prioritarios",
    allServices: "Explorar Todos los Servicios",
    applyPermit: "Solicitar Permiso",
    trackPermit: "Estado de Solicitud",
    payTaxes: "Pagar Impuesto Predial",
    scheduleAppointment: "Reservar Cita",
    contactAssistance: "Asistencia Ciudadana",
  },
  zh: {
    officialBanner: "费尔维尤市与县官方政务网站",
    officialBannerDetails: "如何识别官方网站",
    howYouKnow: "官方网站使用 .gov 域名，代表经官方认证的政府组织机构。",
    secureGovNotice: "安全政府网站使用 HTTPS 加密，请确认浏览器地址栏的安全锁标识。",
    httpsNotice: "所有公众业务办理均受 256 位安全传输加密保护。",
    services: "公共服务",
    trackApplication: "办理进度查询",
    payBills: "缴纳税款与规费",
    council: "市议会与议程",
    report311: "311 市民热线申报",
    directory: "市政部门通讯录",
    emergencyHotline: "紧急报警: 911",
    nonEmergencyHotline: "市政便民: 311",
    heroHeading: "竭诚为费尔维尤市民与企业服务",
    heroSubheading: "安全办理建筑许可、不动产税款缴纳、公共档案查询及预约政务办事窗口。",
    searchPlaceholder: "搜索政务服务、许可编号、地块信息、公共记录...",
    quickActions: "高频便民服务",
    allServices: "查看全部市政业务",
    applyPermit: "申请行政许可",
    trackPermit: "办事进度追踪",
    payTaxes: "房产税在线缴纳",
    scheduleAppointment: "预约政务窗口",
    contactAssistance: "政务便民咨询",
  },
  fr: {
    officialBanner: "Un site officiel du gouvernement municipal et de comté",
    officialBannerDetails: "Comment le vérifier",
    howYouKnow: "Les sites officiels utilisent .gov. Un domaine .gov appartient à un organisme public officiel.",
    secureGovNotice: "Les sites sécurisés utilisent HTTPS. Vérifiez l'icône de cadenas pour naviguer en toute sécurité.",
    httpsNotice: "Toutes les démarches citoyennes sont protégées par chiffrement 256 bits.",
    services: "Services Publics",
    trackApplication: "Suivi de Dossier",
    payBills: "Payer Taxes & Redevances",
    council: "Conseil Municipal & Ordres du Jour",
    report311: "Signalement 311",
    directory: "Annuaire des Services",
    emergencyHotline: "Urgences: 911",
    nonEmergencyHotline: "Assistance Municipale: 311",
    heroHeading: "Au service des résidents du comté de Fairview",
    heroSubheading: "Accédez en toute sécurité aux démarches administratives, impôts fonciers, permis et archives officielles.",
    searchPlaceholder: "Rechercher un service, un permis, un cadastre...",
    quickActions: "Démarches Prioritaires",
    allServices: "Consulter Tous les Services",
    applyPermit: "Demander un Permis",
    trackPermit: "Suivre une Demande",
    payTaxes: "Payer Taxe Foncière",
    scheduleAppointment: "Prendre Rendez-vous",
    contactAssistance: "Assistance Citoyenne",
  },
  vi: {
    officialBanner: "Trang web chính thức của Chính quyền Thành phố và Quận",
    officialBannerDetails: "Cách nhận biết trang chính thức",
    howYouKnow: "Các trang web chính thức sử dụng tên miền .gov thuộc tổ chức chính quyền.",
    secureGovNotice: "Các trang web an toàn sử dụng HTTPS. Hãy tìm biểu tượng ổ khóa bảo mật.",
    httpsNotice: "Mọi giao dịch của người dân đều được mã hóa an toàn 256-bit.",
    services: "Dịch vụ Công",
    trackApplication: "Tra cứu Hồ sơ",
    payBills: "Nộp Thuế & Lệ phí",
    council: "Hội đồng & Lịch họp",
    report311: "Phản ánh Dân sinh 311",
    directory: "Danh bạ Ban ngành",
    emergencyHotline: "Khẩn cấp: 911",
    nonEmergencyHotline: "Đường dây 311",
    heroHeading: "Phục vụ Cư dân & Doanh nghiệp Hạt Fairview",
    heroSubheading: "Thực hiện cấp phép xây dựng, nộp thuế tài sản, tra cứu hồ sơ và đặt hẹn hành chính trực tuyến.",
    searchPlaceholder: "Tìm kiếm dịch vụ, giấy phép, mã số đất đai...",
    quickActions: "Dịch vụ Nổi bật",
    allServices: "Xem tất cả dịch vụ",
    applyPermit: "Nộp hồ sơ cấp phép",
    trackPermit: "Kiểm tra tiến độ",
    payTaxes: "Nộp thuế nhà đất",
    scheduleAppointment: "Đặt hẹn làm việc",
    contactAssistance: "Hỗ trợ công dân",
  },
};
