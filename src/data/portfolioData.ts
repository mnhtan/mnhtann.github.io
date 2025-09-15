export interface Skill {
    name: string;
    level: number;
    category: 'technical' | 'soft';
}

export interface Project {
    id: string;
    title: string;
    description: string;
    year: number;
    technologies: string[];
    githubUrl: string;
    image?: string;
    roleTags?: Array<'AI' | 'DE' | 'DA' | 'BA' | 'BI'>;
}

export interface Education {
    degree: string;
    school: string;
    period: string;
    gpa: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    linktree: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export const portfolioData = {
    personal: {
        name: "Phan Minh Tan",
        title: "Data Engineer",
        avatar: "/avatar-placeholder.jpg",
        cvUrl: "/cv/PhanMinhTan-CV.pdf",
        introduction: "Tôi là Data Engineer, xây dựng nền tảng dữ liệu từ thu thập, xử lý (ETL/ELT), mô hình hoá đến phục vụ phân tích/AI. Tôi ưu tiên hệ thống ổn định, đo lường được và tối ưu chi phí.",
        aboutMe: "Tôi là Data Engineer tốt nghiệp ngành Khoa học Dữ liệu tại HUFLIT. Tôi thiết kế mô hình dữ liệu (star/snowflake), phát triển pipeline với dbt/Airflow, tối ưu truy vấn SQL, và xây dựng data mart phục vụ BI/Analytics/AI. Tôi hướng tới các giải pháp dữ liệu có tác động thực tế, dễ bảo trì và mở rộng."
    },

    contact: {
        email: "mtann0603@gmail.com",
        phone: "0384657533",
        location: "Phú Nhuận, Thành phố Hồ Chí Minh",
        linktree: "https://linktr.ee/javis_mtan"
    } as ContactInfo,

    skills: [
        // Technical Skills
        { name: "Python", level: 90, category: "technical" },
        { name: "C#", level: 75, category: "technical" },
        { name: "TensorFlow", level: 80, category: "technical" },
        { name: "PyTorch", level: 75, category: "technical" },
        { name: "Scikit-learn", level: 85, category: "technical" },
        { name: "NumPy", level: 90, category: "technical" },
        { name: "Pandas", level: 85, category: "technical" },
        { name: "Matplotlib", level: 80, category: "technical" },
        { name: "Seaborn", level: 75, category: "technical" },
        { name: "SQL", level: 70, category: "technical" },
        // Soft Skills
        { name: "Giao tiếp", level: 85, category: "soft" },
        { name: "Tự học", level: 90, category: "soft" },
        { name: "Giải quyết vấn đề", level: 80, category: "soft" }
    ] as Skill[],

    projects: [
        {
            id: "traffic-flow-tracking",
            title: "Traffic Flow Tracking using Object Detection",
            description: "Phát hiện & theo dõi phương tiện với YOLOv8 + ByteTrack, triển khai bằng Streamlit",
            year: 2024,
            technologies: ["Python", "YOLOv8", "ByteTrack", "Streamlit", "OpenCV"],
            githubUrl: "https://github.com/mnhtan/Traffic-Flow-Tracking-using-Object-Detection",
            roleTags: ['AI', 'DA']
        },
        {
            id: "data-analyst",
            title: "Data Analyst",
            description: "Phân tích dữ liệu doanh thu bán hàng, trực quan hóa với Pandas/Matplotlib/Seaborn",
            year: 2024,
            technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
            githubUrl: "https://github.com/mnhtan/Data-Analyst",
            roleTags: ['DA', 'BI', 'BA']
        },
        {
            id: "logo-detection",
            title: "Logo Detection University",
            description: "Hệ thống phát hiện logo bằng học sâu, cải thiện bằng tăng cường dữ liệu",
            year: 2024,
            technologies: ["Python", "TensorFlow", "OpenCV", "Data Augmentation"],
            githubUrl: "https://github.com/mnhtan/Logo-Detection-University",
            roleTags: ['AI', 'DE']
        }
    ] as Project[],

    education: {
        degree: "Cử nhân Khoa học Dữ liệu (Đã tốt nghiệp)",
        school: "Trường Đại học Ngoại ngữ - Tin học TP. HCM (HUFLIT)",
        period: "2021 - 2025",
        gpa: "2.8"
    } as Education,

    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/mnhtan",
            icon: "github"
        },
        {
            name: "Linktree",
            url: "https://linktr.ee/javis_mtan",
            icon: "link"
        }
    ] as SocialLink[]
};
