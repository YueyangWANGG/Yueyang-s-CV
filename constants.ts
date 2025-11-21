import { ContactInfo, Education, Project, SkillCategory } from './types';

export const CONTACT: ContactInfo = {
  phone: ['+33 780781108', '+86 19965354517'],
  email: 'yueyang.wang@etu.univ-amu.fr',
  location: 'Aix-Marseille, France / Xidian, China',
  linkedin: 'www.linkedin.com/in/yueyang-wang-7556ba387'
};

export const EDUCATION: Education[] = [
  {
    school: 'Aix-Marseille University',
    degree: 'Master in Microelectronics and Telecommunications Engineering',
    period: '2024 – 2026',
    location: 'France',
    details: [
      'Analog and digital integrated circuit design',
      'Microcontrollers and embedded systems (PIC18F, STM32)',
      'FPGA development (VHDL)',
      'Processor architecture',
      'CMOS and power electronics technologies'
    ]
  },
  {
    school: 'Xidian University',
    degree: 'B.Eng. in Electronic Information Engineering',
    period: '2021 – 2025',
    location: 'China',
    details: [
      'Analog electronics, Digital circuits',
      'Semiconductor devices',
      'FPGA design (VHDL)',
      'Integrated circuit design',
      'Signal processing'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Random Number Quality Detector (AIS-31)',
    tech: 'STM32 L476-RG / C',
    description: 'Development integrating T0-T8 tests from AIS-31 standard. Focused on acquisition and statistical analysis of random bitstreams to evaluate hardware generator quality.'
  },
  {
    title: 'Embedded Project on PIC18F2331',
    tech: 'Microcontroller / C / MPLAB X IDE',
    description: 'Designed an embedded system integrating sensors and display, configured UART and PWM interfaces. Validated experimentally with an oscilloscope.'
  },
  {
    title: 'Complete Design of a Digital ASIC',
    tech: 'VHDL / Synopsys / Cadence Innovus',
    description: 'Implementation of an 8-bit RISC microprocessor. Simulation (ModelSim), Synthesis (Synopsys Design Compiler), Place & Route (Cadence Innovus), and final layout verification (Virtuoso).'
  },
  {
    title: 'RISC-V Processor Implementation',
    tech: 'FPGA / VHDL / Quartus',
    description: 'Designed in VHDL, simulated with ModelSim, and implemented on FPGA using Quartus. Validated processor pipeline functionality.'
  },
  {
    title: 'Analog Circuit Design',
    tech: 'Cadence Virtuoso',
    description: 'Realization of a differential amplifier and current mirror. Performance validation achieved through DC/AC and Monte-Carlo simulations.'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'IC Design & Simulation',
    skills: ['Cadence Virtuoso', 'Synopsys Design Compiler', 'ModelSim', 'Quartus', 'Innovus']
  },
  {
    category: 'Programming & Embedded',
    skills: ['C', 'C++', 'Python', 'VHDL', 'Verilog', 'Assembly', 'STM32', 'PIC18F']
  },
  {
    category: 'Tools & Hardware',
    skills: ['Git/GitHub', 'MATLAB', 'FPGA (Nexys A7)', 'Oscilloscopes', 'Measurement Instruments']
  },
  {
    category: 'Languages',
    skills: ['English (Advanced B2)', 'French (Advanced B2)', 'Chinese (Native)']
  }
];