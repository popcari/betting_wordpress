// @ts-nocheck
// data
const risks = [
  {
    id: 0,
    name: 'Exploitation Of Workloads And Containers',
    solutions: [
      'CWPP',
      'SIEM',
      'TH/TI',
      'PAM',
      'Cloud_Security',
      'NW_Forensic_and_Analyses',
    ],
  },
  {
    id: 1,
    name: 'Misconfiguration And Inadequate Change Control',
    solutions: [
      'CSPM',
      'IT_Policy_Framework',
      'Cloud_Security',
      'Process_Management',
    ],
  },
  {
    id: 2,
    name: 'Lack Of Cloud Security Architecture And Strategy',
    solutions: [
      'CASB',
      'CWPP',
      'CSPM',
      'IT_Policy_Framework',
      'Single_Internet_Breakout',
      'Cloud_Security',
      'Process_Management',
    ],
  },
  {
    id: 3,
    name: 'Accidental Cloud Data Disclosure',
    solutions: [
      'DLP',
      'Encryption',
      'Encryptions',
      'CSPM',
      'Training_&_awareness',
      'Cloud_Security',
      'Process_Management',
      'Data_Content_Security',
      'Endpoint_Security',
      'Database_Security',
    ],
  },
  {
    id: 4,
    name: 'Insecure Software Development',
    solutions: [
      'VA/PT',
      'Security',
      'WAST',
      'Security_Assessment',
      'Applications_Security',
    ],
  },
  {
    id: 5,
    name: 'Organised Crime Hacker An APT',
    solutions: [
      'SIEM',
      'Training_&_awareness',
      'TH/TI',
      'Process_Management',
      'NW_Forensic_and_Analyses',
    ],
  },
  {
    id: 6,
    name: 'System Vulnerabilities',
    solutions: [
      'Patch_mgmt',
      'VA/PT',
      'TH/TI',
      'SIEM',
      'Security_Assessment',
      'NW_Forensic_and_Analyses',
      'Workload_Security',
    ],
  },
  {
    id: 7,
    name: 'Insecure Interfaces And APIs',
    solutions: ['WAF', 'Code Review', 'WAST', 'Applications_Security'],
  },
  {
    id: 8,

    name: 'Insufficient Identity, Access And Key Mgmt. Privileged Accounts',
    solutions: ['2FA', 'RBAC', 'PIM/PAM', 'IAAM'],
  },
  {
    id: 9,
    name: 'Data Loss Prevention',
    solutions: [
      'Encryption',
      'Encryptions',
      'UEBA',
      'DLP',
      'Database_Security',
      'Endpoint_Security',
      'Data_Content_Security',
      'NW_Forensic_and_Analyses',
    ],
  },
];
const solutions = [
  {
    name: 'Zero Trust',
    solutions: [
      'FIM',
      'Micro-segmentation',
      'EDR',
      'Deception',
      '&Decoy',
      'IG',
      'DRM',
      'SSL_Inspection',
      'Risk Scoring',
      'Data_Content_Security',
      'Cyber_Crises',
      'IAAM',
      'Cyber',
      'Crises',
      'Mgmt_Framework',
      'Tokenization_Redaction',
      'SOAR',
      'Device_Control',
      'NDR',
      'A-APT',
      'DAM',
      'Encryption',
      'CIAM',
      'Data_encryption',
      'Encryptions',
      'Training_&_awareness',
      'DNS',
      'HIPS',
      'EMM',
      'Code Review',
      'WAF',
      'GRc',
      'Database_monitoring',
      'SSO',
      'PIM/PAM',
      'IDAM',
      'Data',
      'DLP',
      'GAP',
      'security',
      'Assessments',
      'Adaptive',
      'Incident',
      'Response',
      'DNS_security',
      'CSPM',
      'CWPP',
      'CASB',
      'NAC',
      'A-DOS',
      'NW',
      'Database',
      'Monitoring',
      'Server',
      'Deception_Decoy',
      'Hardening',
      'Hardening',
      'Patch_mgmt',
      'Antivirus',
      'Automated_testing',
      'Adaptive_incident_response',
      'VAPT',
      'NW_segmentation',
      'Memory',
      'WAST',
      'Active',
      'Active_directory',
      'Server_hardening',
      'Directory',
      'Encryptionx',
      '2FA',
      'Host_memory',
      'Web-sec',
      'KSPM',
      'EDR',
      'EDRs',
      'RBI',
      'Email-sec',
      'SCD',
      'VA/PT',
      'Audit Framework',
      'Training & awareness',
      'IT_Policy_Framework',

      'Single_Internet_Breakout',
      'NG-FW',
      'IPS/IDS',
      'Proxy/SWG',
      'VPN/ZTNA',
      'Database_Security',
      'Endpoint_Security',
      'Applications_Security',
      'Identity and ',
      'Access Management',
      'Workload_Security',
      'Data & Content Security',
      'Process_Management',
      'Security_Assessment',
      'Segmentation',
      'Cloud_Security',
      'Network_Security',
      'PAM',
      'Content',
    ],
    definition:
      'Zero Trust is an approach where no one and nothing is inherently trusted, requiring continuous verification and granting only the minimum access needed. This increases security, compliance, and agility, making it a valuable investment for your organization.​',
  },
  {
    name: 'SASE',
    solutions: [
      'NG-FW',
      'Proxy/SWG',
      'VPN/ZTNA',
      'DLP',
      'SSL_Inspection',
      'DNS_security',
      'TH/TI',
      'CASB',
      'NDR',
      'NW_Forensic_and_Analyses',
      'Data_Content_Security',
      'Cloud_Security',
      'Network_Security',
    ],
    definition:
      'SASE (Secure Access Service Edge) empowers remote access to applications and data, seamlessly merging networking and security in a cloud platform for enhanced protection and simplified management - all from anywhere, on any device.​',
  },
  {
    name: 'Cyber Resilient and fully protect',
    solutions: [
      'WAF',
      'CSPM',
      'CWPP',
      'DLP',
      'Device_Control',
      'DNS_security',
      'FIM',
      'NG-FW',
      '2FA',
      'NAC',
      'NDR',
      'SIEM',
      'PAM',
      'VA/PT',
      'NW_Forensic_and_Analyses',
      'Data_Content_Security',
      'Cloud_Security',
      'Network_Security',
      'Endpoint_Security',
      'Data_Content_Security',
      'NW_Forensic_and_Analyses',
      'Security_Assessment',
      'NW_Forensic_and_Analyses',
      'Workload_Security',
      'IAAM',
      'Applications_Security',
    ],
    definition: `Cyber-resilient solutions go beyond "fully protect" They combine prevention, detection, and recovery with adaptability to minimize the impact of inevitable breaches, offering a holistic approach to cybersecurity.​`,
  },
  {
    name: 'Zero Day Attacks Protection',
    solutions: [
      'NG-FW',
      'IPS/IDS',
      'CASB',
      'CWPP',
      'CSPM',
      'KSPM',
      'WAF',
      'VAPT',
      'Patch_mgmt',
      'FIM',
      'Micro-segmentation',
      'Data_encryption',
      'Email-sec',
      'TH/TI',
      'PIM/PAM',
      'NW_Forensic_and_Analyses',
      'Data_Content_Security',
      'Cloud_Security',
      'Network_Security',
      'Data_Content_Security',
      'NW_Forensic_and_Analyses',
      'NW_Forensic_and_Analyses',
      'Workload_Security',
      'IAAM',
      'Applications_Security',
    ],
    definition: `Zero Day attacks are challenging, but protection involves layers of security, threat intelligence, application control, sandboxing, user awareness, and swift patching, all working together to minimize their impact.​`,
  },
];
const listIdElement = [
  'FIM',
  'Micro-segmentation',
  'EDR',
  'Deception',
  '&Decoy',
  'IG',
  'DRM',
  'SSL_Inspection',
  'Risk Scoring',
  'Data_Content_Security',
  'Cyber_Crises',
  'IAAM',
  'Cyber',
  'Crises',
  'Mgmt_Framework',
  'Tokenization_Redaction',
  'SOAR',
  'GRC',
  'NIST',
  'FRMS',
  'Orchestration',
  'UEBA',
  'Device_Control',
  'NDR',
  'A-APT',
  'DAM',
  'Encryption',
  'CIAM',
  'Data_encryption',
  'Encryptions',
  'NW_Forensic_and_Analyses',
  'Training_&_awareness',
  'DNS',
  'HIPS',
  'EMM',
  'Code Review',
  'WAF',
  'GRc',
  'Database_monitoring',
  'SSO',
  'PIM/PAM',
  'IDAM',
  'Data',
  'DLP',
  'GAP',
  'security',
  'Assessments',
  'Adaptive',
  'Incident',
  'Response',
  'PCI/GDPR/APRA/Essential',
  'TH/TI',
  'SIEM',
  'Analytics',
  'DNS_security',
  'CSPM',
  'CWPP',
  'CASB',
  'NAC',
  'A-DOS',
  'NW',
  'Database',
  'Monitoring',
  'Server',
  'Deception_Decoy',
  'Hardening',
  'Hardening',
  'Patch_mgmt',
  'Antivirus',
  'Automated_testing',
  'Adaptive_incident_response',
  'VAPT',
  'NW_segmentation',
  'Memory',
  'WAST',
  'Active',
  'Active_directory',
  'Server_hardening',
  'Directory',
  'Encryptionx',
  '2FA',
  'Host_memory',
  'Web-sec',
  'KSPM',
  'EDR',
  'EDRs',
  'RBI',
  'Email-sec',
  'SCD',
  'VA/PT',
  'Audit Framework',
  'Training & awareness',
  'IT_Policy_Framework',
  'ISO Standard',
  'Packet Analyses',
  'Anti Trojan/Phishing',
  'Single_Internet_Breakout',
  'NG-FW',
  'IPS/IDS',
  'Proxy/SWG',
  'VPN/ZTNA',
  'Database_Security',
  'Endpoint_Security',
  'Applications_Security',
  'Identity and ',
  'Access Management',
  'Workload_Security',
  'Process_Management',
  'Security_Assessment',
  'Compliance_Management',
  'Segmentation',
  'Cloud_Security',
  'Network_Security',
  'PAM',
  'PCI/GDPR/APRA//Essential',
  'Content',
];

