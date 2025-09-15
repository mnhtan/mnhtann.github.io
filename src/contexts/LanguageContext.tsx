import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('vi');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'vi' || savedLanguage === 'en')) {
            setLanguage(savedLanguage);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        const translations = {
            // Navigation
            'nav.home': {
                vi: 'Trang chủ',
                en: 'Home'
            },
            'nav.about': {
                vi: 'Giới thiệu',
                en: 'About'
            },
            'nav.skills': {
                vi: 'Kỹ năng',
                en: 'Skills'
            },
            'nav.projects': {
                vi: 'Dự án',
                en: 'Projects'
            },
            'nav.education': {
                vi: 'Học vấn',
                en: 'Education'
            },
            'nav.contact': {
                vi: 'Liên hệ',
                en: 'Contact'
            },

            // Hero Section
            'hero.greeting': {
                vi: 'Xin chào, tôi là',
                en: 'Hello, I am'
            },
            'hero.title': {
                vi: 'Data Engineer',
                en: 'Data Engineer'
            },
            'hero.subtitle': {
                vi: 'Thiết kế mô hình dữ liệu, ETL/ELT với dbt/Airflow, tối ưu SQL',
                en: 'Data modeling, ETL/ELT with dbt/Airflow, SQL optimization'
            },
            'hero.cta': {
                vi: 'Khám phá dự án',
                en: 'Explore Projects'
            },

            // About Section
            'about.title': {
                vi: 'Giới thiệu',
                en: 'About Me'
            },
            'about.subtitle': {
                vi: 'Về tôi',
                en: 'About Me'
            },
            'about.description': {
                vi: 'Tôi là Data Engineer tốt nghiệp ngành Khoa học Dữ liệu (HUFLIT). Tôi chuyên về data modeling (star/snowflake), dbt/Airflow, chất lượng dữ liệu và xây dựng data mart cho BI/Analytics/AI.',
                en: 'I am a Data Engineer, graduated in Data Science (HUFLIT). I specialize in data modeling (star/snowflake), dbt/Airflow, data quality and building data marts for BI/Analytics/AI.'
            },
            'about.intro': {
                vi: 'Tôi là Data Engineer, xây dựng nền tảng dữ liệu tin cậy từ thu thập tới data mart phục vụ BI/AI, ưu tiên tính ổn định, đo lường và chi phí.',
                en: 'I am a Data Engineer building reliable data platforms from ingestion to data marts for BI/AI, prioritizing stability, observability and cost.'
            },
            'about.experience.ai': {
                vi: 'Chuyên sâu về AI và Machine Learning',
                en: 'Specialized in AI and Machine Learning'
            },
            'about.experience.cv': {
                vi: 'Kinh nghiệm với Computer Vision và Data Mining',
                en: 'Experience with Computer Vision and Data Mining'
            },
            'about.experience.learning': {
                vi: 'Khả năng tự học và nghiên cứu cao',
                en: 'High self-learning and research ability'
            },
            'about.experience': {
                vi: 'Kinh nghiệm',
                en: 'Experience'
            },
            'about.education': {
                vi: 'Học vấn',
                en: 'Education'
            },
            'about.projects': {
                vi: 'Dự án',
                en: 'Projects'
            },

            // Skills Section
            'skills.title': {
                vi: 'Kỹ năng',
                en: 'Skills'
            },
            'skills.subtitle': {
                vi: 'Công nghệ và kỹ năng của tôi',
                en: 'My technologies and skills'
            },
            'skills.description': {
                vi: 'Tôi có kinh nghiệm với nhiều công nghệ và kỹ năng khác nhau trong lĩnh vực AI và Data Science',
                en: 'I have experience with various technologies and skills in the field of AI and Data Science'
            },
            'skills.specialization': {
                vi: 'Chuyên môn AI & ML',
                en: 'AI & ML Specialization'
            },
            'skills.technical': {
                vi: 'Kỹ thuật',
                en: 'Technical'
            },
            'skills.soft': {
                vi: 'Mềm',
                en: 'Soft Skills'
            },

            // Projects Section
            'projects.title': {
                vi: 'Dự án',
                en: 'Projects'
            },
            'projects.subtitle': {
                vi: 'Các dự án nổi bật',
                en: 'Featured Projects'
            },
            'projects.description': {
                vi: 'Các dự án tôi đã thực hiện trong quá trình học tập và nghiên cứu',
                en: 'Projects I have completed during my studies and research'
            },
            'projects.technologies': {
                vi: 'Công nghệ sử dụng:',
                en: 'Technologies used:'
            },
            'projects.interested': {
                vi: 'Quan tâm đến dự án của tôi?',
                en: 'Interested in my projects?'
            },
            'projects.contact': {
                vi: 'Hãy xem thêm các dự án khác trên GitHub hoặc liên hệ để thảo luận về cơ hội hợp tác',
                en: 'Check out more projects on GitHub or contact me to discuss collaboration opportunities'
            },
            'projects.view_github': {
                vi: 'Xem GitHub',
                en: 'View GitHub'
            },
            'projects.view': {
                vi: 'Xem dự án',
                en: 'View Project'
            },
            'projects.github': {
                vi: 'GitHub',
                en: 'GitHub'
            },

            // Education Section
            'education.title': {
                vi: 'Học vấn',
                en: 'Education'
            },
            'education.subtitle': {
                vi: 'Hành trình học tập',
                en: 'Educational Journey'
            },
            'education.description': {
                vi: 'Quá trình học tập và phát triển chuyên môn của tôi',
                en: 'My learning journey and professional development'
            },
            'education.degree': {
                vi: 'Cử nhân Khoa học Dữ liệu (Đã tốt nghiệp)',
                en: 'Bachelor of Data Science (Graduated)'
            },
            'education.school': {
                vi: 'Trường Đại học Ngoại ngữ - Tin học TP. HCM (HUFLIT)',
                en: 'Ho Chi Minh City University of Foreign Languages and Information Technology (HUFLIT)'
            },
            'education.period': {
                vi: '2021 - 2025',
                en: '2021 - 2025'
            },
            'education.gpa': {
                vi: 'GPA',
                en: 'GPA'
            },
            'education.specializations': {
                vi: 'Chuyên ngành và môn học chính',
                en: 'Main Specializations and Courses'
            },
            'education.achievements': {
                vi: 'Thành tích và hoạt động',
                en: 'Achievements and Activities'
            },
            'education.research': {
                vi: 'Tham gia các dự án nghiên cứu về AI và Computer Vision',
                en: 'Participated in AI and Computer Vision research projects'
            },
            'education.projects': {
                vi: 'Hoàn thành 3+ dự án thực tế trong lĩnh vực Data Science',
                en: 'Completed 3+ practical projects in Data Science'
            },
            'education.learning': {
                vi: 'Tích cực học tập và tự nghiên cứu các công nghệ mới',
                en: 'Actively studied and self-researched new technologies'
            },
            'education.future_goals': {
                vi: 'Mục tiêu tương lai',
                en: 'Future Goals'
            },
            'education.complete_degree': {
                vi: 'Hoàn thành bằng cấp',
                en: 'Complete Degree'
            },
            'education.degree_desc': {
                vi: 'Tốt nghiệp với GPA cao và kiến thức vững chắc',
                en: 'Graduate with high GPA and solid knowledge'
            },
            'education.skill_dev': {
                vi: 'Phát triển kỹ năng',
                en: 'Skill Development'
            },
            'education.skill_desc': {
                vi: 'Nâng cao chuyên môn AI/ML và thực hiện dự án thực tế',
                en: 'Enhance AI/ML expertise and implement practical projects'
            },
            'education.career': {
                vi: 'Sự nghiệp',
                en: 'Career'
            },
            'education.career_desc': {
                vi: 'Định hướng trở thành Data Engineer chuyên nghiệp: xây dựng data platform ổn định (dbt/Airflow/warehouse), chuẩn hoá data quality/observability và tối ưu chi phí; đồng thời mở rộng sang Analytics Engineering và hỗ trợ AI/ML phục vụ bài toán thực tế.',
                en: 'Aim to become a professional Data Engineer: build stable data platforms (dbt/Airflow/warehouse), standardize data quality/observability and cost optimization; expand to Analytics Engineering and support AI/ML for real-world use cases.'
            },

            // Contact Section
            'contact.title': {
                vi: 'Liên hệ',
                en: 'Contact'
            },
            'contact.subtitle': {
                vi: 'Hãy kết nối với tôi',
                en: 'Let\'s get in touch'
            },
            'contact.description': {
                vi: 'Hãy liên hệ với tôi nếu bạn quan tâm đến dự án hoặc cơ hội hợp tác',
                en: 'Contact me if you are interested in projects or collaboration opportunities'
            },
            'contact.message': {
                vi: 'Tôi luôn sẵn sàng thảo luận về các cơ hội mới và dự án thú vị. Hãy liên hệ với tôi!',
                en: 'I\'m always open to discussing new opportunities and interesting projects. Get in touch!'
            },
            'contact.name': {
                vi: 'Họ tên',
                en: 'Name'
            },
            'contact.email': {
                vi: 'Email',
                en: 'Email'
            },
            'contact.subject': {
                vi: 'Chủ đề',
                en: 'Subject'
            },
            'contact.message_placeholder': {
                vi: 'Tin nhắn của bạn...',
                en: 'Your message...'
            },
            'contact.send': {
                vi: 'Gửi tin nhắn',
                en: 'Send Message'
            },
            'contact.sending': {
                vi: 'Đang gửi...',
                en: 'Sending...'
            },
            'contact.success': {
                vi: 'Tin nhắn đã được gửi thành công!',
                en: 'Message sent successfully!'
            },
            'contact.error': {
                vi: 'Có lỗi xảy ra. Vui lòng thử lại.',
                en: 'An error occurred. Please try again.'
            },
            'contact.send_message': {
                vi: 'Gửi tin nhắn',
                en: 'Send Message'
            },
            'contact.contact_info': {
                vi: 'Thông tin liên hệ',
                en: 'Contact Information'
            },
            'contact.social_networks': {
                vi: 'Mạng xã hội',
                en: 'Social Networks'
            },
            'contact.full_name': {
                vi: 'Họ và tên',
                en: 'Full Name'
            },
            'contact.full_name_placeholder': {
                vi: 'Nhập họ và tên của bạn',
                en: 'Enter your full name'
            },
            'contact.email_placeholder': {
                vi: 'Nhập email của bạn',
                en: 'Enter your email'
            },
            'contact.phone_number': {
                vi: 'Số điện thoại',
                en: 'Phone Number'
            },
            'contact.quick_response': {
                vi: 'Phản hồi nhanh',
                en: 'Quick Response'
            },
            'contact.response_time': {
                vi: 'Tôi thường phản hồi trong vòng 24 giờ. Nếu cần liên hệ gấp, hãy gọi điện trực tiếp.',
                en: 'I usually respond within 24 hours. If you need urgent contact, please call directly.'
            },
            'contact.call_now': {
                vi: 'Gọi ngay',
                en: 'Call Now'
            },
            'about.quick_stats': {
                vi: 'Thống kê nhanh',
                en: 'Quick Statistics'
            },
            'about.completed_projects': {
                vi: 'Dự án hoàn thành',
                en: 'Completed Projects'
            },
            'about.skills': {
                vi: 'Kỹ năng chuyên môn',
                en: 'Professional Skills'
            },
            'footer.description': {
                vi: 'Data Engineer tập trung vào hệ thống dữ liệu ổn định, có thể quan sát và tối ưu chi phí.',
                en: 'Data Engineer focused on stable, observable and cost-effective data systems.'
            },
            'footer.quick_links': {
                vi: 'Liên kết nhanh',
                en: 'Quick Links'
            },
            'footer.connect': {
                vi: 'Kết nối',
                en: 'Connect'
            },
            'skills.communication': {
                vi: 'Giao tiếp',
                en: 'Communication'
            },
            'skills.problem_solving': {
                vi: 'Giải quyết vấn đề',
                en: 'Problem Solving'
            },
            'skills.self_study': {
                vi: 'Tự học',
                en: 'Self Study'
            },
            'footer.home': {
                vi: 'Trang chủ',
                en: 'Home'
            },
            'footer.about': {
                vi: 'Giới thiệu',
                en: 'About'
            },
            'footer.skills': {
                vi: 'Kỹ năng',
                en: 'Skills'
            },
            'footer.projects': {
                vi: 'Dự án',
                en: 'Projects'
            },
            'footer.contact': {
                vi: 'Liên hệ',
                en: 'Contact'
            },
            'contact.message_sent': {
                vi: 'Tin nhắn đã được gửi!',
                en: 'Message sent!'
            },
            'contact.thank_you': {
                vi: 'Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.',
                en: 'Thank you for contacting me. I will respond as soon as possible.'
            },
            'header.switch_language': {
                vi: 'Chuyển sang Tiếng Anh',
                en: 'Switch to Vietnamese'
            },
            'hero.scroll_down': {
                vi: 'Cuộn xuống',
                en: 'Scroll down'
            },
            'hero.download_cv': {
                vi: 'Tải CV',
                en: 'Download CV'
            },
            'education.location': {
                vi: 'TP. Hồ Chí Minh, Việt Nam',
                en: 'Ho Chi Minh City, Vietnam'
            },
            'education.data_science': {
                vi: 'Khoa học Dữ liệu',
                en: 'Data Science'
            },
            'education.ai': {
                vi: 'Trí tuệ nhân tạo',
                en: 'Artificial Intelligence'
            },
            'education.machine_learning': {
                vi: 'Học máy',
                en: 'Machine Learning'
            },
            'footer.name': {
                vi: 'Phan Minh Tan',
                en: 'Phan Minh Tan'
            },
            'projects.contact_button': {
                vi: 'Liên hệ',
                en: 'Contact'
            },
            'skills.deep_learning': {
                vi: 'Học sâu',
                en: 'Deep Learning'
            },
            'skills.machine_learning': {
                vi: 'Học máy',
                en: 'Machine Learning'
            },
            'projects.traffic_description': {
                vi: 'Phát hiện & theo dõi phương tiện với YOLOv8 + ByteTrack, triển khai bằng Streamlit',
                en: 'Detect & track vehicles with YOLOv8 + ByteTrack, implemented using Streamlit'
            },
            'projects.data_analyst_description': {
                vi: 'Phân tích dữ liệu doanh thu bán hàng, trực quan hóa với Pandas/Matplotlib/Seaborn',
                en: 'Analyze sales revenue data, visualize with Pandas/Matplotlib/Seaborn'
            },
            'projects.logo_detection_description': {
                vi: 'Hệ thống phát hiện logo bằng học sâu, cải thiện bằng tăng cường dữ liệu',
                en: 'Deep learning logo detection system, improved by data augmentation'
            },
            'education.degree_full': {
                vi: 'Cử nhân Khoa học Dữ liệu',
                en: 'Bachelor of Data Science'
            },
            'education.school_full': {
                vi: 'Trường Đại học Ngoại ngữ - Tin học TP. HCM (HUFLIT)',
                en: 'Ho Chi Minh City University of Foreign Languages and Information Technology (HUFLIT)'
            },
            'social.github': {
                vi: 'GitHub',
                en: 'GitHub'
            },
            'social.linktree': {
                vi: 'Linktree',
                en: 'Linktree'
            },
            'personal.name': {
                vi: 'Phan Minh Tan',
                en: 'Phan Minh Tan'
            },
            'personal.title': {
                vi: 'Thực tập sinh Kỹ sư AI',
                en: 'AI Engineer Intern'
            },
            'personal.introduction': {
                vi: 'Là sinh viên năm cuối ngành Khoa học Dữ liệu, tôi quan tâm đặc biệt đến AI trong thị giác máy tính và khai thác dữ liệu lớn. Với tinh thần học hỏi cao và khả năng tự nghiên cứu, tôi mong muốn trở thành một kỹ sư AI chuyên sâu trong tương lai.',
                en: 'As a final year Data Science student, I am particularly interested in AI in computer vision and big data mining. With high learning spirit and self-research ability, I aspire to become a specialized AI engineer in the future.'
            },
            'personal.about_me': {
                vi: 'Tôi là một sinh viên năm cuối ngành Khoa học Dữ liệu tại Trường Đại học Ngoại ngữ - Tin học TP. HCM (HUFLIT). Với niềm đam mê về trí tuệ nhân tạo và học máy, tôi đã dành nhiều thời gian nghiên cứu và thực hành các công nghệ AI hiện đại như computer vision, deep learning và data mining. Tôi có kinh nghiệm làm việc với các framework phổ biến như TensorFlow, PyTorch và các thư viện Python cho data science. Mục tiêu của tôi là trở thành một kỹ sư AI chuyên sâu, đóng góp vào việc phát triển các giải pháp AI thực tế và có ý nghĩa cho xã hội.',
                en: 'I am a final year Data Science student at Ho Chi Minh City University of Foreign Languages and Information Technology (HUFLIT). With a passion for artificial intelligence and machine learning, I have spent considerable time researching and practicing modern AI technologies such as computer vision, deep learning, and data mining. I have experience working with popular frameworks like TensorFlow, PyTorch, and Python libraries for data science. My goal is to become a specialized AI engineer, contributing to the development of practical and meaningful AI solutions for society.'
            },
            'contact.location': {
                vi: 'Phú Nhuận, TP. Hồ Chí Minh',
                en: 'Phu Nhuan, Ho Chi Minh City'
            },
            'contact.location_label': {
                vi: 'Địa chỉ',
                en: 'Location'
            },
            'contact.phone_label': {
                vi: 'SĐT',
                en: 'Phone'
            },
            'contact.email_label': {
                vi: 'Email',
                en: 'Email'
            },

            // Footer
            'footer.rights': {
                vi: '© 2024 Phan Minh Tan. Tất cả quyền được bảo lưu.',
                en: '© 2024 Phan Minh Tan. All rights reserved.'
            },
            'footer.built': {
                vi: 'Được xây dựng với React & TypeScript',
                en: 'Built with React & TypeScript'
            }
        };

        const translation = translations[key as keyof typeof translations];
        if (translation && translation[language]) {
            return translation[language];
        }
        return key; // Fallback to key if translation not found
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
