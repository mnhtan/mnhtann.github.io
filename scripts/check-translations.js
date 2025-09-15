const fs = require('fs');
const path = require('path');

// Màu sắc cho console output
const colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    reset: '\x1b[0m',
    bold: '\x1b[1m'
};

// Tìm tất cả file .tsx và .ts
const findTsxFiles = (dir) => {
    let files = [];
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory() && !item.includes('node_modules')) {
            files = files.concat(findTsxFiles(fullPath));
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
            files.push(fullPath);
        }
    });

    return files;
};

// Kiểm tra hardcode Vietnamese text
const checkVietnameseText = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];

    // Pattern để tìm text tiếng Việt
    const vietnamesePatterns = [
        // Text trong quotes
        /['"`]([^'"`]*[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ][^'"`]*)['"`]/g,
        // Text trong JSX
        />\s*([^<]*[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ][^<]*)</g,
        // Text trong template literals
        /`([^`]*[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ][^`]*)`/g
    ];

    vietnamesePatterns.forEach((pattern, index) => {
        let match;
        while ((match = pattern.exec(content)) !== null) {
            const text = match[1] || match[0];
            // Bỏ qua các trường hợp hợp lệ
            if (!isValidVietnameseText(text)) {
                continue;
            }

            const lineNumber = content.substring(0, match.index).split('\n').length;
            issues.push({
                type: 'vietnamese',
                text: text.trim(),
                line: lineNumber,
                context: getContext(content, match.index)
            });
        }
    });

    return issues;
};