let riskTabIsOpen = true;
let definitionIsOpen = false;
const risksTableElement = document.getElementById('risks__table');
const approachTableElement = document.getElementById('approach');

const risksTableHeader = document.getElementById('riskTab');
const approachTableHeader = document.getElementById('approachTab');

risksTableHeader.classList.add(
  'bg-[#f0f0f0]',
  'text-[#f57c00]',
  'uppercase',
  'transition-colors',
  'duration-300'
);
approachTableHeader.classList.remove(
  'bg-[#f0f0f0]',
  'text-[#f57c00]',
  'uppercase',
  'transition-colors',
  'duration-300'
);

risksTableHeader.addEventListener('click', onRiskTabClick);
approachTableHeader.addEventListener('click', onApproachClick);

let tabTitle = document.getElementById('headerTitle');
let approachDefinition = document.getElementById('approachDefinition');
console.log('Approach Definition', approachDefinition);

listIdElement.forEach((id) => {
  const _elm = document.getElementById(id);
  if (_elm) {
    _elm.addEventListener('mouseover', _onMover);
    _elm.addEventListener('mouseleave', _onLeaver);
  }
});

function _onMover(e) {
  listIdElement.forEach((id) => {
    const _elm = document.getElementById(id);
    if (_elm) {
      const classElm = document.getElementsByClassName(e.target.id);
      for (let i = 0; i < classElm.length; i++) {
        const element = classElm[i];
        if (element.classList.contains('cls-2')) {
          element.style.fill = 'rgba(248,233,223,255)';
        } else if (element.classList.contains('cls-5')) {
          element.style.fill = '#edd6c9';
        } else if (element.classList.contains('cls-4')) {
          element.style.fill = '#cfaa9c';
        } else if (element.classList.contains('cls-1')) {
          element.style.fill = '#a5918d';
        }
      }
      _elm.style.opacity = id === e.target.id ? '1' : '.2';
      _elm.style.transition = 'all 0.2s ease-in';
    }
  });
}

