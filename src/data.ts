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
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
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
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
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
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
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
    ],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
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
    ],
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80'
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
    ],
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033742?auto=format&fit=crop&w=800&q=80'
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
    ],
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80'
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
    ],
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=800&q=80'
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
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
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
    ],
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'iv-perif',
    name: 'Venopunción Periférica',
    type: 'invasive',
    materials: [
      'Catéter venoso periférico (Abocath) calibres 18G, 20G, 22G',
      'Torniquete (Smarck)',
      'Solución antiséptica (Alcohol 70% o Clorhexidina)',
      'Apósito transparente (Tegaderm)',
      'Equipo de venoclisis o extensión con llave de 3 vías',
      'Guantes limpios',
      'Gasas estériles'
    ],
    steps: [
      'Informar al paciente y seleccionar vena (preferiblemente miembro no dominante).',
      'Colocar el torniquete 10-15 cm por encima del sitio elegido.',
      'Realizar desinfección del área con movimientos circulares o de arrastre.',
      'Insertar el catéter con el bisel hacia arriba en ángulo de 15-30°.',
      'Observar retorno sanguíneo en la cámara y avanzar el catéter retirando la aguja.',
      'Presionar la vena por encima del catéter, retirar torniquete y conectar sistema.',
      'Fijar con apósito transparente y rotular (fecha, calibre, responsable).',
      'Verificar permeabilidad y ausencia de signos de flebitis.'
    ],
    biosecurity: [
      'Uso de guantes limpios.',
      'Desecho de aguja en guardián de seguridad.',
      'Evitar punciones innecesarias.'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'secr-asp',
    name: 'Aspiración de Secreciones',
    type: 'invasive',
    materials: [
      'Sistema de succión (Vacío)',
      'Sonda de aspiración estéril (calibre según vía)',
      'Guantes estériles y limpios',
      'Solución salina 0.9% (para lavado de sonda)',
      'Conector en Y (si no lo tiene la sonda)',
      'Tapabocas y protección ocular'
    ],
    steps: [
      'Valorar necesidad (ruidos audibles, caída de saturación).',
      'Hiperoxigenar al paciente (si está ventilado) al 100%.',
      'Introducir la sonda suavemente sin realizar succión.',
      'Retirar la sonda con movimientos rotatorios realizando succión intermitente (máx 10-15 seg).',
      'Limpiar la sonda con solución salina.',
      'Permitir recuperación del paciente entre aspiraciones.',
      'Auscultar campos pulmonares post-procedimiento.',
      'Desechar material y registrar características de las secreciones.'
    ],
    biosecurity: [
      'Uso estricto de técnica aséptica en vía aérea artificial.',
      'Protección contra aerosoles.',
      'No forzar la introducción de la sonda.'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'curacion',
    name: 'Curación de Heridas',
    type: 'non-invasive',
    materials: [
      'Kit de curación estéril (pinzas, tijeras)',
      'Solución salina 0.9%',
      'Antiséptico según protocolo',
      'Gasas estériles',
      'Apósitos o vendajes',
      'Guantes estériles y limpios',
      'Cinta adhesiva micropore o transpore'
    ],
    steps: [
      'Retirar vendaje anterior con guantes limpios observando características.',
      'Lavado de manos y colocación de guantes estériles.',
      'Limpieza de la herida con solución salina desde el centro a la periferia (o de limpio a sucio).',
      'Secar la herida con gasas estériles mediante toques suaves.',
      'Aplicar medicamento o apósito primario si está indicado.',
      'Cubrir con apósito secundario y fijar adecuadamente.',
      'Registrar estado de la herida (bordes, exudado, olor, tamaño).'
    ],
    biosecurity: [
      'Mantener esterilidad del instrumental.',
      'Desechar apósitos contaminados en bolsa roja.',
      'Evitar cruce de microorganismos entre heridas.'
    ],
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446f21?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lavado-g',
    name: 'Lavado Gástrico',
    type: 'invasive',
    materials: [
      'Sonda orogástrica o nasogástrica de gran calibre (32-36 Fr en adultos)',
      'Solución salina 0.9% a temperatura ambiente (2-3 litros)',
      'Jeringa de 50cc (pico catéter)',
      'Sistema de drenaje o bolsa recolectora',
      'Lubricante hidrosoluble',
      'Fonendoscopio'
    ],
    steps: [
      'Colocar al paciente en decúbito lateral izquierdo con pies elevados (Trendelenburg leve).',
      'Medir e insertar la sonda verificando ubicación.',
      'Introducir 200-300 ml de solución salina.',
      'Extraer el líquido por gravedad o aspiración suave.',
      'Repetir el ciclo hasta que el líquido salga claro o se complete la dosis.',
      'Considerar administración de carbón activado si está indicado.',
      'Retirar la sonda previa pinzamiento para evitar aspiración.',
      'Vigilar estado de conciencia y riesgo de broncoaspiración.'
    ],
    biosecurity: [
      'Asegurar vía aérea si el paciente tiene Glasgow < 8.',
      'Uso de EPP completo ante riesgo de emesis.',
      'Control estricto de líquidos introducidos vs eliminados.'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cardiover',
    name: 'Cardioversión Eléctrica',
    type: 'invasive',
    materials: [
      'Desfibrilador manual con modo sincrónico',
      'Paletas o parches adhesivos conductores',
      'Gel conductor (si usa paletas)',
      'Equipo de reanimación avanzada (Coche de paro)',
      'Monitorización ECG, SpO2 y TA',
      'Sedación y analgesia (Midazolam/Fentanilo)'
    ],
    steps: [
      'Explicar el procedimiento y obtener consentimiento.',
      'Asegurar acceso venoso y monitorización continua.',
      'Administrar sedación profunda.',
      'Activar el modo "SYNC" en el desfibrilador (verificar marca en la onda R).',
      'Seleccionar carga (según protocolo: 50J, 100J, etc.).',
      'Colocar parches o paletas con gel.',
      'Cargar y asegurar que nadie toque al paciente ("¡Fuera todos!").',
      'Presionar botón de descarga manteniendo presión (si son paletas) hasta el choque.',
      'Evaluar ritmo post-choque y estado del paciente.'
    ],
    biosecurity: [
      'Seguridad eléctrica para el personal.',
      'Asegurar vía aérea durante la sedación.',
      'Tener equipo de intubación listo.'
    ],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'med-parent',
    name: 'Vías Parenterales (IM / SC / ID)',
    type: 'invasive',
    materials: [
      'Jeringas de 1cc, 3cc, 5cc o 10cc',
      'Agujas según vía (IM: 21G, SC: 25G, ID: 27G)',
      'Medicamento indicado',
      'Torundas de algodón con alcohol',
      'Guantes limpios'
    ],
    steps: [
      'Verificar los "10 correctos" de administración.',
      'Cargar el medicamento con técnica aséptica.',
      'Identificar sitio anatómico (IM: Glúteo, Deltoides; SC: Abdomen, Peritrocantereo).',
      'Desinfectar la piel.',
      'Insertar aguja (IM: 90°, SC: 45°, ID: 10-15°).',
      'Aspirar (en IM) para verificar que no esté en vaso sanguíneo.',
      'Inyectar lentamente el fármaco.',
      'Retirar aguja y presionar suavemente sin masajear (en SC/ID).'
    ],
    biosecurity: [
      'No reencapuchar agujas.',
      'Higiene de manos.',
      'Desecho inmediato en contenedor rígido.'
    ],
    image: 'https://images.unsplash.com/photo-1579153123746-8577e3d05ff1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wound-care',
    name: 'Curación de Heridas (Técnica Estéril)',
    type: 'invasive',
    materials: [
      'Equipo de curación estéril (pinzas, tijeras)',
      'Solución salina 0.9%',
      'Gasas estériles',
      'Guantes estériles y limpios',
      'Apósitos según tipo de herida',
      'Cinta quirúrgica o vendaje'
    ],
    steps: [
      'Lavado de manos y colocación de guantes limpios.',
      'Retirar el apósito sucio y observar características de la herida.',
      'Retirar guantes sucios, lavado de manos y colocar guantes estériles.',
      'Limpiar la herida con solución salina desde el centro a la periferia.',
      'Secar con gasa mediante toques suaves.',
      'Aplicar medicamento o apósito primario si está indicado.',
      'Cubrir con apósito secundario y fijar.'
    ],
    biosecurity: [
      'Uso de técnica aséptica rigurosa.',
      'Desecho de material contaminado en bolsa roja.',
      'Uso de EPP según riesgo de salpicaduras.'
    ],
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aspiration',
    name: 'Aspiración de Secreciones',
    type: 'invasive',
    materials: [
      'Sonda de aspiración de calibre adecuado',
      'Sistema de succión (vacío)',
      'Guantes estériles',
      'Agua estéril o solución salina',
      'Tapabocas y protección ocular'
    ],
    steps: [
      'Explicar el procedimiento y auscultar campos pulmonares.',
      'Hiperoxigenar al paciente (si está ventilado).',
      'Colocarse EPP y guante estéril en la mano dominante.',
      'Introducir la sonda sin succionar hasta el tope.',
      'Retirar la sonda con movimientos rotatorios succionando de forma intermitente (máx. 10-15 seg).',
      'Limpiar la sonda y repetir si es necesario tras descanso.',
      'Auscultar nuevamente y registrar características de secreciones.'
    ],
    biosecurity: [
      'Técnica estéril para evitar neumonías asociadas.',
      'Protección contra aerosoles.',
      'No forzar la entrada de la sonda.'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bed-bath',
    name: 'Higiene del Paciente Encamado',
    type: 'non-invasive',
    materials: [
      'Palangana con agua tibia',
      'Jabón líquido neutro',
      'Esponjas o paños desechables',
      'Toallas limpias',
      'Ropa de cama limpia y pijama',
      'Guantes limpios'
    ],
    steps: [
      'Informar al paciente y asegurar su privacidad.',
      'Lavar cara, cuello y orejas (sin jabón si es posible).',
      'Lavar brazos, manos, tórax y abdomen.',
      'Lavar piernas y pies.',
      'Posicionar al paciente de lado para lavar espalda y glúteos.',
      'Realizar aseo genital (de limpio a sucio).',
      'Secar minuciosamente los pliegues cutáneos.',
      'Vestir al paciente y cambiar ropa de cama.'
    ],
    biosecurity: [
      'Mantener la mecánica corporal adecuada.',
      'Evitar enfriamientos innecesarios.',
      'Vigilar integridad de la piel durante el baño.'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'postural-changes',
    name: 'Cambios Posturales y Prevención de UPP',
    type: 'non-invasive',
    materials: [
      'Almohadas o cojines posicionadores',
      'Sábanas de movimiento',
      'Crema hidratante o ácidos grasos hiperoxigenados',
      'Dispositivos de descarga (taloneras)'
    ],
    steps: [
      'Evaluar el riesgo del paciente (Escala de Braden/Norton).',
      'Establecer un plan de rotación (cada 2-3 horas).',
      'Alternar posiciones: Decúbito supino, lateral izquierdo y derecho.',
      'Evitar el contacto de prominencias óseas entre sí mediante almohadas.',
      'Realizar masajes suaves o aplicar ácidos grasos en zonas de riesgo.',
      'Asegurar que las sábanas estén limpias, secas y sin arrugas.',
      'Fomentar la movilización temprana si es posible.'
    ],
    biosecurity: [
      'No realizar masajes sobre zonas ya enrojecidas.',
      'Uso de mecánica corporal para evitar lesiones del personal.',
      'Evitar el cizallamiento al movilizar al paciente.'
    ],
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033742?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'enema',
    name: 'Administración de Enema',
    type: 'invasive',
    materials: [
      'Solución para enema (evacuante o medicado)',
      'Sonda rectal o dispositivo aplicador',
      'Lubricante hidrosoluble',
      'Sistema de irrigación (si se requiere)',
      'Guantes limpios',
      'Soporte para suero (si aplica)',
      'Cuña o acceso a baño'
    ],
    steps: [
      'Informar al paciente y colocar en posición de Sims (decúbito lateral izquierdo).',
      'Lubricar la punta de la sonda rectal.',
      'Insertar suavemente la sonda (7-10 cm en adultos).',
      'Administrar la solución lentamente a temperatura ambiente.',
      'Retirar sonda y pedir al paciente que retenga el líquido (5-10 min).',
      'Asistir al paciente para la evacuación.',
      'Limpiar zona anal y registrar resultados.'
    ],
    biosecurity: [
      'Uso de guantes y delantal protector.',
      'Suspender si hay dolor intenso o resistencia.',
      'Vigilar signos de respuesta vagal.'
    ],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nurs-1',
    name: 'Administración de Hemoderivados',
    type: 'invasive',
    materials: [
      'Unidad de sangre/plasma validada',
      'Equipo de transfusión con filtro',
      'Catéter venoso #18 o #20',
      'Solución salina 0.9%',
      'Monitor de signos vitales'
    ],
    steps: [
      'Verificar identidad del paciente y grupo sanguíneo (doble chequeo).',
      'Obtener consentimiento informado.',
      'Control de signos vitales basales.',
      'Canalizar vía de grueso calibre.',
      'Iniciar infusión lenta los primeros 15 min.',
      'Vigilar reacciones adversas (fiebre, rash, disnea).',
      'Finalizar y registrar volumen infundido.'
    ],
    biosecurity: [
      'Uso de guantes y protección ocular.',
      'Desecho de bolsa en contenedor de riesgo biológico.',
      'No mezclar con otros medicamentos.'
    ],
    image: 'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nurs-2',
    name: 'Cuidado de Catéter Central (PICC/CVC)',
    type: 'invasive',
    materials: [
      'Kit de curación estéril',
      'Clorhexidina al 2% en alcohol',
      'Apósito transparente reforzado',
      'Bioconectores estériles',
      'Guantes estériles'
    ],
    steps: [
      'Retirar apósito anterior observando el sitio de inserción.',
      'Lavado de manos y postura de guantes estériles.',
      'Limpiar con clorhexidina mediante técnica de fricción.',
      'Colocar apósito transparente vigilando que cubra el sitio.',
      'Cambiar bioconectores y lavar lúmenes con técnica de presión positiva.'
    ],
    biosecurity: [
      'Técnica estéril rigurosa (riesgo de bacteriemia).',
      'Mascarilla obligatoria para paciente y enfermero.'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nurs-3',
    name: 'Control de Glucemia Capilar',
    type: 'invasive',
    materials: [
      'Glucometro calibrado',
      'Tira reactiva',
      'Lanceta estéril',
      'Torunda con alcohol',
      'Guantes limpios'
    ],
    steps: [
      'Limpiar el pulpejo del dedo (lateral) con alcohol.',
      'Realizar punción firme con la lanceta.',
      'Eliminar la primera gota de sangre.',
      'Colocar la segunda gota en la tira reactiva.',
      'Leer resultado y registrar en gráfica de control glucémico.'
    ],
    biosecurity: [
      'Uso de guantes por riesgo biológico.',
      'Desecho de lanceta en guardián.'
    ],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80'
  }
];

export const DRUGS: Drug[] = [
  {
    id: 'fenta',
    name: 'Fentanilo',
    group: 'Analgésico Opioide',
    mechanism: 'Agonista de receptores mu-opioides.',
    dosage: 'Adultos: 50-100 mcg bolo. Peds: 1-3 mcg/kg.',
    route: 'IV, IM',
    contraindications: ['Hipersensibilidad', 'Depresión respiratoria grave']
  },
  {
    id: 'mida',
    name: 'Midazolam',
    group: 'Benzodiazepina',
    mechanism: 'Facilita la acción del GABA.',
    dosage: 'Adultos: 1-5 mg bolo. Peds: 0.1 mg/kg.',
    route: 'IV, IM, IN',
    contraindications: ['Glaucoma', 'Miastenia gravis']
  },
  {
    id: 'adre',
    name: 'Adrenalina',
    group: 'Catecolamina',
    mechanism: 'Agonista alfa y beta.',
    dosage: 'RCP: 1 mg c/3-5 min. Shock: 0.01-0.5 mcg/kg/min.',
    route: 'IV, IO, SC, IM',
    contraindications: ['Hipotensión por déficit de volumen']
  },
  {
    id: 'nora',
    name: 'Noradrenalina',
    group: 'Vasopresor',
    mechanism: 'Estimulante alfa-1 y beta-1.',
    dosage: 'Infusión: 0.05-1.0 mcg/kg/min.',
    route: 'Vía Central',
    contraindications: ['Hipovolemia no corregida']
  },
  {
    id: 'amio',
    name: 'Amiodarona',
    group: 'Antiarrítmico',
    mechanism: 'Prolonga el potencial de acción.',
    dosage: 'RCP: 300 mg. Arritmias: 150 mg en 10 min.',
    route: 'IV (Dextrosa 5%)',
    contraindications: ['Bloqueo AV', 'Bradicardia sinusal']
  },
  {
    id: 'prop',
    name: 'Propofol',
    group: 'Hipnótico',
    mechanism: 'Agonista GABA-A.',
    dosage: 'Inducción: 1.5-2.5 mg/kg. Mantenimiento: 2-10 mg/kg/h.',
    route: 'IV',
    contraindications: ['Alergia al huevo/soja']
  },
  {
    id: 'dopa',
    name: 'Dopamina',
    group: 'Inotrópico',
    mechanism: 'Dopaminérgico y adrenérgico.',
    dosage: '2-20 mcg/kg/min.',
    route: 'IV (Vía Central)',
    contraindications: ['Feocromocitoma']
  },
  {
    id: 'atropina',
    name: 'Atropina',
    group: 'Anticolinérgico',
    mechanism: 'Antagonista muscarínico competitivo.',
    dosage: 'Bradicardia: 0.5-1 mg. Max 3mg.',
    route: 'IV, IM, IO',
    contraindications: ['Glaucoma', 'Uropatía obstructiva']
  },
  {
    id: 'adenosina',
    name: 'Adenosina',
    group: 'Antiarrítmico',
    mechanism: 'Enlentece conducción en nodo AV.',
    dosage: '6mg bolo rápido, luego 12mg.',
    route: 'IV (Bolo rápido)',
    contraindications: ['Asma', 'Bloqueo AV 2-3']
  },
  {
    id: 'heparina',
    name: 'Heparina Sódica',
    group: 'Anticoagulante',
    mechanism: 'Activa antitrombina III.',
    dosage: 'Bolo: 80 UI/kg. Infusión: 18 UI/kg/h.',
    route: 'IV, SC',
    contraindications: ['Hemorragia activa', 'Trombocitopenia']
  },
  {
    id: 'enoxa',
    name: 'Enoxaparina',
    group: 'HBPM',
    mechanism: 'Inhibición factor Xa.',
    dosage: 'Profilaxis: 40mg/día. Tto: 1mg/kg c/12h.',
    route: 'SC',
    contraindications: ['Hemorragia activa', 'Falla renal severa']
  },
  {
    id: 'meto',
    name: 'Metoclopramida',
    group: 'Procinético / Antiemético',
    mechanism: 'Antagonista dopaminérgico D2.',
    dosage: '10mg c/8h.',
    route: 'IV, IM, VO',
    contraindications: ['Obstrucción intestinal', 'Epsilepsia']
  },
  {
    id: 'onsteron',
    name: 'Ondansetrón',
    group: 'Antiemético',
    mechanism: 'Antagonista 5-HT3.',
    dosage: '4-8mg c/8-12h.',
    route: 'IV, VO',
    contraindications: ['Uso con apomorfina']
  },
  {
    id: 'pantop',
    name: 'Pantoprazol',
    group: 'IBP',
    mechanism: 'Inhibe bomba H+/K+ ATPasa.',
    dosage: '40mg día.',
    route: 'IV, VO',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'ranitid',
    name: 'Ranitidina',
    group: 'Antagonista H2',
    mechanism: 'Inhibe secreción ácida por receptores H2.',
    dosage: '50mg c/8h IV. 150mg c/12h VO.',
    route: 'IV, IM, VO',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'furosemida',
    name: 'Furosemida',
    group: 'Diurético de Asa',
    mechanism: 'Inhibe cotransporte Na/K/2Cl.',
    dosage: '20-40mg c/8-12h. Infusión: 10-40mg/h.',
    route: 'IV, VO',
    contraindications: ['Anuria', 'Hipopotasemia severa']
  },
  {
    id: 'hidrocort',
    name: 'Hidrocortisona',
    group: 'Corticosteroide',
    mechanism: 'Glucocorticoide sistémico.',
    dosage: '100-200mg c/6-8h.',
    route: 'IV, IM',
    contraindications: ['Infección micótica sistémica']
  },
  {
    id: 'dexa',
    name: 'Dexametasona',
    group: 'Corticosteroide',
    mechanism: 'Potente antiinflamatorio glucocorticoide.',
    dosage: '4-8mg c/8-12h.',
    route: 'IV, IM, VO',
    contraindications: ['Infección sistémica no controlada']
  },
  {
    id: 'metilpred',
    name: 'Metilprednisolona',
    group: 'Corticosteroide',
    mechanism: 'Antiinflamatorio glucocorticoide.',
    dosage: '40-125mg c/6-12h.',
    route: 'IV, IM',
    contraindications: ['Infecciones fúngicas']
  },
  {
    id: 'morfina',
    name: 'Morfina',
    group: 'Analgésico Opioide',
    mechanism: 'Agonista de receptores opioides.',
    dosage: '2-5mg c/4-6h.',
    route: 'IV, SC, IM, VO',
    contraindications: ['Depresión respiratoria', 'Ileo paralítico']
  },
  {
    id: 'tramadol',
    name: 'Tramadol',
    group: 'Analgésico Opioide',
    mechanism: 'Agonista mu-opioide y débil inhibidor recaptación monoamínica.',
    dosage: '50-100mg c/6-8h.',
    route: 'IV, IM, VO',
    contraindications: ['Intoxicación por alcohol/sedantes']
  },
  {
    id: 'dipirona',
    name: 'Dipirona (Metamizol)',
    group: 'Analgésico / Antipirético',
    mechanism: 'Inhibición síntesis prostaglandinas.',
    dosage: '1-2g c/6-8h.',
    route: 'IV, IM, VO',
    contraindications: ['Agranulocitosis', 'Porfiria']
  },
  {
    id: 'paracet',
    name: 'Paracetamol',
    group: 'Analgésico / Antipirético',
    mechanism: 'Inhibición de COX a nivel central.',
    dosage: '500-1000mg c/6h. Max 4g/día.',
    route: 'VO, IV',
    contraindications: ['Insuficiencia hepática severa']
  },
  {
    id: 'ibuprof',
    name: 'Ibuprofeno',
    group: 'AINE',
    mechanism: 'Inhibidor no selectivo de COX.',
    dosage: '400-600mg c/8h.',
    route: 'VO',
    contraindications: ['Úlcera gastroduodenal activa']
  },
  {
    id: 'diclof',
    name: 'Diclofenaco',
    group: 'AINE',
    mechanism: 'Inhibidor de síntesis de prostaglandinas.',
    dosage: '75mg IM. 50mg VO.',
    route: 'VO, IM, IV (Goteo)',
    contraindications: ['Asma', 'Ulcera péptica']
  },
  {
    id: 'keto',
    name: 'Ketorolaco',
    group: 'AINE',
    mechanism: 'Inhibidor periférico de COX.',
    dosage: '10-30mg c/8h. Max 120mg/día.',
    route: 'IV, IM, VO',
    contraindications: ['Disfunción renal', 'Parto']
  },
  {
    id: 'aspirina',
    name: 'Ácido Acetilsalicílico',
    group: 'Antiagregante / AINE',
    mechanism: 'Inhibición irreversible de COX-1.',
    dosage: '100mg día profilaxis. 300mg evento agudo.',
    route: 'VO',
    contraindications: ['Hemofilia', 'Úlcera péptica']
  },
  {
    id: 'clopid',
    name: 'Clopidogrel',
    group: 'Antiagregante',
    mechanism: 'Inhibidor de receptor P2Y12 ADP.',
    dosage: '75mg día. Carga 300-600mg.',
    route: 'VO',
    contraindications: ['Hemorragia activa']
  },
  {
    id: 'ceftri',
    name: 'Ceftriaxona',
    group: 'Cefalosporina 3ra Gen',
    mechanism: 'Inhibe síntesis pared celular bacteriana.',
    dosage: '1-2g c/12-24h.',
    route: 'IV, IM',
    contraindications: ['Hipersensibilidad a betalactámicos']
  },
  {
    id: 'cefalotina',
    name: 'Cefalotina',
    group: 'Cefalosporina 1ra Gen',
    mechanism: 'Inhibe síntesis de pared bacteriana.',
    dosage: '1g c/6h.',
    route: 'IV',
    contraindications: ['Alergia a cefalosporinas']
  },
  {
    id: 'cefa',
    name: 'Cefazolina',
    group: 'Cefalosporina 1ra Gen',
    mechanism: 'Inhibe síntesis de pared bacteriana.',
    dosage: '1-2g c/8h.',
    route: 'IV',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'piper',
    name: 'Piperacilina/Tazobactam',
    group: 'Penicilina / Inhibidor Beta-lact.',
    mechanism: 'Bactericida de amplio espectro.',
    dosage: '4.5g c/6-8h.',
    route: 'IV',
    contraindications: ['Alergia a penicilinas']
  },
  {
    id: 'vanco',
    name: 'Vancomicina',
    group: 'Glicopéptido',
    mechanism: 'Inhibe síntesis de pared celular.',
    dosage: '15-20mg/kg/dosis o 1g c/12h.',
    route: 'IV (Infusión lenta)',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'mero',
    name: 'Meropenem',
    group: 'Carbapenem',
    mechanism: 'Interfiere con síntesis de pared celular.',
    dosage: '1-2g c/8h.',
    route: 'IV',
    contraindications: ['Alergia a carbapenémicos']
  },
  {
    id: 'imipenem',
    name: 'Imipenem/Cilastatina',
    group: 'Carbapenem',
    mechanism: 'Inhibe síntesis pared bacteriana.',
    dosage: '500mg - 1g c/6-8h.',
    route: 'IV',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'genta',
    name: 'Gentamicina',
    group: 'Aminoglucósido',
    mechanism: 'Inhibe síntesis proteica bacteriana.',
    dosage: '3-5mg/kg/día.',
    route: 'IV, IM',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'amikacina',
    name: 'Amikacina',
    group: 'Aminoglucósido',
    mechanism: 'Inhibe síntesis proteica ribosómica.',
    dosage: '15mg/kg/día.',
    route: 'IV, IM',
    contraindications: ['Falla renal severa']
  },
  {
    id: 'clinda',
    name: 'Clindamicina',
    group: 'Lincosamida',
    mechanism: 'Inhibe síntesis proteica 50S.',
    dosage: '600mg c/6-8h.',
    route: 'IV, IM, VO',
    contraindications: ['Colitis pseudomembranosa']
  },
  {
    id: 'nitro',
    name: 'Nitrofurantoína',
    group: 'Antiséptico Urinario',
    mechanism: 'Interfiere con sistemas enzimáticos bacterianos.',
    dosage: '100mg c/6-8h.',
    route: 'VO',
    contraindications: ['Falla renal (Dep < 60)']
  },
  {
    id: 'cipro',
    name: 'Ciprofloxacino',
    group: 'Quinolona',
    mechanism: 'Inhibe ADN girasa.',
    dosage: '400mg c/8-12h IV. 500mg c/12h VO.',
    route: 'IV, VO',
    contraindications: ['Embarazo', 'Menores de 18 años']
  },
  {
    id: 'levo',
    name: 'Levofloxacina',
    group: 'Quinolona',
    mechanism: 'Inhibe topoisomerasa IV bacteriana.',
    dosage: '500-750mg al día.',
    route: 'IV, VO',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'azitro',
    name: 'Azitromicina',
    group: 'Macrólido',
    mechanism: 'Inhibe síntesis de proteínas bacterianas.',
    dosage: '500mg día por 3-5 días.',
    route: 'VO, IV',
    contraindications: ['Insuficiencia hepática grave']
  },
  {
    id: 'claritro',
    name: 'Claritromicina',
    group: 'Macrólido',
    mechanism: 'Interfiere con síntesis proteica.',
    dosage: '500mg c/12h.',
    route: 'VO, IV',
    contraindications: ['Uso con estatinas']
  },
  {
    id: 'metroni',
    name: 'Metronidazol',
    group: 'Nitroimidazol',
    mechanism: 'Inhibitor del ADN bacteriano.',
    dosage: '500mg c/8h.',
    route: 'IV, VO',
    contraindications: ['Consumo de alcohol']
  },
  {
    id: 'fluconazol',
    name: 'Fluconazol',
    group: 'Antifúngico Triazólico',
    mechanism: 'Inhibe síntesis de ergosterol.',
    dosage: '200-400mg día.',
    route: 'IV, VO',
    contraindications: ['Coadministración con medicamentos prolonguen QT']
  },
  {
    id: 'aciclovir',
    name: 'Aciclovir',
    group: 'Antiviral',
    mechanism: 'Interfiere con ADN polimerasa viral.',
    dosage: '5-10mg/kg c/8h IV.',
    route: 'IV, VO',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'losartan',
    name: 'Losartán',
    group: 'ARA-II',
    mechanism: 'Antagonista receptor Angiotensina II.',
    dosage: '50-100mg día.',
    route: 'VO',
    contraindications: ['Embarazo (2-3 trim)']
  },
  {
    id: 'enalapril',
    name: 'Enalapril',
    group: 'IECA',
    mechanism: 'Inhibidor Enzima Convertidora Angiotensina.',
    dosage: '5-20mg c/12-24h.',
    route: 'VO, IV (como Enalaprilat)',
    contraindications: ['Angioedema', 'Estenosis renal bilateral']
  },
  {
    id: 'amlodipina',
    name: 'Amlodipina',
    group: 'Calleantagonista',
    mechanism: 'Bloquea canales de calcio dihidropiridina.',
    dosage: '5-10mg día.',
    route: 'VO',
    contraindications: ['Hipotensión severa']
  },
  {
    id: 'carvedilol',
    name: 'Carvedilol',
    group: 'Beta-bloqueante No Selectivo',
    mechanism: 'Bloqueo alfa y beta adrenérgico.',
    dosage: '3.125-25mg c/12h.',
    route: 'VO',
    contraindications: ['Insuficiencia cardíaca descompensada', 'Asma']
  },
  {
    id: 'metoprolol',
    name: 'Metoprolol',
    group: 'Beta-bloqueante Selectivo',
    mechanism: 'Antagonista beta-1 adrenérgico.',
    dosage: '50-100mg c/12h. 5mg IV bolo (HTA/Arritmia).',
    route: 'VO, IV',
    contraindications: ['Bradicardia severa', 'Bloqueo AV']
  },
  {
    id: 'bisoprolol',
    name: 'Bisoprolol',
    group: 'Beta-bloqueante',
    mechanism: 'Seleccionado beta-1.',
    dosage: '2.5-10mg día.',
    route: 'VO',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'propranolol',
    name: 'Propranolol',
    group: 'Beta-bloqueante No Selectivo',
    mechanism: 'Antagonista beta-1 y beta-2.',
    dosage: '20-40mg c/8-12h.',
    route: 'VO, IV',
    contraindications: ['Asma bronquial']
  },
  {
    id: 'spirono',
    name: 'Espironolactona',
    group: 'Diurético / Antag. Aldosterona',
    mechanism: 'Antagonista de receptores de mineralocorticoides.',
    dosage: '25-100mg al día.',
    route: 'VO',
    contraindications: ['Hiperpotasemia', 'Insuficiencia renal aguda']
  },
  {
    id: 'digoxina',
    name: 'Digoxina',
    group: 'Glucósido Cardíaco',
    mechanism: 'Inhibe bomba Na+/K+ ATPasa.',
    dosage: '0.125 - 0.25mg día.',
    route: 'VO, IV',
    contraindications: ['Taquicardia ventricular', 'Fibrilación ventricular']
  },
  {
    id: 'nitroglicerina',
    name: 'Nitroglicerina',
    group: 'Dilatador Coronario',
    mechanism: 'Genera óxido nítrico.',
    dosage: 'Infusión: 5-200 mcg/min.',
    route: 'IV, SL',
    contraindications: ['Uso con inhibidores de PDE5', 'Shock']
  },
  {
    id: 'nitroprusiato',
    name: 'Nitroprusiato Sodio',
    group: 'Vasodilatador Potente',
    mechanism: 'Dilatación arterial y venosa directa.',
    dosage: '0.3-10 mcg/kg/min.',
    route: 'IV (Proteger de luz)',
    contraindications: ['Hipotensión compensatoria']
  },
  {
    id: 'labetalol',
    name: 'Labetalol',
    group: 'Alfa-Beta Bloqueante',
    mechanism: 'Bloqueo mixto adrenérgico.',
    dosage: 'Bolo: 10-20mg. Infusión: 1-2mg/min.',
    route: 'IV, VO',
    contraindications: ['Asma', 'Bradicardia']
  },
  {
    id: 'hidralazina',
    name: 'Hidralazina',
    group: 'Vasodilatador Arterial',
    mechanism: 'Relajación músculo liso arteriolar.',
    dosage: '10-40mg IM/IV c/6h.',
    route: 'IV, IM, VO',
    contraindications: ['Aneurisma disecante de aorta']
  },
  {
    id: 'insulina-r',
    name: 'Insulina Rápida',
    group: 'Hormona / Antidiabético',
    mechanism: 'Facilita transporte de glucosa celular.',
    dosage: 'Scalding según glucometría.',
    route: 'SC, IV (Infusión)',
    contraindications: ['Hipoglucemia']
  },
  {
    id: 'insulina-n',
    name: 'Insulina NPH',
    group: 'Hormona / Antidiabético',
    mechanism: 'Insulina de acción intermedia.',
    dosage: 'Cálculo individualizado.',
    route: 'SC',
    contraindications: ['Hipoglucemia']
  },
  {
    id: 'glargina',
    name: 'Insulina Glargina',
    group: 'Hormona / Acción Larga',
    mechanism: 'Insulina basal de liberación lenta.',
    dosage: 'Noche.',
    route: 'SC',
    contraindications: ['Hipoglucemia']
  },
  {
    id: 'metformina',
    name: 'Metformina',
    group: 'Biguanida',
    mechanism: 'Disminuye producción glucosa hepática.',
    dosage: '500-1000mg c/8-12h.',
    route: 'VO',
    contraindications: ['Insuficiencia renal (CrCL < 30)']
  },
  {
    id: 'glibenclamida',
    name: 'Glibenclamida',
    group: 'Sulfonilurea',
    mechanism: 'Estimula liberación insulina páncreas.',
    dosage: '5mg día.',
    route: 'VO',
    contraindications: ['Diabetes tipo 1']
  },
  {
    id: 'levotiroxina',
    name: 'Levotiroxina',
    group: 'Hormona Tiroidea',
    mechanism: 'Análogo de T4 sistémica.',
    dosage: '25-150 mcg día.',
    route: 'VO (Ayunas)',
    contraindications: ['Infarto de miocardio agudo']
  },
  {
    id: 'salbutamol',
    name: 'Salbutamol',
    group: 'Broncodilatador Beta-2',
    mechanism: 'Agonista beta-2 selectivo.',
    dosage: 'Inhalación: 2-4 puffs. Nebulización: 2.5-5mg.',
    route: 'Inhalado, IV',
    contraindications: ['Amenaza de aborto']
  },
  {
    id: 'ipratropio',
    name: 'Bromuro de Ipratropio',
    group: 'Broncodilatador Anticolinérg.',
    mechanism: 'Antagonista muscarínico bronquial.',
    dosage: '2-4 puffs c/6-8h.',
    route: 'Inhalado',
    contraindications: ['Hipersensibilidad a atropínicos']
  },
  {
    id: 'teofilina',
    name: 'Teofilina',
    group: 'Xantina',
    mechanism: 'Relaja músculo liso bronquial.',
    dosage: '100-200mg c/8-12h.',
    route: 'VO, IV',
    contraindications: ['Epsilepsia con convulsiones']
  },
  {
    id: 'clortalidona',
    name: 'Clortalidona',
    group: 'Diurético Tiazídico',
    mechanism: 'Inhibe reabsorción Na en túbulo distal.',
    dosage: '25-50mg día.',
    route: 'VO',
    contraindications: ['Anuria']
  },
  {
    id: 'hidroclorotiazida',
    name: 'Hidroclorotiazida',
    group: 'Diurético Tiazídico',
    mechanism: 'Acción en túbulo contorneado distal.',
    dosage: '12.5-50mg.',
    route: 'VO',
    contraindications: ['Falla renal anúrica']
  },
  {
    id: 'atvasta',
    name: 'Atorvastatina',
    group: 'Estatina',
    mechanism: 'Inhibe HMG-CoA reductasa.',
    dosage: '10-80mg noche.',
    route: 'VO',
    contraindications: ['Enfermedad hepática activa']
  },
  {
    id: 'fenitoina',
    name: 'Fenitoína (Difenilhidant.)',
    group: 'Anticonvulsivante',
    mechanism: 'Estabiliza membranas neuronales (Canales Na).',
    dosage: 'Bolo: 15-20mg/kg. Mant: 100mg c/8h.',
    route: 'IV (Exclusivamente con SS)',
    contraindications: ['Bradicardia sinusal', 'Adams-Stokes']
  },
  {
    id: 'acido-valproico',
    name: 'Ácido Valproico',
    group: 'Anticonvulsivante',
    mechanism: 'Aumenta niveles cerebrales de GABA.',
    dosage: '15-40 mg/kg/día.',
    route: 'VO, IV',
    contraindications: ['Hepatopatía crónica']
  },
  {
    id: 'levetira',
    name: 'Levetiracetam',
    group: 'Anticonvulsivante',
    mechanism: 'Se une a proteína de vesícula sináptica SV2A.',
    dosage: '500-1500mg c/12h.',
    route: 'VO, IV',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'diazepam',
    name: 'Diazepam',
    group: 'Benzodiazepina',
    mechanism: 'Modulador alostérico de GABA-A.',
    dosage: '5-10mg IV lento.',
    route: 'IV, IM, VO',
    contraindications: ['Respiración deprimida']
  },
  {
    id: 'lorazepam',
    name: 'Lorazepam',
    group: 'Benzodiazepina',
    mechanism: 'Inhibidor del sistema nervioso central.',
    dosage: '1-4mg.',
    route: 'IV, IM, SL, VO',
    contraindications: ['Glaucoma agudo']
  },
  {
    id: 'haloperidol',
    name: 'Haloperidol',
    group: 'Antipsicótico Típico',
    mechanism: 'Bloqueante D2 dopaminérgico.',
    dosage: '2.5-5mg c/8-12h.',
    route: 'IM, IV, VO',
    contraindications: ['Párkinson', 'Coma']
  },
  {
    id: 'quetiapina',
    name: 'Quetiapina',
    group: 'Antipsicótico Atípico',
    mechanism: 'Antagonista multirreceptor (5HT2, D2, D1).',
    dosage: '25-300mg.',
    route: 'VO',
    contraindications: ['Prolongación del QT']
  },
  {
    id: 'fluoxetina',
    name: 'Fluoxetina',
    group: 'ISRS',
    mechanism: 'Inhibidor selectivo recaptación serotonina.',
    dosage: '20mg día.',
    route: 'VO',
    contraindications: ['Uso con IMAO']
  },
  {
    id: 'sertralina',
    name: 'Sertralina',
    group: 'ISRS',
    mechanism: 'Inhibidor recaptación serotonina.',
    dosage: '50-100mg día.',
    route: 'VO',
    contraindications: ['Uso con pimozida']
  },
  {
    id: 'amitripti',
    name: 'Amitriptilina',
    group: 'Tricíclico',
    mechanism: 'Aumenta niveles sinápticos monoaminas.',
    dosage: '25-75mg noche.',
    route: 'VO',
    contraindications: ['Post-infarto reciente']
  },
  {
    id: 'omeprazol',
    name: 'Omeprazol',
    group: 'IBP',
    mechanism: 'Inhibe bomba de protones.',
    dosage: '20-40mg día.',
    route: 'VO, IV',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'vitamina-k',
    name: 'Vitamina K (Fitomenadi.)',
    group: 'Factor de Coagulación',
    mechanism: 'Cofactor síntesis de factores II, VII, IX, X.',
    dosage: '10mg.',
    route: 'IV (Lento), IM, VO',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'lactulosa',
    name: 'Lactulosa',
    group: 'Laxante Osmótico',
    mechanism: 'Reduce pH colon y atrapa amoníaco.',
    dosage: '15-30ml c/8-12h.',
    route: 'VO, VR (Enema)',
    contraindications: ['Galactosemia']
  },
  {
    id: 'magnesio',
    name: 'Sulfato de Magnesio',
    group: 'Electrolito / Anticonvuls.',
    mechanism: 'Bloqueante canales de calcio.',
    dosage: '2-4g bolo seguido infusión.',
    route: 'IV, IM',
    contraindications: ['Bloqueo cardíaco', 'Falla renal anúrica']
  },
  {
    id: 'potasio-cl',
    name: 'Cloruro de Potasio',
    group: 'Electrolito',
    mechanism: 'Reposición de ion intracelular.',
    dosage: 'Cálculo según déficit.',
    route: 'IV (Diluido), VO',
    contraindications: ['Hiperpotasemia', 'Falla renal']
  },
  {
    id: 'calcio-glu',
    name: 'Gluconato de Calcio',
    group: 'Electrolito',
    mechanism: 'Estabilizador de membrana (antídotos K+).',
    dosage: '1 amp (10ml al 10%).',
    route: 'IV (Lento)',
    contraindications: ['Hipercalcemia', 'Toxicidad digoxina']
  },
  {
    id: 'bicarbonato',
    name: 'Bicarbonato de Sodio',
    group: 'Amortiguador de pH',
    mechanism: 'Aumenta reserva alcalina.',
    dosage: 'Según déficit de bases.',
    route: 'IV',
    contraindications: ['Alcalosis metabólica']
  },
  {
    id: 'dobutamina',
    name: 'Dobutamina',
    group: 'Inotrópico',
    mechanism: 'Estimulante beta-1 específico.',
    dosage: '2-20 mcg/kg/min.',
    route: 'IV (Vía Central)',
    contraindications: ['Estenosis subaórtica hipertrófica']
  },
  {
    id: 'vecuronio',
    name: 'Vecuronio',
    group: 'BNM No Despolarizante',
    mechanism: 'Bloqueo competitivo receptor nicotínico.',
    dosage: 'Bolo: 0.1mg/kg. Mant: 0.8-1.2 mcg/kg/min.',
    route: 'IV',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'rocuronio',
    name: 'Rocuronio',
    group: 'BNM No Despolarizante',
    mechanism: 'Antagonista nicotínico placa motora.',
    dosage: 'Secuencia rápida: 0.6-1.2 mg/kg.',
    route: 'IV',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'succinil',
    name: 'Succinilcolina',
    group: 'BNM Despolarizante',
    mechanism: 'Agonista de placa motora (parálisis prolongada).',
    dosage: '1mg/kg.',
    route: 'IV',
    contraindications: ['Hipertermia maligna', 'Grandes quemados']
  },
  {
    id: 'lidocaina',
    name: 'Lidocaína',
    group: 'Anestésico / Antiarrítm.',
    mechanism: 'Bloqueante canales de sodio.',
    dosage: 'Arritmias: 1-1.5 mg/kg bolo.',
    route: 'IV, Local',
    contraindications: ['Bloqueo AV total']
  },
  {
    id: 'warfarina',
    name: 'Warfarina',
    group: 'Anticoagulante Oral',
    mechanism: 'Inhibe ciclo de Vitamina K.',
    dosage: '2.5-5mg día.',
    route: 'VO',
    contraindications: ['Embarazo', 'Hemorragia reciente']
  },
  {
    id: 'tamsulosina',
    name: 'Tamsulosina',
    group: 'Bloqueador Alfa-1',
    mechanism: 'Relaja músculo prosta-uretral.',
    dosage: '0.4mg noche.',
    route: 'VO',
    contraindications: ['Hipotensión ortostática severa']
  },
  {
    id: 'fenta-parche',
    name: 'Fentanilo (Parche)',
    group: 'Analgésico Opioide',
    mechanism: 'Liberación sostenida transdérmica.',
    dosage: '12-100 mcg/h.',
    route: 'Tópica (Transdérmico)',
    contraindications: ['Manejo de dolor agudo postquirúrgico']
  },
  {
    id: 'eritro',
    name: 'Eritropoyetina',
    group: 'Factor Estimulante Hematop.',
    mechanism: 'Estimula proliferación de eritrocitos.',
    dosage: '2000-4000 UI.',
    route: 'SC, IV',
    contraindications: ['Hipertensión arterial no controlada']
  },
  {
    id: 'oxitocina',
    name: 'Oxitocina',
    group: 'Hormona Oxitócica',
    mechanism: 'Estimula contracción uterina.',
    dosage: 'Inducción: 1-2 mUI/min. Hemorragia: 10-40 UI en goteo.',
    route: 'IV, IM',
    contraindications: ['Desproporción cefalopélvica']
  },
  {
    id: 'amoxi',
    name: 'Amoxicilina',
    group: 'Antibiótico Penicilánico',
    mechanism: 'Bactericida; inhibe la síntesis de la pared celular bacteriana.',
    dosage: 'Adultos: 500-1000 mg c/8h. Niños: 40-90 mg/kg/día.',
    route: 'VO',
    contraindications: ['Alergia a penicilinas', 'Mononucleosis infecciosa']
  },
  {
    id: 'amoxi-clav',
    name: 'Amoxicilina + Ácido Clavulánico',
    group: 'Antibiótico + Inhibidor Beta-lactamasa',
    mechanism: 'Combinación bactericida que resiste la degradación por beta-lactamasas.',
    dosage: 'Adultos: 875/125 mg c/12h o 500/125 mg c/8h.',
    route: 'VO, IV',
    contraindications: ['Antecedente de ictericia colestásica por clavulánico', 'Alergia severa a betalactámicos']
  },
  {
    id: 'amp-sulb',
    name: 'Ampicilina + Sulbactam',
    group: 'Penicilina / Inhibidor Beta-lact.',
    mechanism: 'Amplio espectro incluyendo anaerobios y gram negativos.',
    dosage: '1.5-3g c/6h.',
    route: 'IV, IM',
    contraindications: ['Alergia a penicilinas']
  },
  {
    id: 'peni-benz',
    name: 'Penicilina G Benzatínica',
    group: 'Antibiótico Natural',
    mechanism: 'Penicilina de liberación lenta para depósitos.',
    dosage: '1.2 - 2.4 millones UI dosis única.',
    route: 'IM profunda',
    contraindications: ['Hipersensibilidad a penicilinas', 'Administración IV']
  },
  {
    id: 'ceftazi',
    name: 'Ceftazidima',
    group: 'Cefalosporina 3ra Gen',
    mechanism: 'Especialmente activa contra Pseudomonas aeruginosa.',
    dosage: '1-2g c/8h.',
    route: 'IV, IM',
    contraindications: ['Hipersensibilidad a cefalosporinas']
  },
  {
    id: 'cefepime',
    name: 'Cefepime',
    group: 'Cefalosporina 4ta Gen',
    mechanism: 'Amplio espectro, alta resistencia a beta-lactamasas.',
    dosage: '1-2g c/8-12h.',
    route: 'IV',
    contraindications: ['Hipersensibilidad a betalactámicos']
  },
  {
    id: 'linezolid',
    name: 'Linezolid',
    group: 'Oxazolidinona',
    mechanism: 'Inhibe la síntesis proteica (subunidad 50S).',
    dosage: '600mg c/12h.',
    route: 'IV, VO',
    contraindications: ['Uso con IMAO', 'Hipertensión no controlada']
  },
  {
    id: 'tigeciclina',
    name: 'Tigeciclina',
    group: 'Glicilciclina',
    mechanism: 'Derivado de tetraciclina para bacterias multirresistentes.',
    dosage: 'Carga 100mg, luego 50mg c/12h.',
    route: 'IV',
    contraindications: ['Niños menores de 8 años', 'Hipersensibilidad']
  },
  {
    id: 'doxiciclina',
    name: 'Doxiciclina',
    group: 'Tetraciclina',
    mechanism: 'Inhibe síntesis proteica bacteriana (30S).',
    dosage: '100mg c/12h.',
    route: 'VO, IV',
    contraindications: ['Embarazo', 'Niños < 8 años (tinción dental)']
  },
  {
    id: 'tmp-smx',
    name: 'Trimetoprim + Sulfametoxazol',
    group: 'Sulfonamida / Antibiótico',
    mechanism: 'Bloqueo secuencial de la síntesis de ácido fólico.',
    dosage: '160/800 mg c/12-24h (Bactrim Forte).',
    route: 'VO, IV',
    contraindications: ['Falla renal severa', 'Embarazo a término', 'Recién nacidos < 2 meses']
  },
  {
    id: 'anfo-b',
    name: 'Anfotericina B',
    group: 'Antifúngico Polieno',
    mechanism: 'Altera la permeabilidad de la membrana fúngica.',
    dosage: '0.5-1.5 mg/kg/día (Deoxicolato); 3-5 mg/kg (Liposomal).',
    route: 'IV (Infusión lenta)',
    contraindications: ['Disfunción renal severa', 'Hipersensibilidad']
  },
  {
    id: 'caspo',
    name: 'Caspofungina',
    group: 'Equinocandina',
    mechanism: 'Inhibe la síntesis de glucano en la pared fúngica.',
    dosage: 'Carga 70mg, luego 50mg día.',
    route: 'IV',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'oselta',
    name: 'Oseltamivir',
    group: 'Antiviral / Inhibidor Neuraminid.',
    mechanism: 'Impide la liberación del virus de la gripe de las células.',
    dosage: '75mg c/12h por 5 días.',
    route: 'VO',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'valsa',
    name: 'Valsartán',
    group: 'ARA-II',
    mechanism: 'Antagonista selectivo del receptor de angiotensina II.',
    dosage: '80-320 mg/día.',
    route: 'VO',
    contraindications: ['Embarazo', 'Insuficiencia renal/hepática grave']
  },
  {
    id: 'verapa',
    name: 'Verapamilo',
    group: 'Calleantagonista / Clase IV',
    mechanism: 'Reduce la conducción AV y frecuencia cardíaca.',
    dosage: '80-120 mg c/8h VO. 5-10mg IV lento.',
    route: 'VO, IV',
    contraindications: ['Bloqueo AV 2-3 er grado', 'ICC severa']
  },
  {
    id: 'diltia',
    name: 'Diltiazem',
    group: 'Calleantagonista / Clase IV',
    mechanism: 'Vasodilatador coronario y enlentecedor de conducción AV.',
    dosage: '30-60 mg c/8h. Infusión IV para fibrilación auricular.',
    route: 'VO, IV',
    contraindications: ['Síndrome de nodo enfermo', 'Bradicardia severa']
  },
  {
    id: 'nifedi',
    name: 'Nifedipina',
    group: 'Calleantagonista (Dihidropiridina)',
    mechanism: 'Potente vasodilatador arterial.',
    dosage: '10-30 mg c/8-12h (Larga acción).',
    route: 'VO',
    contraindications: ['Shock cardiogénico', 'Post-IM reciente']
  },
  {
    id: 'ateno',
    name: 'Atenolol',
    group: 'Beta-bloqueante Selectivo',
    mechanism: 'Reduce gasto cardíaco y frecuencia cardíaca.',
    dosage: '25-100 mg/día.',
    route: 'VO',
    contraindications: ['Asma bronquial', 'Bradicardia', 'IC no compensada']
  },
  {
    id: 'nebivo',
    name: 'Nebivolol',
    group: 'Beta-bloqueante / Vasodilatador',
    mechanism: 'Alta selectividad beta-1 y liberación de óxido nítrico.',
    dosage: '5 mg/día.',
    route: 'VO',
    contraindications: ['Insuficiencia hepática', 'Bradicardia']
  },
  {
    id: 'clonidi',
    name: 'Clonidina',
    group: 'Agonista Alfa-2 Central',
    mechanism: 'Reduce la descarga simpática central.',
    dosage: '0.1-0.3 mg c/12h.',
    route: 'VO, Parche',
    contraindications: ['Bradibradicardia severa']
  },
  {
    id: 'vaso',
    name: 'Vasopresina',
    group: 'Hormona Antidiurética',
    mechanism: 'Vasoconstricción potente mediada por receptores V1.',
    dosage: 'Shock: 0.01-0.04 UI/min.',
    route: 'IV',
    contraindications: ['Enfermedad arterial coronaria grave']
  },
  {
    id: 'terli',
    name: 'Terlipresina',
    group: 'Análogo de Vasopresina',
    mechanism: 'Vasoconstricción esplácnica específica.',
    dosage: '1-2 mg c/4-6h IV.',
    route: 'IV',
    contraindications: ['Embarazo', 'Hipertensión arterial grave']
  },
  {
    id: 'milri',
    name: 'Milrinona',
    group: 'Inotrópico / Inhibidor PDE3',
    mechanism: 'Aumenta contractilidad y produce vasodilatación.',
    dosage: '0.375-0.75 mcg/kg/min.',
    route: 'IV',
    contraindications: ['Obstrucción valvular aórtica o pulmonar']
  },
  {
    id: 'levosimen',
    name: 'Levosimendán',
    group: 'Sensibilizador de Calcio',
    mechanism: 'Mejora contractilidad sin aumentar consumo de O2.',
    dosage: '0.1-0.2 mcg/kg/min por 24h.',
    route: 'IV',
    contraindications: ['Hipotensión severa', 'Obstrucción mecánica del llenado ventricular']
  },
  {
    id: 'estrep',
    name: 'Estreptoquinasa',
    group: 'Trombolítico',
    mechanism: 'Activa el plasminógeno para degradar fibrina.',
    dosage: '1.5 millones UI en 60 min (IAM).',
    route: 'IV',
    contraindications: ['Hemorragia activa reciente', 'ACV hemorrágico previo', 'Cirugía mayor reciente']
  },
  {
    id: 'alteplasa',
    name: 'Alteplasa',
    group: 'Trombolítico',
    mechanism: 'Activador tisular del plasminógeno recombinante.',
    dosage: '0.9 mg/kg (90mg max) en ACV isquémico.',
    route: 'IV',
    contraindications: ['Hemorragia intracraneal', 'Traumatismo craneal reciente', 'TA > 185/110']
  },
  {
    id: 'acetilcis',
    name: 'Acetilcisteína',
    group: 'Mucolítico / Antídoto',
    mechanism: 'Rompe puentes disulfuro de secreciones y restaura glutatión.',
    dosage: 'Paracetamol: Carga 140mg/kg luego dosis menores.',
    route: 'IV, VO, Inhalado',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'ambroxol',
    name: 'Ambroxol',
    group: 'Mucolítico',
    mechanism: 'Disminuye viscosidad del moco y estimula surfactante.',
    dosage: '30mg c/8h.',
    route: 'VO',
    contraindications: ['Úlcera péptica', 'Primer trimestre embarazo']
  },
  {
    id: 'bude',
    name: 'Budesonida',
    group: 'Corticosteroide Inhalado',
    mechanism: 'Acción antiinflamatoria local potente en pulmón o colon.',
    dosage: 'Inhalación: 200-400 mcg c/12h.',
    route: 'Inhalatoria, Nasal, VO',
    contraindications: ['Tuberculosis pulmonar activa']
  },
  {
    id: 'fluti',
    name: 'Fluticasona',
    group: 'Corticosteroide Inhalado',
    mechanism: 'Potente inhibidor de la inflamación bronquial.',
    dosage: '100-250 mcg c/12h.',
    route: 'Inhalatoria, Nasal',
    contraindications: ['Infección fúngica oral no tratada']
  },
  {
    id: 'montelu',
    name: 'Montelukast',
    group: 'Antag. Rec. Leucotrienos',
    mechanism: 'Bloquea la bronconstricción mediada por leucotrienos.',
    dosage: '10mg noche.',
    route: 'VO',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'tiotro',
    name: 'Bromuro de Tiotropio',
    group: 'Broncodilatador LAMA',
    mechanism: 'Antagonista muscarínico de acción prolongada.',
    dosage: '18 mcg (una cápsula inhalada) al día.',
    route: 'Inhalatoria',
    contraindications: ['Hipersensibilidad a atropina']
  },
  {
    id: 'esco',
    name: 'Escopolamina (Butilbromuro)',
    group: 'Antiespasmódico',
    mechanism: 'Antagonista competitivo de receptores muscarínicos.',
    dosage: '10-20 mg c/6-8h.',
    route: 'VO, IV, IM',
    contraindications: ['Glaucoma de ángulo estrecho', 'Mega colon']
  },
  {
    id: 'lope',
    name: 'Loperamida',
    group: 'Antidiarreico',
    mechanism: 'Agonista opioide periférico (reduce motilidad).',
    dosage: '4mg inicial, luego 2mg post-deposición. Max 16mg/día.',
    route: 'VO',
    contraindications: ['Disentería aguda', 'Colitis ulcerosa aguda']
  },
  {
    id: 'sucra',
    name: 'Sucralfato',
    group: 'Protector Gástrico',
    mechanism: 'Forma un complejo adherente en el sitio de la úlcera.',
    dosage: '1g c/6h.',
    route: 'VO (antes de comidas)',
    contraindications: ['Insuficiencia renal crónica']
  },
  {
    id: 'rosuva',
    name: 'Rosuvastatina',
    group: 'Estatina',
    mechanism: 'Inhibe la HMG-CoA reductasa con alta potencia.',
    dosage: '10-40 mg día.',
    route: 'VO',
    contraindications: ['Hepatopatía activa', 'Embarazo']
  },
  {
    id: 'feno',
    name: 'Fenofibrato',
    group: 'Fibrato / Hipolipemiante',
    mechanism: 'Agonista del receptor PPAR-alfa.',
    dosage: '160-200 mg día.',
    route: 'VO',
    contraindications: ['Enfermedad de vesícula biliar', 'Falla renal severa']
  },
  {
    id: 'alopu',
    name: 'Alopurinol',
    group: 'Antigotoso',
    mechanism: 'Inhibidor de la xantino oxidasa (reduce Ác. Úrico).',
    dosage: '100-300 mg día.',
    route: 'VO',
    contraindications: ['Ataque agudo de gota (no iniciar en fase aguda)']
  },
  {
    id: 'colchi',
    name: 'Colchicina',
    group: 'Antigotoso',
    mechanism: 'Inhibe la migración de leucocitos y fagocitosis.',
    dosage: '0.5-1 mg c/12-24h.',
    route: 'VO',
    contraindications: ['Insuficiencia renal o hepática grave']
  },
  {
    id: 'gaba',
    name: 'Gabapentina',
    group: 'Antiepiléptico / Neuromodulador',
    mechanism: 'Se une a canales de calcio dependientes de voltaje.',
    dosage: '300-900 mg c/8h.',
    route: 'VO',
    contraindications: ['Disfunción renal severa']
  },
  {
    id: 'prega',
    name: 'Pregabalina',
    group: 'Anticonvulsivante /Analgésico',
    mechanism: 'Modula la liberación de neurotransmisores excitatorios.',
    dosage: '75-150 mg c/12h.',
    route: 'VO',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'carba',
    name: 'Carbamazepina',
    group: 'Anticonvulsivante',
    mechanism: 'Estabiliza canales de sodio desactivados.',
    dosage: '200-400 mg c/8-12h.',
    route: 'VO',
    contraindications: ['Bloqueo AV', 'Supresión de médula ósea']
  },
  {
    id: 'topira',
    name: 'Topiramato',
    group: 'Antiepiléptico',
    mechanism: 'Múltiples acciones: canales Na, receptores GABA y Glutamato.',
    dosage: '25-200 mg c/12h.',
    route: 'VO',
    contraindications: ['Cálculos renales recurrentes']
  },
  {
    id: 'lamo',
    name: 'Lamotrigina',
    group: 'Antiepiléptico',
    mechanism: 'Inhibe la liberación de glutamato y canales de Na.',
    dosage: '50-200 mg día.',
    route: 'VO',
    contraindications: ['Riesgo de Síndrome Stevens-Johnson']
  },
  {
    id: 'litio',
    name: 'Carbonato de Litio',
    group: 'Antimaníaco',
    mechanism: 'Altera el transporte de sodio en células nerviosas.',
    dosage: '300-600 mg c/8-12h (Ajustar por niveles).',
    route: 'VO',
    contraindications: ['Enfermedad renal grave', 'Deshidratación']
  },
  {
    id: 'rispe',
    name: 'Risperidona',
    group: 'Antipsicótico Atípico',
    mechanism: 'Antagonista de receptores D2 y 5-HT2.',
    dosage: '1-4 mg c/12-24h.',
    route: 'VO',
    contraindications: ['Adultos mayores con demencia (aumento riesgo ACV)']
  },
  {
    id: 'olanza',
    name: 'Olanzapina',
    group: 'Antipsicótico Atípico',
    mechanism: 'Antagonista serotoninérgico y dopaminérgico.',
    dosage: '5-20 mg día.',
    route: 'VO, IM',
    contraindications: ['Glaucoma de ángulo estrecho']
  },
  {
    id: 'escitalo',
    name: 'Escitalopram',
    group: 'ISRS',
    mechanism: 'Inhibición potente de la recaptación de serotonina.',
    dosage: '10-20 mg día.',
    route: 'VO',
    contraindications: ['Uso con IMAO']
  },
  {
    id: 'alpra',
    name: 'Alprazolam',
    group: 'Benzodiazepina',
    mechanism: 'Potencia el efecto inhibidor del GABA.',
    dosage: '0.25-1 mg c/8-12h.',
    route: 'VO',
    contraindications: ['Insuficiencia respiratoria grave']
  },
  {
    id: 'zolpi',
    name: 'Zolpidem',
    group: 'Hipnótico No Benzodiazepínico',
    mechanism: 'Agonista selectivo del receptor omega-1 BZD.',
    dosage: '5-10 mg noche.',
    route: 'VO',
    contraindications: ['Apnea del sueño', 'Miastenia gravis']
  },
  {
    id: 'digox',
    name: 'Digoxina',
    group: 'Inótropo positivo',
    mechanism: 'Inhibe la bomba Na+/K+ ATPasa.',
    dosage: '0.125-0.25 mg/día.',
    route: 'VO, IV',
    contraindications: ['Bloqueo AV 2-3', 'Hipopotasemia grave']
  },
  {
    id: 'isoprena',
    name: 'Isoprenalina',
    group: 'Simpaticomimético',
    mechanism: 'Agonista beta-adrenérgico no selectivo.',
    dosage: '0.02-0.5 mcg/kg/min.',
    route: 'IV',
    contraindications: ['Taquicardia sinusal intensa', 'IAM agudo']
  },
  {
    id: 'metropol',
    name: 'Metoprolol',
    group: 'Betabloqueante',
    mechanism: 'Antagonista selecitvo beta-1.',
    dosage: '5 mg IV c/5 min (máx 15mg). 50-100mg VO.',
    route: 'VO, IV',
    contraindications: ['Bradicardia severa', 'Bloqueo AV mayor a 1er grado']
  },
  {
    id: 'atenol',
    name: 'Atenolol',
    group: 'Betabloqueante',
    mechanism: 'Antagonista selectivo beta-1.',
    dosage: '25-100 mg/día.',
    route: 'VO',
    contraindications: ['Insuficiencia cardíaca descompensada']
  },
  {
    id: 'enlapril',
    name: 'Enalapril',
    group: 'IECA',
    mechanism: 'Inhibidor de la enzima convertidora de angiotensina.',
    dosage: '5-20 mg c/12-24h.',
    route: 'VO',
    contraindications: ['Embarazo', 'Angioedema previo por IECA']
  },
  {
    id: 'amlodip',
    name: 'Amlodipino',
    group: 'Calcioantagonista',
    mechanism: 'Bloquea canales de calcio tipo L en músculo liso.',
    dosage: '5-10 mg/día.',
    route: 'VO',
    contraindications: ['Hipotensión grave', 'Choque cardiogénico']
  },
  {
    id: 'nifedip',
    name: 'Nifedipino',
    group: 'Calcioantagonista',
    mechanism: 'Dihidropiridina bloqueante de canales de calcio.',
    dosage: '10-20 mg c/8-12h. (Urgencia: 10mg retard).',
    route: 'VO',
    contraindications: ['Estenosis aórtica grave']
  },
  {
    id: 'spirit',
    name: 'Espironolactona',
    group: 'Antagonista de la Aldosterona',
    mechanism: 'Ahorrador de potasio por bloqueo de receptores mineralocorticoides.',
    dosage: '25-100 mg/día.',
    route: 'VO',
    contraindications: ['Insuficiencia renal anúrica', 'Hiperpotasemia']
  },
  {
    id: 'hydrot',
    name: 'Hidroclorotiazida',
    group: 'Diurético Tiazídico',
    mechanism: 'Inhibe el cotransportador Na+/Cl- en el túbulo distal.',
    dosage: '12.5-50 mg/día.',
    route: 'VO',
    contraindications: ['Anuria', 'Hipersensibilidad a sulfas']
  },
  {
    id: 'losart',
    name: 'Losartán',
    group: 'ARA-II',
    mechanism: 'Antagonista selectivo de receptores AT1 de angiotensina II.',
    dosage: '50-100 mg/día.',
    route: 'VO',
    contraindications: ['Embarazo', 'Falla renal grave']
  },
  {
    id: 'volsart',
    name: 'Valsartán',
    group: 'ARA-II',
    mechanism: 'Bloquea los efectos vasopresores de angiotensina II.',
    dosage: '80-160 mg/día.',
    route: 'VO',
    contraindications: ['Uso con aliskireno en diabéticos']
  },
  {
    id: 'captop',
    name: 'Captopril',
    group: 'IECA',
    mechanism: 'Inhibidor rápido de la ECA.',
    dosage: '25-50 mg c/8-12h (Crisis: 25mg sublingual - uso debatido).',
    route: 'VO, SL',
    contraindications: ['Estrechamiento arteria renal bilateral']
  },
  {
    id: 'nitrogly',
    name: 'Nitroglicerina',
    group: 'Nitrato Vasodilatador',
    mechanism: 'Libera óxido nítrico, produce venodilatación (reduce precarga).',
    dosage: 'SC: 0.4mg. IV: 5-200 mcg/min.',
    route: 'SL, IV, Transdérmico',
    contraindications: ['Hipotensión', 'Uso de inhibidores de fosfodiesterasa 5']
  },
  {
    id: 'isosor',
    name: 'Isosorbida Dinitrato',
    group: 'Nitrato',
    mechanism: 'Relajación del músculo liso vascular.',
    dosage: '5-20 mg c/8-12h.',
    route: 'VO, SL',
    contraindications: ['Infarto de ventrículo derecho']
  },
  {
    id: 'clopid',
    name: 'Clopidogrel',
    group: 'Antiagregante Plaquetario',
    mechanism: 'Inhibe de forma irreversible la unión de ADP al receptor P2Y12.',
    dosage: 'Carga: 300-600 mg. Mantenimiento: 75 mg/día.',
    route: 'VO',
    contraindications: ['Hemorragia patológica activa (úlcera)']
  },
  {
    id: 'ticag',
    name: 'Ticagrelor',
    group: 'Antiagregante Plaquetario',
    mechanism: 'Antagonista reversible del receptor P2Y12.',
    dosage: 'Carga: 180 mg. Mantenimiento: 90 mg c/12h.',
    route: 'VO',
    contraindications: ['HSA previa', 'Insuficiencia hepática grave']
  },
  {
    id: 'prasug',
    name: 'Prasugrel',
    group: 'Antiagregante Plaquetario',
    mechanism: 'Tienopiridina de tercera generación.',
    dosage: 'Carga: 60 mg. Mantenimiento: 10 mg/día.',
    route: 'VO',
    contraindications: ['Antecedente de ACV o AIT', 'Edad > 75 años']
  },
  {
    id: 'dabigat',
    name: 'Dabigatrán',
    group: 'Anticoagulante Oral (ACOD)',
    mechanism: 'Inhibidor directo de la trombina (Factor IIa).',
    dosage: '110-150 mg c/12h.',
    route: 'VO',
    contraindications: ['Prótesis valvulares mecánicas']
  },
  {
    id: 'rivarox',
    name: 'Rivaroxabán',
    group: 'ACOD',
    mechanism: 'Inhibidor directo del Factor Xa.',
    dosage: '15-20 mg/día.',
    route: 'VO',
    contraindications: ['Hemorragia mayor']
  },
  {
    id: 'apix',
    name: 'Apixabán',
    group: 'ACOD',
    mechanism: 'Inhibidor directo y reversible del Factor Xa.',
    dosage: '2.5-5 mg c/12h.',
    route: 'VO',
    contraindications: ['Valvulopatía reumática']
  },
  {
    id: 'amoxic',
    name: 'Amoxicilina + Ác. Clavulánico',
    group: 'Aminopenicilina / Inhibidor',
    mechanism: 'Betalactámico con inhibidor de betalactamasa.',
    dosage: '875/125 mg c/12h.',
    route: 'VO',
    contraindications: ['Hipersensibilidad a penicilinas']
  },
  {
    id: 'ampic',
    name: 'Ampicilina + Sulbactam',
    group: 'Aminopenicilina / Inhibidor',
    mechanism: 'Bactericida de amplio espectro para uso parenteral.',
    dosage: '1.5-3 g c/6h.',
    route: 'IV, IM',
    contraindications: ['Mononucleosis infecciosa (riesgo de rash)']
  },
  {
    id: 'cefalex',
    name: 'Cefalexina',
    group: 'Cefalosporina 1ª Gen',
    mechanism: 'Inhibe síntesis de pared celular bacteriana.',
    dosage: '250-500 mg c/6h.',
    route: 'VO',
    contraindications: ['Alergia a cefalosporinas']
  },
  {
    id: 'cefazol',
    name: 'Cefazolina',
    group: 'Cefalosporina 1ª Gen',
    mechanism: 'Uso frecuente en profilaxis quirúrgica.',
    dosage: '1-2 g dosis única o c/8h.',
    route: 'IV, IM',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'ceftri',
    name: 'Ceftriaxona',
    group: 'Cefalosporina 3ª Gen',
    mechanism: 'Amplio espectro, atraviesa barrera hematoencefálica.',
    dosage: '1-2 g/día (Sepsis/Meningitis).',
    route: 'IV, IM',
    contraindications: ['Recién nacidos hiperbilirrubinémicos']
  },
  {
    id: 'ceftaz',
    name: 'Ceftazidima',
    group: 'Cefalosporina 3ª Gen',
    mechanism: 'Activa contra Pseudomonas aeruginosa.',
    dosage: '1-2 g c/8h.',
    route: 'IV, IM',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'cefepim',
    name: 'Cefepima',
    group: 'Cefalosporina 4ª Gen',
    mechanism: 'Resistente a muchas betalactamasas cromosómicas.',
    dosage: '1-2 g c/8-12h.',
    route: 'IV, IM',
    contraindications: ['Status epilepticus no convusivo en falla renal']
  },
  {
    id: 'vanco-drug',
    name: 'Vancomicina',
    group: 'Glucopeptido',
    mechanism: 'Acción contra gram positivos multirresistentes (S. aureus).',
    dosage: '15 mg/kg c/8-12h.',
    route: 'IV',
    contraindications: ['Síndrome del hombre rojo (por infusión rápida)']
  },
  {
    id: 'clinda',
    name: 'Clindamicina',
    group: 'Lincosamida',
    mechanism: 'Inhibe subunidad ribosomal 50S.',
    dosage: '600-900 mg c/8h.',
    route: 'IV, VO',
    contraindications: ['Antecedente de colitis pseudomembranosa']
  },
  {
    id: 'metronid',
    name: 'Metronidazol',
    group: 'Nitroimidazol',
    mechanism: 'Bactericida para anaerobios y protozoos.',
    dosage: '500 mg c/8h.',
    route: 'IV, VO',
    contraindications: ['Consumo de alcohol']
  },
  {
    id: 'halop',
    name: 'Haloperidol',
    group: 'Antipsicótico Típico',
    mechanism: 'Bloqueo dopaminérgico D2 potente.',
    dosage: '2.5-5 mg IM c/4h (Agitación).',
    route: 'VO, IM, IV',
    contraindications: ['Parkinson', 'Prolongación QT']
  },
  {
    id: 'quetiap',
    name: 'Quetiapina',
    group: 'Antipsicótico Atípico',
    mechanism: 'Antagonista multireceptor (5HT2A, D2).',
    dosage: '25-400 mg/día.',
    route: 'VO',
    contraindications: ['Uso con fármacos que prolonguen QT']
  },
  {
    id: 'olanz',
    name: 'Olanzapina',
    group: 'Antipsicótico Atípico',
    mechanism: 'Afinidad por receptores de serotonina y dopamina.',
    dosage: '5-10 mg/día.',
    route: 'VO, IM',
    contraindications: ['Glaucoma de ángulo estrecho']
  },
  {
    id: 'risp',
    name: 'Risperidona',
    group: 'Antipsicótico Atípico',
    mechanism: 'Antagonista selectivo monoaminérgico.',
    dosage: '1-6 mg/día.',
    route: 'VO',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'levoprom',
    name: 'Levomepromazina',
    group: 'Neuroléptico Sedante',
    mechanism: 'Bloqueo alfa-adrenérgico y dopaminérgico.',
    dosage: '25-50 mg noche.',
    route: 'VO, IM',
    contraindications: ['Riesgo de retención urinaria']
  },
  {
    id: 'insulin-r',
    name: 'Insulina Cristalina (R)',
    group: 'Insulina de Acción Rápida',
    mechanism: 'Regulación del metabolismo de la glucosa.',
    dosage: 'Según escala o 0.1 UI/kg/h en infusión.',
    route: 'SC, IV',
    contraindications: ['Hipoglucemia']
  },
  {
    id: 'insulin-nph',
    name: 'Insulina NPH',
    group: 'Insulina de Acción Intermedia',
    mechanism: 'Inicio 1-2h, pico 4-10h.',
    dosage: 'Según requerimiento metabólico.',
    route: 'SC',
    contraindications: ['Hipoglucemia']
  },
  {
    id: 'glarg',
    name: 'Insulina Glargina',
    group: 'Insulina de Acción Prolongada',
    mechanism: 'Sin pico de acción, duración 24h.',
    dosage: 'Dosis única diaria.',
    route: 'SC',
    contraindications: ['Hipoglucemia']
  },
  {
    id: 'glimep',
    name: 'Glimepirida',
    group: 'Sulfonilurea',
    mechanism: 'Estimula liberación de insulina pancreática.',
    dosage: '1-4 mg/día.',
    route: 'VO',
    contraindications: ['Cetoacidosis diabética', 'Falla renal grave']
  },
  {
    id: 'sitag',
    name: 'Sitagliptina',
    group: 'Inhibidor DPP-4',
    mechanism: 'Aumenta niveles de incretinas activas.',
    dosage: '100 mg/día.',
    route: 'VO',
    contraindications: ['Antecedente de pancreatitis']
  },
  {
    id: 'empag',
    name: 'Empagliflozina',
    group: 'Inhibidor SGLT-2',
    mechanism: 'Inhibe reabsorción de glucosa en el riñón.',
    dosage: '10-25 mg/día.',
    route: 'VO',
    contraindications: ['Falla renal (TFGe < 30)']
  },
  {
    id: 'lirag',
    name: 'Liraglutida',
    group: 'Agonista GLP-1',
    mechanism: 'Retrasa vaciamiento gástrico y aumenta saciedad.',
    dosage: '0.6-3 mg SC día.',
    route: 'SC',
    contraindications: ['Carcinoma medular de tiroides']
  },
  {
    id: 'levotirox',
    name: 'Levotiroxina',
    group: 'Hormona Tiroidea',
    mechanism: 'Sustitución de T4 exógena.',
    dosage: '1.6 mcg/kg/día.',
    route: 'VO (ayunas)',
    contraindications: ['Tirotoxicosis no tratada']
  },
  {
    id: 'hydrocort-iv',
    name: 'Hidrocortisona',
    group: 'Glucocorticoide',
    mechanism: 'Reemplazo hormonal y efecto antiinflamatorio.',
    dosage: '100-200 mg c/6-8h.',
    route: 'IV, IM',
    contraindications: ['Infecciones fúngicas sistémicas']
  },
  {
    id: 'prednis',
    name: 'Prednisona',
    group: 'Corticoide Oral',
    mechanism: 'Inmunosupresor y antiinflamatorio.',
    dosage: '5-60 mg/día.',
    route: 'VO',
    contraindications: ['Úlcera péptica activa']
  },
  {
    id: 'dexa-iv',
    name: 'Dexametasona',
    group: 'Corticoide Potente',
    mechanism: 'Baja actividad mineralocorticoide, alta antiinflamatoria.',
    dosage: '4-8 mg c/8h.',
    route: 'IV, IM, VO',
    contraindications: ['Infección viral ocular']
  },
  {
    id: 'salbut',
    name: 'Salbutamol',
    group: 'Agonista Beta-2',
    mechanism: 'Broncodilatador de acción corta.',
    dosage: '2 puff c/4-6h o nebulización 2.5-5 mg.',
    route: 'Inhalada',
    contraindications: ['Arritmias graves']
  },
  {
    id: 'iprat',
    name: 'Bromuro de Ipratropio',
    group: 'Anticolinérgico',
    mechanism: 'Bloquea receptores muscarínicos en pulmón.',
    dosage: '2 puff c/6-8h o nebulización 500 mcg.',
    route: 'Inhalada',
    contraindications: ['Hipersensibilidad a la atropina']
  },
  {
    id: 'tiotrop',
    name: 'Tioptropio',
    group: 'LAMA',
    mechanism: 'Anticolinérgico de larga acción.',
    dosage: '1 inhalación diaria.',
    route: 'Inhalada',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'budom',
    name: 'Budesonida',
    group: 'Corticoide Inhalado',
    mechanism: 'Antiinflamatorio local bronquial.',
    dosage: '200-400 mcg c/12h.',
    route: 'Inhalada',
    contraindications: ['Tuberculosis pulmonar activa']
  },
  {
    id: 'keta',
    name: 'Ketamina',
    group: 'Anestésico / Analgésico',
    mechanism: 'Antagonista de receptores NMDA.',
    dosage: 'Inducción: 1-2 mg/kg. Analgesia: 0.1-0.5 mg/kg.',
    route: 'IV, IM',
    contraindications: ['Hipertensión grave', 'Eclampsia']
  },
  {
    id: 'eto',
    name: 'Etomidato',
    group: 'Hipnótico',
    mechanism: 'Facilita la neurotransmisión de GABA.',
    dosage: '0.2-0.3 mg/kg.',
    route: 'IV',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'dexme',
    name: 'Dexmedetomidina',
    group: 'Agonista Alfa-2',
    mechanism: 'Sedante altamente selectivo alfa-2 adrenérgico.',
    dosage: 'Carga: 1 mcg/kg. Mant: 0.2-0.7 mcg/kg/h.',
    route: 'IV (Infusión)',
    contraindications: ['Bradicardia severa', 'Bloqueo AV']
  },
  {
    id: 'fenile',
    name: 'Fenilefrina',
    group: 'Vasopresor',
    mechanism: 'Agonista alfa-1 adrenérgico puro.',
    dosage: 'Bolo: 50-100 mcg. Infusión: 10-100 mcg/min.',
    route: 'IV',
    contraindications: ['Bradicardia', 'Hipertensión severa']
  },
  {
    id: 'bupi',
    name: 'Bupivacaína',
    group: 'Anestésico Local',
    mechanism: 'Bloquea la conducción nerviosa inhibiendo canales de Na+.',
    dosage: 'Caudal o espinal según procedimiento.',
    route: 'Epidural, Intratecal, Infiltración local',
    contraindications: ['Enfermedad del SNC', 'Alteraciones de la coagulación']
  },
  {
    id: 'ropi',
    name: 'Ropivacaína',
    group: 'Anestésico Local',
    mechanism: 'Amino-amida de larga duración, menor cardiotoxicidad que bupivacaína.',
    dosage: 'Variable según zona y técnica.',
    route: 'Epidural, Local',
    contraindications: ['Hipersensibilidad a anestésicos tipo amida']
  },
  {
    id: 'tiopen',
    name: 'Tiopental Sódico',
    group: 'Barbitúrico / Hipnótico',
    mechanism: 'Depresión del SNC por aumento del tono GABA.',
    dosage: '3-5 mg/kg.',
    route: 'IV',
    contraindications: ['Porfiria', 'Estado asmático']
  },
  {
    id: 'atra',
    name: 'Atracurio',
    group: 'BNM No Despolarizante',
    mechanism: 'Bloqueo competitivo por eliminación de Hoffman.',
    dosage: '0.4-0.5 mg/kg.',
    route: 'IV',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'cisatra',
    name: 'Cisatracurio',
    group: 'BNM No Despolarizante',
    mechanism: 'Isómero del atracurio, sin liberación de histamina.',
    dosage: '0.15-0.2 mg/kg.',
    route: 'IV',
    contraindications: ['Hipersensibilidad']
  },
  {
    id: 'suga',
    name: 'Sugammadex',
    group: 'Agente de Reversión BNM',
    mechanism: 'Encapsula moléculas de rocuronio y vecuronio.',
    dosage: '2-4 mg/kg para reversión rutinaria.',
    route: 'IV (Bolo rápido)',
    contraindications: ['Falla renal severa']
  },
  {
    id: 'neo',
    name: 'Neostigmina',
    group: 'Anticolinesterásico',
    mechanism: 'Inhibe la acetilcolinesterasa aumentando niveles de Ach.',
    dosage: '0.03-0.07 mg/kg (asociar atropina).',
    route: 'IV',
    contraindications: ['Obstrucción mecánica intestinal o urinaria']
  },
  {
    id: 'nalo',
    name: 'Naloxona',
    group: 'Antagonista Opioide',
    mechanism: 'Antagonista competitivo de receptores de opioides.',
    dosage: '0.4 mg IV/IM, repetir según necesidad.',
    route: 'IV, IM, SC',
    contraindications: ['Dependencia física a opioides (puede causar abstinencia aguda)']
  },
  {
    id: 'fluma',
    name: 'Flumazenil',
    group: 'Antagonista Benzodiazepínico',
    mechanism: 'Antagonista competitivo en el receptor GABA.',
    dosage: '0.2 mg IV, luego 0.3-0.5 mg hasta respuesta.',
    route: 'IV',
    contraindications: ['Intoxicación mixta con tricíclicos', 'Epilepsia']
  },
  {
    id: 'clorprom',
    name: 'Clorpromazina',
    group: 'Antipsicótico Típico',
    mechanism: 'Bloqueo de receptores dopaminérgicos postsinápticos.',
    dosage: '25-50 mg.',
    route: 'VO, IM',
    contraindications: ['Depresión del SNC por alcohol o coma']
  },
  {
    id: 'prome',
    name: 'Prometazina',
    group: 'Antihistamínico H1',
    mechanism: 'Derivado de fenotiazina con efectos sedantes.',
    dosage: '25-50 mg.',
    route: 'VO, IM, IV',
    contraindications: ['Niños menores de 2 años', 'Coma']
  },
  {
    id: 'hidroxi',
    name: 'Hidroxizina',
    group: 'Antihistamínico H1',
    mechanism: 'Antagonista H1 con propiedades ansiolíticas.',
    dosage: '10-25 mg.',
    route: 'VO, IM',
    contraindications: ['Prolongación del intervalo QT']
  },
  {
    id: 'ceti',
    name: 'Cetirizina',
    group: 'Antihistamínico H1',
    mechanism: 'Antagonista H1 de segunda generación (menos sedante).',
    dosage: '10 mg/día.',
    route: 'VO',
    contraindications: ['Falla renal severa']
  },
  {
    id: 'lora',
    name: 'Loratadina',
    group: 'Antihistamínico H1',
    mechanism: 'Antagonista H1 periférico potente.',
    dosage: '10 mg/día.',
    route: 'VO',
    contraindications: ['Alergia a componentes']
  },
  {
    id: 'gemfi',
    name: 'Gemfibrozilo',
    group: 'Fibrato / Hipolipemiante',
    mechanism: 'Regulador de lípidos plasmáticos.',
    dosage: '600 mg c/12h.',
    route: 'VO',
    contraindications: ['Disfunción hepática severa', 'Litiasis biliar']
  },
  {
    id: 'simva',
    name: 'Simvastatina',
    group: 'Estatina',
    mechanism: 'Inhibidor competitivo de la HMG-CoA reductasa.',
    dosage: '10-40 mg noche.',
    route: 'VO',
    contraindications: ['Hepatopatía activa', 'Embarazo']
  }
];

export const PATHOLOGIES: Pathology[] = [
  {
    id: 'iam',
    name: 'Infarto Agudo de Miocardio',
    abbreviation: 'IAM',
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
    abbreviation: 'EPOC',
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
    name: 'Insuficiencia Cardíaca Congestiva',
    abbreviation: 'ICC',
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
    name: 'Insuficiencia Renal Aguda',
    abbreviation: 'IRA',
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
    name: 'Evento Cerebrovascular',
    abbreviation: 'ACV',
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
    name: 'Cetoacidosis Diabética',
    abbreviation: 'CAD',
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
  },
  {
    id: 'angina',
    name: 'Angina Inestable',
    system: 'Cardiovascular',
    definition: 'Dolor torácico que ocurre en reposo o con esfuerzo mínimo, indicativo de isquemia miocárdica inminente.',
    affectedTarget: 'Arterias Coronarias',
    symptoms: ['Dolor torácico opresivo que no cede', 'Diaforesis', 'Náuseas', 'Ansiedad'],
    nursingCare: ['Monitorización de signos vitales', 'Administración de Nitroglicerina sublingual si hay dolor', 'Mantenimiento de acceso venoso', 'EKG seriados']
  },
  {
    id: 'pericarditis',
    name: 'Pericarditis Aguda',
    system: 'Cardiovascular',
    definition: 'Inflamación del pericardio, a menudo de origen viral o idiopático.',
    affectedTarget: 'Pericardio (Saco que rodea el corazón)',
    symptoms: ['Dolor torácico que mejora al inclinarse hacia adelante', 'Frote pericárdico', 'Fiebre leve'],
    nursingCare: ['Control del dolor con AINEs', 'Reposo en cama', 'Vigilancia de signos de taponamiento cardíaco']
  },
  {
    id: 'endocarditis',
    name: 'Endocarditis Infecciosa',
    system: 'Cardiovascular',
    definition: 'Infección de las válvulas cardíacas o del endocardio posterior.',
    affectedTarget: 'Válvulas cardíacas',
    symptoms: ['Fiebre prolongada', 'Soplos cardíacos nuevos', 'Petequias', 'Fatiga'],
    nursingCare: ['Administración prolongada de antibióticos IV', 'Control de la temperatura', 'Vigilancia de signos de insuficiencia cardíaca']
  },
  {
    id: 'miocarditis',
    name: 'Miocarditis',
    system: 'Cardiovascular',
    definition: 'Inflamación del músculo cardíaco (miocardio).',
    affectedTarget: 'Miocardio',
    symptoms: ['Dolor torácico', 'Arritmias', 'Disnea', 'Signos de fatiga'],
    nursingCare: ['Reposo absoluto', 'Monitorización cardíaca continua', 'Oxigenoterapia si es necesario']
  },
  {
    id: 'aaa',
    name: 'Aneurisma de Aorta Abdominal',
    abbreviation: 'AAA',
    system: 'Cardiovascular',
    definition: 'Dilatación localizada de la aorta abdominal.',
    affectedTarget: 'Aorta Abdominal',
    symptoms: ['Masa abdominal pulsátil', 'Dolor lumbar o abdominal sordo', 'Soplo abdominal'],
    nursingCare: ['Control estricto de la presión arterial', 'Evitar maniobras de Valsalva', 'Preparación para cirugía si hay rotura']
  },
  {
    id: 'tvp',
    name: 'Trombosis Venosa Profunda',
    abbreviation: 'TVP',
    system: 'Cardiovascular',
    definition: 'Formación de un coágulo de sangre en una vena profunda.',
    affectedTarget: 'Venas de extremidades inferiores',
    symptoms: ['Edema unilateral', 'Dolor en la pantorrilla', 'Calor y eritema local'],
    nursingCare: ['Reposo en cama inicial', 'Administración de anticoagulantes', 'Medición de la circunferencia de la extremidad']
  },
  {
    id: 'ea',
    name: 'Estenosis Aórtica',
    system: 'Cardiovascular',
    definition: 'Estrechamiento de la apertura de la válvula aórtica.',
    affectedTarget: 'Válvula Aórtica',
    symptoms: ['Síncope de esfuerzo', 'Angina', 'Disnea'],
    nursingCare: ['Evitar esfuerzos físicos extenuantes', 'Monitoreo de signos de bajo gasto cardíaco', 'Control de la hidratación']
  },
  {
    id: 'im',
    name: 'Insuficiencia Mitral',
    system: 'Cardiovascular',
    definition: 'Reflujo de sangre desde el ventrículo izquierdo a la aurícula izquierda.',
    affectedTarget: 'Válvula Mitral',
    symptoms: ['Fatiga', 'Disnea de esfuerzo', 'Palpitaciones'],
    nursingCare: ['Control de la precarga con diuréticos', 'Monitorización de la SatO2', 'Posición fowler']
  },
  {
    id: 'fa',
    name: 'Fibrilación Auricular',
    abbreviation: 'FA',
    system: 'Cardiovascular',
    definition: 'Arritmia supraventricular caracterizada por una activación auricular desorganizada.',
    affectedTarget: 'Aurículas cardíacas',
    symptoms: ['Palpitaciones irregulares', 'Mareo', 'Disnea', 'Pulso irregular'],
    nursingCare: ['Monitorización del ritmo cardíaco', 'Control de la frecuencia con beta-bloqueantes', 'Administración de anticoagulantes']
  },
  {
    id: 'asma',
    name: 'Asma Bronquial (Crisis)',
    system: 'Respiratorio',
    definition: 'Inflamación crónica de las vías respiratorias que causa hiperreactividad bronquial.',
    affectedTarget: 'Vías respiratorias bajas (Bronquios)',
    symptoms: ['Sibilancias expiratorias', 'Tos seca', 'Opresión torácica', 'Taquipnea'],
    nursingCare: ['Administración de broncodilatadores (puf/nebulización)', 'Oxigenoterapia según SatO2', 'Posición sentada', 'Control de FR']
  },
  {
    id: 'bronquitis',
    name: 'Bronquitis Aguda',
    system: 'Respiratorio',
    definition: 'Inflamación transitoria de los bronquios principales.',
    affectedTarget: 'Bronquios',
    symptoms: ['Tos productiva', 'Dolor retroesternal al toser', 'Fiebre leve'],
    nursingCare: ['Incrementar ingesta hídrica', 'Fisioterapia respiratoria', 'Control de la temperatura']
  },
  {
    id: 'derrame',
    name: 'Derrame Pleural',
    system: 'Respiratorio',
    definition: 'Acumulación anómala de líquido en el espacio pleural.',
    affectedTarget: 'Pleura (Espacio pleural)',
    symptoms: ['Dolor pleurítico', 'Disnea', 'Matidez a la percusión', 'Ausencia de ruidos respiratorios'],
    nursingCare: ['Asistencia en la toracocentesis', 'Control de la función respiratoria', 'Manejo del dolor']
  },
  {
    id: 'neumotorax',
    name: 'Neumotórax',
    system: 'Respiratorio',
    definition: 'Presencia de aire en el espacio pleural que causa colapso pulmonar.',
    affectedTarget: 'Espacio Pleural',
    symptoms: ['Dolor torácico súbito', 'Disnea súbita', 'Desviación traqueal (en tensión)', 'Timpanismo'],
    nursingCare: ['Preparación y control del tubo de tórax', 'Monitorización de la mecánica ventilatoria', 'Control de drenaje']
  },
  {
    id: 'absceso',
    name: 'Absceso Pulmonar',
    system: 'Respiratorio',
    definition: 'Lesión necrótica del parénquima pulmonar que contiene pus.',
    affectedTarget: 'Parénquima pulmonar',
    symptoms: ['Fiebre héctica', 'Tos con vómica (expectoración purulenta abundante)', 'Pérdida de peso'],
    nursingCare: ['Fisioterapia respiratoria y drenaje postural', 'Administración de antibióticos IV', 'Nutrición hiperproteica']
  },
  {
    id: 'tbc',
    name: 'Tuberculosis Pulmonar',
    abbreviation: 'TBC',
    system: 'Respiratorio',
    definition: 'Enfermedad infecciosa causada por Mycobacterium tuberculosis.',
    affectedTarget: 'Pulmones (principalmente ápices)',
    symptoms: ['Tos por más de 15 días', 'Hemoptisis', 'Sudoración nocturna', 'Pérdida de peso'],
    nursingCare: ['Aislamiento respiratorio (Presión negativa)', 'Administración de esquema antituberculoso', 'Educación sobre adherencia']
  },
  {
    id: 'bronquiectasias',
    name: 'Bronquiectasias',
    system: 'Respiratorio',
    definition: 'Dilataciones irreversibles de los bronquios secundarias a inflamación crónica.',
    affectedTarget: 'Pared bronquial',
    symptoms: ['Tos crónica productiva fétida', 'Acropaquia (dedos en palillo de tambor)', 'Hemoptisis recurrente'],
    nursingCare: ['Técnicas de higiene bronquial', 'Hidratación', 'Control de infecciones']
  },
  {
    id: 'eap',
    name: 'Edema Agudo de Pulmón',
    abbreviation: 'EAP',
    system: 'Respiratorio',
    definition: 'Acumulación de líquido en los alvéolos que impide el intercambio gaseoso.',
    affectedTarget: 'Alvéolos pulmonares',
    symptoms: ['Disnea severa paroxística', 'Expectoración asalmonada/espumosa', 'Estertores crepitantes dispersos', 'Cianosis'],
    nursingCare: ['Posición de Fowler alta', 'Oxigenoterapia / VMNI', 'Administración de diuréticos y vasodilatadores']
  },
  {
    id: 'meningitis',
    name: 'Meningitis Bacteriana',
    system: 'Neurológico',
    definition: 'Inflamación de las meninges por infección bacteriana.',
    affectedTarget: 'Meninges (Piamadre y aracnoides)',
    symptoms: ['Rigidez de nuca', 'Fiebre alta', 'Vómitos en proyectil', 'Fotofobia'],
    nursingCare: ['Aislamiento de gotas', 'Monitorización de signos de hipertensión endocraneana', 'Administración de antibióticos precoces']
  },
  {
    id: 'epilepsia',
    name: 'Estado Epiléptico',
    system: 'Neurológico',
    definition: 'Actividad convulsiva continua por más de 5 minutos o crisis recurrentes sin recuperación.',
    affectedTarget: 'Corteza Cerebral',
    symptoms: ['Convulsiones generalizadas', 'Pérdida de conciencia prolongada', 'Cianosis'],
    nursingCare: ['Protección de la vía aérea y evitar lesiones', 'Administración de Benzodiacepinas IV', 'Cronometrar la duración de la crisis']
  },
  {
    id: 'parkinson',
    name: 'Enfermedad de Parkinson',
    system: 'Neurológico',
    definition: 'Trastorno neurodegenerativo de la sustancia negra.',
    affectedTarget: 'Ganglios basales (Sustancia negra)',
    symptoms: ['Temblor en reposo', 'Bradicinesia', 'Rigidez en "rueda dentada"', 'Inestabilidad postural'],
    nursingCare: ['Prevención de caídas', 'Asistencia en la alimentación y movilidad', 'Administración de Levodopa según horario']
  },
  {
    id: 'em',
    name: 'Esclerosis Múltiple',
    system: 'Neurológico',
    definition: 'Enfermedad autoinmune desmielinizante del SNC.',
    affectedTarget: 'Vainas de Mielina en el SNC',
    symptoms: ['Diplopía', 'Parestesias', 'Debilidad muscular', 'Alteraciones de la marcha'],
    nursingCare: ['Manejo de la fatiga', 'Prevención de úlceras por presión si hay inmovilidad', 'Soporte emocional']
  },
  {
    id: 'mg',
    name: 'Miastenia Gravis',
    abbreviation: 'MG',
    system: 'Neurológico',
    definition: 'Trastorno neuromuscular autoinmune que afecta la placa motora.',
    affectedTarget: 'Receptores de Acetilcolina',
    symptoms: ['Ptosis palpebral', 'Diplopía', 'Debilidad muscular fluctuante', 'Disfagia'],
    nursingCare: ['Programar actividades cuando el efecto del medicamento es máximo', 'Vigilar signos de crisis miasténica (insuficiencia resp.)']
  },
  {
    id: 'gbs',
    name: 'Síndrome de Guillain-Barré',
    abbreviation: 'SGB',
    system: 'Neurológico',
    definition: 'Polineuropatía desmielinizante inflamatoria aguda.',
    affectedTarget: 'Nervios periféricos',
    symptoms: ['Parálisis ascendente simétrica', 'Arreflexia', 'Parestesias', 'Inestabilidad autonómica'],
    nursingCare: ['Monitoreo estrecho de la capacidad vital respiratoria', 'Fisioterapia para evitar contracturas', 'Soporte nutricional']
  },
  {
    id: 'alzheimer',
    name: 'Enfermedad de Alzheimer',
    system: 'Neurológico',
    definition: 'Demencia degenerativa primaria más común.',
    affectedTarget: 'Corteza cerebral y el hipocampo',
    symptoms: ['Pérdida de memoria reciente', 'Desorientación', 'Afasia', 'Apraxia'],
    nursingCare: ['Ambiente seguro y estructurado', 'Orientación a la realidad constante', 'Apoyo al cuidador principal']
  },
  {
    id: 'hsa',
    name: 'Hemorragia Subaracnoidea',
    abbreviation: 'HSA',
    system: 'Neurológico',
    definition: 'Presencia de sangre en el espacio subaracnoideo, usualmente por ruptura de aneurisma.',
    affectedTarget: 'Vasos cerebrales subaracnoideos',
    symptoms: ['Cefalea súbita "la peor de la vida"', 'Vómitos', 'Pérdida de conciencia', 'Meningismo'],
    nursingCare: ['Ambiente tranquilo (oscuridad, silencio)', 'Control de la presión arterial', 'Evitar estreñimiento (Valsalva)']
  },
  {
    id: 'gastritis_c',
    name: 'Gastritis Crónica',
    system: 'Digestivo',
    definition: 'Inflamación prolongada de la mucosa gástrica, frecuentemente por H. pylori.',
    affectedTarget: 'Mucosa Gástrica',
    symptoms: ['Epigastralgia sorda', 'Saciedad precoz', 'Náuseas ocasionales'],
    nursingCare: ['Educación dietética (evitar irritantes)', 'Administración de IBP/Antiácidos', 'Fomentar la higiene de manos']
  },
  {
    id: 'ulcera',
    name: 'Úlcera Péptica',
    system: 'Digestivo',
    definition: 'Erosión en la mucosa del estómago o duodeno que penetra la muscularis mucosae.',
    affectedTarget: 'Estómago o Duodeno',
    symptoms: ['Dolor epigástrico que cede con alimentos (duodenal) o empeora (gástrica)', 'Hematemesis', 'Melena'],
    nursingCare: ['Vigilancia de signos de perforación o hemorragia', 'Administración de inhibidores de bomba de protones', 'Evitar AINEs']
  },
  {
    id: 'cirrosis',
    name: 'Cirrosis Hepática',
    system: 'Digestivo',
    definition: 'Estadio final de la fibrosis hepática con alteración de la arquitectura.',
    affectedTarget: 'Hígado',
    symptoms: ['Ictericia', 'Ascitis', 'Encefalopatía hepática', 'Aparición de varices esofágicas'],
    nursingCare: ['Control de perímetro abdominal', 'Dieta hiposódica', 'Valoración del estado neurológico (asterixis)']
  },
  {
    id: 'colecistitis',
    name: 'Colecistitis Aguda',
    system: 'Digestivo',
    definition: 'Inflamación de la vesícula biliar, generalmente por cálculos.',
    affectedTarget: 'Vesícula Biliar',
    symptoms: ['Dolor en hipocondrio derecho irradiado a hombro', 'Signo de Murphy positivo', 'Fiebre'],
    nursingCare: ['Ayuno (NPO)', 'Control del dolor', 'Preparación para colecistectomía']
  },
  {
    id: 'diverticulitis',
    name: 'Diverticulitis Aguda',
    system: 'Digestivo',
    definition: 'Inflamación o infección de los divertículos colónicos.',
    affectedTarget: 'Colon (especialmente Sigmoides)',
    symptoms: ['Dolor en fosa ilíaca izquierda', 'Fiebre', 'Alteración del hábito intestinal'],
    nursingCare: ['Dieta absoluta inicial', 'Antibioticoterapia', 'Control de signos de peritonitis']
  },
  {
    id: 'crohn',
    name: 'Enfermedad de Crohn',
    system: 'Digestivo',
    definition: 'Enfermedad inflamatoria intestinal que afecta cualquier parte del tubo digestivo.',
    affectedTarget: 'Todo el tracto GI (principalmente íleon distal)',
    symptoms: ['Diarrea crónica', 'Dolor abdominal', 'Fístulas perianales', 'Pérdida de peso'],
    nursingCare: ['Control del estado nutricional', 'Manejo de la diarrea y cuidado perianal', 'Apoyo psicológico']
  },
  {
    id: 'cu',
    name: 'Colitis Ulcerosa',
    system: 'Digestivo',
    definition: 'Enfermedad inflamatoria mucosa limitada al colon.',
    affectedTarget: 'Colon y Recto',
    symptoms: ['Rectorragia', 'Tenesmo rectal', 'Diarrea muco-sanguinolenta'],
    nursingCare: ['Vigilar signos de megacolon tóxico', 'Balance hídrico', 'Control de hemoglobina']
  },
  {
    id: 'glom',
    name: 'Glomerulonefritis Aguda',
    system: 'Renal',
    definition: 'Inflamación de los glomérulos renales, a menudo post-estreptocócica.',
    affectedTarget: 'Glomérulo Renal',
    symptoms: ['Hematuria macroscópica (orina color cola)', 'Hipertensión', 'Edema periorbitario', 'Oliguria'],
    nursingCare: ['Restricción de sodio y líquidos', 'Monitorización de la presión arterial', 'Pesaje diario']
  },
  {
    id: 'nefrotico',
    name: 'Síndrome Nefrótico',
    system: 'Renal',
    definition: 'Aumento severo de la permeabilidad glomerular a las proteínas.',
    affectedTarget: 'Membrana basal glomerular',
    symptoms: ['Edema masivo (Anasarca)', 'Proteinuria masiva (>3.5g/24h)', 'Hipoalbuminemia'],
    nursingCare: ['Monitoreo del edema y la piel', 'Restricción hídrica', 'Vigilancia de complicaciones infecciosas']
  },
  {
    id: 'pielon',
    name: 'Pielonefritis Aguda',
    system: 'Renal',
    definition: 'Infección del tracto urinario superior (parénquima renal y pelvis).',
    affectedTarget: 'Parénquima y pelvis renal',
    symptoms: ['Dolor lumbar (Puño percusión positiva)', 'Fiebre con escalofríos', 'Disuria', 'Náuseas'],
    nursingCare: ['Fomentar la hidratación oral/IV', 'Administración de antibióticos', 'Control de la curva térmica']
  },
  {
    id: 'litiasis_r',
    name: 'Litiasis Renal',
    system: 'Renal',
    definition: 'Formación de cálculos en el aparato urinario.',
    affectedTarget: 'Cálices, pelvis renal o uréteres',
    symptoms: ['Cólico nefrítico (dolor lumbar súbito e insoportable)', 'Hematuria', 'Náuseas'],
    nursingCare: ['Manejo del dolor agudo (Escala EVA)', 'Hidratación forzada si el cálculo es pequeño', 'Colado de orina para recuperar cálculo']
  },
  {
    id: 'irc',
    name: 'Insuficiencia Renal Crónica (IRC)',
    system: 'Renal',
    definition: 'Disminución persistente de la función renal filtrante por más de 3 meses.',
    affectedTarget: 'Riñón global (Nefronas)',
    symptoms: ['Hipertensión', 'Anemia', 'Prurito urémico', 'Fatiga'],
    nursingCare: ['Educación sobre dieta hipoproteica/hiposódica', 'Cuidado de acceso vascular para diálisis', 'Control de potasio y fósforo']
  },
  {
    id: 'hipotiroidismo',
    name: 'Hipotiroidismo',
    system: 'Endocrino',
    definition: 'Deficiencia de hormonas tiroideas.',
    affectedTarget: 'Metabolismo sistémico',
    symptoms: ['Intolerancia al frío', 'Estreñimiento', 'Bradipsiquia', 'Mixedema'],
    nursingCare: ['Administración de Levotiroxina en ayunas', 'Prevención del estreñimiento', 'Vigilar signos de coma mixedematoso']
  },
  {
    id: 'hipertiroidismo',
    name: 'Hipertiroidismo',
    system: 'Endocrino',
    definition: 'Exceso de producción de hormonas tiroideas.',
    affectedTarget: 'Metabolismo sistémico',
    symptoms: ['Exoftalmos (en Graves)', 'Taquicardia', 'Pérdida de peso', 'Insomnio'],
    nursingCare: ['Control de la frecuencia cardíaca', 'Proteger córneas si hay exoftalmos', 'Ambiente tranquilo y fresco']
  },
  {
    id: 'addison',
    name: 'Enfermedad de Addison',
    system: 'Endocrino',
    definition: 'Insuficiencia suprarrenal primaria.',
    affectedTarget: 'Corteza Suprarrenal',
    symptoms: ['Hiperpigmentación cutánea', 'Hipotensión ortostática', 'Deseo de sal', 'Fatiga'],
    nursingCare: ['Administración de corticoides', 'Vigilancia de signos de crisis addisoniana', 'Manejo del estrés']
  },
  {
    id: 'cushing',
    name: 'Síndrome de Cushing',
    system: 'Endocrino',
    definition: 'Exposición prolongada a niveles elevados de glucocorticoides.',
    affectedTarget: 'Metabolismo de grasas y proteínas',
    symptoms: ['Cara de luna llena', 'Giba dorsal', 'Estrías purpúreas en abdomen', 'Obesidad central'],
    nursingCare: ['Prevención de infecciones (inmunosupresión)', 'Monitoreo de glucemia y PA', 'Cuidado de la integridad cutánea']
  },
  {
    id: 'diabes_ins',
    name: 'Diabetes Insípida',
    system: 'Endocrino',
    definition: 'Déficit de ADH o resistencia a su acción.',
    affectedTarget: 'Túbulos colectores renales',
    symptoms: ['Poliuria masiva (orina diluida)', 'Polidipsia intensa', 'Signos de deshidratación'],
    nursingCare: ['Balance hídrico estricto', 'Administración de Desmopresina', 'Vigilancia de hipernatremia']
  },
  {
    id: 'sepsis',
    name: 'Sepsis / Choque Séptico',
    system: 'Infeccioso',
    definition: 'Disfunción orgánica potencialmente mortal causada por una respuesta desregulada a la infección.',
    affectedTarget: 'Sistémico (Múltiples órganos)',
    symptoms: ['Hipotensión que no responde a volumen', 'Fiebre o hipotermia', 'Taquicardia', 'Lactato > 2 mmol/L'],
    nursingCare: ['Administración rápida de cristaloides y antibióticos', 'Toma de hemocultivos', 'Monitoreo dinámico del gasto cardíaco']
  },
  {
    id: 'vih',
    name: 'VIH / SIDA',
    abbreviation: 'VIH',
    system: 'Infeccioso',
    definition: 'Infección por el virus de la inmunodeficiencia humana.',
    affectedTarget: 'Linfocitos T CD4+',
    symptoms: ['Infecciones oportunistas', 'Pérdida de peso', 'Linfadenopatías', 'Diarrea crónica'],
    nursingCare: ['Educación sobre tratamiento antirretroviral (TAR)', 'Precauciones estándar', 'Apoyo integral biopsicosocial']
  },
  {
    id: 'malaria',
    name: 'Malaria',
    system: 'Infeccioso',
    definition: 'Infección parasitaria por Plasmodium trasmitida por mosquitos.',
    affectedTarget: 'Eritrocitos e Hígado',
    symptoms: ['Paroxismos febriles (escalofríos, fiebre, sudor)', 'Anemia', 'Esplenomegalia'],
    nursingCare: ['Control de la curva térmica', 'Vigilancia de signos de malaria cerebral', 'Administración de antimaláricos']
  },
  {
    id: 'dengue',
    name: 'Dengue Grave',
    system: 'Infeccioso',
    definition: 'Infección viral transmitida por Aedes aegypti con fuga plasmática.',
    affectedTarget: 'Endotelio vascular y Plaquetas',
    symptoms: ['Dolor retroocular', 'Petequias', 'Hemorragias', 'Dolor abdominal intenso'],
    nursingCare: ['Reposo y toldillo', 'Evitar AINEs (preferir Paracetamol)', 'Balance hídrico riguroso']
  },
  {
    id: 'leptospira',
    name: 'Leptospirosis',
    system: 'Infeccioso',
    definition: 'Zoonosis causada por espiroquetas tras contacto con orina animal.',
    affectedTarget: 'Hígado y Riñón principalmente (Weil)',
    symptoms: ['Sufusión conjuntival', 'Ictericia', 'Mialgias intensas (pantorrillas)', 'Fiebre'],
    nursingCare: ['Control de función renal', 'Manejo de la hidratación', 'Administración de penicilina o doxiciclina']
  },
  {
    id: 'varicela',
    name: 'Varicela',
    system: 'Infeccioso',
    definition: 'Infección primaria por virus de varicela-zóster.',
    affectedTarget: 'Piel y Mucosas',
    symptoms: ['Exantema maculopapular-vesicular-costra (cielo estrellado)', 'Prurito intenso', 'Fiebre'],
    nursingCare: ['Aislamiento respiratorio y de contacto', 'Cuidado de la piel para evitar sobreinfección', 'Corte de uñas']
  },
  {
    id: 'herpes_z',
    name: 'Herpes Zóster',
    system: 'Infeccioso',
    definition: 'Reactivación del virus varicela-zóster en ganglios dorsales.',
    affectedTarget: 'Dermatoma específico',
    symptoms: ['Dolor neuropático intenso', 'Vesículas en racimo siguiendo un trayecto nervioso'],
    nursingCare: ['Manejo del dolor neuropático', 'Administración de antivirales (Aciclovir)', 'Cuidado de las lesiones']
  },
  {
    id: 'anemia_f',
    name: 'Anemia Ferropénica',
    system: 'Hematológico',
    definition: 'Disminución de hemoglobina por deficiencia de hierro.',
    affectedTarget: 'Eritrocitos',
    symptoms: ['Palidez', 'Astenia', 'Pica', 'Coiloniquia (uñas en cuchara)'],
    nursingCare: ['Administración de hierro oral (con Vit C)', 'Educación nutricional', 'Control de efectos GI del hierro']
  },
  {
    id: 'leucemia',
    name: 'Leucemia Linfoide Aguda',
    system: 'Hematológico',
    definition: 'Neoplasia de precursores linfoides en médula ósea.',
    affectedTarget: 'Médula Ósea y Sangre periférica',
    symptoms: ['Fiebre', 'Hemorragias (trombocitopenia)', 'Dolor óseo', 'Adenopatías'],
    nursingCare: ['Manejo del paciente neutropénico (aislamiento)', 'Prevención de mucositis', 'Control de hemorragias']
  },
  {
    id: 'PTI',
    name: 'Púrpura Trombocitopénica Idiopática',
    system: 'Hematológico',
    definition: 'Destrucción autoinmune de plaquetas.',
    affectedTarget: 'Plaquetas',
    symptoms: ['Equimosis y Petequias', 'Epistaxis', 'Gingivorragia'],
    nursingCare: ['Evitar punciones intramusculares', 'Reposo relativo para evitar traumatismos', 'Vigilar signos de sangrado en SNC']
  },
  {
    id: 'les',
    name: 'Lupus Eritematoso Sistémico',
    abbreviation: 'LES',
    system: 'Inmunológico',
    definition: 'Enfermedad autoinmune multisistémica crónica.',
    affectedTarget: 'Articulaciones, Piel, Riñón, Corazón',
    symptoms: ['Eritema malar (alas de mariposa)', 'Artralgia', 'Fotosensibilidad', 'Lupus discoide'],
    nursingCare: ['Proteger de la luz solar', 'Monitoreo de función renal (proteinuria)', 'Fomentar el cumplimiento del tratamiento con corticoides']
  },
  {
    id: 'ar',
    name: 'Artritis Reumatoide',
    abbreviation: 'AR',
    system: 'Inmunológico',
    definition: 'Enfermedad inflamatoria crónica autoinmune de las sinoviales.',
    affectedTarget: 'Articulaciones diartrodiales (Sinovial)',
    symptoms: ['Rigidez matutina prolongada', 'Dolor articular simétrico', 'Deformidades articulares'],
    nursingCare: ['Ejercicios de amplitud de movimiento', 'Control del dolor', 'Calor local para mejorar rigidez']
  },
  {
    id: 'stevens',
    name: 'Síndrome de Stevens-Johnson',
    system: 'Dermatológico',
    definition: 'Reacción de hipersensibilidad severa que afecta piel y mucosas.',
    affectedTarget: 'Epidermis',
    symptoms: ['Desprendimiento epidérmico (<10%)', 'Ampollas hemorrágicas', 'Afectación mucosa ocular/oral'],
    nursingCare: ['Manejo como paciente quemado', 'Control estricto de infecciones', 'Higiene bucal suave y colirios']
  },
  {
    id: 'gota',
    name: 'Gota (Artritis Gotosa)',
    system: 'Metabólico',
    definition: 'Depósito de cristales de urato monosódico en articulaciones.',
    affectedTarget: 'Articulaciones (primera metatarsofalángica)',
    symptoms: ['Dolor articular súbito e insoportable (Podagra)', 'Tofos (depósitos crónicos)', 'Eritema local'],
    nursingCare: ['Reposo y elevación de la extremidad', 'Restricción de purinas en dieta', 'Hidratación abundante']
  },
  {
    id: 'osteoporosis',
    name: 'Osteoporosis',
    system: 'Musculoesquelético',
    definition: 'Densidad mineral ósea disminuida con alteración de la microarquitectura.',
    affectedTarget: 'Tejido óseo',
    symptoms: ['Fracturas por fragilidad', 'Pérdida de estatura', 'Xifosis dorsal'],
    nursingCare: ['Prevención de caídas en el hogar', 'Suplementación de Calcio y Vitamina D', 'Ejercicios de bajo impacto']
  },
  {
    id: 'rabdo',
    name: 'Rabdomiólisis',
    system: 'Musculoesquelético',
    definition: 'Descomposición del tejido muscular con liberación de mioglobina.',
    affectedTarget: 'Músculos esqueléticos y Riñones (por toxicidad)',
    symptoms: ['Mialgias', 'Debilidad muscular', 'Orinas color oscura (mioglobinuria)'],
    nursingCare: ['Hidratación agresiva IV', 'Control de CPA y niveles de electrolitos', 'Vigilancia de insuficiencia renal']
  },
  {
    id: 'fibro',
    name: 'Fibromialgia',
    system: 'Musculoesquelético',
    definition: 'Síndrome de dolor musculoesquelético generalizado crónico.',
    affectedTarget: 'Procesamiento central del dolor',
    symptoms: ['Dolor en puntos gatillo', 'Fatiga crónica', 'Trastornos del sueño', 'Colon irritable'],
    nursingCare: ['Manejo del dolor con terapia multimodal', 'Apoyo psicológico (TCC)', 'Fomentar actividad física gradual']
  },
  {
    id: 'oa',
    name: 'Osteoartritis',
    abbreviation: 'OA',
    system: 'Musculoesquelético',
    definition: 'Degeneración del cartílago articular.',
    affectedTarget: 'Cartílago hialino articular',
    symptoms: ['Dolor mecánico (empeora con movimiento)', 'Crepitación articular', 'Nódulos de Heberden'],
    nursingCare: ['Manejo del peso corporal', 'Analgesia tópica/sistémica', 'Ayudas mecánicas para la marcha']
  },
  {
    id: 'asco',
    name: 'Ascitis',
    system: 'Digestivo',
    definition: 'Acumulación de líquido seroso en la cavidad peritoneal.',
    affectedTarget: 'Cavidad Peritoneal',
    symptoms: ['Aumento del perímetro abdominal', 'Oleada ascítica positiva', 'Eversión del ombligo'],
    nursingCare: ['Balance hídrico', 'Medición diaria del perímetro abdominal', 'Control de electrolitos (Sodio)']
  },
  {
    id: 'celulitis',
    name: 'Celulitis Infecciosa',
    system: 'Infectioso',
    definition: 'Infección bacteriana aguda de la dermis profunda y tejido subcutáneo.',
    affectedTarget: 'Dermis profunda',
    symptoms: ['Eritema mal definido', 'Calor local', 'Edema', 'Linfangitis'],
    nursingCare: ['Elevación de la zona afectada', 'Administración de antibióticos', 'Marcar el borde del eritema para monitoreo']
  },
  {
    id: 'absceso_cut',
    name: 'Absceso Cutáneo',
    system: 'Dermatológico',
    definition: 'Acumulación localizada de pus en la piel.',
    affectedTarget: 'Tejido subcutáneo/Dermis',
    symptoms: ['Nódulo doloroso fluctuante', 'Eritema', 'Calor'],
    nursingCare: ['Asistencia en el drenaje quirúrgico', 'Cambios de apósitos', 'Control del dolor local']
  },
  {
    id: 'faringitis',
    name: 'Faringoamigdalitis Aguda',
    system: 'Respiratorio',
    definition: 'Inflamación de las amígdalas y faringe, usualmente viral o bacteriana.',
    affectedTarget: 'Faringe y Amígdalas',
    symptoms: ['Odinofagia', 'Adenopatías cervicales', 'Exudado pultáceo (si es bacteriana)'],
    nursingCare: ['Gargarismos salinos', 'Control de la fiebre', 'Asegurar ingesta de líquidos']
  },
  {
    id: 'sinusitis',
    name: 'Sinusitis Aguda',
    system: 'Respiratorio',
    definition: 'Inflamación de la mucosa de los senos paranasales.',
    affectedTarget: 'Senos Paranasales (Maxilar, Frontal)',
    symptoms: ['Dolor facial que empeora al inclinarse', 'Rinorrea purulenta', 'Anosmia'],
    nursingCare: ['Lavados nasales', 'Hidratación', 'Control del dolor']
  },
  {
    id: 'otitis',
    name: 'Otitis Media Aguda',
    system: 'Infectioso',
    definition: 'Infección del oído medio.',
    affectedTarget: 'Oído Medio',
    symptoms: ['Otalgia intensa', 'Hipoacusia', 'Iritabilidad (en niños)', 'Fiebre'],
    nursingCare: ['Prevención de entrada de agua en el oído', 'Manejo de la temperatura', 'Uso de analgésicos']
  },
  {
    id: 'cistitis',
    name: 'Cistitis Aguda',
    system: 'Renal',
    definition: 'Infección urinaria baja localizada en la vejiga.',
    affectedTarget: 'Vejiga Urinaria',
    symptoms: ['Disuria', 'Polaquiuria', 'Tenesmo vesical', 'Dolor suprapúbico'],
    nursingCare: ['Fomentar ingesta hídrica abundante', 'Educación sobre técnica de higiene perineal', 'Administración de antisépticos urinarios']
  },
  {
    id: 'prostatitis',
    name: 'Prostatitis Aguda',
    system: 'Genitourinario',
    definition: 'Inflamación infecciosa de la próstata.',
    affectedTarget: 'Próstata',
    symptoms: ['Dolor perineal', 'Disuria', 'Fiebre', 'Obstrucción urinaria parcial'],
    nursingCare: ['Control de la diuresis', 'Manejo de la fiebre', 'Prevención del estreñimiento']
  },
  {
    id: 'orquitis',
    name: 'Orquiepididimitis',
    system: 'Genitourinario',
    definition: 'Inflamación del epidídimo y testículo.',
    affectedTarget: 'Testículo y Epidídimo',
    symptoms: ['Edema testicular unilateral', 'Dolor intenso', 'Fiebre', 'Reflejo cremastérico (usualmente presente)'],
    nursingCare: ['Soporte escrotal', 'Reposo', 'Aplicación de frío local']
  },
  {
    id: 'osteomielitis',
    name: 'Osteomielitis',
    system: 'Infeccioso',
    definition: 'Infección del hueso y médula ósea.',
    affectedTarget: 'Tejido óseo',
    symptoms: ['Dolor óseo profundo', 'Eritema sobre el hueso', 'Fiebre héctica'],
    nursingCare: ['Tratamiento antibiótico IV prolongado', 'Inmovilización de la extremidad', 'Manejo de la herida quirúrgica']
  },
  {
    id: 'mononucleosis',
    name: 'Mononucleosis Infecciosa',
    system: 'Infeccioso',
    definition: 'Infección por el virus de Epstein-Barr.',
    affectedTarget: 'Linfocitos B y tejido linfoide',
    symptoms: ['Fiebre', 'Faringitis severa', 'Adenopatías generalizadas', 'Esplenomegalia'],
    nursingCare: ['Reposo absoluto (evitar ruptura esplénica)', 'Hidratación', 'Control del dolor']
  },
  {
    id: 'psoriasis',
    name: 'Psoriasis',
    system: 'Inmunológico/Dermatológico',
    definition: 'Enfermedad inflamatoria crónica de la piel de origen autoinmune.',
    affectedTarget: 'Queratinocitos (recambio acelerado)',
    symptoms: ['Placas eritematosas con escamas plateadas', 'Prurito', 'Engrosamiento ungueal'],
    nursingCare: ['Hidratación constante de la piel', 'Educación sobre exposición solar controlada', 'Apoyo emocional por afectación de autoimagen']
  },
  {
    id: 'eczema',
    name: 'Dermatitis Atópica (Eczema)',
    system: 'Dermatológico',
    definition: 'Trastorno cutáneo inflamatorio crónico y recurrente.',
    affectedTarget: 'Barrera cutánea (Epidermis)',
    symptoms: ['Xerosis (piel seca)', 'Prurito intenso', 'Exudado y costras en brotes'],
    nursingCare: ['Uso de jabones neutros (syndet)', 'Baños cortos con agua tibia', 'Aplicación inmediata de emolientes']
  },
  {
    id: 'escabiosis',
    name: 'Escabiosis (Sarna)',
    system: 'Infectioso/Dermatológico',
    definition: 'Infestación cutánea por el ácaro Sarcoptes scabiei.',
    affectedTarget: 'Estrato córneo de la epidermis',
    symptoms: ['Prurito nocturno intenso', 'Surcos acarinos', 'Pápulas en pliegues'],
    nursingCare: ['Tratamiento familiar simultáneo', 'Lavado de ropa con agua caliente', 'Aplicación de permetrina del cuello hacia abajo']
  },
  {
    id: 'melanoma',
    name: 'Melanoma Maligno',
    system: 'Oncológico/Dermatológico',
    definition: 'Cáncer de piel derivado de los melanocitos.',
    affectedTarget: 'Melanocitos',
    symptoms: ['Lesión pigmentada con asimetría, bordes irregulares, color variado y diámetro > 6mm'],
    nursingCare: ['Educación sobre el ABCDE de los lunares', 'Fomento del uso de protector solar', 'Seguimiento post-quirúrgico']
  },
  {
    id: 'pid',
    name: 'Enfermedad Inflamatoria Pélvica',
    abbreviation: 'EIP',
    system: 'Ginecológico',
    definition: 'Infección ascendente del tracto genital superior femenino.',
    affectedTarget: 'Endometrio, trompas de falopio, ovarios',
    symptoms: ['Dolor abdominal bajo', 'Dispareunia', 'Leucorrea fétida', 'Fiebre'],
    nursingCare: ['Administración de antibióticos de amplio espectro', 'Reposo en posición de Fowler', 'Educación sobre salud sexual y tratamiento a la pareja']
  },
  {
    id: 'ectopico',
    name: 'Embarazo Ectópico',
    system: 'Ginecológico/Obstétrico',
    definition: 'Implantación del óvulo fecundado fuera de la cavidad uterina.',
    affectedTarget: 'Trompas de Falopio (95%)',
    symptoms: ['Dolor pélvico agudo unilateral', 'Sangrado vaginal escaso', 'Signos de shock (si hay rotura)'],
    nursingCare: ['Monitorización hemodinámica estricta', 'Preparación para cirugía de urgencia', 'Control de niveles de Beta-hCG']
  },
  {
    id: 'preeclampsia',
    name: 'Preeclampsia',
    system: 'Obstétrico',
    definition: 'Síndrome multisistémico caracterizado por hipertensión y proteinuria después de las 20 semanas.',
    affectedTarget: 'Endotelio vascular materno y Placenta',
    symptoms: ['TA > 140/90', 'Edema facial y de manos', 'Cefalea', 'Acúfenos/Tinnitus'],
    nursingCare: ['Control estricto de la presión arterial', 'Vigilancia de reflejos osteotendinosos', 'Administración de Sulfato de Magnesio (profilaxis convulsiva)']
  },
  {
    id: 'eclampsia',
    name: 'Eclampsia',
    system: 'Obstétrico (Emergencia)',
    definition: 'Aparición de convulsiones en una paciente con preeclampsia.',
    affectedTarget: 'Sistema Nervioso Central',
    symptoms: ['Convulsiones tónico-clónicas', 'Coma post-ictal', 'Hipertensión severa'],
    nursingCare: ['Asegurar vía aérea y evitar mordedura de lengua', 'Administración de bolo de Sulfato de Magnesio', 'Preparación para finalización inmediata del embarazo']
  },
  {
    id: 'hellp',
    name: 'Síndrome de HELLP',
    abbreviation: 'HELLP',
    system: 'Obstétrico (Severo)',
    definition: 'Variante de la preeclampsia grave (Hemólisis, Enzimas hepáticas elevadas, Plaquetas bajas).',
    affectedTarget: 'Sístema hematológico e Hígado',
    symptoms: ['Dolor en epigastrio o hipocondrio derecho', 'Malestar general', 'Ictericia'],
    nursingCare: ['Control de pruebas de función hepática y plaquetas', 'Monitoreo de sangrados', 'Soporte hemodinámico']
  },
  {
    id: 'placenta_p',
    name: 'Placenta Previa',
    system: 'Obstétrico',
    definition: 'Implantación de la placenta en el segmento uterino inferior, cubriendo el orificio cervical.',
    affectedTarget: 'Útero / Únion feto-materna',
    symptoms: ['Sangrado vaginal rojo rutilante, indoloro y espontáneo'],
    nursingCare: ['Reposo absoluto', 'Prohibición estricta de tacto vaginal', 'Monitorización fetal continua']
  },
  {
    id: 'abruptio',
    name: 'Desprendimiento Prematuro de Placenta (Abruptio)',
    system: 'Obstétrico (Emergencia)',
    definition: 'Separación parcial o total de la placenta normoinserta antes del parto.',
    affectedTarget: 'Placenta',
    symptoms: ['Sangrado oscuro', 'Dolor abdominal intenso (útero leñoso)', 'Sufrimiento fetal agudo'],
    nursingCare: ['Monitorización materna y fetal urgente', 'Canalización de dos vías venosas de grueso calibre', 'Preparación para cesárea de emergencia']
  },
  {
    id: 'mastitis',
    name: 'Mastitis Puerperal',
    system: 'Ginecológico',
    definition: 'Inflamación/infección del tejido mamario durante la lactancia.',
    affectedTarget: 'Glándula mamaria',
    symptoms: ['Dolor, calor y eritema en un cuadrante de la mama', 'Fiebre', 'Malestar general'],
    nursingCare: ['Fomentar el vaciamiento frecuente de la mama (no suspender lactancia)', 'Compresas tibias antes de la toma', 'Antibioticoterapia']
  },
  {
    id: 'sop',
    name: 'Síndrome de Ovario Poliquístico',
    abbreviation: 'SOP',
    system: 'Endocrino/Ginecológico',
    definition: 'Disfunción endocrino-metabólica caracterizada por hiperandrogenismo y anovulación.',
    affectedTarget: 'Ovarios y Eje Hipotálamo-Hipófisis',
    symptoms: ['Hirsutismo', 'Acné', 'Irregularidades menstruales', 'Resistencia a la insulina'],
    nursingCare: ['Educación sobre hábitos de vida saludables', 'Apoyo emocional', 'Control de glucemia']
  },
  {
    id: 'endometriosis',
    name: 'Endometriosis',
    system: 'Ginecológico',
    definition: 'Presencia de tejido endometrial fuera de la cavidad uterina.',
    affectedTarget: 'Peritoneo pélvico, Ovarios',
    symptoms: ['Dismenorrea severa', 'Dolor pélvico crónico', 'Infertilidad', 'Dispareunia'],
    nursingCare: ['Manejo del dolor crónico', 'Asistencia en el tratamiento hormonal', 'Soporte en aspectos de fertilidad']
  },
  {
    id: 'hpb',
    name: 'Hiperplasia Prostática Benigna',
    abbreviation: 'HPB',
    system: 'Urológico',
    definition: 'Crecimiento no canceroso de la glándula prostática.',
    affectedTarget: 'Próstata (zona de transición)',
    symptoms: ['Disminución del chorro urinario', 'Nicturia', 'Polaquiuria', 'Goteo post-miccional'],
    nursingCare: ['Control de la diuresis', 'Educación sobre restricción de líquidos nocturnos', 'Cuidados si se requiere sondaje vesical']
  },
  {
    id: 'varicocele',
    name: 'Varicocele',
    system: 'Genitourinario',
    definition: 'Dilatación varicosa de las venas del plexo pampiniforme del cordón espermático.',
    affectedTarget: 'Testículo (usualmente izquierdo)',
    symptoms: ['Sensación de pesadez escrotal', 'Venas visibles ("bolsa de gusanos")', 'Infertilidad'],
    nursingCare: ['Soporte escrotal', 'Manejo del dolor post-quirúrgico', 'Educación sobre salud reproductiva']
  },
  {
    id: 'torsion_t',
    name: 'Torsión Testicular',
    system: 'Genitourinario (Urgencia)',
    definition: 'Torsión del cordón espermático que interrumpe el flujo sanguíneo al testículo.',
    affectedTarget: 'Testículo',
    symptoms: ['Dolor testicular súbito e intenso', 'Testículo elevado y horizontalizado', 'Náuseas y vómitos'],
    nursingCare: ['Preparación inmediata para cirugía', 'Ayuno estricto', 'Posicionamiento cómodo del paciente']
  },
  {
    id: 'ataxia_w',
    name: 'Ataxia de Friedreich',
    system: 'Neurológico/Genético',
    definition: 'Enfermedad hereditaria que causa daño progresivo al sistema nervioso.',
    affectedTarget: 'Médula espinal y Nervios periféricos',
    symptoms: ['Dificultad para caminar', 'Pérdida de sensibilidad', 'Escoliosis', 'Cardiopatía'],
    nursingCare: ['Fisioterapia y terapia ocupacional', 'Prevención de caídas', 'Apoyo en la comunicación']
  },
  {
    id: 'neurofibro',
    name: 'Neurofibromatosis Tipo 1',
    system: 'Genético/Dermatológico',
    definition: 'Trastorno genético que causa la formación de tumores en el tejido nervioso.',
    affectedTarget: 'Células de Schwann y Melanocitos (Piel)',
    symptoms: ['Manchas café con leche', 'Neurofibromas cutáneos', 'Nódulos de Lisch en el iris'],
    nursingCare: ['Vigilancia de crecimiento de tumores', 'Apoyo psicológico por desfiguración cutánea', 'Asesoramiento genético']
  },
  {
    id: 'hemofilia_a',
    name: 'Hemofilia A',
    system: 'Hematológico',
    definition: 'Trastorno hemorrágico hereditario por deficiencia del factor VIII.',
    affectedTarget: 'Cascada de coagulación',
    symptoms: ['Hemartrosis (sangrado en articulaciones)', 'Epistaxis prolongada', 'Hemorragias post-traumáticas'],
    nursingCare: ['Administración de Factor VIII', 'Evitar deportes de contacto', 'Cuidado extremo en procedimientos invasivos']
  },
  {
    id: 'fiebre_t',
    name: 'Fiebre Tifoidea',
    system: 'Infeccioso',
    definition: 'Infección sistémica por Salmonella Typhi.',
    affectedTarget: 'Placas de Peyer intestinales y SRE',
    symptoms: ['Fiebre en escalera', 'Roséola tifoidea', 'Bradicardia relativa (Signo de Faget)'],
    nursingCare: ['Aislamiento entérico', 'Vigilar signos de perforación intestinal', 'Dieta blanda']
  },
  {
    id: 'meniere',
    name: 'Enfermedad de Meniere',
    system: 'Otorrinolaringológico',
    definition: 'Trastorno del oído interno caracterizado por hidrops endolinfático.',
    affectedTarget: 'Oído Interno (Laberinto)',
    symptoms: ['Vértigo episódico', 'Tinnitus', 'Hipoacusia fluctuante', 'Plenitud ótica'],
    nursingCare: ['Prevención de caídas durante episodios', 'Dieta hiposódica', 'Evitar cambios bruscos de posición']
  },
  {
    id: ' glaucoma',
    name: 'Glaucoma de Ángulo Abierto',
    system: 'Oftalmológico',
    definition: 'Aumento crónico de la presión intraocular con daño del nervio óptico.',
    affectedTarget: 'Nervio Óptico',
    symptoms: ['Pérdida de visión periférica ("túnel")', 'Asintomático inicialmente'],
    nursingCare: ['Administración de colirios hipotensores', 'Educación sobre técnica de instilación de gotas', 'Controles oftalmológicos']
  },
  {
    id: 'catarata',
    name: 'Catarata',
    system: 'Oftalmológico',
    definition: 'Opacidad del cristalino.',
    affectedTarget: 'Cristalino',
    symptoms: ['Visión borrosa progresiva', 'Dificultad para ver de noche', 'Deslumbramientos'],
    nursingCare: ['Apoyo pre y postoperatorio', 'Administración de gotas antibióticas post cirugía', 'Uso de protector ocular']
  },
  {
    id: 'hemorroides',
    name: 'Hemorroides',
    system: 'Digestivo',
    definition: 'Dilataciones varicosas de las venas del plexo hemorroidal.',
    affectedTarget: 'Canal Anal',
    symptoms: ['Rectorragia brillante al defecar', 'Prolapso', 'Prurito anal'],
    nursingCare: ['Baños de asiento', 'Dieta rica en fibra y abundantes líquidos', 'Uso de pomadas antiinflamatorias']
  },
  {
    id: 'hernia_i',
    name: 'Hernia Inguinal',
    system: 'Digestivo/Muscular',
    definition: 'Protrusión de contenido abdominal a través del conducto inguinal.',
    affectedTarget: 'Canal Inguinal',
    symptoms: ['Masa en región inguinal que aumenta con esfuerzo', 'Dolor leve a severo (si hay encarcelación)'],
    nursingCare: ['Valoración de la reductibilidad de la masa', 'Vigilar signos de estrangulación (dolor, vómito)', 'Preparación quirúrgica']
  },
  {
    id: 'epilepsia_a',
    name: 'Epilepsia Ausencia',
    system: 'Neurológico',
    definition: 'Crisis generalizadas caracterizadas por breves interrupciones de la conciencia.',
    affectedTarget: 'Cerebro global',
    symptoms: ['Mirada fija', 'Pestañeo rápido', 'Interrupción de la actividad sin caída'],
    nursingCare: ['Control de la seguridad del paciente', 'Registro de frecuencia y duración', 'Apoyo escolar/social']
  },
  {
    id: 'herpes_s',
    name: 'Herpes Simple Labial',
    system: 'Infectioso',
    definition: 'Infección por virus herpes simple tipo 1 (VHS-1).',
    affectedTarget: 'Borde de los labios/Mucosa oral',
    symptoms: ['Hormigueo previo', 'Vesículas pequeñas dolorosas', 'Costra'],
    nursingCare: ['No compartir utensilios', 'Aplicación de antivirales tópicos', 'Evitar contacto con las lesiones']
  },
  {
    id: 'tiña_p',
    name: 'Tiña Pedis (Pie de Atleta)',
    system: 'Infectioso/Dermatológico',
    definition: 'Infección fúngica de la piel de los pies.',
    affectedTarget: 'Espacios interdigitales, planta del pie',
    symptoms: ['Eritema', 'Prurito', 'Descamación', 'Mal olor'],
    nursingCare: ['Mantener pies secos', 'Uso de antifúngicos tópicos', 'Uso de calzado ventilado y calcetines de algodón']
  },
  {
    id: 'anemia_p',
    name: 'Anemia Perniciosa',
    system: 'Hematológico',
    definition: 'Deficiencia de vitamina B12 por falta de factor intrínseco.',
    affectedTarget: 'Eritrocitos y Sistema Nervioso',
    symptoms: ['Glositis (lengua roja depapilada)', 'Parestesias', 'Marcha inestable'],
    nursingCare: ['Administración de Cianocobalamina IM de por vida', 'Vigilancia de seguridad por parestesias', 'Dieta adecuada']
  },
  {
    id: 'purpura_h',
    name: 'Púrpura de Henoch-Schönlein',
    system: 'Inmunológico/Vascular',
    definition: 'Vasculitis sistémica de pequeños vasos mediada por IgA.',
    affectedTarget: 'Piel, Articulaciones, GI, Riñón',
    symptoms: ['Púrpura palpable en glúteos/piernas', 'Dolor abdominal', 'Hematuria'],
    nursingCare: ['Monitorización de función renal', 'Manejo del dolor abdominal', 'Reposo en cama']
  },
  {
    id: 'fiebre_r',
    name: 'Fiebre Reumática',
    system: 'Inmunológico/Cardíaco',
    definition: 'Respuesta inmunitaria tardía a faringitis estreptocócica.',
    affectedTarget: 'Corazón (Válvulas), Articulaciones',
    symptoms: ['Carditis', 'Poliartritis migratoria', 'Corea de Sydenham', 'Nódulos subcutáneos'],
    nursingCare: ['Administración de Penicilina benzatínica', 'Reposo en cama si hay carditis', 'Control del dolor articular']
  },
  {
    id: 'sind_down',
    name: 'Síndrome de Down',
    system: 'Genético',
    definition: 'Trastorno genético por trisomía del par 21.',
    affectedTarget: 'Desarrollo multisistémico',
    symptoms: ['Hipotonía muscular', 'Rasgos faciales característicos', 'Cardiopatías frecuentes'],
    nursingCare: ['Estimulación temprana', 'Control cardiológico y tiroideo frecuente', 'Fomento de la autonomía']
  },
  {
    id: 'hipoti_con',
    name: 'Hipotiroidismo Congénito',
    system: 'Endocrino (Pediátrico)',
    definition: 'Déficit de hormona tiroidea desde el nacimiento.',
    affectedTarget: 'Desarrollo metabólico y cerebral',
    symptoms: ['Ictericia prolongada', 'Macroglosia', 'Hernia umbilical', 'Estreñimiento'],
    nursingCare: ['Tamizaje neonatal', 'Inicio inmediato de Levotiroxina', 'Control del crecimiento']
  },
  {
    id: 'bronc_ped',
    name: 'Bronquiolitis',
    system: 'Respiratorio (Pediátrico)',
    definition: 'Primer episodio de sibilancias precedido de rinitis en lactantes.',
    affectedTarget: 'Vías respiratorias pequeñas (Bronquiolos)',
    symptoms: ['Dificultad respiratoria (tirajes)', 'Sibilancias', 'Rechazo a la alimentación'],
    nursingCare: ['Aspiración de secreciones nasales', 'Posición de semifowler', 'Monitoreo de SatO2 y FR']
  },
  {
    id: 'cancer_p',
    name: 'Cáncer de Pulmón (CPCNP)',
    system: 'Oncológico',
    definition: 'Neoplasia maligna de células epiliales del pulmón.',
    affectedTarget: 'Parénquima pulmonar/Bronquios',
    symptoms: ['Tos con hemoptisis', 'Dolor torácico', 'Pérdida de peso', 'Pancoast (síndrome)'],
    nursingCare: ['Manejo de la disnea', 'Control del dolor crónico', 'Cuidados del paciente en quimioterapia/radioterapia']
  },
  {
    id: 'hepatitis_a',
    name: 'Hepatitis A',
    system: 'Infectioso',
    definition: 'Inflamación hepática viral autolimitada trasmitida vía fecal-oral.',
    affectedTarget: 'Hepatocitos',
    symptoms: ['Ictericia', 'Coluria', 'Acolia', 'Fiebre y náuseas'],
    nursingCare: ['Aislamiento entérico', 'Reposo y dieta baja en grasas', 'Higiene estricta']
  },
  {
    id: 'fascitis',
    name: 'Fascitis Necrosante',
    system: 'Infectioso (Emergencia)',
    definition: 'Infección bacteriana rápida y destructiva de la fascia.',
    affectedTarget: 'Fascia muscular y tejido subcutáneo',
    symptoms: ['Dolor desproporcionado a la lesión visible', 'Criptación', 'Necrosis dérmica violácea'],
    nursingCare: ['Preparación para desbridamiento quirúrgico inmediato', 'Manejo de antibióticos de amplio espectro', 'Soporte hemodinámico']
  },
  {
    id: 'rabia',
    name: 'Rabia Humana',
    system: 'Infectioso/Neurológico',
    definition: 'Encefalitis viral aguda transmitida por mordedura animal.',
    affectedTarget: 'SNC (Cerebro)',
    symptoms: ['Hidrofobia', 'Aerofobia', 'Espasmos musculares', 'Iritabilidad extrema'],
    nursingCare: ['Lavado profuso de la herida con agua y jabón', 'Administración de vacuna/inmunoglobulina post-exposición', 'Aislamiento en habitación tranquila']
  },
  {
    id: 'lepra',
    name: 'Enfermedad de Hansen (Lepra)',
    system: 'Infectioso',
    definition: 'Infección crónica por Mycobacterium leprae.',
    affectedTarget: 'Piel y Nervios Periféricos',
    symptoms: ['Manchas hipocrómicas anestésicas', 'Engrosamiento nervioso', 'Deformidades'],
    nursingCare: ['Administración de poliquimioterapia (PQT)', 'Cuidado de pies/manos anestésicos', 'Lucha contra el estigma']
  },
  {
    id: 'mal_altura',
    name: 'Mal de Montaña (Soroche)',
    system: 'Ambiental',
    definition: 'Hipoxia hipobárica por ascenso rápido a altitudes elevadas.',
    affectedTarget: 'Oxigenación sistémica',
    symptoms: ['Cefalea', 'Mareos', 'Náuseas', 'Dificultad física'],
    nursingCare: ['Descenso si los síntomas son graves', 'Oxigenoterapia', 'Hidratación y reposo']
  },
  {
    id: 'golpe_calor',
    name: 'Golpe de Calor',
    system: 'Ambiental',
    definition: 'Falla de la termorregulación por exposición a calor extremo.',
    affectedTarget: 'Sistema nervioso central/Termorregulación',
    symptoms: ['Temperatura > 40°C', 'Piel seca y caliente', 'Confusión/Coma'],
    nursingCare: ['Enfriamiento rápido (hielo, mantas frías)', 'Hidratación IV con sueros frescos', 'Monitoreo de la temperatura central']
  },
  {
    id: 'ict-hem',
    name: 'Ictus Hemorrágico',
    system: 'Neurológico',
    definition: 'Ruptura de un vaso sanguíneo cerebral con formación de hematoma.',
    affectedTarget: 'Tejido cerebral/Parénquima',
    symptoms: ['Cefalea súbita intensa', 'Vómitos en proyectil', 'Deterioro rápido de conciencia', 'Déficit focal'],
    nursingCare: ['Cabecera a 30°', 'Control estricto de PA (objetivo <140/90)', 'Manejo de la temperatura y glucemia']
  },
  {
    id: 'aneu-dis',
    name: 'Disección Aórtica',
    system: 'Cardiovascular',
    definition: 'Desgarro de la íntima de la aorta que permite la entrada de sangre entre las capas vasculares.',
    affectedTarget: 'Aorta (Torácica/Abdominal)',
    symptoms: ['Dolor lacerante irradiado a espalda', 'Diferencia de pulsos entre extremidades', 'Soplo aórtico nuevo'],
    nursingCare: ['Disminuir FC y PA inmediatamente (Betabloqueantes IV)', 'Acceso venoso bilateral', 'Reposo absoluto']
  },
  {
    id: 'pancreatitis-a',
    name: 'Pancreatitis Aguda',
    system: 'Digestivo',
    definition: 'Inflamación súbita del páncreas con autodigestión enzimática.',
    affectedTarget: 'Páncreas',
    symptoms: ['Dolor epigástrico en cinturón', 'Náuseas y vómitos tenaces', 'Signos de Cullen/Grey-Turner (si hemorrágica)'],
    nursingCare: ['NPO absoluto', 'Hidratación agresiva con cristaloides', 'Control del dolor intenso', 'Monitoreo de la diuresis']
  },
  {
    id: 'obstruccion-i',
    name: 'Obstrucción Intestinal',
    system: 'Digestivo',
    definition: 'Interrupción del tránsito de heces y gases.',
    affectedTarget: 'Intestino Delgado / Colon',
    symptoms: ['Vómitos fecaloideos', 'Distensión abdominal', 'Ausencia de expulsión de gases'],
    nursingCare: ['Colocación de SNG a succión libre', 'Balance hídrico riguroso', 'Monitoreo de ruidos hidroaéreos']
  },
  {
    id: 'falla-h-a',
    name: 'Falla Hepática Aguda',
    system: 'Digestivo',
    definition: 'Pérdida rápida de la función hepática con encefalopatía y coagulopatía.',
    affectedTarget: 'Hígado',
    symptoms: ['Ictericia', 'Asterixis (flapping tremor)', 'Confusión/Coma', 'Hemorragias'],
    nursingCare: ['Control de amonio sérico', 'Protección de vía aérea', 'Evitar fármacos de metabolismo hepático']
  },
  {
    id: 'colecistitis-a',
    name: 'Colecistitis Aguda',
    system: 'Digestivo',
    definition: 'Inflamación de la vesícula biliar, generalmente por cálculos.',
    affectedTarget: 'Vesícula Biliar',
    symptoms: ['Dolor en hipocondrio derecho (Murphy positivo)', 'Fiebre', 'Náuseas'],
    nursingCare: ['Preparación prequirúrgica', 'Antibioticoterapia IV', 'Manejo del dolor y náuseas']
  },
  {
    id: 'asma-ex',
    name: 'Crisis Asmática Severa',
    system: 'Respiratorio',
    definition: 'Broncoconstricción aguda que no responde al tratamiento habitual.',
    affectedTarget: 'Bronquios',
    symptoms: ['Tórax silente (grave)', 'Incapacidad para completar frases', 'Cianosis', 'Agitación'],
    nursingCare: ['Oxígeno húmedo', 'Nebulización continua con Salbutamol/Ipratropio', 'Corticoides IV', 'Preparación para soporte ventilatorio']
  },
  {
    id: 'neumot-t',
    name: 'Neumotórax a Tensión',
    system: 'Respiratorio (Emergencia)',
    definition: 'Acumulación de aire en el espacio pleural con colapso pulmonar y desviación del mediastino.',
    affectedTarget: 'Espacio Pleural / Pulmón',
    symptoms: ['Ausencia de ruidos respiratorios unilateral', 'Ingurgitación yugular', 'Desviación traqueal', 'Hipotensión'],
    nursingCare: ['Asistencia en descompresión con aguja (2do espacio intercostal)', 'Colocación de tubo de tórax', 'Monitoreo hemodinámico']
  },
  {
    id: 'pericard-tam',
    name: 'Taponamiento Cardíaco',
    system: 'Cardiovascular (Emergencia)',
    definition: 'Compresión del corazón por acumulación de líquido en el saco pericárdico.',
    affectedTarget: 'Pericardio',
    symptoms: ['Tríada de Beck (Ruidos cardíacos apagados, Ingurgitación yugular, Hipotensión)', 'Pulso paradójico'],
    nursingCare: ['Preparación para pericardiocentesis', 'Optimización de la precarga (fluidos)', 'Monitoreo de presión venosa central']
  },
  {
    id: 'tep-grave',
    name: 'Tromboembolismo Pulmonar',
    abbreviation: 'TEP',
    system: 'Cardiorrespiratorio',
    definition: 'Oclusión de la arteria pulmonar por un trombo (usualmente de MMII).',
    affectedTarget: 'Arterias Pulmonares',
    symptoms: ['Disnea súbita', 'Dolor pleurítico', 'Hemoptisis', 'Signos de TVP en piernas'],
    nursingCare: ['Reposo absoluto (evitar desprendimiento de más trombos)', 'Oxigenoterapia de alto flujo', 'Inicio de anticoagulación IV']
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
  { name: 'Troponina I', normalRange: '< 0.04', unit: 'ng/mL' },
  
  // Función Hepática
  { name: 'AST (TGO)', normalRange: '5 - 40', unit: 'U/L' },
  { name: 'ALT (TGP)', normalRange: '7 - 56', unit: 'U/L' },
  { name: 'Fosfatasa Alcalina (FA)', normalRange: '44 - 147', unit: 'U/L' },
  { name: 'Bilirrubina Total', normalRange: '0.1 - 1.2', unit: 'mg/dL' },
  { name: 'Bilirrubina Directa', normalRange: '0.0 - 0.3', unit: 'mg/dL' },
  { name: 'Albúmina', normalRange: '3.4 - 5.4', unit: 'g/dL' },
  { name: 'Proteínas Totales', normalRange: '6.0 - 8.3', unit: 'g/dL' },

  // Perfil Lipídico y Otros
  { name: 'Colesterol Total', normalRange: '< 200', unit: 'mg/dL' },
  { name: 'HDL ("Bueno")', normalRange: '> 40 (H) / > 50 (M)', unit: 'mg/dL' },
  { name: 'LDL ("Malo")', normalRange: '< 100', unit: 'mg/dL' },
  { name: 'Triglicéridos', normalRange: '< 150', unit: 'mg/dL' },
  { name: 'Ácido Úrico', normalRange: '2.4 - 7.0', unit: 'mg/dL' },

  // Marcadores de Inflamación y Cardíacos
  { name: 'LDH (Lactato Deshidrogenasa)', normalRange: '140 - 280', unit: 'U/L' },
  { name: 'Amilasa', normalRange: '30 - 110', unit: 'U/L' },
  { name: 'Lipasa', normalRange: '0 - 160', unit: 'U/L' },
  { name: 'Procalcitonina', normalRange: '< 0.1', unit: 'ng/mL' },
  { name: 'Dímero D', normalRange: '< 500', unit: 'ng/FEU' },
  { name: 'CPK Total', normalRange: '26 - 192', unit: 'U/L' },
  { name: 'CPK-MB', normalRange: '< 25', unit: 'U/L' },
  { name: 'NT-proBNP', normalRange: '< 125', unit: 'pg/mL' }
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
  { 
    term: 'Plano Sagital', 
    definition: 'Divide el cuerpo en mitades derecha e izquierda.', 
    category: 'Anatomía',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139ed4bf?auto=format&fit=crop&w=800&q=80'
  },
  { 
    term: 'Plano Coronal', 
    definition: 'Divide el cuerpo en partes anterior (frontal) y posterior (dorsal).', 
    category: 'Anatomía',
    image: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&w=800&q=80'
  },
  { 
    term: 'Caja Torácica', 
    definition: 'Estructura ósea formada por las costillas, esternón y columna vertebral que protege el corazón y pulmones.', 
    category: 'Anatomía',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536b8a?auto=format&fit=crop&w=800&q=80'
  },
  { 
    term: 'Columna Vertebral', 
    definition: 'Estructura formada por 33 vértebras que protege la médula espinal.', 
    category: 'Anatomía',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139ed4bf?auto=format&fit=crop&w=800&q=80'
  },
  { 
    term: 'Posición de Fowler', 
    definition: 'Paciente sentado en la cama con la cabecera elevada a 45°-60°.', 
    category: 'Anatomía',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  { 
    term: 'Posición de Trendelenburg', 
    definition: 'Paciente en decúbito supino con la cabeza más baja que los pies (aprox. 15°-30°).', 
    category: 'Anatomía',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  { term: 'Proximal', definition: 'Cercano al punto de origen o tronco.', category: 'Anatomía' },
  { term: 'Distal', definition: 'Lejano al punto de origen o tronco.', category: 'Anatomía' },
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
  {
    id: 'pharm-11',
    category: 'pharmacology',
    title: 'Intoxicación por Anticolinérgicos',
    patient: 'Femenina de 22 años con piel roja y seca, midriasis, taquicardia y agitación tras ingerir fármacos no identificados.',
    vitals: {
      fc: '135 lpm',
      fr: '24 rpm',
      pa: '145/90 mmHg',
      temp: '38.5 °C',
      sat: '98%'
    },
    scenario: 'Síndrome anticolinérgico: "Rojo como remolacha, seco como hueso, ciego como murciélago y loco como una cabra".',
    treatment: 'Fisostigmina (antídoto) y enfriamiento físico.',
    options: [
      'Fisostigmina',
      'Atropina',
      'Pralidoxima',
      'Naloxona'
    ],
    correctAnswer: 'Fisostigmina',
    care: [
      'Monitorización cardíaca continua (riesgo de arritmias).',
      'Sondaje vesical (riesgo elevado de retención urinaria).',
      'Control de temperatura física.',
      'Ambiente tranquilo para disminuir la agitación.'
    ]
  },
  {
    id: 'pharm-12',
    category: 'pharmacology',
    title: 'Toxicidad por Ácido Acetilsalicílico (Aspirina)',
    patient: 'Masculino de 45 años con tinnitus (zumbido de oídos), hiperventilación y vómitos tras ingesta masiva de aspirina.',
    vitals: {
      fc: '110 lpm',
      fr: '32 rpm',
      pa: '110/70 mmHg',
      temp: '38.2 °C',
      sat: '97%'
    },
    scenario: 'Acidosis metabólica con brecha aniónica elevada y alcalosis respiratoria compensatoria.',
    treatment: 'Alcalinización urinaria con Bicarbonato de Sodio y Hemodiálisis si es necesario.',
    options: [
      'Bicarbonato de Sodio IV',
      'Gluconato de Calcio IV',
      'Cloruro de Potasio IV',
      'Ácido Ascórbico VO'
    ],
    correctAnswer: 'Bicarbonato de Sodio IV',
    care: [
      'Mantener pH urinario entre 7.5 y 8.5.',
      'Vigilar estado neurológico y electrolitos (especialmente potasio).',
      'Asegurar hidratación adecuada.',
      'Monitoreo estricto del estado ácido-base.'
    ]
  },
  {
    id: 'pharm-13',
    category: 'pharmacology',
    title: 'Sobredosis de Heparina No Fraccionada',
    patient: 'Masculino de 62 años en infusión de heparina presenta sangrado activo por sitios de punción y epistaxis severa.',
    vitals: {
      fc: '115 lpm',
      fr: '20 rpm',
      pa: '95/60 mmHg',
      temp: '36.5 °C',
      sat: '95%'
    },
    scenario: 'TTPa (Tiempo de Tromboplastina) prolongado incalculable. Sangrado mayor.',
    treatment: 'Antagonista específico: Sulfato de Protamina (1mg por cada 100 UI de heparina).',
    options: [
      'Sulfato de Protamina',
      'Vitamina K (Fitomenadiona)',
      'Plasma Fresco Congelado',
      'Ácido Tranexámico'
    ],
    correctAnswer: 'Sulfato de Protamina',
    care: [
      'Suspensión inmediata de la infusión de heparina.',
      'Administración lenta de Sulfato de Protamina (riesgo de hipotensión).',
      'Control manual de sitios de sangrado visible.',
      'Vigilar signos de shock hipovolémico.'
    ]
  },
  {
    id: 'pharm-14',
    category: 'pharmacology',
    title: 'Toxicidad por Warfarina',
    patient: 'Femenina de 75 años con equimosis múltiples y hematuria. INR reportado en 8.5.',
    vitals: {
      fc: '95 lpm',
      fr: '18 rpm',
      pa: '130/80 mmHg',
      temp: '36.8 °C',
      sat: '97%'
    },
    scenario: 'Anticoagulación excesiva por dicumarínicos. Riesgo inminente de hemorragia interna.',
    treatment: 'Vitamina K (Fitomenadiona) y Concentrado de Complejo Protrombínico.',
    options: [
      'Vitamina K',
      'Sulfato de Protamina',
      'Ácido Aminocaproico',
      'Desmopresina'
    ],
    correctAnswer: 'Vitamina K',
    care: [
      'Administrar Vitamina K (preferir vía oral si no hay sangrado mayor, o IV lenta).',
      'Evitar inyecciones intramusculares.',
      'Educación sobre dieta y riesgo de sangrado.',
      'Control diario de INR hasta estabilización.'
    ]
  },
  {
    id: 'pharm-15',
    category: 'pharmacology',
    title: 'Extravasación de Agentes Vesicantes (Dopamina)',
    patient: 'Femenina de 80 años con área de palidez y frialdad extrema alrededor del sitio de punción donde infunde Dopamina.',
    vitals: {
      fc: '90 lpm',
      fr: '20 rpm',
      pa: '110/60 mmHg',
      temp: '36.2 °C',
      sat: '99%'
    },
    scenario: 'Isquemia tisular local por vaso-constricción intensa periférica.',
    treatment: 'Fentolamina (bloqueador alfa) infiltrado localmente.',
    options: [
      'Fentolamina local',
      'Nitroprusiato IV',
      'Dexametasona local',
      'Hielo local'
    ],
    correctAnswer: 'Fentolamina local',
    care: [
      'Detener la infusión inmediatamente pero NO retirar el catéter.',
      'Infiltrar el antídoto a través del mismo catéter y de forma subcutánea.',
      'Elevar la extremidad afectada.',
      'Vigilar signos de necrosis tisular.'
    ]
  },
  {
    id: 'pharm-16',
    category: 'pharmacology',
    title: 'Toxicidad por Magnesio (Sulfato de Magnesio)',
    patient: 'Gestante de 32 años con preeclampsia severa presenta pérdida del reflejo rotuliano y somnolencia.',
    vitals: {
      fc: '60 lpm',
      fr: '10 rpm',
      pa: '140/90 mmHg',
      temp: '37.0 °C',
      sat: '92%'
    },
    scenario: 'Hipermagnesemia iatrogénica. Riesgo de paro respiratorio.',
    treatment: 'Antagonista: Gluconato de Calcio 1g IV lento (10 min).',
    options: [
      'Gluconato de Calcio',
      'Sulfato de Protamina',
      'Bicarbonato de Sodio',
      'Furosemida IV'
    ],
    correctAnswer: 'Gluconato de Calcio',
    care: [
      'Suspensión inmediata de la infusión de MgSO4.',
      'Monitoreo continuo de reflejos osteotendinosos y frecuencia respiratoria.',
      'Control de diuresis horaria.',
      'Vigilancia de la saturación de oxígeno.'
    ]
  },
  {
    id: 'pharm-17',
    category: 'pharmacology',
    title: 'Síndrome Serotoninérgico',
    patient: 'Masculino de 30 años con hiperreflexia, clonus, fiebre y agitación tras mezclar Fluoxetina con Tramadol.',
    vitals: {
      fc: '125 lpm',
      fr: '24 rpm',
      pa: '160/95 mmHg',
      temp: '39.4 °C',
      sat: '98%'
    },
    scenario: 'Exceso de actividad serotoninérgica central y periférica.',
    treatment: 'Ciproheptadina (antagonista 5-HT) y soporte hídrico.',
    options: [
      'Ciproheptadina',
      'Dantroleno',
      'Haloperidol',
      'Bromocriptina'
    ],
    correctAnswer: 'Ciproheptadina',
    care: [
      'Control agresivo de la temperatura.',
      'Administración de benzodiacepinas para sedación y rigidez.',
      'Monitorización hemodinámica.',
      'Retirar todos los agentes serotoninérgicos implicados.'
    ]
  },
  {
    id: 'pharm-18',
    category: 'pharmacology',
    title: 'Toxicidad por Isoniazida (Tratamiento TB)',
    patient: 'Femenina de 28 años ingresa con convulsiones tónico-clónicas que no responden a Diazepam.',
    vitals: {
      fc: '110 lpm',
      fr: '20 rpm (postnatal)',
      pa: '120/80 mmHg',
      temp: '37.5 °C',
      sat: '94%'
    },
    scenario: 'Deficiencia inducida de Vitamina B6 tras ingesta masiva de Isoniazida.',
    treatment: 'Piridoxina (Vitamina B6) IV en dosis igual a la de Isoniazida ingerida.',
    options: [
      'Piridoxina (Vit B6)',
      'Tiamina (Vit B1)',
      'Cianocobalamina (Vit B12)',
      'Ácido Fólico'
    ],
    correctAnswer: 'Piridoxina (Vit B6)',
    care: [
      'Mantenimiento de la vía aérea durante la convulsión.',
      'Administración rápida de Piridoxina IV.',
      'Vigilar función hepática.',
      'Realizar balance hídrico.'
    ]
  },
  {
    id: 'pharm-19',
    category: 'pharmacology',
    title: 'Intoxicación por Metanol',
    patient: 'Masculino de 48 años con dolor abdominal, visión borrosa ("como en una tormenta de nieve") y acidosis severa.',
    vitals: {
      fc: '105 lpm',
      fr: '28 rpm',
      pa: '115/75 mmHg',
      temp: '36.8 °C',
      sat: '96%'
    },
    scenario: 'Formación de ácido fórmico tras consumo de alcohol adulterado.',
    treatment: 'Etanol IV o Fomepizol y Hemodiálisis urgente.',
    options: [
      'Etanol o Fomepizol',
      'Bicarbonato de Sodio solo',
      'Gluconato de Calcio',
      'N-acetilcisteína'
    ],
    correctAnswer: 'Etanol o Fomepizol',
    care: [
      'Asegurar ventilación (la acidosis causa bradipnea tardía).',
      'Preparar para hemodiálisis inmediata.',
      'Control de niveles de glucemia.',
      'Mantenimiento de ambiente oscuro por fotofobia.'
    ]
  },
  {
    id: 'pharm-20',
    category: 'pharmacology',
    title: 'Toxicidad por Beta-bloqueadores',
    patient: 'Femenina de 65 años con bradicardia severa, hipotensión y sibilancias tras sobredosis de Propranolol.',
    vitals: {
      fc: '32 lpm',
      fr: '14 rpm',
      pa: '70/40 mmHg',
      temp: '36.0 °C',
      sat: '90%'
    },
    scenario: 'Bloqueo beta-adrenérgico masivo: cronotropismo e inotropismo negativo.',
    treatment: 'Glucagón IV a dosis altas (antídoto de primera línea).',
    options: [
      'Glucagón IV',
      'Atropina 0.5mg IV',
      'Adrenalina 1mg IV',
      'Sulfato de Protamina'
    ],
    correctAnswer: 'Glucagón IV',
    care: [
      'Instalar marcapasos transcutáneo de emergencia.',
      'Monitoreo electrocardiográfico continuo.',
      'Administración de líquidos expansores.',
      'Vigilancia de la glucemia (el glucagón la eleva).'
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
  },
  {
    id: 'path-13',
    category: 'pathology',
    title: 'Colecistitis Aguda',
    patient: 'Femenina de 42 años con dolor intenso en hipocondrio derecho y Murphy positivo.',
    vitals: {
      fc: '108 lpm',
      fr: '20 rpm',
      pa: '130/80 mmHg',
      temp: '38.5 °C',
      sat: '98%'
    },
    scenario: 'Dolor que se intensifica con la inspiración. Antecedente de litiasis biliar.',
    diagnosis: 'Colecistitis Aguda Litiásica.',
    options: [
      'Colecistitis Aguda',
      'Pancreatitis Aguda',
      'Hepatitis Virica',
      'Úlcera Duodenal'
    ],
    correctAnswer: 'Colecistitis Aguda',
    care: [
      'Ayuno absoluto (NPO).',
      'Analgesia y antibióticos IV.',
      'Valoración por cirugía.',
      'Control de curva febril.'
    ]
  },
  {
    id: 'path-14',
    category: 'pathology',
    title: 'Crisis Asmática',
    patient: 'Niño de 8 años con sibilancias audibles a distancia y tiraje intercostal severo.',
    vitals: {
      fc: '125 lpm',
      fr: '36 rpm',
      pa: '100/60 mmHg',
      temp: '37.0 °C',
      sat: '86%'
    },
    scenario: 'Dificultad para completar frases. Silencio auscultatorio en bases.',
    diagnosis: 'Crisis Asmática Severa / Estatus Asmático.',
    options: [
      'Crisis Asmática Severa',
      'Bronquiolitis',
      'Crup Laríngeo',
      'Cuerpo Extraño'
    ],
    correctAnswer: 'Crisis Asmática Severa',
    care: [
      'Oxígeno suplementario inmediato.',
      'Nebulizaciones con Salbutamol y Bromuro de Ipratropio.',
      'Administración de corticoides sistémicos.',
      'Monitoreo de fatiga muscular respiratoria.'
    ]
  },
  {
    id: 'path-15',
    category: 'pathology',
    title: 'Insuficiencia Renal Aguda (IRA)',
    patient: 'Masculino de 50 años con oliguria extrema (100ml de orina en 24h) y edema generalizado.',
    vitals: {
      fc: '95 lpm',
      fr: '22 rpm',
      pa: '160/100 mmHg',
      temp: '36.8 °C',
      sat: '94%'
    },
    scenario: 'Creatinina sérica 4.5 mg/dL, Potasio 6.2 mEq/L tras deshidratación severa.',
    diagnosis: 'Insuficiencia Renal Aguda prerrenal progresando a renal.',
    options: [
      'Insuficiencia Renal Aguda',
      'Glomerulonefritis Crónica',
      'Síndrome Nefrótico',
      'Cistitis Hemorrágica'
    ],
    correctAnswer: 'Insuficiencia Renal Aguda',
    care: [
      'Control estricto de ingesta y excreta de líquidos.',
      'Manejo de la hiperpotasemia (gluconato de calcio, insulina/glucosa).',
      'Dieta hipoproteica e hipocalémica.',
      'Peso diario del paciente.'
    ]
  },
  {
    id: 'path-16',
    category: 'pathology',
    title: 'Coma Mixedematoso',
    patient: 'Femenina de 82 años hallada inconsciente, con piel fría y seca, y bradicardia extrema.',
    vitals: {
      fc: '38 lpm',
      fr: '8 rpm',
      pa: '80/50 mmHg',
      temp: '34.5 °C',
      sat: '88%'
    },
    scenario: 'Hipotiroidismo severo no tratado, edema periorbitario y macroglosia.',
    diagnosis: 'Coma Mixedematoso (Crisis Hipotiroidea).',
    options: [
      'Coma Mixedematoso',
      'Hipotermia accidental',
      'Sobredosis de Opioides',
      'Infarto Cerebral'
    ],
    correctAnswer: 'Coma Mixedematoso',
    care: [
      'Soporte ventilatorio y protección de vía aérea.',
      'Calentamiento pasivo (mantas, evitar calor activo agresivo).',
      'Administración de Levotiroxina e Hidrocortisona IV.',
      'Monitoreo hemodinámico invasivo.'
    ]
  },
  {
    id: 'path-17',
    category: 'pathology',
    title: 'Hemorragia Subaracnoidea (HSA)',
    patient: 'Masculino de 45 años con cefalea súbita definida como "la peor de su vida" y rigidez de nuca.',
    vitals: {
      fc: '62 lpm',
      fr: '16 rpm',
      pa: '170/100 mmHg',
      temp: '37.4 °C',
      sat: '98%'
    },
    scenario: 'Vómitos en proyectil y pérdida momentánea de la conciencia.',
    diagnosis: 'Hemorragia Subaracnoidea por rotura de aneurisma.',
    options: [
      'Hemorragia Subaracnoidea',
      'Meningitis Bacteriana',
      'Cefalea Tensional',
      'Tumor Cerebral'
    ],
    correctAnswer: 'Hemorragia Subaracnoidea',
    care: [
      'Reposo absoluto en cama con cabecera a 30°.',
      'Ambiente tranquilo y oscuro (evitar estímulos).',
      'Control estricto de la PA para evitar resangrado.',
      'Vigilancia de signos de vasoespasmo.'
    ]
  },
  {
    id: 'path-18',
    category: 'pathology',
    title: 'Meningitis Bacteriana',
    patient: 'Niño de 4 años con fiebre alta, exantema purpúrico (petequias) y convulsiones.',
    vitals: {
      fc: '140 lpm',
      fr: '32 rpm',
      pa: '90/55 mmHg',
      temp: '39.8 °C',
      sat: '95%'
    },
    scenario: 'Signos de Brudzinski y Kernig positivos. LCR turbio con hipoglucorraquia.',
    diagnosis: 'Meningitis Meningocócica.',
    options: [
      'Meningitis Bacteriana',
      'Encefalitis Viral',
      'Sepsis de origen urinario',
      'Varicela complicada'
    ],
    correctAnswer: 'Meningitis Bacteriana',
    care: [
      'Aislamiento por gotas/contacto inmediato.',
      'Administración de antibióticos tras punción lumbar.',
      'Manejo de la fiebre y las convulsiones.',
      'Profilaxis a contactos cercanos.'
    ]
  },
  {
    id: 'path-19',
    category: 'pathology',
    title: 'Peritonitis Aguda',
    patient: 'Masculino de 35 años con abdomen en tabla (rigidez muscular), ausencia de ruidos y dolor generalizado.',
    vitals: {
      fc: '118 lpm',
      fr: '26 rpm',
      pa: '100/65 mmHg',
      temp: '39.0 °C',
      sat: '96%'
    },
    scenario: 'Neumoperitoneo en Rx de tórax (aire bajo el diafragma).',
    diagnosis: 'Peritonitis por Perforación de Víscera Hueca.',
    options: [
      'Peritonitis Aguda',
      'Íleo Metabólico',
      'Pancreatitis Aguda grave',
      'Infarto Mesentérico'
    ],
    correctAnswer: 'Peritonitis Aguda',
    care: [
      'Preparación inmediata para cirugía de urgencia.',
      'Colocación de SNG y Sonda Vesical.',
      'Reposición volúmica con cristaloides.',
      'Administración de antibióticos de triple esquema.'
    ]
  },
  {
    id: 'path-20',
    category: 'pathology',
    title: 'Eclampsia',
    patient: 'Gestante de 34 semanas con convulsiones generalizadas y edema severo tras diagnóstico de preeclampsia.',
    vitals: {
      fc: '120 lpm',
      fr: '24 rpm (post-ictal)',
      pa: '180/115 mmHg',
      temp: '37.2 °C',
      sat: '91%'
    },
    scenario: 'Proteinuria masiva y epigastralgia previa a las convulsiones.',
    diagnosis: 'Eclampsia.',
    options: [
      'Eclampsia',
      'Epilepsia Gestacional',
      'Crisis de Pánico',
      'ACV Hemorrágico'
    ],
    correctAnswer: 'Eclampsia',
    care: [
      'Administración de Sulfato de Magnesio (carga y mantenimiento).',
      'Asegurar vía aérea y posición lateral de seguridad.',
      'Control de la presión arterial con hidralazina/labetalol.',
      'Planificación del desembarazo urgente.'
    ]
  },
  {
    id: 'path-21',
    category: 'pathology',
    title: 'Cetoacidosis Diabética (CAD)',
    patient: 'Masculino de 19 años con dolor abdominal, aliento cetósico (frutas) y respiración profunda rápida (Kussmaul).',
    vitals: {
      fc: '125 lpm',
      fr: '30 rpm',
      pa: '95/60 mmHg',
      temp: '37.5 °C',
      sat: '97%'
    },
    scenario: 'Glucemia de 550 mg/dL y presencia de cetonas en orina.',
    diagnosis: 'Cetoacidosis Diabética.',
    options: [
      'Cetoacidosis Diabética',
      'Estado Hiperosmolar',
      'Hipoglucemia Severa',
      'Abdomen Agudo Quirúrgico'
    ],
    correctAnswer: 'Cetoacidosis Diabética',
    care: [
      'Hidratación agresiva con Solución Salina 0.9%.',
      'Administración de Insulina Cristalina en infusión.',
      'Monitoreo estricto de Potasio (evitar hipopotasemia por insulina).',
      'Control horario de glucometría y balance hídrico.'
    ]
  },
  {
    id: 'path-22',
    category: 'pathology',
    title: 'Edema Agudo de Pulmón (EAP)',
    patient: 'Femenina de 68 años con antecedente de ICC. Presenta disnea súbita extrema y expectoración rosada espumosa.',
    vitals: {
      fc: '110 lpm',
      fr: '36 rpm',
      pa: '160/100 mmHg',
      temp: '36.5 °C',
      sat: '84%'
    },
    scenario: 'Estertores crepitantes en ambos campos pulmonares (marea ascendente).',
    diagnosis: 'Edema Agudo de Pulmón Cardiógeno.',
    options: [
      'Edema Agudo de Pulmón',
      'Neumonia Lobar',
      'TEP Masivo',
      'Crisis Asmática'
    ],
    correctAnswer: 'Edema Agudo de Pulmón',
    care: [
      'Posición sentada con piernas declives.',
      'Oxigenoterapia con VMNI (CPAP/BIPAP).',
      'Administración de Furosemida IV y Nitroglicerina.',
      'Sondaje vesical para control de diuresis.'
    ]
  },
  {
    id: 'path-23',
    category: 'pathology',
    title: 'Estado Epiléptico',
    patient: 'Masculino de 25 años con actividad convulsiva tónico-clónica persistente por más de 10 minutos.',
    vitals: {
      fc: '145 lpm',
      fr: '28 rpm',
      pa: '150/95 mmHg',
      temp: '38.5 °C',
      sat: '88%'
    },
    scenario: 'Paciente no recupera la conciencia entre crisis sucesivas.',
    diagnosis: 'Status Epilepticus.',
    options: [
      'Estado Epiléptico',
      'Crisis Convulsiva Simple',
      'Síncope Vasovagal',
      'Ataque de Pánico'
    ],
    correctAnswer: 'Estado Epiléptico',
    care: [
      'Protección contra traumatismos y aspiración.',
      'Administración de Benzodiacepinas (Diazepan/Midazolam).',
      'Inicio de carga de Fenitoína o Levetiracetam IV.',
      'Preparación para inducción de coma barbitúrico si no cede.'
    ]
  }
];