// Kiểm tra hardcode English text (có thể cần dịch)
const checkEnglishText = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];

    // Pattern để tìm text tiếng Anh có thể cần dịch
    const englishPatterns = [
        // Text trong quotes
        /['"`]([A-Z][a-zA-Z\s]{3,})['"`]/g,
        // Text trong JSX
        />\s*([A-Z][a-zA-Z\s]{3,})</g
    ];

    // Danh sách từ tiếng Anh phổ biến cần dịch
    const commonEnglishWords = [
        'About', 'Skills', 'Projects', 'Contact', 'Education', 'Experience',
        'Download', 'Send', 'Message', 'Phone', 'Address',
        'Home', 'Portfolio', 'Resume', 'CV', 'LinkedIn',
        'View', 'Read', 'More', 'Learn', 'Get', 'Start', 'Welcome',
        'Hello', 'Hi', 'Thanks', 'Thank you', 'Please', 'Sorry'
    ];

    // Danh sách thuật ngữ quốc tế không cần dịch
    const internationalTerms = [
        'Email', 'GitHub', 'LinkedIn', 'Twitter', 'Facebook', 'Instagram',
        'YouTube', 'Discord', 'Slack', 'Zoom', 'Google', 'Microsoft',
        'Apple', 'Android', 'iOS', 'Windows', 'Linux', 'MacOS',
        'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular',
        'Node.js', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Ruby',
        'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes',
        'AWS', 'Azure', 'GCP', 'Firebase', 'Vercel', 'Netlify'
    ];

    englishPatterns.forEach((pattern) => {
        let match;
        while ((match = pattern.exec(content)) !== null) {
            const text = match[1] || match[0];
            const cleanText = text.replace(/['"`]/g, '').trim();

            // Kiểm tra xem có phải từ tiếng Anh phổ biến không và không phải thuật ngữ quốc tế
            if (commonEnglishWords.some(word => cleanText.includes(word)) &&
                !internationalTerms.some(term => cleanText.includes(term))) {
                const lineNumber = content.substring(0, match.index).split('\n').length;
                issues.push({
                    type: 'english',
                    text: cleanText,
                    line: lineNumber,
                    context: getContext(content, match.index)
                });
            }
        }
    });

    return issues;
};

// Kiểm tra xem text tiếng Việt có hợp lệ không
const isValidVietnameseText = (text) => {
    const cleanText = text.replace(/['"`]/g, '').trim();

    // Bỏ qua các trường hợp không cần dịch
    const skipPatterns = [
        /^[a-zA-Z0-9\s\-_\.]+$/, // Chỉ có ký tự Latin
        /^[0-9]+$/, // Chỉ có số
        /^[^a-zA-Z]*$/, // Không có ký tự Latin
        /^(import|export|const|let|var|function|class|interface|type)/, // Keywords
        /^(src|public|components|contexts|data)/, // Paths
        /\.(tsx?|jsx?|css|json)$/, // File extensions
        /^[{}[\]();,.\s]*$/, // Chỉ có ký tự đặc biệt
        /^(true|false|null|undefined)$/, // Boolean/null values
        /^['"`][^'"`]*['"`]$/, // Text trong quotes (mapping data)
        /skillMap|getSkillName/, // Function names và mapping
        /^[A-Z][a-zA-Z\s]*$/, // Proper nouns và international terms
    ];

    return !skipPatterns.some(pattern => pattern.test(cleanText)) &&
        cleanText.length > 2 &&
        /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/.test(cleanText);
};

// Lấy context xung quanh vị trí lỗi
const getContext = (content, index) => {
    const lines = content.split('\n');
    const lineNumber = content.substring(0, index).split('\n').length;
    const start = Math.max(0, lineNumber - 3);
    const end = Math.min(lines.length, lineNumber + 2);

    return lines.slice(start, end).map((line, i) => ({
        number: start + i + 1,
        content: line,
        isError: start + i + 1 === lineNumber
    }));
};

// Kiểm tra file LanguageContext
const checkLanguageContext = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];

    // Tìm tất cả translation keys
    const keyPattern = /'([^']+)':\s*{\s*vi:\s*['"`]([^'"`]+)['"`],\s*en:\s*['"`]([^'"`]+)['"`]/g;
    const keys = new Set();
    const duplicates = [];

    let match;
    while ((match = keyPattern.exec(content)) !== null) {
        const key = match[1];
        if (keys.has(key)) {
            duplicates.push(key);
        }
        keys.add(key);
    }

    if (duplicates.length > 0) {
        issues.push({
            type: 'duplicate_keys',
            keys: duplicates
        });
    }

    return issues;
};

// Main function
const main = () => {
    console.log(`${colors.bold}${colors.blue}🔍 KIỂM TRA DỊCH THUẬT TỰ ĐỘNG${colors.reset}\n`);

    const srcDir = path.join(__dirname, '../src');
    const tsxFiles = findTsxFiles(srcDir);

    let totalIssues = 0;
    let filesWithIssues = 0;

    console.log(`${colors.cyan}📁 Đang kiểm tra ${tsxFiles.length} files...${colors.reset}\n`);

    tsxFiles.forEach(filePath => {
        const relativePath = path.relative(process.cwd(), filePath);
        const issues = [];

        // Bỏ qua LanguageContext.tsx vì nó chứa text tiếng Việt hợp lệ
        if (relativePath.includes('LanguageContext.tsx')) {
            const contextIssues = checkLanguageContext(filePath);
            issues.push(...contextIssues);
        } else {
            issues.push(...checkVietnameseText(filePath));
            issues.push(...checkEnglishText(filePath));
        }

        if (issues.length > 0) {
            filesWithIssues++;
            totalIssues += issues.length;

            console.log(`${colors.red}❌ ${relativePath}${colors.reset}`);

            issues.forEach(issue => {
                if (issue.type === 'vietnamese') {
                    console.log(`   ${colors.yellow}⚠️  Dòng ${issue.line}: "${issue.text}"${colors.reset}`);
                } else if (issue.type === 'english') {
                    console.log(`   ${colors.magenta}💡 Dòng ${issue.line}: "${issue.text}" (có thể cần dịch)${colors.reset}`);
                } else if (issue.type === 'duplicate_keys') {
                    console.log(`   ${colors.red}🔄 Duplicate keys: ${issue.keys.join(', ')}${colors.reset}`);
                }
            });
            console.log();
        }
    });

    // Tổng kết
    console.log(`${colors.bold}📊 TỔNG KẾT:${colors.reset}`);
    console.log(`   ${colors.blue}📁 Files đã kiểm tra: ${tsxFiles.length}${colors.reset}`);
    console.log(`   ${colors.red}❌ Files có vấn đề: ${filesWithIssues}${colors.reset}`);
    console.log(`   ${colors.yellow}⚠️  Tổng số vấn đề: ${totalIssues}${colors.reset}`);

    if (totalIssues === 0) {
        console.log(`\n${colors.green}✅ Tuyệt vời! Không phát hiện vấn đề dịch thuật nào.${colors.reset}`);
    } else {
        console.log(`\n${colors.yellow}💡 Khuyến nghị: Kiểm tra và sửa các vấn đề trên để đảm bảo dịch thuật hoàn chỉnh.${colors.reset}`);
    }
};

// Chạy script
if (require.main === module) {
    main();
}

module.exports = { main, checkVietnameseText, checkEnglishText, checkLanguageContext };