function _onLeaver(e) {
  listIdElement.forEach((id) => {
    const _elm = document.getElementById(id);
    if (_elm) {
      _elm.style.opacity = '1';
      const classElm = document.getElementsByClassName(e.target.id);
      for (let i = 0; i < classElm.length; i++) {
        const element = classElm[i];
        if (element.classList.contains('cls-2')) {
          element.style.fill = '#f7f9fb';
        } else if (element.classList.contains('cls-5')) {
          element.style.fill = '#e8ecf2';
        } else if (element.classList.contains('cls-4')) {
          element.style.fill = '#d2d8e4';
        } else if (element.classList.contains('cls-1')) {
          element.style.fill = '#b8c2d1';
        }
      }
    }
  });
}

function onRiskTabClick() {
  riskTabIsOpen = true;
  tabTitle.innerHTML =
    'Unmask the Top 10 Cyber Threats and Their Solutions You NEED to Know Now!​';
  updateTableContent(risks);

  if (approachTableElement) {
    approachTableElement.style.display = 'none';

    risksTableElement.style.display = 'grid';
    risksTableHeader.classList.remove('text-[#000]');
    risksTableHeader.classList.add(
      'bg-[#f0f0f0]',
      'text-[#f57c00]',
      'uppercase',
      'transition-colors',
      'duration-300'
    );
    approachTableHeader.classList.remove(
      'bg-[#f0f0f0]',
      'text-[#f57c00]',
      'uppercase',
      'transition-colors',
      'duration-300'
    );
  }
}

