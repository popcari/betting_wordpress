// data
const risks = [
	{
		id: 0,
		name: 'Exploitation Of Workloads And Containers',
		solutions: ['CWPP', 'SIEM', 'TH/TI', 'PAM'],
	},
	{
		id: 1,
		name: 'Misconfiguration And Inadequate Change Control',
		solutions: ['CSPM', 'IT_Policy_Framework'],
	},
	{
		id: 2,
		name: 'Lack Of Cloud Security Architecture And Strategy',
		solutions: ['CASB', 'CWPP', 'CSPM', 'IT_Policy_Framework', 'Single_Internet_Breakout'],
	},
	{
		id: 3,
		name: 'Accidental Cloud Data Disclosure',
		solutions: ['DLP', 'Encryption', 'CSPM', 'Training_&_awareness'],
	},
	{
		id: 4,
		name: 'Insecure Software Development',
		solutions: ['VA/PT', 'Security', 'WAST', 'Security_Assessment'],
	},
	{
		id: 5,
		name: 'Organised Crime Hacker An APT',
		solutions: ['SIEM', 'Training_&_awareness', 'TH/TI'],
	},
	{
		id: 6,
		name: 'System Vulnerabilities',
		solutions: ['Patch_mgmt', 'VA', 'TH/TI', 'SIEM'],
	},
	{
		id: 7,
		name: 'Insecure Interfaces And APIs',
		solutions: ['WAF', 'Code Review', 'WAST'],
	},
	{
		id: 8,

		name: 'Insufficient Identity, Access And Key Mgmt. Privileged Accounts',
		solutions: ['2FA', 'RBAC', 'PIM/PAM'],
	},
	{
		id: 9,
		name: 'DLP',
		solutions: ['Encryption', 'UEBA', 'DLP'],
	},
]
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
			'Database Security',
			'Endpoint Security',
			'Applications Security',
			'Identity and ',
			'Access Management',
			'Workload Security',
			'Data & Content Security',
			'Process Management',
			'Security_Assessment',
			'Segmentation',
			'Cloud Security',
			'Network Security',
			'PAM',
			'PCI/GDPR/APRA//Essential',
			'Content',
		],
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
		],
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
			// missing content in image
			'PAM',
			'TH/TI',
			'VA/PT',
		],
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
		],
	},
]
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
	'Database Security',
	'Endpoint Security',
	'Applications Security',
	'Identity and ',
	'Access Management',
	'Workload Security',
	'Data & Content Security',
	'Process Management',
	'Security_Assessment',
	'Compliance Management',
	'NW Forensic and Analyses',
	'Segmentation',
	'Cloud Security',
	'Network Security',
	'PAM',
	'PCI/GDPR/APRA//Essential',
	'Content',
]

let riskTabIsOpen = true;
const risksTableElement = document.getElementById('risks__table');
const approachTableElement = document.getElementById('approach');

const risksTableHeader = document.getElementById('riskTab');
const approachTableHeader = document.getElementById('approachTab');
risksTableHeader.classList.add('bg-[#FFAB40]', 'text-white', 'uppercase', 'underline');
approachTableHeader.classList.remove('bg-[#FFAB40]', 'text-white', 'uppercase', 'underline');

listIdElement.forEach((id) => {
	const _elm = document.getElementById(id)
	if (_elm) {
		_elm.addEventListener('mouseover', _onMover)
		_elm.addEventListener('mouseleave', _onLeaver)
	}
})

function _onMover(e) {
	listIdElement.forEach((id) => {
		const _elm = document.getElementById(id);
		if (_elm) {
			_elm.style.opacity = id === e.target.id ? '1' : '.2';
			_elm.style.transition = 'all 0.2s ease-in';
		}
	});
}

function _onLeaver() {
	listIdElement.forEach((id) => {
		const _elm = document.getElementById(id);
		if (_elm)
			_elm.style.opacity = '1';
	})
}

function onRiskTabClick() {
	riskTabIsOpen = true;
	updateTableContent(risks);

	if (approachTableElement) {
		approachTableElement.style.display = 'none';

		risksTableElement.style.display = 'grid';
		risksTableHeader.classList.add('bg-[#FFAB40]', 'text-white', 'uppercase', 'underline');
		approachTableHeader.classList.remove('bg-[#FFAB40]', 'text-white', 'uppercase', 'underline');
	}
}

