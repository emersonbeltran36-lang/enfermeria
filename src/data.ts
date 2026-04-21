import { Procedure, Drug, Pathology, LabValue, DictionaryEntry, ClinicalCase } from './types';

export const PROCEDURES: Procedure[] = [
  {
    id: 'cvc',
    name: 'Cateterismo Venoso Central',
    type: 'invasive',
    materials: [
      'Kit de CVC (catéter, guía, dilatador)',
      'Solución antiséptica (Clorhexidina)',
      'Campos estériles',
      'Gasa estéril',
      'Sutura (Seda 2-0 o 3-0)',
      'Anestésico local (Lidocaína 1% o 2%)',
      'Solución salina 0.9%'
    ],
    steps: [
      'Posicionamiento del paciente (Trendelenburg si es yugular/subclavia).',
      'Lavado de manos quirúrgico y postura de EPP.',
      'Asepsia y antisepsia de la zona.',
      'Infiltración de anestésico local.',
      'Punción y técnica de Seldinger.',
      'Verificación de retorno venoso.',
      'Fijación del catéter y curación plana.'
    ],
    biosecurity: [
      'Uso obligatorio de bata, gorro, tapabocas N95 y guantes estériles.',
      'Manejo estricto de técnica aséptica.',
      'Desecho de cortopunzantes en guardián.'
    ]
  },
  {
    id: 'sv',
    name: 'Toma de Signos Vitales',
    type: 'non-invasive',
    materials: [
      'Tensionómetro',
      'Fonendoscopio',
      'Termómetro',
      'Oxímetro de pulso',
      'Reloj con segundero'
    ],
    steps: [
      'Explicar el procedimiento al paciente.',
      'Asegurar que el paciente esté en reposo (mín. 5 min).',
      'Medir Tensión Arterial (TA).',
      'Medir Frecuencia Cardíaca (FC) y Respiratoria (FR).',
      'Medir Temperatura y Saturación de Oxígeno (SpO2).',
      'Registrar en la hoja de signos vitales.'
    ],
    biosecurity: [
      'Lavado de manos antes y después del contacto.',
      'Desinfección de equipos entre pacientes.'
    ]
  },
  {
    id: 'sng',
    name: 'Sondaje Nasogástrico',
    type: 'invasive',
    materials: [
      'Sonda Nasogástrica (Levin) calibre adecuado',
      'Lubricante hidrosoluble',
      'Jeringa de 50cc (pico catéter)',
      'Fonendoscopio',
      'Cinta adhesiva hipoalérgica / Fijador',
      'Vaso con agua y pitillo (si no hay contraindicación)',
      'Guantes limpios',
      'Gasas y toalla'
    ],
    steps: [
      'Informar al paciente y posicionar en Fowler alto (90°).',
      'Medir la distancia (Nariz - Lóbulo oreja - Apéndice xifoides).',
      'Lubricar la punta de la sonda (aprox. 10cm).',
      'Insertar suavemente por la narina hacia la faringe.',
      'Pedir al paciente que trague mientras se avanza rápidamente.',
      'Verificar ubicación: aspirar contenido gástrico o insuflar aire auscultando epigastrio.',
      'Fijar la sonda de forma segura sin presionar la narina.',
      'Conectar a drenaje o dejar pinzada según indicación.'
    ],
    biosecurity: [
      'Uso de guantes, tapabocas y protección ocular.',
      'Riesgo de tos o emesis durante la inserción.',
      'Verificar siempre permeabilidad antes de administrar nutrición.'
    ]
  },
  {
    id: 'foley',
    name: 'Sondaje Vesical (Foley)',
    type: 'invasive',
    materials: [
      'Sonda Foley (calibre según indicación)',
      'Bolsa recolectora de orina (circuito cerrado)',
      'Guantes estériles y guantes limpios',
      'Campo estéril hendido',
      'Solución antiséptica (Yodopovidona o Clorhexidina)',
      'Lubricante urológico estéril (Lidocaína jalea)',
      'Jeringa de 10cc con agua destilada',
      'Kit de aseo perineal',
      'Gasas estériles'
    ],
    steps: [
      'Privacidad del paciente y aseo perineal previo.',
      'Lavado de manos y apertura técnica de equipo estéril.',
      'Colocación de guantes estériles y campo.',
      'Lubricar la uretra (u hombres) o la punta de la sonda.',
      'Introducir la sonda hasta visualizar retorno de orina.',
      'Inflar el balón de autorretención con 10cc de agua destilada.',
      'Traccionar suavemente y conectar al sistema de drenaje.',
      'Fijar la sonda en el muslo para evitar tracción uretral.'
    ],
    biosecurity: [
      'Técnica aséptica estricta (prevención de ITU asociada a catéter).',
      'Mantener la bolsa recolectora por debajo del nivel de la vejiga.',
      'Higiene diaria del meato urinario.'
    ]
  },
  {
    id: 'intub',
    name: 'Intubación Endotraqueal',
    type: 'invasive',
    materials: [
      'Laringoscopio con hojas (Curva/Recta)',
      'Tubo endotraqueal (TET) - Calibre adecuado',
      'Fiador o guía',
      'Jeringa de 10cc (para inflar balón)',
      'Dispositivo bolsa-válvula-mascarilla (AMBU)',
      'Fuente de Oxígeno',
      'Sistema de succión y sondas',
      'Fijador de tubo',
      'Monitor de signos vitales y capnografía'
    ],
    steps: [
      'Preparar equipo y verificar balón del tubo.',
      'Preoxigenar al paciente al 100% durante 3-5 min.',
      'Administrar medicación de inducción y parálisis (Secuencia Rápida).',
      'Alinear ejes (posición de olfateo).',
      'Laringoscopia directa y visualización de cuerdas vocales.',
      'Inserción del TET hasta la marca adecuada (21-23 cm).',
      'Inflar el manguito (cuff) y verificar posición (Auscultación/Capnografía).',
      'Fijar el tubo y conectar a ventilación mecánica o AMBU.'
    ],
    biosecurity: [
      'Protección facial completa (monogafas, careta, tapabocas N95).',
      'Uso de guantes limpios.',
      'Riesgo alto de aerosolización.'
    ]
  },
  {
    id: 'pl',
    name: 'Punción Lumbar',
    type: 'invasive',
    materials: [
      'Kit de punción lumbar (Aguja de Quincke o atraumática)',
      'Manómetro de presión de LCR',
      'Tubos de recolección estériles (mínimo 3)',
      'Campos y gasas estériles',
      'Solución antiséptica',
      'Anestésico local (Lidocaína 1%)',
      'Jeringas y agujas para infiltración'
    ],
    steps: [
      'Posicionar al paciente (Decúbito lateral o sentado con espalda arqueada).',
      'Localizar espacio intervertebral (L3-L4 o L4-L5).',
      'Lavado quirúrgico, guantes estériles y asepsia de la zona.',
      'Colocar campo estéril e infiltrar anestesia local.',
      'Insertar aguja de punción con el bisel paralelo a las fibras.',
      'Sentir la "pérdida de resistencia" al atravesar el duramadre.',
      'Retirar estilete, medir presión de apertura y recolectar LCR.',
      'Reinsertar estilete, retirar aguja y aplicar apósito.'
    ],
    biosecurity: [
      'Técnica estéril rigurosa (riesgo de meningitis iatrogénica).',
      'Uso de tapabocas, bata y guantes estériles.',
      'Manejo cuidadoso de muestras biológicas.'
    ]
  },
  {
    id: 'tora',
    name: 'Toracocentesis (Drenaje Pleural)',
    type: 'invasive',
    materials: [
      'Cánula de toracocentesis o aguja de gran calibre',
      'Llave de tres vías y sistema de extensión',
      'Bolsa recolectora o frascos para vacío',
      'Jeringas de 20-50cc',
      'Anestesia local y antiséptico',
      'Campos y gasas estériles'
    ],
    steps: [
      'Confirmar sitio de punción (Clínica/Ecografía).',
      'Paciente sentado con brazos apoyados en mesa auxiliar.',
      'Asépsia profunda e infiltración de anestésico local hasta pleura parietal.',
      'Insertar aguja/catéter por el borde superior de la costilla inferior.',
      'Aspirar líquido para confirmar ubicación.',
      'Drenar cantidad necesaria (no exceder 1500cc por sesión).',
      'Retirar catéter en espiración forzada o maniobra de Valsalva.',
      'Control radiográfico post-procedimiento.'
    ],
    biosecurity: [
      'Riesgo de neumotórax o hemotórax.',
      'Uso de técnica estéril completa.',
      'Evitar entrada de aire al sistema durante el drenaje.'
    ]
  },
  {
    id: 'para',
    name: 'Paracentesis (Drenaje de Ascitis)',
    type: 'invasive',
    materials: [
      'Abocath de calibre grueso (14-16G) o kit de paracentesis',
      'Sistema de venoclisis y llave de tres vías',
      'Frascos recolectores o bolsa de drenaje',
      'Solución antiséptica y anestesia local',
      'Apósito estéril'
    ],
    steps: [
      'Verificar vaciado vesical previo.',
      'Posicionar al paciente en decúbito supino levemente ladeado.',
      'Ubicar sitio (generalmente fosa ilíaca izquierda, unión tercio externo y medio).',
      'Asepsia y anestesia local cutánea y peritoneal.',
      'Introducir aguja con técnica de "Z" para evitar fugas posteriores.',
      'Conectar sistema de drenaje al obtener líquido citrino/hemático.',
      'Extraer muestras para laboratorio.',
      'Finalizar, retirar aguja y realizar compresión en el sitio.'
    ],
    biosecurity: [
      'Riesgo de peritonitis bacteriana o perforación intestinal.',
      'Considerar reposición de Albúmina si el drenaje es >5 litros.',
      'Técnica aséptica.'
    ]
  },
  {
    id: 'aga',
    name: 'Gasometría Arterial (AGA)',
    type: 'invasive',
    materials: [
      'Jeringa pre-heparinizada para gases',
      'Aguja calibre 22-25G',
      'Gasas y alcohol / antiséptico',
      'Hielo para transporte de muestra',
      'Guantes limpios'
    ],
    steps: [
      'Realizar test de Allen para verificar circulación colateral.',
      'Palpar pulso arterial (Radial es primera elección).',
      'Asepsia de la zona.',
      'Punzar en ángulo de 45° (radial) hasta ver llenado pulsátil automático.',
      'Extraer 1-2cc de sangre arterial.',
      'Retirar aguja y realizar compresión firme (mín. 5 min).',
      'Eliminar burbujas de aire de la jeringa y tapar herméticamente.',
      'Enviar inmediatamente al laboratorio en medio frío.'
    ],
    biosecurity: [
      'Riesgo de hematoma o isquemia distal.',
      'Uso de guantes por exposición a sangre.',
      'Eliminación de aguja en guardián inmediatamente.'
    ]
  },
  {
    id: 'ecg',
    name: 'Electrocardiograma (ECG)',
    type: 'non-invasive',
    materials: [
      'Electrocardiógrafo',
      'Electrodos desechables o ventosas',
      'Gel conductor / Alcohol',
      'Papel termosensible para ECG',
      'Gillette (si requiere rasurado)'
    ],
    steps: [
      'Explicar el procedimiento y retirar objetos metálicos.',
      'Paciente en decúbito supino, relajado y sin hablar.',
      'Limpiar piel en sitios de conexión.',
      'Colocar electrodos periféricos (R, L, F, N).',
      'Colocar electrodos precordiales (V1 a V6) en espacios intercostales.',
      'Configurar equipo (25mm/seg y 10mm/mV).',
      'Realizar captura del trazado en 12 derivaciones.',
      'Revisar la calidad del trazado antes de retirar electrodos.'
    ],
    biosecurity: [
      'Higiene de manos.',
      'Limpieza de cables y peras entre usos.',
      'Respetar la intimidad del paciente.'
    ]
  }
];