function onApproachClick() {
  riskTabIsOpen = false;
  tabTitle.innerHTML =
    'Empower Your Business with Our Effective Cyber Security Solutions​';
  updateTableContent(solutions);

  if (risksTableElement) {
    risksTableElement.style.display = 'none';
    approachTableHeader.classList.remove('text-[#000]');
    approachTableHeader.classList.add(
      'bg-[#f0f0f0]',
      'text-[#f57c00]',
      'uppercase',
      'transition-colors',
      'duration-300'
    );
    risksTableHeader.classList.remove(
      'bg-[#f0f0f0]',
      'text-[#f57c00]',
      'uppercase',
      'transition-colors',
      'duration-300'
    );
  }
}
function updateTableContent(data) {
  const tableContainer = document.getElementById(
    riskTabIsOpen ? 'risks__table' : 'approach'
  );
  tableContainer.innerHTML = '';

  data.forEach((item, index) => {
    const tableItem = document.createElement('div');
    tableItem.classList.add(
      'p-2',
      'hover:text-[#f57c00]',
      'hover:font-bold',
      'hover:transition-colors',
      'hover:duration-300',
      'text-[12px]'
    );
    tableItem.addEventListener('mousemove', () => handleMouseOverTable(item));
    tableItem.addEventListener('mouseleave', handleMouseLeaveTable);
    tableItem.innerText = item.name;

    tableContainer.appendChild(tableItem);
  });
  const approachElement = document.getElementById('approach');

  if (approachElement) {
    approachElement.style.display = riskTabIsOpen ? 'none' : 'block';
  }
}

/**
 * TODO: table mouse leave event handler
 */
const handleMouseLeaveTable = () => {
  listIdElement.map((e, index) => {
    const _elm = document.getElementById(e);
    if (_elm) {
      _elm.style.opacity = '1';
    }
    const _classElement = document.getElementsByClassName(e);
    if (_classElement.length) {
      for (let i = 0; i < _classElement.length; i++) {
        const element = _classElement[i].id;
        const _elementLine = document.getElementById(element);
        const name = `${_elementLine.className.animVal}`;

        if (_elementLine) {
          _elementLine.style.scale = '1';
          if (name.includes('cls-4')) {
            _elementLine.style.fill = '#d2d8e4';
          } else if (name.includes('cls-2')) {
            _elementLine.style.fill = '#f7f9fb';
          } else if (name.includes('cls-5')) {
            _elementLine.style.fill = '#e8ecf2';
          } else if (name.includes('cls-1')) {
            _elementLine.style.fill = '#b8c2d1';
          }
        }
      }
    }
  });

  approachDefinition.innerText = '';
  approachDefinition.classList.add('hidden');
};

/**
 * TODO: table mouse over event handler
 * @param item : risks/solution item
 */
const handleMouseOverTable = (item) => {
  listIdElement.map((e, index) => {
    const _elm = document.getElementById(e);
    const _classElement = document.getElementsByClassName(e);
    if (_elm) {
      if (item.solutions.includes(e)) {
        _elm.style.opacity = '1';
        _elm.style.transition = 'all 0.3s ease';
      } else {
        _elm.style.opacity = '.2';
      }
    }

    if (_classElement.length && item.solutions.includes(e)) {
      for (let i = 0; i < _classElement.length; i++) {
        const element = _classElement[i].id;
        const _elementLine = document.getElementById(element);
        const name = `${_elementLine.className.animVal}`;

        if (_elementLine && name.includes(e)) {
          // _elementLine.style.scale = '1.03';
          _elementLine.style.opacity = '1';

          if (name.includes('cls-4')) {
            _elementLine.style.fill = '#d0ab9d';
          } else if (name.includes('cls-2')) {
            _elementLine.style.fill = '#f8e9df';
          } else if (name.includes('cls-5')) {
            _elementLine.style.fill = '#edd6c9';
          } else if (name.includes('cls-1')) {
            _elementLine.style.fill = '#a5918d';

            if (_elm && item.solutions.includes(e)) _elm.style.fill = 'black';
          }
        }
      }
    }
  });
  if (!item.definition) return;
  approachDefinition.innerText = item.definition;
  approachDefinition.classList.remove('hidden');
};

// Add initial content to the risks table
updateTableContent(risks);