function onApproachClick() {
	riskTabIsOpen = false;
	updateTableContent(solutions);

	if (risksTableElement) {
		risksTableElement.style.display = 'none';

		approachTableElement.style.display = 'grid';
		approachTableHeader.classList.add('bg-[#FFAB40]', 'text-white', 'uppercase', 'underline');
		risksTableHeader.classList.remove('bg-[#FFAB40]', 'text-white', 'uppercase', 'underline');
	}
}
function updateTableContent(data) {
	const tableContainer = document.getElementById(riskTabIsOpen ? 'risks__table' : 'approach');
	tableContainer.innerHTML = '';

	data.forEach((item, index) => {
		const tableItem = document.createElement('div');
		tableItem.classList.add('p-2', 'hover:bg-[#FFAB40]', 'hover:text-white', 'border', 'border-solid', 'border-[#DBDBDB]', 'hover:transition-colors');
		tableItem.addEventListener('mousemove', () => handleMouseOverTable(item));
		tableItem.addEventListener('mouseleave', handleMouseLeaveTable);
		tableItem.innerText = item.name;

		if (!riskTabIsOpen) {
			const approachContent = document.createElement('div');
			approachContent.classList.add('approach__content', 'hidden');
			approachContent.innerText = JSON.stringify(item.solutions);
			tableItem.appendChild(approachContent);

			// Toggle content visibility on click
			tableItem.addEventListener('click', () => {
				approachContent.classList.toggle('hidden');
			});
		}

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
	const _line = document.getElementById('line__background')

	_line.style.fill = '#fff0'
	listIdElement.map((e, index) => {
		const _elm = document.getElementById(e)
		if (_elm) {
			_elm.style.opacity = '1'
			// _elm.style.fontSize = '14'
			_elm.style.fill = 'black'
		}
		const _classElement = document.getElementsByClassName(e)
		if (_classElement.length) {
			for (let i = 0; i < _classElement.length; i++) {
				const element = _classElement[i].id
				const _elementLine = document.getElementById(element)
				const name = `${(_elementLine.className).animVal}`

				if (_elementLine) {
					_elementLine.style.scale = '1'
					if (name.includes('cls-4')) {
						_elementLine.style.fill = '#b1b1b1'
					} else if (name.includes('cls-5')) {
						_elementLine.style.fill = '#cbcbcb'
					} else if (name.includes('cls-1')) {
						_elementLine.style.fill = '#85d5e6'
					}
				}
			}
		}
	})

	const layer4 = document.querySelectorAll('.cls-2')
	const layer3 = document.querySelectorAll('.cls-5')
	const layer2 = document.querySelectorAll('.cls-4')
	const layer1 = document.querySelectorAll('.cls-1')

	for (let i = 0; i < layer1.length; i++) {
		let l1_element = layer1[i].id
		let l2_element = layer2[i].id
		let l3_element = layer3[i].id
		let l4_element = layer4[i].id

		const l1_chartPart = document.getElementById(l1_element)
		const l2_chartPart = document.getElementById(l2_element)
		const l3_chartPart = document.getElementById(l3_element)
		const l4_chartPart = document.getElementById(l4_element)

		if (l1_chartPart) {
			l1_chartPart.style.opacity = '1'
			l2_chartPart.style.opacity = '1'
			l3_chartPart.style.opacity = '1'
			l4_chartPart.style.opacity = '1'
		}
	}
}

/**
 * TODO: table mouse over event handler
 * @param item : risks/solution item
 */
const handleMouseOverTable = (item) => {
	;['cls-1', 'cls-4', 'cls-5', 'cls-2'].map((e) => {
		const _classElement = document.getElementsByClassName(e)
		if (_classElement.length) {
			for (let i = 0; i < _classElement.length; i++) {
				const element = _classElement[i].id
				const _elementLine = document.getElementById(element)
			}
		}
	})

	listIdElement.map((e, index) => {
		const _elm = document.getElementById(e)
		const _classElement = document.getElementsByClassName(e)

		if (_elm) {
			if (item.solutions.includes(e)) {
				_elm.style.opacity = '1'
				_elm.style.transition = 'all 0.3s ease'
			} else {
				_elm.style.opacity = '.2'
				_elm.style.fill = 'black'
			}
		}
		if (_classElement.length && item.solutions.includes(e)) {
			for (let i = 0; i < _classElement.length; i++) {
				const element = _classElement[i].id
				const _elementLine = document.getElementById(element)
				const name = `${(_elementLine.className).animVal}`

				if (_elementLine && name.includes(e)) {
					// _elementLine.style.scale = '1.03'
					_elementLine.style.opacity = '1'
					if (name.includes('cls-4')) {
						// _elementLine.style.fill = '#2b2a2a'
					} else if (name.includes('cls-5')) {
						// _elementLine.style.fill = 'black'
					} else if (name.includes('cls-1')) {
						// _elementLine.style.fill = '#5ae2ff'
						// if(_elm && item.solutions.includes(e))
						//   _elm.style.fill = "black"
					}
				}
			}
		}
	})
}

// Add initial content to the risks table
updateTableContent(risks);