export const DRUGS: Drug[] = [
  {
    id: 'fenta',
    name: 'Fentanilo',
    group: 'Analgésico Opioide',
    mechanism: 'Agonista de receptores mu-opioides.',
    dosage: 'Adultos: 50-100 mcg bolo. Peds: 1-3 mcg/kg.',
    route: 'Intravenosa (IV), Intramuscular (IM)',
    contraindications: [
      'Hipersensibilidad a opioides',
      'Depresión respiratoria grave',
      'Trauma craneoencefálico grave'
    ]
  },
  {
    id: 'mida',
    name: 'Midazolam',
    group: 'Benzodiazepina / Sedante',
    mechanism: 'Facilita la acción del GABA en el SNC.',
    dosage: 'Adultos: 1-5 mg bolo. Peds: 0.1-0.2 mg/kg.',
    route: 'IV, IM, Intranasal',
    contraindications: [
      'Glaucoma de ángulo cerrado',
      'Miastenia gravis',
      'Insuficiencia respiratoria severa'
    ]
  },
  {
    id: 'adre',
    name: 'Adrenalina',
    group: 'Adrenérgico (Catecolamina)',
    mechanism: 'Agonista alfa y beta adrenérgico.',
    dosage: 'RCP: 1 mg cada 3-5 min. Peds: 0.01 mg/kg.',
    route: 'IV, Intraósea (IO), Subcutánea (SC), IM',
    contraindications: [
      'Arritmias ventriculares graves',
      'Hipertensión no controlada',
      'Glaucoma de ángulo estrecho'
    ]
  },
  {
    id: 'nora',
    name: 'Noradrenalina',
    group: 'Vasopresor / Inotrópico',
    mechanism: 'Estimulante alfa-1 y beta-1 adrenérgico.',
    dosage: 'Infusión: 0.05 - 0.5 mcg/kg/min.',
    route: 'Vía Central (Exclusivo)',
    contraindications: [
      'Hipovolemia no corregida',
      'Trombosis vascular periférica',
      'Hipotensión por déficit de volumen'
    ]
  },
  {
    id: 'amio',
    name: 'Amiodarona',
    group: 'Antiarrítmico Clase III',
    mechanism: 'Prolonga el potencial de acción y periodo refractario.',
    dosage: 'RCP: 300 mg inicial. Peds: 5 mg/kg.',
    route: 'IV (Dextrosa 5% únicamente)',
    contraindications: [
      'Bloqueo AV de 2º o 3º grado',
      'Bradicardia sinusal severa',
      'Shock cardiogénico'
    ]
  },
  {
    id: 'prop',
    name: 'Propofol',
    group: 'Hipnótico de acción corta',
    mechanism: 'Agonista de receptores GABA-A.',
    dosage: 'Inducción: 1.5 - 2.5 mg/kg.',
    route: 'IV',
    contraindications: [
      'Alergia al huevo o proteína de soja',
      'Hipotensión grave',
      'Niños menores de un mes'
    ]
  },
  {
    id: 'dopa',
    name: 'Dopamina',
    group: 'Inotrópico / Vasopresor',
    mechanism: 'Estimula receptores dopaminérgicos y adrenérgicos.',
    dosage: '2-20 mcg/kg/min según efecto buscado.',
    route: 'IV (Preferible vía central)',
    contraindications: [
      'Feocromocitoma',
      'Taquiarritmias ventriculares',
      'Fibrilación ventricular'
    ]
  }
];

