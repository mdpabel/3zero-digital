interface BlacklistItem {
  name: string;
}

export const blacklistData: BlacklistItem[] = [
  { name: 'Abusix' },
  { name: 'ADMINUSLabs' },
  { name: 'AegisLab' },
  { name: 'Ahnlab' },
  { name: 'AILabs (Monitorapp)' },
  { name: 'Alibaba' },
  { name: 'AlienVault' },
  { name: 'AlphaMountain' },
  { name: 'AlphaSOC' },
  { name: 'Alyac (Estsoft)' },
  { name: 'Antivir' },
  { name: 'Antiy' },
  { name: 'ArcSight Threat Intelligence' },
  { name: 'AutoShun' },
  { name: 'Avast' }, // Added
  { name: 'AVG' }, // Added
  { name: 'Baidu' },
  { name: 'BitDefender' },
  { name: 'BforeAi' },
  { name: 'Bkav' },
  { name: 'Certego' },
  { name: 'Chong Lua Dao' },
  { name: 'CINS Army (Sentinel IPS)' },
  { name: 'ClamAV' },
  { name: 'Clean-MX' },
  { name: 'Cluster25' },
  { name: 'CMC' },
  { name: 'CRDF' },
  { name: 'Criminal IP (AI Spera)' },
  { name: 'CrowdSec' },
  { name: 'CrowdStrike' },
  { name: 'CyanSecurity' },
  { name: 'Cybereason' },
  { name: 'Cyble' },
  { name: 'Cylance' },
  { name: 'Cynet' },
  { name: 'CyRadar' },
  { name: 'Deep Instinct' },
  { name: 'DNS8' },
  { name: 'DrWeb' },
  { name: 'eGambit (Tehtris)' },
  { name: 'Elastic' },
  { name: 'Emsisoft' },
  { name: 'ESET' },
  { name: 'FireEye' },
  { name: 'F-Prot' },
  { name: 'F-Secure' },
  { name: 'Forcepoint ThreatSeeker' },
  { name: 'Fortinet' },
  { name: 'GData' },
  { name: 'Google Safe Browsing' },
  { name: 'Gridinsoft' },
  { name: 'Hacksoft' },
  { name: 'Hauri' },
  { name: 'Heimdal' },
  { name: 'Hoplite Industries' },
  { name: 'Ikarus' },
  { name: 'IPsum' },
  { name: 'Jiangmin' },
  { name: 'K7' },
  { name: 'Kaspersky' },
  { name: 'Lionic' },
  { name: 'Lumu' },
  { name: 'Malbeacon' },
  { name: 'Malwarebytes' },
  { name: 'Malwares.com (Saint Security)' },
  { name: 'MAX (SaintSecurity)' },
  { name: 'MaxSecure' },
  { name: 'McAfee' },
  { name: 'Skyhigh' },
  { name: 'Microsoft' },
  { name: 'Microworld' },
  { name: 'NANO' },
  { name: 'Netcraft' },
  { name: 'Panda' },
  { name: 'Phishing Database' },
  { name: 'PhishLabs' },
  { name: 'Qihoo360' },
  { name: 'QuickHeal' },
  { name: 'Quttera' },
  { name: 'Rising' },
  { name: 'Sangfor' },
  { name: 'Safe Browsing' }, // Added Google Safe Browsing
  { name: 'Scumware.org' },
  { name: 'SecureAge' },
  { name: 'Seclookup' },
  { name: 'Segasec' },
  { name: 'Sentinel One' },
  { name: 'SOCRadar' },
  { name: 'Sophos' },
  { name: 'Spamhaus' },
  { name: 'Sucuri' },
  { name: 'Symantec' },
  { name: 'Tencent' },
  { name: 'TheHacker' },
  { name: 'Trapmine' },
  { name: 'TrendMicro' },
  { name: 'Trustwave' },
  { name: 'Trustlook' },
  { name: 'URLQuery' },
  { name: 'Varist' },
  { name: 'VBA32' },
  { name: 'Viettel Threat Intelligence' },
  { name: 'Vipre' },
  { name: 'VirIT' },
  { name: 'VirusDie' },
  { name: 'Webroot' },
  { name: 'Xcitium Verdict Cloud (Comodo)' },
  { name: 'Yandex' },
  { name: 'Zillya' },
  { name: 'ZoneAlarm' },
];

export const questions = [
  {
    question:
      'Has your website recently been flagged as “Not Secure” by browsers or search engines?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Are visitors receiving warnings when trying to access your website?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Have you checked if your website is listed on any major blacklist databases?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
  },
  {
    question:
      'Do you know the source of malware or spam causing your blacklist issue?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
  },
  {
    question:
      'Are you regularly scanning your site to prevent future infections?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
  },
  {
    question: 'Has your email server been blacklisted for sending spam emails?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Are you using security measures like SSL and firewalls to protect your site?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
  },
  {
    question:
      'Do you have a team monitoring and addressing security alerts 24/7?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
  },
  {
    question:
      'Have you identified and removed infected files from your website?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
  },
  {
    question:
      'Are you aware of how blacklist issues can impact your search engine rankings?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
  },
];