export const PATHOLOGIES: Pathology[] = [
  {
    id: 'iam',
    name: 'Infarto Agudo de Miocardio (IAM)',
    system: 'Cardiovascular',
    definition: 'Muerte de tejido cardíaco por falta de riego sanguíneo.',
    affectedTarget: 'Miocardio (Células del músculo cardíaco)',
    symptoms: [
      'Dolor retroesternal opresivo',
      'Diaforesis (sudoración fría)',
      'Disnea (dificultad respiratoria)',
      'Náuseas/vómitos'
    ],
    nursingCare: [
      'Reposo absoluto y monitorización continua.',
      'Administración de Oxígeno si SpO2 < 94%.',
      'Acceso venoso periférico de grueso calibre.',
      'Toma de EKG de 12 derivaciones (prioridad).',
      'Manejo del dolor (Escala EVA).'
    ]
  },
  {
    id: 'epoc',
    name: 'EPOC Exacerbado',
    system: 'Respiratorio',
    definition: 'Obstrucción crónica y progresiva del flujo de aire.',
    affectedTarget: 'Alvéolos y bronquiolos pulmonares',
    symptoms: [
      'Aumento de disnea',
      'Aumento de producción de esputo',
      'Sibilancias',
      'Uso de músculos accesorios'
    ],
    nursingCare: [
      'Posición fowler o semi-fowler.',
      'Oxigenoterapia controlada (objetivo SpO2 88-92%).',
      'Administración de broncodilatadores y corticoides.',
      'Vigilancia de signos de fatiga muscular respiratoria.'
    ]
  },
  {
    id: 'ic',
    name: 'Insuficiencia Cardíaca Congestiva (ICC)',
    system: 'Cardiovascular',
    definition: 'Falla del corazón para bombear suficiente sangre.',
    affectedTarget: 'Ventrículos cardíacos',
    symptoms: [
      'Edema en miembros inferiores',
      'Disnea paroxística nocturna',
      'Ortopnea',
      'Ingurgitación yugular'
    ],
    nursingCare: [
      'Control estricto de líquidos (ingesta y eliminación).',
      'Pesaje diario del paciente.',
      'Posición fowler para mejorar la expansión pulmonar.',
      'Monitoreo de electrolitos (especialmente Potasio).'
    ]
  },
  {
    id: 'neumo',
    name: 'Neumonía Adquirida en Comunidad',
    system: 'Respiratorio',
    definition: 'Infección aguda del parénquima pulmonar.',
    affectedTarget: 'Parénquima pulmonar (alvéolos)',
    symptoms: [
      'Fiebre y escalofríos',
      'Tos productiva purulenta',
      'Dolor torácico pleurítico',
      'Taquipnea'
    ],
    nursingCare: [
      'Fomentar la hidratación para fluidificar secreciones.',
      'Estimular deambulación temprana y cambios de posición.',
      'Administración de antibioticoterapia según horario.',
      'Terapia respiratoria.'
    ]
  },
  {
    id: 'ira',
    name: 'Insuficiencia Renal Aguda (IRA)',
    system: 'Renal',
    definition: 'Pérdida rápida de la función filtrante del riñón.',
    affectedTarget: 'Nefronas (Unidad funcional del riñón)',
    symptoms: [
      'Oliguria o anuria',
      'Edema generalizado',
      'Náuseas y debilidad',
      'Alteración del estado mental'
    ],
    nursingCare: [
      'Balance hídrico riguroso cada 6 horas.',
      'Vigilancia de signos de hiperpotasemia.',
      'Control de peso diario.',
      'Ajuste de dosis de medicamentos según aclaramiento.'
    ]
  },
  {
    id: 'acv',
    name: 'Evento Cerebrovascular (ACV)',
    system: 'Neurológico',
    definition: 'Interrupción súbita del flujo sanguíneo al cerebro.',
    affectedTarget: 'Neuronas y vasos sanguíneos cerebrales',
    symptoms: [
      'Asimetría facial',
      'Hemiparesia o hemiplejía',
      'Disartria o afasia',
      'Cefalea intensa súbita'
    ],
    nursingCare: [
      'Valoración neurológica frecuente (Escala de Glasgow).',
      'Mantener cabecera a 30°.',
      'Prevención de broncoaspiración.',
      'Vigilancia de la presión arterial media (PAM).'
    ]
  },
  {
    id: 'cad',
    name: 'Cetoacidosis Diabética (CAD)',
    system: 'Endocrino',
    definition: 'Crisis hiperglucémica con presencia de cuerpos cetónicos.',
    affectedTarget: 'Células beta pancreáticas (déficit de insulina) y metabolismo celular',
    symptoms: [
      'Respiración de Kussmaul',
      'Aliento cetónico',
      'Poliuria y polidipsia intensa',
      'Dolor abdominal'
    ],
    nursingCare: [
      'Administración de insulina cristalina en infusión.',
      'Reposición agresiva de líquidos.',
      'Control de glucometría cada hora.',
      'Monitoreo estricto de Potasio sérico.'
    ]
  }
];

export const LAB_VALUES: LabValue[] = [
  // Hematología
  { name: 'Hemoglobina (Hgb) - Hombres', normalRange: '13.5 - 17.5', unit: 'g/dL' },
  { name: 'Hemoglobina (Hgb) - Mujeres', normalRange: '12.0 - 15.5', unit: 'g/dL' },
  { name: 'Hematocrito (Hct) - Hombres', normalRange: '41 - 50', unit: '%' },
  { name: 'Hematocrito (Hct) - Mujeres', normalRange: '36 - 44', unit: '%' },
  { name: 'Leucocitos (WBC)', normalRange: '4,500 - 11,000', unit: '/μL' },
  { name: 'Plaquetas', normalRange: '150,000 - 450,000', unit: '/μL' },
  
  // Electrolitos
  { name: 'Sodio (Na+)', normalRange: '135 - 145', unit: 'mEq/L' },
  { name: 'Potasio (K+)', normalRange: '3.5 - 5.0', unit: 'mEq/L' },
  { name: 'Cloro (Cl-)', normalRange: '96 - 106', unit: 'mEq/L' },
  { name: 'Calcio total (Ca++)', normalRange: '8.5 - 10.5', unit: 'mg/dL' },
  { name: 'Magnesio (Mg++)', normalRange: '1.7 - 2.2', unit: 'mg/dL' },
  
  // Función Renal y Metabólica
  { name: 'Creatinina', normalRange: '0.7 - 1.3', unit: 'mg/dL' },
  { name: 'BUN (Nitrógeno Ureico)', normalRange: '7 - 20', unit: 'mg/dL' },
  { name: 'Glucemia en ayunas', normalRange: '70 - 100', unit: 'mg/dL' },
  { name: 'HbA1c (Hemoglobina Glicosilada)', normalRange: '< 5.7', unit: '%' },
  
  // Coagulación
  { name: 'TP (Tiempo de Protrombina)', normalRange: '11 - 13.5', unit: 'seg' },
  { name: 'TTP (Tiempo de Tromboplastina)', normalRange: '25 - 35', unit: 'seg' },
  { name: 'INR', normalRange: '0.8 - 1.1', unit: 'ratio' },
  
  // Gases Arteriales y Marcadores
  { name: 'pH Arterial', normalRange: '7.35 - 7.45', unit: '-' },
  { name: 'pCO2', normalRange: '35 - 45', unit: 'mmHg' },
  { name: 'pO2', normalRange: '80 - 100', unit: 'mmHg' },
  { name: 'Bicarbonato (HCO3)', normalRange: '22 - 26', unit: 'mEq/L' },
  { name: 'Lactato', normalRange: '0.5 - 2.2', unit: 'mmol/L' },
  { name: 'PCR (Proteína C Reactiva)', normalRange: '< 1.0', unit: 'mg/dL' },
  { name: 'Troponina I', normalRange: '< 0.04', unit: 'ng/mL' }
];

export const DICTIONARY: DictionaryEntry[] = [
  // Abreviaturas Clínicas
  { term: 'Accidente Cerebrovascular', abbreviation: 'ACV', definition: 'Pérdida súbita de flujo sanguíneo al cerebro o sangrado dentro de la cabeza.', category: 'Abreviaturas' },
  { term: 'Frecuencia Cardíaca', abbreviation: 'FC', definition: 'Número de veces que el corazón late por unidad de tiempo, usualmente por minuto.', category: 'Abreviaturas' },
  { term: 'Frecuencia Respiratoria', abbreviation: 'FR', definition: 'Número de respiraciones que una persona toma por minuto.', category: 'Abreviaturas' },
  { term: 'Catéter Venoso Central', abbreviation: 'CVC', definition: 'Catéter cuya punta se sitúa en la vena cava superior o vena cava inferior.', category: 'Abreviaturas' },
  { term: 'Hipertensión Arterial', abbreviation: 'HTA', definition: 'Afección en la que la presión de la sangre hacia las paredes de la arteria es demasiado alta.', category: 'Abreviaturas' },
  { term: 'Diabetes Mellitus', abbreviation: 'DM', definition: 'Conjunto de trastornos metabólicos cuya característica común es la hiperglucemia.', category: 'Abreviaturas' },
  { term: 'Insuficiencia Renal Crónica', abbreviation: 'IRC', definition: 'Pérdida progresiva, permanente e irreversible de la función glomerular o tubular.', category: 'Abreviaturas' },
  { term: 'Infarto Agudo de Miocardio', abbreviation: 'IAM', definition: 'Necrosis del músculo cardíaco por falta de flujo sanguíneo coronario.', category: 'Abreviaturas' },
  { term: 'Enfermedad Pulmonar Obstructiva Crónica', abbreviation: 'EPOC', definition: 'Enfermedad inflamatoria pulmonar crónica que causa la obstrucción del flujo de aire.', category: 'Abreviaturas' },
  { term: 'Reanimación Cardiopulmonar', abbreviation: 'RCP', definition: 'Técnica de emergencia para salvar vidas que se utiliza cuando el corazón deja de latir.', category: 'Abreviaturas' },
  { term: 'Unidad de Cuidados Intensivos', abbreviation: 'UCI', definition: 'Instalación especial dentro de un hospital que proporciona medicina intensiva.', category: 'Abreviaturas' },
  { term: 'Presión Venosa Central', abbreviation: 'PVC', definition: 'Presión de la sangre en la vena cava superior cerca de la aurícula derecha.', category: 'Abreviaturas' },
  { term: 'Presión Arterial Media', abbreviation: 'PAM', definition: 'Promedio de la presión arterial durante un solo ciclo cardíaco.', category: 'Abreviaturas' },
  { term: 'Electrocardiograma', abbreviation: 'ECG', definition: 'Registro de la actividad eléctrica del corazón en función del tiempo.', category: 'Abreviaturas' },
  { term: 'Análisis de Gases Arteriales', abbreviation: 'AGA', definition: 'Medición de las presiones de gases en la sangre arterial.', category: 'Abreviaturas' },
  { term: 'Saturación de Oxígeno', abbreviation: 'SatO2', definition: 'Porcentaje de hemoglobina saturada con oxígeno en la sangre.', category: 'Abreviaturas' },
  { term: 'Nada por vía oral', abbreviation: 'NPO', definition: 'Instrucción médica que prohíbe la ingesta de alimentos o líquidos.', category: 'Abreviaturas' },
  { term: 'Vía Intravenosa', abbreviation: 'IV', definition: 'Administración de sustancias directamente en el torrente sanguíneo a través de una vena.', category: 'Abreviaturas' },
  { term: 'Vía Intramuscular', abbreviation: 'IM', definition: 'Administración de fármacos directamente en el tejido muscular.', category: 'Abreviaturas' },
  { term: 'Asistencia Respiratoria Mecánica', abbreviation: 'ARM', definition: 'Soporte vital que ayuda o reemplaza la respiración espontánea.', category: 'Abreviaturas' },
  { term: 'Frecuencia Cardíaca Fetal', abbreviation: 'FCF', definition: 'Número de latidos cardíacos fetales observados por minuto.', category: 'Abreviaturas' },
  { term: 'Electroencefalograma', abbreviation: 'EEG', definition: 'Prueba que detecta la actividad eléctrica del cerebro.', category: 'Abreviaturas' },
  { term: 'Tomografía Computarizada', abbreviation: 'TC', definition: 'Procedimiento de imagen que usa rayos X para crear imágenes detalladas del cuerpo.', category: 'Abreviaturas' },
  { term: 'Resonancia Magnética', abbreviation: 'RM', definition: 'Técnica de imagen que utiliza campos magnéticos y ondas de radio.', category: 'Abreviaturas' },
  { term: 'Signos Vitales', abbreviation: 'SV', definition: 'Mediciones de las funciones más básicas del cuerpo; incluye FC, FR, PA y T°.', category: 'Abreviaturas' },
  { term: 'Fracción Inspirada de Oxígeno', abbreviation: 'FiO2', definition: 'Concentración o proporción de oxígeno en la mezcla inspirada.', category: 'Abreviaturas' },
  { term: 'Presión Arterial Sistólica', abbreviation: 'PAS', definition: 'Presión máxima en las arterias durante la contracción del corazón.', category: 'Abreviaturas' },
  { term: 'Presión Arterial Diastólica', abbreviation: 'PAD', definition: 'Presión mínima en las arterias cuando el corazón se relaja entre latidos.', category: 'Abreviaturas' },

  // Términos Generales y Clínicos
  { term: 'Disnea', definition: 'Dificultad respiratoria o falta de aire subjetiva.', category: 'General' },
  { term: 'Diaforesis', definition: 'Sudoración excesiva, especialmente cuando es síntoma de una enfermedad.', category: 'General' },
  { term: 'Bradicardia', definition: 'Frecuencia cardíaca inferior a 60 latidos por minuto.', category: 'General' },
  { term: 'Taquicardia', definition: 'Frecuencia cardíaca superior a 100 latidos por minuto.', category: 'General' },
  { term: 'Afasia', definition: 'Trastorno del lenguaje que afecta la capacidad de comunicación de una persona.', category: 'General' },
  { term: 'Apnea', definition: 'Suspensión transitoria de la respiración espontánea.', category: 'General' },
  { term: 'Ascitis', definition: 'Acumulación de líquido en la cavidad peritoneal (abdominal).', category: 'General' },
  { term: 'Atelectasia', definition: 'Colapso total o parcial de un pulmón o lóbulo pulmonar.', category: 'General' },
  { term: 'Bacteriemia', definition: 'Presencia de bacterias viables en el torrente sanguíneo.', category: 'General' },
  { term: 'Bradipnea', definition: 'Frecuencia respiratoria anormalmente lenta.', category: 'General' },
  { term: 'Cianosis', definition: 'Coloración azulada de la piel y mucosas por falta de oxígeno.', category: 'General' },
  { term: 'Colelitiasis', definition: 'Presencia de cálculos o piedras dentro de la vesícula biliar.', category: 'General' },
  { term: 'Disfagia', definition: 'Dificultad o imposibilidad de tragar alimentos sólidos o líquidos.', category: 'General' },
  { term: 'Disuria', definition: 'Dolor o ardor al orinar, generalmente causado por infección.', category: 'General' },
  { term: 'Edema', definition: 'Hinchazón causada por la acumulación excesiva de líquidos en los tejidos.', category: 'General' },
  { term: 'Embolia', definition: 'Obstrucción brusca de un vaso sanguíneo por un cuerpo extraño (émbolo).', category: 'General' },
  { term: 'Epistaxis', definition: 'Término médico para el sangrado o hemorragia nasal.', category: 'General' },
  { term: 'Eritema', definition: 'Enrojecimiento de la piel debido a inflamación o congestión de capilares.', category: 'General' },
  { term: 'Escara', definition: 'Tejido muerto o necrótico que se desprende de la piel sana.', category: 'General' },
  { term: 'Exudado', definition: 'Líquido con alto contenido proteico que sale de los vasos por inflamación.', category: 'General' },
  { term: 'Flebitis', definition: 'Inflamación de la pared de una vena, a menudo con formación de un trombo.', category: 'General' },
  { term: 'Hematemesis', definition: 'Vómito de sangre fresca o digerida proveniente del tracto digestivo alto.', category: 'General' },
  { term: 'Hemoptisis', definition: 'Expectoración de sangre que proviene del árbol respiratorio.', category: 'General' },
  { term: 'Hepatomegalia', definition: 'Aumento patológico del tamaño del hígado.', category: 'General' },
  { term: 'Hipoxia', definition: 'Estado de deficiencia de oxígeno en la sangre, células y tejidos.', category: 'General' },
  { term: 'Isquemia', definition: 'Sufrimiento celular por falta de flujo sanguíneo y oxígeno.', category: 'General' },
  { term: 'Melenas', definition: 'Expulsión de heces negras y viscosas debido a sangre digerida.', category: 'General' },
  { term: 'Oliguria', definition: 'Disminución de la producción de orina por debajo de los niveles normales.', category: 'General' },
  { term: 'Paresia', definition: 'Ausencia parcial de movimiento o debilidad muscular.', category: 'General' },
  { term: 'Parestesia', definition: 'Sensación de hormigueo, pinchazos o adormecimiento de una parte del cuerpo.', category: 'General' },
  { term: 'Prurito', definition: 'Sensación de picor cutáneo que provoca la necesidad de rascarse.', category: 'General' },
  { term: 'Síncope', definition: 'Pérdida súbita y temporal de la conciencia y del tono muscular.', category: 'General' },

  // Anatomía y Otros
  { term: 'Próxima a la Línea Media', definition: 'Ubicación anatómica cercana al eje central del cuerpo.', category: 'Anatomía' },
  { term: 'Decúbito Supino', definition: 'Posición anatómica del cuerpo humano tendido boca arriba.', category: 'Anatomía' },
  { term: 'Decúbito Prono', definition: 'Posición anatómica del cuerpo humano tendido boca abajo.', category: 'Anatomía' }
];

export const CLINICAL_CASES: ClinicalCase[] = [
  // CASOS DE FARMACOLOGÍA
  {
    id: 'pharm-1',
    category: 'pharmacology',
    title: 'Sobredosis de Opioides (Fentanilo)',
    patient: 'Masculino de 35 años hallado inconsciente con jeringa cerca. Pupilas puntiformes.',
    vitals: {
      fc: '52 lpm',
      fr: '6 rpm',
      pa: '90/50 mmHg',
      temp: '35.5 °C',
      sat: '82% (cianosis distal)'
    },
    scenario: 'Paciente con depresión respiratoria severa tras administración accidental de dosis elevada de Fentanilo.',
    treatment: 'Antagonista opioide: Naloxona 0.4mg IV cada 2-3 min según respuesta.',
    options: [
      'Naloxona 0.4mg IV',
      'Flumazenil 0.2mg IV',
      'Atropina 1mg IV',
      'N-acetilcisteína IV'
    ],
    correctAnswer: 'Naloxona 0.4mg IV',
    care: [
      'Asegurar vía aérea y ventilación con AMBU.',
      'Administración inmediata de Naloxona.',
      'Vigilancia estrecha de recurrencia de depresión respiratoria.',
      'Control de signos vitales cada 5 minutos.'
    ]
  },
  {
    id: 'pharm-2',
    category: 'pharmacology',
    title: 'Anafilaxia por Antibiótico',
    patient: 'Femenina de 45 años inicia con prurito súbito y edema de glotis tras dosis de Penicilina.',
    vitals: {
      fc: '130 lpm',
      fr: '34 rpm (estridor)',
      pa: '75/40 mmHg',
      temp: '37.0 °C',
      sat: '88%'
    },
    scenario: 'Reacción alérgica severa tipo I (mediada por IgE) con compromiso hemodinámico y respiratorio.',
    treatment: 'Adrenalina 0.5mg IM en cara anterolateral del muslo. Hidrocortisona y Difenhidramina IV.',
    options: [
      'Adrenalina 0.5mg IM',
      'Hidrocortisona 100mg IV',
      'Salbutamol en nebulización',
      'Metilprednisolona 40mg IV'
    ],
    correctAnswer: 'Adrenalina 0.5mg IM',
    care: [
      'Suspensión inmediata del agente causal.',
      'Administración de Adrenalina IM como prioridad absoluta.',
      'Posición de Trendelenburg si no hay dificultad respiratoria severa.',
      'Monitorización continua del ECG y saturación.'
    ]
  },
  {
    id: 'pharm-3',
    category: 'pharmacology',
    title: 'Intoxicación por Benzodiacepinas',
    patient: 'Masculino de 28 años con somnolencia profunda y bradipnea tras ingesta de 30 tabletas de Alprazolam.',
    vitals: {
      fc: '70 lpm',
      fr: '10 rpm',
      pa: '100/60 mmHg',
      temp: '36.0 °C',
      sat: '92%'
    },
    scenario: 'Depresión del SNC moderada-severa, reflejos osteotendinosos disminuidos.',
    treatment: 'Antagonista específico: Flumazenilo 0.2mg IV, repetir hasta 1-2mg según respuesta.',
    options: [
      'Flumazenilo 0.2mg IV',
      'Naloxona 0.4mg IV',
      ' Carbón Activado',
      'Fisostigmina 1mg IV'
    ],
    correctAnswer: 'Flumazenilo 0.2mg IV',
    care: [
      'Vigilancia de la permeabilidad de la vía aérea.',
      'Administración de Flumazenilo vigilando riesgo de convulsiones.',
      'Aspiración gástrica si la ingesta es reciente (<1-2h).',
      'Evaluación del estado de conciencia mediante Escala de Glasgow.'
    ]
  },
  {
    id: 'pharm-4',
    category: 'pharmacology',
    title: 'Intoxicación por Organofosforados',
    patient: 'Femenino de 42 años con miosis, sialorrea, bradicardia y fasciculaciones tras exposición a insecticidas.',
    vitals: {
      fc: '48 lpm',
      fr: '24 rpm (sibilancias)',
      pa: '90/60 mmHg',
      temp: '36.6 °C',
      sat: '90%'
    },
    scenario: 'Síndrome colinérgico por inhibición irreversible de la acetilcolinesterasa.',
    treatment: 'Atropina 1-2mg IV cada 5-10 min hasta atropinización y Pralidoxima.',
    options: [
      'Atropina IV + Pralidoxima',
      'Fisostigmina 0.5mg IV',
      'Naloxona 0.8mg IV',
      'Diazepan 10mg IV'
    ],
    correctAnswer: 'Atropina IV + Pralidoxima',
    care: [
      'Descontaminación externa (quitar ropa, lavar piel).',
      'Succión frecuente de secreciones.',
      'Administración de Atropina hasta secar secreciones bronquiales.',
      'Monitoreo hemodinámico y respiratorio estricto.'
    ]
  },
  {
    id: 'pharm-5',
    category: 'pharmacology',
    title: 'Sobredosis de Digitálicos',
    patient: 'Masculino de 80 años con náuseas, vómitos y visión en halos amarillos. ECG muestra cubeta digitálica y BAV.',
    vitals: {
      fc: '40 lpm',
      fr: '20 rpm',
      pa: '105/65 mmHg',
      temp: '36.4 °C',
      sat: '95%'
    },
    scenario: 'Toxicidad por Digoxina con niveles séricos de 3.5 ng/mL e hiperpotasemia.',
    treatment: 'Anticuerpos específicos (Fab) anti-digoxina y control de electrolitos.',
    options: [
      'Anticuerpos anti-digoxina',
      'Cloruro de Calcio IV',
      'Amiodarona 300mg IV',
      'Isoproterenol 1mg IV'
    ],
    correctAnswer: 'Anticuerpos anti-digoxina',
    care: [
      'Suspensión inmediata de Digoxina.',
      'Evitar Calcio IV (puede agravar arritmias).',
      'Instalar marcapasos transitorio si persiste el bloqueo severo.',
      'Control de niveles de Potasio sérico.'
    ]
  },
  {
    id: 'pharm-6',
    category: 'pharmacology',
    title: 'Intoxicación por Paracetamol',
    patient: 'Femenina de 18 años con dolor en hipocondrio derecho tras ingesta suicida de 15g de Paracetamol hace 8 horas.',
    vitals: {
      fc: '88 lpm',
      fr: '18 rpm',
      pa: '110/70 mmHg',
      temp: '36.8 °C',
      sat: '98%'
    },
    scenario: 'Hepatotoxicidad potencial por depleción de glutatión y acumulación de NABQI.',
    treatment: 'Precursor de glutatión: N-acetilcisteína (NAC) IV o VO según nomograma.',
    options: [
      'N-acetilcisteína (NAC)',
      'Silimarina 140mg VO',
      'L-ornitina L-aspartato',
      'Carbón Activado únicamente'
    ],
    correctAnswer: 'N-acetilcisteína (NAC)',
    care: [
      'Administración precoz de NAC para evitar insuficiencia hepática.',
      'Control de transaminasas y pruebas de coagulación.',
      'Valoración por psicología/psiquiatría tras estabilización.',
      'Balance hídrico y dieta hipoproteica inicial.'
    ]
  },
  {
    id: 'pharm-7',
    category: 'pharmacology',
    title: 'Toxicidad por Litio',
    patient: 'Masculino de 52 años con temblores groseros, ataxia, disartria y confusión progresiva.',
    vitals: {
      fc: '72 lpm',
      fr: '16 rpm',
      pa: '130/80 mmHg',
      temp: '37.0 °C',
      sat: '97%'
    },
    scenario: 'Litemia sérica de 2.8 mEq/L tras deshidratación por tratamiento con diuréticos.',
    treatment: 'Hidratación con solución salina y Hemodiálisis si la litemia es muy alta.',
    options: [
      'Hemodiálisis e Hidratación',
      'Administración de Magnesio IV',
      'Haloperidol 5mg IM',
      'Gluconato de Calcio IV'
    ],
    correctAnswer: 'Hemodiálisis e Hidratación',
    care: [
      'Suspensión inmediata de Litio y diuréticos.',
      'Hidratación con soluciones ricas en sodio para favorecer excreción renal.',
      'Vigilancia neurológica estricta (convulsiones).',
      'Monitorización de función renal.'
    ]
  },
  {
    id: 'pharm-8',
    category: 'pharmacology',
    title: 'Efectos Extrapiramidales por Antipsicóticos',
    patient: 'Masculino de 25 años con distonía aguda (tortícolis y crisis oculógiras) tras dosis de Haloperidol.',
    vitals: {
      fc: '90 lpm',
      fr: '18 rpm',
      pa: '120/80 mmHg',
      temp: '37.2 °C',
      sat: '99%'
    },
    scenario: 'Reacción adversa extrapiramidal aguda por bloqueo dopaminérgico.',
    treatment: 'Anticolinérgico central: Biperideno 2-5mg IM o Difenhidramina IV.',
    options: [
      'Biperideno o Difenhidramina',
      'Bromocriptina 2.5mg VO',
      'Diazepam 10mg IV',
      'Levodopa/Carbidopa VO'
    ],
    correctAnswer: 'Biperideno o Difenhidramina',
    care: [
      'Tranquilizar al paciente (la distonía es muy angustiante).',
      'Administración lenta de medicación rescate.',
      'Ajustar dosis o cambiar fármaco antipsicótico.',
      'Vigila retención urinaria secundaria al anticolinérgico.'
    ]
  },
  {
    id: 'pharm-9',
    category: 'pharmacology',
    title: 'Hipo-glucemia por Insulina',
    patient: 'Femenina de 60 años hallada con diaforesis fría, temblores e inconsciencia tras omitir comida.',
    vitals: {
      fc: '110 lpm',
      fr: '20 rpm',
      pa: '110/65 mmHg',
      temp: '35.9 °C',
      sat: '96%'
    },
    scenario: 'Glucemia capilar de 32 mg/dL. Paciente insulinodependiente.',
    treatment: 'Glucosa IV al 33-50% o Glucagón IM/SC si no hay acceso venoso.',
    options: [
      'Glucosa IV o Glucagón',
      'Suero Fisiológico 500cc',
      'Insulina rápida 2UI SC',
      'Agua con azúcar VO'
    ],
    correctAnswer: 'Glucosa IV o Glucagón',
    care: [
      'Recuperación rápida de la glucemia para evitar daño cerebral.',
      'Control de glucemia capilar cada 15-30 min.',
      'Canalización de vía venosa periférica segura.',
      'Educación sobre dieta y ajuste de dosis de insulina.'
    ]
  },
  {
    id: 'pharm-10',
    category: 'pharmacology',
    title: 'Hipertermia Maligna por Anestésicos',
    patient: 'Masculino de 40 años durante cirugía presenta rigidez muscular masiva, taquicardia y aumento de CO2.',
    vitals: {
      fc: '150 lpm',
      fr: '38 rpm',
      pa: '140/90 mmHg',
      temp: '41.5 °C',
      sat: '85%'
    },
    scenario: 'Reacción farmacogenética severa a Succinilcolina o gases halogenados.',
    treatment: 'Fármaco específico: Dantroleno sódico 2.5mg/kg IV y enfriamiento activo.',
    options: [
      'Dantroleno sódico',
      'Paracetamol 1g IV',
      'Propanolol 1mg IV',
      'Diazepan 10mg IV'
    ],
    correctAnswer: 'Dantroleno sódico',
    care: [
      'Suspensión inmediata de anestésicos gatillo.',
      'Enfriamiento físico agresivo (hielo, líquidos fríos).',
      'Tratamiento de la acidosis metabólica e hiperpotasemia.',
      'Monitorización en cuidados intensivos.'
    ]
  },
  // CASOS DE PATOLOGÍA
  {
    id: 'path-1',
    category: 'pathology',
    title: 'Neumonía con Sepsis',
    patient: 'Masculino de 72 años con fiebre, tos con expectoración purulenta y confusión mental.',
    vitals: {
      fc: '115 lpm',
      fr: '30 rpm',
      pa: '95/60 mmHg',
      temp: '39.2 °C',
      sat: '89%'
    },
    scenario: 'Focos de consolidación en base pulmonar derecha. Alteración del estado de conciencia (qSOFA positivo).',
    diagnosis: 'Neumonía Bacteriana Adquirida en la Comunidad complicándose con Sepsis.',
    options: [
      'Neumonía Bacteriana con Sepsis',
      'Insuficiencia Cardíaca Congestiva',
      'Tromboembolismo Pulmonar',
      'Atelectasia Masiva'
    ],
    correctAnswer: 'Neumonía Bacteriana con Sepsis',
    care: [
      'Iniciar oxigenoterapia para mantener SatO2 >92%.',
      'Toma de hemocultivos y cultivos de esputo.',
      'Administración de antibióticos de amplio espectro en la primera hora.',
      'Manejo de líquidos para mantener PAM >65 mmHg.'
    ]
  },
  {
    id: 'path-2',
    category: 'pathology',
    title: 'Infarto Agudo al Miocardio (IAM)',
    patient: 'Masculino de 58 años con dolor opresivo retroesternal irradiado a mandíbula y brazo izquierdo.',
    vitals: {
      fc: '108 lpm (arrítmico)',
      fr: '24 rpm',
      pa: '160/95 mmHg',
      temp: '36.8 °C',
      sat: '93%'
    },
    scenario: 'Diaforesis profusa, palidez cutánea y sensación de muerte inminente. ECG muestra elevación del segmento ST en V1-V4.',
    diagnosis: 'Infarto Agudo al Miocardio con Elevación del ST (IAMCEST) anteroseptal.',
    options: [
      'Infarto Agudo al Miocardio (IAMCEST)',
      'Angina de Pecho Estable',
      'Pericarditis Aguda',
      'Disección Aórtica'
    ],
    correctAnswer: 'Infarto Agudo al Miocardio (IAMCEST)',
    care: [
      'Administrar Oxígeno si SatO2 <94%.',
      'Monitoreo cardíaco continuo y ECG de 12 derivaciones.',
      'Administración de Aspirina y Clopidogrel según protocolo.',
      'Preparar para reperfusión inmediata (Angioplastia/Fibrinolisis).'
    ]
  },
  {
    id: 'path-3',
    category: 'pathology',
    title: 'Cetoacidosis Diabética (CAD)',
    patient: 'Femenina de 24 años con aliento cetósico (manzana), deshidratación y respiración rápida y profunda.',
    vitals: {
      fc: '120 lpm',
      fr: '28 rpm (Kussmaul)',
      pa: '90/50 mmHg',
      temp: '37.1 °C',
      sat: '97%'
    },
    scenario: 'Glucemia capilar de 450 mg/dL, cetonuria (+++) y dolor abdominal difuso.',
    diagnosis: 'Cetoacidosis Diabética severa.',
    options: [
      'Cetoacidosis Diabética',
      'Estado Hiperosmolar Hiperglucémico',
      'Abdomen Agudo Quirúrgico',
      'Intoxicación por Salicilatos'
    ],
    correctAnswer: 'Cetoacidosis Diabética',
    care: [
      'Hidratación agresiva con Solución Salina 0.9%.',
      'Iniciación de infusión de Insulina rápida.',
      'Monitoreo estricto de Potasio sérico.',
      'Control horario de glucemia y cetonemia.'
    ]
  },
  {
    id: 'path-4',
    category: 'pathology',
    title: 'Accidente Cerebrovascular (ACV)',
    patient: 'Masculino de 65 años con hemiparesia derecha súbita, desviación de la comisura bucal y afasia.',
    vitals: {
      fc: '88 lpm',
      fr: '18 rpm',
      pa: '190/110 mmHg',
      temp: '36.5 °C',
      sat: '96%'
    },
    scenario: 'Puntuación de 14 en la escala NIHSS. Tiempo de evolución: 2 horas desde el inicio de síntomas.',
    diagnosis: 'ACV Isquémico Agudo en territorio de la arteria cerebral media izquierda.',
    options: [
      'ACV Isquémico Agudo',
      'Hemorragia Intracraneal',
      'Ataque Isquémico Transitorio (AIT)',
      'Migraña con Aura'
    ],
    correctAnswer: 'ACV Isquémico Agudo',
    care: [
      'Mantenimiento de la vía aérea y cabecera a 30°.',
      'TC de cráneo urgente para descartar hemorragia.',
      'Control estricto de la Tensión Arterial.',
      'Valorar criterios para Terapia Trombolítica.'
    ]
  },
  {
    id: 'path-5',
    category: 'pathology',
    title: 'Edema Agudo de Pulmón (EAP)',
    patient: 'Femenina de 75 años con disnea paroxística nocturna, ortopnea y expectoración rosada espumosa.',
    vitals: {
      fc: '125 lpm',
      fr: '34 rpm',
      pa: '180/100 mmHg',
      temp: '36.2 °C',
      sat: '82%'
    },
    scenario: 'Estertores crepitantes húmedos en ambos campos pulmonares ("pulmón húmedo"). Uso de musculatura accesoria.',
    diagnosis: 'Edema Agudo de Pulmón de origen cardiogénico.',
    options: [
      'Edema Agudo de Pulmón',
      'Crisis Asmática Severa',
      'Tromboembolismo Pulmonar',
      'Neumonía Bilateral'
    ],
    correctAnswer: 'Edema Agudo de Pulmón',
    care: [
      'Posición de Fowler alta (sentado).',
      'Oxigenoterapia de alto flujo / VMNI si es necesario.',
      'Administración de diuréticos de asa (Furosemida) IV.',
      'Control estricto de diuresis con sonda vesical.'
    ]
  },
  {
    id: 'path-6',
    category: 'pathology',
    title: 'Crisis Hipertensiva - Emergencia',
    patient: 'Masculino de 50 años con cefalea intensa, visión borrosa y epistaxis masiva.',
    vitals: {
      fc: '95 lpm',
      fr: '20 rpm',
      pa: '220/130 mmHg',
      temp: '36.7 °C',
      sat: '98%'
    },
    scenario: 'Fondo de ojo muestra papiledema. Paciente presenta desorientación progresiva.',
    diagnosis: 'Emergencia Hipertensiva con Encefalopatía.',
    options: [
      'Emergencia Hipertensiva',
      'Urgencia Hipertensiva',
      'Crisis de Ansiedad',
      'ACV Hemorrágico'
    ],
    correctAnswer: 'Emergencia Hipertensiva',
    care: [
      'Reducción controlada de la PAM (no más del 20-25% en la primera hora).',
      'Administración de antihipertensivos IV (Labetalol/Nitroprusiato).',
      'Monitoreo invasivo de la PA si es posible.',
      'Evaluación neurológica continua.'
    ]
  },
  {
    id: 'path-7',
    category: 'pathology',
    title: 'Choque Anafiláctico',
    patient: 'Femenina de 30 años con prurito generalizado, estridor laríngeo y angioedema tras picadura de insecto.',
    vitals: {
      fc: '135 lpm',
      fr: '32 rpm',
      pa: '75/40 mmHg',
      temp: '37.5 °C',
      sat: '88%'
    },
    scenario: 'Presencia de sibilancias inspiratorias y espiratorias. Urticaria evidente en tórax y abdomen.',
    diagnosis: 'Choque Anafiláctico Grado IV.',
    options: [
      'Choque Anafiláctico',
      'Crisis de Pánico',
      'Edema de Glotis Aislado',
      'Síncope Vasovagal'
    ],
    correctAnswer: 'Choque Anafiláctico',
    care: [
      'Administración inmediata de Adrenalina IM (0.5 mg).',
      'Asegurar vía aérea (preparar intubación).',
      'Reposición rápida de volumen con cristaloides.',
      'Administración de corticoides y antihistamínicos IV.'
    ]
  },
  {
    id: 'path-8',
    category: 'pathology',
    title: 'Apendicitis Aguda',
    patient: 'Masculino de 19 años con dolor abdominal que inició en epigastrio y migró a fosa ilíaca derecha.',
    vitals: {
      fc: '105 lpm',
      fr: '20 rpm',
      pa: '115/75 mmHg',
      temp: '38.3 °C',
      sat: '99%'
    },
    scenario: 'Signo de McBurney positivo, Blumberg positivo. Náuseas y anorexia.',
    diagnosis: 'Apendicitis Aguda supurativa.',
    options: [
      'Apendicitis Aguda',
      'Cólico Renoureteral',
      'Diverticulitis Meckel',
      'Gastroenteritis Aguda'
    ],
    correctAnswer: 'Apendicitis Aguda',
    care: [
      'Mantener NPO (Ayuno absoluto).',
      'Canalización de vía periférica e hidratación.',
      'Preparación preoperatoria (consentimiento/exámenes).',
      'Administración de analgesia y antibióticos profilácticos.'
    ]
  },
  {
    id: 'path-9',
    category: 'pathology',
    title: 'Obstrucción Intestinal',
    patient: 'Femenina de 68 años con distensión abdominal progresiva, vómitos fecaloideos y ausencia de canalización de gases.',
    vitals: {
      fc: '112 lpm',
      fr: '24 rpm',
      pa: '100/60 mmHg',
      temp: '37.8 °C',
      sat: '94%'
    },
    scenario: 'Ruidos hidroaéreos de lucha metálicos. Antecedente de cirugía abdominal hace 10 años.',
    diagnosis: 'Obstrucción Intestinal por Bridas/Adherencias.',
    options: [
      'Obstrucción Intestinal',
      'Peritonitis Generalizada',
      'Íleo Paralítico Postoperatorio',
      'Vólvulo de Sigmoides'
    ],
    correctAnswer: 'Obstrucción Intestinal',
    care: [
      'Colocación de Sonda Nasogástrica a derivación.',
      'Balance hídrico estricto y corrección electrolítica.',
      'Descompresión rectal si es necesario.',
      'Vigilar signos de perforación (abdomen en tabla).'
    ]
  },
  {
    id: 'path-10',
    category: 'pathology',
    title: 'Hemorragia Digestiva Alta (HDA)',
    patient: 'Masculino de 55 años con hematemesis masiva y melenas. Antecedente de consumo crónico de AINEs.',
    vitals: {
      fc: '128 lpm',
      fr: '22 rpm',
      pa: '85/50 mmHg',
      temp: '36.5 °C',
      sat: '92%'
    },
    scenario: 'Palidez mucocutánea extrema, mareo ortostático y sed intensa.',
    diagnosis: 'Hemorragia Digestiva Alta no varicosa.',
    options: [
      'Hemorragia Digestiva Alta',
      'Hemorragia Digestiva Baja',
      'Gastritis Aguda Erosiva',
      'Hemoptisis'
    ],
    correctAnswer: 'Hemorragia Digestiva Alta',
    care: [
      'Protección de vía aérea (riesgo de aspiración).',
      'Canalización de dos vías de grueso calibre (14-16G).',
      'Reposición de volumen y preparación para transfusión.',
      'Infusión de IBP (Omeprazol) a dosis altas.'
    ]
  },
  {
    id: 'path-11',
    category: 'pathology',
    title: 'Pancreatitis Aguda',
    patient: 'Femenina de 45 años con dolor epigástrico en "cinturón" irradiado a espalda tras ingesta copiosa.',
    vitals: {
      fc: '110 lpm',
      fr: '22 rpm',
      pa: '110/70 mmHg',
      temp: '37.9 °C',
      sat: '95%'
    },
    scenario: 'Amilasa y Lipasa sérica elevadas 5 veces su valor normal. Abdomen muy doloroso a la palpación.',
    diagnosis: 'Pancreatitis Aguda litiásica.',
    options: [
      'Pancreatitis Aguda',
      'Cólico Biliar',
      'Úlcera Péptica Perforada',
      'Colecistitis Aguda'
    ],
    correctAnswer: 'Pancreatitis Aguda',
    care: [
      'Reposo digestivo absoluto (NPO).',
      'Analgesia potente (evitar morfina, preferir Meperidina/Tramadol).',
      'Hidratación endovenosa profusa.',
      'Control de signos vitales cada 2-4 horas.'
    ]
  },
  {
    id: 'path-12',
    category: 'pathology',
    title: 'Tromboembolismo Pulmonar (TEP)',
    patient: 'Masculino de 70 años con disnea súbita y dolor torácico pleurítico tras cirugía de cadera reciente.',
    vitals: {
      fc: '118 lpm',
      fr: '28 rpm',
      pa: '115/80 mmHg',
      temp: '37.2 °C',
      sat: '89%'
    },
    scenario: 'Presencia de edema y dolor en miembro inferior izquierdo (TVP). ECG muestra patrón S1Q3T3.',
    diagnosis: 'Tromboembolismo Pulmonar de riesgo intermedio.',
    options: [
      'Tromboembolismo Pulmonar',
      'Neumotórax a Tensión',
      'Neumonía Nosocomial',
      'Insuficiencia Cardíaca Aguda'
    ],
    correctAnswer: 'Tromboembolismo Pulmonar',
    care: [
      'Administrar oxigenoterapia inmediata.',
      'Mantener al paciente en reposo absoluto (evitar embolismo).',
      'Iniciar anticoagulación con Heperina de bajo peso molecular.',
      'Monitoreo continuo de SatO2 y FR.'
    ]
  }
];
